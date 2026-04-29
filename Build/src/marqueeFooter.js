// Handles dynamic marquee and footer effects
export function setupMarqueeAndFooter() {
  const marq = document.getElementById("marquee-annoy");
  setInterval(() => {
    marq.style.color = [
      "#ac25aa",
      "#4282ff",
      "#41d752",
      "#f6ad49",
      "#9873fd",
      "#bb0101",
    ][Math.floor(Math.random() * 6)];
    marq.style.background = [
      "#f7f7ff",
      "#fff",
      "#e9e9e8",
      "#dfffef",
      "#fffee7",
    ][Math.floor(Math.random() * 5)];
    if (Math.random() > 0.82)
      marq.textContent = [
        "Okay but why are you here?",
        "Scroll for weird stuff.",
        "BeAnnoyed. It’s the law.",
        "Not optimal. Not sorry.",
        "Why? Just, why?",
      ][Math.floor(Math.random() * 5)];
  }, 1300);
  const footerWeird = document.getElementById("footer-weird");
  setInterval(() => {
    footerWeird.style.color = [
      "#666",
      "#bb10ac",
      "#4282ff",
      "#222",
      "#c43a",
      "#f3027287",
    ][Math.floor(Math.random() * 6)];
    if (Math.random() > 0.84)
      footerWeird.textContent = "Thanks for using BeAnnoyed™ (why tho)";
    else if (Math.random() > 0.5)
      footerWeird.textContent =
        "This site cares about browser compatibility. (Citation needed)";
    else
      footerWeird.textContent =
        "Browsing may trigger unexplained feelings, (mostly anger/frustration according to a totally real user).";
  }, 1100);
}
