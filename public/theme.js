const btn = document.getElementById("theme-toggle");
const root = document.documentElement;

function setTheme(theme) {
  root.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
  btn.textContent = theme === "dark" ? "☀️ Luz" : "🌙 Trevas";
  document.body.classList.toggle("dark", theme === "dark");
}

// Restore saved preference on page load
const saved = localStorage.getItem("theme") || "light";
setTheme(saved);

btn.addEventListener("click", () => {
  const current = root.style.colorScheme || "light";
  setTheme(current === "light" ? "dark" : "light");
});
