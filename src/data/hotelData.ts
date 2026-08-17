import { Room, MenuItem, Experience, Offer, GalleryItem, BlogPost } from '../types';

const heroLodgeImg = '/images/hero_lodge.jpeg';
const suiteLagonImg = '/images/suite_lagon.jpeg';
const lemurImg = '/images/lemur_nature.jpeg';
const gourmetDiningImg = '/images/gourmet_dining.jpeg';
const spaRelaxImg = '/images/spa_relax.jpeg';
const villaNatureImg = '/images/villa_nature.jpeg';
const suitePrestigeImg = '/images/suite_prestige.jpeg';
const familyLodgeImg = '/images/family_lodge.jpeg';
const gourmetDishImg = '/images/gourmet_dish.jpeg';
const gourmetPlateImg = '/images/gourmet_plate.jpeg';
const hotelExteriorImg = '/images/hotel_exterior.jpeg';
const lemurCloseImg = '/images/lemur_close.jpeg';
const lodgeBedroomImg = '/images/lodge_bedroom.jpeg';
const prestigeLivingImg = '/images/prestige_living.jpeg';
const restaurantInteriorImg = '/images/restaurant_interior.jpeg';
const spaMassageImg = '/images/spa_massage.jpeg';
const suiteLagonViewImg = '/images/suite_lagon_view.jpeg';
const villaPoolImg = '/images/villa_pool.jpeg';

export const HERO_LODGE_IMAGE = heroLodgeImg;
export const LEMUR_IMAGE = lemurImg;
export const SUITE_LAGON_IMAGE = suiteLagonImg;
export const GOURMET_DINING_IMAGE = gourmetDiningImg;
export const SPA_RELAX_IMAGE = spaRelaxImg;
export const VILLA_NATURE_IMAGE = villaNatureImg;
export const SUITE_PRESTIGE_IMAGE = suitePrestigeImg;
export const HOTEL_EXTERIOR_IMAGE = hotelExteriorImg;
export const RESTAURANT_INTERIOR_IMAGE = restaurantInteriorImg;
export const PRESTIGE_LIVING_IMAGE = prestigeLivingImg;
export const LEMUR_CLOSE_IMAGE = lemurCloseImg;

