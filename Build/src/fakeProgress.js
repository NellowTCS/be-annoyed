// Handles the fake progress bar
export function setupFakeProgress() {
  const progressBar = document.getElementById("fake-progress-bar");
  const progressText = document.getElementById("fake-progress-text");
  let fakeProgress = 0;
  function updateFakeProgress() {
    if (fakeProgress < 98) {
      const increment =
        Math.max(0.2, 2.5 - fakeProgress * 0.022) * (0.7 + Math.random() * 0.6);
      fakeProgress = Math.min(fakeProgress + increment, 98 + Math.random());
      progressBar.style.width = fakeProgress.toFixed(1) + "%";
      progressText.textContent = Math.floor(fakeProgress) + "%";
    } else {
      fakeProgress = 97.5 + Math.random() * 1.5;
      progressBar.style.width = fakeProgress.toFixed(1) + "%";
      progressText.textContent = Math.floor(fakeProgress) + "%";
    }
    setTimeout(updateFakeProgress, 700 + Math.random() * 900);
  }
  if (progressBar && progressText) updateFakeProgress();
}
