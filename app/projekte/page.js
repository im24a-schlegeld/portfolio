import Image from 'next/image';
import Link from 'next/link';
import ProjectEmbed from './ProjectEmbed';
import { navigationItems, projects } from '../../data/portfolio';

export const metadata = {
  title: 'Projekte',
  description: 'Software- und Webprojekte von Dario Schlegel mit Live-Demos, technischen Details und verwendeten Technologien.',
};

const smashProject = projects.find((project) => project.id === 'smash-a-meerkat');
const featuredProject = projects.find((project) => project.id === 'lyrics-separator');
const finalProject = projects.find((project) => project.id === 'x-archive');

const firstProjects = [smashProject].filter(Boolean);
const lastProjects = [finalProject].filter(Boolean);

function ProjectMedia({ project }) {
  if (!project.media) {
    return (
      <div className="mediaFrame mediaPlaceholder" aria-label={`${project.title} ohne Vorschau`}>
        <strong>{project.title}</strong>
        <span>Für dieses Projekt ist aktuell keine eingebettete Vorschau hinterlegt.</span>
      </div>
    );
  }

  if (project.media.type === 'video') {
    return (
      <div className="mediaFrame gameplayFrame" aria-label={project.media.label}>
        <video autoPlay muted loop playsInline preload="metadata">
          <source src={project.media.src} type="video/mp4" />
          Dein Browser kann dieses Gameplay-Video nicht abspielen.
        </video>
      </div>
    );
  }

  if (project.media.type === 'phone' && project.media.src) {
    return (
      <div className="phoneMedia" aria-label={project.media.label}>
        <div className="phoneMockup">
          <div className="phoneScreen">
            <ProjectEmbed src={project.media.src} title={project.media.label} />
          </div>
          <Image
            className="phoneFrame"
            src="/iphone_rahmen_transparent.png"
            alt=""
            width={362}
            height={730}
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }

  if (project.media.type === 'website' && project.media.src) {
    return (
      <div className="mediaFrame websiteFrame" aria-label={project.media.label}>
        <div className="miniBrowserTop" aria-hidden="true">
          <span />
          <span />
          <span />
          <p>{project.media.src.replace('https://', '').replace('/', '')}</p>
        </div>
        <div className="websiteScreen">
          <ProjectEmbed src={project.media.src} title={project.media.label} />
        </div>
      </div>
    );
  }

  return (
    <div className="mediaFrame mediaPlaceholder" aria-label={`${project.title} ohne Vorschau`}>
      <strong>{project.title}</strong>
      <span>Die Vorschau ist nicht verfügbar. Direkte Projektlinks bleiben nutzbar.</span>
    </div>
  );
}

function ProjectFacts({ project }) {
  return (
    <dl className="projectFacts" aria-label={`${project.title} Projektdaten`}>
      <div>
        <dt>Rolle</dt>
        <dd>{project.role}</dd>
      </div>
      <div>
        <dt>Status</dt>
        <dd>{project.status}</dd>
      </div>
      <div>
        <dt>Portfolio-Stand</dt>
        <dd>{project.portfolioYear}</dd>
      </div>
    </dl>
  );
}

function ProjectActions({ project, detailsHref }) {
  if (!project.liveUrl && !project.githubUrl && !detailsHref) {
    return null;
  }

  return (
    <div className="actions compactActions" aria-label={`${project.title} Projektaktionen`}>
      {project.liveUrl && (
        <a className="primaryAction" href={project.liveUrl} target="_blank" rel="noreferrer">
          Live Demo <span aria-hidden="true">-&gt;</span>
          <span className="srOnly"> in neuem Tab öffnen</span>
        </a>
      )}
      {project.githubUrl && (
        <a className="secondaryAction" href={project.githubUrl} target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">-&gt;</span>
          <span className="srOnly"> in neuem Tab öffnen</span>
        </a>
      )}
      {detailsHref && (
        <a className="ghostAction" href={detailsHref}>
          Details
        </a>
      )}
    </div>
  );
}

function ProjectCaseStudy({ project }) {
  return (
    <section className="caseStudy" aria-label={`${project.title} Herausforderung, Lösung und Ergebnis`}>
      <article>
        <span>Herausforderung</span>
        <p>{project.challenge}</p>
      </article>
      <article>
        <span>Lösung</span>
        <p>{project.solution}</p>
      </article>
      <article>
        <span>Ergebnis</span>
        <p>{project.result}</p>
      </article>
    </section>
  );
}

function ProjectShowcase({ project }) {
  return (
    <article
      id={project.id}
      className="projectShowcase"
      aria-labelledby={`${project.id}-title`}
    >
      <ProjectMedia project={project} />
      <div className="showcaseInfo">
        <div className="projectMeta compactMeta">
          <span>{project.number}</span>
          <span>{project.category}</span>
        </div>
        <p className="projectIndex">{project.number} - Projekt</p>
        <h2 id={`${project.id}-title`}>{project.title}</h2>
        <p className="subtitle">{project.subtitle}</p>
        <p className="description">{project.description}</p>

        <ProjectFacts project={project} />

        <div className="techList compactTech" aria-label={`${project.title} Tech Stack`}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <ProjectActions project={project} />

        <section className="implementation" aria-label={`${project.title} Umsetzung`}>
          <h3>Meine Umsetzung</h3>
          <p>{project.implementation}</p>
        </section>

        <ProjectCaseStudy project={project} />
      </div>
    </article>
  );
}

export default function Projekte() {
  return (
    <main className="projectsPage">
      <section className="projectsIntro" aria-labelledby="projects-title">
        <nav className="projectsNav" aria-label="Hauptnavigation">
          {navigationItems.map((item) => (
            <Link
              href={item.href}
              key={item.key}
              aria-current={item.key === 'projects' ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="eyebrow">Portfolio</p>
        <h1 id="projects-title">Projekte</h1>
        <p className="introText">
          Eine Auswahl meiner Projekte aus Webentwicklung, Softwareentwicklung und Teamarbeit.
        </p>
      </section>

      <section className="projectStack firstProjectStack" aria-label="Erstes Projekt">
        {firstProjects.map((project) => (
          <ProjectShowcase project={project} key={project.title} />
        ))}
      </section>

      <section id={featuredProject.id} className="featuredProject" aria-labelledby="lyrics-title">
        <div className="projectPreview" aria-label="Lyrics Separator Live-Vorschau">
          <div className="browserFrame">
            <div className="browserTop" aria-hidden="true">
              <span />
              <span />
              <span />
              <p>{featuredProject.liveUrl?.replace('https://', '').replace('/', '')}</p>
            </div>
            <div className="previewScreen">
              {featuredProject.liveUrl ? (
                <ProjectEmbed
                  src={featuredProject.liveUrl}
                  title="Lyrics Separator Live Demo Vorschau"
                />
              ) : (
                <div className="embedFallback">
                  <strong>{featuredProject.title}</strong>
                  <span>Keine Live-Vorschau hinterlegt.</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <article className="projectInfo">
          <div className="projectMeta">
            <span>{featuredProject.number}</span>
            <span>{featuredProject.category}</span>
          </div>

          <p className="projectIndex">{featuredProject.number} - Projekt</p>
          <h2 id="lyrics-title">{featuredProject.title}</h2>
          <p className="subtitle">{featuredProject.subtitle}</p>
          <p className="description">{featuredProject.description}</p>

          <ProjectFacts project={featuredProject} />

          <div className="techList" aria-label="Tech Stack">
            {featuredProject.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <ProjectActions project={featuredProject} detailsHref="#lyrics-separator-details" />

          <section className="implementation" aria-labelledby="implementation-title">
            <h3 id="implementation-title">Meine Umsetzung</h3>
            <p>{featuredProject.implementation}</p>
          </section>

          <ProjectCaseStudy project={featuredProject} />
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

      <section className="projectStack lastProjectStack" aria-label="Letztes Projekt">
        {lastProjects.map((project) => (
          <ProjectShowcase project={project} key={project.title} />
        ))}
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

        .projectsNav {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: clamp(32px, 5vw, 70px);
        }

        .projectsNav a {
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          padding: 0 18px;
          border: 1px solid rgba(242, 201, 76, 0.24);
          border-radius: 999px;
          color: #cfc7ba;
          background: rgba(0, 0, 0, 0.2);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-decoration: none;
          text-transform: uppercase;
          transition: transform 180ms ease, border-color 180ms ease, background 180ms ease, color 180ms ease;
        }

        .projectsNav a:hover,
        .projectsNav a:focus-visible,
        .projectsNav a[aria-current='page'] {
          color: #f2c94c;
          transform: translateY(-2px);
          border-color: #f2c94c;
          background: rgba(242, 201, 76, 0.1);
          outline: none;
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
          padding: clamp(26px, 5vw, 58px) 0 clamp(58px, 8vw, 104px);
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
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #050505;
          container-type: inline-size;
        }

        .previewScreen iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1440px;
          height: 900px;
          display: block;
          border: 0;
          background: #050505;
          transform: translate(-50%, -50%) scale(calc((100cqw - 28px) / 1440px));
          transform-origin: center;
        }

        .embedFallback {
          position: absolute;
          inset: 0;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 20px;
          color: #f7f2e8;
          text-align: center;
          background: radial-gradient(circle at 50% 30%, rgba(242, 201, 76, 0.12), transparent 60%), #050505;
          transition: opacity 180ms ease;
        }

        .embedFallback.isHidden {
          opacity: 0;
          pointer-events: none;
        }

        .embedFallback strong {
          font-size: clamp(15px, 2vw, 22px);
          text-transform: uppercase;
        }

        .embedFallback span {
          color: #aaa395;
          font-size: 12px;
        }

        .embedFallback a,
        .embedOpenLink {
          color: #f2c94c;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-decoration: none;
          text-transform: uppercase;
        }

        .embedFrame {
          opacity: 0;
          transition: opacity 180ms ease;
        }

        .embedFrame.isLoaded {
          opacity: 1;
        }

        .embedOpenLink {
          position: absolute;
          right: 10px;
          bottom: 10px;
          z-index: 4;
          padding: 7px 9px;
          border: 1px solid rgba(242, 201, 76, 0.32);
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.78);
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

        .projectFacts {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          margin: 26px 0 0;
        }

        .projectFacts div {
          display: grid;
          grid-template-columns: minmax(110px, 0.55fr) minmax(0, 1.45fr);
          gap: 16px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .projectFacts dt {
          color: rgba(247, 242, 232, 0.48);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .projectFacts dd {
          margin: 0;
          color: #f7f2e8;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.45;
        }

        .caseStudy {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
          margin-top: 24px;
        }

        .caseStudy article {
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.025);
        }

        .caseStudy span {
          color: #f2c94c;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .caseStudy p {
          margin: 8px 0 0;
          color: #cfc7ba;
          font-size: 14px;
          line-height: 1.55;
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
          padding: 0 0 clamp(44px, 7vw, 84px);
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

        .projectStack {
          position: relative;
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          display: grid;
          gap: clamp(26px, 5vw, 58px);
          padding: 0 0 clamp(72px, 10vw, 132px);
        }

        .firstProjectStack {
          padding-bottom: clamp(36px, 6vw, 72px);
        }

        .lastProjectStack {
          padding-top: clamp(12px, 3vw, 28px);
        }

        .projectShowcase,
        .featuredProject {
          scroll-margin-top: 24px;
        }

        .projectShowcase {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.76fr);
          align-items: center;
          gap: clamp(24px, 5vw, 68px);
          padding: clamp(18px, 3vw, 28px);
          border: 1px solid rgba(245, 242, 233, 0.12);
          border-radius: 32px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.045), transparent),
            rgba(9, 9, 9, 0.72);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 24px 70px rgba(0, 0, 0, 0.32);
          animation: projectReveal 680ms ease both;
        }

        .lastProjectStack .projectShowcase {
          grid-template-columns: minmax(320px, 0.76fr) minmax(0, 1.05fr);
        }

        .lastProjectStack .projectShowcase .phoneMedia {
          order: 2;
        }

        .lastProjectStack .projectShowcase .showcaseInfo {
          order: 1;
        }

        .mediaFrame {
          position: relative;
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(242, 201, 76, 0.24);
          border-radius: 26px;
          background:
            linear-gradient(145deg, rgba(242, 201, 76, 0.12), transparent 32%),
            #050505;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.11),
            0 24px 58px rgba(0, 0, 0, 0.38);
          transition: transform 200ms ease, border-color 200ms ease, filter 200ms ease;
        }

        .mediaFrame::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, transparent, rgba(242, 201, 76, 0.1), transparent),
            radial-gradient(circle at 18% 12%, rgba(255, 255, 255, 0.18), transparent 18rem);
          opacity: 0.45;
          mix-blend-mode: screen;
        }

        .mediaFrame:hover,
        .mediaFrame:focus-within {
          transform: translateY(-4px);
          border-color: rgba(242, 201, 76, 0.52);
          filter: brightness(1.05);
        }

        .gameplayFrame {
          aspect-ratio: 16 / 9;
          display: grid;
          place-items: center;
        }

        .mediaPlaceholder {
          min-height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 24px;
          text-align: center;
        }

        .mediaPlaceholder strong {
          color: #f7f2e8;
          font-size: 24px;
          text-transform: uppercase;
        }

        .mediaPlaceholder span {
          max-width: 420px;
          color: #aaa395;
          line-height: 1.5;
        }

        .gameplayFrame video,
        .websiteFrame iframe {
          width: 100%;
          height: 100%;
          display: block;
          border: 0;
          background: #050505;
        }

        .websiteScreen {
          position: relative;
          min-height: 0;
          overflow: hidden;
          background: #050505;
        }

        .websiteScreen iframe {
          position: absolute;
          inset: 0;
        }

        .gameplayFrame video {
          object-fit: contain;
        }

        .phoneMedia {
          position: relative;
          min-width: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: clamp(16px, 3vw, 28px);
          border: 1px solid rgba(242, 201, 76, 0.2);
          border-radius: 30px;
          background:
            radial-gradient(circle at 50% 18%, rgba(242, 201, 76, 0.12), transparent 17rem),
            rgba(5, 5, 5, 0.72);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 24px 58px rgba(0, 0, 0, 0.34);
          transition: transform 200ms ease, border-color 200ms ease, filter 200ms ease;
        }

        .phoneMedia:hover,
        .phoneMedia:focus-within {
          transform: translateY(-4px);
          border-color: rgba(242, 201, 76, 0.48);
          filter: brightness(1.04);
        }

        .phoneMockup {
          position: relative;
          width: min(238px, 68vw);
          aspect-ratio: 362 / 730;
          filter: drop-shadow(0 28px 42px rgba(0, 0, 0, 0.58));
        }

        .phoneScreen {
          position: absolute;
          inset: 3.9% 5.7% 0.65%;
          z-index: 1;
          overflow: hidden;
          border-radius: 38px;
          background: #050505;
          container-type: inline-size;
        }

        .phoneScreen iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 390px;
          height: 844px;
          display: block;
          border: 0;
          background: #050505;
          transform: translate(-50%, -50%) scale(calc(100cqw / 390px));
          transform-origin: center;
        }

        .phoneFrame {
          position: absolute;
          inset: 0;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: contain;
          pointer-events: none;
        }

        .websiteFrame {
          aspect-ratio: 16 / 10;
          display: grid;
          grid-template-rows: 42px minmax(0, 1fr);
        }

        .miniBrowserTop {
          display: grid;
          grid-template-columns: 10px 10px 10px minmax(0, 1fr);
          align-items: center;
          gap: 8px;
          padding: 0 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.52);
        }

        .miniBrowserTop span {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: rgba(242, 201, 76, 0.82);
        }

        .miniBrowserTop span:nth-child(2) {
          background: rgba(207, 199, 186, 0.54);
        }

        .miniBrowserTop span:nth-child(3) {
          background: rgba(255, 255, 255, 0.32);
        }

        .miniBrowserTop p {
          min-width: 0;
          margin: 0 0 0 6px;
          overflow: hidden;
          color: rgba(247, 242, 232, 0.68);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-overflow: ellipsis;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .showcaseInfo {
          min-width: 0;
        }

        .compactMeta {
          margin-bottom: clamp(20px, 3vw, 36px);
        }

        .showcaseInfo h2 {
          margin: 0;
          font-size: clamp(34px, 4.8vw, 68px);
          line-height: 0.92;
          letter-spacing: -0.065em;
          text-transform: uppercase;
        }

        .compactTech {
          margin-top: 24px;
        }

        .compactActions {
          margin-top: 24px;
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
          .featuredProject,
          .projectShowcase,
          .lastProjectStack .projectShowcase {
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

          .lastProjectStack .projectShowcase .phoneMedia,
          .lastProjectStack .projectShowcase .showcaseInfo {
            order: initial;
          }
        }

        @media (max-width: 560px) {
          .projectsIntro,
          .featuredProject,
          .technicalHighlights,
          .projectStack {
            width: min(100% - 28px, 1180px);
          }

          .projectsIntro {
            padding-top: 26px;
          }

          .projectsNav {
            gap: 7px;
            margin-bottom: 34px;
          }

          .projectsNav a {
            min-height: 36px;
            padding: 0 12px;
            font-size: 10px;
          }

          .browserFrame,
          .projectInfo,
          .highlightCard,
          .projectShowcase,
          .mediaFrame,
          .phoneMedia {
            border-radius: 20px;
          }

          .browserTop {
            min-height: 42px;
            padding: 0 12px;
          }

          .gameplayFrame {
            aspect-ratio: 4 / 3;
          }

          .phoneMockup {
            width: min(218px, 66vw);
          }

          .phoneScreen {
            border-radius: 30px;
          }

          .projectShowcase {
            padding: 14px;
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
          .projectShowcase,
          .mediaFrame,
          .phoneMedia,
          .browserFrame,
          .highlightCard,
          .backLink,
          .primaryAction,
          .secondaryAction,
          .ghostAction,
          .projectsNav a,
          .embedFallback,
          .embedFrame {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
