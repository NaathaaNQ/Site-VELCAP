// Les 6 univers VELCAP. Source unique : alimente l'accueil, la plateforme
// tournante et les pages dédiées. Ordre = ordre d'affichage.

export const univers = [
  {
    slug: 'team-loisirs',
    index: '01',
    name: 'Team Loisirs',
    discipline: 'Communauté · loisir',
    lead: 'Courir encadré, progresser ensemble.',
    intro:
      "Le Team Loisirs, c'est l'association loi 1901 de VELCAP : démocratiser l'accès à un entraînement encadré, du débutant au confirmé, et faire vivre une communauté forte. Séances encadrées, sorties festives et événements qui rassemblent.",
    note: 'Sorties et entraînements orientés trail et route, encadrés par nos coachs certifiés.',
    schedule: ['Mardi · 19h00 à 20h30', 'Jeudi · 19h00 à 20h30'],
    freeTrial: {
      title: "Viens tester une séance, c'est gratuit",
      text: "Pas encore décidé ? Rejoins-nous un mardi ou un jeudi soir pour un entraînement d'essai, sans aucun engagement.",
    },
    tiers: [
      {
        name: 'Adhésion Communauté',
        price: '180 €',
        features: [
          '2 entraînements encadrés / semaine (mardi et jeudi, 19h à 20h30)',
          'Jeux concours exclusifs',
          '1 social run festif par mois',
          'Participation à tous nos événements',
          'Un maillot VELCAP',
          'Des avantages sur le merch',
        ],
      },
      {
        name: 'Adhésion Performance',
        price: '250 €',
        highlight: true,
        features: [
          "Toute l'offre Communauté, et en plus :",
          '1 séance de prépa physique',
          'Accès prioritaire chez le kiné',
          'Des séminaires nutrition',
          "2 semaines / an d'accompagnement complet avant une compétition",
        ],
      },
    ],
    coaches: [
      { name: 'Prénom Nom', role: 'Coach running', line: 'Séances du mardi, spécialiste route et endurance.' },
      { name: 'Prénom Nom', role: 'Coach trail', line: 'Sorties nature et préparation aux courses de trail.' },
      { name: 'Prénom Nom', role: 'Prépa physique', line: 'Renforcement, mobilité et prévention des blessures.' },
    ],
    cta: 'Adhérer au Team Loisirs',
    ctaKind: 'Adhésion',
  },
  {
    slug: 'team-elite',
    index: '02',
    name: 'Team Élite',
    discipline: 'Haut niveau',
    lead: 'Une élite franc-comtoise, soudée et ambitieuse.',
    intro:
      "Créer une élite régionale, voire nationale, en Franche-Comté : des athlètes qui performent en trail, sur route, en cross et sur piste, portés par un esprit d'équipe et de solidarité. Performer, ensemble.",
    points: [
      { k: 'Stages', v: 'Des stages réguliers pour franchir des paliers ensemble.' },
      { k: 'Coaching', v: 'Un accompagnement coaching pour celles et ceux qui en ont besoin.' },
      { k: 'Santé', v: 'Des créneaux rapides chez le kiné.' },
      { k: 'Logistique et financier', v: 'Un soutien sur les déplacements et la logistique.' },
      { k: 'Visibilité', v: 'Vos performances relayées sur nos réseaux.' },
      { k: 'En équipe', v: 'Les lièvres des Rives du Doubs, les Boucles Vauban, l’Ekiden…' },
    ],
    aside: {
      title: 'Team Accession',
      text: "Le Team Élite est épaulé par un Team Accession : celles et ceux qui ambitionnent de le rejoindre s'y préparent et progressent avec le collectif.",
    },
    criteria: [
      'La motivation à porter le projet',
      'Un esprit d’équipe fort',
      'Renvoyer une image positive',
      'Évoluer avec le projet',
      'La performance',
    ],
    cta: 'Candidater à la Team Élite',
    ctaKind: 'Candidature',
  },
  {
    slug: 'club-ffa',
    index: '03',
    name: 'Club FFA',
    discipline: 'Athlétisme · jeunes et compétition',
    lead: 'Former les jeunes, ouvrir la compétition à tous.',
    intro:
      "Démocratiser la formation des jeunes en trail, sur route et sur piste. Un encadrement structuré dès le plus jeune âge pour exploiter tout le potentiel de demain, avec l'accès à la licence FFA et à la compétition pour toutes et tous.",
    points: [
      { k: 'Deux créneaux / semaine', v: 'Lundi et mercredi dès 18h30, un créneau du samedi à venir.' },
      { k: 'Objectifs forts', v: 'Les compétitions fédérales, jusqu’aux Championnats de France.' },
      { k: 'Les jeunes d’abord', v: 'Un accompagnement structuré dès le plus jeune âge.' },
      { k: 'Licence FFA', v: 'Ouvert à toute personne désireuse de faire de la compétition.' },
    ],
    schedule: ['Lundi · dès 18h30', 'Mercredi · dès 18h30', 'Samedi · créneau à venir'],
    price: '?',
    freeTrial: {
      title: "Viens tester une séance, c'est gratuit",
      text: "Jeune ou adulte, viens essayer un créneau gratuitement avant de prendre ta licence FFA.",
    },
    coaches: [
      { name: 'Prénom Nom', role: 'Entraîneur jeunes', line: 'Initiation et formation des plus jeunes sur piste.' },
      { name: 'Prénom Nom', role: 'Entraîneur piste', line: 'Sprint, demi-fond et préparation aux compétitions.' },
      { name: 'Prénom Nom', role: 'Entraîneur route et cross', line: 'Endurance, cross et objectifs fédéraux.' },
    ],
    cta: 'Prendre une licence FFA',
    ctaKind: 'Licence',
  },
  {
    slug: 'club-ffc',
    index: '04',
    name: 'Club FFC',
    discipline: 'Cyclisme',
    lead: 'Bientôt.',
    intro:
      "Le projet cyclisme se dessine. Les contours du club FFC arrivent bientôt. Laisse-nous tes coordonnées pour être prévenu dès l'ouverture.",
    comingSoon: true,
    cta: 'Être informé du lancement',
    ctaKind: 'Newsletter',
  },
  {
    slug: 'evenements',
    index: '05',
    name: 'Nos événements',
    discipline: 'Temps forts',
    lead: 'Le calendrier qui rassemble la communauté.',
    intro:
      "Toute l'année, VELCAP anime le territoire : courses, social runs, fan zones, social rides et stages. Les rendez-vous où l'on se retrouve, où l'on partage, où l'on fait la fête.",
    events: [
      'Corrida de Salins',
      'Social Run Décathlon',
      'Les lièvres, Rives du Doubs',
      'Les Boucles Vauban',
      'Fan zone, Trail des Forts',
      'Fan zone, Trail Volodalen',
      'Social ride, pros du sport et assos',
      'Stages',
    ],
    request:
      "Envie qu'on intervienne sur ton événement, ou de participer à l'un des nôtres ? Écris-nous.",
    cta: 'Nous envoyer une demande',
    ctaKind: 'Contact',
  },
  {
    slug: 'coaching',
    index: '06',
    name: 'Coaching privé',
    discipline: 'Sur-mesure',
    lead: 'Un accompagnement individualisé, à ton objectif.',
    intro:
      "Du débutant à l'élite, on t'accompagne dans tes objectifs : course à pied, trail, route, cross, piste et vélo. Un coaching individualisé, construit pour toi.",
    tiers: [
      { name: 'Basique', price: null, features: [] },
      { name: 'Médium', price: null, highlight: true, features: [] },
      { name: 'Premium', price: null, features: [] },
    ],
    tiersNote: 'Trois formules, du basique au premium. Contenu et tarifs à définir prochainement.',
    coaches: [
      { name: 'Prénom Nom', role: 'Coach', line: 'Accompagnement individualisé, construit autour de ton objectif.' },
      { name: 'Prénom Nom', role: 'Coach', line: 'Suivi régulier, plan d’entraînement et ajustements en continu.' },
      { name: 'Prénom Nom', role: 'Coach', line: 'De la reprise à la performance, à ton rythme.' },
    ],
    cta: 'Demander un coaching',
    ctaKind: 'Sur devis',
  },
];

export const getUnivers = (slug) => univers.find((u) => u.slug === slug);
