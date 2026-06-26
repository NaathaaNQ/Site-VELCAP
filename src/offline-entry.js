// Point d'entrée pour la version "offline" (ouvrable en double-clic).
// Bundlé par esbuild en script classique (IIFE) — pas de modules ES,
// ce qui permet l'exécution depuis un fichier file://.
import { initSite } from './scripts/main.js';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite);
} else {
  initSite();
}