export const ROOMS: Room[] = [
  {
    id: 'suite-lagon',
    title: 'SUITE LAGON',
    subtitle: 'Élégance avec terrasse sur le lac',
    category: 'suite',
    price: 420,
    surface: 45,
    capacity: 2,
    view: 'Vue lac',
    shortDescription: 'Suite avec balcon privé et vue imprenable sur le lac et la forêt tropicale.',
    fullDescription: 'Profitez d\'une suite élégante avec balcon privé surplombant le lac et la forêt tropicale d\'Andasibe. Un cadre idéal pour se ressourcer et se reconnecter à l\'essentiel. Conçue en bois précieux de palissandre et décorée avec des objets d\'artisanat malgache raffiné, la Suite Lagon allie authenticité et haut standing.',
    images: [
      suiteLagonImg,
      suiteLagonViewImg,
      prestigeLivingImg,
      hotelExteriorImg
    ],
    amenities: [
      'Lit King size',
      'Mini-bar réassorti',
      'Produits d\'accueil bio locaux',
      'Douche à l\'italienne en pierre',
      'Coffre-fort électronique',
      'Service en chambre 24h/24',
      'Climatisation & ventilateur silencieux',
      'Peignoirs & chaussons en coton bio',
      'Machine à café Nespresso',
      'Télescope d\'observation ornithologique',
      'Wi-Fi haut débit par satellite'
    ],
    rating: 5,
    featured: true
  },
  {
    id: 'villa-nature',
    title: 'VILLA NATURE',
    subtitle: 'Cocon privé avec piscine naturelle',
    category: 'villa',
    price: 560,
    surface: 60,
    capacity: 2,
    view: 'Vue forêt',
    shortDescription: 'Villa privée au cœur de la nature avec piscine privative et grande baignoire extérieure.',
    fullDescription: 'Nichée au cœur d\'une végétation exubérante, la Villa Nature propose une expérience d\'immersion absolue. Elle dispose d\'un bassin privé filtré naturellement, d\'une vaste terrasse en bois et d\'un salon extérieur ombragé.',
    images: [
      villaNatureImg,
      villaPoolImg,
      suiteLagonImg
    ],
    amenities: [
      'Lit King size',
      'Piscine privée naturelle',
      'Baignoire extérieure en pierre',
      'Service de majordome dédié',
      'Terrasse privée panoramique',
      'Système audio Bluetooth Bang & Olufsen',
      'Produits de soin bio à la vanille de Madagascar',
      'Wi-Fi haut débit'
    ],
    rating: 5,
    featured: true
  },
  {
    id: 'suite-prestige',
    title: 'SUITE PRESTIGE',
    subtitle: 'Luxe absolu et panorama à 180°',
    category: 'suite',
    price: 760,
    surface: 70,
    capacity: 2,
    view: 'Vue panoramique',
    shortDescription: 'Le summum du luxe avec terrasse privée, salon indépendant et services sur-mesure.',
    fullDescription: 'Offrant un panorama époustouflant sur la canopée d\'Andasibe, la Suite Prestige est une démonstration de design d\'exception. Elle se compose d\'une vaste chambre, d\'un salon séparé avec cheminée en pierre et d\'un jacuzzi privatif chauffé sur la terrasse.',
    images: [
      suitePrestigeImg,
      prestigeLivingImg,
      heroLodgeImg
    ],
    amenities: [
      'Lit King size sur-mesure',
      'Jacuzzi extérieur chauffé',
      'Cheminée au feu de bois dans le salon',
      'Service de petit-déjeuner au lit sans supplément',
      'Accès illimité au Spa thermal',
      'Dégustation privée de rhums arrangés'
    ],
    rating: 5,
    featured: true
  },
  {
    id: 'family-lodge',
    title: 'FAMILY LODGE',
    subtitle: 'Espace et sérénité pour toute la famille',
    category: 'lodge',
    price: 950,
    surface: 90,
    capacity: 4,
    view: 'Vue forêt',
    shortDescription: 'Idéal pour les familles, espace confortable avec 2 chambres séparées et activités incluses.',
    fullDescription: 'Passez des moments inoubliables en famille dans ce lodge spacieux de 90 m². Il comprend deux chambres doubles ensuite, un salon central chaleureux, une grande varangue donnant sur la forêt et un kit d\'observation des lémuriens pour enfants.',
    images: [
      familyLodgeImg,
      lodgeBedroomImg
    ],
    amenities: [
      '2 Lits King size (ou 4 lits simples)',
      '2 Salles de bain indépendantes',
      'Varangue couverte de 30 m²',
      'Jeux de société et kits naturalistes enfants',
      'Petit-déjeuner buffet complet inclus',
      'Wi-Fi haut débit'
    ],
    rating: 5,
    featured: true
  },
  {
    id: 'villa-royale-forest',
    title: 'VILLA ROYALE FOREST',
    subtitle: 'Résidence d\'exception en palissandre',
    category: 'villa',
    price: 1250,
    surface: 140,
    capacity: 6,
    view: 'Vue forêt & lac',
    shortDescription: 'Immense villa d\'architecte entourée par la canopée, avec chef privé sur demande.',
    fullDescription: 'La Villa Royale Forest offre un sanctuaire exclusif pour les voyageurs exigeants. Nichée au point le plus élevé du domaine, elle offre une intimité totale, un sauna finlandais en bois, une piscine chauffée et un chef privé dédié.',
    images: [
      villaNatureImg,
      heroLodgeImg
    ],
    amenities: [
      '3 Suites privées avec dressing',
      'Piscine à débordement chauffée',
      'Chef cuisinier privé & Majordome',
      'Sauna privé en cèdre',
      'Transfert héliport inclus'
    ],
    rating: 5,
    featured: false
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'carpaccio-zebu',
    title: 'Carpaccio de zébu',
    category: 'entrees',
    price: 18,
    description: 'Carpaccio de zébu fumé au bois de girofle, roquette sauvage de la forêt, copeaux de parmesan raffiné et huile de citron vert de Brickaville.',
    image: gourmetDishImg,
    tags: ['Spécialité locale', 'Fumé maison'],
    recommended: true
  },
  {
    id: 'raviole-bredes',
    title: 'Raviole de brèdes locales',
    category: 'entrees',
    price: 16,
    description: 'Raviole maison aux brèdes mafana et paysannes, bouillon clair parfumé au gingembre sauvage et poivre sauvage Voatsiperifery.',
    image: gourmetPlateImg,
    tags: ['Végétarien', 'Bio'],
    recommended: false
  },
  {
    id: 'filet-poisson-lac',
    title: 'Filet de poisson du lac',
    category: 'plats',
    price: 26,
    description: 'Filet de poisson du lac poêlé à l\'unilatérale, sauce onctueuse vanille de Sambava et combava, poêlée de légumes bio de saison.',
    image: gourmetDiningImg,
    tags: ['Incontournable Chef', 'Sans Gluten'],
    recommended: true
  },
  {
    id: 'magret-canard',
    title: 'Magret de canard rôti',
    category: 'plats',
    price: 28,
    description: 'Magret de canard rôti rosé, sauce au miel de forêt d\'Andasibe et épices locales, purée veloutée de patate douce violette.',
    image: gourmetDishImg,
    tags: ['Miel de la forêt'],
    recommended: true
  },
  {
    id: 'langouste-grillee',
    title: 'Langouste grillée au combava',
    category: 'plats',
    price: 34,
    description: 'Langouste royale fraîche de la côte Est, émulsion au beurre de combava, riz rouge aromatique de Sainte-Marie.',
    image: restaurantInteriorImg,
    tags: ['Pêche durable', 'Signature'],
    recommended: true
  },
  {
    id: 'fondant-chocolat',
    title: 'Fondant au chocolat Grand Cru',
    category: 'desserts',
    price: 12,
    description: 'Fondant au chocolat 70% pure origine Sambirano, cœur coulant, glace artisanale vanille bourbon de Madagascar.',
    image: gourmetPlateImg,
    tags: ['Chocolat d\'Exception'],
    recommended: true
  },
  {
    id: 'mousse-fruits-passion',
    title: 'Symphonie aux fruits exotiques',
    category: 'desserts',
    price: 11,
    description: 'Mousse légère au fruit de la passion, sorbet lychee givré et sablé au gingembre confit.',
    image: gourmetDishImg,
    tags: ['Frais & Léger'],
    recommended: false
  },
  {
    id: 'cocktail-andasibe-breeze',
    title: 'Cocktail "Andasibe Breeze"',
    category: 'boissons',
    price: 14,
    description: 'Rhum arrangé artisanal infusé vanille-cannelle, jus de litchi fraîchement pressé, purée de fruit de la passion et brin de menthe sauvage.',
    image: restaurantInteriorImg,
    tags: ['Cocktail Création'],
    recommended: true
  },
  {
    id: 'menu-degustation-5-temps',
    title: 'Menu Dégustation "Saveurs de l\'Île Rouge"',
    category: 'degustation',
    price: 75,
    description: 'Voyage culinaire en 5 temps orchestré par notre Chef, mariant ingrédients rares de Madagascar et techniques de haute gastronomie internationale. Accords mets & vins disponibles.',
    image: gourmetDiningImg,
    tags: ['5 Services', 'Expérience Culinaire'],
    recommended: true
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'observation-lemuriens',
    title: 'Observation des lémuriens Indri Indri',
    category: 'nature',
    price: 25,
    duration: '3 heures',
    difficulty: 'Facile à Modéré',
    shortDescription: 'Partez à la rencontre du plus grand lémurien vivant au monde et écoutez son chant envoûtant.',
    fullDescription: 'Accompagné de nos guides écologistes certifiés, vous vous enfoncerez au petit matin dans la forêt humide d\'Andasibe pour observer les fameux Indri Indri dans leur habitat naturel. Écoutez leur chant territorial retentir à des kilomètres et découvrez également d\'autres espèces comme le Lémur couronné et le Sifaka de Diadème.',
    image: lemurImg,
    included: [
      'Guide naturaliste privé diplômé',
      'Jumelles professionnelles de prêt',
      'Collation chaude & viennoiseries en forêt',
      'Droit d\'entrée dans la réserve'
    ]
  },
  {
    id: 'randonnees-guidees-nocturnes',
    title: 'Randonnée nocturne féérique',
    category: 'nature',
    price: 20,
    duration: '2 heures',
    difficulty: 'Facile',
    shortDescription: 'Explorez la forêt tropicale à la nuit tombée et découvrez les caméléons et lémuriens microcèbes.',
    fullDescription: 'À la tombée du jour, la forêt d\'Andasibe se métamorphose. Équipé de lampes frontales puissantes, suivez votre guide pour débusquer les plus petits lémuriens nocturnes du monde (Microcebus), des caméléons multicolores endormis et une grenouille arboricole fluorescente.',
    image: lemurCloseImg,
    included: [
      'Guide francophone spécialisé fauna nocturne',
      'Éclairage LED haute précision fourni',
      'Poncho étanche si nécessaire'
    ]
  },
  {
    id: 'canoe-sur-le-canal',
    title: 'Canoë silencieux sur le lac & canal',
    category: 'aventure',
    price: 15,
    duration: '1h30',
    difficulty: 'Facile',
    shortDescription: 'Une balade aquatique paisible au fil de l\'eau pour observer les oiseaux tropicaux et la flore.',
    fullDescription: 'Montez à bord de nos canoës en bois sculpté et glissez doucement sur les eaux calmes bordant le domaine. Observez le martin-pêcheur malgache, les nénuphars géants et profitez d\'un moment de pure quiétude.',
    image: suiteLagonViewImg,
    included: [
      'Canoë traditionnel et pagaies',
      'Gilets de sauvetage certifiés',
      'Conseils de navigation par un moniteur'
    ]
  },
  {
    id: 'spa-bien-etre',
    title: 'Rituel Spa & Massage aux huiles essentielles',
    category: 'bien-etre',
    price: 40,
    duration: '1h30',
    difficulty: 'Relaxant',
    shortDescription: 'Massages, soins corporels bio et séances de yoga face à la forêt primaire.',
    fullDescription: 'Laissez-vous choyer dans notre pavillon Spa suspendu au-dessus du ruisseau. Nos thérapeutes expérimentées utilisent des huiles essentielles bio distillées localement (Ravintsara, Niaouli, Ylang-Ylang) pour dissoudre toutes vos tensions.',
    image: spaRelaxImg,
    included: [
      'Massage personnalisé de 60 minutes',
      'Bain aromatique aux fleurs d\'orchidées',
      'Inclusion de thé au gingembre frais'
    ]
  },
  {
    id: 'soirees-coin-du-feu',
    title: 'Soirée contes & musiques au coin du feu',
    category: 'culture',
    price: 10,
    duration: '2 heures',
    difficulty: 'Très facile',
    shortDescription: 'Ambiance conviviale sous les étoiles avec contes traditionnels malgaches et guitare acoustique.',
    fullDescription: 'Autour du grand braséro du lodge, rassemblez-vous à la belle étoile. Un conteur du village vous transmettra les légendes ancestrales de l\'île, accompagnées du son envoûtant de la Valiha (instrument traditionnel en bambou).',
    image: heroLodgeImg,
    included: [
      'Dégustation de rhums arrangés maison',
      'Marshmallows à griller au feu',
      'Animation musicale live'
    ]
  },
  {
    id: 'visite-reserve-analamazaotra',
    title: 'Grand Circuit Réserve d\'Analamazaotra',
    category: 'nature',
    price: 30,
    duration: '4 heures',
    difficulty: 'Modéré',
    shortDescription: 'Découvrez la biodiversité exceptionnelle de la réserve nationale protégée d\'Andasibe.',
    fullDescription: 'Une expédition approfondie à travers la forêt primaire d\'Analamazaotra. Marchez au milieu des arbres centenaires, des fougères arborescentes et des orchidées sauvages uniques à Madagascar.',
    image: lemurImg,
    included: [
      'Transport Aller/Retour depuis l\'hôtel',
      'Ticket officiel de la réserve nationale',
      'Panier pique-nique gourmand du Chef'
    ]
  }
];

