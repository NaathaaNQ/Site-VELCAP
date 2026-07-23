// Les 6 univers VELCAP. Source unique : alimente l'accueil, la plateforme
// tournante et les pages dédiées. Ordre = ordre d'affichage.

export const univers = [
  {
    slug: 'team-loisirs',
    index: '01',
    name: 'Team Loisirs',
    discipline: 'Communauté · loisir',
    lead: 'Grand débutant ou coureur aguerri, on court ensemble.',
    intro:
      "Marre de t'entraîner seul ou à l'aveugle ? Rejoins la Team Loisirs VELCAP !!! L'objectif est de démocratiser l'accès à un entraînement encadré, sans niveau requis : courir avec des personnes motivées, participer à des événements festifs, faire vivre une communauté forte et plus encore !",
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
        per: '/an',
        sub: 'soit 15 € par mois',
        features: [
          '2 entraînements encadrés / semaine (mardi et jeudi, 19h à 20h30)',
          'Accès à une communauté WhatsApp',
          'Jeux concours exclusifs',
          '1 social run festif par mois',
          'Participation à tous nos événements',
          'Un maillot VELCAP',
        ],
      },
      {
        name: 'Adhésion Communauté Plus',
        price: '220 €',
        per: '/an',
        sub: 'soit 18,33 € par mois',
        features: [
          "Toute l'offre Communauté, et en plus :",
          '1 séance de renforcement par semaine',
          'Accès prioritaire chez le kiné',
          'Des séminaires nutrition',
          {
            text: '2 courses objectifs par an accompagnées de A à Z',
            detailsLead: 'La semaine qui précède chaque course :',
            details: [
              "Entraînements d'affûtage",
              'Conseils récupération et sommeil',
              'Stratégie nutritionnelle avant course',
              'Plan de pacing pour le jour J',
              'Stratégie de nutrition pendant la course',
            ],
          },
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
      { k: 'En équipe', v: 'Les pacers des Rives du Doubs, les Boucles Vauban, l’Ekiden…' },
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
    discipline: 'Compétitions et formation des jeunes',
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
      // Chaque événement accepte des champs optionnels réutilisables :
      //   link:   { href, label }  -> bouton lien externe (nouvel onglet)
      //   teaser: 'texte'          -> mention teasing mise en avant
      //   signup: true             -> formulaire d'inscription dépliable (nom, prénom, e-mail, tel, message)
      //   notify: true             -> bouton « être recontacté » (composant liste d'attente, comme le Club FFC)
      //   badge:  'texte'          -> pastille discrète (ex. accès réservé)
      //   note:   'texte'          -> précision courte sous la description
      //   photos: ['fichier.jpg']  -> carrousel photo (voir past). Vide = pas de carrousel.
      // à venir : du plus proche au plus lointain
      upcoming: [
        {
          name: 'Social Run avec Décathlon', date: 'Tous les vendredis', place: 'Décathlon Besançon',
          desc: "Un rendez-vous hebdomadaire décontracté au départ du magasin : on court ensemble, tous niveaux, puis on partage un moment.",
          link: { href: 'https://activites.decathlon.fr/fr-FR/activites-sportives/details/11325257', label: 'Toutes les infos et inscriptions' },
        },
        {
          name: 'Social Ride avec ASSOS x PRODUSPORT', date: '12/09/2026', place: 'Besançon et alentours',
          desc: "Une sortie vélo qui réunit ASSOS, PRODUSPORT et la communauté VELCAP autour d'un moment de partage.",
          teaser: 'Quelques surprises attendent les participants.',
          signup: true,
        },
        {
          name: 'Pacers Boucle Vauban (semi et 10 km)', date: '20/09/2026', place: 'Besançon',
          desc: 'Nos pacers t’emmènent sur la Boucle Vauban, en toute régularité : de 36 min à 1 h 10 sur le 10 km, et de 1 h 20 à 2 h 10 sur le semi-marathon.',
          note: '15 pacers VELCAP sur le parcours, accompagnés des pacers Décathlon.',
        },
        {
          name: 'Corrida de Salins', date: 'Novembre 2026', place: 'Salins-les-Bains',
          desc: "La corrida de fin d'année : une course conviviale dans les rues de Salins, entre effort et ambiance de fête, qui fait aussi découvrir les monuments historiques de la ville.",
          notify: true,
        },
      ],
      // passés : du plus récent au plus ancien.
      // photos : dépose les fichiers dans public/img/photos/ et liste ici leurs noms,
      // ex. photos: ['event-volodalen-1.jpg', 'event-volodalen-2.jpg']. Tableau vide = pas de carrousel.
      past: [
        { name: 'Fan Zone Trail Volodalen', date: '25/07/2026', place: 'Massif jurassien', desc: 'VELCAP a posé sa fan zone sur le Trail Volodalen pour soutenir les coureurs sur les portions clés.', photos: [] },
        // photos : chemin simple (string) ou objet { src, alt } pour un texte alternatif précis.
        { name: 'Fan Zone Trail des Forts', date: '8 au 10 mai 2026', place: 'Forts de Besançon', desc: 'On a installé la fan zone pour encourager les traileurs sur les forts : tambours, banderoles et bonne humeur.', photos: [
          'event-forts-1.jpg', 'event-forts-2.jpg', 'event-forts-3.jpg', 'event-forts-4.jpg', 'event-forts-5.jpg', 'event-forts-6.jpg', 'event-forts-7.jpg',
          { src: 'event-forts-8.jpg', alt: "Fan zone VELCAP au Trail des Forts : banderole « T'es grand » et membres au bord du parcours." },
          { src: 'event-forts-9.jpg', alt: 'Fan zone VELCAP au Trail des Forts : pancarte « Le virage VELCAP » face aux coureurs.' },
        ] },
        { name: 'Stage en Ardèche', date: '4 au 11 avril 2026', place: 'Ardèche', desc: 'Une semaine de stage pour progresser ensemble : volume, technique, cohésion et bons moments hors du quotidien.', photos: [
          'event-ardeche-1.jpg', 'event-ardeche-2.jpg', 'event-ardeche-3.jpg', 'event-ardeche-4.jpg', 'event-ardeche-5.jpg',
          'event-ardeche-6.jpg', 'event-ardeche-7.jpg', 'event-ardeche-8.jpg', 'event-ardeche-9.jpg', 'event-ardeche-10.jpg',
        ] },
        { name: 'Pacers Rives du Doubs', date: '29 mars 2026', place: 'Rives du Doubs, Besançon', desc: "Nos pacers ont accompagné les coureurs sur les allures cibles, le long du Doubs.", photos: [
          'event-doubs-1.jpg', 'event-doubs-2.jpg', 'event-doubs-3.jpg', 'event-doubs-4.jpg', 'event-doubs-5.jpg',
          'event-doubs-6.jpg', 'event-doubs-7.jpg', 'event-doubs-8.jpg', 'event-doubs-9.jpg', 'event-doubs-10.jpg',
          'event-doubs-11.jpg', 'event-doubs-12.jpg', 'event-doubs-13.jpg', 'event-doubs-14.jpg', 'event-doubs-15.jpg',
        ] },
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
        name: 'Suivi Découverte', price: '80 €', per: '/mois', shortPrice: '90 €', asterisk: true,
        features: [
          'Appel bilan de 30 min à 1 h',
          'Plan 100 % individualisé, adapté à ton niveau, tes contraintes et tes objectifs',
          'Un échange par semaine + 1 appel avant l’objectif principal',
          'Plan livré chaque semaine selon tes retours',
          'Renforcement musculaire et prophylaxie',
          'Sports croisés possibles',
          'Planification des séances via Nolio (gratuit)',
          'Accès à une communauté WhatsApp',
        ],
      },
      {
        name: 'Suivi Performance', price: '100 €', per: '/mois', shortPrice: '110 €', highlight: true, asterisk: true,
        features: [
          'Appel bilan de 30 min à 1 h',
          'Plan 100 % individualisé, adapté à ton niveau, tes contraintes, tes objectifs et ton évolution',
          'Analyse des axes de progression et du niveau actuel pour adapter l’entraînement',
          'Renforcement musculaire au poids du corps, adapté à tes objectifs',
          'Entraînement croisé possible',
          'Échange régulier par message + 1 appel par semaine si besoin (WhatsApp)',
          'Plan livré chaque semaine selon les retours et analyses',
          'Planification via Nolio (gratuit)',
          'Conseils pré-objectifs (sommeil, hydratation, nutrition)',
          'Retour sur les objectifs une fois atteints',
        ],
      },
      {
        name: 'Suivi Premium', price: '120 €', per: '/mois', shortPrice: '130 €', asterisk: true,
        features: [
          'Tout le contenu de l’offre Suivi Performance, plus :',
          'Préparation physique individualisée selon tes objectifs : développement des points faibles et optimisation des points forts',
          'Adaptation quotidienne de l’entraînement selon les analyses et retours de séances',
          'Retours approfondis sur les séances clés',
          'Conseils stratégie de course (pacing, nutrition, hydratation)',
          'Appel d’urgence tous les jours de 8 h à 20 h',
        ],
      },
    ],
    tiersNote: '* 25 € de frais d’inscription, maillot VELCAP inclus.',
    engagement: {
      title: "Conditions d'engagement",
      items: [
        'Contrats de 6 mois renouvelables.',
        "2 semaines d'essai sans engagement au démarrage de chaque contrat.",
        'Pour une préparation de moins de 6 mois : majoration de 10 € par mois sur l’offre choisie (soit 90 € / 110 € / 130 € par mois).',
      ],
    },
    enterprise: {
      title: 'Coaching entreprise',
      price: '100 €',
      per: '/séance',
      text: "Des séances collectives pour dynamiser vos équipes : running, renforcement et cohésion, encadrés par nos coachs. Un format adapté à votre structure et à vos disponibilités.",
    },
    sportEntreprise: {
      eyebrow: 'Sport en entreprise',
      title: 'Le sport, un levier pour vos équipes',
      intro: "Un programme collectif, sur vos horaires et dans vos locaux. Bon pour vos collaborateurs, bon pour l'entreprise.",
      benefits: [
        {
          audience: 'Pour les salariés',
          items: [
            { icon: 'pulse', text: 'Meilleure condition physique, moins de sédentarité' },
            { icon: 'moon', text: 'Moins de stress, meilleur sommeil' },
            { icon: 'bolt', text: "Plus d'énergie et de concentration" },
          ],
        },
        {
          audience: "Pour l'entreprise",
          items: [
            { icon: 'team', text: "Cohésion d'équipe renforcée" },
            { icon: 'down', text: "Baisse de l'absentéisme" },
            { icon: 'chart', text: 'Productivité et bien-être (démarche QVCT)' },
            { icon: 'badge', text: 'Marque employeur plus attractive' },
          ],
        },
      ],
      fiscal: {
        figure: '200,25 €',
        figureLabel: 'par salarié et par an · 2026',
        lead: 'Le financement de prestations sportives collectives peut être exonéré de cotisations sociales URSSAF.',
        example: "Une entreprise de 10 salariés peut ainsi financer jusqu'à 2 002,50 € par an sans charges sociales.",
        conditions: ['Prestation collective', 'Accessible à tous les salariés', "Facturée à l'entreprise"],
        deductible: "La prestation facturée réduit aussi le résultat imposable de l'entreprise (charge déductible).",
        note: "Dispositifs présentés à titre indicatif et soumis à conditions. À confirmer avec l'expert-comptable de votre entreprise.",
      },
      cta: { label: 'Discuter d’un projet entreprise', href: '/contact' },
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
