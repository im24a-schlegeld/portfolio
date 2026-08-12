import Link from 'next/link';

const featuredProject = {
  number: '01',
  title: 'Lyrics Separator',
  category: 'Web Application',
  subtitle: 'Webanwendung zur Verarbeitung von Audio und Lyrics',
  description:
    'Lyrics Separator verarbeitet Audiodateien zusammen mit Songtexten und erstellt daraus einzelne, abspielbare Audio-Clips passend zu den jeweiligen Lyrics-Abschnitten.',
  implementation:
    'Entwicklung einer interaktiven Benutzeroberflaeche fuer Audio-Import, Lyrics-Verarbeitung, Clip-Vorschau und Export. Zusaetzlich wurde eine API-basierte Backend-Architektur fuer Audio- und Lyrics-Verarbeitung umgesetzt.',
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
  highlights: [
    {
      title: 'Audio Processing',
      text: 'Audio wird verarbeitet und anhand der Lyrics-Timings in einzelne Clips aufgeteilt.',
    },
    {
      title: 'API Architecture',
      text: 'Frontend und optionale FastAPI-Backend-Architektur kommunizieren ueber REST-Endpunkte.',
    },
    {
      title: 'Export',
      text: 'Erstellte Audioabschnitte koennen gesammelt verarbeitet und exportiert werden.',
    },
  ],
};

