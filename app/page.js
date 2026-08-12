import Image from 'next/image';
import Link from 'next/link';

const roadStops = [
  {
    align: 'left',
    eyebrow: 'Startpunkt',
    title: 'Dario Schlegel',
    text: 'Portfolio fuer Informatik, Interface Design, Frontend und Motion. Die Seite fuehrt wie eine Strasse durch Projekte, Experimente und persoenliche Bereiche.',
    link: '#projects',
    linkLabel: 'Route ansehen',
  },
  {
    align: 'right',
    eyebrow: 'Profil',
    title: 'Interface & Code',
    text: 'Klare Layouts, saubere Komponenten und Animationen, die Orientierung geben. Der Fokus liegt auf digitalen Oberflaechen mit Struktur und eigener visueller Sprache.',
    link: '#profile',
    linkLabel: 'Profil lesen',
  },
  {
    align: 'left',
    eyebrow: 'Abzweigung links',
    title: 'Freizeit',
    text: 'Motorrad, Tauchen und Pfadi haben eine eigene Seite mit persoenlichen Animationen und visuellen Details.',
    link: '/about',
    linkLabel: 'Zur Freizeit',
  },
  {
    align: 'right',
    eyebrow: 'Abzweigung rechts',
    title: 'Projekte',
    text: 'Eine eigene Projektseite mit externer Website-Vorschau und Arbeiten, die spaeter weiter ausgebaut werden koennen.',
    link: '/projekte',
    linkLabel: 'Zu den Projekten',
  },
];

const projectCards = [
  {
    title: 'Portfolio Road System',
    text: 'Eine Startseite als asphaltierte Route: Header-Kreuzung, Mittelstreifen und Inhalte als Wegpunkte links und rechts der Strasse.',
    meta: 'Design / Frontend',
  },
  {
    title: 'Freizeit Animationen',
    text: 'Eine eigene Seite mit Motorrad-Bewegung, Pfadi-Schwert und Walhai-Video als persoenliche visuelle Kapitel.',
    meta: 'Animation / Story',
  },
  {
    title: 'Smash-A-Meerkat',
    text: 'Ein browserbasiertes Reaktionsspiel mit Java/Spring-Boot-Backend und WebSocket-Kommunikation in Echtzeit.',
    meta: 'Game / Backend',
  },
  {
    title: 'X-Archive Preview',
    text: 'Eine externe Website-Vorschau, eingebettet in ein iPhone-Mockup und direkt mit dem Live-Projekt verlinkt.',
    meta: 'Project / Preview',
  },
];

