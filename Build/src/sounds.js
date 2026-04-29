// Handles sound effects
export function setupSounds() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
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
  return { playAnnoySoundOnce, playPing, playNailTap };
}