export const OFFERS: Offer[] = [
  {
    id: 'escapade-romantique',
    title: 'Escapade Romantique',
    subtitle: 'Nuit magique & attentions privilégiées pour deux',
    price: 650,
    originalPrice: 820,
    duration: '2 Nuits',
    description: '2 nuits en Suite Lagon, dîner aux chandelles au bord du lac, massage duo de 60 min au Spa et petit-déjeuner floating servi directement dans votre bassin privatif.',
    inclusions: [
      '2 Nuits en Suite Lagon avec vue lac',
      'Dîner gastronomique aux chandelles (hors boissons)',
      'Petit-déjeuner flottant ou en chambre',
      'Massage Duo aux huiles de Ravintsara (60 min)',
      'Accueil champagne & corbeille de fruits exotiques'
    ],
    image: suiteLagonImg,
    badge: 'Offre Couple'
  },
  {
    id: 'sejour-famille',
    title: 'Séjour en Famille',
    subtitle: 'Aventure naturaliste & confort partagé',
    price: 950,
    originalPrice: 1180,
    duration: '3 Nuits',
    description: '3 nuits en Family Lodge pour 4 personnes. Activités guidées adaptées aux enfants, visite du parc des lémuriens, feu de camp et repas en demi-pension inclus.',
    inclusions: [
      '3 Nuits en Family Lodge (4 personnes)',
      'Formule Demi-Pension (Petit-déjeuner & Dîner)',
      'Expérience "Aventure Lémuriens" guidée',
      'Initiation au canoë pour toute la famille',
      'Cadeau souvenirs naturalistes pour les enfants'
    ],
    image: familyLodgeImg,
    badge: 'Spécial Famille'
  },
  {
    id: 'retraite-bien-etre',
    title: 'Retraite Bien-être & Sérénité',
    subtitle: 'Ressourcement holistique au cœur de la canopée',
    price: 880,
    originalPrice: 1050,
    duration: '3 Nuits',
    description: '3 nuits de relaxation totale en Villa Nature : soins spa quotidiens, sessions de yoga matinal face au lac, tisanes détox bio et cuisine saine sur-mesure.',
    inclusions: [
      '3 Nuits en Villa Nature avec piscine privative',
      'Consultation bien-être et 3 massages de 60 min',
      'Séances de Yoga au lever du soleil',
      'Pension complète cuisine saine & jus détox',
      'Accès illimité au sauna et espace détente'
    ],
    image: spaRelaxImg,
    badge: 'Cure Wellness'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Vue panoramique du domaine White Palace',
    category: 'hotel',
    image: heroLodgeImg,
    caption: 'Les lodges en bois s\'intègrent harmonieusement dans la forêt tropicale d\'Andasibe.'
  },
  {
    id: 'g2',
    title: 'Intérieur Suite Lagon',
    category: 'hotel',
    image: suiteLagonImg,
    caption: 'Charme authentique du bois précieux, baie vitrée panoramique et confort absolu.'
  },
  {
    id: 'g3',
    title: 'Balcon & vue sur le lac - Suite Lagon',
    category: 'hotel',
    image: suiteLagonViewImg,
    caption: 'Terrasse privée suspendue offrant une vue imprenable sur le lac d\'Andasibe.'
  },
  {
    id: 'g4',
    title: 'Suite Prestige avec jacuzzi',
    category: 'hotel',
    image: suitePrestigeImg,
    caption: 'Le comble du luxe avec espace extérieur privé et vue sur la canopée.'
  },
  {
    id: 'g5',
    title: 'Salon privé de la Suite Prestige',
    category: 'hotel',
    image: prestigeLivingImg,
    caption: 'Design chaleureux associant mobilier haut de gamme et artisanat malgache.'
  },
  {
    id: 'g6',
    title: 'Family Lodge en lisière de forêt',
    category: 'hotel',
    image: familyLodgeImg,
    caption: 'Architecture traditionnelle en bois précieux idéale pour les séjours en famille.'
  },
  {
    id: 'g7',
    title: 'Chambre avec lit King-Size',
    category: 'hotel',
    image: lodgeBedroomImg,
    caption: 'Espace nuit feutré avec literie d\'exception et boiseries sculptées.'
  },
  {
    id: 'g8',
    title: 'Allées végétalisées du domaine',
    category: 'hotel',
    image: hotelExteriorImg,
    caption: 'Parcours botanique traversant les jardins d\'orchidées du domaine.'
  },
  {
    id: 'g9',
    title: 'Piscine naturelle privée',
    category: 'hotel',
    image: villaPoolImg,
    caption: 'Eau de source pure filtrée naturellement sans aucun produit chimique.'
  },
  {
    id: 'g10',
    title: 'Table gastronomique au restaurant',
    category: 'restaurant',
    image: gourmetDiningImg,
    caption: 'Créations gourmandes associant épices rares et vanille Bourbon de Madagascar.'
  },
  {
    id: 'g11',
    title: 'Plat signature du Chef',
    category: 'restaurant',
    image: gourmetDishImg,
    caption: 'Filet de zébu fumé au bois de girofle et déclinaison de légumes bio.'
  },
  {
    id: 'g12',
    title: 'Assiette raffinée & saveurs malgaches',
    category: 'restaurant',
    image: gourmetPlateImg,
    caption: 'Haute gastronomie célébrant les produits du terroir d\'Andasibe.'
  },
  {
    id: 'g13',
    title: 'Atmosphère du restaurant',
    category: 'restaurant',
    image: restaurantInteriorImg,
    caption: 'Cadre chaleureux illuminé par des suspensions artisanales en fibres naturelles.'
  },
  {
    id: 'g14',
    title: 'Lémurien Indri Indri dans les arbres',
    category: 'nature',
    image: lemurImg,
    caption: 'L\'Indri Indri, plus grand lémurien vivant, photographié dans la réserve.'
  },
  {
    id: 'g15',
    title: 'Gros plan sur un Indri Indri',
    category: 'nature',
    image: lemurCloseImg,
    caption: 'Observation privilégiée avec nos guides naturalistes locaux.'
  },
  {
    id: 'g16',
    title: 'Villa Nature immergée dans la canopée',
    category: 'nature',
    image: villaNatureImg,
    caption: 'Immersion totale au milieu des fougères arborescentes et palmiers endémiques.'
  },
  {
    id: 'g17',
    title: 'Pavillon de soin & détente au Spa',
    category: 'experiences',
    image: spaRelaxImg,
    caption: 'Espace de relaxation baigné de lumière naturelle au son des oiseaux.'
  },
  {
    id: 'g18',
    title: 'Massage aux huiles essentielles bio',
    category: 'experiences',
    image: spaMassageImg,
    caption: 'Rituel de soin traditionnel utilisant l\'huile d\'ylang-ylang et de ravintsara.'
  }
];

