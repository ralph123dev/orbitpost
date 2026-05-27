import { MockPost, ChatThread, FeatureSpotlight } from './types';

export const FEATURE_SPOTLIGHTS: FeatureSpotlight[] = [
  {
    id: 'studio',
    title: 'Orbit Studio',
    subtitle: 'Création Virale Instantanée',
    description: 'Créez et partagez des vidéos courtes fluides et percutantes. Un ensemble d\'outils professionnels intégrés à l\'intelligence artificielle vous aide à capturer l\'attention, appliquer des filtres spatiaux et devenir viral en un clin d\'œil.',
    iconName: 'Sparkles',
    color: 'from-violet-500 to-indigo-500',
    badge: 'Populaire'
  },
  {
    id: 'messenger',
    title: 'Messenger Sécurisé',
    subtitle: 'Chiffrement E2EE de Bout en Bout',
    description: 'Vos conversations sont sacrées. Profitez de protocoles de chiffrement à divulgation nulle de connaissance (Zero-Knowledge) assurant que personne, pas même Orbit Post, ne puisse lire vos messages et médias.',
    iconName: 'ShieldAlert',
    color: 'from-emerald-500 to-teal-500',
    badge: 'Militaire'
  },
  {
    id: 'videoplus',
    title: 'Video Plus',
    subtitle: 'Zero-Data Mode révolutionnaire',
    description: 'L\'innovation suprême d\'Orbit. Pendant que vous êtes sur un réseau Wi-Fi stable, Orbit anticipe intelligemment et télécharge vos contenus préférés en arrière-plan pour les visionner hors-ligne sans data cellulaire.',
    iconName: 'Zap',
    color: 'from-amber-500 to-orange-500',
    badge: 'Exclusif'
  },
  {
    id: 'translation',
    title: 'Traduction Auto',
    subtitle: 'Brisez les Frontières Linguistiques',
    description: 'Lisez n\'importe quelle publication internationale dans votre langue natale instantanément grâce à notre moteur de traduction neuronale contextuel rapide et ultra-précis.',
    iconName: 'Languages',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'boost',
    title: 'Boost Ciblé',
    subtitle: 'Visibilité Démocratisée',
    description: 'Propulsez vos publications en tête d\'étagère sans budgets massifs. Notre algorithme distribue votre post auprès de l\'audience idéale en fonction de ses centres d\'intérêt et sans tracking invasif.',
    iconName: 'TrendingUp',
    color: 'from-pink-500 to-rose-500'
  }
];

export const MOCK_POSTS: MockPost[] = [
  {
    id: 'post-1',
    username: 'Orbit Team',
    handle: '@orbit_official',
    avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
    time: 'Il y a 2h',
    content: {
      fr: 'Bienvenue dans la nouvelle ère du social ! 🌟 Nous croyons en une plateforme sans tracking intrusif, où vos idées orbitent librement. Cliquez sur "Traduire" pour observer notre moteur de traduction instantanée.',
      en: 'Welcome to the new era of social ! 🌟 We believe in a platform without intrusive tracking, where your ideas orbit freely. Click "Translate" to test our instant translation engine.',
      es: '¡Bienvenido a la nueva era de lo social! 🌟 Creemos en una plataforma sin rastreo intrusivo, donde tus ideas orbiten libremente. Haz clic en "Traducir" para probar nuestro motor.'
    },
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
    likes: 1243,
    reposts: 382,
    comments: 89,
    isBoosted: true
  },
  {
    id: 'post-2',
    username: 'Sophie Cluzel',
    handle: '@sophie_dev',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    time: 'Il y a 5h',
    content: {
      fr: 'Je viens de tester le Video Plus en prenant le métro sans couverture réseau. C\'est magique, mes vidéos favorites s\'affichent instantanément sans aucune mise en mémoire tampon ! 🚇🔌',
      en: 'I just tested Video Plus while taking the subway with zero network coverage. It is digital magic, all my favorite videos loaded instantly without any buffering ! 🚇🔌',
      es: 'Acabo de probar Video Plus en el metro sin cobertura. ¡Es magia pura, mis videos favoritos se cargan al instante sin almacenamiento previo! 🚇🔌'
    },
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80',
    likes: 854,
    reposts: 128,
    comments: 44
  },
  {
    id: 'post-3',
    username: 'Lucas Martinez',
    handle: '@lucas_astro',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    time: 'Il y a 1j',
    content: {
      fr: 'Le chiffrement E2EE de bout en bout sur Orbit Messenger me donne enfin l\'esprit tranquille. Mes projets artistiques secrets partagés restent STRICTEMENT privés. 🌌🔒',
      en: 'The E2EE end-to-end encryption on Orbit Messenger finally gives me peace of mind. My shared secret art projects remain STRICTLY private. 🌌🔒',
      es: 'La encriptación de extremo a extremo E2EE en Orbit Messenger finalmente me da tranquilidad. Mis proyectos de arte confidenciales se mantienen ESTRICTAMENTE reservados. 🌌🔒'
    },
    likes: 432,
    reposts: 92,
    comments: 31
  }
];

