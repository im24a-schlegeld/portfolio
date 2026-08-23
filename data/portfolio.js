export const navigationItems = [
  { key: 'home', label: 'Start', href: '/' },
  { key: 'projects', label: 'Projekte', href: '/projekte' },
  { key: 'about', label: 'Freizeit', href: '/freizeit' },
  { key: 'contact', label: 'Kontakt', href: '/kontakt' },
];

export const portfolioContact = {
  email: 'dario.schlegel@example.com',
  emailIsPlaceholder: true,
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
    id: 'smash-a-meerkat',
    title: 'Smash a Meerkat',
    description: 'Kleines Java-Spiel aus einem Gruppenprojekt in der Schule.',
    detailText: [
      'Smash a Meerkat entstand als Gruppenprojekt während des Java-Unterrichts.',
      'Ziel war es, gemeinsam ein kleines funktionierendes Spiel umzusetzen und die zuvor gelernten Java-Grundlagen praktisch anzuwenden.',
      'Neben der Programmierung selbst war bei diesem Projekt auch die Zusammenarbeit wichtig. Der Code musste aufgeteilt, zusammengeführt und so organisiert werden, dass mehrere Personen gleichzeitig daran arbeiten konnten.',
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
      'Der lyricsseperator ist ein Projekt, das ich ursprünglich in der Schule begonnen habe.',
      'Der Benutzer kann eine MP3-Datei eines Songs hochladen. Die Anwendung verarbeitet die Datei und gibt den Inhalt anschliessend in einzelnen Lyric-Zeilen zurück.',
      'Bei diesem Projekt wollte ich ausprobieren, wie ich eine externe API in eine eigene Anwendung einbauen kann. Statt nur einzelne API-Anfragen zu testen, wollte ich daraus eine Anwendung mit einem klaren Ablauf machen.',
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
      'MusicStation entstand aus der Idee, einen eigenen Musikplayer zu bauen, statt nur einen bestehenden zu verwenden.',
      'Das Projekt besteht aus einer lokalen Anwendung zum Abspielen von Musik und einer dazugehörigen Webseite. Für mich war das Projekt vor allem eine Möglichkeit, mich mit der Entwicklung einer eigenen Anwendung auseinanderzusetzen und verschiedene Funktionen selbst umzusetzen.',
      'Ich wollte ausprobieren, wie eine eigene Anwendung aufgebaut werden kann und gleichzeitig etwas entwickeln, das ich selbst benutzen kann.',
    ],
    technologies: [],
    liveUrl: 'https://music-station-omega.vercel.app/',
    githubUrl: 'https://github.com/im24a-schlegeld/MusicStation',
    media: {
      type: 'phone',
      videoSrc: '/music-station-preview.mp4',
      label: 'MusicStation',
      videoLabel: 'MusicStation',
    },
  },
];
