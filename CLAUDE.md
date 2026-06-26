# VELCAP — Repo guide

Site vitrine de la structure sportive **VELCAP** (7 univers : Association,
Club FFA, Club FFC, Team Élite, La Corrida, Nos Actions, Coaching privé).

## Stack
- Site statique : `index.html` + `assets/css/styles.css` + `assets/js/app.js`.
- **Aucun build.** Tester via `python3 -m http.server 8000`.
- Pièce maîtresse : la **plateforme tournante** (carrousel 3D de panneaux), JS dans `assets/js/app.js` (tableau `PANELS`).

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
- Brancher le travail sur la branche de feature en cours ; commit + push.
