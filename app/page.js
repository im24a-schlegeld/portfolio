import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from './components/SiteHeader';
import { portfolioContact, projects, siteFeatures } from '../data/portfolio';

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio von Dario Schlegel mit Projekten aus Informatik, Frontend, Interface Design und persönlichen Arbeiten.',
};

const roadStops = [
  {
    align: 'left',
    eyebrow: 'Startpunkt',
    title: 'Dario Schlegel',
    text: 'Portfolio für Informatik, Interface Design, Frontend und Motion. Die Seite führt wie eine Strasse durch Projekte, Experimente und persönliche Bereiche.',
    link: '#projects',
    linkLabel: 'Route ansehen',
  },
  {
    align: 'right',
    eyebrow: 'Profil',
    title: 'Interface & Code',
    text: 'Klare Layouts, saubere Komponenten und Animationen, die Orientierung geben. Der Fokus liegt auf digitalen Oberflächen mit Struktur und eigener visueller Sprache.',
    link: '#profile',
    linkLabel: 'Profil lesen',
  },
  {
    align: 'left',
    eyebrow: 'Abzweigung links',
    title: 'Freizeit',
    text: 'Motorrad, Tauchen und Pfadi haben eine eigene Seite mit persönlichen Animationen und visuellen Details.',
    link: '/about',
    linkLabel: 'Zur Freizeit',
  },
  {
    align: 'right',
    eyebrow: 'Abzweigung rechts',
    title: 'Projekte',
    text: 'Eine eigene Projektseite mit externer Website-Vorschau und Arbeiten, die später weiter ausgebaut werden können.',
    link: '/projekte',
    linkLabel: 'Zu den Projekten',
  },
];

export default function Home() {
  return (
    <div className="roadMain">
      <SiteHeader activeKey="home" roadStripes roadTexture />

      <main className="roadMap">
        <div className="centerRoadLine" aria-hidden="true" />

        <section className="intersectionHero">
          <div className="heroPanel">
            <p className="roadLabel">3-way intersection</p>
            <h1>Choose the route.</h1>
            <p>
              Eine Portfolio-Startseite wie eine dunkle Landstrasse: links und
              rechts liegen die Stationen, in der Mitte führt die Linie weiter.
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
            {projects.map((project) => (
              <Link
                className="projectCard projectCardLink"
                href={`/projekte#${project.id}`}
                key={project.id}
              >
                <span>{project.homeMeta}</span>
                <h3>{project.title}</h3>
                <p>{project.homeText}</p>
                <strong className="projectCardCta">Projekt ansehen -&gt;</strong>
              </Link>
            ))}
          </div>
        </section>

        <section className="siteFeaturesSection" aria-labelledby="site-features-title">
          <div className="siteFeaturesIntro">
            <p className="roadLabel">Über diese Website</p>
            <h2 id="site-features-title">Portfolio-System</h2>
            <p>Diese Elemente gehören zur Portfolio-Website selbst und sind bewusst von den Softwareprojekten getrennt.</p>
          </div>
          <div className="siteFeatureGrid">
            {siteFeatures.map((feature) => (
              <article className="projectCard" key={feature.title}>
                <span>{feature.meta}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contactSection" aria-labelledby="contact-title">
          <div className="contactCard">
            <p className="roadLabel">Kontakt</p>
            <h2 id="contact-title">Kontakt aufnehmen</h2>
            <p>Für Fragen zu Projekten, Zusammenarbeit oder Code erreichst du mich direkt über diese Wege.</p>
            <div className="contactActions">
              <a className="roadButton" href={`mailto:${portfolioContact.email}`}>
                E-Mail
              </a>
              <a className="contactLink" href={portfolioContact.githubUrl} target="_blank" rel="noreferrer">
                GitHub -&gt;
              </a>
            </div>
            {portfolioContact.emailIsPlaceholder && (
              <p className="placeholderNotice">
                E-Mail-Platzhalter: {portfolioContact.email} - vor Veröffentlichung durch deine echte Adresse ersetzen.
              </p>
            )}
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

        .roadMap {
          position: relative;
          z-index: 1;
          width: 100%;
          margin: 0 auto;
          padding: 0 max(20px, calc((100% - 1180px) / 2)) 120px;
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

        .projectCardLink {
          display: block;
          transition: transform 0.2s ease, border-color 0.2s ease, filter 0.2s ease;
        }

        .projectCardLink:hover,
        .projectCardLink:focus-visible {
          transform: translateY(-3px);
          border-color: rgba(242, 201, 76, 0.5);
          filter: brightness(1.05);
          outline: none;
        }

        .projectCardCta {
          display: inline-block;
          margin-top: 20px;
          color: var(--paint);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .siteFeaturesSection,
        .contactSection {
          position: relative;
          padding: 90px 0 20px;
        }

        .siteFeaturesIntro,
        .contactCard {
          max-width: 780px;
          margin: 0 auto;
        }

        .siteFeaturesIntro {
          text-align: center;
        }

        .siteFeaturesIntro h2,
        .contactCard h2 {
          margin: 0;
          font-size: clamp(38px, 6vw, 72px);
          line-height: 0.95;
          letter-spacing: -0.05em;
          text-transform: uppercase;
        }

        .siteFeaturesIntro > p:last-child,
        .contactCard > p {
          color: #c7c0b3;
          font-size: 17px;
          line-height: 1.6;
        }

        .siteFeatureGrid {
          width: min(920px, 100%);
          margin: 34px auto 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .contactCard {
          padding: clamp(28px, 5vw, 48px);
          border: 1px solid rgba(245, 242, 233, 0.13);
          background: rgba(10, 10, 10, 0.84);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.09);
        }

        .contactActions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 24px;
        }

        .contactActions .roadButton {
          margin-top: 0;
        }

        .contactLink {
          color: var(--paint);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .placeholderNotice {
          margin-top: 18px !important;
          color: #8d8678 !important;
          font-size: 12px !important;
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

          .siteFeaturesSection,
          .contactSection {
            padding-left: 82px;
          }

          .siteFeatureGrid {
            grid-template-columns: 1fr;
          }

          .roadFooter {
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding-left: 174px;
          }
        }

        @media (max-width: 520px) {
          .roadFooter {
            width: min(100% - 28px, 420px);
          }

          .heroPanel {
            margin-left: 58px;
            padding: 24px;
          }

          .routeStop,
          .sectionIntro,
          .projectGrid,
          .siteFeaturesSection,
          .contactSection {
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
