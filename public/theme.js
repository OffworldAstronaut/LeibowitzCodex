const btn = document.getElementById("theme-toggle");
const root = document.documentElement;


const lightSound = new Audio("light-sound.mp3");
const darkSound = new Audio("dark-sound.mp3");


lightSound.preload = "auto";
darkSound.preload = "auto";


function setTheme(theme, playSound = false) {
  root.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
  btn.textContent = theme === "dark" ? "☀️ Luz" : "🌙 Trevas";
  document.body.classList.toggle("dark", theme === "dark");


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


const saved = localStorage.getItem("theme") || "light";
setTheme(saved, false); 


btn.addEventListener("click", () => {
  const current = root.style.colorScheme || "light";
  const nextTheme = current === "light" ? "dark" : "light";
  setTheme(nextTheme, true); 
});