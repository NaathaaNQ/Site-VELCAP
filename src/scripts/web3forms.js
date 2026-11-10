// Envoi brut d'un formulaire vers Web3Forms (réception par e-mail).
// Résout si l'envoi est accepté, rejette sinon (réseau ou refus du service).
export async function sendWeb3Form(form) {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: new FormData(form),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) throw new Error(data.message || 'echec');
  return data;
}
