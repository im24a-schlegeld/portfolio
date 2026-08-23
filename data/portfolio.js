export const navigationItems = [
  { key: 'home', label: 'Start', href: '/' },
  { key: 'projects', label: 'Projekte', href: '/projekte' },
  { key: 'about', label: 'Freizeit', href: '/about' },
  { key: 'contact', label: 'Kontakt', href: '/#contact' },
];

export const projects = [
  {
    id: 'smash-a-meerkat',
    number: '01',
    title: 'Smash-A-Meerkat',
    category: 'Browser Game',
    subtitle: 'Backend-zentriertes Reaktionsspiel mit Echtzeit-Kommunikation',
    homeText:
      'Browserbasiertes Reaktionsspiel mit Java/Spring-Boot-Backend und WebSocket-Kommunikation in Echtzeit.',
    homeMeta: 'Game / Backend',
    description:
      'Smash-A-Meerkat ist ein browserbasiertes Reaktionsspiel, das an "Whack-a-Mole" erinnert. Ziel war es, ein Spiel mit bewusst backend-zentrierter Architektur zu entwickeln. Die Spiellogik läuft mit Java und Spring Boot im Backend, während Frontend und Server über WebSockets in Echtzeit kommunizieren.',
    role: 'Backend-Architektur, Spiellogik und WebSocket-Anbindung',
    status: 'Code verfügbar',
    portfolioYear: '2026',
    implementation:
      'Die zentrale Spiellogik liegt im Spring-Boot-Backend. Der Browser übernimmt Darstellung und Eingabe, während Spielzustand und Ereignisse über WebSockets zwischen Client und Server synchronisiert werden.',
    challenge:
      'Spielzustand, Treffer und Timing müssen zwischen Browser und Server konsistent bleiben, ohne dass die Spiellogik nur im Frontend liegt.',
    solution:
      'Eine backend-zentrierte Struktur mit Spring Boot und WebSockets hält die Logik auf dem Server und verteilt Zustandsänderungen in Echtzeit an den Client.',
    result:
      'Ein spielbarer Reaktions-Workflow mit klarer Trennung zwischen serverseitiger Logik und browserseitiger Darstellung.',
    technologies: ['Java', 'Spring Boot', 'WebSocket', 'JavaScript', 'HTML/CSS', 'Maven'],
    githubUrl: 'https://github.com/im24a-schlegeld/SmashAMeerkat',
    media: {
      type: 'video',
      src: '/smash-a-meerkat-preview.mp4',
      label: 'Smash-A-Meerkat Gameplay Vorschau',
    },
  },
  {
    id: 'lyrics-separator',
    number: '02',
    title: 'Lyrics Separator',
    category: 'Web Application',
    subtitle: 'Webanwendung zur Verarbeitung von Audio und Lyrics',
    homeText:
      'Webanwendung zur Verarbeitung von Audio und Lyrics mit Clip-Vorschau, API-Anbindung und Export-Workflow.',
    homeMeta: 'Audio / Web App',
    description:
      'Lyrics Separator verarbeitet Audiodateien zusammen mit Songtexten und erstellt daraus einzelne, abspielbare Audio-Clips passend zu den jeweiligen Lyrics-Abschnitten.',
    role: 'Frontend, Audio-Workflow und API-Integration',
    status: 'Live-Demo',
    portfolioYear: '2026',
    implementation:
      'Entwicklung einer interaktiven Benutzeroberfläche für Audio-Import, Lyrics-Verarbeitung, Clip-Vorschau und Export. Zusätzlich wurde eine API-basierte Backend-Architektur für Audio- und Lyrics-Verarbeitung umgesetzt.',
    challenge:
      'Audio, Lyrics-Timings, Vorschau und Export müssen in einem verständlichen Ablauf zusammengeführt werden.',
    solution:
      'Der Workflow verbindet eine React-Oberfläche mit REST-Endpunkten und einer optionalen FastAPI-/ffmpeg-Verarbeitung für die Audioschritte.',
    result:
      'Lyrics-Abschnitte können als einzelne Audio-Clips verarbeitet, kontrolliert und gesammelt exportiert werden.',
    liveUrl: 'https://lyricsseperator-xi.vercel.app/',
    githubUrl: 'https://github.com/im24a-schlegeld/lyricsseperator',
    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'Web Audio',
      'Python',
      'FastAPI',
      'REST API',
      'ffmpeg',
    ],
    media: {
      type: 'website',
      src: 'https://lyricsseperator-xi.vercel.app/',
      label: 'Lyrics Separator Live Demo Vorschau',
    },
    highlights: [
      {
        title: 'Audio Processing',
        text: 'Audio wird verarbeitet und anhand der Lyrics-Timings in einzelne Clips aufgeteilt.',
      },
      {
        title: 'API Architecture',
        text: 'Frontend und optionale FastAPI-Backend-Architektur kommunizieren über REST-Endpunkte.',
      },
      {
        title: 'Export',
        text: 'Erstellte Audioabschnitte können gesammelt verarbeitet und exportiert werden.',
      },
    ],
  },
  {
    id: 'x-archive',
    number: '03',
    title: 'X-Archive',
    category: 'Mobile App Preview',
    subtitle: 'Mobile-first Website-Vorschau als App-Projekt',
    homeText:
      'Mobile-first Webprojekt mit Live-Vorschau im Smartphone-Kontext und direktem Zugriff auf die veröffentlichte Version.',
    homeMeta: 'Mobile / Frontend',
    description:
      'X-Archive bleibt als eigenständiges Webprojekt im Portfolio erhalten und wird bewusst in einer Smartphone-Ansicht gezeigt, damit der App-Charakter und die mobile Nutzung direkt erkennbar bleiben.',
    role: 'Frontend und mobile Präsentation',
    status: 'Live-Demo',
    portfolioYear: '2026',
    implementation:
      'Das Projekt wird als mobile Anwendung präsentiert. Die Live-Version bleibt direkt erreichbar und die Portfolio-Darstellung nutzt eine Smartphone-Vorschau, ohne den eigentlichen Projektzugang zu ersetzen.',
    challenge:
      'Ein klar mobile-first aufgebautes Projekt soll im Desktop-Portfolio verständlich gezeigt werden, ohne seinen eigentlichen Nutzungskontext zu verlieren.',
    solution:
      'Die Live-Seite wird in einer Smartphone-Darstellung eingebettet und zusätzlich immer über einen direkten externen Link zugänglich gemacht.',
    result:
      'Besucher sehen den mobilen Charakter sofort und können bei Problemen mit der Einbettung direkt zur Live-Version wechseln.',
    technologies: ['Frontend', 'Mobile Preview', 'Deployment'],
    liveUrl: 'https://x-archive-v1.vercel.app/',
    media: {
      type: 'phone',
      src: 'https://x-archive-v1.vercel.app/',
      label: 'X-Archive mobile Website Vorschau',
    },
  },
];

export const siteFeatures = [
  {
    title: 'Portfolio Road System',
    text: 'Die Startseite nutzt die Strasse als Navigationssystem: Inhalte liegen als Stationen links und rechts der Route.',
    meta: 'Diese Website / Frontend',
  },
  {
    title: 'Freizeit-Animationen',
    text: 'Motorrad, Pfadi-Schwert und Walhai bilden einen bewusst persönlichen, experimentellen Bereich ausserhalb der Softwareprojekte.',
    meta: 'Diese Website / Motion',
  },
];
