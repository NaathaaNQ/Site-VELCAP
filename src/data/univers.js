// Les 6 univers VELCAP. Source unique : alimente l'accueil, la plateforme
// tournante et les pages dédiées. Ordre = ordre d'affichage.

export const univers = [
  {
    slug: 'team-loisirs',
    index: '01',
    name: 'Team Loisirs',
    discipline: 'Communauté · loisir',
    lead: 'Courir et progresser avec des coureur(e)s motivé(e)s !',
    intro:
      "Marre de t'entraîner seul ou à l'aveugle ? Rejoins la Team Loisirs VELCAP !!! L'objectif est de démocratiser l'accès à un entraînement encadré pour tous, courir avec des personnes motivées, participer à des événements festifs, faire vivre une communauté forte et plus encore !",
    note: 'Sorties et entraînements orientés trail et route, encadrés par nos coachs certifiés.',
    schedule: ['Mardi · 19h00 à 20h30', 'Jeudi · 19h00 à 20h30'],
    places: 'Les Rives du Doubs, les forts de Besançon (Rosemont, Chaudanne, Bregille, Planoise…) ou en centre-ville.',
    placesNote: "Sur les plus grands lieux d'entraînement : deux séances d'essai gratuites.",
    freeTrial: {
      title: "Deux jours d'essai, gratuits",
      text: "Viens tester le Team Loisirs pendant deux jours d'essai gratuits, un mardi et un jeudi soir, sans aucun engagement.",
    },
    tiers: [
      {
        name: 'Adhésion Communauté',
        price: '180 €',
        sub: 'soit 15 € par mois',
        features: [
          '2 entraînements encadrés / semaine (mardi et jeudi, 19h à 20h30)',
          'Accès à une communauté WhatsApp',
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
        sub: 'soit 20,80 € par mois',
        highlight: true,
        features: [
          "Toute l'offre Communauté, et en plus :",
          '1 séance de renforcement par semaine',
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
    lead: 'Compétitions, championnats fédéraux et formation des jeunes !',
    intro:
      "Tu désires faire de la compétition ? Participer à des championnats fédéraux ? Tu es jeune et tu cherches à progresser ? Rejoins le club FFA afin de progresser avec un collectif soudé et motivé !!!",
    points: [
      { k: 'Trois créneaux / semaine', v: 'Lundi et mercredi dès 18h30, samedi de 9h à 12h.' },
      { k: 'Objectifs forts', v: 'Les compétitions fédérales, jusqu’aux Championnats de France.' },
      { k: 'Les jeunes d’abord', v: 'Un accompagnement structuré dès le plus jeune âge.' },
      { k: 'Licence FFA', v: 'Ouvert à toute personne désireuse de faire de la compétition.' },
    ],
    schedule: ['Lundi · dès 18h30', 'Mercredi · dès 18h30', 'Samedi · 9h à 12h'],
    places: 'Les Rives du Doubs, les forts de Besançon (Rosemont, Chaudanne, Bregille, Planoise…), la piste Léo Lagrange ou le STAPS.',
    placesNote: "Sur les plus grands lieux d'entraînement : deux séances d'essai gratuites.",
    price: '200 €',
    priceNote: "Licence FFA, à l'année",
    freeTrial: {
      title: "Deux jours d'essai, gratuits",
      text: "Jeune ou adulte, viens essayer le club pendant deux jours d'essai gratuits avant de prendre ta licence FFA.",
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
    events: {
      // à venir : du plus proche au plus lointain
      upcoming: [
        { name: 'Social Run avec Décathlon', date: 'Tous les vendredis', place: 'Décathlon Besançon', desc: "Un rendez-vous hebdomadaire décontracté au départ du magasin : on court ensemble, tous niveaux, puis on partage un moment." },
        { name: 'Social Ride avec ASSOS x PRODUSPORT', date: '12/09/2026', place: 'Besançon et alentours', desc: "Une sortie vélo qui réunit ASSOS, PRODUSPORT et la communauté VELCAP autour d'un moment de partage." },
        { name: 'Lièvres Boucle Vauban (semi et 10 km)', date: '20/09/2026', place: 'Besançon', desc: 'Nos lièvres t’emmènent sur la Boucle Vauban, en toute régularité, sur le semi et le 10 km.' },
        { name: 'Corrida de Salins', date: 'Novembre 2026', place: 'Salins-les-Bains', desc: "La corrida de fin d'année : une course conviviale dans les rues de Salins, entre effort et ambiance de fête." },
      ],
      // passés : du plus récent au plus ancien
      past: [
        { name: 'Fan Zone Trail Volodalen', date: '25/07/2026', place: 'Massif jurassien', desc: 'VELCAP a posé sa fan zone sur le Trail Volodalen pour soutenir les coureurs sur les portions clés.' },
        { name: 'Fan Zone Trail des Forts', date: '8 au 10 mai 2026', place: 'Forts de Besançon', desc: 'On a installé la fan zone pour encourager les traileurs sur les forts : tambours, banderoles et bonne humeur.' },
        { name: 'Stage en Ardèche', date: '4 au 11 avril 2026', place: 'Ardèche', desc: 'Une semaine de stage pour progresser ensemble : volume, technique, cohésion et bons moments hors du quotidien.' },
        { name: 'Lièvres Rives du Doubs', date: '29 mars 2026', place: 'Rives du Doubs, Besançon', desc: "Nos lièvres ont accompagné les coureurs sur les allures cibles, le long du Doubs." },
      ],
    },
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
    lead: 'Un accompagnement individualisé à ton objectif.',
    intro:
      "Du débutant à l'élite, on t'accompagne dans tes objectifs : course à pied, trail, route, cross, piste et vélo. Un coaching individualisé, construit pour toi.",
    tiers: [
      {
        name: 'Basique', price: '70 €', per: '/mois', asterisk: true,
        features: [
          'Appel bilan de 30 min à 1 h',
          'Plan 100 % individualisé, adapté à ton niveau, tes contraintes et tes objectifs',
          'Un échange par semaine + 1 appel avant l’objectif principal',
          'Plan livré chaque semaine selon tes retours',
          'Sports croisés possibles',
          'Planification des séances via Nolio (gratuit)',
        ],
      },
      {
        name: 'Medium', price: '100 €', per: '/mois', asterisk: true,
        features: [
          'Appel bilan de 30 min à 1 h',
          'Plan 100 % individualisé, adapté à ton niveau, tes contraintes, tes objectifs et ton évolution',
          'Analyse des axes de progression et du niveau actuel pour adapter l’entraînement',
          'Entraînement croisé possible',
          'Échange régulier par message + 1 appel par semaine si besoin (WhatsApp)',
          'Plan livré chaque semaine selon les retours et analyses',
          'Planification via Nolio (gratuit)',
          'Conseils pré-objectifs (sommeil, hydratation, nutrition)',
          'Retour sur les objectifs une fois atteints',
        ],
      },
      {
        name: 'Premium', price: '135 €', per: '/mois', highlight: true, asterisk: true,
        features: [
          'Tout le contenu de l’offre Medium, plus :',
          'Adaptation quotidienne de l’entraînement selon les analyses et retours de séances',
          'Retours approfondis sur les séances clés',
          'Conseils stratégie de course (pacing, nutrition, hydratation)',
          'Appel d’urgence tous les jours de 8 h à 20 h',
        ],
      },
    ],
    tiersNote: '* 25 € de frais d’inscription, maillot VELCAP inclus.',
    enterprise: {
      title: 'Coaching entreprise',
      price: '100 €',
      per: '/séance',
      text: "Des séances collectives pour dynamiser vos équipes : running, renforcement et cohésion, encadrés par nos coachs. Un format adapté à votre structure et à vos disponibilités.",
    },
    coaches: [
      { name: 'Prénom Nom', role: 'Coach', line: 'Accompagnement individualisé, construit autour de ton objectif.' },
      { name: 'Prénom Nom', role: 'Coach', line: 'Suivi régulier, plan d’entraînement et ajustements en continu.' },
      { name: 'Prénom Nom', role: 'Coach', line: 'De la reprise à la performance, à ton rythme.' },
    ],
    // Témoignages : structure prête, à remplacer par les vrais retours des coachés.
    testimonials: [
      { name: 'Marie L.', meta: 'Trail · premier ultra', quote: "Grâce au plan sur-mesure, j'ai bouclé mon premier ultra sans blessure. Le suivi chaque semaine change vraiment tout." },
      { name: 'Thomas B.', meta: '10 km · record personnel', quote: "En quatre mois, j'ai gagné plus de trois minutes sur 10 km. Les retours de séance sont précis et motivants." },
      { name: 'Julie R.', meta: 'Route · reprise après blessure', quote: "Reprise en douceur et remise en confiance : je cours à nouveau avec plaisir et sans appréhension." },
    ],
    cta: 'Demander un coaching',
    ctaKind: 'Sur devis',
  },
];

export const getUnivers = (slug) => univers.find((u) => u.slug === slug);
