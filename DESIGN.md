# VELCAP — Direction artistique

> Brief de référence pour le design du site VELCAP. À appliquer à **toute
> évolution UI** du site. Inspiré de 4 références fournies par le client :
> **« lab. »** (Swiss rouge/noir/blanc), **RICO Jitter** (éditorial monospace +
> cartes flottantes, versions claire & sombre) et **Adventure** (hero
> cinématographique). Combiner avec les skills `frontend-design` et
> `ui-ux-pro-max`.

## 1. Esprit général

**Swiss / éditorial / techwear sportif.** Minimalisme structuré, grille forte,
beaucoup d'espace négatif, rigueur typographique. Le site doit ressembler à un
portfolio de studio de design / une marque techwear — pas à un template club de
sport. Énergie sportive transmise par le contraste, les gros chiffres, la
photo et le mouvement, pas par la surcharge.

## 2. Palette

| Rôle | Valeur | Usage |
|------|--------|-------|
| Blanc / gris clair | `#FFFFFF` · `#F4F4F5` | Fond **majoritaire** |
| Noir | `#0A0A0A` | Texte, blocs, sections « studio » |
| Rouge sport | `#E2000F` (foncé `#B3000C`, clair `#FF2D3C`) | Accent : **blocs pleins** + **duotone photo** + CTA |
| Fond sombre alt. | `#0B0B0D` | Sections inversées type « RICO black » |

Règle : le rouge se pose en **aplats francs** (carré, bandeau, pilule) ou en
**duotone** sur les photos — jamais en dégradé baveux. Un seul accent à la fois.

## 3. Typographie

- **Display (titres)** : grotesque néo-suisse, **très gros, serré**, parfois
  **bas-de-casse** avec point final (`velcap.`). Familles cibles : *Inter*,
  *Archivo*, *Space Grotesk*, *Neue Haas / Helvetica Now*-like.
- **Méta / labels** : **MONOSPACE** (*Space Mono*, *JetBrains Mono*) en petites
  **capitales espacées** (`letter-spacing` large). Pour : numéros d'index
  (`01 — 07`), compteurs, specs, tickers de coin, légendes.
- Barlow Condensed peut rester en accent « sportif » ponctuel, mais le cœur
  passe à **grotesque + monospace**.
- Le duo signal de RICO : `Inter + Space Mono`.

## 4. Layout & composants signature

- **Grille forte et asymétrique**, espace négatif généreux.
- **Coin-labels monospace** : haut (`VELCAP®`, `Showcase`, n° de section,
  `Jitter`-like) et bas (specs, `YR25`, glyphes discrets).
- **Chiffres surdimensionnés** (`01`, `100`, `06`) comme éléments graphiques.
- **Cartes / panneaux rectangulaires arrondis** qui **se chevauchent** et
  flottent (solides ou translucides « glass »). → le concept **plateforme
  tournante** existant se restyle en cartes flottantes éditoriales.
- **Boutons pilule** noirs (ou rouges) avec **flèche** : `S'engager →`,
  `View →`. Coins parfaitement arrondis (`border-radius: 999px`).
- **Specimen typographique** (`Aa`) et **swatches** couleur en petits carrés.
- **Index vertical** numéroté sur les héros (`01 02 03 04`).

## 5. Photographie

- Athlètes (course, vélo) en **noir & blanc fort contraste** ou **duotone
  rouge**. Plein cadre en hero, recadrage éditorial serré.
- Pas de stock coloré générique : traitement = identité.

## 6. Mouvement

- Kinétique et net : « jitter », drag-and-drop, hover francs, transitions
  `200–300ms`, `cubic-bezier(.22,.61,.36,1)`. Respecter
  `prefers-reduced-motion`.

## 7. À éviter

- Dégradés mous, ombres diffuses partout, coins timides.
- Centrage systématique : préférer l'asymétrie.
- Look « template Bootstrap club de sport ».

---
*Maj. : juin 2026 — d'après 4 références client. Mettre à jour si de nouvelles
références sont fournies.*
