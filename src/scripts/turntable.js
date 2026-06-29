import gsap from 'gsap';

// Plateforme tournante : drum 3D, rotation fluide entre les univers.
export function initTurntable({ reduced } = {}) {
  const stage = document.querySelector('[data-turntable]');
  if (!stage) return;

  const panels = Array.from(stage.querySelectorAll('[data-panel]'));
  const dots = Array.from(document.querySelectorAll('[data-tt-dot]'));
  const N = panels.length;
  if (!N) return;

  const counterNow = document.querySelector('[data-tt-now]');
  const nameOut = document.querySelector('[data-tt-name]');
  const state = { pos: 0 };
  let index = 0;
  let autoTween = null;
  let autoplay = false;

  const pad = (n) => String(n + 1).padStart(2, '0');
  const wrap = (x) => { let o = ((x % N) + N) % N; if (o > N / 2) o -= N; return o; };

  function render() {
    panels.forEach((panel, i) => {
      const off = wrap(i - state.pos);
      const abs = Math.abs(off);
      const tx = off * 52;
      const tz = -abs * 250;
      const ry = off * -40;
      const scale = Math.max(0.7, 1 - Math.min(abs, 3) * 0.07);
      panel.style.transform =
        `translate(-50%, -50%) translateX(${tx}%) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`;
      panel.style.zIndex = String(100 - Math.round(abs * 10));
      panel.style.opacity = abs > 2.6 ? '0' : '1';
      // profondeur de champ : flou + assombrissement progressif des panneaux latéraux
      const blur = abs < 0.45 ? 0 : Math.min((abs - 0.45) * 2.4, 5);
      const bright = abs < 0.45 ? 1 : Math.max(0.55, 1 - abs * 0.16);
      panel.style.filter = `blur(${blur.toFixed(2)}px) brightness(${bright.toFixed(2)})`;
      const centered = abs < 0.5;
      panel.style.pointerEvents = centered ? 'auto' : 'none';
      panel.classList.toggle('is-active', centered);
      panel.setAttribute('aria-hidden', centered ? 'false' : 'true');
      panel.querySelectorAll('a, button').forEach((el) => el.setAttribute('tabindex', centered ? '0' : '-1'));
    });
  }

  function updateUI() {
    dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
    if (counterNow) counterNow.textContent = pad(index);
    if (nameOut) nameOut.textContent = panels[index]?.dataset.name || '';
  }

  function settle(target) {
    index = ((target % N) + N) % N;
    updateUI();
  }

  function animateTo(target) {
    const current = Math.round(state.pos);
    let delta = ((target - current) % N + N) % N;
    if (delta > N / 2) delta -= N;
    const dest = state.pos + delta;
    if (reduced) { state.pos = dest; render(); settle(target); return; }
    autoTween?.kill();
    gsap.to(state, {
      pos: dest, duration: 0.9, ease: 'power3.inOut',
      onUpdate: render,
      onComplete: () => { state.pos = ((dest % N) + N) % N; render(); settle(target); },
    });
  }

  const next = () => animateTo(index + 1);
  const prev = () => animateTo(index - 1);

  // Contrôles
  document.querySelector('[data-tt-next]')?.addEventListener('click', () => { stopAuto(); next(); });
  document.querySelector('[data-tt-prev]')?.addEventListener('click', () => { stopAuto(); prev(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { stopAuto(); animateTo(i); }));
  panels.forEach((p, i) => p.addEventListener('click', (e) => {
    if (!p.classList.contains('is-active') && !e.target.closest('a')) { e.preventDefault(); stopAuto(); animateTo(i); }
  }));

  // Clavier (quand visible)
  document.addEventListener('keydown', (e) => {
    const r = stage.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) return;
    if (e.key === 'ArrowRight') { stopAuto(); next(); }
    if (e.key === 'ArrowLeft') { stopAuto(); prev(); }
  });

  // Drag / swipe
  let dragging = false, startX = 0, startPos = 0, moved = false;
  const down = (x) => { dragging = true; moved = false; startX = x; startPos = state.pos; autoTween?.kill(); stopAuto(); };
  const move = (x) => {
    if (!dragging) return;
    const dx = x - startX;
    if (Math.abs(dx) > 4) moved = true;
    state.pos = startPos - dx / (stage.clientWidth / 2.2);
    render();
  };
  const up = () => { if (!dragging) return; dragging = false; if (moved) animateTo(Math.round(state.pos)); };
  stage.addEventListener('mousedown', (e) => down(e.clientX));
  window.addEventListener('mousemove', (e) => move(e.clientX));
  window.addEventListener('mouseup', up);
  stage.addEventListener('touchstart', (e) => down(e.touches[0].clientX), { passive: true });
  stage.addEventListener('touchmove', (e) => move(e.touches[0].clientX), { passive: true });
  stage.addEventListener('touchend', up);

  // Rotation auto — fiabilisée : retour visuel immédiat + pause au survol
  const apBtn = document.querySelector('[data-tt-auto]');
  const AUTO_MS = 3600;
  let autoInterval = null;
  let hovering = false;

  function scheduleAuto() {
    clearInterval(autoInterval);
    if (autoplay && !hovering) autoInterval = setInterval(() => next(), AUTO_MS);
  }
  function startAuto() {
    if (reduced) return;
    autoplay = true;
    apBtn?.setAttribute('aria-pressed', 'true');
    if (!hovering) next();        // feedback immédiat (ne plus attendre 3,6 s)
    scheduleAuto();
  }
  function stopAuto() {
    if (!autoplay && !autoInterval) return;
    autoplay = false;
    apBtn?.setAttribute('aria-pressed', 'false');
    clearInterval(autoInterval);
    autoInterval = null;
  }
  apBtn?.addEventListener('click', () => (autoplay ? stopAuto() : startAuto()));
  // pause pendant qu'on survole la scène (pour lire), reprise ensuite
  stage.addEventListener('mouseenter', () => { hovering = true; scheduleAuto(); });
  stage.addEventListener('mouseleave', () => { hovering = false; scheduleAuto(); });

  render();
  updateUI();
}
