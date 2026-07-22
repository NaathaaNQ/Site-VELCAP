# VELCAP — Repo guide

Site vitrine de la structure sportive **VELCAP** (7 univers : Association,
Club FFA, Club FFC, Team Élite, La Corrida, Nos Actions, Coaching privé).

## Stack
- **Astro** (sortie statique) + **GSAP/ScrollTrigger** + **Lenis** (smooth scroll).
- `npm install` puis `npm run dev` (port 4321) / `npm run build` (→ `dist/`).
- Contenu des 7 univers : source unique `src/data/univers.js`.
- Pièce maîtresse : la **plateforme tournante** — `src/components/Turntable.astro` + `src/scripts/turntable.js`.
- Pages univers générées dynamiquement : `src/pages/univers/[slug].astro`.
- Visuels = duotones générés (`Visual.astro`) ; remplacer par de vraies photos dans `public/img/univers/`.

## Design — IMPORTANT
Pour **toute évolution visuelle du site**, suivre **[`DESIGN.md`](./DESIGN.md)**
(direction artistique : Swiss / éditorial / techwear, blanc + noir + rouge,
grotesque XXL + monospace, cartes flottantes, photos N&B/duotone rouge).
S'appuyer sur les skills **`frontend-design`** (goût, principes) et
**`ui-ux-pro-max`** (data styles/couleurs/typo).

## Identité
- Couleurs : blanc majoritaire, noir `#0A0A0A`, rouge `#E2000F`.
- Logo : `assets/img/velcap-logo.svg` (recréation vectorielle ; remplacer par le
  PNG officiel `assets/img/velcap-logo.png` si fourni).

## Git
- Git n'est pas disponible en local. Ne jamais exécuter de commandes git.
  Le versionnement se fait uniquement via l'interface web GitHub.
