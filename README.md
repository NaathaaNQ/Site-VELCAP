# VELCAP — Site web

Site de la structure sportive **VELCAP** (7 univers : Association, Club FFA,
Club FFC, Team Élite, La Corrida, Nos Actions, Coaching privé).

Direction : *Swiss / éditorial / techwear* — blanc majoritaire, noir, rouge
`#E2000F` ; typo **Space Grotesk + Inter + JetBrains Mono**. Voir [`DESIGN.md`](./DESIGN.md).

## Stack

- **[Astro](https://astro.build)** (sortie 100 % statique)
- **GSAP** + **ScrollTrigger** (animations) · **Lenis** (smooth scroll)
- Aucune dépendance serveur. Déployable sur GitHub Pages / Netlify / Vercel.

## Démarrer

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère /dist (statique)
npm run preview   # prévisualise le build
```

## Structure

```
src/
  data/univers.js          # contenu des 7 univers (source unique)
  layouts/Base.astro       # <head>, polices, header/footer, init JS
  components/
    Header.astro           # en-tête + menu plein écran
    Footer.astro
    Turntable.astro        # la plateforme tournante (panneaux 3D)
    Visual.astro           # visuel duotone généré (placeholder photo)
  pages/
    index.astro            # accueil
    univers/[slug].astro   # 7 pages générées depuis univers.js
  scripts/
    main.js                # Lenis + GSAP reveals + header + menu + form
    turntable.js           # logique de la plateforme tournante
  styles/global.css        # design system (tokens, base)
public/img/velcap-logo.svg # logo (recréation vectorielle)
```

## Animations

- Smooth scroll (Lenis), séquence d'intro au chargement, reveals au scroll,
  parallaxe douce, plateforme tournante (rotation GSAP, drag, clavier, auto).
- `prefers-reduced-motion` respecté : tout s'affiche sans animation si demandé.

## À brancher / personnaliser

- **Photos** : les visuels sont des duotones générés (placeholders). Déposer de
  vraies photos dans `public/img/univers/` et remplacer le bloc média de
  `Visual.astro`. *(Le CDN d'images externes était bloqué à la création.)*
- **Logo** : `public/img/velcap-logo.svg` — remplacer par le PNG/vectoriel
  officiel si fourni.
- **Formulaire** : confirmation côté client seulement. Brancher un service
  (Netlify Forms, Formspree, e-mail) pour recevoir les demandes.
- **Contenu** : tout passe par `src/data/univers.js`.
