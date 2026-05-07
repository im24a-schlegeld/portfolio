'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const focusCards = [
  {
    number: '01',
    title: 'Interface',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praezise Layouts, klare Hierarchie und ein Look, der sofort nach eigener Handschrift wirkt.',
  },
  {
    number: '02',
    title: 'Frontend',
    text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Saubere Komponenten, stabile Struktur und Animationen, die den Inhalt tragen.',
  },
  {
    number: '03',
    title: 'Motion',
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Scroll, Tiefe, Licht und Timing werden als Teil der Gestaltung behandelt.',
  },
];

const projectCards = [
  'Portfolio Redesign',
  'Freizeit Animationen',
  'Ai-Teil Experiment',
];

function TribalChromeFlame({ id, className = '', mirrored = false }) {
  const skinId = `${id}-skin`;
  const edgeId = `${id}-edge`;
  const shadowId = `${id}-shadow`;

  return (
    <svg
      className={`chromeFlame ${className} ${mirrored ? 'mirrored' : ''}`}
      viewBox="0 0 1000 260"
      role="img"
      aria-label="Chrome tribal flame ornament"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={skinId} x1="0%" y1="24%" x2="100%" y2="76%">
          <stop offset="0%" stopColor="#090b10" />
          <stop offset="8%" stopColor="#edf5ff" />
          <stop offset="15%" stopColor="#738193" />
          <stop offset="27%" stopColor="#151922" />
          <stop offset="37%" stopColor="#f8fbff" />
          <stop offset="49%" stopColor="#9aa7bd" />
          <stop offset="58%" stopColor="#05070b" />
          <stop offset="73%" stopColor="#dfe8ff" />
          <stop offset="84%" stopColor="#5a6478" />
          <stop offset="100%" stopColor="#f9fcff" />
        </linearGradient>
        <linearGradient id={edgeId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="18%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="34%" stopColor="#6f7c96" stopOpacity="0.35" />
          <stop offset="52%" stopColor="#ffffff" stopOpacity="0.98" />
          <stop offset="77%" stopColor="#9db4d4" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id={shadowId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#020306" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#181b24" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#020306" stopOpacity="0.98" />
        </linearGradient>
        <filter id={`${id}-lift`} x="-8%" y="-25%" width="116%" height="150%">
          <feDropShadow dx="0" dy="14" stdDeviation="13" floodColor="#000000" floodOpacity="0.62" />
          <feDropShadow dx="0" dy="-2" stdDeviation="2" floodColor="#ffffff" floodOpacity="0.28" />
        </filter>
      </defs>

      <g className="flameParallax" filter={`url(#${id}-lift)`}>
        <path
          className="flameBlade flameMain"
          fill={`url(#${skinId})`}
          d="M12 143C72 72 154 49 252 65C336 79 396 18 510 16C472 45 462 74 490 96C545 141 658 85 760 55C735 86 757 109 836 106C908 103 961 119 992 148C898 152 824 180 742 217C635 265 531 252 457 202C396 161 335 166 256 216C174 267 88 238 44 198C86 203 129 190 161 158C102 170 54 166 12 143Z"
        />
        <path
          className="flameBlade flameLower"
          fill={`url(#${skinId})`}
          d="M68 197C131 211 194 184 239 137C271 205 355 221 445 176C505 146 565 146 621 179C691 219 798 212 932 162C895 206 833 238 744 251C642 267 565 240 495 204C429 170 365 190 294 232C210 282 119 257 68 197Z"
        />
        <path
          className="flameShade"
          fill={`url(#${shadowId})`}
          d="M52 151C103 169 157 154 206 112C196 155 230 173 287 166C248 207 181 229 112 205C92 197 72 180 52 151Z"
        />
        <path
          className="flameShade"
          fill={`url(#${shadowId})`}
          d="M477 183C548 220 626 217 712 176C674 224 596 248 520 224C500 216 486 204 477 183Z"
        />
        <path
          className="flameCavity"
          d="M276 122C337 78 422 80 488 116C426 142 346 145 276 122Z"
        />
        <path
          className="flameCavity"
          d="M585 137C641 98 721 92 777 124C725 158 646 165 585 137Z"
        />
        <path
          className="flameCavity"
          d="M760 165C807 136 874 130 929 151C883 176 812 188 760 165Z"
        />
        <path
          className="flameCavity small"
          d="M159 166C184 136 222 126 257 136C229 164 194 178 159 166Z"
        />
        <path
          className="flameGlint"
          fill="none"
          stroke={`url(#${edgeId})`}
          strokeLinecap="round"
          strokeWidth="10"
          d="M38 129C115 80 175 72 250 83C335 95 385 42 478 32"
        />
        <path
          className="flameGlint delayed"
          fill="none"
          stroke={`url(#${edgeId})`}
          strokeLinecap="round"
          strokeWidth="8"
          d="M548 111C620 118 683 84 756 65C738 92 762 113 830 112"
        />
        <path
          className="flameEdge"
          fill="none"
          stroke={`url(#${edgeId})`}
          strokeLinejoin="round"
          strokeWidth="3"
          d="M12 143C72 72 154 49 252 65C336 79 396 18 510 16C472 45 462 74 490 96C545 141 658 85 760 55C735 86 757 109 836 106C908 103 961 119 992 148"
        />
      </g>
    </svg>
  );
}

function ChromeFlameDivider({ id }) {
  return (
    <div className="chromeFlameDivider chromeDivider" aria-hidden="true">
      <TribalChromeFlame id={`${id}-left`} className="dividerFlame left" />
      <span className="dividerSigil" />
      <TribalChromeFlame id={`${id}-right`} className="dividerFlame right" mirrored />
    </div>
  );
}

function ChromeFlameCorner({ id, className = '' }) {
  return (
    <span className={`chromeFlameCorner ${className}`} aria-hidden="true">
      <TribalChromeFlame id={id} className="cornerFlame" />
    </span>
  );
}

export default function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;

    if (!page) {
      return undefined;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const setStaticChrome = () => {
      page.style.setProperty('--scroll-progress', '0');
      page.style.setProperty('--chrome-shift', '0px');
      page.style.setProperty('--chrome-light-x', '24%');
      page.style.setProperty('--chrome-light-y', '18%');
      page.style.setProperty('--chrome-intensity', '0.88');
      page.style.setProperty('--flame-shift', '0px');
    };

    if (reducedMotion.matches) {
      setStaticChrome();
      return undefined;
    }

    let frame = null;

    const updateChrome = () => {
      frame = null;

      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollable > 0
          ? Math.min(Math.max(window.scrollY / scrollable, 0), 1)
          : 0;

      page.style.setProperty('--scroll-progress', progress.toFixed(4));
      page.style.setProperty('--chrome-shift', `${Math.round(progress * 420)}px`);
      page.style.setProperty('--chrome-light-x', `${16 + progress * 68}%`);
      page.style.setProperty('--chrome-light-y', `${9 + progress * 42}%`);
      page.style.setProperty('--chrome-intensity', (0.78 + progress * 0.34).toFixed(3));
      page.style.setProperty('--flame-shift', `${Math.round((progress - 0.5) * 120)}px`);
    };

    const requestUpdate = () => {
      if (frame === null) {
        frame = window.requestAnimationFrame(updateChrome);
      }
    };

    updateChrome();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);

      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div ref={pageRef} className="gothicChromeMain">
      <div className="cathedralBackground" aria-hidden="true">
        <TribalChromeFlame id="ambient-top" className="ambientFlame top" />
        <TribalChromeFlame id="ambient-low" className="ambientFlame lower" mirrored />
        <div className="ribField" />
        <div className="coldBloom" />
      </div>

      <header className="siteHeader chromeFrame">
        <div className="mainContainer headerInner">
          <Link className="logo chromeTextAccent displayFont" href="/">
            Dario Schlegel
          </Link>

          <nav className="navLinks" aria-label="Hauptnavigation">
            <a className="navLink chromeEdge" href="#profil">
              Profil
            </a>
            <a className="navLink chromeEdge" href="#arbeiten">
              Arbeiten
            </a>
            <Link className="navLink chromeEdge active" href="/about">
              Freizeit
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero mainContainer">
          <div className="heroCopy">
            <TribalChromeFlame id="hero-blade" className="heroFlame" />
            <p className="eyebrow">Digital Cathedral Portfolio</p>
            <h1 className="heroTitle displayFont">
              <span className="stoneText">Schwarzer Stein.</span>
              <span className="chromeTextAccent">Lebendiges Chrome.</span>
            </h1>
            <p className="heroText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diese
              Startseite ist als Premium-Portfolio-Struktur gedacht: stark,
              dunkel, technisch und bereit, mit deinen echten Projekten ersetzt
              zu werden.
            </p>

            <div className="ctaFrame chromeFrame">
              <a className="chromeButton primary" href="#arbeiten">
                Projekte ansehen
              </a>
              <Link className="chromeButton secondary" href="/about">
                Freizeit betreten
              </Link>
            </div>
          </div>

          <aside className="heroSanctum gothicArch chromeSurface" aria-label="Portfolio emblem">
            <ChromeFlameCorner id="hero-corner-a" className="topLeft" />
            <ChromeFlameCorner id="hero-corner-b" className="bottomRight" />
            <div className="lancetCluster" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="roseWindow" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="sanctumSeal chromeFrame">
              <span className="sealNumber displayFont">DS</span>
              <span className="sealText">Portfolio System</span>
            </div>
          </aside>
        </section>

        <ChromeFlameDivider id="after-hero" />

        <section id="profil" className="introSection mainContainer">
          <div className="sectionHeading">
            <p className="eyebrow">Profil</p>
            <h2 className="sectionTitle displayFont">
              Ein Portfolio mit Gewicht, Richtung und Kante.
            </h2>
          </div>

          <div className="introPanel gothicArch chromeFrame">
            <ChromeFlameCorner id="intro-flame" className="panelCorner" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio praesent libero. Sed cursus ante dapibus diam. Dieser
              Bereich kann spaeter dein Kurzprofil werden: wer du bist, was du
              baust und warum deine Arbeit auffaellt.
            </p>
            <p>
              Duis sagittis ipsum praesent mauris. Fusce nec tellus sed augue
              semper porta. Hier passt ein direkter, selbstbewusster Text ueber
              Design, Entwicklung, Schule, Projekte oder deine Ziele.
            </p>
          </div>
        </section>

        <section className="focusSection mainContainer" aria-label="Schwerpunkte">
          {focusCards.map((card, index) => (
            <article className="cathedralCard chromeFrame" key={card.title}>
              <ChromeFlameCorner id={`focus-flame-${index}`} className="cardCorner" />
              <span className="cardNumber chromeTextAccent displayFont">
                {card.number}
              </span>
              <h3 className="displayFont">{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </section>

        <ChromeFlameDivider id="after-focus" />

        <section id="arbeiten" className="workSection mainContainer">
          <div className="sectionHeading centered">
            <p className="eyebrow">Arbeiten</p>
            <h2 className="sectionTitle chromeTextAccent displayFont">
              Platzhalter fuer starke Projekte.
            </h2>
          </div>

          <div className="projectGrid">
            {projectCards.map((title, index) => (
              <article className="projectCard chromeSurface" key={title}>
                <ChromeFlameCorner id={`project-flame-${index}`} className="projectCorner" />
                <div className="projectArch" aria-hidden="true" />
                <span className="projectIndex">0{index + 1}</span>
                <h3 className="displayFont">{title}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ersetze
                  diesen Text spaeter durch Ziel, Prozess, Ergebnis und deine
                  Rolle im Projekt.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="gatewaySection mainContainer">
          <Link className="gatewayCard gothicArch chromeSurface" href="/about">
            <TribalChromeFlame id="gateway-flame" className="gatewayFlame" />
            <div>
              <p className="eyebrow">Visueller Link</p>
              <h2 className="gatewayTitle displayFont">Freizeit</h2>
            </div>
            <p>
              Motorrad, Tauchen und Pfadi bleiben auf ihrer eigenen Seite mit
              ihren bestehenden Animationen. Dieser Eingang fuehrt bewusst wie
              ein Seitenportal dorthin.
            </p>
            <span className="gatewayArrow chromeEdge" aria-hidden="true">
              Betreten
            </span>
          </Link>

          <Link className="aiCard chromeFrame" href="/ai-teil">
            <ChromeFlameCorner id="ai-flame" className="aiCorner" />
            <span className="eyebrow">Dritte Seite</span>
            <h2 className="displayFont">Ai-Teil</h2>
            <p>
              Blanko-Seite fuer spaetere KI-Inhalte, Experimente oder eine
              eigene Projektsektion.
            </p>
          </Link>
        </section>
      </main>

      <footer className="mainFooter">
        <div className="mainContainer footerInner">
          <span>Dario Schlegel</span>
          <span>Gothic chrome portfolio system</span>
        </div>
      </footer>

      <style>{`
        .gothicChromeMain {
          --stone-black: #020307;
          --stone-950: #05070c;
          --stone-900: #090d13;
          --stone-800: #111722;
          --stone-700: #19212d;
          --silver: #eef7ff;
          --blue-silver: #9fbad4;
          --muted: #9eaab5;
          --text: #edf4f8;
          --scroll-progress: 0;
          --chrome-shift: 0px;
          --chrome-light-x: 24%;
          --chrome-light-y: 18%;
          --chrome-intensity: 0.88;
          --flame-shift: 0px;
          position: relative;
          isolation: isolate;
          min-height: 100vh;
          overflow-x: clip;
          color: var(--text);
          font-family: Bahnschrift, 'Arial Narrow', 'Segoe UI', sans-serif;
          background:
            radial-gradient(circle at var(--chrome-light-x) var(--chrome-light-y), rgba(153, 188, 216, 0.18), transparent 31rem),
            radial-gradient(circle at 85% 6%, rgba(255, 255, 255, 0.08), transparent 24rem),
            linear-gradient(180deg, #020307 0%, #080b11 34%, #030407 100%);
        }

        .gothicChromeMain,
        .gothicChromeMain * {
          box-sizing: border-box;
        }

        .gothicChromeMain a {
          color: inherit;
          text-decoration: none;
        }

        .displayFont {
          font-family: 'Copperplate Gothic Bold', 'Trajan Pro', Georgia, serif;
        }

        .mainContainer {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .cathedralBackground {
          position: fixed;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
          background:
            linear-gradient(90deg, transparent 0 8%, rgba(221, 238, 249, 0.035) 8.1% 8.3%, transparent 8.5% 91.5%, rgba(221, 238, 249, 0.035) 91.7% 91.9%, transparent 92%),
            repeating-linear-gradient(90deg, transparent 0 82px, rgba(226, 241, 252, 0.036) 83px, transparent 85px),
            radial-gradient(ellipse at 50% -14%, rgba(174, 207, 232, 0.16), transparent 39%);
        }

        .cathedralBackground::before {
          content: '';
          position: absolute;
          inset: -8% 3% 0;
          background:
            radial-gradient(ellipse at 50% 0%, transparent 0 28%, rgba(226, 241, 252, 0.07) 28.4% 28.8%, transparent 29.2%),
            conic-gradient(from 180deg at 50% 11%, transparent 0 24deg, rgba(180, 207, 226, 0.12) 24.5deg 25.5deg, transparent 26deg 334deg, rgba(180, 207, 226, 0.12) 334.5deg 335.5deg, transparent 336deg);
          opacity: 0.9;
          transform: translateY(calc(var(--scroll-progress) * -38px));
        }

        .cathedralBackground::after {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.3;
          background-image:
            radial-gradient(rgba(255, 255, 255, 0.28) 0.65px, transparent 0.7px),
            radial-gradient(rgba(0, 0, 0, 0.9) 0.8px, transparent 0.9px);
          background-position: 0 0, 8px 10px;
          background-size: 18px 18px;
          mix-blend-mode: overlay;
        }

        .ribField {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, transparent 49.8%, rgba(236, 247, 255, 0.05) 50%, transparent 50.2%),
            repeating-linear-gradient(90deg, transparent 0 152px, rgba(236, 247, 255, 0.05) 153px, transparent 155px);
          mask-image: linear-gradient(180deg, black 0%, transparent 88%);
          transform: translateY(calc(var(--scroll-progress) * -18px));
        }

        .coldBloom {
          position: absolute;
          inset: auto -16vw -12vh;
          height: 48vh;
          background:
            radial-gradient(ellipse at 16% 78%, rgba(139, 177, 207, 0.12), transparent 35%),
            radial-gradient(ellipse at 82% 92%, rgba(255, 255, 255, 0.08), transparent 38%);
          filter: blur(18px);
        }

        .ambientFlame {
          position: absolute;
          width: min(1280px, 105vw);
          opacity: 0.17;
          filter: blur(0.2px) saturate(0.8);
          transform: translate3d(calc(var(--flame-shift) * -0.22), calc(var(--scroll-progress) * -38px), 0);
        }

        .ambientFlame.top {
          top: 80px;
          left: -180px;
        }

        .ambientFlame.lower {
          right: -220px;
          bottom: 18%;
          transform: translate3d(calc(var(--flame-shift) * 0.22), calc(var(--scroll-progress) * 48px), 0) scaleX(-1);
        }

        .siteHeader {
          position: sticky;
          top: 0;
          z-index: 20;
          backdrop-filter: blur(22px);
          background:
            radial-gradient(circle at var(--chrome-light-x) 0%, rgba(198, 221, 238, 0.12), transparent 28rem),
            linear-gradient(180deg, rgba(2, 3, 7, 0.93), rgba(7, 10, 16, 0.72));
          border-bottom: 1px solid rgba(223, 239, 250, 0.16);
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.38);
        }

        .headerInner {
          min-height: 84px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .logo {
          font-size: clamp(18px, 1.9vw, 28px);
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .navLink {
          position: relative;
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 18px;
          overflow: hidden;
          color: #c7d2dc;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.025);
          clip-path: polygon(14px 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 14px 100%, 0 50%);
          transition: transform 180ms ease, color 180ms ease, filter 180ms ease;
        }

        .navLink::before,
        .chromeButton::before,
        .gatewayArrow::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 30%, rgba(255, 255, 255, 0.38) 48%, transparent 65%);
          transform: translateX(calc((var(--scroll-progress) * 90px) - 105%)) skewX(-16deg);
          opacity: 0.64;
          mix-blend-mode: screen;
          pointer-events: none;
        }

        .navLink:hover,
        .navLink:focus-visible {
          color: #ffffff;
          transform: translateY(-2px);
          filter: brightness(1.16);
          outline: none;
        }

        .navLink:focus-visible,
        .chromeButton:focus-visible,
        .gatewayCard:focus-visible,
        .aiCard:focus-visible {
          outline: 2px solid rgba(238, 247, 255, 0.74);
          outline-offset: 5px;
        }

        .hero {
          min-height: calc(100vh - 84px);
          display: grid;
          grid-template-columns: minmax(0, 1.04fr) minmax(370px, 0.86fr);
          align-items: center;
          gap: clamp(42px, 6vw, 86px);
          padding: clamp(78px, 8vw, 130px) 0 clamp(56px, 8vw, 110px);
        }

        .heroCopy {
          position: relative;
          z-index: 3;
          max-width: 790px;
        }

        .heroFlame {
          position: absolute;
          z-index: -1;
          top: -98px;
          left: -150px;
          width: min(1040px, 102vw);
          opacity: 0.78;
          transform: translate3d(calc(var(--flame-shift) * 0.36), calc(var(--scroll-progress) * -18px), 0) rotate(-3deg);
        }

        .eyebrow {
          margin: 0 0 16px;
          color: #a8bed1;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }

        .heroTitle {
          margin: 0;
          font-size: clamp(54px, 8.7vw, 120px);
          line-height: 0.86;
          letter-spacing: -0.065em;
          text-transform: uppercase;
        }

        .heroTitle span {
          display: block;
        }

        .stoneText {
          color: #eef5fa;
          text-shadow:
            0 2px 0 rgba(255, 255, 255, 0.12),
            0 28px 82px rgba(0, 0, 0, 0.64);
        }

        .heroText {
          max-width: 660px;
          margin: 30px 0 0;
          color: #bbc6cf;
          font-size: clamp(18px, 1.7vw, 22px);
          line-height: 1.68;
        }

        .ctaFrame {
          position: relative;
          display: inline-flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 38px;
          padding: 10px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.015)),
            rgba(2, 3, 7, 0.72);
          clip-path: polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%);
        }

        .chromeButton {
          position: relative;
          isolation: isolate;
          min-height: 56px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 28px;
          overflow: hidden;
          color: #f5faff;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.17em;
          text-transform: uppercase;
          background:
            linear-gradient(180deg, rgba(1, 2, 5, 0.46), rgba(1, 2, 5, 0.78)),
            radial-gradient(circle at var(--chrome-light-x) var(--chrome-light-y), rgba(255, 255, 255, 0.78), transparent 17%),
            linear-gradient(112deg, #03070c 0%, #2d3b4b 10%, #f5fbff 18%, #7287a0 27%, #111720 38%, #ffffff 48%, #60758a 58%, #05070b 72%, #d9e8f4 84%, #263747 100%);
          background-size: 100% 100%, 280% 280%, 280% 280%;
          background-position: 0 0, var(--chrome-shift) 50%, var(--chrome-shift) 50%;
          clip-path: polygon(16px 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 16px 100%, 0 50%);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.42),
            inset 0 -20px 30px rgba(0, 0, 0, 0.4),
            0 20px 46px rgba(0, 0, 0, 0.34);
          transition: transform 190ms ease, filter 190ms ease, box-shadow 190ms ease;
        }

        .chromeButton:hover,
        .chromeButton:focus-visible {
          transform: translateY(-3px);
          filter: brightness(1.18);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.56),
            inset 0 -20px 30px rgba(0, 0, 0, 0.34),
            0 28px 66px rgba(0, 0, 0, 0.44);
        }

        .chromeButton:active {
          transform: translateY(1px);
        }

        .chromeButton.secondary {
          filter: saturate(0.82) brightness(0.9);
        }

        .heroSanctum {
          min-height: 600px;
          padding: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gothicArch {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          clip-path: polygon(50% 0, 90% 12%, 100% 32%, 100% 100%, 0 100%, 0 32%, 10% 12%);
        }

        .gothicArch::before {
          content: '';
          position: absolute;
          inset: 18px;
          z-index: -1;
          border: 1px solid rgba(231, 244, 252, 0.18);
          clip-path: polygon(50% 0, 87% 13%, 100% 34%, 100% 100%, 0 100%, 0 34%, 13% 13%);
          background:
            linear-gradient(90deg, transparent 49.7%, rgba(231, 243, 252, 0.21) 49.9% 50.1%, transparent 50.3%),
            radial-gradient(ellipse at 50% 16%, transparent 0 39%, rgba(213, 229, 241, 0.18) 39.4% 39.8%, transparent 40.2%);
          opacity: 0.9;
        }

        .chromeSurface {
          position: relative;
          border: 1px solid rgba(224, 241, 252, 0.2);
          background:
            radial-gradient(circle at var(--chrome-light-x) var(--chrome-light-y), rgba(255, 255, 255, 0.58), transparent 16rem),
            conic-gradient(from calc(130deg + (var(--scroll-progress) * 90deg)) at 50% 42%, #05070b, #8fa7bd, #f8fcff, #172536, #030406, #d6e5ef, #273a4c, #05070b),
            linear-gradient(116deg, #020306 0%, #111923 13%, #d8e6f1 19%, #415467 27%, #020306 41%, #f5fbff 48%, #7c91a4 54%, #111923 65%, #eef7ff 78%, #263747 100%);
          background-size: 190% 190%, 160% 160%, 300% 300%;
          background-position:
            var(--chrome-shift) 0,
            calc(var(--chrome-shift) * -0.55) 50%,
            var(--chrome-shift) 40%;
          background-blend-mode: screen, overlay, normal;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.28),
            inset 0 -52px 78px rgba(0, 0, 0, 0.52),
            0 42px 110px rgba(0, 0, 0, 0.5);
        }

        .chromeSurface::after {
          content: '';
          position: absolute;
          inset: -35% -20%;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 50% 35%, rgba(255, 255, 255, 0.54), transparent 12%),
            linear-gradient(105deg, transparent 30%, rgba(255, 255, 255, 0.34) 46%, transparent 62%);
          transform: translate3d(calc((var(--scroll-progress) * 116px) - 58px), calc(var(--scroll-progress) * -30px), 0) rotate(-7deg);
          opacity: 0.54;
          filter: brightness(var(--chrome-intensity));
          mix-blend-mode: screen;
        }

        .chromeFrame,
        .chromeEdge {
          position: relative;
          isolation: isolate;
        }

        .chromeFrame::after,
        .chromeEdge::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          padding: 1px;
          background:
            linear-gradient(118deg, rgba(255, 255, 255, 0.88), rgba(45, 61, 76, 0.22), rgba(180, 203, 220, 0.62), rgba(0, 0, 0, 0.25)),
            radial-gradient(circle at var(--chrome-light-x) var(--chrome-light-y), rgba(255, 255, 255, 0.72), transparent 29%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          pointer-events: none;
        }

        .chromeTextAccent {
          color: transparent;
          background:
            radial-gradient(circle at var(--chrome-light-x) var(--chrome-light-y), #ffffff, transparent 18%),
            linear-gradient(112deg, #66798a 0%, #f8fcff 13%, #344454 22%, #0a0d12 32%, #e5f2fb 46%, #7b8fa1 55%, #ffffff 68%, #263848 82%, #b7c8d5 100%);
          background-size: 250% 250%;
          background-position: var(--chrome-shift) 50%;
          -webkit-background-clip: text;
          background-clip: text;
          text-shadow: 0 22px 60px rgba(125, 173, 210, 0.14);
        }

        .chromeFlame {
          display: block;
          max-width: 100%;
          overflow: visible;
        }

        .flameParallax {
          transform: translate3d(calc(var(--flame-shift) * 0.16), 0, 0);
        }

        .flameBlade {
          transform-origin: center;
        }

        .flameMain {
          filter: saturate(1.05) contrast(1.07);
        }

        .flameLower {
          opacity: 0.96;
          transform: translateY(2px);
        }

        .flameShade {
          opacity: 0.92;
          mix-blend-mode: multiply;
          transform: translateX(calc(var(--flame-shift) * -0.05));
        }

        .flameCavity {
          fill: rgba(1, 2, 5, 0.96);
          opacity: 0.94;
          transform: translateX(calc(var(--flame-shift) * -0.08));
        }

        .flameCavity.small {
          opacity: 0.88;
        }

        .flameGlint {
          opacity: 0.56;
          filter: brightness(var(--chrome-intensity));
          stroke-dasharray: 220 640;
          stroke-dashoffset: calc(var(--scroll-progress) * -260);
          transform: translateX(calc(var(--flame-shift) * 0.28));
          mix-blend-mode: screen;
        }

        .flameGlint.delayed {
          opacity: 0.48;
          stroke-dashoffset: calc(140 - (var(--scroll-progress) * 220));
        }

        .flameEdge {
          opacity: 0.82;
          mix-blend-mode: screen;
        }

        .lancetCluster {
          position: absolute;
          inset: auto 36px 38px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          opacity: 0.66;
        }

        .lancetCluster span {
          height: 142px;
          background:
            linear-gradient(180deg, rgba(236, 247, 255, 0.3), transparent 14%),
            linear-gradient(90deg, transparent 48%, rgba(236, 247, 255, 0.24) 49% 51%, transparent 52%),
            linear-gradient(180deg, rgba(5, 8, 12, 0.12), rgba(255, 255, 255, 0.07));
          clip-path: polygon(50% 0, 100% 32%, 100% 100%, 0 100%, 0 32%);
          border: 1px solid rgba(233, 245, 252, 0.15);
        }

        .roseWindow {
          position: relative;
          width: min(330px, 72vw);
          aspect-ratio: 1;
          border-radius: 50%;
          background:
            radial-gradient(circle, transparent 0 14%, rgba(3, 4, 6, 0.88) 14.8% 21%, transparent 21.8% 30%, rgba(255, 255, 255, 0.25) 30.4% 31%, transparent 31.6%),
            repeating-conic-gradient(from calc(var(--scroll-progress) * 24deg), rgba(238, 247, 255, 0.43) 0 4deg, transparent 4deg 15deg),
            radial-gradient(circle at 50% 42%, rgba(192, 221, 244, 0.34), rgba(5, 8, 12, 0.88) 62%);
          border: 1px solid rgba(232, 244, 252, 0.34);
          box-shadow:
            inset 0 0 34px rgba(255, 255, 255, 0.16),
            inset 0 0 90px rgba(0, 0, 0, 0.78),
            0 0 80px rgba(118, 164, 197, 0.16);
        }

        .roseWindow span {
          position: absolute;
          inset: 13%;
          border-radius: 50%;
          border: 1px solid rgba(232, 244, 252, 0.22);
        }

        .roseWindow span:nth-child(2) {
          inset: 27%;
        }

        .roseWindow span:nth-child(3) {
          inset: 41%;
        }

        .roseWindow span:nth-child(4) {
          inset: 46%;
          background: rgba(255, 255, 255, 0.09);
        }

        .sanctumSeal {
          position: absolute;
          right: 34px;
          bottom: 34px;
          width: 146px;
          min-height: 146px;
          display: grid;
          place-items: center;
          text-align: center;
          border-radius: 50%;
          background:
            radial-gradient(circle at 34% 22%, rgba(255, 255, 255, 0.28), transparent 25%),
            linear-gradient(135deg, rgba(4, 6, 9, 0.9), rgba(39, 54, 68, 0.86));
          border: 1px solid rgba(229, 242, 252, 0.28);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.28), 0 22px 60px rgba(0, 0, 0, 0.48);
        }

        .sealNumber {
          display: block;
          font-size: 38px;
          font-weight: 900;
          line-height: 1;
        }

        .sealText {
          display: block;
          width: 88px;
          color: #b9c5ce;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .chromeFlameCorner {
          position: absolute;
          z-index: 3;
          width: 184px;
          pointer-events: none;
        }

        .cornerFlame {
          width: 100%;
          opacity: 0.92;
          transform: rotate(-12deg);
        }

        .topLeft {
          top: 24px;
          left: -54px;
        }

        .bottomRight {
          right: -54px;
          bottom: 22px;
          transform: scaleX(-1) rotate(4deg);
        }

        .panelCorner {
          right: -52px;
          top: 20px;
          width: 220px;
          opacity: 0.7;
        }

        .cardCorner {
          top: 18px;
          right: -58px;
          width: 200px;
          opacity: 0.72;
        }

        .projectCorner {
          top: 20px;
          left: -54px;
          width: 220px;
          opacity: 0.64;
          transform: rotate(4deg);
        }

        .aiCorner {
          right: -72px;
          bottom: 24px;
          width: 250px;
          opacity: 0.66;
        }

        .chromeFlameDivider {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - 48px));
          height: 118px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }

        .dividerFlame {
          width: min(480px, 42vw);
          opacity: 0.78;
        }

        .dividerFlame.left {
          transform: translateX(30px) translateY(-5px);
        }

        .dividerFlame.right {
          transform: translateX(-30px) translateY(7px) scaleX(-1);
        }

        .dividerSigil {
          width: 76px;
          height: 76px;
          flex: 0 0 auto;
          margin: 0 -12px;
          border: 1px solid rgba(238, 247, 255, 0.35);
          clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
          background:
            radial-gradient(circle at var(--chrome-light-x) 50%, rgba(255, 255, 255, 0.9), transparent 28%),
            linear-gradient(112deg, #05070b, #dceaf4, #263848, #f8fcff, #111923);
          background-size: 250% 250%;
          background-position: var(--chrome-shift) 50%;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.45),
            0 18px 44px rgba(0, 0, 0, 0.45);
        }

        .introSection {
          display: grid;
          grid-template-columns: 0.78fr 1.22fr;
          gap: clamp(34px, 6vw, 84px);
          align-items: start;
          padding: 86px 0;
        }

        .sectionTitle {
          margin: 0;
          color: #eef6fb;
          font-size: clamp(34px, 5vw, 72px);
          line-height: 0.94;
          letter-spacing: -0.045em;
          text-transform: uppercase;
        }

        .sectionHeading.centered {
          max-width: 820px;
          margin: 0 auto 48px;
          text-align: center;
        }

        .introPanel {
          padding: clamp(36px, 5vw, 62px);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.016)),
            radial-gradient(circle at var(--chrome-light-x) 0%, rgba(132, 172, 203, 0.14), transparent 24rem),
            rgba(5, 8, 13, 0.82);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.14),
            inset 0 -34px 60px rgba(0, 0, 0, 0.36),
            0 32px 82px rgba(0, 0, 0, 0.34);
        }

        .introPanel p {
          position: relative;
          z-index: 4;
          margin: 0;
          color: #c0cad2;
          font-size: clamp(18px, 1.7vw, 22px);
          line-height: 1.75;
        }

        .introPanel p + p {
          margin-top: 22px;
        }

        .focusSection {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          padding: 32px 0 92px;
        }

        .cathedralCard {
          min-height: 340px;
          padding: 34px 28px;
          overflow: hidden;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.018)),
            radial-gradient(circle at var(--chrome-light-x) var(--chrome-light-y), rgba(169, 204, 229, 0.13), transparent 18rem),
            #080c12;
          border: 1px solid rgba(226, 241, 252, 0.12);
          clip-path: polygon(50% 0, 100% 18%, 100% 100%, 0 100%, 0 18%);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 24px 70px rgba(0, 0, 0, 0.34);
          transition: transform 220ms ease, filter 220ms ease;
        }

        .cathedralCard::before {
          content: '';
          position: absolute;
          inset: 18px 18px auto;
          height: 122px;
          border: 1px solid rgba(232, 244, 252, 0.14);
          border-bottom: 0;
          clip-path: polygon(50% 0, 100% 32%, 100% 100%, 0 100%, 0 32%);
          opacity: 0.72;
        }

        .cathedralCard:hover {
          transform: translateY(-5px);
          filter: brightness(1.12);
        }

        .cardNumber {
          position: relative;
          z-index: 4;
          display: block;
          margin-bottom: 96px;
          font-size: 24px;
          font-weight: 900;
        }

        .cathedralCard h3,
        .projectCard h3,
        .aiCard h2 {
          position: relative;
          z-index: 4;
          margin: 0 0 16px;
          color: #f2f8fc;
          font-size: clamp(24px, 2.35vw, 35px);
          line-height: 1;
          letter-spacing: -0.03em;
          text-transform: uppercase;
        }

        .cathedralCard p,
        .projectCard p,
        .gatewayCard p,
        .aiCard p {
          position: relative;
          z-index: 4;
          margin: 0;
          color: #aeb9c2;
          font-size: 17px;
          line-height: 1.65;
        }

        .workSection {
          padding: 78px 0 92px;
        }

        .projectGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .projectCard {
          position: relative;
          min-height: 405px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
          border: 1px solid rgba(232, 244, 252, 0.16);
          transition: transform 220ms ease, filter 220ms ease;
        }

        .projectCard:hover {
          transform: translateY(-5px);
          filter: brightness(1.1);
        }

        .projectCard::before {
          content: '';
          position: absolute;
          inset: 1px;
          z-index: 0;
          background:
            linear-gradient(180deg, rgba(3, 4, 6, 0.08), rgba(3, 4, 6, 0.8)),
            repeating-linear-gradient(90deg, transparent 0 42px, rgba(255, 255, 255, 0.08) 43px, transparent 44px);
        }

        .projectArch {
          position: absolute;
          inset: 24px 24px auto;
          height: 185px;
          z-index: 1;
          border: 1px solid rgba(255, 255, 255, 0.22);
          clip-path: polygon(50% 0, 100% 30%, 100% 100%, 0 100%, 0 30%);
          opacity: 0.58;
        }

        .projectIndex {
          position: relative;
          z-index: 4;
          margin-bottom: auto;
          color: rgba(238, 247, 255, 0.76);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.24em;
        }

        .gatewaySection {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 22px;
          padding: 38px 0 112px;
        }

        .gatewayCard,
        .aiCard {
          min-height: 372px;
          padding: clamp(36px, 5vw, 62px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 220ms ease, filter 220ms ease;
        }

        .gatewayCard:hover,
        .aiCard:hover {
          transform: translateY(-6px);
          filter: brightness(1.14);
        }

        .gatewayFlame {
          position: absolute;
          right: -210px;
          top: -16px;
          width: min(760px, 78vw);
          opacity: 0.72;
          transform: translateX(calc(var(--flame-shift) * 0.26)) rotate(2deg);
        }

        .gatewayTitle {
          position: relative;
          z-index: 4;
          margin: 0;
          color: #f7fbff;
          font-size: clamp(58px, 10vw, 136px);
          line-height: 0.8;
          letter-spacing: -0.065em;
          text-transform: uppercase;
          text-shadow: 0 18px 60px rgba(0, 0, 0, 0.46);
        }

        .gatewayArrow {
          position: relative;
          z-index: 4;
          align-self: flex-start;
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          padding: 0 16px;
          overflow: hidden;
          color: #eef7ff;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          clip-path: polygon(12px 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 12px 100%, 0 50%);
        }

        .aiCard {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.018)),
            radial-gradient(circle at var(--chrome-light-x) var(--chrome-light-y), rgba(134, 177, 210, 0.15), transparent 20rem),
            #080c12;
          border: 1px solid rgba(232, 244, 252, 0.15);
          clip-path: polygon(50% 0, 100% 22%, 100% 100%, 0 100%, 0 22%);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 24px 70px rgba(0, 0, 0, 0.34);
        }

        .mainFooter {
          position: relative;
          z-index: 2;
          border-top: 1px solid rgba(232, 244, 252, 0.12);
          background:
            radial-gradient(circle at var(--chrome-light-x) 0%, rgba(188, 214, 232, 0.08), transparent 26rem),
            rgba(2, 3, 7, 0.86);
        }

        .footerInner {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          color: #8f9ba6;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        @media (max-width: 980px) {
          .mainContainer {
            width: min(100% - 36px, 760px);
          }

          .hero,
          .introSection,
          .gatewaySection {
            grid-template-columns: 1fr;
          }

          .hero {
            min-height: auto;
            padding-top: 72px;
          }

          .heroSanctum {
            min-height: 480px;
            max-width: 560px;
            width: 100%;
            margin: 0 auto;
          }

          .heroFlame {
            left: -130px;
            top: -78px;
            width: min(900px, 120vw);
          }

          .focusSection,
          .projectGrid {
            grid-template-columns: 1fr;
          }

          .cathedralCard,
          .projectCard {
            min-height: 286px;
          }

          .gatewayFlame {
            right: -260px;
            width: min(720px, 116vw);
          }
        }

        @media (max-width: 640px) {
          .mainContainer,
          .chromeFlameDivider {
            width: min(100% - 28px, 560px);
          }

          .headerInner {
            min-height: 72px;
          }

          .navLinks {
            gap: 6px;
          }

          .navLink {
            min-height: 36px;
            padding: 0 10px;
            font-size: 11px;
            letter-spacing: 0.08em;
          }

          .navLinks .navLink:nth-child(1),
          .navLinks .navLink:nth-child(2) {
            display: none;
          }

          .heroTitle {
            font-size: clamp(42px, 16vw, 72px);
          }

          .heroText,
          .introPanel p {
            font-size: 17px;
          }

          .heroFlame {
            top: -42px;
            left: -95px;
            width: 760px;
            opacity: 0.52;
          }

          .ctaFrame {
            width: 100%;
            display: flex;
          }

          .chromeButton {
            width: 100%;
            min-height: 52px;
          }

          .heroSanctum {
            min-height: 360px;
            padding: 28px;
          }

          .roseWindow {
            width: min(250px, 72vw);
          }

          .lancetCluster {
            display: none;
          }

          .sanctumSeal {
            right: 22px;
            bottom: 22px;
            width: 104px;
            min-height: 104px;
          }

          .sealNumber {
            font-size: 28px;
          }

          .sealText {
            width: 72px;
            font-size: 8px;
          }

          .chromeFlameCorner {
            width: 140px;
          }

          .panelCorner,
          .cardCorner,
          .projectCorner,
          .aiCorner {
            opacity: 0.42;
          }

          .dividerFlame {
            width: 42vw;
            opacity: 0.54;
          }

          .dividerSigil {
            width: 54px;
            height: 54px;
          }

          .introSection,
          .focusSection,
          .workSection,
          .gatewaySection {
            padding: 54px 0;
          }

          .gothicArch,
          .cathedralCard,
          .aiCard {
            clip-path: polygon(50% 0, 100% 16%, 100% 100%, 0 100%, 0 16%);
          }

          .gatewayCard,
          .aiCard,
          .introPanel {
            padding: 28px;
          }

          .gatewayFlame {
            right: -360px;
            top: 20px;
            width: 760px;
            opacity: 0.38;
          }

          .gatewayTitle {
            font-size: clamp(52px, 19vw, 86px);
          }

          .footerInner {
            min-height: 80px;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            letter-spacing: 0.1em;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gothicChromeMain,
          .gothicChromeMain *,
          .gothicChromeMain *::before,
          .gothicChromeMain *::after {
            transition: none !important;
            animation: none !important;
          }

          .gothicChromeMain .flameParallax,
          .gothicChromeMain .flameShade,
          .gothicChromeMain .flameCavity,
          .gothicChromeMain .flameGlint,
          .gothicChromeMain .chromeSurface::after,
          .gothicChromeMain .cathedralBackground::before,
          .gothicChromeMain .ribField {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
