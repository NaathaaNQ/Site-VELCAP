// Galerie photo en modale (événements passés).
// Une seule modale, alimentée au clic par le tableau de photos du déclencheur.
export function initGallery({ lenis } = {}) {
  const modal = document.querySelector('[data-gallery-modal]');
  if (!modal) return;

  const imgEl = modal.querySelector('[data-gallery-img]');
  const titleEl = modal.querySelector('[data-gallery-title]');
  const countEl = modal.querySelector('[data-gallery-count]');
  const stage = modal.querySelector('[data-gallery-stage]');
  const closeBtn = modal.querySelector('[data-gallery-close]');

  let photos = [];
  let name = '';
  let index = 0;
  let lastFocus = null;
  let savedScroll = 0;

  const show = (i) => {
    index = (i + photos.length) % photos.length;
    imgEl.src = photos[index].src;
    imgEl.alt = photos[index].alt || `${name} — photo ${index + 1} sur ${photos.length}`;
    if (countEl) countEl.textContent = `${index + 1} / ${photos.length}`;
  };
  const next = () => show(index + 1);
  const prev = () => show(index - 1);

  const open = (trigger) => {
    // Les chemins viennent des <img> listés en HTML (donc déjà corrects pour le
    // web comme pour file://) plutôt que reconstruits en JS.
    const card = trigger.closest('.ecard') || trigger.closest('.ecard__gallery-wrap');
    const sources = card ? [...card.querySelectorAll('[data-gallery-src] img')] : [];
    photos = sources.map((im) => ({ src: im.getAttribute('src'), alt: im.getAttribute('alt') || '' }));
    if (!photos.length) return;
    name = trigger.dataset.name || '';
    lastFocus = trigger;
    if (titleEl) titleEl.textContent = name;
    modal.classList.toggle('is-single', photos.length <= 1);
    show(0);

    // Verrou de scroll sans décalage : on mémorise la position, on compense la
    // largeur de la scrollbar, et on restaure la position exacte à la fermeture.
    savedScroll = window.scrollY;
    lenis?.stop();
    const sw = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = 'hidden';
    if (sw > 0) document.documentElement.style.paddingRight = `${sw}px`;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    closeBtn?.focus();
  };

  const close = () => {
    if (!modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
    document.documentElement.style.paddingRight = '';
    lenis?.start();
    // restaure la position de scroll exacte (Lenis pilote le scroll de la page)
    if (lenis) lenis.scrollTo(savedScroll, { immediate: true, force: true });
    else window.scrollTo(0, savedScroll);
    lastFocus?.focus();
    // libère l'image (les grandes photos ne restent pas en mémoire)
    setTimeout(() => { if (!modal.classList.contains('is-open')) imgEl.src = ''; }, 300);
  };

  document.querySelectorAll('[data-gallery-open]').forEach((b) =>
    b.addEventListener('click', () => open(b)));
  modal.querySelectorAll('[data-gallery-close]').forEach((x) =>
    x.addEventListener('click', close));
  modal.querySelector('[data-gallery-next]')?.addEventListener('click', next);
  modal.querySelector('[data-gallery-prev]')?.addEventListener('click', prev);

  // Clavier : Échap ferme, flèches naviguent, Tab reste piégé dans la modale.
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') { close(); return; }
    if (e.key === 'ArrowRight') { next(); return; }
    if (e.key === 'ArrowLeft') { prev(); return; }
    if (e.key === 'Tab') {
      const items = [...modal.querySelectorAll('button')].filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Swipe tactile (mobile)
  let startX = 0, swiping = false;
  stage?.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; swiping = true; }, { passive: true });
  stage?.addEventListener('touchend', (e) => {
    if (!swiping) return;
    swiping = false;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40 && photos.length > 1) (dx < 0 ? next() : prev());
  });
}
