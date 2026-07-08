export interface Region {
  name: string;
  capital: string;
  desc: string;
}

export interface Feature {
  name: string;
  desc: string;
}

export interface HistoryEntry {
  year: string;
  title: string;
  desc: string;
  detail: string;
}

export interface TourismEntry {
  name: string;
  location: string;
  desc: string;
  image: string;
  detail: string;
  type: string;
  rating: number;
  bestTime: string;
}

export interface CuisineEntry {
  name: string;
  desc: string;
  type: string;
}

export interface EconomyData {
  gdpData: { year: string; value: number }[];
  gdpDesc: string;
  sectors: { name: string; value: number }[];
  sectorsDesc: string;
  exports: { product: string; value: number }[];
  exportsDesc: string;
}

export interface DemographicsData {
  population: { year: number; value: number }[];
  popDesc: string;
  agePyramid: { age: string; male: number; female: number }[];
  ethnicGroups: { group: string; value: number }[];
  ethnicDesc: string;
  urbanisation: { year: number; value: number }[];
  urbanDesc: string;
}

export interface GovernmentData {
  type: string;
  president: string;
  premier: string;
  constitution: string;
  capital: string;
  subdivisions: string;
  independance: string;
}

export interface ContactData {
  address: string;
  phone: string;
  email: string;
  website: string;
}

export interface Stats {
  area: string;
  popul: string;
  density: string;
  gdp: string;
  gdpPerCapita: string;
  growth: string;
}

export interface MauritaniaData {
  name: string;
  capital: string;
  population: number;
  area: number;
  language: string;
  currency: string;
  timezone: string;
  flag: string;
  stats: Stats;
  history: HistoryEntry[];
  geography: {
    regions: Region[];
    features: Feature[];
  };
  economy: EconomyData;
  demographics: DemographicsData;
  tourism: TourismEntry[];
  cuisine: CuisineEntry[];
  government: GovernmentData;
  contact: ContactData;
}

