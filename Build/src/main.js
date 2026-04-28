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

  // Fake progress bar that never completes
  const progressBar = document.getElementById("fake-progress-bar");
  const progressText = document.getElementById("fake-progress-text");
  let fakeProgress = 0;
  function updateFakeProgress() {
    // Progress slows as it gets closer to 99%
    if (fakeProgress < 98) {
      const increment = Math.max(0.2, 2.5 - fakeProgress * 0.022) * (0.7 + Math.random() * 0.6);
      fakeProgress = Math.min(fakeProgress + increment, 98 + Math.random());
      progressBar.style.width = fakeProgress.toFixed(1) + "%";
      progressText.textContent = Math.floor(fakeProgress) + "%";
    } else {
      // Oscillate between 97-99%
      fakeProgress = 97.5 + Math.random() * 1.5;
      progressBar.style.width = fakeProgress.toFixed(1) + "%";
      progressText.textContent = Math.floor(fakeProgress) + "%";
    }
    setTimeout(updateFakeProgress, 700 + Math.random() * 900);
  }
  if (progressBar && progressText) updateFakeProgress();

  // Mouse trail that lags behind
  const trailLength = 14;
  const trailEls = [];
  const trailColors = [
    '#e729d7', // magenta
    '#2e4bff', // blue
    '#66ccff', // cyan
    '#bb10ac', // purple
    '#f6ad49', // gold
    '#b3c8ff', // pastel blue
    '#ffc8fc', // pastel magenta
    '#b3ffdf', // pastel green
  ];
  for (let i = 0; i < trailLength; i++) {
    const el = document.createElement('div');
    el.className = 'mouse-trail-annoy';
    el.style.opacity = (0.18 + 0.55 * (i / trailLength)).toFixed(2);
    el.style.pointerEvents = 'none';
    el.style.position = 'fixed';
    el.style.zIndex = 9999;
    el.style.width = el.style.height = 14 + i * 2.2 + 'px';
    el.style.borderRadius = '50%';
    // Use a darker, more vibrant gradient
    const c1 = trailColors[i % trailColors.length];
    const c2 = trailColors[(i + 2) % trailColors.length];
    el.style.background = `radial-gradient(circle at 60% 40%, #181828 0%, ${c1} 55%, ${c2} 100%)`;
    el.style.boxShadow = `0 0 16px 4px #181828cc, 0 0 10px 2px ${c1}99, 0 0 2px 1px ${c2}55`;
    el.style.transition = 'background 0.3s, box-shadow 0.3s';
    document.body.appendChild(el);
    trailEls.push({ el, x: 0, y: 0 });
  }
  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  function animateTrail() {
    let prevX = mouseX, prevY = mouseY;
    for (let i = 0; i < trailLength; i++) {
      const t = trailEls[i];
      t.x += (prevX - t.x) * (0.22 - i * 0.008);
      t.y += (prevY - t.y) * (0.22 - i * 0.008);
      t.el.style.left = (t.x - t.el.offsetWidth / 2) + 'px';
      t.el.style.top = (t.y - t.el.offsetHeight / 2) + 'px';
      prevX = t.x;
      prevY = t.y;
    }
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

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

  document.addEventListener("mouseover", (e) => {
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
        const randomEl = focusable[Math.floor(Math.random() * focusable.length)];
        randomEl.focus();
      }
    }
  });

  setInterval(() => {
    if (Math.random() > 0.85) {
      document.body.style.filter = `brightness(${0.5 + Math.random() * 1.5})`;
      setTimeout(() => (document.body.style.filter = ""), 300 + Math.random() * 500);
    }
  }, 2000);

  let originalTitle = document.title;
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      document.title = ["Hey come back!", "I miss you!", "Where you going?", "Don't leave me!"][
        Math.floor(Math.random() * 4)
      ];
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

  let canPlaySound = true;
  function playAnnoySoundOnce() {
    const audio = document.getElementById("hover-sound");
    if (canPlaySound) {
      canPlaySound = false;
      audio.currentTime = 0;
      audio.volume = 0.16;
      audio.play().catch(() => { });
      setTimeout(() => (canPlaySound = true), 600);
    }
  }
  function playPing() {
    const audio = document.getElementById("ping-sound");
    if (canPlaySound) {
      canPlaySound = false;
      audio.currentTime = 0;
      audio.volume = 0.12;
      audio.play().catch(() => { });
      setTimeout(() => (canPlaySound = true), 570);
    }
  }
});
