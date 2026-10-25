export const navigationItems = [
  { key: 'home', label: 'Start', href: '/' },
  { key: 'projects', label: 'Projekte', href: '/projekte' },
  { key: 'about', label: 'Freizeit', href: '/freizeit' },
  { key: 'contact', label: 'Kontakt', href: '/kontakt' },
];

export const portfolioContact = {
  email: 'dario@uitikon.ch',
  emailDisplay: 'dario@uitikon.ch',
  phone: '079 754 75 01',
  githubUrl: 'https://github.com/im24a-schlegeld',
};

export const technologyList = [
  'Python',
  'Java',
  'JavaScript',
  'HTML',
  'CSS',
  'SQL',
  'MongoDB',
  'NoSQL',
  'AWS',
  'Docker',
  'Git',
  'GitHub',
  'Applikationssicherheit',
  'Datenschutz',
];

export const projects = [
  {
    id: 'wheelie-escape',
    title: 'Wheelie Escape',
    category: '3D-Spiel / KI',
    description: 'Ein 3D-Motorradspiel mit Wheelies, Verkehr und einer eigenen Garage.',
    brand: { name: 'Pfusch Clothing', url: 'https://pfusch-clothing.ch/' },
    detailText: [
      'Wheelies halten, dem Verkehr ausweichen und Punkte sammeln. In der Garage lassen sich Motorräder und Fahrer anpassen.',
      'Das Spiel gehört zu meiner Kleidermarke Pfusch Clothing. Damit wollte ich herausfinden, wie weit ich beim Entwickeln mit KI komme.',
    ],
    role: {
      title: 'Entwicklung mit KI',
      paragraphs: [
        'Den Code hat die KI geschrieben. Von mir kommen die Idee, die beschriebenen Funktionen und das Ausprobieren. Wenn etwas anders funktioniert hat als gedacht, habe ich die Anforderungen genauer formuliert und nachgebessert.',
        'Ich wollte dabei besser prompten lernen und die Grenzen der KI kennenlernen. Kundenkonten und gespeicherte Spielstände gehören ebenfalls zum Spiel.',
      ],
    },
    technologies: ['React', 'TypeScript', 'Three.js', 'Vite', 'Shopify'],
    liveUrl: 'https://game.pfusch-clothing.ch/',
    liveLabel: 'Spiel öffnen',
    media: {
      type: 'game',
      src: 'https://game.pfusch-clothing.ch/',
      poster: '/pfusch-game-poster.png',
      label: 'Wheelie Escape',
    },
  },
  {
    id: 'smash-a-meerkat',
    title: 'Smash a Meerkat',
    description: 'Kleines Java-Spiel aus einem Gruppenprojekt in der Schule.',
    detailText: [
      'Das Spiel entstand als Gruppenprojekt im Java-Unterricht. Wir haben damit die Grundlagen aus dem Unterricht praktisch angewendet.',
      'Wir mussten die Aufgaben aufteilen und unseren Code zusammenführen. Dabei ging es auch darum, dass mehrere Personen an derselben Anwendung arbeiten können.',
    ],
    technologies: [],
    githubUrl: 'https://github.com/im24a-schlegeld/SmashAMeerkat',
    media: {
      type: 'video',
      src: '/smash-a-meerkat-preview.mp4',
      label: 'Smash a Meerkat',
    },
  },
  {
    id: 'lyrics-separator',
    title: 'lyricsseperator',
    description: 'Eine MP3 hochladen und den Song in einzelne Lyric-Zeilen aufteilen.',
    detailText: [
      'Ich habe das Projekt in der Schule begonnen. Man lädt eine MP3 hoch und bekommt den Song in einzelnen Lyric-Zeilen zurück.',
      'Dabei habe ich eine externe API in eine Anwendung mit Datei-Upload und Ergebnisanzeige eingebaut.',
    ],
    technologies: [],
    liveUrl: 'https://lyricsseperator-xi.vercel.app/',
    githubUrl: 'https://github.com/im24a-schlegeld/lyricsseperator',
    media: {
      type: 'website',
      src: 'https://lyricsseperator-xi.vercel.app/',
      label: 'lyricsseperator',
    },
  },
  {
    id: 'music-station',
    title: 'MusicStation',
    description: 'Lokale Anwendung und Webseite zum Abspielen eigener Musik.',
    detailText: [
      'Ich wollte einen Musikplayer, den ich selbst benutzen und anpassen kann. Daraus sind eine lokale App und eine öffentliche Webversion entstanden.',
      'Im Video ist meine App zu sehen. Die verlinkte Webseite ist eine öffentliche Version und entspricht ihr nicht in allen Funktionen.',
    ],
    technologies: [],
    liveUrl: 'https://music-station-bay.vercel.app/',
    githubUrl: 'https://github.com/im24a-schlegeld/MusicStation',
    media: {
      type: 'phone',
      videoSrc: '/music-station-preview.mp4',
      label: 'MusicStation',
      videoLabel: 'MusicStation',
    },
  },
];