export default function Home() {
  return (
    <div className="roadMain">
      <header className="roadHeader">
        <div className="headerInner">
          <Link className="brand" href="/">
            Dario Schlegel
          </Link>

          <nav className="nav" aria-label="Hauptnavigation">
            <a href="#profile">Profil</a>
            <a href="#projects">Projekte</a>
            <Link href="/about">Freizeit</Link>
            <Link href="/projekte">Projekte</Link>
          </nav>
        </div>
      </header>

      <main className="roadMap">
        <div className="centerRoadLine" aria-hidden="true" />

        <section className="intersectionHero">
          <div className="heroPanel">
            <p className="roadLabel">3-way intersection</p>
            <h1>Choose the route.</h1>
            <p>
              Eine Portfolio-Startseite wie eine dunkle Landstrasse: links und
              rechts liegen die Stationen, in der Mitte fuehrt die Linie weiter.
            </p>
          </div>
        </section>

        <section id="profile" className="routeStops" aria-label="Portfolio Route">
          {roadStops.map((stop) => (
            <article className={`routeStop ${stop.align}`} key={stop.title}>
              <span className="roadPin" aria-hidden="true" />
              <div className="stopCard">
                <p className="roadLabel">{stop.eyebrow}</p>
                <h2>{stop.title}</h2>
                <p>{stop.text}</p>
                <Link className="roadButton" href={stop.link}>
                  {stop.linkLabel}
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section id="projects" className="projectsSection">
          <div className="sectionIntro">
            <p className="roadLabel">Roadside projects</p>
            <h2>Projekte entlang der Strecke</h2>
            <p>
              Jede Karte sitzt neben der Mittellinie wie ein Wegschild: kurz,
              klar und direkt erreichbar.
            </p>
          </div>

          <div className="projectGrid">
            {projectCards.map((project) => (
              <article className="projectCard" key={project.title}>
                <span>{project.meta}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>

      </main>

      <div className="stopSignWrap" aria-hidden="true">
        <div className="stopSignMarker">
          <Image
            className="stopSignImage"
            src="/Stop_sign.png"
            alt=""
            width={608}
            height={608}
          />
          <div className="stopSignPole" />
        </div>
      </div>

      <footer className="roadFooter">
        <span>Dario Schlegel</span>
        <span>Portfolio route system</span>
      </footer>

      <style>{`
        .roadMain {
          --asphalt: #171717;
          --asphalt-dark: #070707;
          --asphalt-light: #242424;
          --paint: #f2c94c;
          --paint-soft: rgba(242, 201, 76, 0.24);
          --white: #f5f2e9;
          --muted: #aaa395;
          --card: rgba(16, 16, 16, 0.82);
          --lane-clear: 68px;
          position: relative;
          width: 100%;
          isolation: isolate;
          min-height: 100vh;
          margin: 0;
          padding-top: 0;
          overflow-x: clip;
          color: var(--white);
          font-family: Bahnschrift, 'Arial Narrow', 'Segoe UI', sans-serif;
          background:
            radial-gradient(ellipse at 18% 9%, rgba(255, 255, 255, 0.052), transparent 15rem),
            radial-gradient(ellipse at 84% 19%, rgba(255, 255, 255, 0.026), transparent 20rem),
            radial-gradient(ellipse at 28% 47%, rgba(0, 0, 0, 0.38), transparent 24rem),
            radial-gradient(ellipse at 72% 72%, rgba(255, 255, 255, 0.031), transparent 18rem),
            radial-gradient(ellipse at 48% 94%, rgba(0, 0, 0, 0.46), transparent 26rem),
            linear-gradient(180deg, #1d1d1d 0%, #101010 48%, #070707 100%);
        }

        .roadMain,
        .roadMain * {
          box-sizing: border-box;
        }

        .roadMain::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(circle, rgba(255, 255, 255, 0.22) 0 0.55px, transparent 0.9px),
            radial-gradient(circle, rgba(255, 255, 255, 0.13) 0 0.75px, transparent 1.15px),
            radial-gradient(circle, rgba(0, 0, 0, 0.82) 0 1px, transparent 1.45px),
            radial-gradient(circle, rgba(255, 255, 255, 0.08) 0 1px, transparent 1.35px),
            radial-gradient(ellipse at 22% 18%, rgba(255, 255, 255, 0.07), transparent 15rem),
            radial-gradient(ellipse at 66% 39%, rgba(0, 0, 0, 0.44), transparent 19rem),
            radial-gradient(ellipse at 41% 78%, rgba(255, 255, 255, 0.045), transparent 17rem),
            repeating-conic-gradient(from 18deg, rgba(255, 255, 255, 0.032) 0 7deg, rgba(0, 0, 0, 0.28) 7deg 18deg);
          background-position: 0 0, 2px 3px, 4px 1px, 7px 6px, 0 0, 0 0, 0 0, 0 0;
          background-size: 4px 4px, 7px 7px, 5px 5px, 11px 11px, 100% 900px, 100% 760px, 100% 840px, 19px 19px;
          opacity: 0.76;
          filter: contrast(1.62) brightness(0.78);
        }

        .roadMain::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 12% 28%, rgba(0, 0, 0, 0.46), transparent 24rem),
            radial-gradient(ellipse at 82% 52%, rgba(255, 255, 255, 0.034), transparent 20rem),
            radial-gradient(ellipse at 50% 84%, rgba(0, 0, 0, 0.5), transparent 28rem),
            radial-gradient(circle at 50% 50%, transparent 0 34%, rgba(0, 0, 0, 0.42) 82%),
            linear-gradient(90deg, rgba(0, 0, 0, 0.24), transparent 22% 78%, rgba(0, 0, 0, 0.24));
          opacity: 0.88;
        }

        .roadMain a {
          color: inherit;
          text-decoration: none;
        }

        .roadHeader {
          position: relative;
          z-index: 20;
          background: transparent;
        }

        .headerInner {
          width: min(1180px, calc(100% - 40px));
          min-height: 86px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand {
          font-size: clamp(19px, 2vw, 30px);
          font-weight: 900;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .nav a {
          min-height: 36px;
          display: inline-flex;
          align-items: center;
          padding: 0 13px;
          border: 0;
          border-radius: 999px;
          color: var(--muted);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: rgba(0, 0, 0, 0.2);
          transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
        }

        .nav a:hover,
        .nav a:focus-visible {
          color: var(--white);
          background: rgba(242, 201, 76, 0.18);
          transform: translateY(-2px);
          outline: none;
        }

        .roadMap {
          position: relative;
          z-index: 1;
          width: 100%;
          margin: 0 auto;
          padding: 0 max(20px, calc((100% - 1180px) / 2)) 120px;
        }

        .roadMap::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
          width: 100%;
          height: 16px;
          pointer-events: none;
          background:
            repeating-linear-gradient(
              90deg,
              transparent 0 32px,
              var(--paint) 32px 82px,
              transparent 82px 118px
            );
          background-size: 118px 100%;
          background-position: calc(50% - 57px) top;
        }

        .centerRoadLine {
          position: absolute;
          top: 0;
          bottom: -470px;
          left: 50%;
          width: 18px;
          transform: translateX(-50%);
          background:
            repeating-linear-gradient(
              180deg,
              transparent 0 28px,
              var(--paint) 28px 82px,
              transparent 82px 122px
            );
          opacity: 0.96;
        }

        .intersectionHero {
          position: relative;
          min-height: 560px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 150px minmax(0, 1fr);
          align-items: center;
          padding: 156px 0 90px;
        }

        .heroPanel {
          position: relative;
          z-index: 2;
          grid-column: 1;
          justify-self: end;
          width: min(500px, 100%);
          margin-right: 56px;
          padding: clamp(28px, 5vw, 56px);
          text-align: left;
          border: 1px solid rgba(245, 242, 233, 0.14);
          border-radius: 34px;
          background:
            linear-gradient(180deg, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.82)),
            repeating-linear-gradient(12deg, rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 8px);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.12),
            0 40px 100px rgba(0, 0, 0, 0.5);
        }

        .roadLabel {
          margin: 0 0 14px;
          color: var(--paint);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .heroPanel h1 {
          margin: 0;
          font-size: clamp(54px, 10vw, 122px);
          line-height: 0.82;
          letter-spacing: -0.08em;
          text-transform: uppercase;
        }

        .heroPanel p:last-child {
          max-width: 560px;
          margin: 26px 0 0;
          color: #d0cabd;
          font-size: clamp(17px, 1.8vw, 21px);
          line-height: 1.55;
        }

        .routeStops {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 96px;
          padding: 30px 0 110px;
        }

        .routeStop {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 120px minmax(0, 1fr);
          align-items: center;
        }

        .routeStop.left .stopCard {
          grid-column: 1;
        }

        .routeStop.right .stopCard {
          grid-column: 3;
        }

        .roadPin {
          position: absolute;
          top: 50%;
          width: 28px;
          height: 28px;
          transform: translate(-50%, -50%) rotate(45deg);
          border: 3px solid var(--paint);
          background: #171717;
          box-shadow: 0 0 0 9px rgba(242, 201, 76, 0.08), 0 0 20px var(--paint-soft);
        }

        .routeStop.left .roadPin {
          left: calc(50% - var(--lane-clear));
        }

        .routeStop.right .roadPin {
          left: calc(50% + var(--lane-clear));
        }

        .routeStop::before {
          content: '';
          position: absolute;
          top: 50%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(242, 201, 76, 0.52));
        }

        .routeStop.left::before {
          left: calc(50% - 240px);
          right: calc(50% + 88px);
        }

        .routeStop.right::before {
          left: calc(50% + 88px);
          right: calc(50% - 240px);
          background: linear-gradient(90deg, rgba(242, 201, 76, 0.52), transparent);
        }

        .stopCard,
        .projectCard {
          position: relative;
          padding: 28px;
          border: 1px solid rgba(245, 242, 233, 0.13);
          border-radius: 26px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.045), transparent),
            rgba(10, 10, 10, 0.84);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.09),
            0 26px 70px rgba(0, 0, 0, 0.38);
        }

        .stopCard::before,
        .projectCard::before {
          content: '';
          position: absolute;
          inset: 12px;
          border: 1px dashed rgba(242, 201, 76, 0.18);
          border-radius: 18px;
          pointer-events: none;
        }

        .stopCard h2,
        .sectionIntro h2,
        .projectCard h3 {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: -0.04em;
        }

        .stopCard h2 {
          font-size: clamp(30px, 4.6vw, 56px);
          line-height: 0.95;
        }

        .stopCard p {
          margin: 18px 0 0;
          color: #c7c0b3;
          font-size: 17px;
          line-height: 1.62;
        }

        .roadButton {
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          margin-top: 24px;
          padding: 0 18px;
          border: 1px solid rgba(242, 201, 76, 0.5);
          border-radius: 999px;
          color: #171717;
          background: var(--paint);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          transition: transform 0.2s ease, filter 0.2s ease;
        }

        .roadButton:hover,
        .roadButton:focus-visible {
          transform: translateY(-2px);
          filter: brightness(1.08);
          outline: none;
        }

        .projectsSection {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 150px minmax(0, 1fr);
          align-items: start;
          gap: 0;
          padding: 90px 0 20px;
        }

        .stopSignWrap {
          position: relative;
          z-index: 3;
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto -170px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 40px 0 0;
        }

        .stopSignMarker {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }

        .stopSignImage {
          display: block;
          width: 150px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 14px 22px rgba(0, 0, 0, 0.32));
        }

        .stopSignPole {
          width: 10px;
          height: 260px;
          background: linear-gradient(180deg, #8a8a8a 0%, #5f5f5f 50%, #747474 100%);
          box-shadow:
            inset 2px 0 0 rgba(255, 255, 255, 0.22),
            inset -2px 0 0 rgba(0, 0, 0, 0.18);
        }

        .sectionIntro {
          grid-column: 1;
          justify-self: end;
          width: min(500px, 100%);
          margin: 0 56px 0 0;
          text-align: right;
        }

        .sectionIntro h2 {
          font-size: clamp(38px, 6vw, 78px);
          line-height: 0.92;
        }

        .sectionIntro p:last-child {
          max-width: 560px;
          margin: 20px 0 0 auto;
          color: #c7c0b3;
          font-size: 18px;
          line-height: 1.55;
        }

        .projectGrid {
          grid-column: 3;
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }

        .projectCard span {
          color: var(--paint);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .projectCard h3 {
          margin-top: 28px;
          font-size: clamp(22px, 2.5vw, 32px);
          line-height: 1;
        }

        .projectCard p {
          margin: 16px 0 0;
          color: #c7c0b3;
          font-size: 16px;
          line-height: 1.55;
        }

        .roadFooter {
          position: relative;
          z-index: 1;
          width: min(1180px, calc(100% - 40px));
          min-height: 90px;
          margin: 0 auto;
          padding-left: 190px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          color: #8d8678;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        @media (max-width: 860px) {
          .headerInner {
            min-height: 78px;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            padding: 16px 0;
          }

          .nav {
            justify-content: flex-start;
          }

          .roadMap {
            width: 100%;
            padding-inline: 14px;
          }

          .centerRoadLine {
            left: 24px;
          }

          .intersectionHero {
            min-height: 500px;
            display: block;
            padding: 132px 0 72px;
          }

          .heroPanel {
            margin-left: 54px;
            margin-right: 0;
            text-align: left;
          }

          .heroPanel p:last-child {
            margin-left: 0;
          }

          .routeStops {
            gap: 58px;
          }

          .routeStop {
            display: block;
            padding-left: 82px;
          }

          .roadPin {
            left: 54px !important;
            width: 22px;
            height: 22px;
          }

          .routeStop::before {
            left: 34px !important;
            right: auto !important;
            width: 42px;
            background: linear-gradient(90deg, rgba(242, 201, 76, 0.52), transparent) !important;
          }

          .projectsSection {
            display: block;
            padding-top: 70px;
          }

          .sectionIntro {
            width: auto;
            margin: 0 0 34px 82px;
            text-align: left;
          }

          .sectionIntro p:last-child {
            margin-left: 0;
          }

          .projectGrid {
            grid-template-columns: 1fr;
            margin-left: 82px;
          }

          .roadFooter {
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding-left: 174px;
          }
        }

        @media (max-width: 520px) {
          .headerInner,
          .roadFooter {
            width: min(100% - 28px, 420px);
          }

          .nav a {
            min-height: 32px;
            padding: 0 10px;
            font-size: 10px;
          }

          .heroPanel {
            margin-left: 58px;
            padding: 24px;
            border-radius: 24px;
          }

          .routeStop,
          .sectionIntro,
          .projectGrid {
            margin-left: 0;
            padding-left: 70px;
          }

          .heroPanel h1 {
            font-size: clamp(44px, 17vw, 72px);
          }

          .stopCard,
          .projectCard {
            padding: 24px;
          }

          .stopSignWrap {
            width: min(100% - 28px, 420px);
            margin-bottom: -150px;
            padding: 28px 0 0;
          }

          .stopSignImage {
            width: 112px;
          }

          .stopSignPole {
            width: 8px;
            height: 210px;
          }

          .centerRoadLine {
            bottom: -380px;
          }

          .roadFooter {
            padding-left: 128px;
          }
        }
      `}</style>
    </div>
  );
}