export const KEY_STATS = [
  { value: '120+', label: 'ESPÈCES OBSERVÉES' },
  { value: '11', label: 'HECTARES PRÉSERVÉS' },
  { value: '40+', label: 'ESPÈCES D\'ORCHIDÉES' },
  { value: '98%', label: 'CLIENTS SATISFAITS' }
];

export const HOTEL_INFO = {
  name: 'WHITE PALACE',
  tagline: 'LUXURY HOTEL & RESTAURANT',
  motto: 'Luxe, Nature & Évasion',
  submotto: 'Un refuge d\'exception au cœur d\'une nature préservée.',
  address: 'Route Nationale 2, km 138, Andasibe 509, Madagascar',
  phone: '+261 34 12 345 67',
  email: 'contact@whitepalace-luxury.com',
  receptionHours: 'Tous les jours : 07h00 - 22h00',
  coordinates: { lat: -18.9322, lng: 48.4178 }
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'À la rencontre de l\'Indri Indri : Le chant sacré de la forêt d\'Andasibe',
    slug: 'rencontre-indri-indri-andasibe',
    category: 'faune-flore',
    excerpt: 'Découvrez les secrets du plus grand lémurien de Madagascar, véritable symbole vivant de la réserve d\'Andasibe et trésor de biodiversité.',
    content: [
      'Au lever du jour, alors que la brume matinale enveloppe délicatement la canopée de la forêt primaire d’Andasibe, un chant mystique resurgit des profondeurs de la canopée. Il s’agit de l’appel de l’Indri Indri (Babakoto), le plus grand lémurien encore en vie sur notre planète.',
      'Mesurant près de 70 cm et pesant jusqu’à 10 kg, cet énigmatique primate sans queue captive tous les passionnés de nature sauvage. Son chant, audible à plus de 3 kilomètres à la ronde, constitue un puissant moyen de communication territorial et d’affirmation familiale.',
      'À White Palace Hotel & Restaurant, nos guides naturalistes locaux issus de la communauté vous accompagnent à l’aube sur des sentiers réservés afin de vous offrir une observation respectueuse, sans troubler la quiétude de ces animaux protégés.'
    ],
    author: 'Jean-Luc Ravoavy, Guide Naturaliste Senior',
    date: '14 Mai 2025',
    readTime: '4 min de lecture',
    image: lemurCloseImg,
    featured: true,
    tags: ['Faune', 'Indri Indri', 'Safari', 'Andasibe']
  },
  {
    id: 'b2',
    title: 'Les secrets de la vanille Bourbon & des épices de Madagascar',
    slug: 'secrets-vanille-bourbon-epices-gastronomie',
    category: 'gastronomie',
    excerpt: 'Plongée au cœur des saveurs malagasy : comment notre Chef sublimera la Reine des Épices dans la carte gastronomique du restaurant.',
    content: [
      'Incontestablement réputée comme la meilleure vanille au monde, la Vanille Bourbon de Madagascar est bien plus qu’une simple épice : c’est l’or noir de notre île, cultivé avec patience et passion dans le respect de traditions séculaires.',
      'Au restaurant de White Palace, notre Chef met un point d’honneur à marier cette vanille d’exception tant dans des créations sucrées – comme nos mille-feuilles croustillants à la vanille d’Analanjirofo – que dans des sauces salées raffinées accompagnant nos médaillons de zébu fumé.',
      'Au cours de votre séjour, découvrez également nos ateliers de dégustation d’épices rares : baie rose de Majunga, poivre sauvage Voatsiperifery et cannelle fraîche cueille le matin même dans notre jardin d’herbes aromatiques.'
    ],
    author: 'Chef Hery Rakotoarisoa',
    date: '02 Avril 2025',
    readTime: '5 min de lecture',
    image: gourmetDishImg,
    featured: false,
    tags: ['Gastronomie', 'Vanille', 'Cuisine Malagasy', 'Chef']
  },
  {
    id: 'b3',
    title: 'Comment bien préparer son voyage et sa randonnée à Andasibe',
    slug: 'guide-pratique-voyage-randonnee-andasibe',
    category: 'conseils',
    excerpt: 'Matériel conseillé, meilleures saisons d\'observation, climat et astuces de notre conciergerie pour vivre un séjour inoubliable.',
    content: [
      'Préparer son expédition dans la forêt tropicale d’Andasibe exige une attention particulière au choix de son équipement. Situé à 1 000 mètres d’altitude, le domaine bénéficie d’un climat frais et pur, parfait pour se ressourcer.',
      'Nos conseils essentiels : munissez-vous de chaussures de marche étanches et adhérentes, d’un coupe-vent imperméable léger et de vêtements aux teintes naturelles (vert, kaki, beige) pour vous fondre discrètement dans le décor.',
      'Pensez également à emporter une lampe frontale avec option lumière rouge pour notre sortie nocturne guidée, au cours de laquelle vous pourrez apercevoir le fameux lémurien microcèbe, plus petit primate nocturne au monde !'
    ],
    author: 'Conciergerie White Palace',
    date: '22 Mars 2025',
    readTime: '3 min de lecture',
    image: hotelExteriorImg,
    featured: false,
    tags: ['Conseils Voyage', 'Randonnée', 'Équipement', 'Astuces']
  },
  {
    id: 'b4',
    title: 'Reforestation & Écotourisme : Notre engagement pour Mantadia',
    slug: 'reforestation-ecotourisme-engagement-mantadia',
    category: 'conservation',
    excerpt: 'Chaque nuit passée à White Palace contribue au financement de notre pépinière bio et au reboisement d\'espèces d\'arbres autochtones.',
    content: [
      'Parce que le luxe contemporain doit s’inscrire dans une démarche exemplaire de préservation, White Palace Hotel & Restaurant mène activement un programme vertueux de conservation de la biodiversité.',
      'Notre pépinière privée produit plus de 2 000 jeunes plants par an (Palissandre, Ravinala, arbres à orchidées). En séjournant chez nous, chaque voyageur participe symboliquement à la plantation d’un arbre qui renforcera le corridor biologique reliant le parc de Mantadia à la réserve d’Analamazaotra.',
      'Nous collaborons étroitement avec les associations locales afin de garantir un impact socio-économique positif et d’encourager la transmission des savoirs environnementaux auprès des jeunes générations.'
    ],
    author: 'Marie de la Canopée, Responsable RSE',
    date: '10 Février 2025',
    readTime: '6 min de lecture',
    image: villaNatureImg,
    featured: false,
    tags: ['Écologie', 'Reforestation', 'RSE', 'Conservation']
  },
  {
    id: 'b5',
    title: 'Les orchidées sauvages d’Andasibe : Un joyau botanique rare',
    slug: 'orchidees-sauvages-andasibe-joyau-botanique',
    category: 'faune-flore',
    excerpt: 'Focus sur les plus de 40 espèces d’orchidées endémiques qui fleurissent dans les sous-bois du domaine.',
    content: [
      'La région d’Andasibe abrite une incroyable variété d’orchidées épiphytes sauvages dont la célèbre Angraecum sesquipedale, aussi appelée "Étoile de Madagascar", immortalisée par Charles Darwin pour son éperon exceptionnellement long.',
      'Dans les jardins préservés de l’hôtel, nos botanistes ont aménagé un parcours thématique permettant d’admirer ces merveilles végétales dans leur habitat naturel.',
      'Venez observer ces floraisons délicates qui parfument naturellement nos allées au crépuscule.'
    ],
    author: 'Botaniste Partenaire VOI',
    date: '18 Janvier 2025',
    readTime: '4 min de lecture',
    image: spaRelaxImg,
    featured: false,
    tags: ['Botanique', 'Orchidées', 'Fleurs', 'Nature']
  }
];
