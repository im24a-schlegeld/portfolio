'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import localFont from 'next/font/local';
import { New_Rocker, Racing_Sans_One } from 'next/font/google';
import SwordModel from './SwordModel';
import { navigationItems } from '../../data/portfolio';

const racingSansOne = Racing_Sans_One({
  subsets: ['latin'],
  weight: '400',
});

const wavy = localFont({
  src: './fonts/wavy/Wavy.ttf',
  display: 'swap',
});

const newRocker = New_Rocker({
  subsets: ['latin'],
  weight: '400',
});

const FREIZEIT_COPY = {
  pageTitle: 'Freizeit',
  bike: {
    title: 'Motorradfahren',
    text: 'Seit 2 Jahren fahre ich Motorrad. Mit 16 habe ich auf einer 125er angefangen und bin nun diesen Winter auf eine gedrosselte 650er aufgestiegen.',
  },
  pfadi: {
    title: 'Pfadi',
    text: 'Ich bin seit 10 Jahren in der Pfadi. Seit 4 Jahren bin ich als Leiter tätig. Ich leite samstags eine Aktivität und leite Lager mit. Diesen Frühling habe ich den Aufbau(Kurs) bestanden.',
    shortText: 'Ich bin seit 10 Jahren in der Pfadi. Seit 4 Jahren bin ich als Leiter tätig.',
  },
  dive: {
    title: 'Tauchen',
    text: 'Vor 3 Jahren habe ich mit dem Tauchen angefangen. Mittlerweile habe ich 41 Tauchgänge, Advanced Open Water und Nitrox. Mein speziellster Tauchgang war mit einem Walhai in Indonesien.',
  },
};

