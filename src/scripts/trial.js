// Modale « Demander une séance d'essai » (composant TrialModal, Team Loisirs).
// - ouverture par tout bouton [data-trial-open] ; data-team présélectionne le groupe
// - le groupe choisi met à jour le champ caché « team », l'objet du mail et les créneaux
// - validation en français (mail, téléphone français), états envoi / succès / erreur
// - accessibilité : focus piégé dans la modale, Échap pour fermer, retour du focus
import { sendWeb3Form } from './web3forms.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// 0X XX XX XX XX, +33 X XX XX XX XX ou 0033… (espaces, points, tirets tolérés)
const PHONE_FR_RE = /^(?:\+33|0033|0)[1-9]\d{8}$/;
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([type="hidden"]):not([tabindex="-1"]), textarea, select, [tabindex]:not([tabindex="-1"])';

function fieldError(input) {
  const v = input.value.trim();
  if (input.required && !v) return input.dataset.msgRequired || 'Ce champ est obligatoire.';
  if (v && input.dataset.check === 'email' && !EMAIL_RE.test(v)) return input.dataset.msgFormat;
  if (v && input.dataset.check === 'phone-fr' && !PHONE_FR_RE.test(v.replace(/[\s.\-()]/g, ''))) return input.dataset.msgFormat;
  return '';
}

function showError(input, msg) {
  const out = document.getElementById(input.getAttribute('aria-describedby'));
  if (out) out.textContent = msg;
  if (msg) input.setAttribute('aria-invalid', 'true');
  else input.removeAttribute('aria-invalid');
}

export function initTrialModal({ lenis } = {}) {
  const modal = document.querySelector('[data-trial-modal]');
  const openers = document.querySelectorAll('[data-trial-open]');
  if (!modal || !openers.length) return;

  const panel = modal.querySelector('[role="dialog"]');
  const form = modal.querySelector('[data-trial-form]');
  const radios = modal.querySelectorAll('input[name="trial-team"]');
  const teamField = form.querySelector('[data-trial-teamfield]');
  const subjectField = form.querySelector('[data-trial-subject]');
  const replyField = form.querySelector('[data-trial-replyto]');
  const slotsOut = modal.querySelector('[data-trial-slots]');
  const submit = form.querySelector('[data-trial-submit]');
  const submitLabel = form.querySelector('[data-trial-submit-label]');
  const feedback = form.querySelector('[data-trial-feedback]');
  const viewForm = modal.querySelector('[data-trial-view="form"]');
  const viewDone = modal.querySelector('[data-trial-view="done"]');
  const doneMsg = modal.querySelector('[data-trial-done]');
  const inputs = [...form.querySelectorAll('input[data-msg-required]')];
  let lastTrigger = null;
  let closeTimer = null;

  const applyTeam = (radio) => {
    if (!radio) return;
    radio.checked = true;
    teamField.value = radio.dataset.value;
    subjectField.value = radio.dataset.subject;
    slotsOut.textContent = radio.dataset.slots;
  };
  radios.forEach((r) => r.addEventListener('change', () => applyTeam(r)));

  const resetState = () => {
    viewForm.hidden = false;
    viewDone.hidden = true;
    submit.disabled = false;
    submit.removeAttribute('aria-busy');
    submitLabel.textContent = 'Envoyer ma demande';
    feedback.textContent = '';
    feedback.classList.remove('is-error');
  };

  const open = (trigger) => {
    clearTimeout(closeTimer);
    lastTrigger = trigger;
    // après un envoi réussi, on repart d'un formulaire vierge
    if (!viewDone.hidden) { form.reset(); inputs.forEach((i) => showError(i, '')); }
    const wanted = trigger?.dataset.team;
    applyTeam([...radios].find((r) => r.value === wanted) || radios[0]);
    resetState();
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    void modal.offsetWidth;               // force le reflow : la transition d'ouverture joue
    modal.classList.add('is-open');
    document.documentElement.style.overflow = 'hidden';
    lenis?.stop();
    form.querySelector('#trial-name')?.focus({ preventScroll: true });
  };

  const close = () => {
    if (modal.hidden) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
    lenis?.start();
    closeTimer = setTimeout(() => { modal.hidden = true; }, 300);
    lastTrigger?.focus({ preventScroll: true });
  };

  openers.forEach((b) => b.addEventListener('click', () => open(b)));
  modal.querySelectorAll('[data-trial-close]').forEach((x) => x.addEventListener('click', close));

  // Clavier : Échap ferme (où que soit le focus), Tab reste dans la modale
  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab') return;
    const items = [...panel.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    const inside = panel.contains(document.activeElement);
    if (e.shiftKey && (document.activeElement === first || !inside)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && (document.activeElement === last || !inside)) { e.preventDefault(); first.focus(); }
  });

  // Validation : au départ du champ, puis en direct une fois l'erreur affichée
  inputs.forEach((input) => {
    input.addEventListener('blur', () => { if (input.value.trim()) showError(input, fieldError(input)); });
    input.addEventListener('input', () => { if (input.hasAttribute('aria-invalid')) showError(input, fieldError(input)); });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let firstInvalid = null;
    inputs.forEach((input) => {
      const msg = fieldError(input);
      showError(input, msg);
      if (msg && !firstInvalid) firstInvalid = input;
    });
    if (firstInvalid) {
      feedback.textContent = 'Vérifie les champs en rouge.';
      feedback.classList.add('is-error');
      firstInvalid.focus();
      return;
    }

    replyField.value = form.elements.email.value.trim();   // réponse directe à la personne
    submit.disabled = true;
    submit.setAttribute('aria-busy', 'true');
    submitLabel.textContent = 'Envoi en cours…';
    feedback.textContent = 'Envoi en cours…';
    feedback.classList.remove('is-error');

    try {
      await sendWeb3Form(form);
      viewForm.hidden = true;
      viewDone.hidden = false;
      doneMsg.focus();
    } catch {
      submit.disabled = false;
      submit.removeAttribute('aria-busy');
      submitLabel.textContent = 'Réessayer';
      feedback.textContent = "L'envoi n'a pas abouti. Vérifie ta connexion puis réessaie.";
      feedback.classList.add('is-error');
    }
  });
}
