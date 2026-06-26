// Copie le build "offline" (dist/) vers le dossier versionné site/ pour que
// le ZIP téléchargé depuis GitHub contienne le site prêt à ouvrir.
// Lancé après `build:offline`. Voir le script npm "build:site".

import { rmSync, mkdirSync, cpSync } from 'node:fs';

const SRC = 'dist';
const OUT = 'site';

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync(SRC, OUT, { recursive: true });

console.log(`✓ ${SRC}/ copié vers ${OUT}/ (versionné, ouvrable par double-clic)`);
