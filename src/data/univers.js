// Les 7 univers VELCAP. Source unique : alimente l'accueil, la plateforme
// tournante et les 7 pages dédiées.

export const univers = [
  {
    slug: 'association',
    index: '01',
    name: 'Association',
    discipline: 'Le socle',
    lead: 'Le collectif avant le chrono.',
    intro:
      "VELCAP commence par une association : une communauté qui partage l'effort, la table d'après-course et l'envie d'avancer ensemble. On y entre pour soi, on y reste pour les autres.",
    points: [
      { k: 'Communauté', v: 'Une vie de club rythmée par les sorties, les temps forts et les bénévoles.' },
      { k: 'Gouvernance', v: 'Une association transparente, pilotée par et pour ses membres.' },
      { k: 'Une licence', v: 'Un seul engagement, sept disciplines ouvertes.' },
    ],
    stat: { n: '1', label: 'maison, sept univers' },
    cta: 'Adhérer à VELCAP',
  },
  {
    slug: 'club-ffa',
    index: '02',
    name: 'Club FFA',
    discipline: 'Athlétisme',
    lead: 'Courir, sauter, se dépasser.',
    intro:
      "Affilié à la Fédération Française d'Athlétisme, le club FFA accueille du premier dossard au podium : running sur route, trail, piste et école d'athlé pour les plus jeunes.",
    points: [
      { k: 'Entraînements', v: 'Des séances encadrées, tous niveaux, plusieurs fois par semaine.' },
      { k: 'Compétition', v: 'Le calendrier officiel FFA, de la régionale au national.' },
      { k: 'École d’athlé', v: 'Apprendre à courir vite et longtemps, dès le plus jeune âge.' },
    ],
    stat: { n: '5–42', label: 'du 5 km au marathon' },
    cta: 'Prendre une licence FFA',
  },
  {
    slug: 'club-ffc',
    index: '03',
    name: 'Club FFC',
    discipline: 'Cyclisme',
    lead: 'La route, la piste, le peloton.',
    intro:
      "Sous l'égide de la Fédération Française de Cyclisme, le club FFC réunit les passionnés de vélo. Route, piste, sorties collectives : on roule en équipe, on progresse en équipe.",
    points: [
      { k: 'Sorties club', v: 'Des parcours encadrés chaque semaine, du loisir au licencié.' },
      { k: 'Course', v: 'Les épreuves FFC, la stratégie de peloton, le goût de la gagne.' },
      { k: 'Technique', v: 'Mécanique, sécurité et placement : le métier de cycliste.' },
    ],
    stat: { n: '2', label: 'fédérations sous un même maillot' },
    cta: 'Prendre une licence FFC',
  },
  {
    slug: 'team-elite',
    index: '04',
    name: 'Team Élite',
    discipline: 'Haut niveau',
    lead: "L'exigence comme standard.",
    intro:
      "La Team Élite rassemble nos athlètes les plus performants. Encadrement renforcé, suivi individualisé, objectifs de podium : ici, on ne vise pas la ligne d'arrivée, on vise le sommet.",
    points: [
      { k: 'Suivi', v: 'Performance, charge et récupération mesurées et pilotées.' },
      { k: 'Préparation', v: 'Physique et mentale, construite autour de tes objectifs.' },
      { k: 'Représenter', v: 'Porter les couleurs VELCAP là où ça compte.' },
    ],
    stat: { n: '∞', label: "ambition, jamais l'à-peu-près" },
    cta: 'Candidater à la Team Élite',
  },
  {
    slug: 'corrida',
    index: '05',
    name: 'La Corrida',
    discipline: 'Événement',
    lead: 'La course qui rassemble la ville.',
    intro:
      "La Corrida, c'est le rendez-vous signature de VELCAP : une course populaire et festive où coureurs, familles et supporters partagent la même énergie le temps d'une soirée.",
    points: [
      { k: 'Pour tous', v: 'Du défi chronométré à la foulée plaisir, un parcours pour chacun.' },
      { k: 'Village', v: 'Animations, ravito, récompenses : la fête autant que la course.' },
      { k: 'Solidaire', v: 'Un dossard qui soutient nos actions de terrain.' },
    ],
    stat: { n: '1', label: 'soirée, toute une ville debout' },
    cta: "S'inscrire à la Corrida",
  },
  {
    slug: 'actions',
    index: '06',
    name: 'Nos Actions',
    discipline: 'Engagement',
    lead: 'Le sport qui sert à quelque chose.',
    intro:
      "VELCAP agit au-delà du chrono. Accès au sport pour tous, jeunesse, santé, solidarité : nos actions font vivre les valeurs du club, sur le terrain et dans le quartier.",
    points: [
      { k: 'Sport-santé', v: 'Bouger comme remède : inclusion et accompagnement.' },
      { k: 'Jeunesse', v: 'Des interventions pour donner le goût de l’effort tôt.' },
      { k: 'Solidarité', v: 'Des opérations caritatives portées par le club.' },
    ],
    stat: { n: '+', label: 'que le résultat : l’impact' },
    cta: 'Soutenir nos actions',
  },
  {
    slug: 'coaching',
    index: '07',
    name: 'Coaching privé',
    discipline: 'Sur-mesure',
    lead: 'Ton plan. Ta progression.',
    intro:
      "Besoin d'un accompagnement rien qu'à toi ? Nos coachs construisent un programme sur-mesure — objectifs, planning, suivi — en course à pied comme à vélo, en présentiel ou à distance.",
    points: [
      { k: 'Bilan', v: 'On part de ton niveau, de ton temps et de ton objectif réel.' },
      { k: 'Programme', v: 'Un plan d’entraînement adapté, ajusté semaine après semaine.' },
      { k: 'Suivi', v: 'Un coach qui répond, corrige et te pousse au bon moment.' },
    ],
    stat: { n: '1:1', label: 'un coach, un athlète' },
    cta: 'Demander un coaching',
  },
];

export const getUnivers = (slug) => univers.find((u) => u.slug === slug);
