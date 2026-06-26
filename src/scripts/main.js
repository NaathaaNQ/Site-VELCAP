import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { initTurntable } from './turntable.js';

gsap.registerPlugin(ScrollTrigger);

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis = null;

function initSmoothScroll() {
  if (REDUCED) return;
  lenis = new Lenis({ duration: 1.1, smoothWheel: true, wheelMultiplier: 1, lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  // Liens d'ancrage -> scroll fluide
  document.querySelectorAll('a[href^="/#"], a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').split('#')[1];
      const target = id && document.getElementById(id);
      if (target) { e.preventDefault(); closeMenu(); lenis.scrollTo(target, { offset: -10, duration: 1.2 }); }
    });
  });
}

function initReveals() {
  if (REDUCED) return;

  // Groupes : enfants en cascade
  gsap.utils.toArray('[data-reveal-group]').forEach((group) => {
    const items = group.querySelectorAll('[data-reveal-item]');
    gsap.set(items, { opacity: 0, y: 30 });
    ScrollTrigger.create({
      trigger: group, start: 'top 82%', once: true,
      onEnter: () => gsap.to(items, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08 }),
    });
  });

  // Éléments isolés
  gsap.utils.toArray('[data-reveal]').forEach((el) => {
    const y = el.dataset.reveal === 'fade' ? 0 : 34;
    gsap.set(el, { opacity: 0, y });
    ScrollTrigger.create({
      trigger: el, start: 'top 86%', once: true,
      onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: parseFloat(el.dataset.delay || 0) }),
    });
  });

  // Parallaxe douce
  gsap.utils.toArray('[data-parallax]').forEach((el) => {
    const amt = parseFloat(el.dataset.parallax || 12);
    gsap.to(el, {
      yPercent: amt, ease: 'none',
      scrollTrigger: { trigger: el.closest('[data-parallax-scope]') || el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}

function initHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) return;
  let last = 0;
  const onScroll = (y) => {
    header.classList.toggle('is-stuck', y > 24);
    if (!document.querySelector('.navmenu.is-open')) {
      header.classList.toggle('is-hidden', y > last && y > 240);
    }
    last = y;
  };
  if (lenis) lenis.on('scroll', ({ scroll }) => onScroll(scroll));
  else window.addEventListener('scroll', () => onScroll(window.scrollY), { passive: true });
  onScroll(window.scrollY);
}

function closeMenu() {
  const menu = document.querySelector('[data-menu]');
  const toggle = document.querySelector('[data-menu-toggle]');
  if (!menu || !menu.classList.contains('is-open')) return;
  menu.classList.remove('is-open');
  menu.setAttribute('aria-hidden', 'true');
  toggle?.setAttribute('aria-expanded', 'false');
  document.documentElement.style.overflow = '';
  lenis?.start();
}

function initMenu() {
  const menu = document.querySelector('[data-menu]');
  const toggle = document.querySelector('[data-menu-toggle]');
  if (!menu || !toggle) return;
  toggle.addEventListener('click', () => {
    const open = !menu.classList.contains('is-open');
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    document.documentElement.style.overflow = open ? 'hidden' : '';
    open ? lenis?.stop() : lenis?.start();
  });
  menu.querySelectorAll('[data-menu-link]').forEach((l) => l.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
}

function initIntro() {
  const items = gsap.utils.toArray('[data-intro]');
  if (!items.length) return;
  if (REDUCED) { gsap.set(items, { opacity: 1, y: 0, clipPath: 'none' }); return; }
  items.sort((a, b) => (a.dataset.introOrder || 0) - (b.dataset.introOrder || 0));
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 });
  items.forEach((el, i) => {
    const isClip = el.dataset.intro === 'clip';
    if (isClip) {
      gsap.set(el, { opacity: 1, clipPath: 'inset(0 0 100% 0)' });
      tl.to(el, { clipPath: 'inset(0 0 0% 0)', duration: 1.1 }, i === 0 ? 0 : '-=0.78');
    } else {
      gsap.set(el, { opacity: 0, y: el.dataset.intro === 'fade' ? 0 : 26 });
      tl.to(el, { opacity: 1, y: 0, duration: 0.9 }, i === 0 ? 0 : '-=0.66');
    }
  });
}

function initForm() {
  const form = document.querySelector('[data-engage-form]');
  if (!form) return;
  const out = form.querySelector('[data-engage-feedback]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const data = new FormData(form);
    if (out) out.textContent = `Merci ${data.get('name')} — demande « ${data.get('interest')} » reçue. On te recontacte très vite.`;
    form.querySelector('[type="submit"]')?.setAttribute('disabled', 'true');
  });
}

export function initSite() {
  initSmoothScroll();
  initIntro();
  initReveals();
  initHeader();
  initMenu();
  initForm();
  initTurntable({ lenis, reduced: REDUCED });
  // Recalcule après chargement des polices
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh());
}