function FreizeitHeader() {
  return (
    <header className="header">
      <div className="container headerInner">
        <Link className="logo" href="/">
          Dario Schlegel
        </Link>

        <nav className="nav" aria-label="Seitennavigation">
          {navigationItems.map((item) => (
            <Link
              className={`navLink ${item.key === 'about' ? 'active' : ''}`}
              href={item.href}
              key={item.key}
              aria-current={item.key === 'about' ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function PageIntro() {
  return (
    <div className="section">
      <p className="kicker">Persönliche Interessen</p>
      <h1 className="title">{FREIZEIT_COPY.pageTitle}</h1>
    </div>
  );
}

function PfadiSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const show = () => setIsVisible(true);

    if (!('IntersectionObserver' in window)) {
      const timer = window.setTimeout(show, 120);
      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        show();
        observer.disconnect();
      },
      { threshold: 0.12 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`freizeitPanel pfadiPanel ${isVisible ? 'isVisible' : ''}`}
    >
      <div className="container pfadiPanelInner">
        <PageIntro />

        <div className="pfadiStage">
          <div className="swordModelWrap">
            <a
              className="swordLink"
              href="https://www.flamberg.ch/"
              aria-label="Flamberg Website öffnen"
            >
              <SwordModel
                className="swordModel"
                mediaQuery="(min-width: 768px)"
              />
            </a>
          </div>

          <div className="pfadiCopy">
            <h2 className={`pfadiTitle ${newRocker.className}`}>
              {FREIZEIT_COPY.pfadi.title}
            </h2>
            <p className={`pfadiText ${newRocker.className}`}>
              {FREIZEIT_COPY.pfadi.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BikeScene({
  panelRef,
  sceneRef,
  sceneHeight,
  bikegroupRef,
  nakedbikeRef,
  backwheelRef,
  frontwheelRef,
  shadingbackRef,
  shadingfrontRef,
  bikeTitleRef,
  bikeTextRef,
}) {
  return (
    <section ref={panelRef} className="freizeitPanel bikePanel">
      <div className="container bikePanelInner">
        <div
          ref={sceneRef}
          className="bikeScene"
          style={{ height: `${sceneHeight}px` }}
        >
          <div className="bikeStickyLayer">
            <div className="bikegroup" ref={bikegroupRef}>
              <img
                ref={nakedbikeRef}
                src="/cbnaked1.png"
                alt="Motorrad"
                className="nakedbike"
                width="400"
              />
              <img
                ref={backwheelRef}
                src="/cbbackwheel.png"
                alt="Hinterrad"
                className="backwheel"
                width="93"
              />
              <img
                ref={frontwheelRef}
                src="/cbfrontwheel2.png"
                alt="Vorderrad"
                className="frontwheel"
                width="93"
              />
              <img
                ref={shadingbackRef}
                src="/wheelshading1.png"
                alt=""
                className="shadingback"
                width="93"
              />
              <img
                ref={shadingfrontRef}
                src="/wheelshading2.png"
                alt=""
                className="shadingfront"
                width="93"
              />
              <h2
                ref={bikeTitleRef}
                className={`bikeTitle ${racingSansOne.className}`}
              >
                {FREIZEIT_COPY.bike.title}
              </h2>
              <p
                ref={bikeTextRef}
                className={`bikeText ${racingSansOne.className}`}
              >
                {FREIZEIT_COPY.bike.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiveSection({ panelRef }) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section) return undefined;

    if (!('IntersectionObserver' in window)) {
      const frame = requestAnimationFrame(() => {
        setIsVisible(true);
        if (video) void video.play().catch(() => {});
      });
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.28) {
          setIsVisible(true);
          if (video) void video.play().catch(() => {});
          return;
        }

        if (video) video.pause();
      },
      { threshold: [0, 0.28, 0.55], rootMargin: '0px 0px -6% 0px' },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      if (video) video.pause();
    };
  }, []);

  return (
    <section ref={panelRef} className="freizeitPanel divePanel">
      <div className="container divePanelInner">
        <div
          ref={sectionRef}
          className={`diveSection ${isVisible ? 'isVisible' : ''}`}
        >
          <video
            ref={videoRef}
            className="whalesharkVideo"
            muted
            loop
            playsInline
            preload="none"
          >
            <source
              src="/whaleshark.mp4"
              type="video/mp4"
              media="(min-width: 768px)"
            />
          </video>
          <div className="diveCopy">
            <h2 className={`diveTitle ${wavy.className}`}>
              {FREIZEIT_COPY.dive.title}
            </h2>
            <p className={`diveText ${wavy.className}`}>
              {FREIZEIT_COPY.dive.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResponsiveFreizeitSections() {
  const firstFeatureRef = useRef(null);
  const diveFeatureRef = useRef(null);
  const videoRef = useRef(null);
  const [firstVisible, setFirstVisible] = useState(false);
  const [diveVisible, setDiveVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!('IntersectionObserver' in window)) {
      const frame = requestAnimationFrame(() => {
        setFirstVisible(true);
        setDiveVisible(true);
        if (video) void video.play().catch(() => {});
      });
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === firstFeatureRef.current && entry.isIntersecting) {
            setFirstVisible(true);
            observer.unobserve(entry.target);
          }

          if (entry.target === diveFeatureRef.current) {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.24) {
              setDiveVisible(true);
              if (video) void video.play().catch(() => {});
            } else if (video) {
              video.pause();
            }
          }
        });
      },
      { threshold: [0, 0.16, 0.24, 0.5], rootMargin: '0px 0px -5% 0px' },
    );

    if (firstFeatureRef.current) observer.observe(firstFeatureRef.current);
    if (diveFeatureRef.current) observer.observe(diveFeatureRef.current);

    return () => {
      observer.disconnect();
      if (video) video.pause();
    };
  }, []);

  return (
    <section className="responsiveFreizeitSections">
      <article className="responsivePanel responsivePfadiPanel">
        <div className="container responsivePanelInner">
          <PageIntro />
          <div
            ref={firstFeatureRef}
            className={`responsiveFeature responsiveFirstFeature ${firstVisible ? 'isVisible' : ''}`}
          >
            <div className="responsiveVisual pfadiVisual">
              <SwordModel
                className="responsiveSwordModel"
                mediaQuery="(max-width: 767px)"
              />
            </div>
            <div className="responsiveCopy">
              <h2 className={`responsiveTitle ${newRocker.className}`}>
                {FREIZEIT_COPY.pfadi.title}
              </h2>
              <p className={`responsiveText ${newRocker.className}`}>
                {FREIZEIT_COPY.pfadi.shortText}
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="responsivePanel responsiveBikePanel">
        <div className="container responsivePanelInner">
          <div className="responsiveFeature">
            <div className="responsiveVisual bikeVisual">
              <img
                src="/cbnaked1.png"
                alt="Motorrad"
                className="responsiveBikeFrame"
              />
              <img
                src="/cbbackwheel.png"
                alt=""
                className="responsiveBikeWheel responsiveBackWheel"
              />
              <img
                src="/cbfrontwheel2.png"
                alt=""
                className="responsiveBikeWheel responsiveFrontWheel"
              />
              <img
                src="/wheelshading1.png"
                alt=""
                className="responsiveBikeShading responsiveBackShading"
              />
              <img
                src="/wheelshading2.png"
                alt=""
                className="responsiveBikeShading responsiveFrontShading"
              />
            </div>
            <div className="responsiveCopy">
              <h2 className={`responsiveTitle bikeResponsiveTitle ${racingSansOne.className}`}>
                {FREIZEIT_COPY.bike.title}
              </h2>
              <p className={`responsiveText bikeResponsiveText ${racingSansOne.className}`}>
                {FREIZEIT_COPY.bike.text}
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="responsivePanel responsiveDivePanel">
        <div className="container responsivePanelInner">
          <div
            ref={diveFeatureRef}
            className={`responsiveFeature responsiveDiveFeature ${diveVisible ? 'isVisible' : ''}`}
          >
            <video
              ref={videoRef}
              className="responsiveWhaleshark"
              muted
              loop
              playsInline
              preload="none"
            >
              <source
                src="/whaleshark.mp4"
                type="video/mp4"
                media="(max-width: 767px)"
              />
            </video>
            <div className="responsiveCopy">
              <h2 className={`responsiveTitle diveResponsiveTitle ${wavy.className}`}>
                {FREIZEIT_COPY.dive.title}
              </h2>
              <p className={`responsiveText diveResponsiveText ${wavy.className}`}>
                {FREIZEIT_COPY.dive.text}
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

function FreizeitFooter() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div>
          <p className="footerName">Dario Schlegel</p>
          <p className="footerText">Portfolio und Freizeit</p>
        </div>

        <nav className="footerLinks" aria-label="Footer Navigation">
          <Link className="footerLink" href="/">
            Portfolio
          </Link>
          <Link className="footerLink" href="/about">
            Freizeit
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default function About() {
  const bikePanelRef = useRef(null);
  const divePanelRef = useRef(null);
  const sceneRef = useRef(null);
  const bikegroupRef = useRef(null);
  const nakedbikeRef = useRef(null);
  const backwheelRef = useRef(null);
  const frontwheelRef = useRef(null);
  const shadingbackRef = useRef(null);
  const shadingfrontRef = useRef(null);
  const bikeTitleRef = useRef(null);
  const bikeTextRef = useRef(null);

  const [sceneHeight, setSceneHeight] = useState(1800);

  useEffect(() => {
    let animationFrameId;
    let isMobileViewport = false;
    let travelDistance = 900;
    let panelCut = 0;
    let headerHeight = 70;
    let bikeStartTop = 70;
    let firstCutFastStartTop = 70;
    let firstCutFastTravel = 1;

    const startOffsetX = -700;
    const endOffsetX = 475;
    const totalRotation = 1080;

    const clamp01 = (value) => Math.max(0, Math.min(1, value));

    const getHeaderHeight = () => (
      document.querySelector('.header')?.getBoundingClientRect().height ?? 70
    );

    const setCutBoost = (panel, boost) => {
      panel?.style.setProperty('--cut-boost', `${Math.max(0, boost)}px`);
    };

    const applyBikeProgress = (progress, isActive) => {
      const moveX = isMobileViewport
        ? 0
        : startOffsetX + progress * (endOffsetX - startOffsetX);
      const rotation = isMobileViewport ? 0 : progress * totalRotation;

      if (bikegroupRef.current) {
        bikegroupRef.current.style.opacity = isActive ? '1' : '0';
        bikegroupRef.current.style.transform = `translate3d(${moveX}px, 0, 0)`;
      }

      if (backwheelRef.current) {
        backwheelRef.current.style.transform = `rotate(${rotation}deg)`;
      }

      if (frontwheelRef.current) {
        frontwheelRef.current.style.transform = `rotate(${rotation}deg)`;
      }
    };

    const clearLegacyChildTransforms = () => {
      [
        nakedbikeRef.current,
        shadingbackRef.current,
        shadingfrontRef.current,
        bikeTitleRef.current,
        bikeTextRef.current,
      ].forEach((element) => {
        if (element) element.style.transform = 'none';
      });
    };

    const updateMeasurements = () => {
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      isMobileViewport = viewportWidth < 768;
      headerHeight = getHeaderHeight();
      panelCut = viewportWidth * 0.0875;
      travelDistance = Math.max(860, viewportHeight * 0.92);

      const stickyTop = Math.max(headerHeight, viewportHeight / 2 - 260);

      // The first accelerated color sweep finishes exactly when the bike
      // sticky layer reaches its resting position. At that point every visible
      // pixel below the fixed header is dark, so the bike animation can start
      // without a dead black gap before it.
      bikeStartTop = stickyTop;
      firstCutFastTravel = Math.max(1, (bikeStartTop - headerHeight) / 2);
      firstCutFastStartTop = bikeStartTop + firstCutFastTravel;

      // When bike progress reaches 1, the blue diagonal is exactly one cut
      // height below the viewport. It therefore cannot appear before the bike
      // animation has finished, but starts immediately on the next scroll.
      setSceneHeight(
        isMobileViewport
          ? 720
          : Math.round(
            travelDistance + viewportHeight + panelCut - bikeStartTop,
          ),
      );

      clearLegacyChildTransforms();
    };

    const updateFrame = () => {
      animationFrameId = undefined;

      const pfadiPanel = document.querySelector('.pfadiPanel');
      const bikePanel = bikePanelRef.current;
      const scene = sceneRef.current;

      if (isMobileViewport || !bikePanel || !scene) {
        setCutBoost(pfadiPanel, 0);
        setCutBoost(bikePanel, 0);
        applyBikeProgress(0, false);
        return;
      }

      const pfadiRect = pfadiPanel?.getBoundingClientRect();
      const bikeRect = bikePanel.getBoundingClientRect();
      const sceneRect = scene.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Beige -> dark: normal diagonal scroll first. Once the outgoing content
      // is near the top, the edge gains two extra pixels per scroll pixel
      // (3x visual speed) and finishes exactly at bikeStartTop.
      const firstCutBoost = pfadiRect
        ? Math.min(
          firstCutFastTravel,
          Math.max(0, firstCutFastStartTop - pfadiRect.bottom),
        ) * 2
        : 0;
      setCutBoost(pfadiPanel, firstCutBoost);

      const fullDark = sceneRect.top <= bikeStartTop + 0.5;
      const progress = fullDark
        ? clamp01((bikeStartTop - sceneRect.top) / travelDistance)
        : 0;

      applyBikeProgress(progress, fullDark);

      // Dark -> blue: completely locked until bike progress is finished.
      // Afterwards the diagonal itself crosses the viewport at ~3x speed.
      let secondCutBoost = 0;
      if (progress >= 0.9999) {
        const transitionTravel = Math.max(1, viewportHeight / 3);
        const localScroll = Math.max(
          0,
          Math.min(
            transitionTravel,
            viewportHeight + panelCut - bikeRect.bottom,
          ),
        );
        secondCutBoost = localScroll * 2;
      }
      setCutBoost(bikePanel, secondCutBoost);
    };

    const requestUpdate = () => {
      if (animationFrameId) return;
      animationFrameId = requestAnimationFrame(updateFrame);
    };

    const handleScroll = () => {
      requestUpdate();
    };

    const handleResize = () => {
      updateMeasurements();
      requestUpdate();
      requestAnimationFrame(requestUpdate);
    };

    updateMeasurements();
    requestUpdate();
    requestAnimationFrame(requestUpdate);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="page">
      <FreizeitHeader />

      <main className="freizeitMain">
        <div className="desktopFreizeit">
          <PfadiSection />

          <BikeScene
            panelRef={bikePanelRef}
            sceneRef={sceneRef}
            sceneHeight={sceneHeight}
            bikegroupRef={bikegroupRef}
            nakedbikeRef={nakedbikeRef}
            backwheelRef={backwheelRef}
            frontwheelRef={frontwheelRef}
            shadingbackRef={shadingbackRef}
            shadingfrontRef={shadingfrontRef}
            bikeTitleRef={bikeTitleRef}
            bikeTextRef={bikeTextRef}
          />

          <DiveSection panelRef={divePanelRef} />
        </div>

        <ResponsiveFreizeitSections />
      </main>

      <FreizeitFooter />

      <style>{`
        :root {
          --freizeit-beige: #bb9d75;
          --freizeit-dark: #0c0d0f;
          --freizeit-blue: #b9ddeb;
          --freizeit-beige-ink: #241d17;
          --freizeit-light: #f7f7f4;
          --freizeit-blue-ink: #173248;
          --header-bg: #090a0b;
          --header-border: #232426;
          --header-active: #ece4dd;
          --panel-cut: 8.75vw;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          overflow-x: clip;
        }

        body {
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          background: var(--freizeit-beige);
          color: var(--freizeit-beige-ink);
          scrollbar-width: none;
        }

        body::-webkit-scrollbar:horizontal {
          display: none;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .page {
          min-height: 100vh;
          background: var(--freizeit-beige);
        }

        .freizeitMain {
          position: relative;
          isolation: isolate;
        }

        .container {
          width: auto;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid var(--header-border);
          background: var(--header-bg);
        }

        .headerInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }

        .logo {
          font-weight: 700;
          font-size: 18px;
          color: #f0f0f0;
          letter-spacing: 0.04em;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .navLink {
          display: inline-flex;
          align-items: center;
          min-height: 36px;
          padding: 0 14px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          color: #a7a7a7;
          letter-spacing: 0.04em;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }

        .navLink:hover,
        .navLink:focus-visible {
          border-color: rgba(255, 255, 255, 0.24);
          color: #ffffff;
          outline: none;
        }

        .active {
          border-color: rgba(236, 228, 221, 0.58);
          background: var(--header-active);
          color: #101010;
        }

        .freizeitPanel,
        .responsivePanel {
          position: relative;
        }

        .pfadiPanel {
          z-index: 1;
          min-height: calc(100vh + var(--panel-cut));
          background: var(--freizeit-beige);
          color: var(--freizeit-beige-ink);
        }

        .bikePanel {
          z-index: 2;
          background: var(--freizeit-dark);
          color: var(--freizeit-light);
        }

        .divePanel {
          z-index: 3;
          min-height: calc(100vh - 70px);
          background: var(--freizeit-blue);
          color: var(--freizeit-blue-ink);
        }

        /* The incoming color is drawn inside the outgoing panel. The bottom
           of the wedge always touches the next solid panel, so there is no
           horizontal seam between the diagonal and the following color. */
        .pfadiPanel::after,
        .bikePanel::after {
          content: '';
          position: absolute;
          z-index: 2;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: calc(var(--panel-cut) + var(--cut-boost, 0px) + 3px);
          pointer-events: none;
        }

        .pfadiPanel::after {
          background: var(--freizeit-dark);
          clip-path: polygon(
            0 var(--panel-cut),
            100% 0,
            100% 100%,
            0 100%
          );
        }

        .bikePanel::after {
          background: var(--freizeit-blue);
          clip-path: polygon(
            0 0,
            100% var(--panel-cut),
            100% 100%,
            0 100%
          );
        }

        .section {
          padding: 34px 0 8px;
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 1.2s ease, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .pfadiPanel.isVisible .section {
          opacity: 1;
          transform: translateY(0);
        }

        .kicker {
          margin: 0 0 10px;
          color: rgba(36, 29, 23, 0.68);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .title {
          margin: 0;
          font-size: 40px;
          letter-spacing: -0.02em;
          color: var(--freizeit-beige-ink);
        }

        .pfadiPanelInner {
          position: relative;
          z-index: 1;
          min-height: calc(100vh + var(--panel-cut));
        }

        .pfadiStage {
          position: relative;
          min-height: 650px;
        }

        .swordModelWrap {
          position: absolute;
          left: -40px;
          top: 24px;
          width: 610px;
          height: 350px;
          overflow: visible;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 1.1s ease 0.12s, transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.12s;
        }

        .swordLink {
          display: block;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .swordLink:focus-visible {
          outline: 2px solid rgba(36, 29, 23, 0.65);
          outline-offset: 10px;
        }

        .swordModel,
        .responsiveSwordModel {
          position: relative;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .swordModel {
          filter: drop-shadow(0 10px 18px rgba(30, 22, 15, 0.17));
        }

        .swordModel::before,
        .responsiveSwordModel::before {
          content: '';
          position: absolute;
          z-index: 2;
          top: 50%;
          left: 50%;
          width: 22px;
          height: 22px;
          margin: -11px 0 0 -11px;
          border: 2px solid rgba(36, 29, 23, 0.2);
          border-top-color: #241d17;
          border-radius: 50%;
          animation: swordLoaderSpin 0.7s linear infinite;
          transition: opacity 0.18s ease;
        }

        .swordModel[data-model-loaded='true']::before,
        .responsiveSwordModel[data-model-loaded='true']::before,
        .swordModel[data-model-error='true']::before,
        .responsiveSwordModel[data-model-error='true']::before {
          opacity: 0;
          animation: none;
        }

        @keyframes swordLoaderSpin {
          to {
            transform: rotate(360deg);
          }
        }

        .swordCanvas {
          display: block;
          width: 100%;
          height: 100%;
        }

        .pfadiCopy {
          position: absolute;
          left: 560px;
          top: 120px;
          width: 620px;
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 1.1s ease 0.2s, transform 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
        }

        .pfadiPanel.isVisible .swordModelWrap,
        .pfadiPanel.isVisible .pfadiCopy {
          opacity: 1;
          transform: translateY(0);
        }

        .pfadiTitle {
          margin: 0 0 12px;
          font-size: 22px;
          font-weight: 400;
          color: #2b2119;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .pfadiText {
          margin: 0;
          width: min(700px, calc(100vw - 720px));
          max-width: 700px;
          font-size: 30px;
          font-weight: 400;
          line-height: 1.35;
          color: #31251c;
          overflow-wrap: break-word;
        }

        .bikePanelInner {
          position: relative;
          z-index: 1;
        }

        .bikeScene {
          position: relative;
        }

        .bikeStickyLayer {
          position: sticky;
          top: max(70px, calc(50vh - 260px));
          height: 520px;
          overflow: hidden;
        }

        .bikegroup {
          position: relative;
          width: 500px;
          height: 520px;
          opacity: 0;
          left: 400px;
          top: -130px;
          transition: opacity 0.18s ease;
          will-change: transform, opacity;
        }

        .nakedbike {
          position: absolute;
          top: 120px;
          left: -142px;
          z-index: 3;
        }

        .backwheel {
          position: absolute;
          top: 410px;
          left: -90px;
          z-index: 1;
          will-change: transform;
          transform-origin: center center;
        }

        .frontwheel {
          position: absolute;
          top: 413px;
          left: 111px;
          z-index: 1;
          will-change: transform;
          transform-origin: center center;
        }

        .shadingback {
          position: absolute;
          top: 410px;
          left: -90px;
          z-index: 2;
          pointer-events: none;
        }

        .shadingfront {
          position: absolute;
          top: 413px;
          left: 111px;
          z-index: 2;
          pointer-events: none;
        }

        .bikeTitle {
          position: absolute;
          left: -850px;
          top: 320px;
          width: 800px;
          margin: 0;
          font-size: 22px;
          font-weight: 400;
          color: #ffffff;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .bikeText {
          position: absolute;
          left: -850px;
          top: 365px;
          width: 750px;
          margin: 0;
          font-style: normal;
          font-size: 32px;
          font-weight: 400;
          color: #ffffff;
        }
.divePanelInner {
          position: relative;
          z-index: 1;
          min-height: calc(100vh - 70px);
          display: flex;
          align-items: center;
        }

        .diveSection { width: min(1180px, 100%); margin: 0 auto; display: flex; justify-content: center; align-items: center; flex-wrap: nowrap; gap: clamp(40px, 5vw, 72px); padding: 0; }

        .diveSection .whalesharkVideo,
        .diveSection .diveCopy {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1.1s ease, transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .diveSection .diveCopy {
          transition-delay: 0.1s;
        }

        .diveSection.isVisible .whalesharkVideo,
        .diveSection.isVisible .diveCopy {
          opacity: 1;
          transform: translateY(0);
        }

        .diveCopy {
          flex: 1 1 420px;
          min-width: 0;
          max-width: 800px;
        }

        .whalesharkVideo {
          width: min(500px, 100%);
          flex: 0 1 500px;
          display: block;
          border-radius: 40px;
        }

        .diveTitle {
          margin: 0 0 12px;
          width: 100%;
          max-width: 800px;
          font-size: 22px;
          font-weight: 400;
          color: var(--freizeit-blue-ink);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .diveText {
          margin: 0;
          width: 100%;
          max-width: 640px;
          font-style: normal;
          font-size: 26px;
          font-weight: 400;
          color: var(--freizeit-blue-ink);
        }

        .responsiveFreizeitSections {
          display: none;
        }

        .footer {
          position: relative;
          z-index: 4;
          border-top: 1px solid rgba(23, 50, 72, 0.16);
          background: var(--freizeit-blue);
          padding: 26px 0 32px;
        }

        .footerInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .footerName {
          margin: 0;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--freizeit-blue-ink);
        }

        .footerText {
          margin: 6px 0 0;
          font-size: 13px;
          color: rgba(23, 50, 72, 0.72);
        }

        .footerLinks {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 13px;
          font-weight: 600;
          color: rgba(23, 50, 72, 0.78);
        }

        .footerLink {
          transition: color 0.2s ease;
        }

        .footerLink:hover {
          color: #0f2739;
        }

        @media (prefers-reduced-motion: reduce) {
          .section,
          .swordModelWrap,
          .pfadiCopy,
          .diveSection .whalesharkVideo,
          .diveSection .diveCopy,
          .responsiveFirstFeature,
          .responsiveDiveFeature {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }

        @media (max-width: 980px) and (min-width: 768px) {
          .pfadiCopy {
            left: 48%;
            width: 48%;
          }

          .pfadiText {
            width: 100%;
            font-size: 25px;
          }

          .swordModelWrap {
            left: -90px;
            width: 54%;
          }
        }

        @media (max-width: 767px) {
          :root {
            --panel-cut: 8.75vw;
          }

          html,
          body {
            overflow-x: hidden;
          }

          .container {
            width: 100%;
            max-width: 100%;
          }

          .headerInner {
            height: 64px;
          }

          .logo {
            display: none;
          }

          .nav {
            width: 100%;
            justify-content: center;
            gap: 6px;
          }

          .navLink {
            min-height: 34px;
            padding: 0 10px;
            font-size: 11px;
          }

          .desktopFreizeit {
            display: none;
          }

          .responsiveFreizeitSections {
            display: block;
          }

          .responsivePanel {
            min-height: 100vh;
          }

          .responsivePfadiPanel {
            z-index: 1;
            min-height: calc(100vh + var(--panel-cut));
            background: var(--freizeit-beige);
            color: var(--freizeit-beige-ink);
          }

          .responsiveBikePanel {
            z-index: 2;
            background: var(--freizeit-dark);
            color: #ffffff;
          }

          .responsiveBikePanel::before {
            content: '';
            position: absolute;
            top: calc(-1 * var(--panel-cut) - 3px);
            left: 0;
            width: 100%;
            height: calc(var(--panel-cut) + 6px);
            background: var(--freizeit-dark);
            clip-path: polygon(0 100%, 100% 0, 100% 100%);
          }

          .responsiveDivePanel {
            z-index: 3;
            background: var(--freizeit-blue);
            color: var(--freizeit-blue-ink);
          }

          .responsiveDivePanel::before {
            content: '';
            position: absolute;
            top: calc(-1 * var(--panel-cut) - 3px);
            left: 0;
            width: 100%;
            height: calc(var(--panel-cut) + 6px);
            background: var(--freizeit-blue);
            clip-path: polygon(0 0, 0 100%, 100% 100%);
          }

          .responsivePanelInner {
            position: relative;
            z-index: 1;
            min-height: 100vh;
            padding-top: 24px;
            padding-bottom: 48px;
          }

          .responsivePfadiPanel .responsivePanelInner {
            min-height: calc(100vh + var(--panel-cut));
          }

          .section {
            padding: 8px 0 18px;
            opacity: 1;
            transform: none;
          }

          .title {
            font-size: 32px;
          }

          .responsiveFeature {
            width: 100%;
            max-width: 760px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .responsiveFirstFeature,
          .responsiveDiveFeature {
            opacity: 0;
            transform: translateY(26px);
            transition: opacity 0.95s ease, transform 0.95s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .responsiveFirstFeature.isVisible,
          .responsiveDiveFeature.isVisible {
            opacity: 1;
            transform: translateY(0);
          }

          .responsiveVisual,
          .responsiveCopy {
            position: relative;
            width: 100%;
          }

          .responsiveTitle {
            margin: 0 0 12px;
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0.04em;
            text-transform: uppercase;
          }

          .responsiveText {
            margin: 0;
            font-size: 17px;
            font-weight: 400;
            line-height: 1.45;
          }

          .pfadiVisual {
            height: 150px;
            display: flex;
            align-items: center;
          }

          .responsiveSwordModel {
            width: min(320px, 100%);
            height: 150px;
            filter: drop-shadow(0 8px 15px rgba(30, 22, 15, 0.16));
          }

          .bikeVisual {
            height: 290px;
            max-width: 320px;
            margin: 12vh auto 0;
          }

          .responsiveBikeFrame {
            position: absolute;
            width: 280px;
            height: auto;
            top: 0;
            left: 50%;
            transform: translateX(-50%) translateX(-37px);
            z-index: 3;
          }

          .responsiveBikeWheel {
            position: absolute;
            width: 65px;
            height: auto;
            z-index: 1;
          }

          .responsiveBackWheel {
            top: 203px;
            left: calc(50% - 141px);
          }

          .responsiveFrontWheel {
            top: 205px;
            left: 50%;
          }

          .responsiveBikeShading {
            position: absolute;
            width: 65px;
            height: auto;
            z-index: 2;
            pointer-events: none;
          }

          .responsiveBackShading {
            top: 203px;
            left: calc(50% - 141px);
          }

          .responsiveFrontShading {
            top: 205px;
            left: 50%;
          }

          .responsiveBikePanel .responsiveCopy {
            padding-bottom: 15vh;
          }

          .bikeResponsiveTitle,
          .bikeResponsiveText {
            color: #ffffff;
          }

          .responsiveDivePanel .responsivePanelInner {
            display: flex;
            align-items: center;
          }

          .responsiveWhaleshark {
            width: min(500px, 100%);
            display: block;
            border-radius: 32px;
          }

          .diveResponsiveTitle,
          .diveResponsiveText {
            color: var(--freizeit-blue-ink);
          }

          .footer {
            padding: 24px 0 28px;
          }

          .footerInner {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
