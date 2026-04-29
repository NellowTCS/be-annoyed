// Handles form and input annoyances
export function setupFormAnnoyances(playAnnoySoundOnce, playPing) {
  const form = document.getElementById("beannoyed-form");
  const annoyCheck = document.getElementById("annoy-mode");
  annoyCheck?.addEventListener("mouseenter", () => {
    if (Math.random() > 0.5) {
      annoyCheck.checked = false;
      annoyCheck.disabled = true;
      setTimeout(() => {
        annoyCheck.disabled = false;
        annoyCheck.checked = true;
      }, 1200);
    }
  });
  document.getElementById("name-ish")?.addEventListener("focus", (e) => {
    e.target.select();
    setTimeout(() => e.target.blur(), 370 + Math.random() * 220);
  });
  document.getElementById("timezone")?.addEventListener("focus", function (e) {
    if (Math.random() > 0.83)
      e.target.selectedIndex = Math.floor(
        Math.random() * e.target.options.length,
      );
  });
  document.getElementById("favcolor")?.addEventListener("blur", (e) => {
    if (Math.random() > 0.85) {
      e.target.value =
        "#" + (~~(Math.random() * 0xffffff)).toString(16).padStart(6, "f");
    }
  });
  form?.addEventListener("submit", function (e) {
    e.preventDefault();
    document.body.style.filter =
      "contrast(1.8) hue-rotate(" + (Math.random() * 100 - 50) + "deg)";
    let sarcasm = [
      "Totally submitted. Not really.",
      "Great job. (Nothing happened!)",
      "We are not storing your data. Or are we?",
      "Submission failed. Success!",
      "Try again or just give up.",
    ];
    alert(sarcasm[Math.floor(Math.random() * sarcasm.length)]);
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.body.style.filter = "";
    }, 2700);
    form.reset();
  });
  document.getElementById("shuffle-btn")?.addEventListener("click", () => {
    let area = document.getElementById("chaos-ui");
    let kids = Array.from(area.children).sort(() => Math.random() - 0.5);
    kids.forEach((k) => area.appendChild(k));
    playAnnoySoundOnce();
  });
  document.getElementById("lofi-btn")?.addEventListener("click", () => {
    Array.from(document.querySelectorAll("button,input,select")).forEach(
      (el) => (el.disabled = true),
    );
    setTimeout(() => {
      Array.from(document.querySelectorAll("button,input,select")).forEach(
        (el) => (el.disabled = false),
      );
    }, 2000);
    document.body.style.opacity = 0.72;
    setTimeout(() => (document.body.style.opacity = 1), 1900);
  });
  let moveBtn = document.getElementById("move-btn");
  moveBtn?.addEventListener("mouseenter", () => {
    moveBtn.style.position = "absolute";
    moveBtn.style.left = Math.random() * 82 + 2 + "vw";
    moveBtn.style.top = Math.random() * 55 + 18 + "vh";
    playAnnoySoundOnce();
    setTimeout(() => (moveBtn.style.position = ""), 900);
  });
  let uslider = document.getElementById("useless-slider");
  let slabel = document.getElementById("slider-label");
  let sval = document.getElementById("slider-value");
  uslider?.addEventListener("input", function (e) {
    setTimeout(
      () => {
        sval.textContent = e.target.value;
      },
      Math.random() * 800 + 150,
    );
    let jitter = Math.random() * 170 - 60;
    slabel.style.marginLeft = jitter + "px";
    setTimeout(() => (slabel.style.marginLeft = ".8em"), 600);
  });
  document
    .querySelectorAll("#checkout-annoy input[type=radio]")
    .forEach((inp) => {
      inp.addEventListener("mouseenter", () => {
        if (Math.random() > 0.5) inp.checked = false;
      });
    });
  document
    .getElementById("pay-now-btn")
    ?.addEventListener("click", function (e) {
      e.preventDefault();
      this.disabled = true;
      setTimeout(() => (this.disabled = false), 1050);
      alert("Transaction declined – your exposure credit limit is exceeded.");
      playPing();
    });
}
