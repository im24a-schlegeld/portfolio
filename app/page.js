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
      <SiteHeader activeKey="home" variant="home" />

      <main className="roadMap">
        <div className="centerRoadLine" aria-hidden="true" />

        <section className="intersectionHero" aria-labelledby="hero-title">
          <div className="heroIntro">
            <span className="heroKicker">Portfolio / Informatik</span>
            <h1 id="hero-title"><span>Dario</span><span>Schlegel</span></h1>
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
                  <div className="projectItemCopy">
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
              {technologyList.map((technology, index) => (
                <li key={technology}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{technology}</strong>
                </li>
              ))}
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
          --mobile-road-x: 14px;
          --mobile-content-offset: 40px;
          --mobile-stop-gutter: 28px;
          --asphalt: #171717;
          --asphalt-dark: #070707;
          --paint: #f2c94c;
          --paint-soft: rgba(242, 201, 76, 0.24);
          --paint-muted: rgba(242, 201, 76, 0.68);
          --white: #f5f2e9;
          --muted: #aaa395;
          position: relative;
          min-height: 100vh;
          width: 100%;
          isolation: isolate;
          color: var(--white);
          background-color: #111111;
          background-image: var(--asphalt-surface);
          background-position: var(--asphalt-surface-position);
          background-size: var(--asphalt-surface-size);
          font-family: Bahnschrift, 'Arial Narrow', 'Segoe UI', sans-serif;
        }

        .roadMain,
        .roadMain * {
          box-sizing: border-box;
        }

        .roadMain::before,
        .roadMain::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .roadMain::after {
          background:
            radial-gradient(ellipse at 50% 42%, transparent 0 38%, rgba(0, 0, 0, 0.28) 100%),
            linear-gradient(90deg, rgba(0, 0, 0, 0.18), transparent 20% 80%, rgba(0, 0, 0, 0.18));
          opacity: 0.76;
        }

        .roadMap {
          position: relative;
          z-index: 1;
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 0 0 28px;
        }

        .centerRoadLine {
          position: absolute;
          z-index: 0;
          top: 0;
          bottom: -72px;
          left: 50%;
          width: 18px;
          pointer-events: none;
          transform: translateX(-50%);
          background: repeating-linear-gradient(
            180deg,
            transparent 0 28px,
            var(--paint) 28px 82px,
            transparent 82px 122px
          );
          opacity: 0.96;
        }

        section {
          position: relative;
          z-index: 1;
          min-width: 0;
        }

        .intersectionHero {
          display: grid;
          grid-template-columns: minmax(0, calc(50% - 42px)) minmax(250px, 1fr);
          column-gap: clamp(64px, 8vw, 140px);
          align-items: end;
          min-height: 720px;
          padding-block: clamp(150px, 15vw, 210px) clamp(130px, 13vw, 180px);
        }

        .heroIntro {
          min-width: 0;
          width: 100%;
          padding: clamp(30px, 4vw, 52px) 0 clamp(30px, 4vw, 52px) 36px;
          border-left: 6px solid var(--paint);
          background: linear-gradient(90deg, rgba(8, 8, 8, 0.6), transparent 92%);
        }

        .heroKicker,
        .sectionIndex,
        .heroMeta,
        .projectItemCategory {
          color: var(--paint-muted);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .heroKicker {
          display: block;
            margin-bottom: 32px;
        }

        .heroIntro h1 {
          display: flex;
          flex-direction: column;
          max-width: 760px;
          margin: 0;
          color: var(--white);
          font-size: clamp(60px, 8.4vw, 118px);
          line-height: 0.86;
          letter-spacing: -0.055em;
        }

        .heroRule,
        .editorialRule {
          width: min(260px, 70%);
          height: 2px;
          margin-top: 38px;
          background: var(--paint);
        }

        .heroIntro p {
          max-width: 540px;
          margin: 30px 0 0;
          color: #c7c0b3;
          font-size: clamp(16px, 1.8vw, 20px);
          line-height: 1.55;
        }

        .heroMeta {
          display: grid;
          gap: 18px;
          min-width: 0;
          padding: 0 0 12px 22px;
          border-left: 1px solid var(--paint-soft);
          line-height: 1.35;
        }

        .projectsSection,
        .contentSection {
          padding-block: clamp(120px, 10vw, 160px);
        }

        .sectionIntro {
          width: min(780px, calc(50% - 42px));
          min-width: 0;
          margin-bottom: 38px;
        }

        .sectionIndex {
          display: block;
          margin: 0 0 22px;
          font-size: 11px;
        }

        .sectionIntro h2 {
          max-width: 100%;
          margin: 0;
          font-size: clamp(42px, 5vw, 72px);
          line-height: 0.9;
          letter-spacing: -0.06em;
          text-transform: none;
        }

        .sectionIntro p,
        .directoryBlock > p {
          max-width: 620px;
          margin: 16px 0 0;
          color: #c7c0b3;
          font-size: 16px;
          line-height: 1.55;
        }

        .projectList {
          width: 100%;
          min-width: 0;
        }

        .projectItem {
          display: block;
          min-width: 0;
          padding: clamp(32px, 4vw, 52px) 0;
          border-top: 1px solid rgba(245, 242, 233, 0.24);
          color: inherit;
          text-decoration: none;
          transition: transform 220ms ease, border-color 220ms ease;
        }

        .projectItem:last-child {
          border-bottom: 1px solid rgba(245, 242, 233, 0.24);
        }

        .projectItem:hover,
        .projectItem:focus-visible {
          border-color: var(--paint);
          outline: none;
          transform: translateX(6px);
        }

        .projectItemTop {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 24px;
          min-width: 0;
        }

        .projectItemNumber {
          flex: 0 0 auto;
          color: var(--paint);
          font-size: 34px;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .projectItemCategory {
          min-width: 0;
          overflow-wrap: break-word;
          text-align: right;
        }

        .projectItemMain {
          display: grid;
          grid-template-columns: minmax(0, calc(50% - 42px)) minmax(0, 1fr);
          align-items: end;
          gap: 24px 48px;
          min-width: 0;
          margin-top: 22px;
        }

        .projectItemCopy {
          min-width: 0;
        }

        .projectItem h3 {
          min-width: 0;
          margin: 0;
          overflow-wrap: break-word;
          font-size: clamp(25px, 3vw, 42px);
          line-height: 0.96;
          letter-spacing: -0.055em;
        }

        .projectItem p {
          max-width: 700px;
          margin: 16px 0 0;
          color: #b8b1a5;
          font-size: 15px;
          line-height: 1.5;
        }

        .projectItemCta {
          display: inline-flex;
          justify-self: end;
          flex: 0 0 auto;
          gap: 8px;
          margin: 0;
          color: var(--paint);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .projectItemCta span {
          transition: transform 220ms ease;
        }

        .projectItem:hover .projectItemCta span,
        .projectItem:focus-visible .projectItemCta span {
          transform: translateX(5px);
        }

        .editorialBlock {
          width: min(780px, calc(50% - 42px));
          min-width: 0;
        }

        .aboutLead {
          max-width: 780px;
          margin-top: 22px;
          color: var(--white);
          font-size: clamp(22px, 3vw, 38px);
          line-height: 1.35;
          letter-spacing: -0.025em;
        }

        .editorialBlock p {
          max-width: 680px;
          margin: 24px 0 0;
          color: #c7c0b3;
          font-size: 16px;
          line-height: 1.62;
        }

        .timelineBlock,
        .directoryBlock {
          width: 100%;
          min-width: 0;
        }

        .directoryBlock > h2,
        .directoryBlock > p {
          width: min(780px, calc(50% - 42px));
        }

        .directoryBlock > p {
          max-width: min(620px, calc(50% - 42px));
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
          width: 100%;
          max-width: min(720px, calc(44% - 42px));
          margin: 36px 0 0 6%;
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
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          width: 100%;
          margin: 36px 0 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid rgba(245, 242, 233, 0.24);
        }

        .technologyDirectory li {
          display: flex;
          align-items: baseline;
          gap: 12px;
          min-width: 0;
          min-height: 90px;
          padding: 18px 14px 16px 0;
          border-bottom: 1px solid rgba(245, 242, 233, 0.24);
          color: var(--white);
        }

        .technologyDirectory li:nth-child(4n + 2),
        .technologyDirectory li:nth-child(4n + 3),
        .technologyDirectory li:nth-child(4n + 4) {
          padding-left: 18px;
          border-left: 1px solid rgba(245, 242, 233, 0.18);
        }

        .technologyDirectory li span {
          flex: 0 0 auto;
          align-self: start;
          color: var(--paint-muted);
          font-size: 10px;
          letter-spacing: 0.1em;
        }

        .technologyDirectory li strong {
          min-width: 0;
          overflow-wrap: break-word;
          font-size: clamp(16px, 2vw, 24px);
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .stopSignWrap {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: flex-start;
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: 72px 0 110px;
        }

        .stopSignMarker {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          margin-left: clamp(70px, 13vw, 170px);
        }

        .stopSignImage {
          display: block;
          width: 132px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 14px 22px rgba(0, 0, 0, 0.32));
        }

        .stopSignPole {
          width: 10px;
          height: 220px;
          background: linear-gradient(180deg, #8a8a8a 0%, #5f5f5f 50%, #747474 100%);
          box-shadow: inset 2px 0 0 rgba(255, 255, 255, 0.22), inset -2px 0 0 rgba(0, 0, 0, 0.18);
        }

        @media (max-width: 1200px) {
          .technologyDirectory {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .technologyDirectory li:nth-child(4n + 2),
          .technologyDirectory li:nth-child(4n + 3),
          .technologyDirectory li:nth-child(4n + 4) {
            padding-left: 0;
            border-left: 0;
          }

          .technologyDirectory li:nth-child(3n + 2),
          .technologyDirectory li:nth-child(3n + 3) {
            padding-left: 18px;
            border-left: 1px solid rgba(245, 242, 233, 0.18);
          }
        }

        @media (max-width: 1050px) {
          .centerRoadLine {
            left: var(--mobile-road-x);
            width: 5px;
            transform: none;
          }

          .intersectionHero {
            grid-template-columns: 1fr;
            row-gap: 42px;
            padding-left: var(--mobile-content-offset);
          }

          .heroMeta {
            width: min(420px, 100%);
            margin-left: 28px;
          }

          .projectsSection,
          .contentSection {
            padding-left: var(--mobile-content-offset);
          }

          .editorialBlock {
            width: 100%;
          }

          .sectionIntro {
            width: 100%;
          }

          .timelineDetails {
            max-width: 720px;
          }

          .directoryBlock > h2,
          .directoryBlock > p {
            width: 100%;
            max-width: 720px;
          }
        }

        @media (max-width: 900px) {
          .projectItemTop {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
          }

          .projectItemCategory {
            text-align: left;
          }

          .projectItemMain {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .projectItemCta {
            justify-self: start;
            margin-top: 20px;
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
            top: auto;
            left: 50%;
            right: auto;
            width: 10px;
            height: 10px;
            transform: translateX(-50%);
          }

          .timelineLine::before {
            top: 0;
          }

          .timelineLine::after {
            top: 100%;
          }

          .timelineDetails {
            max-width: 720px;
            margin: 36px 0 0;
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
            padding-left: 12px;
            border-left: 1px solid rgba(245, 242, 233, 0.18);
          }
        }

        @media (max-width: 760px) {
          .roadMap {
            width: calc(100% - 28px);
          }

          .centerRoadLine {
            left: var(--mobile-road-x);
            width: 5px;
            transform: none;
          }

          .intersectionHero {
            display: block;
            min-height: 0;
            padding-left: 0;
            padding-block: 118px 96px;
          }

          .heroIntro {
            width: calc(100% - 40px);
            width: calc(100% - var(--mobile-content-offset));
            margin-left: var(--mobile-content-offset);
            padding-left: 18px;
          }

          .heroIntro h1 {
            font-size: clamp(52px, 16vw, 88px);
          }

          .heroMeta {
            width: auto;
            margin: 44px 0 0 var(--mobile-content-offset);
          }

          .projectsSection,
          .contentSection {
            padding-block: 112px 84px;
            padding-left: var(--mobile-content-offset);
          }

          .sectionIntro,
          .projectList,
          .editorialBlock,
          .timelineBlock,
          .directoryBlock {
            width: 100%;
            margin-left: 0;
          }

          .sectionIntro {
            margin-bottom: 28px;
          }

          .stopSignWrap {
            width: calc(100% - var(--mobile-content-offset) - var(--mobile-stop-gutter));
            margin-left: var(--mobile-content-offset);
            padding: 42px 0 92px;
          }

          .stopSignMarker {
            margin-left: 12px;
          }

          .stopSignImage {
            width: 90px;
          }

          .stopSignPole {
            height: 150px;
            width: 8px;
          }
        }

        @media (max-width: 500px) {
          .technologyDirectory {
            grid-template-columns: 1fr;
          }

          .technologyDirectory li:nth-child(even) {
            padding-left: 0;
            border-left: 0;
          }

          .heroIntro h1 {
            font-size: clamp(48px, 15vw, 72px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .projectItem,
          .projectItemCta span {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
