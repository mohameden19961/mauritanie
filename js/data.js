const MAURITANIA = {
  name: 'Mauritanie',
  capital: 'Nouakchott',
  population: 4618974,
  area: 1030700,
  language: 'Arabe, Français, Pulaar, Soninké, Wolof',
  currency: 'Ouguiya (MRU)',
  timezone: 'UTC+0',
  flag: '🇲🇷',

  stats: {
    area: '1 030 700 km²',
    popul: '4,62 millions',
    density: '4,5 hab/km²',
    gdp: '10,4 milliards $',
    gdpPerCapita: '2 250 $',
    growth: '3,2%'
  },

  history: [
    { year: '~3000 av. J.-C.', title: 'Période néolithique', desc: 'Premières traces d\'habitation humaine dans la région du Sahara mauritanien.' },
    { year: '~1000 av. J.-C.', title: 'Royaumes berbères', desc: 'Établissement des tribus berbères et début du commerce transsaharien.' },
    { year: '~VIIe siècle', title: 'Islamisation', desc: 'Arrivée de l\'islam par les commerçants arabes et berbères.' },
    { year: '1076', title: 'Empire almoravide', desc: 'Conquête almoravide de l\'Afrique du Nord et de l\'Andalousie depuis la Mauritanie.' },
    { year: 'XIIIe siècle', title: 'Empire du Mali', desc: 'La région est intégrée à l\'Empire du Mali sous Soundiata Keïta.' },
    { year: 'XVIIe siècle', title: 'Émirats maures', desc: 'Formation des émirats du Trarza, Brakna, Tagant et Adrar.' },
    { year: '1903', title: 'Protectorat français', desc: 'La Mauritanie devient un protectorat de la France.' },
    { year: '1920', title: 'Colonie française', desc: 'La Mauritanie devient une colonie française au sein de l\'Afrique-Occidentale française.' },
    { year: '1960', title: 'Indépendance', desc: 'Proclamation de l\'indépendance le 28 novembre 1960 sous la présidence de Mokhtar Ould Daddah.' },
    { year: '1976-1978', title: 'Guerre du Sahara', desc: 'Annexion puis abandon du Sahara occidental après des conflits avec le Polisario.' },
    { year: '2008', title: 'Coup d\'État', desc: 'Coup d\'État militaire mené par Mohamed Ould Abdel Aziz.' },
    { year: '2019', title: 'Transition démocratique', desc: 'Première transition pacifique du pouvoir avec l\'élection de Mohamed Ould Cheikh El Ghazouani.' },
    { year: '2024', title: 'Élection présidentielle', desc: 'Réélection de Mohamed Ould Cheikh El Ghazouani pour un second mandat.' }
  ],

  geography: {
    regions: [
      { name: 'Adrar', capital: 'Atar', desc: 'Région désertique avec des paysages spectaculaires de canyons et oasis.' },
      { name: 'Tagant', capital: 'Tidjikja', desc: 'Région historique avec des plateaux rocheux et des vallées.' },
      { name: 'Hodh El Chargui', capital: 'Néma', desc: 'Région frontalière à l\'est, zone de transition sahélienne.' },
      { name: 'Brakna', capital: 'Aleg', desc: 'Région agricole le long du fleuve Sénégal.' },
      { name: 'Nouakchott', capital: 'Nouakchott', desc: 'Capitale et plus grande ville, centre économique et politique.' },
      { name: 'Dakhlet Nouadhibou', capital: 'Nouadhibou', desc: 'Centre économique avec le port et l\'industrie de la pêche.' }
    ],
    features: [
      { name: 'Désert du Sahara', desc: 'Couvre plus des deux tiers du territoire' },
      { name: 'Fleuve Sénégal', desc: 'Principal fleuve, frontière sud avec le Sénégal' },
      { name: 'Banc d\'Arguin', desc: 'Parc national et site UNESCO, paradis des oiseaux migrateurs' },
      { name: 'Côte Atlantique', desc: '754 km de côtes avec des plages sauvages' },
      { name: 'Massif de l\'Adrar', desc: 'Plateau montagneux avec des gorges et oasis' }
    ]
  },

  economy: {
    gdpData: [
      { year: '2015', value: 5.8 },
      { year: '2016', value: 6.1 },
      { year: '2017', value: 6.5 },
      { year: '2018', value: 7.0 },
      { year: '2019', value: 7.6 },
      { year: '2020', value: 8.2 },
      { year: '2021', value: 8.9 },
      { year: '2022', value: 9.5 },
      { year: '2023', value: 10.1 },
      { year: '2024', value: 10.4 }
    ],
    sectors: [
      { name: 'Mines (Fer, Or, Cuivre)', value: 35 },
      { name: 'Pêche', value: 20 },
      { name: 'Agriculture & Élevage', value: 15 },
      { name: 'Services & Télécoms', value: 18 },
      { name: 'Construction & Énergie', value: 12 }
    ],
    exports: [
      { product: 'Minerai de fer', value: 42 },
      { product: 'Or', value: 18 },
      { product: 'Poissons & fruits de mer', value: 16 },
      { product: 'Cuivre', value: 8 },
      { product: 'Produits pétroliers', value: 6 },
      { product: 'Autres', value: 10 }
    ]
  },

  demographics: {
    population: [
      { year: 1960, value: 854000 },
      { year: 1970, value: 1120000 },
      { year: 1980, value: 1540000 },
      { year: 1990, value: 2010000 },
      { year: 2000, value: 2600000 },
      { year: 2010, value: 3360000 },
      { year: 2020, value: 4380000 },
      { year: 2024, value: 4620000 }
    ],
    agePyramid: [
      { age: '0-14 ans', male: 20, female: 19 },
      { age: '15-24 ans', male: 10, female: 10 },
      { age: '25-54 ans', male: 18, female: 17 },
      { age: '55-64 ans', male: 2.5, female: 2.5 },
      { age: '65+ ans', male: 1, female: 1 }
    ],
    ethnicGroups: [
      { group: 'Maures (Beidanes)', value: 30 },
      { group: 'Maures Noirs (Haratines)', value: 40 },
      { group: 'Peuls', value: 15 },
      { group: 'Soninkés', value: 8 },
      { group: 'Wolofs', value: 5 },
      { group: 'Bambaras', value: 2 }
    ],
    urbanisation: [
      { year: 1960, value: 5 },
      { year: 1970, value: 15 },
      { year: 1980, value: 28 },
      { year: 1990, value: 40 },
      { year: 2000, value: 50 },
      { year: 2010, value: 55 },
      { year: 2020, value: 60 },
      { year: 2024, value: 62 }
    ]
  },

  tourism: [
    {
      name: 'Parc National du Banc d\'Arguin',
      location: 'Côte Atlantique',
      desc: 'Site classé UNESCO, refuge pour des millions d\'oiseaux migrateurs. Ses eaux poissonneuses attirent pêcheurs et visiteurs.',
      image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&fit=crop'
    },
    {
      name: 'Ville ancienne de Chinguetti',
      location: 'Adrar',
      desc: 'Cité sainte et centre intellectuel fondé au XIIIe siècle. Ses bibliothèques conservent des manuscrits anciens.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&fit=crop'
    },
    {
      name: 'Structure de Richat (Œil du Sahara)',
      location: 'Adrar',
      desc: 'Formation géologique spectaculaire de 50 km de diamètre visible depuis l\'espace.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop'
    },
    {
      name: 'Nouadhibou & la Baie du Lévrier',
      location: 'Dakhlet Nouadhibou',
      desc: 'Deuxième ville du pays, centre de la pêche industrielle avec des plages magnifiques.',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&fit=crop'
    },
    {
      name: 'Oasis de Terjit',
      location: 'Adrar',
      desc: 'Oasis luxuriante dans les gorges de l\'Adrar, avec des sources d\'eau douce et des palmiers.',
      image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&fit=crop'
    },
    {
      name: 'Village de Tichitt',
      location: 'Hodh Ech Chargui',
      desc: 'Ancien carrefour commercial du désert avec une architecture en pierre traditionnelle.',
      image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&fit=crop'
    }
  ],

  cuisine: [
    {
      name: 'Thiébou Djeune',
      desc: 'Plat national à base de riz, poisson frais, légumes et sauce tomate épicée.',
      type: 'Plat principal'
    },
    {
      name: 'Maffe',
      desc: 'Ragoût de viande (agneau ou bœuf) dans une sauce à l\'arachide, servi avec du riz.',
      type: 'Plat principal'
    },
    {
      name: 'Couscous',
      desc: 'Semoule de blé accompagnée de viande et légumes, souvent préparé pour les grandes occasions.',
      type: 'Plat principal'
    },
    {
      name: 'Chébakhia',
      desc: 'Pâtisserie frite au miel et à l\'eau de fleur d\'oranger, très populaire pendant le Ramadan.',
      type: 'Dessert'
    },
    {
      name: 'Lben',
      desc: 'Lait fermenté traditionnel, boisson rafraîchissante et nourrissante.',
      type: 'Boisson'
    },
    {
      name: 'Thé à la menthe',
      desc: 'Boisson nationale, servi en trois verres : fort, doux, parfumé.',
      type: 'Boisson'
    },
    {
      name: 'Gâteau au mil',
      desc: 'Préparation à base de mil, lait caillé et dattes, riche en saveurs.',
      type: 'Dessert'
    },
    {
      name: 'Méchoui',
      desc: 'Agneau rôti à la broche, plat de fête traditionnel.',
      type: 'Plat principal'
    }
  ],

  government: {
    type: 'République islamique semi-présidentielle',
    president: 'Mohamed Ould Cheikh El Ghazouani',
    premier: 'Mokhtar Ould Djay',
    constitution: 'Adoptée le 20 juillet 1991',
    capital: 'Nouakchott',
    subdivisions: '15 wilayas (régions)',
    independance: '28 novembre 1960'
  },

  contact: {
    address: 'BP 184, Nouakchott, Mauritanie',
    phone: '+222 45 25 11 00',
    email: 'info@mauritanie.tourisme.mr',
    website: 'www.mauritanie.tourisme.mr'
  }
};