export const MOCK_CHATS: ChatThread[] = [
  {
    id: 'thread-Sophie',
    name: 'Sophie Cluzel',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    role: 'Lead Architecte Orbit',
    lastActive: 'En ligne',
    messages: [
      {
        id: 'msg-s1',
        sender: 'system',
        content: {
          fr: 'Canal de chiffrement activé. Clé de session générée: AES-GCM-256 (Vérifiée ✔)',
          en: 'Encryption canal activated. Session key generated: AES-GCM-256 (Verified ✔)'
        },
        timestamp: '14:24',
        isEncrypted: true
      },
      {
        id: 'msg-s2',
        sender: 'other',
        content: {
          fr: 'Salut ! J\'ai finalisé l\'intégration du module E2EE révisé de l\'application mobile. Tout est paré pour la démo publique.',
          en: 'Hi! I have wrapped up the integration of the revised E2EE module in the mobile app. All ready for the public demo.'
        },
        timestamp: '14:25',
        isEncrypted: true
      },
      {
        id: 'msg-s3',
        sender: 'user',
        content: {
          fr: 'Génial Sophie ! Est-ce que les clés restent stockées uniquement en local sur le téléphone ?',
          en: 'Awesome Sophie! Are keys strictly stored locally on the phone?'
        },
        timestamp: '14:26',
        isEncrypted: true
      },
      {
        id: 'msg-s4',
        sender: 'other',
        content: {
          fr: 'Absolument. Aucune clé privée ne quitte jamais ton terminal. Zéro fuite possible, confidentialité mathématiquement garantie !',
          en: 'Absolutely. No private key ever leaves your device. Zero leaks possible, privacy is mathematically guaranteed!'
        },
        timestamp: '14:27',
        isEncrypted: true
      }
    ]
  },
  {
    id: 'thread-Gabriel',
    name: 'Gabriel (Secu)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    role: 'Expert Sécurité Orbit',
    lastActive: 'Actif il y a 10m',
    messages: [
      {
        id: 'msg-g1',
        sender: 'system',
        content: {
          fr: 'Canal sécurisé double-ratchet démarré. Certificat Orbit #9182',
          en: 'Double-ratchet secure canal started. Certified Orbit #9182'
        },
        timestamp: '11:02',
        isEncrypted: true
      },
      {
        id: 'msg-g2',
        sender: 'other',
        content: {
          fr: 'J\'ai audité le code de l\'APK de test pour s\'assurer qu\'il n\'y a AUCUN traceur publicitaire ou kit SDK tiers.',
          en: 'I audited the APK test code to guarantee there are ZERO advertising trackers or third-party SDK kits.'
        },
        timestamp: '11:05',
        isEncrypted: true
      },
      {
        id: 'msg-g3',
        sender: 'other',
        content: {
          fr: 'Le score de sécurité de l\'APK est de 100/100 sur le scanner SecLab ! Autonomie complète garantie.',
          en: 'The APK security score is 100/100 on the SecLab scanner! Full digital autonomy.'
        },
        timestamp: '11:06',
        isEncrypted: true
      }
    ]
  }
];
