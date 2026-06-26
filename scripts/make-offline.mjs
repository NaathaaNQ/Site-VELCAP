// Transforme le build Astro (dist/) en version ouvrable par double-clic (file://).
// - regroupe tout le JS en un script classique (dist/app.js)
// - réécrit les chemins absolus (/_astro, /img, /univers...) en relatifs
// - remplace les scripts type="module" (bloqués en file://) par app.js
//
// Usage : node scripts/make-offline.mjs   (après `astro build`)

import { build } from 'esbuild';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, dirname, posix } from 'node:path';

const DIST = 'dist';
const ROOT = process.cwd();

// 1) Bundle JS classique (IIFE) ---------------------------------------------
await build({
  entryPoints: ['src/offline-entry.js'],
  bundle: true,
  format: 'iife',
  minify: true,
  outfile: join(DIST, 'app.js'),
  legalComments: 'none',
});
console.log('✓ app.js bundlé (script classique)');

// 2) Lister les .html --------------------------------------------------------
function walk(dir) {
  let out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out = out.concat(walk(p));
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

// Convertit un chemin absolu du site en fichier dist-relatif
function toTargetFile(absPath) {
  // absPath commence par "/"
  if (absPath === '/' || absPath === '') return 'index.html';
  const clean = absPath.replace(/^\//, '');
  // asset (a une extension) -> tel quel
  if (/\.[a-z0-9]+$/i.test(clean)) return clean;
  // route -> dossier/index.html (format directory)
  return clean.replace(/\/$/, '') + '/index.html';
}

function relForFile(htmlFile, value) {
  // ignore externes, ancres pures, mailto, etc.
  if (!value.startsWith('/')) return value;
  const [path, hash] = value.split('#');
  const target = toTargetFile(path);
  const fromDir = dirname(relative(DIST, htmlFile));
  let rel = posix.relative(fromDir.split(/[\\/]/).join('/'), target);
  if (!rel.startsWith('.')) rel = './' + rel;
  return rel + (hash !== undefined ? '#' + hash : '');
}

const htmlFiles = walk(DIST);
for (const file of htmlFiles) {
  let html = readFileSync(file, 'utf8');

  // retirer les scripts modules et modulepreload (incompatibles file://)
  html = html.replace(/<script[^>]*type=["']module["'][^>]*><\/script>/g, '');
  html = html.replace(/<link[^>]*rel=["']modulepreload["'][^>]*>/g, '');

  // réécrire href="/..." et src="/..."
  html = html.replace(/\b(href|src)=("|')(\/[^"']*)\2/g, (m, attr, q, val) => {
    return `${attr}=${q}${relForFile(file, val)}${q}`;
  });

  // injecter le script classique avant </body>
  const appRel = relForFile(file, '/app.js');
  html = html.replace('</body>', `  <script src="${appRel}"></script>\n</body>`);

  writeFileSync(file, html);
}
console.log(`✓ ${htmlFiles.length} page(s) HTML réécrites pour file://`);
console.log('→ dist/ est maintenant ouvrable en double-cliquant index.html');
