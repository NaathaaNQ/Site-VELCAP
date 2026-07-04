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

  // Géométrie responsive : plus large et aérée sur desktop, inchangée sur mobile
  // (où trop d'écartement sortirait les panneaux de l'écran).
  function metrics() {
    const w = window.innerWidth;
    if (w <= 760) return { spread: 52, depth: 250, rot: 40 };   // mobile : identique
    if (w <= 1100) return { spread: 64, depth: 280, rot: 37 };  // tablette
    return { spread: 78, depth: 305, rot: 34 };                 // desktop : élargi
  }
  let M = metrics();

  function render() {
    for (let i = 0; i < N; i++) {
      const panel = panels[i];
      const off = wrap(i - state.pos);
      const abs = Math.abs(off);
      const tx = off * M.spread;
      const tz = -abs * M.depth;
      const ry = off * -M.rot;
      const scale = Math.max(0.7, 1 - Math.min(abs, 3) * 0.07);
      // Transform uniquement (composité GPU) — pas de filter par frame : c'est ce
      // qui rendait le mouvement saccadé sur beaucoup d'appareils.
      panel.style.transform =
        `translate3d(-50%, -50%, 0) translateX(${tx}%) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`;
      panel.style.zIndex = String(100 - Math.round(abs * 10));
      panel.style.opacity = abs > 2.6 ? '0' : '1';
      // profondeur de champ : assombrissement progressif via un simple voile CSS
      // (opacity d'un calque composité = fluide, contrairement à filter: blur).
      const dim = abs < 0.5 ? 0 : Math.min(0.14 + (abs - 0.5) * 0.2, 0.6);
      panel.style.setProperty('--dim', dim.toFixed(3));
      const centered = abs < 0.5;
      panel.style.pointerEvents = centered ? 'auto' : 'none';
      panel.classList.toggle('is-active', centered);
      panel.setAttribute('aria-hidden', centered ? 'false' : 'true');
      panel.querySelectorAll('a, button').forEach((el) => el.setAttribute('tabindex', centered ? '0' : '-1'));
    }
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
    // Un seul tween à la fois : on tue le précédent et on force overwrite pour
    // éviter que des clics rapides n'empilent des tweens concurrents (saccades).
    autoTween?.kill();
    settle(target); // dots / compteur réagissent immédiatement
    autoTween = gsap.to(state, {
      pos: dest, duration: 0.72, ease: 'power2.inOut', overwrite: true,
      onUpdate: render,
      onComplete: () => { state.pos = ((dest % N) + N) % N; render(); },
    });
  }

  const next = () => animateTo(index + 1);
  const prev = () => animateTo(index - 1);

  // Contrôles
  document.querySelector('[data-tt-next]')?.addEventListener('click', () => { stopAuto(); next(); });
  document.querySelector('[data-tt-prev]')?.addEventListener('click', () => { stopAuto(); prev(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { stopAuto(); animateTo(i); }));
  // Navigation gérée au relâchement (voir up()) pour être fiable même si le
  // navigateur annule le clic natif. On neutralise ici le clic souris/tactile
  // (detail !== 0) pour éviter toute double navigation, tout en laissant passer
  // l'activation clavier (Entrée -> click detail 0) sur le lien de la carte.
  panels.forEach((p) => p.addEventListener('click', (e) => {
    if (e.detail !== 0) e.preventDefault();
  }));

  // Clavier (quand visible)
  document.addEventListener('keydown', (e) => {
    const r = stage.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) return;
    if (e.key === 'ArrowRight') { stopAuto(); next(); }
    if (e.key === 'ArrowLeft') { stopAuto(); prev(); }
  });

  // Drag / swipe (souris + tactile). Seuil confortable pour ne pas confondre
  // un clic avec un glissement (c'est ce qui empêchait la navigation 1 fois sur 2).
  const DRAG_THRESH = 8;
  let dragging = false, startX = 0, startPos = 0, moved = false, downPanel = null;
  const panelIndexFrom = (target) => {
    const el = target && target.closest ? target.closest('[data-panel]') : null;
    return el ? panels.indexOf(el) : null;
  };
  const down = (x, target) => {
    dragging = true; moved = false; startX = x; startPos = state.pos;
    downPanel = panelIndexFrom(target);
    autoTween?.kill(); stopAuto();
  };
  const move = (x) => {
    if (!dragging) return;
    const dx = x - startX;
    if (Math.abs(dx) > DRAG_THRESH) moved = true;
    if (!moved) return;                 // sous le seuil : on ne bouge pas -> le clic reste un clic
    state.pos = startPos - dx / (stage.clientWidth / 2.2);
    render();
  };
  // Relâchement : un glissement recentre ; un tap net sur la carte centrale ouvre
  // sa page (navigation explicite, fiable même si le navigateur annule le clic).
  const up = () => {
    if (!dragging) return;
    dragging = false;
    if (moved) { animateTo(Math.round(state.pos)); moved = false; return; }
    // Tap net (déplacement < seuil) : on ouvre la carte visée. Seule la carte
    // centrale reçoit les événements (les autres sont en pointer-events:none),
    // donc downPanel correspond toujours à la carte réellement cliquée.
    if (downPanel != null && panels[downPanel]) {
      const link = panels[downPanel].querySelector('a.board');
      if (link) { window.location.href = link.getAttribute('href'); return; }
    }
    moved = false;
  };
  stage.addEventListener('mousedown', (e) => down(e.clientX, e.target));
  window.addEventListener('mousemove', (e) => move(e.clientX));
  window.addEventListener('mouseup', up);
  stage.addEventListener('touchstart', (e) => down(e.touches[0].clientX, e.target), { passive: true });
  stage.addEventListener('touchmove', (e) => move(e.touches[0].clientX), { passive: true });
  stage.addEventListener('touchend', up);
  // Empêche le glisser-déposer natif des images (qui avalait le clic 1 fois sur 2).
  stage.addEventListener('dragstart', (e) => e.preventDefault());

  // Molette / trackpad : un balayage horizontal fait tourner la plateforme, une
  // carte à la fois. Le scroll vertical (molette classique) reste libre pour la page.
  // Anti-saut : tant qu'une rotation est en cours, on ignore les deltas (la lancée
  // du trackpad ne peut donc pas empiler plusieurs pas). Après l'animation, il faut
  // ré-accumuler un seuil complet -> vitesse indépendante de l'intensité du geste.
  const WHEEL_STEP = 60;
  let wheelAccum = 0, wheelIdle;
  stage.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return; // intention verticale : on laisse passer
    e.preventDefault();
    clearTimeout(wheelIdle);
    wheelIdle = setTimeout(() => { wheelAccum = 0; }, 140); // fin du geste -> on repart de zéro
    if (gsap.isTweening(state)) { wheelAccum = 0; return; } // rotation en cours : aucun nouveau pas
    wheelAccum += e.deltaX;
    if (Math.abs(wheelAccum) >= WHEEL_STEP) {
      const dir = wheelAccum > 0 ? 1 : -1;
      wheelAccum = 0;
      stopAuto();
      dir > 0 ? next() : prev();
    }
  }, { passive: false });

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

  // Recalcule l'écartement quand on redimensionne / tourne l'écran
  let resizeT;
  window.addEventListener('resize', () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(() => { M = metrics(); render(); }, 120);
  });

  render();
  updateUI();
}
