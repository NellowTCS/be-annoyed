if (Math.floor(Math.random() * 5) === 0) {
  // 1/5 Rickroll chance on load
  location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}

window.addEventListener("DOMContentLoaded", function () {
  // Navigation quirks
  document
    .getElementById("nav-delay-link")
    .addEventListener("click", function (e) {
      e.preventDefault();
      this.textContent = "Loading...";
      setTimeout(() => {
        this.textContent = "404?";
      }, 1450);
      setTimeout(() => {
        this.textContent = "Jam Info";
      }, 2800);
      playPing();
      setTimeout(() => {
        alert("Not found (probably).");
      }, 1150);
    });
  document
    .getElementById("random-scroll-link")
    .addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo(0, Math.floor(Math.random() * window.innerHeight * 2));
      playAnnoySoundOnce();
    });
  document
    .getElementById("rickroll-chance-link")
    .addEventListener("click", function (e) {
      e.preventDefault();
      if (Math.random() < 0.14) {
        location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      } else alert("You're safe. This time.");
    });

  // "Find hidden dark mode", never appears
  // Subtle: buffer in the DOM, never rendered

  // Marquee color and text shifts
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

  // Form: password is actually "text", field unselects itself
  // Checkbox sometimes unchecks itself and disables input
  const form = document.getElementById("beannoyed-form");
  let uncheckTimer = 0;
  const annoyCheck = document.getElementById("annoy-mode");
  annoyCheck.addEventListener("mouseenter", () => {
    if (Math.random() > 0.5) {
      annoyCheck.checked = false;
      annoyCheck.disabled = true;
      setTimeout(() => {
        annoyCheck.disabled = false;
        annoyCheck.checked = true;
      }, 1200);
    }
  });
  // Username input: selects all text then blurs
  document.getElementById("name-ish").addEventListener("focus", (e) => {
    e.target.select();
    setTimeout(() => e.target.blur(), 370 + Math.random() * 220);
  });

  // Subtle: timezone dropdown
  document.getElementById("timezone").addEventListener("focus", function (e) {
    if (Math.random() > 0.83)
      e.target.selectedIndex = Math.floor(
        Math.random() * e.target.options.length,
      );
  });

  // Color input: jumps value on blur
  document.getElementById("favcolor").addEventListener("blur", (e) => {
    if (Math.random() > 0.85) {
      e.target.value =
        "#" + (~~(Math.random() * 0xffffff)).toString(16).padStart(6, "f");
    }
  });

  // Form submit: page vibrates and resets, sarcasm hehe, BG hue
  form.addEventListener("submit", function (e) {
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

  // Rearrange Everything button, randomizes button and field positions
  document.getElementById("shuffle-btn").addEventListener("click", () => {
    let area = document.getElementById("chaos-ui");
    let kids = Array.from(area.children).sort(() => Math.random() - 0.5);
    kids.forEach((k) => area.appendChild(k));
    playAnnoySoundOnce();
  });

  // Lofi button: just disables everything for a bit
  document.getElementById("lofi-btn").addEventListener("click", () => {
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

  // Move button, escapes your cursor, then vibrates
  let moveBtn = document.getElementById("move-btn");
  moveBtn.addEventListener("mouseenter", () => {
    moveBtn.style.position = "absolute";
    moveBtn.style.left = Math.random() * 82 + 2 + "vw";
    moveBtn.style.top = Math.random() * 55 + 18 + "vh";
    playAnnoySoundOnce();
    setTimeout(() => (moveBtn.style.position = ""), 900);
  });

  // Range slider: label moves away, value lags
  let uslider = document.getElementById("useless-slider");
  let slabel = document.getElementById("slider-label");
  let sval = document.getElementById("slider-value");
  uslider.addEventListener("input", function (e) {
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

  // Payment radios: become unselected on hover, button disables
  document
    .querySelectorAll("#checkout-annoy input[type=radio]")
    .forEach((inp) => {
      inp.addEventListener("mouseenter", () => {
        if (Math.random() > 0.5) inp.checked = false;
      });
    });
  document
    .getElementById("pay-now-btn")
    .addEventListener("click", function (e) {
      e.preventDefault();
      this.disabled = true;
      setTimeout(() => (this.disabled = false), 1050);
      alert("Transaction declined – your exposure credit limit is exceeded.");
      playPing();
    });

  // Hover sound on nav/buttons
  document.body.addEventListener(
    "mouseover",
    (e) => {
      if (e.target.tagName === "BUTTON" || e.target.closest("nav"))
        playAnnoySoundOnce();
    },
    true,
  );

  // Footer: subtle flashing text
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

  // Scroll jumps
  window.addEventListener("scroll", () => {
    if (window.scrollY > 180 && Math.random() > 0.69) {
      window.scrollTo(0, window.scrollY - Math.random() * 110);
      playPing();
    }
  });

  // Subtle: input autocorrect toggling delayed
  let autos = document.querySelectorAll('input[type="text"]');
  autos.forEach((inp) => {
    setTimeout(
      () => {
        inp.setAttribute(
          "autocorrect",
          ["off", "on"][Math.floor(Math.random() * 2)],
        );
      },
      1800 + Math.random() * 1000,
    );
  });

  // Subtle: fake spellcheck underline
  setTimeout(() => {
    let us = document.getElementById("name-ish");
    us.style.textDecoration = "underline wavy red 1.6px"; // wavy is such a fun word omg... WAVYYYY
  }, 3970);

  // Unselects radio after click
  document.querySelectorAll("input[type=radio]").forEach((inp) => {
    inp.addEventListener("click", function () {
      setTimeout(() => {
        if (Math.random() > 0.7) inp.checked = false;
      }, 200);
    });
  });

  const annoyTargets = document.querySelectorAll(
    "button, input, select, .tip-annoy, label, h1, h2",
  );
  annoyTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      if (Math.random() > 0.3) {
        const randomScale = 0.7 + Math.random() * 0.8;
        const randomRotate = (Math.random() - 0.5) * 25;
        const randomMarginTop = (Math.random() - 0.5) * 40;
        const randomMarginLeft = (Math.random() - 0.5) * 40;

        el.style.transition = "all 0.2s ease";
        el.style.transform = `scale(${randomScale}) rotate(${randomRotate}deg)`;
        el.style.marginTop = `${randomMarginTop}px`;
        el.style.marginLeft = `${randomMarginLeft}px`;

        setTimeout(
          () => {
            el.style.transform = "";
            el.style.marginTop = "";
            el.style.marginLeft = "";
          },
          600 + Math.random() * 1200,
        );
      }
    });
  });

  const driftTargets = document.querySelectorAll("p, div, span, label, h1, h2, h3");
  driftTargets.forEach((el) => {
    if (el.id === "footer-weird" || el.classList.contains("tooltip-annoy")) return;
    setInterval(() => {
      if (Math.random() > 0.7) {
        el.style.marginLeft = `${(Math.random() - 0.5) * 30}px`;
        el.style.transition = "margin-left 0.5s ease";
        setTimeout(() => (el.style.marginLeft = ""), 2000);
      }
      if (Math.random() > 0.8) {
        el.textContent = el.textContent
          .split("")
          .map((c) => (Math.random() > 0.3 ? c : c.toUpperCase()))
          .join("");
        setTimeout(() => {
          el.textContent = el.textContent
            .split("")
            .map((c) => c.toLowerCase())
            .join("");
        }, 1500);
      }
    }, 3000 + Math.random() * 2000);
  });

  setInterval(() => {
    if (Math.random() > 0.8) {
      const spinner = document.createElement("div");
      spinner.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        left: ${Math.random() * 90}vw;
        top: ${Math.random() * 90}vh;
        z-index: 9999;
        pointer-events: none;
      `;
      document.body.appendChild(spinner);
      setTimeout(() => spinner.remove(), 3000 + Math.random() * 2000);
    }
  }, 4000);

  const style = document.createElement("style");
  style.textContent = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
  document.head.appendChild(style);

  const cloneTargets = document.querySelectorAll("button, .tip-annoy, label");
  cloneTargets.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (Math.random() > 0.5) {
        e.preventDefault();
        const clone = el.cloneNode(true);
        clone.style.position = "absolute";
        clone.style.left = `${Math.random() * 80}vw`;
        clone.style.top = `${Math.random() * 80}vh`;
        clone.style.opacity = "0.7";
        clone.style.zIndex = "1000";
        clone.style.pointerEvents = "none";
        document.body.appendChild(clone);
        setTimeout(() => clone.remove(), 5000);
      }
    });
  });

  let canPlaySound = true;
  function playAnnoySoundOnce() {
    const audio = document.getElementById("hover-sound");
    if (canPlaySound) {
      canPlaySound = false;
      audio.currentTime = 0;
      audio.volume = 0.16;
      audio.play().catch(() => {});
      setTimeout(() => (canPlaySound = true), 600);
    }
  }
  function playPing() {
    const audio = document.getElementById("ping-sound");
    if (canPlaySound) {
      canPlaySound = false;
      audio.currentTime = 0;
      audio.volume = 0.12;
      audio.play().catch(() => {});
      setTimeout(() => (canPlaySound = true), 570);
    }
  }
});
