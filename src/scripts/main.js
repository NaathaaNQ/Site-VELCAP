import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { initTurntable } from './turntable.js';
import { initGallery } from './gallery.js';

gsap.registerPlugin(ScrollTrigger);

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis = null;

function initSmoothScroll() {
  if (REDUCED) return;
  lenis = new Lenis({ duration: 1.0, smoothWheel: true, wheelMultiplier: 1.18, lerp: 0.11 });
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

  // Parallaxe douce (centrée : de -amt à +amt pour ne pas découvrir les bords)
  gsap.utils.toArray('[data-parallax]').forEach((el) => {
    const amt = parseFloat(el.dataset.parallax || 10);
    gsap.fromTo(el, { yPercent: -amt }, {
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
  menu.querySelectorAll('[data-menu-close]').forEach((c) => c.addEventListener('click', closeMenu));
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

function initMagnetic() {
  if (REDUCED || window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    const strength = 0.35;
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * strength;
      const y = (e.clientY - r.top - r.height / 2) * strength;
      gsap.to(el, { x, y, duration: 0.5, ease: 'power3.out' });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

// Envoi d'un formulaire vers Web3Forms (réception par e-mail). Gère l'état du
// bouton et les messages de succès / d'erreur affichés à l'utilisateur.
async function submitWeb3Form(form, out, successMsg) {
  if (!form.checkValidity()) { form.reportValidity(); return; }
  const btn = form.querySelector('[type="submit"]');
  btn?.setAttribute('disabled', 'true');
  if (out) { out.textContent = 'Envoi en cours…'; out.classList.remove('is-error'); }
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.success) {
      if (out) out.textContent = successMsg;
      form.reset();                       // vide les champs ; le bouton reste désactivé
    } else {
      throw new Error(data.message || 'echec');
    }
  } catch {
    if (out) { out.textContent = "Oups, l'envoi a échoué. Réessaie, ou écris-nous à velcapteam@gmail.com."; out.classList.add('is-error'); }
    btn?.removeAttribute('disabled');     // on laisse réessayer
  }
}

function initForm() {
  const form = document.querySelector('[data-engage-form]');
  if (!form) return;
  const out = form.querySelector('[data-engage-feedback]');

  // pré-sélection depuis ?u=<slug> (lien "demande" d'une page univers)
  const pre = new URLSearchParams(location.search).get('u');
  if (pre) {
    const opt = form.querySelector(`option[data-slug="${pre}"]`);
    if (opt) opt.selected = true;
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitWeb3Form(form, out, 'Merci, ta demande a bien été envoyée ! On te recontacte très vite.');
  });
}

function initContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  const out = form.querySelector('[data-contact-feedback]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitWeb3Form(form, out, 'Merci, ton message a bien été envoyé ! On te répond très vite.');
  });
}

// Formulaires de collecte (composant WaitlistForm) : Club FFC, inscriptions et
// recontacts d'événements. Plusieurs instances possibles sur une même page.
function initWaitlistForms() {
  document.querySelectorAll('[data-waitlist-form]').forEach((form) => {
    const out = form.querySelector('[data-waitlist-feedback]');
    const tpl = form.dataset.success || "Merci {firstname}, c'est bien noté. On revient vers toi très vite.";
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const first = form.querySelector('[name="firstname"]')?.value || '';
      submitWeb3Form(form, out, tpl.replace('{firstname}', first));
    });
  });
}

function initUniversModal() {
  const modal = document.querySelector('[data-univers-modal]');
  if (!modal) return;
  const tierSel = modal.querySelector('select[name="tier"]');

  const open = (tier) => {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';
    lenis?.stop();
    if (tier && tierSel) {
      const o = [...tierSel.options].find((x) => x.value.includes(tier));
      if (o) o.selected = true;
    }
    setTimeout(() => modal.querySelector('input, select, textarea')?.focus(), 60);
  };
  const close = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
    lenis?.start();
  };

  document.querySelectorAll('[data-open-form]').forEach((b) =>
    b.addEventListener('click', () => open(b.dataset.tier)));
  modal.querySelectorAll('[data-modal-close]').forEach((x) => x.addEventListener('click', close));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('is-open')) close(); });

  const form = modal.querySelector('[data-univers-form]');
  const out = modal.querySelector('[data-univers-feedback]');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    submitWeb3Form(form, out, 'Merci, ta demande a bien été envoyée ! On te recontacte très vite.');
  });
}


export function initSite() {
  initSmoothScroll();
  initIntro();
  initReveals();
  initHeader();
  initMenu();
  initForm();
  initContactForm();
  initWaitlistForms();
  initUniversModal();
  initGallery({ lenis });
  initMagnetic();
  initTurntable({ lenis, reduced: REDUCED });
  // Recalcule après chargement des polices
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh());
}