export default function Projekte() {
  return (
    <main className="projectsPage">
      <section className="projectsIntro" aria-labelledby="projects-title">
        <Link className="backLink" href="/">
          Zurueck zur Startseite
        </Link>
        <p className="eyebrow">Portfolio</p>
        <h1 id="projects-title">Projekte</h1>
        <p className="introText">
          Eine Auswahl meiner Projekte aus Webentwicklung, Softwareentwicklung und Teamarbeit.
        </p>
      </section>

      <section className="featuredProject" aria-labelledby="lyrics-title">
        <div className="projectPreview" aria-label="Lyrics Separator Live-Vorschau">
          <div className="browserFrame">
            <div className="browserTop" aria-hidden="true">
              <span />
              <span />
              <span />
              <p>lyricsseperator-xi.vercel.app</p>
            </div>
            <div className="previewScreen">
              <iframe
                src={featuredProject.liveUrl}
                title="Lyrics Separator Live Demo Vorschau"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <article className="projectInfo">
          <div className="projectMeta">
            <span>{featuredProject.number}</span>
            <span>{featuredProject.category}</span>
          </div>

          <p className="projectIndex">{featuredProject.number} - Featured Project</p>
          <h2 id="lyrics-title">{featuredProject.title}</h2>
          <p className="subtitle">{featuredProject.subtitle}</p>
          <p className="description">{featuredProject.description}</p>

          <div className="actions" aria-label="Projektaktionen">
            <a className="primaryAction" href={featuredProject.liveUrl} target="_blank" rel="noreferrer">
              Live Demo <span aria-hidden="true">-&gt;</span>
              <span className="srOnly"> in neuem Tab oeffnen</span>
            </a>
            <a className="secondaryAction" href={featuredProject.githubUrl} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">-&gt;</span>
              <span className="srOnly"> in neuem Tab oeffnen</span>
            </a>
            <a className="ghostAction" href="#lyrics-separator-details">
              Details
            </a>
          </div>

          <div className="techList" aria-label="Tech Stack">
            {featuredProject.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <section className="implementation" aria-labelledby="implementation-title">
            <h3 id="implementation-title">Meine Umsetzung</h3>
            <p>{featuredProject.implementation}</p>
          </section>
        </article>
      </section>

      <section
        id="lyrics-separator-details"
        className="technicalHighlights"
        aria-labelledby="highlights-title"
      >
        <p className="eyebrow">Technische Highlights</p>
        <h2 id="highlights-title">Audio, API und Export in einer klaren Projektstruktur.</h2>
        <div className="highlightGrid">
          {featuredProject.highlights.map((highlight) => (
            <article className="highlightCard" key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.text}</p>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        .projectsPage {
          min-height: 100svh;
          overflow-x: clip;
          color: #f7f2e8;
          font-family: Bahnschrift, 'Arial Narrow', 'Segoe UI', sans-serif;
          background:
            radial-gradient(circle at 72% 8%, rgba(242, 201, 76, 0.13), transparent 24rem),
            radial-gradient(circle at 7% 34%, rgba(255, 255, 255, 0.055), transparent 18rem),
            linear-gradient(135deg, #070707 0%, #151411 48%, #050505 100%);
        }

        .projectsPage::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.18;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
          background-size: 96px 96px;
          mask-image: radial-gradient(circle at 50% 20%, black, transparent 72%);
        }

        .projectsIntro,
        .featuredProject,
        .technicalHighlights {
          position: relative;
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .projectsIntro {
          padding: clamp(34px, 7vw, 84px) 0 clamp(28px, 4vw, 56px);
        }

        .backLink {
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          margin-bottom: clamp(32px, 5vw, 70px);
          padding: 0 18px;
          border: 1px solid rgba(242, 201, 76, 0.38);
          border-radius: 999px;
          color: #f2c94c;
          background: rgba(0, 0, 0, 0.2);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-decoration: none;
          text-transform: uppercase;
          transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
        }

        .backLink:hover,
        .backLink:focus-visible {
          transform: translateY(-2px);
          border-color: #f2c94c;
          background: rgba(242, 201, 76, 0.1);
        }

        .eyebrow {
          margin: 0 0 14px;
          color: #f2c94c;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .projectsIntro h1 {
          max-width: 840px;
          margin: 0;
          font-size: clamp(64px, 12vw, 150px);
          line-height: 0.78;
          letter-spacing: -0.08em;
          text-transform: uppercase;
        }

        .introText {
          max-width: 680px;
          margin: 28px 0 0;
          color: #cfc7ba;
          font-size: clamp(18px, 2vw, 23px);
          line-height: 1.52;
        }

        .featuredProject {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.82fr);
          align-items: center;
          gap: clamp(34px, 6vw, 86px);
          padding: clamp(34px, 6vw, 72px) 0 clamp(58px, 8vw, 104px);
        }

        .projectPreview {
          min-width: 0;
          animation: projectReveal 680ms ease both;
        }

        .browserFrame {
          overflow: hidden;
          border: 1px solid rgba(242, 201, 76, 0.25);
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(242, 201, 76, 0.14), transparent 22%),
            rgba(8, 8, 8, 0.9);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 32px 80px rgba(0, 0, 0, 0.42);
          transition: transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease;
        }

        .browserFrame:hover,
        .browserFrame:focus-within {
          transform: translateY(-4px);
          border-color: rgba(242, 201, 76, 0.55);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.16),
            0 40px 90px rgba(0, 0, 0, 0.56);
        }

        .browserTop {
          display: grid;
          grid-template-columns: 12px 12px 12px minmax(0, 1fr);
          align-items: center;
          gap: 9px;
          min-height: 48px;
          padding: 0 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.46);
        }

        .browserTop span {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(242, 201, 76, 0.84);
        }

        .browserTop span:nth-child(2) {
          background: rgba(207, 199, 186, 0.58);
        }

        .browserTop span:nth-child(3) {
          background: rgba(255, 255, 255, 0.34);
        }

        .browserTop p {
          min-width: 0;
          margin: 0 0 0 8px;
          overflow: hidden;
          color: rgba(247, 242, 232, 0.72);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-overflow: ellipsis;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .previewScreen {
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #050505;
        }

        .previewScreen iframe {
          width: 100%;
          height: 100%;
          display: block;
          border: 0;
          background: #050505;
        }

        .projectInfo {
          min-width: 0;
          padding: clamp(24px, 4vw, 42px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.018)),
            rgba(10, 10, 10, 0.74);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
          animation: projectReveal 680ms 120ms ease both;
        }

        .projectMeta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: clamp(34px, 5vw, 66px);
          color: rgba(247, 242, 232, 0.54);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .projectMeta span:first-child {
          color: #f2c94c;
          font-size: clamp(48px, 8vw, 86px);
          line-height: 0.8;
          letter-spacing: -0.08em;
        }

        .projectIndex {
          margin: 0 0 12px;
          color: #f2c94c;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .projectInfo h2 {
          margin: 0;
          font-size: clamp(42px, 6vw, 82px);
          line-height: 0.9;
          letter-spacing: -0.075em;
          text-transform: uppercase;
        }

        .subtitle {
          margin: 18px 0 0;
          color: #f2c94c;
          font-size: clamp(17px, 1.8vw, 21px);
          font-weight: 800;
          line-height: 1.35;
        }

        .description,
        .implementation p,
        .highlightCard p {
          color: #cfc7ba;
          font-size: 16px;
          line-height: 1.62;
        }

        .description {
          margin: 20px 0 0;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .primaryAction,
        .secondaryAction,
        .ghostAction {
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 18px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-decoration: none;
          text-transform: uppercase;
          transition: transform 180ms ease, border-color 180ms ease, background 180ms ease, color 180ms ease;
        }

        .primaryAction {
          color: #16130a;
          background: #f2c94c;
          border: 1px solid #f2c94c;
        }

        .secondaryAction,
        .ghostAction {
          color: #f7f2e8;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .primaryAction:hover,
        .primaryAction:focus-visible,
        .secondaryAction:hover,
        .secondaryAction:focus-visible,
        .ghostAction:hover,
        .ghostAction:focus-visible {
          transform: translateY(-2px);
          border-color: #f2c94c;
        }

        .secondaryAction:hover,
        .secondaryAction:focus-visible,
        .ghostAction:hover,
        .ghostAction:focus-visible {
          color: #f2c94c;
          background: rgba(242, 201, 76, 0.09);
        }

        .techList {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
        }

        .techList span {
          min-height: 34px;
          display: inline-flex;
          align-items: center;
          padding: 0 12px;
          border: 1px solid rgba(242, 201, 76, 0.24);
          border-radius: 999px;
          color: rgba(247, 242, 232, 0.84);
          background: rgba(0, 0, 0, 0.24);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .implementation {
          margin-top: 32px;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .implementation h3,
        .highlightCard h3 {
          margin: 0 0 10px;
          color: #f7f2e8;
          font-size: 18px;
          line-height: 1.2;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .implementation p,
        .highlightCard p {
          margin: 0;
        }

        .technicalHighlights {
          padding: 0 0 clamp(72px, 10vw, 132px);
        }

        .technicalHighlights h2 {
          max-width: 820px;
          margin: 0;
          font-size: clamp(34px, 5vw, 74px);
          line-height: 0.95;
          letter-spacing: -0.07em;
          text-transform: uppercase;
        }

        .highlightGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: clamp(28px, 4vw, 44px);
        }

        .highlightCard {
          min-height: 190px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          background:
            linear-gradient(145deg, rgba(242, 201, 76, 0.07), transparent 38%),
            rgba(9, 9, 9, 0.72);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.07);
          transition: transform 180ms ease, border-color 180ms ease;
        }

        .highlightCard:hover {
          transform: translateY(-3px);
          border-color: rgba(242, 201, 76, 0.35);
        }

        .srOnly {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        @keyframes projectReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 980px) {
          .featuredProject {
            grid-template-columns: 1fr;
          }

          .projectPreview {
            order: 1;
          }

          .projectInfo {
            order: 2;
          }

          .highlightGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .projectsIntro,
          .featuredProject,
          .technicalHighlights {
            width: min(100% - 28px, 1180px);
          }

          .projectsIntro {
            padding-top: 26px;
          }

          .browserFrame,
          .projectInfo,
          .highlightCard {
            border-radius: 20px;
          }

          .browserTop {
            min-height: 42px;
            padding: 0 12px;
          }

          .previewScreen {
            aspect-ratio: 4 / 3;
          }

          .actions a {
            flex: 1 1 100%;
          }

          .techList span {
            min-height: 38px;
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .projectPreview,
          .projectInfo,
          .browserFrame,
          .highlightCard,
          .backLink,
          .primaryAction,
          .secondaryAction,
          .ghostAction {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
