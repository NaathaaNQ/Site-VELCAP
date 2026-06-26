import { defineConfig } from 'astro/config';

// Site statique VELCAP — sortie 100% statique, déployable sur
// GitHub Pages / Netlify / Vercel sans serveur.
export default defineConfig({
  site: 'https://velcap.fr',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
