// Handles navigation quirks and rickroll chance
export function setupNavigation() {
  if (Math.floor(Math.random() * 5) === 0) {
    location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }
  window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("nav-delay-link")?.addEventListener("click", function (e) {
      e.preventDefault();
      this.textContent = "Loading...";
      setTimeout(() => { this.textContent = "404?"; }, 1450);
      setTimeout(() => { this.textContent = "Jam Info"; }, 2800);
      playPing();
      setTimeout(() => { alert("Not found (probably)."); }, 1150);
    });
    document.getElementById("random-scroll-link")?.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo(0, Math.floor(Math.random() * window.innerHeight * 2));
      playAnnoySoundOnce();
    });
    document.getElementById("rickroll-chance-link")?.addEventListener("click", function (e) {
      e.preventDefault();
      if (Math.random() < 0.14) {
        location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      } else alert("You're safe. This time.");
    });
  });
}

// Dummy sound functions to be replaced in main.js
export function playAnnoySoundOnce() {}
export function playPing() {}
