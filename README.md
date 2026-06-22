# VELCAP — Site web

Site vitrine de la structure sportive **VELCAP**, qui réunit 7 univers :
Association · Club FFA (athlétisme) · Club FFC (cyclisme) · Team Élite · La Corrida · Nos Actions · Coaching privé.

## Concept

- **Plateforme tournante 3D** : un carrousel « drum/coverflow » de panneaux digitaux
  (type panneau LED de stade), un par univers. On fait défiler les panneaux et
  on scrolle le contenu à l'intérieur du panneau actif.
- **Identité** : blanc majoritaire, noir, rouge sport (`#E2000F`) — accordée au logo.
- **Typo** : Barlow Condensed (titres) + Barlow (texte) — paire « Sports/Fitness ».
- Dynamique, sportif, orienté engagement (formulaire d'adhésion).

## Lancer en local

Aucun build. Ouvre simplement `index.html`, ou sers le dossier :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## Navigation de la plateforme

- Flèches ‹ › · rail du haut · pastilles du bas · clavier ← → · swipe/drag
- Bouton **Rotation auto** pour la faire tourner toute seule

## Structure

```
index.html              # page
assets/css/styles.css   # styles (palette, 3D, responsive)
assets/js/app.js         # plateforme tournante + contenu des 7 univers
assets/img/             # logo/visuels (déposer velcap-logo.png ici)
```

## À personnaliser

- **Contenu** des univers : tableau `PANELS` dans `assets/js/app.js`.
- **Logo** : le wordmark est en CSS ; pour utiliser ton fichier, dépose
  `assets/img/velcap-logo.png` et remplace `.brand__word` dans `index.html`.
- **Formulaire** : `#engageForm` affiche un message de confirmation côté client.
  Brancher un back-end / service mail pour recevoir les demandes.
