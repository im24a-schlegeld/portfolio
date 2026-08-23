import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from './components/SiteHeader';
import { projects, technologyList } from '../data/portfolio';

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio von Dario Schlegel mit Projekten aus Informatik, Frontend, Interface Design und persönlichen Arbeiten.',
};

export default function Home() {
  return (
    <div className="roadMain">
      <SiteHeader activeKey="home" roadStripes roadTexture />

      <main className="roadMap">
        <div className="centerRoadLine" aria-hidden="true" />

        <section className="intersectionHero">
          <div className="heroPanel">
            <span className="heroKicker">Portfolio / Informatik</span>
            <h1><span>Dario</span><span>Schlegel</span></h1>
            <div className="heroRule" aria-hidden="true" />
            <p>Ich besuche die Informatik-Mittelschule und entwickle neben dem Unterricht eigene Projekte.</p>
          </div>
          <div className="heroMeta" aria-label="Portfolio-Schwerpunkte">
            <span>Applikationsentwicklung</span>
            <span>Zürich / Schweiz</span>
            <span>Praktikum 2027 — 2028</span>
          </div>
        </section>

        <section id="projects" className="projectsSection" aria-labelledby="projects-title">
          <div className="sectionIntro">
            <span className="sectionIndex">01 / Ausgewählte Projekte</span>
            <h2 id="projects-title">Projekte</h2>
            <p>Arbeiten aus der Schule und aus eigener Entwicklung.</p>
          </div>

          <div className="projectList">
            {projects.map((project, index) => (
              <Link
                className="projectItem"
                href={`/projekte#${project.id}`}
                key={project.id}
              >
                <div className="projectItemTop">
                  <span className="projectItemNumber">{String(index + 1).padStart(2, '0')}</span>
                  <span className="projectItemCategory">
                    {project.id === 'smash-a-meerkat' ? 'Java / Game' : project.id === 'lyrics-separator' ? 'Web / API' : 'App / Web'}
                  </span>
                </div>
                <div className="projectItemMain">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <strong className="projectItemCta">Projekt ansehen <span aria-hidden="true">→</span></strong>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="about" className="contentSection aboutSection" aria-labelledby="about-title">
          <div className="editorialBlock">
            <h2 id="about-title" className="sectionIndex">02 / Über mich</h2>
            <div className="aboutLead">Ich besuche die Informatik-Mittelschule und entwickle nebenbei eigene Projekte.</div>
            <div className="editorialRule" aria-hidden="true" />
            <p>Mich interessiert besonders, wie aus einer Idee eine funktionierende Anwendung wird. Dabei probiere ich verschiedene Technologien aus und entwickle jedes Projekt Schritt für Schritt weiter.</p>
          </div>
        </section>

        <section id="education" className="contentSection educationSection" aria-labelledby="education-title">
          <div className="timelineBlock">
            <h2 id="education-title" className="sectionIndex">03 / Ausbildung</h2>
            <div className="timelineScale" aria-label="Ausbildungszeitraum 2024 bis 2027">
              <strong>2024</strong>
              <span className="timelineLine" aria-hidden="true" />
              <strong>2027</strong>
            </div>
            <div className="timelineDetails">
              <h3>Informatik-Mittelschule</h3>
              <p className="contentEmphasis">Kantonsschule Hottingen</p>
              <p>An der IMS beschäftige ich mich mit Programmierung, Webentwicklung, Datenbanken, Cloud-Technologien und Applikationssicherheit.</p>
              <p className="contentDate">Praktikumsjahr: Sommer 2027 — Sommer 2028</p>
            </div>
          </div>
        </section>

        <section id="technologies" className="contentSection technologySection" aria-labelledby="technologies-title">
          <div className="directoryBlock">
            <h2 id="technologies-title" className="sectionIndex">04 / Technologien</h2>
            <p>Mit diesen Technologien habe ich im Unterricht oder in eigenen Projekten bereits gearbeitet.</p>
            <ul className="technologyDirectory">
              {technologyList.map((technology, index) => <li key={technology}><span>{String(index + 1).padStart(2, '0')}</span>{technology}</li>)}
            </ul>
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

      <style>{`
        .roadMain {
          --asphalt: #171717;
          --asphalt-dark: #070707;
          --asphalt-light: #242424;
          --paint: #f2c94c;
          --paint-soft: rgba(242, 201, 76, 0.24);
          --paint-muted: rgba(242, 201, 76, 0.68);
          --paint-ghost: rgba(242, 201, 76, 0.14);
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
          text-transform: none;
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
          text-transform: none;
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
          margin-top: 0;
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

        .contentSection {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 150px minmax(0, 1fr);
          padding: 90px 0 20px;
        }

        .contentSectionLeft .contentCard {
          grid-column: 1;
        }

        .contentSectionRight .contentCard {
          grid-column: 3;
        }

        .contentCard {
          width: min(560px, 100%);
          padding: clamp(28px, 5vw, 48px);
          border: 1px solid rgba(245, 242, 233, 0.13);
          background: rgba(10, 10, 10, 0.84);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.09);
        }

        .contentCard h2 {
          margin: 0;
          font-size: clamp(38px, 6vw, 72px);
          line-height: 0.95;
          letter-spacing: -0.05em;
          text-transform: none;
        }

        .contentCard h3 {
          margin: 34px 0 0;
          color: var(--paint);
          font-size: clamp(22px, 3vw, 32px);
          line-height: 1;
          text-transform: uppercase;
        }

        .contentCard p {
          margin: 22px 0 0;
          color: #c7c0b3;
          font-size: 17px;
          line-height: 1.6;
        }

        .contentCard .contentEmphasis {
          margin-top: 10px;
          color: var(--white);
          font-weight: 800;
        }

        .contentCard .contentDate {
          margin-top: 8px;
          color: var(--paint);
          font-weight: 800;
        }

        .technologyList {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding: 0;
          margin: 28px 0 0;
          list-style: none;
        }

        .technologyList li {
          padding: 10px 12px;
          border: 1px solid rgba(242, 201, 76, 0.34);
          color: var(--white);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .roadMain > header[data-road-stripes='true'] {
          background:
            radial-gradient(circle, rgba(255, 255, 255, 0.13) 0 0.55px, transparent 0.95px),
            radial-gradient(circle, rgba(0, 0, 0, 0.72) 0 0.9px, transparent 1.35px),
            linear-gradient(180deg, #1a1a1a, #111111);
          background-position: 0 0, 3px 2px, 0 0;
          background-size: 6px 6px, 8px 8px, 100% 100%;
        }

        .roadMain > header[data-road-stripes='true'] a:first-child {
          transform: translateY(4px);
        }

        .intersectionHero {
          min-height: 610px;
          align-items: end;
          padding-top: 178px;
          padding-bottom: 128px;
        }

        .heroPanel {
          width: min(600px, calc(100% - 56px));
          margin-right: 56px;
          padding: 0 0 0 28px;
          border: 0;
          border-left: 6px solid var(--paint);
          background: linear-gradient(90deg, rgba(8, 8, 8, 0.6), transparent 92%);
          box-shadow: none;
        }

        .heroKicker,
        .sectionIndex,
        .projectItemMeta,
        .heroMeta {
          color: var(--paint-muted, rgba(242, 201, 76, 0.68));
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .heroKicker {
          display: block;
          margin-bottom: 24px;
        }

        .heroPanel h1 {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: 520px;
          font-size: clamp(58px, 8vw, 108px);
          line-height: 0.86;
          letter-spacing: -0.055em;
        }

        .heroPanel h1 span:last-child {
          color: var(--white);
        }

        .heroRule,
        .editorialRule {
          width: min(260px, 70%);
          height: 2px;
          margin-top: 28px;
          background: var(--paint);
        }

        .heroPanel p:last-child {
          max-width: 420px;
          margin-top: 24px;
          color: #c7c0b3;
        }

        .heroMeta {
          grid-column: 3;
          align-self: end;
          justify-self: start;
          width: min(330px, 100%);
          margin-left: 56px;
          display: grid;
          gap: 18px;
          padding: 0 0 8px 18px;
          border-left: 1px solid var(--paint-soft);
          line-height: 1.35;
        }

        .heroMeta span {
          display: block;
        }

        .projectsSection {
          padding-top: 142px;
          padding-bottom: 52px;
        }

        .sectionIntro {
          align-self: start;
          margin-top: 14px;
        }

        .sectionIntro h2 {
          font-size: clamp(44px, 7vw, 88px);
          letter-spacing: -0.06em;
        }

        .sectionIntro p:last-child {
          max-width: 300px;
          margin-top: 26px;
          font-size: 14px;
        }

        .projectList {
          grid-column: 3;
          width: min(570px, calc(100% - 56px));
          margin-left: 56px;
        }

        .projectItem {
          position: relative;
          display: block;
          padding: 28px 0 32px;
          border-top: 1px solid rgba(245, 242, 233, 0.24);
          background: transparent;
          transition: transform 220ms ease, border-color 220ms ease;
        }

        .projectItem:last-child {
          border-bottom: 1px solid rgba(245, 242, 233, 0.24);
        }

        .projectItem:hover,
        .projectItem:focus-visible {
          transform: translateX(8px);
          border-color: var(--paint);
          outline: none;
        }

        .projectItemMeta {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 18px;
          color: var(--paint-muted, rgba(242, 201, 76, 0.68));
        }

        .projectItemMeta span:first-child {
          color: var(--paint);
          font-size: 34px;
          letter-spacing: -0.04em;
        }

        .projectItem h3 {
          margin: 14px 0 0;
          font-size: clamp(28px, 4vw, 48px);
          line-height: 0.96;
          letter-spacing: -0.055em;
        }

        .projectItem p {
          max-width: 460px;
          margin: 16px 0 0;
          color: #b8b1a5;
          font-size: 15px;
          line-height: 1.5;
        }

        .projectItemCta {
          display: inline-flex;
          gap: 8px;
          margin-top: 22px;
          color: var(--paint);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .projectItemCta span {
          transition: transform 220ms ease;
        }

        .projectItem:hover .projectItemCta span,
        .projectItem:focus-visible .projectItemCta span {
          transform: translateX(5px);
        }

        .contentSection {
          padding-top: 154px;
          padding-bottom: 50px;
        }

        .editorialBlock,
        .timelineBlock,
        .directoryBlock {
          position: relative;
          width: min(560px, 100%);
        }

        .editorialBlock {
          grid-column: 1;
          justify-self: end;
          width: min(560px, calc(100% - 56px));
          margin-right: 56px;
        }

        .sectionIndex {
          display: block;
          margin-bottom: 24px;
        }

        .editorialBlock h2,
        .timelineBlock h2,
        .directoryBlock h2 {
          margin: 0;
          font-size: clamp(46px, 7vw, 86px);
          line-height: 0.86;
          letter-spacing: -0.06em;
          text-transform: uppercase;
        }

        .editorialBlock h2 span {
          display: block;
        }

        .editorialBlock p,
        .timelineBlock p,
        .directoryBlock > p {
          max-width: 560px;
          margin: 24px 0 0;
          color: #c7c0b3;
          font-size: 17px;
          line-height: 1.62;
        }

        .timelineBlock {
          grid-column: 3;
          width: min(560px, calc(100% - 56px));
          margin-left: 56px;
          padding-left: 28px;
          border-left: 1px solid rgba(242, 201, 76, 0.45);
        }

        .timelineTrack {
          position: absolute;
          top: 88px;
          bottom: 0;
          left: -5px;
          width: 9px;
          background: var(--paint);
          clip-path: polygon(0 0, 100% 0, 100% 8px, 0 8px, 0 50%, 100% 50%, 100% calc(50% + 8px), 0 calc(50% + 8px), 0 100%, 100% 100%, 100% calc(100% - 8px), 0 calc(100% - 8px));
        }

        .timelineEntry {
          position: relative;
          display: grid;
          grid-template-columns: 82px minmax(0, 1fr);
          gap: 18px;
          margin-top: 56px;
        }

        .timelineEntry strong {
          color: var(--paint);
          font-size: 30px;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .timelineEntry h3 {
          margin: 0;
          font-size: clamp(20px, 3vw, 30px);
          line-height: 1;
          text-transform: uppercase;
        }

        .timelineEntry p {
          margin-top: 10px;
          font-size: 15px;
        }

        .timelineEntry .contentEmphasis {
          color: var(--white);
          font-weight: 800;
        }

        .timelineEntry .contentDate {
          color: var(--paint);
          font-weight: 800;
        }

        .timelineEntryEnd {
          margin-top: 48px;
        }

        .directoryBlock {
          grid-column: 1;
          justify-self: end;
          width: min(560px, calc(100% - 56px));
          margin-right: 56px;
        }

        .technologyDirectory {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin: 34px 0 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid rgba(245, 242, 233, 0.24);
        }

        .technologyDirectory li {
          display: flex;
          align-items: baseline;
          gap: 12px;
          min-width: 0;
          padding: 14px 8px 14px 0;
          border-bottom: 1px solid rgba(245, 242, 233, 0.24);
          color: var(--white);
          font-size: clamp(17px, 2vw, 24px);
          font-weight: 900;
          letter-spacing: -0.03em;
          text-transform: uppercase;
        }

        .technologyDirectory li:nth-child(even) {
          padding-left: 18px;
          border-left: 1px solid rgba(245, 242, 233, 0.18);
        }

        .technologyDirectory li span {
          color: var(--paint-muted, rgba(242, 201, 76, 0.68));
          font-size: 10px;
          letter-spacing: 0.1em;
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

        .contactCard h2 {
          font-size: clamp(24px, 3vw, 38px);
          letter-spacing: 0.02em;
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

        .contactDetails {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px 22px;
          margin-top: 24px;
        }

        .contactLink {
          color: var(--paint);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .contactLink:hover,
        .contactLink:focus-visible {
          color: var(--white);
          outline: none;
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
          .contactSection,
          .contentSection {
            padding-left: 82px;
          }

          .contentSection {
            display: block;
          }

          .contentCard {
            width: 100%;
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

        .roadMain {
          background: linear-gradient(180deg, #191919 0%, #101010 48%, #080808 100%);
        }

        .roadMain::before {
          background:
            radial-gradient(circle, rgba(255, 255, 255, 0.16) 0 0.55px, transparent 0.9px),
            radial-gradient(circle, rgba(0, 0, 0, 0.72) 0 0.9px, transparent 1.3px),
            radial-gradient(ellipse at 50% 15%, rgba(255, 255, 255, 0.04), transparent 34rem);
          background-position: 0 0, 3px 2px, 0 0;
          background-size: 5px 5px, 8px 8px, 100% 900px;
          opacity: 0.36;
          filter: none;
        }

        .roadMain::after {
          background:
            radial-gradient(ellipse at 50% 42%, transparent 0 38%, rgba(0, 0, 0, 0.28) 100%),
            linear-gradient(90deg, rgba(0, 0, 0, 0.18), transparent 20% 80%, rgba(0, 0, 0, 0.18));
          opacity: 0.76;
        }

        .roadMap {
          padding-bottom: 24px;
        }

        .centerRoadLine {
          bottom: -80px;
        }

        .intersectionHero {
          grid-template-columns: minmax(0, 1.55fr) 150px minmax(240px, 0.75fr);
          min-height: 640px;
          padding: 176px 0 146px;
        }

        .heroPanel {
          width: min(760px, calc(100% - 40px));
          margin-right: 0;
        }

        .heroPanel h1 {
          font-size: clamp(64px, 9vw, 130px);
        }

        .heroPanel p:last-child {
          max-width: 540px;
        }

        .heroMeta {
          margin-left: 36px;
        }

        .projectsSection {
          display: block;
          padding: 152px 0 54px;
        }

        .sectionIntro {
          width: 100%;
          margin: 0 0 32px;
          text-align: left;
        }

        .sectionIntro h2 {
          font-size: clamp(42px, 5vw, 72px);
        }

        .sectionIntro p:last-child {
          max-width: 620px;
          margin: 16px 0 0;
        }

        .projectList {
          width: 100%;
          margin-left: 0;
        }

        .projectItem {
          padding: 30px 0 34px;
        }

        .projectItemTop {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 24px;
        }

        .projectItemNumber {
          color: var(--paint);
          font-size: 34px;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .projectItemCategory {
          color: var(--paint-muted);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .projectItemMain {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: end;
          gap: 28px;
          margin-top: 10px;
        }

        .projectItem h3 {
          margin-top: 0;
          font-size: clamp(25px, 3vw, 42px);
        }

        .projectItem p {
          max-width: 700px;
        }

        .projectItemCta {
          margin-top: 0;
          white-space: nowrap;
        }

        .contentSection {
          display: block;
          padding: 178px 0 70px;
        }

        .editorialBlock,
        .timelineBlock,
        .directoryBlock {
          width: 100%;
          margin: 0;
        }

        .editorialBlock {
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .editorialBlock h2,
        .timelineBlock h2,
        .directoryBlock h2 {
          font-size: 12px;
          line-height: 1.2;
          letter-spacing: 0.18em;
        }

        .aboutLead {
          max-width: 800px;
          margin-top: 22px;
          color: var(--white);
          font-size: clamp(22px, 3vw, 38px);
          line-height: 1.35;
          letter-spacing: -0.025em;
        }

        .editorialBlock .editorialRule {
          margin-top: 30px;
        }

        .editorialBlock p {
          max-width: 680px;
          margin-top: 24px;
          font-size: 16px;
        }

        .timelineBlock {
          padding: 0;
          border: 0;
        }

        .timelineScale {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: 24px;
          margin-top: 52px;
        }

        .timelineScale strong {
          color: var(--paint);
          font-size: clamp(32px, 5vw, 64px);
          line-height: 1;
          letter-spacing: -0.05em;
        }

        .timelineLine {
          position: relative;
          height: 4px;
          background: linear-gradient(90deg, var(--paint), var(--paint-muted));
        }

        .timelineLine::before,
        .timelineLine::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--paint);
          transform: translateY(-50%);
        }

        .timelineLine::before {
          left: 0;
        }

        .timelineLine::after {
          right: 0;
        }

        .timelineDetails {
          margin: 32px 0 0 9%;
          max-width: 720px;
        }

        .timelineDetails h3 {
          margin: 0;
          font-size: clamp(22px, 3vw, 34px);
          line-height: 1;
          text-transform: uppercase;
        }

        .timelineDetails p {
          max-width: 720px;
          margin: 12px 0 0;
          color: #c7c0b3;
          font-size: 16px;
          line-height: 1.55;
        }

        .timelineDetails .contentEmphasis,
        .timelineDetails .contentDate {
          color: var(--paint);
          font-weight: 800;
        }

        .technologyDirectory {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 36px;
        }

        .technologyDirectory li,
        .technologyDirectory li:nth-child(even) {
          min-height: 90px;
          padding: 18px 14px 16px 0;
          border-left: 0;
        }

        .technologyDirectory li:nth-child(3n + 2),
        .technologyDirectory li:nth-child(3n + 3) {
          padding-left: 18px;
          border-left: 1px solid rgba(245, 242, 233, 0.18);
        }

        .technologyDirectory li span {
          align-self: start;
        }

        .stopSignWrap {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          justify-content: center;
          padding: 58px 0 96px;
        }

        .stopSignImage {
          width: 132px;
        }

        @media (max-width: 860px) {
          .intersectionHero {
            min-height: 590px;
            padding: 126px 0 92px;
          }

          .heroPanel {
            width: auto;
            margin-left: 54px;
            margin-right: 0;
          }

          .heroMeta {
            display: grid;
            grid-column: auto;
            width: auto;
            margin: 44px 0 0 82px;
          }

          .projectList {
            width: auto;
            margin-left: 82px;
          }

          .editorialBlock,
          .timelineBlock,
          .directoryBlock {
            width: auto;
            margin-right: 0;
            margin-left: 82px;
          }

          .contentSection {
            padding-left: 0;
          }

          .contentSection .contentCard {
            width: calc(100% - 82px);
            margin-left: 82px;
          }

          .timelineBlock {
            padding-left: 24px;
          }
        }

        @media (max-width: 520px) {
          .roadMain > header[data-road-stripes='true'] a:first-child {
            transform: translateY(2px);
          }

          .intersectionHero {
            min-height: 580px;
            padding-top: 112px;
          }

          .heroPanel {
            margin-left: 58px;
            padding-left: 18px;
          }

          .heroKicker,
          .sectionIndex,
          .projectItemMeta,
          .heroMeta {
            font-size: 9px;
            letter-spacing: 0.14em;
          }

          .heroPanel h1 {
            font-size: clamp(48px, 17vw, 76px);
          }

          .heroPanel p:last-child {
            font-size: 15px;
          }

          .heroMeta {
            margin-left: 70px;
          }

          .projectList,
          .editorialBlock,
          .timelineBlock,
          .directoryBlock {
            margin-left: 70px;
          }

          .contentSection .contentCard {
            width: calc(100% - 70px);
            margin-left: 70px;
          }

          .projectItem {
            padding-top: 24px;
            padding-bottom: 26px;
          }

          .projectItemMeta span:first-child {
            font-size: 28px;
          }

          .projectItem h3 {
            font-size: clamp(25px, 8vw, 36px);
          }

          .projectItem p,
          .editorialBlock p,
          .timelineBlock p,
          .directoryBlock > p {
            font-size: 15px;
          }

          .editorialBlock h2,
          .timelineBlock h2,
          .directoryBlock h2 {
            font-size: clamp(36px, 11vw, 52px);
            overflow-wrap: anywhere;
          }

          .timelineEntry {
            grid-template-columns: 62px minmax(0, 1fr);
            gap: 12px;
          }

          .timelineEntry strong {
            font-size: 24px;
          }

          .technologyDirectory li {
            gap: 7px;
            padding-right: 4px;
            font-size: 15px;
          }

          .technologyDirectory li:nth-child(even) {
            padding-left: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .projectItem,
          .projectItemCta span {
            transition: none;
          }
        }

        @media (max-width: 860px) {
          .roadMap {
            padding-inline: 14px;
          }

          .centerRoadLine {
            left: 14px;
            width: 5px;
          }

          .intersectionHero {
            min-height: 620px;
            display: block;
            padding: 126px 0 92px;
          }

          .heroPanel {
            width: auto;
            margin: 0 0 0 40px;
            padding-left: 18px;
          }

          .heroPanel h1 {
            font-size: clamp(54px, 16vw, 88px);
          }

          .heroMeta {
            width: auto;
            margin: 46px 0 0 40px;
          }

          .projectsSection {
            padding-top: 124px;
          }

          .sectionIntro,
          .projectList {
            width: auto;
            margin-left: 40px;
          }

          .sectionIntro {
            margin-bottom: 24px;
          }

          .projectItemMain {
            display: block;
          }

          .projectItemCta {
            margin-top: 20px;
          }

          .contentSection {
            padding: 132px 0 54px 40px;
          }

          .editorialBlock,
          .timelineBlock,
          .directoryBlock {
            width: 100%;
            margin: 0;
          }

          .timelineScale {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
            margin-top: 40px;
            padding-left: 22px;
          }

          .timelineLine {
            width: 4px;
            height: 86px;
            margin-left: 11px;
          }

          .timelineLine::before,
          .timelineLine::after {
            left: 50%;
            right: auto;
            width: 10px;
            height: 10px;
            transform: translate(-50%, -50%);
          }

          .timelineLine::after {
            top: 100%;
          }

          .timelineDetails {
            margin: 26px 0 0;
          }

          .technologyDirectory {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .technologyDirectory li:nth-child(3n + 2),
          .technologyDirectory li:nth-child(3n + 3) {
            padding-left: 0;
            border-left: 0;
          }

          .technologyDirectory li:nth-child(even) {
            padding-left: 14px;
            border-left: 1px solid rgba(245, 242, 233, 0.18);
          }

          .stopSignWrap {
            width: calc(100% - 80px);
            margin-left: 40px;
            justify-content: flex-start;
            padding-top: 36px;
          }
        }

        @media (max-width: 520px) {
          .heroPanel h1 {
            font-size: clamp(48px, 16vw, 76px);
          }

          .projectItemTop {
            gap: 12px;
          }

          .projectItemCategory {
            font-size: 9px;
          }

          .projectItemNumber {
            font-size: 28px;
          }

          .projectItem h3 {
            font-size: clamp(24px, 8vw, 36px);
          }

          .technologyDirectory li {
            min-height: 78px;
            font-size: 15px;
          }

          .technologyDirectory li:nth-child(even) {
            padding-left: 10px;
          }
        }
      `}</style>
    </div>
  );
}
