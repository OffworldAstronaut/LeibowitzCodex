import fs from "fs";
import path from "path";
import crypto from "crypto";
import matter from "gray-matter";
import { marked } from "marked";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, "..");
const BOOKS = path.join(ROOT, "books");
const OUT = path.join(ROOT, "public", "books");
const TEMPLATE = fs.readFileSync(
  path.join(ROOT, "templates", "book.html"),
  "utf8"
);

marked.setOptions({});

/**
 * Recursively collect all file paths under `dir`.
 */
function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name)
    );
}

/**
 * Recursively copy a directory. No-op if `src` doesn't exist.
 */
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    entry.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

/**
 * Escape a string for safe insertion into HTML text content
 * (used for the {{TITLE}} slot, which is not otherwise sanitized).
 */
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Fill a template's {{PLACEHOLDER}} slots with values.
 *
 * IMPORTANT: String.prototype.replace/replaceAll treat their *replacement*
 * argument specially when it's a string — sequences like $$, $&, $1, etc.
 * are interpreted as replacement patterns. Our rendered HTML can easily
 * contain a literal "$$" (from display math like <div>$$x^2$$</div>), and
 * passing that as a string replacement silently collapses "$$" -> "$",
 * corrupting the math delimiters MathJax expects.
 *
 * Passing a *function* as the replacement avoids this entirely, since
 * function replacements are inserted verbatim.
 */
function fillTemplate(template, values) {
  let result = template;
  for (const [key, value] of Object.entries(values)) {
    result = result.replaceAll(`{{${key}}}`, () => value);
  }
  return result;
}

/**
 * Protect $$...$$ (display math) and $...$ (inline math) blocks from being
 * mangled by Markdown parsing (e.g. underscores/asterisks in LaTeX being
 * read as emphasis) by swapping them out for opaque placeholders before
 * marked.parse() runs, then restoring the rendered math afterward.
 *
 * Also skips content inside fenced code blocks (```...```) so that a
 * literal "$$" in a shell heredoc or similar isn't touched.
 */
function protectMath(markdown) {
  const stash = new Map();

  const token = (html) => {
    const key = `MATHSTASH${crypto.randomBytes(8).toString("hex")}END`;
    stash.set(key, html);
    return key;
  };

  // Split out fenced code blocks so we don't touch math-looking text inside them.
  const codeFenceRegex = /```[\s\S]*?```/g;
  const codeBlocks = [];
  let withoutCode = markdown.replace(codeFenceRegex, (block) => {
    const key = `CODEBLOCK${crypto.randomBytes(8).toString("hex")}END`;
    codeBlocks.push([key, block]);
    return key;
  });

  // Display math: $$...$$
  withoutCode = withoutCode.replace(
    /\$\$([\s\S]+?)\$\$/g,
    (_, eq) => `\n${token(`<div class="math-display">$$${eq}$$</div>`)}\n`
  );

  // Inline math: $...$ (avoid matching currency like "$5" by requiring
  // non-whitespace immediately after/before the delimiters)
  withoutCode = withoutCode.replace(
    /\$([^\s$][^$]*?[^\s$]|[^\s$])\$/g,
    (_, eq) => token(`<span class="math-inline">$${eq}$</span>`)
  );

  // Restore code blocks
  for (const [key, block] of codeBlocks) {
    withoutCode = withoutCode.replace(key, () => block);
  }

  return { markdown: withoutCode, stash };
}

/**
 * Replace math placeholders back into rendered HTML.
 * marked wraps block-level replacements in <p> tags since it doesn't know
 * they're placeholders for div content — strip those where present.
 */
function restoreMath(html, stash) {
  let result = html;
  for (const [key, mathHtml] of stash) {
    result = result.replaceAll(`<p>${key}</p>`, () => mathHtml);
    result = result.replaceAll(key, () => mathHtml);
  }
  return result;
}

/**
 * If the markdown body starts with a level-1 heading (allowing for leading
 * blank lines), use it as the title and strip it from the body so it isn't
 * duplicated under the template's own <h1>.
 */
function extractTitleAndBody(markdown) {
  const trimmed = markdown.replace(/^\s*\n/, ""); // drop leading blank lines
  const lines = trimmed.split("\n");

  if (lines.length > 0 && lines[0].startsWith("# ")) {
    const title = lines[0].replace(/^#\s+/, "").trim();
    const body = lines.slice(1).join("\n").trimStart();
    return { title, body };
  }

  return { title: null, body: markdown };
}

/**
 * Copy a book's images/ and pdfs/ asset folders alongside its rendered
 * output, tracking which source directories have already been copied so
 * repeated chapter files sharing one assets folder don't re-copy it.
 */
const copiedAssetDirs = new Set();
function copyAssets(mdFilePath, outHtmlPath) {
  for (const assetDirName of ["images", "pdfs"]) {
    const src = path.join(path.dirname(mdFilePath), assetDirName);
    if (copiedAssetDirs.has(src)) continue;

    const dest = path.join(path.dirname(outHtmlPath), assetDirName);
    copyDir(src, dest);
    copiedAssetDirs.add(src);
  }
}

function build() {
  // Clear previous output so renamed/deleted source files don't leave
  // stale .html/asset copies behind.
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  for (const file of walk(BOOKS)) {
    if (!file.endsWith(".md")) continue;

    const raw = fs.readFileSync(file, "utf8");
    const { data, content } = matter(raw);

    const { title: mdTitle, body } = extractTitleAndBody(content);
    const title = data.title ?? mdTitle ?? "Livro";

    const { markdown: protectedMarkdown, stash } = protectMath(body);
    const rawHtml = marked.parse(protectedMarkdown);
    const html = restoreMath(rawHtml, stash);

    const page = fillTemplate(TEMPLATE, {
      CONTENT: html,
      TITLE: escapeHtml(title),
    });

    const outPath = file.replace(BOOKS, OUT).replace(/\.md$/, ".html");
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, page);

    copyAssets(file, outPath);

    console.log("Generated:", outPath);
  }
}

build();