export const MAURITANIA: MauritaniaData = {
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
    { year: '~3000 av. J.-C.', title: 'Période néolithique', desc: 'Premières traces d\'habitation humaine dans la région du Sahara mauritanien.', detail: 'Les fouilles archéologiques dans l\'Adrar et le Tagant ont révélé des outils en pierre, des peintures rupestres et des sépultures datant du néolithique. Le Sahara était alors une savane verdoyante peuplée de chasseurs-cueilleurs et de premiers éleveurs. Les gravures rupestres d\'animaux aujourd\'hui disparus témoignent de cette époque où le climat était bien plus humide.' },
    { year: '~1000 av. J.-C.', title: 'Royaumes berbères', desc: 'Établissement des tribus berbères et début du commerce transsaharien.', detail: 'Les tribus berbères (Imazighen) se sédentarisent dans les oasis et établissent des routes commerciales à travers le Sahara. Le sel, l\'or et les esclaves deviennent les principaux biens échangés entre l\'Afrique subsaharienne et le bassin méditerranéen. Ces échanges feront la richesse des cités caravanières pendant des siècles.' },
    { year: '~VIIe siècle', title: 'Islamisation', desc: 'Arrivée de l\'islam par les commerçants arabes et berbères.', detail: 'L\'islam sunnite de rite malékite s\'implante progressivement par les échanges commerciaux et l\'influence des tribus arabes venues du nord. Les premières mosquées sont construites dans les cités caravanières comme Chinguetti et Ouadane, qui deviendront des centres religieux et intellectuels majeurs en Afrique de l\'Ouest.' },
    { year: '1076', title: 'Empire almoravide', desc: 'Conquête almoravide de l\'Afrique du Nord et de l\'Andalousie depuis la Mauritanie.', detail: 'Né dans l\'Adrar mauritanien, le mouvement almoravide fondé par Abdallah Ibn Yassin unifie les tribus sanhaja et lance une conquête fulgurante. Sous Youssef Ibn Tachfine, l\'empire s\'étend du Sénégal à l\'Andalousie, prenant Grenade et fondant Marrakech. C\'est l\'âge d\'or du Ghana médiéval et de la culture maure.' },
    { year: 'XIIIe siècle', title: 'Empire du Mali', desc: 'La région est intégrée à l\'Empire du Mali sous Soundiata Keïta.', detail: 'L\'Empire du Mali absorbe les territoires sahéliens de la Mauritanie actuelle. Les cités de Tombouctou et Djenné deviennent des carrefours intellectuels et commerciaux. L\'or du Bambouk et du Bouré fait la renommée de l\'empire dans tout le monde méditerranéen.' },
    { year: 'XVIIe siècle', title: 'Émirats maures', desc: 'Formation des émirats du Trarza, Brakna, Tagant et Adrar.', detail: 'Après le déclin des grands empires, des émirats indépendants se constituent sur le territoire mauritanien. Les émirs du Trarza et du Brakna dominent le sud, tandis que l\'Adrar et le Tagant contrôlent les routes caravanières. Ces émirats maintiennent leur autonomie jusqu\'à l\'arrivée des colonisateurs français.' },
    { year: '1903', title: 'Protectorat français', desc: 'La Mauritanie devient un protectorat de la France.', detail: 'La France établit un protectorat sur la Mauritanie dans le cadre de sa conquête de l\'Afrique-Occidentale française. Les émirats sont progressivement soumis par la force, notamment après la bataille de Tijigja. Le gouverneur Coppolani joue un rôle clé dans la pacification du territoire.' },
    { year: '1920', title: 'Colonie française', desc: 'La Mauritanie devient une colonie française au sein de l\'Afrique-Occidentale française.', detail: 'La Mauritanie est officiellement intégrée à l\'AOF (Afrique-Occidentale française) comme colonie distincte. Saint-Louis du Sénégal sert de capitale administrative. L\'administration coloniale impose de nouveaux impôts, recrute des tirailleurs sénégalais et développe une économie extractive centrée sur le fer et le sel.' },
    { year: '1960', title: 'Indépendance', desc: 'Proclamation de l\'indépendance le 28 novembre 1960 sous la présidence de Mokhtar Ould Daddah.', detail: 'Le 28 novembre 1960, la République Islamique de Mauritanie proclame son indépendance avec Mokhtar Ould Daddah comme premier président. Le pays adopte une constitution, rejoint l\'ONU et la Ligue arabe. Nouakchott, alors un petit village, est choisie comme capitale et connaît une croissance rapide.' },
    { year: '1976-1978', title: 'Guerre du Sahara', desc: 'Annexion puis abandon du Sahara occidental après des conflits avec le Polisario.', detail: 'La Mauritanie annexe le tiers sud du Sahara occidental après le départ des Espagnols, mais doit faire face à la guérilla du Front Polisario. Les attaques sur les infrastructures minières de Zouérate affaiblissent l\'économie. En 1978, un coup d\'État militaire met fin à la présidence de Ould Daddah et la Mauritanie abandonne ses prétentions territoriales.' },
    { year: '2008', title: 'Coup d\'État', desc: 'Coup d\'État militaire mené par Mohamed Ould Abdel Aziz.', detail: 'Le général Mohamed Ould Abdel Aziz renverse le président élu Sidi Ould Cheikh Abdallahi. Le putsch est condamné par la communauté internationale, mais Ould Abdel Aziz remporte l\'élection présidentielle de 2009. Son mandat est marqué par une stabilité relative et une croissance économique tirée par les mines et le pétrole.' },
    { year: '2019', title: 'Transition démocratique', desc: 'Première transition pacifique du pouvoir avec l\'élection de Mohamed Ould Cheikh El Ghazouani.', detail: 'Le 22 juin 2019, Mohamed Ould Cheikh El Ghazouani, ancien ministre de la Défense, remporte l\'élection présidentielle. C\'est la première alternance pacifique et démocratique depuis l\'indépendance. Le scrutin est jugé globalement transparent par les observateurs internationaux, marquant une avancée pour la démocratie mauritanienne.' },
    { year: '2024', title: 'Élection présidentielle', desc: 'Réélection de Mohamed Ould Cheikh El Ghazouani pour un second mandat.', detail: 'Le président sortant Mohamed Ould Cheikh El Ghazouani est réélu dès le premier tour de l\'élection présidentielle de juin 2024. Le scrutin confirme la stabilité politique du pays dans un contexte régional tendu. Le nouveau mandat met l\'accent sur la diversification économique, la sécurité régionale et le développement des infrastructures.' }
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
    gdpDesc: 'Le PIB mauritanien est passé de 5,8 à 10,4 milliards $ entre 2015 et 2024, soit une croissance moyenne de 6,7% par an. Cette progression est portée par l\'essor minier (fer, or, cuivre) et la hausse des investissements dans les infrastructures.',
    sectors: [
      { name: 'Mines (Fer, Or, Cuivre)', value: 35 },
      { name: 'Pêche', value: 20 },
      { name: 'Agriculture & Élevage', value: 15 },
      { name: 'Services & Télécoms', value: 18 },
      { name: 'Construction & Énergie', value: 12 }
    ],
    sectorsDesc: 'Le secteur minier domine avec 35% du PIB, grâce aux gisements de fer de Zouérate et aux mines d\'or de Tasiast. La pêche (20%) et les services (18%) complètent le tissu économique. L\'agriculture, bien que minoritaire en valeur, emploie une large part de la population rurale.',
    exports: [
      { product: 'Minerai de fer', value: 42 },
      { product: 'Or', value: 18 },
      { product: 'Poissons & fruits de mer', value: 16 },
      { product: 'Cuivre', value: 8 },
      { product: 'Produits pétroliers', value: 6 },
      { product: 'Autres', value: 10 }
    ],
    exportsDesc: 'Le minerai de fer représente 42% des exportations totales, faisant de la Mauritanie l\'un des principaux exportateurs africains. L\'or (18%) et les produits de la pêche (16%) sont les deuxième et troisième postes, tandis que le cuivre et les hydrocarbures complètent le panier exportateur.'
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
    popDesc: 'La population mauritanienne est passée de 854 000 habitants en 1960 à 4,62 millions en 2024, soit une multiplication par 5,4 en 64 ans. La croissance démographique reste soutenue avec un taux de fécondité de 4,5 enfants par femme.',
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
    ethnicDesc: 'Les Haratines (Maures noirs) forment le groupe le plus nombreux avec 40% de la population, suivis des Beidanes (Maures blancs) avec 30%. Les Peuls (15%), Soninkés (8%), Wolofs (5%) et Bambaras (2%) complètent la mosaïque ethnique du pays.',
    urbanisation: [
      { year: 1960, value: 5 },
      { year: 1970, value: 15 },
      { year: 1980, value: 28 },
      { year: 1990, value: 40 },
      { year: 2000, value: 50 },
      { year: 2010, value: 55 },
      { year: 2020, value: 60 },
      { year: 2024, value: 62 }
    ],
    urbanDesc: 'L\'urbanisation est passée de 5% en 1960 à 62% en 2024. Nouakchott, partie d\'un petit village à l\'indépendance, concentre aujourd\'hui près d\'un tiers de la population nationale. Cette croissance rapide reflète l\'exode rural et la centralisation économique.'
  },

  tourism: [
    {
      name: 'Parc National du Banc d\'Arguin',
      location: 'Côte Atlantique',
      desc: 'Site classé UNESCO, refuge pour des millions d\'oiseaux migrateurs. Ses eaux poissonneuses attirent pêcheurs et visiteurs.',
      image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&fit=crop',
      detail: 'Le Parc National du Banc d\'Arguin est l\'un des plus importants sanctuaires d\'oiseaux au monde. Classé au patrimoine mondial de l\'UNESCO depuis 1989, il s\'étend sur plus de 12 000 km² entre désert et océan. Les eaux peu profondes de ses lagons abritent des millions d\'oiseaux migrateurs — flamants roses, pélicans, sternes et hérons. Les pêcheurs Imraguen, communauté traditionnelle, y pratiquent une pêche artisanale respectueuse de l\'environnement.',
      type: 'Parc naturel',
      rating: 5,
      bestTime: 'Novembre à avril'
    },
    {
      name: 'Ville ancienne de Chinguetti',
      location: 'Adrar',
      desc: 'Cité sainte et centre intellectuel fondé au XIIIe siècle. Ses bibliothèques conservent des manuscrits anciens.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&fit=crop',
      detail: 'Surnommée la « ville des bibliothèques », Chinguetti est l\'une des cités saintes de l\'islam en Afrique. Fondée au XIIIe siècle, elle comptait autrefois 30 bibliothèques privées abritant des milliers de manuscrits anciens sur la théologie, l\'astronomie, la médecine et le droit. Ses ruelles étroites, ses mosquées à minaret carré et ses maisons en pierre sèche lui confèrent un charme intemporel. C\'est une étape incontournable pour tout voyage dans l\'Adrar.',
      type: 'Cité historique',
      rating: 5,
      bestTime: 'Octobre à mars'
    },
    {
      name: 'Structure de Richat (Œil du Sahara)',
      location: 'Adrar',
      desc: 'Formation géologique spectaculaire de 50 km de diamètre visible depuis l\'espace.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&fit=crop',
      detail: 'L\'Œil du Sahara ou structure de Richat est une formation géologique unique au monde. Ce cercle concentrique de 50 km de diamètre, visible depuis l\'espace, intrigue les scientifiques depuis des décennies. Longtemps considéré comme un cratère d\'impact météoritique, il s\'agit en réalité d\'un dôme géologique érodé par le vent et l\'eau. Le site offre des vues spectaculaires depuis les falaises environnantes.',
      type: 'Site naturel',
      rating: 5,
      bestTime: 'Novembre à février'
    },
    {
      name: 'Nouadhibou & la Baie du Lévrier',
      location: 'Dakhlet Nouadhibou',
      desc: 'Deuxième ville du pays, centre de la pêche industrielle avec des plages magnifiques.',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&fit=crop',
      detail: 'Nouadhibou est la capitale économique de la Mauritanie et le plus grand port de pêche d\'Afrique de l\'Ouest. La ville est située sur la presqu\'île du Cap Blanc, face à la Baie du Lévrier. Ses plages de sable fin, les épaves de bateaux rouillés et son marché aux poissons animé attirent les photographes et les voyageurs curieux. C\'est aussi le point de départ pour explorer le Parc du Banc d\'Arguin.',
      type: 'Ville côtière',
      rating: 4,
      bestTime: 'Toute l\'année'
    },
    {
      name: 'Oasis de Terjit',
      location: 'Adrar',
      desc: 'Oasis luxuriante dans les gorges de l\'Adrar, avec des sources d\'eau douce et des palmiers.',
      image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&fit=crop',
      detail: 'L\'oasis de Terjit est un véritable havre de paix niché dans une gorge étroite au cœur de l\'Adrar. Ses palmiers, ses sources d\'eau chaude naturelle et ses petites cascades en font un lieu de baignade et de détente très prisé des voyageurs. Après une journée dans le désert, rien de tel qu\'un bain dans les eaux tièdes de Terjit pour se ressourcer.',
      type: 'Oasis',
      rating: 4,
      bestTime: 'Octobre à avril'
    },
    {
      name: 'Village de Tichitt',
      location: 'Hodh Ech Chargui',
      desc: 'Ancien carrefour commercial du désert avec une architecture en pierre traditionnelle.',
      image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&fit=crop',
      detail: 'Classé au patrimoine mondial de l\'UNESCO, Tichitt est l\'une des plus anciennes villes habitées de Mauritanie. Fondée au XIIe siècle sur la route du sel et de l\'or, elle conserve une architecture en pierre sèche d\'une beauté saisissante. Ses greniers fortifiés, ses mosquées anciennes et ses ruelles silencieuses racontent l\'histoire d\'un carrefour caravanier aujourd\'hui endormi.',
      type: 'Cité historique',
      rating: 4,
      bestTime: 'Décembre à mars'
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