const btn = document.getElementById("theme-toggle");
const root = document.documentElement;

// 1. Initialize your audio tracks
const lightSound = new Audio("light-sound.mp3");
const darkSound = new Audio("dark-sound.mp3");

// Preload the audio files so there is no delay on click
lightSound.preload = "auto";
darkSound.preload = "auto";

// 2. Added a playSound parameter (defaulting to false)
function setTheme(theme, playSound = false) {
  root.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
  btn.textContent = theme === "dark" ? "☀️ Luz" : "🌙 Trevas";
  document.body.classList.toggle("dark", theme === "dark");

  // 3. Play the appropriate sound only if explicitly requested
  if (playSound) {
    if (theme === "dark") {
      darkSound.currentTime = 0; // Rewind to start if clicked rapidly
      darkSound.play().catch(e => console.log("Audio play blocked:", e));
    } else {
      lightSound.currentTime = 0;
      lightSound.play().catch(e => console.log("Audio play blocked:", e));
    }
  }
}

// Restore saved preference on page load (silently)
const saved = localStorage.getItem("theme") || "light";
setTheme(saved, false); 

// Click event (triggers sound)
btn.addEventListener("click", () => {
  const current = root.style.colorScheme || "light";
  const nextTheme = current === "light" ? "dark" : "light";
  setTheme(nextTheme, true); // Pass true to enable sound
});