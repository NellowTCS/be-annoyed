// Handles mouse trail effect
export function setupMouseTrail() {
  const trailLength = 14;
  const trailEls = [];
  const trailColors = [
    '#e729d7', '#2e4bff', '#66ccff', '#bb10ac', '#f6ad49', '#b3c8ff', '#ffc8fc', '#b3ffdf',
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
}
