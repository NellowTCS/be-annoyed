// Handles random input/checkbox/radio/label/button annoyances
export function setupInputAnnoyances() {
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
    us.style.textDecoration = "underline wavy red 1.6px";
  }, 3970);
  // Unselects radio after click
  document.querySelectorAll("input[type=radio]").forEach((inp) => {
    inp.addEventListener("click", function () {
      setTimeout(() => {
        if (Math.random() > 0.7) inp.checked = false;
      }, 200);
    });
  });
  // Checkbox group random toggling
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
  // Keyboard input annoyances
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
}
