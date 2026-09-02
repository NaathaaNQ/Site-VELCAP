// Les 6 univers VELCAP. Source unique : alimente l'accueil, la plateforme
// tournante et les pages dédiées. Ordre = ordre d'affichage.

export const univers = [
  {
    slug: 'team-loisirs',
    index: '01',
    name: 'Team Loisirs',
    discipline: 'Course à pied · loisir',
    lead: 'Grand débutant ou coureur aguerri, on court ensemble.',
    intro:
      "Marre de courir seul ? Deux soirs par semaine, un coach t'attend aux Rives du Doubs ou sur les forts. Aucun niveau requis, juste l'envie de venir.",
    seoTitle: 'Club de course à pied loisir à Besançon · Team Loisirs VELCAP',
    seoDesc:
      "Cours encadré à Besançon avec la Team Loisirs VELCAP : 2 entraînements par semaine, tous niveaux, groupe mixte ou 100 % féminin (VELLECAP). Adhésion 180 € par an, deux séances d'essai gratuites.",
    note: 'Sorties et entraînements orientés trail et route, encadrés par nos coachs certifiés.',
    schedule: [
      'Groupe VELCAP · mardi et jeudi, 18h30 à 20h',
      'Groupe VELLECAP · mercredi et vendredi, 18h30 à 20h',
    ],
    places: 'Les Rives du Doubs, les forts de Besançon (Rosemont, Chaudanne, Bregille, Planoise…) ou en centre-ville.',
    placesNote: "Sur les plus grands lieux d'entraînement : deux séances d'essai gratuites.",
    freeTrial: {
      title: "Tout septembre est gratuit",
      text: "Le mois de septembre est offert : viens essayer le Team Loisirs quand tu veux, sur les créneaux de ton groupe et sans aucun engagement. Inscris-toi via le lien.",
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSepE1Iem3anCdVrW_9xVXIA79rqFKUfWcx784cvEvzySJkmRQ/viewform?usp=header',
    },
    // Deux offres sur la même page : Loisirs VELCAP (mixte) et Loisirs
    // VELLECAP (100 % féminin). Même contenu, même prix ; la distinction se
    // fait par le nom (« ELLE » en rouge) et la mention sous le titre.
    tiers: [
      {
        name: 'Loisirs VELCAP',
        mention: 'Ouvert à toutes et à tous',
        price: '180 €',
        per: '/an',
        sub: 'soit 15 € par mois',
        features: [
          'Un maillot VELCAP',
          '2 entraînements encadrés par semaine (mardi et jeudi, 18h30 à 20h)',
          'Séminaires micronutrition, nutrition et préparation physique',
          'Accès à la communauté WhatsApp',
          'Jeux concours exclusifs',
          '1 social run festif par mois',
          'Participation à tous nos événements',
        ],
        // Invitation à tester une session découverte gratuite (carte mixte
        // uniquement). Le champ n'existe pas sur la carte VELLECAP.
        trial: {
          text: "Pas encore sûr ? Viens tester une session découverte, c'est gratuit.",
          href: 'https://docs.google.com/forms/d/e/1FAIpQLScsh1lmMOFFBKiQpvVII9jKKWh5Cg0z3-T7cnT7SJTTJXgZmA/viewform',
          cta: "Je m'inscris gratuitement",
          aria: "Réserver ma session d'essai gratuite Loisirs VELCAP",
        },
      },
      {
        name: 'Loisirs VELLECAP',
        mention: 'Une formule pensée pour les femmes, dans un cadre 100 % féminin',
        price: '180 €',
        per: '/an',
        sub: 'soit 15 € par mois',
        features: [
          'Un maillot VELCAP',
          '2 entraînements encadrés par semaine (mercredi et vendredi, 18h30 à 20h)',
          'Séminaires micronutrition, nutrition et préparation physique',
          'Accès à la communauté WhatsApp',
          'Jeux concours exclusifs',
          '1 social run festif par mois',
          'Participation à tous nos événements',
        ],
      },
    ],
    // Encadrement séparé par groupe : chaque bloc a son étiquette, ses jours
    // et horaires, et ses propres entraîneur(e)s.
    coachGroups: [
      {
        label: 'Groupe VELCAP',
        note: 'Mixte · mardi et jeudi, 18h30 à 20h',
        coaches: [
          { name: 'Xavier Hubner', photo: 'coach-xavier.webp' },
          { name: 'Enzo Vasallucci', photo: 'coach-enzo.webp' },
          { name: 'Nathan Quetin', photo: 'coach-nathan.webp' },
          { name: 'Adam Mantega', photo: 'coach-adam.webp' },
        ],
      },
      {
        label: 'Groupe VELLECAP',
        note: '100 % féminin · mercredi et vendredi, 18h30 à 20h · mêmes lieux que le groupe VELCAP',
        coaches: [
          { name: 'Charlène Degret', role: 'Entraîneuse', photo: 'coach-charlene.webp' },
        ],
      },
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
      "Faire émerger une élite franc-comtoise qui gagne en équipe : stages, kiné, logistique et coaching pour viser plus haut, ensemble.",
    seoTitle: 'Team Élite VELCAP · Trail, route, cross et piste en Franche-Comté',
    seoDesc:
      "La Team Élite VELCAP réunit des athlètes de haut niveau en Franche-Comté : stages, coaching, suivi kiné et soutien logistique pour performer en trail, sur route, en cross et sur piste.",
    points: [
      { k: 'Stages', v: 'Des stages réguliers pour franchir des paliers ensemble.' },
      { k: 'Coaching', v: 'Un accompagnement coaching pour celles et ceux qui en ont besoin.' },
      { k: 'Santé', v: 'Des créneaux rapides chez le kiné.' },
      { k: 'Logistique et financier', v: 'Un soutien sur les déplacements et la logistique.' },
      { k: 'Visibilité', v: 'Tes performances relayées sur nos réseaux.' },
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
      "Du premier cross des jeunes aux Championnats de France : trois créneaux par semaine pour faire de la compétition dans un collectif qui pousse.",
    seoTitle: "Club FFA d'athlétisme à Besançon · Compétition et jeunes | VELCAP",
    seoDesc:
      "Le club FFA VELCAP à Besançon : trois créneaux par semaine, compétitions fédérales jusqu'aux Championnats de France et formation des jeunes. Licence 200 € par an, deux séances d'essai gratuites.",
    points: [
      { k: 'Trois créneaux / semaine', v: 'Lundi et mercredi dès 18h30, samedi de 9h à 12h.' },
      { k: 'Objectifs forts', v: 'Les compétitions fédérales, jusqu’aux Championnats de France.' },
      { k: 'Les jeunes d’abord', v: 'Un accompagnement structuré dès le plus jeune âge.' },
      { k: 'Licence FFA', v: 'Ouvert à toute personne désireuse de faire de la compétition.' },
    ],
    schedule: ['Lundi · dès 18h30', 'Mercredi · dès 18h30', 'Samedi · 9h à 12h'],
    places: "Les Rives du Doubs, les forts de Besançon (Rosemont, Chaudanne, Bregille, Planoise…) ou le stade d'athlétisme de l'UFR STAPS.",
    placesNote: "Sur les plus grands lieux d'entraînement : deux séances d'essai gratuites.",
    price: '200 €',
    priceNote: "Licence FFA, à l'année",
    freeTrial: {
      title: "Deux jours d'essai, gratuits",
      text: "Jeune ou adulte, viens essayer le club pendant deux jours d'essai gratuits avant de prendre ta licence FFA.",
    },
    coaches: [
      { name: 'Hugo Gachod', photo: 'coach-hugo.webp' },
      { name: 'Enzo Vasallucci', photo: 'coach-enzo.webp' },
      { name: 'Adam Mantega', photo: 'coach-adam.webp' },
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
      "Le vélo arrive chez VELCAP : un club FFC bisontin en préparation. Sois prévenu avant tout le monde.",
    seoTitle: 'Club de cyclisme FFC à Besançon · Ouverture prochaine | VELCAP',
    seoDesc:
      "VELCAP prépare son club de cyclisme FFC à Besançon. Laisse tes coordonnées pour être prévenu dès l'ouverture et rejoindre la Team Vélo.",
    comingSoon: true,
    // Textes alternatifs descriptifs des visuels vélo (accessibilité).
    ttAlt: "Un cycliste VELCAP à vélo de route devant l'arche de l'ancienne saline de Salins, d'autres cyclistes rassemblés au départ.",
    heroAlt: "Trois cyclistes de la Team Vélo VELCAP roulant en file sur une route de campagne.",
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
      "Social runs du vendredi, pacers, fan zones, stages : toute l'année, VELCAP donne rendez-vous à Besançon.",
    seoTitle: 'Événements running et vélo à Besançon · Social runs, stages | VELCAP',
    seoDesc:
      "Social runs hebdomadaires, social rides, pacers, fan zones et stages : le calendrier des événements VELCAP qui animent Besançon et la Franche-Comté toute l'année.",
    events: {
      // Chaque événement accepte des champs optionnels réutilisables :
      //   link:   { href, label }  -> bouton lien externe (nouvel onglet)
      //   teaser: 'texte'          -> mention teasing mise en avant
      //   signup: true             -> formulaire d'inscription dépliable (nom, prénom, e-mail, tel, message)
      //   notify: true             -> bouton « être recontacté » (composant liste d'attente, comme le Club FFC)
      //   badge:  'texte'          -> pastille discrète (ex. accès réservé)
      //   note:   'texte'          -> précision courte sous la description
      //   photos: ['fichier.webp']  -> carrousel photo (voir past). Vide = pas de carrousel.
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
      // ex. photos: ['event-volodalen-1.webp', 'event-volodalen-2.webp']. Tableau vide = pas de carrousel.
      past: [
        { name: 'Fan Zone Trail Volodalen', date: '25/07/2026', place: 'Massif jurassien', desc: 'VELCAP a posé sa fan zone sur le Trail Volodalen pour soutenir les coureurs sur les portions clés.', photos: [] },
        // photos : chemin simple (string) ou objet { src, alt } pour un texte alternatif précis.
        { name: 'Fan Zone Trail des Forts', date: '8 au 10 mai 2026', place: 'Forts de Besançon', desc: 'On a installé la fan zone pour encourager les traileurs sur les forts : tambours, banderoles et bonne humeur.', photos: [
          'event-forts-1.webp', 'event-forts-2.webp', 'event-forts-3.webp', 'event-forts-4.webp', 'event-forts-5.webp', 'event-forts-6.webp', 'event-forts-7.webp',
          { src: 'event-forts-8.webp', alt: "Fan zone VELCAP au Trail des Forts : banderole « T'es grand » et membres au bord du parcours." },
          { src: 'event-forts-9.webp', alt: 'Fan zone VELCAP au Trail des Forts : pancarte « Le virage VELCAP » face aux coureurs.' },
        ] },
        { name: 'Stage en Ardèche', date: '4 au 11 avril 2026', place: 'Ardèche', desc: 'Une semaine de stage pour progresser ensemble : volume, technique, cohésion et bons moments hors du quotidien.', photos: [
          'event-ardeche-1.webp', 'event-ardeche-2.webp', 'event-ardeche-3.webp', 'event-ardeche-4.webp', 'event-ardeche-5.webp',
          'event-ardeche-6.webp', 'event-ardeche-7.webp', 'event-ardeche-8.webp', 'event-ardeche-9.webp', 'event-ardeche-10.webp',
        ] },
        { name: 'Pacers Rives du Doubs', date: '29 mars 2026', place: 'Rives du Doubs, Besançon', desc: "Nos pacers ont accompagné les coureurs sur les allures cibles, le long du Doubs.", photos: [
          'event-doubs-1.webp', 'event-doubs-2.webp', 'event-doubs-3.webp', 'event-doubs-4.webp', 'event-doubs-5.webp',
          'event-doubs-6.webp', 'event-doubs-7.webp', 'event-doubs-8.webp', 'event-doubs-9.webp', 'event-doubs-10.webp',
          'event-doubs-11.webp', 'event-doubs-12.webp', 'event-doubs-13.webp', 'event-doubs-14.webp', 'event-doubs-15.webp',
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
      "Pas de plan générique : un coach, des échanges chaque semaine, un entraînement qui s'adapte à ta vie. Les retours de nos athlètes en témoignent.",
    seoTitle: 'Coaching running et trail à Besançon · Suivi individualisé | VELCAP',
    seoDesc:
      "Coaching course à pied, trail et vélo à Besançon et à distance : plans 100 % individualisés, suivi hebdomadaire via Nolio, renforcement et conseils de course par les coachs VELCAP.",
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
    tiersDisclaimer:
      'Prestations proposées, réalisées et facturées directement par les coachs, qui exercent à titre indépendant. Le site met en relation : aucune vente en ligne.',
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
      priceLead: 'À partir de',
      price: '75 €',
      per: '/séance',
      text: "Des séances collectives pour dynamiser vos équipes : running, renforcement et cohésion, encadrées par nos coachs. Un format adapté à votre structure et à vos disponibilités.",
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
      { name: 'Hugo Gachod', photo: 'coach-hugo.webp' },
      { name: 'Luc Le Baron', photo: 'coach-luc.webp' },
      { name: 'Enzo Vasallucci', photo: 'coach-enzo.webp' },
      { name: 'Nathan Quetin', photo: 'coach-nathan.webp' },
    ],
    // Vrais témoignages d'athlètes suivis en coaching. Texte repris mot pour
    // mot ; `coach` = prénom du coach associé ; `photo` optionnelle (à déposer
    // plus tard dans public/img/photos/), sinon fallback initiales.
    testimonials: [
      {
        name: 'Justin P.',
        coach: 'Hugo',
        photo: 'testi-justin.webp',
        quote: [
          "Hugo m'entraîne depuis le mois de janvier. Nous avons commencé progressivement, en construisant une bonne base et en nous adaptant à mon niveau. Au fil des mois, j'ai vraiment pu constater mes progrès, sans me blesser.",
          "Les séances sont variées, avec de la course à pied, mais aussi du vélo, de la musculation et du renforcement, ce qui permet un travail très complet. Je lui fais entièrement confiance dans la planification de mes entraînements, et les résultats sont là.",
          "Hugo sait également adapter les séances à mon emploi du temps et à mes contraintes. Les points chaque semaine permettent un vrai suivi et une bonne adaptation des entraînements. Sa disponibilité et son écoute m'ont aussi permis de prendre davantage confiance en moi en voyant mon évolution.",
          'Je le remercie pour son accompagnement depuis le début !',
        ],
      },
      {
        name: 'Adel S.',
        coach: 'Enzo',
        photo: 'testi-adel.webp',
        quote: [
          "J'ai vraiment passé un cap grâce à Enzo !",
          "Toujours à l'écoute, il adapte mes séances à ma forme et à mes objectifs. Il a su cibler mes points à travailler pour me faire progresser et ça même à distance !",
          "C'est vraiment un suivi sur-mesure qui permet de se sentir parfaitement accompagné.",
          "Compétent, accessible et bienveillant : le coach qu'il faut",
        ],
      },
      {
        name: 'Alexis D.',
        coach: 'Nathan',
        photo: 'testi-alexis.webp',
        quote: [
          "Je suis vraiment très content de mon expérience avec Nathan. Il est toujours à l'écoute et disponible, et il sait constamment mettre en avant le positif, même dans les moments plus difficiles. J'apprécie particulièrement sa capacité à s'adapter : il n'hésite pas à modifier les séances au jour le jour en fonction de ma fatigue, de mes sensations ou d'un événement imprévu. Cette flexibilité permet de garder un entraînement adapté et cohérent, sans jamais perdre de vue l'objectif. Grâce à son accompagnement et ses conseils, mes performances ont littéralement explosé, tout en gardant le plaisir de courir et de progresser. J'ai hâte de voir jusqu'où cette collaboration pourra encore me mener.",
        ],
      },
      {
        name: 'Flavie N.',
        coach: 'Nathan',
        photo: 'testi-flavie.webp',
        quote: [
          "Nathan est avant tout un coach très à l'écoute de son athlète et c'est selon moi, le plus important ! Il me permet de progresser sans jamais émettre de jugement ou de pression vis à vis des séances. Rigoureux mais en adaptant vraiment à nos objectifs et nos envies.",
          "Je le recommanderais vivement et je le remercie pour ce super suivi !",
        ],
      },
      {
        name: 'Emilien L.',
        coach: 'Hugo',
        photo: 'testi-emilien.webp',
        quote: [
          "Envie d'avoir un entraînement structuré avec de vraies semaines d'entraînement réfléchi...",
          "Être préparé pour mon 1er trail de Bernex 62K 4300m, ce qui a été le cas 36/250.",
          "Envie de voir ce que ça peut donner à mon âge donc on continue également sur des formats plus courts.",
          "Content des séances et de l'application Nolio... c'est vraiment top, pas de prise de tête on lance la montre et go...",
          "Je sens que je progresse encore donc c'est vraiment bien.",
          "Ce qui est bien avec Hugo c'est qu'il est multi-sports... vélo, CAP, ski de fond, ski à roulettes... tout comme moi.",
          "Donc voilà aussi une raison d'avoir eu envie de travailler avec lui.",
        ],
      },
      {
        name: 'Pauline L.',
        coach: 'Enzo',
        photo: 'testi-pauline.webp',
        quote: [
          "Après une saison 2025 compliquée, Enzo a su adapter le planning pour me permettre de repartir sur de bonnes bases en septembre. Les entraînements ont rapidement porté leurs fruits, avec de bons résultats en compétition dès novembre avec une minute de gagnée sur 10 km (38'48), puis encore une de gagnée au mois de mars (37'55) !",
          "Très compréhensif et toujours disponible pour échanger, Enzo est pleinement engagé dans son rôle de coach. Il connaît parfaitement mes points forts et mes faiblesses, et sait me conseiller au mieux, aussi bien sur les entraînements que sur les compétitions.",
        ],
      },
    ],
    cta: 'Demander un coaching',
    ctaKind: 'Sur devis',
  },
];

export const getUnivers = (slug) => univers.find((u) => u.slug === slug);
