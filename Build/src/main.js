import { setupNavigation } from "./navigation.js";
import { setupFakeProgress } from "./fakeProgress.js";
import { setupMouseTrail } from "./mouseTrail.js";
import { setupSounds } from "./sounds.js";
import { setupFormAnnoyances } from "./formAnnoyances.js";
import { setupMarqueeAndFooter } from "./marqueeFooter.js";
import { setupInputAnnoyances } from "./inputAnnoyances.js";

// Setup sound functions
const { playAnnoySoundOnce, playPing } = setupSounds();

// Pass sound functions to navigation if needed in future
setupNavigation();
window.onload = () => {
  setupFakeProgress();
  setupMouseTrail();
  setupMarqueeAndFooter();
  setupFormAnnoyances(playAnnoySoundOnce, playPing);
  setupInputAnnoyances();

  // Random invert/blur filter effect
  setInterval(() => {
    if (Math.random() > 0.93) {
      const filters = [
        "invert(1)",
        "blur(2.5px)",
        "invert(1) blur(2.5px)",
        "contrast(1.7) blur(1.5px)",
        "hue-rotate(180deg) invert(1)",
      ];
      const chosen = filters[Math.floor(Math.random() * filters.length)];
      document.body.style.filter = chosen;
      setTimeout(
        () => {
          document.body.style.filter = "";
        },
        700 + Math.random() * 900,
      );
    }
  }, 2500);

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

  document.querySelectorAll('input[type="text"]').forEach((input) => {
    input.addEventListener("keydown", (e) => {
      if (Math.random() > 0.85) {
        e.preventDefault();
        const val = input.value;
        const pos = input.selectionStart;
        input.value = val.slice(0, pos) + "oops" + val.slice(pos);
      }
      if (Math.random() > 0.9 && input.value.length > 0) {
        setTimeout(() => {
          const pos = input.selectionStart;
          input.value = input.value.slice(0, pos - 1) + input.value.slice(pos);
        }, 100);
      }
    });
  });

  document.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener("change", () => {
      if (Math.random() > 0.6) {
        const siblings = document.querySelectorAll('input[type="checkbox"]');
        siblings.forEach((s) => {
          if (s !== cb) s.checked = !s.checked;
        });
      }
    });
  });

  document.querySelectorAll("select").forEach((sel) => {
    sel.addEventListener("focus", () => {
      if (Math.random() > 0.7) {
        setTimeout(() => {
          sel.selectedIndex = Math.floor(Math.random() * sel.options.length);
        }, 500);
      }
    });
  });

  document.addEventListener("mouseover", () => {
    if (Math.random() > 0.95) {
      document.body.style.cursor = "wait";
      setTimeout(() => (document.body.style.cursor = ""), 800);
    }
  });

  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      if (Math.random() > 0.6) {
        link.style.position = "relative";
        link.style.left = `${(Math.random() - 0.5) * 100}px`;
        link.style.top = `${(Math.random() - 0.5) * 50}px`;
        setTimeout(() => {
          link.style.left = "";
          link.style.top = "";
        }, 1000);
      }
    });
  });

  let scrollFight = 0;
  window.addEventListener("scroll", () => {
    if (Math.random() > 0.5 && scrollFight < 3) {
      scrollFight++;
      const delta = (Math.random() - 0.5) * 300;
      window.scrollBy(0, delta);
      setTimeout(() => scrollFight--, 1500);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      const focusable = document.querySelectorAll(
        'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (Math.random() > 0.5 && focusable.length > 0) {
        e.preventDefault();
        const randomEl =
          focusable[Math.floor(Math.random() * focusable.length)];
        randomEl.focus();
      }
    }
  });

  setInterval(() => {
    if (Math.random() > 0.85) {
      document.body.style.filter = `brightness(${0.5 + Math.random() * 1.5})`;
      setTimeout(
        () => (document.body.style.filter = ""),
        300 + Math.random() * 500,
      );
    }
  }, 2000);

  let originalTitle = document.title;
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      document.title = [
        "Hey come back!",
        "I miss you!",
        "Where you going?",
        "Don't leave me!",
      ][Math.floor(Math.random() * 4)];
    } else {
      document.title = originalTitle;
    }
  });

  let errorCount = 0;
  setInterval(() => {
    if (Math.random() > 0.7 && errorCount < 20) {
      console.error(
        [
          "TypeError: Cannot read property 'nothing' of undefined",
          "ReferenceError: x is not defined",
          "SyntaxError: Unexpected token in JSON at position 0",
          "404: Resource not found",
          "NetworkError: Failed to fetch",
        ][Math.floor(Math.random() * 5)],
      );
      errorCount++;
    }
  }, 3000);

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  function playNailTap() {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.frequency.value = 800 + Math.random() * 400;
    gainNode.gain.value = 0.05 + Math.random() * 0.05;
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.02 + Math.random() * 0.03);
  }
  setInterval(() => {
    if (Math.random() > 0.8) playNailTap();
  }, 5000);

  document.addEventListener("click", (e) => {
    if (Math.random() > 0.7) {
      const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"];
      for (let i = 0; i < 15; i++) {
        const confetti = document.createElement("div");
        confetti.style.cssText = `
          position: fixed;
          width: 10px;
          height: 10px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          left: ${e.clientX + (Math.random() - 0.5) * 100}px;
          top: ${e.clientY + (Math.random() - 0.5) * 100}px;
          z-index: 9999;
          pointer-events: none;
          animation: confettiFall ${1 + Math.random()}s ease-out forwards;
        `;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2000);
      }
    }
  });

  const confettiStyle = document.createElement("style");
  confettiStyle.textContent = `
    @keyframes confettiFall {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
  `;
  document.head.appendChild(confettiStyle);

  function showFakeNotification() {
    const messages = [
      "Download complete!",
      "Update available!",
      "Battery low!",
      "Connection lost!",
      "New message received!",
    ];
    const notif = document.createElement("div");
    notif.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #333;
      color: white;
      padding: 15px 20px;
      border-radius: 5px;
      z-index: 10000;
      font-family: sans-serif;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      animation: slideIn 0.3s ease-out;
    `;
    notif.textContent = messages[Math.floor(Math.random() * messages.length)];
    document.body.appendChild(notif);
    setTimeout(() => {
      notif.style.animation = "slideOut 0.3s ease-out forwards";
      setTimeout(() => notif.remove(), 300);
    }, 3000);
  }
  setInterval(() => {
    if (Math.random() > 0.6) showFakeNotification();
  }, 8000);

  const notifStyle = document.createElement("style");
  notifStyle.textContent = `
    @keyframes slideIn { from { transform: translateX(400px); } to { transform: translateX(0); } }
    @keyframes slideOut { from { transform: translateX(0); } to { transform: translateX(400px); } }
  `;
  document.head.appendChild(notifStyle);

  const cookieBanner = document.createElement("div");
  cookieBanner.style.cssText = `
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #222;
    color: white;
    padding: 20px;
    text-align: center;
    z-index: 9998;
    font-family: sans-serif;
  `;
  cookieBanner.innerHTML = `
    <span>This site uses cookies to be annoying. <button id="accept-cookies">Accept</button></span>
  `;
  document.body.appendChild(cookieBanner);

  let cookieClickCount = 0;
  document.getElementById("accept-cookies").addEventListener("click", () => {
    cookieClickCount++;
    if (cookieClickCount < 3) {
      cookieBanner.style.display = "none";
      setTimeout(() => {
        cookieBanner.style.display = "block";
      }, 2000);
    } else {
      cookieBanner.remove();
    }
  });

  setInterval(() => {
    if (Math.random() > 0.85) {
      const fake404 = document.createElement("div");
      fake404.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border: 4px solid red;
        padding: 40px;
        z-index: 10001;
        font-family: monospace;
        font-size: 24px;
        text-align: center;
      `;
      fake404.innerHTML = "<h1>404</h1><p>Page not found</p>";
      document.body.appendChild(fake404);
      setTimeout(() => fake404.remove(), 1500);
    }
  }, 10000);

  setInterval(() => {
    if (Math.random() > 0.9) {
      const flash = document.createElement("div");
      flash.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: white;
        z-index: 9997;
        pointer-events: none;
        opacity: 0.8;
      `;
      document.body.appendChild(flash);
      setTimeout(() => flash.remove(), 100);
    }
  }, 4000);

  // Random font size/style changes
  setInterval(() => {
    const targets = document.querySelectorAll(
      "h1, h2, h3, label, .tip-annoy, #footer-weird, #subtitle, button, input, select, marquee, span",
    );
    targets.forEach((el) => {
      if (Math.random() > 0.93) {
        const sizes = ["0.8em", "1em", "1.3em", "2em", "2.5em"];
        const fonts = [
          "Comic Sans MS, Comic Sans, cursive",
          "Impact, fantasy",
          "monospace",
          "serif",
          "Arial Black, Arial, sans-serif",
        ];
        el.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];
        el.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
        el.style.fontStyle = Math.random() > 0.5 ? "italic" : "normal";
        el.style.fontWeight = Math.random() > 0.5 ? "bold" : "normal";
        setTimeout(
          () => {
            el.style.fontSize = "";
            el.style.fontFamily = "";
            el.style.fontStyle = "";
            el.style.fontWeight = "";
          },
          1800 + Math.random() * 1200,
        );
      }
    });
  }, 1700);

  // Random fake loading spinner
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

  // Randomly make elements draggable
  setInterval(() => {
    const targets = document.querySelectorAll(
      "button, .tip-annoy, label, #beannoyed-title, #subtitle, #footer-weird, marquee, .spacer-annoy",
    );
    targets.forEach((el) => {
      if (Math.random() > 0.96 && !el.hasAttribute("data-annoy-draggable")) {
        el.setAttribute("draggable", "true");
        el.setAttribute("data-annoy-draggable", "1");
        el.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData("text/plain", "annoy");
          el.style.opacity = "0.4";
        });
        el.addEventListener("dragend", () => {
          el.style.opacity = "";
        });
        // Randomly move element on drop
        el.addEventListener("drop", (e) => {
          e.preventDefault();
          el.style.position = "absolute";
          el.style.left = `${e.clientX - el.offsetWidth / 2}px`;
          el.style.top = `${e.clientY - el.offsetHeight / 2}px`;
        });
        el.addEventListener("dragover", (e) => e.preventDefault());
        // Remove draggable after a while
        setTimeout(
          () => {
            el.removeAttribute("draggable");
            el.removeAttribute("data-annoy-draggable");
          },
          4000 + Math.random() * 3000,
        );
      }
    });
  }, 2200);

  // Random popup windows that multiply
  setInterval(() => {
    if (Math.random() > 0.93) {
      const count = 2 + Math.floor(Math.random() * 3);
      for (let i = 0; i < count; i++) {
        const popup = document.createElement("div");
        popup.textContent = [
          "Are you sure you want to be annoyed?",
          "This is not a virus. Probably.",
          "Click OK to continue being annoyed.",
          "You can never close all of us!",
          "Pop! Pop! Pop!",
        ][Math.floor(Math.random() * 5)];
        popup.style.cssText = `
            position: fixed;
            left: ${10 + Math.random() * 75}vw;
            top: ${10 + Math.random() * 65}vh;
            min-width: 180px;
            min-height: 60px;
            background: #fffbe9;
            color: #222;
            border: 2.5px solid #bb10ac;
            border-radius: 13px;
            box-shadow: 0 4px 18px #e729d799;
            z-index: 10010;
            font-family: monospace;
            font-size: 1.1em;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.2em 1.5em;
            cursor: pointer;
            user-select: none;
            transition: opacity 0.2s;
          `;
        popup.addEventListener("click", () => {
          popup.style.opacity = "0";
          setTimeout(() => popup.remove(), 200);
        });
        document.body.appendChild(popup);
        setTimeout(
          () => {
            if (popup.parentNode) popup.remove();
          },
          3500 + Math.random() * 2000,
        );
      }
    }
  }, 4200);

  // Add input box with easter eggs
  const eggBox = document.createElement("input");
  eggBox.type = "text";
  eggBox.placeholder = "Type something weird...";
  eggBox.id = "easter-egg-box";
  eggBox.style.cssText = `
      position: fixed;
      bottom: 2.5em;
      right: 2.5em;
      z-index: 10020;
      padding: 0.7em 1.2em;
      border-radius: 13px;
      border: 2px solid #bb10ac;
      background: #fffbe9;
      color: #222;
      font-size: 1.1em;
      font-family: monospace;
      box-shadow: 0 2px 12px #e729d799;
      outline: none;
      transition: box-shadow 0.2s;
    `;
  document.body.appendChild(eggBox);
  eggBox.addEventListener("focus", () => {
    eggBox.style.boxShadow = "0 0 18px #bb10ac99";
  });
  eggBox.addEventListener("blur", () => {
    eggBox.style.boxShadow = "0 2px 12px #e729d799";
  });
  eggBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const val = eggBox.value.trim().toLowerCase();
      if (val === "oops") {
        alert("Well guess you made a mistake");
        setTimeout(() => window.close(), 800);
      } else if (val === "easteregg") {
        alert("Did you really think it was going to be that easy?");
      } else if (val === "github") {
        alert("NOOO MY SOURCE CODEEEEE");
        setTimeout(() => {
          window.location.href = "https://github.com/NellowTCS/be-annoyed/";
        }, 900);
      } else if (val === "google") {
        alert("I'm not a search engine");
        setTimeout(() => {
          window.open("https://google.com", "_blank");
        }, 700);
      } else if (val === "annoy") {
        alert("You have unlocked MAXIMUM ANNOYANCE MODE!");
        document.body.style.animation = "shake 0.2s infinite";
        setTimeout(() => {
          document.body.style.animation = "";
        }, 2000);
      } else if (val.length > 0) {
        alert("No easter egg for: " + val);
      }
      eggBox.value = "";
    }
  });
  // Add shake animation style
  const shakeStyle = document.createElement("style");
  shakeStyle.textContent = `@keyframes shake { 0% { transform: translate(0, 0); } 25% { transform: translate(-6px, 2px); } 50% { transform: translate(5px, -3px); } 75% { transform: translate(-3px, 4px); } 100% { transform: translate(0, 0); } }`;
  document.head.appendChild(shakeStyle);

  // Keyboard keys that randomly don't respond
  document.addEventListener('keydown', (e) => {
    // Don't block Tab, F5, or browser shortcuts
    if (["Tab", "F5"].includes(e.key) || e.ctrlKey || e.metaKey || e.altKey) return;
    if (Math.random() > 0.93) {
      e.stopImmediatePropagation();
      e.preventDefault();
      // Optionally, show a subtle visual cue
      const blocker = document.createElement('div');
      blocker.style.cssText = `
          position: fixed; left: 0; top: 0; width: 100vw; height: 100vh;
          z-index: 100000; pointer-events: none; background: transparent;`;
      document.body.appendChild(blocker);
      setTimeout(() => blocker.remove(), 60);
    }
  }, true);

  // Fake "Are you sure you want to leave?" dialogs
  window.addEventListener('beforeunload', (e) => {
    if (Math.random() > 0.5) {
      e.preventDefault();
      e.returnValue = '';
      return '';
    }
  });
};
