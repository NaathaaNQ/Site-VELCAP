// Carrousels photo des événements passés.
// Défilement auto (sauf prefers-reduced-motion) + pause au survol + nav manuelle.
export function initCarousels() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const AUTO_MS = 3800;

  document.querySelectorAll('[data-carousel]').forEach((root) => {
    const track = root.querySelector('[data-carousel-track]');
    const slides = track ? Array.from(track.children) : [];
    const dots = Array.from(root.querySelectorAll('[data-carousel-dot]'));
    const n = slides.length;
    if (!track || n <= 1) return; // une seule image (ou aucune) : rien à animer

    let index = 0;
    let timer = null;

    const render = () => {
      track.style.transform = `translateX(${-index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
    };
    const go = (i) => { index = ((i % n) + n) % n; render(); };
    const next = () => go(index + 1);
    const prev = () => go(index - 1);

    const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
    const start = () => {
      if (reduced) return;            // respecte prefers-reduced-motion
      stop();
      timer = setInterval(next, AUTO_MS);
    };

    root.querySelector('[data-carousel-next]')?.addEventListener('click', () => { next(); start(); });
    root.querySelector('[data-carousel-prev]')?.addEventListener('click', () => { prev(); start(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { go(i); start(); }));

    // Pause au survol / focus, reprise ensuite
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', start);

    render();
    start();
  });
}
