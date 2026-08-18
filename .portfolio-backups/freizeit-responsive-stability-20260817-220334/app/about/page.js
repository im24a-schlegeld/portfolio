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

function DesktopDiveContent({ videoMotionRef, copyMotionRef }) {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return undefined;

    if (!('IntersectionObserver' in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: [0, 0.2, 0.45, 0.75] },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <div ref={sectionRef} className="desktopDiveContent">
      <div className="container desktopDiveInner">
        <div ref={videoMotionRef} className="diveVideoMotion">
          <video
            ref={videoRef}
            className="whalesharkVideo"
            muted
            loop
            playsInline
            preload="none"
          >
            <source src="/whaleshark.mp4" type="video/mp4" />
          </video>
        </div>
        <div ref={copyMotionRef} className="diveCopy">
          <h2 className={`diveTitle ${wavy.className}`}>
            {FREIZEIT_COPY.dive.title}
          </h2>
          <p className={`diveText ${wavy.className}`}>
            {FREIZEIT_COPY.dive.text}
          </p>
        </div>
      </div>
    </div>
  );
}

function DesktopFreizeitStory({
  storyRef,
  storyHeight,
  swordScrollProgressRef,
  beigeContentRef,
  introMotionRef,
  swordMotionRef,
  pfadiCopyMotionRef,
  darkSheetRef,
  blueSheetRef,
  diveVideoMotionRef,
  diveCopyMotionRef,
  bikegroupRef,
  backwheelRef,
  frontwheelRef,
}) {
  return (
    <section
      ref={storyRef}
      className="desktopStory"
      style={{ height: `${storyHeight}px` }}
    >
      <div className="storyViewport">
        <div className="storyBeigeBase" aria-hidden="true" />

        <div ref={beigeContentRef} className="storyBeigeContent">
          <div className="container storyBeigeInner">
            <div ref={introMotionRef} className="storyIntroMotion">
              <PageIntro />
            </div>

            <div className="pfadiStage">
              <div ref={swordMotionRef} className="swordMotion">
                <div className="swordModelWrap">
                  <a
                    className="swordLink"
                    href="https://www.flamberg.ch/"
                    aria-label="Flamberg Website öffnen"
                  >
                    <SwordModel
                      className="swordModel"
                      scrollProgressRef={swordScrollProgressRef}
                      mediaQuery="all"
                    />
                  </a>
                </div>
              </div>

              <div ref={pfadiCopyMotionRef} className="pfadiCopyMotion">
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
          </div>
        </div>

        <div ref={darkSheetRef} className="storyColorSheet storyDarkSheet" aria-hidden="true" />

        <div className="storyBikeLayer">
          <div className="bikegroup" ref={bikegroupRef}>
            <img
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
              src="/wheelshading1.png"
              alt=""
              className="shadingback"
              width="93"
            />
            <img
              src="/wheelshading2.png"
              alt=""
              className="shadingfront"
              width="93"
            />
            <h2 className={`bikeTitle ${racingSansOne.className}`}>
              {FREIZEIT_COPY.bike.title}
            </h2>
            <p className={`bikeText ${racingSansOne.className}`}>
              {FREIZEIT_COPY.bike.text}
            </p>
          </div>
        </div>

        <div ref={blueSheetRef} className="storyColorSheet storyBlueSheet">
          <DesktopDiveContent
            videoMotionRef={diveVideoMotionRef}
            copyMotionRef={diveCopyMotionRef}
          />
        </div>
      </div>
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
  const storyRef = useRef(null);
  const swordScrollProgressRef = useRef(0);
  const beigeContentRef = useRef(null);
  const introMotionRef = useRef(null);
  const swordMotionRef = useRef(null);
  const pfadiCopyMotionRef = useRef(null);
  const darkSheetRef = useRef(null);
  const blueSheetRef = useRef(null);
  const diveVideoMotionRef = useRef(null);
  const diveCopyMotionRef = useRef(null);
  const bikegroupRef = useRef(null);
  const backwheelRef = useRef(null);
  const frontwheelRef = useRef(null);

  const [storyHeight, setStoryHeight] = useState(3600);

  useEffect(() => {
    let frameId;
    let metrics = null;

    const clamp01 = (value) => Math.max(0, Math.min(1, value));

    const getHeaderHeight = () => (
      document.querySelector('.header')?.getBoundingClientRect().height ?? 70
    );

    const renderStory = () => {
      frameId = undefined;
      if (!metrics || !storyRef.current) return;

      const rect = storyRef.current.getBoundingClientRect();
      const localScroll = Math.max(
        0,
        Math.min(metrics.totalScroll, metrics.headerHeight - rect.top),
      );

      // Pfadi gets a real hold: the sticky viewport stays visually still while
      // the user scrolls. Only the sword's own 3D scroll reaction continues.
      const pfadiHoldProgress = clamp01(localScroll / metrics.pfadiHold);
      swordScrollProgressRef.current = pfadiHoldProgress;

      const beigeProgress = clamp01(
        (localScroll - metrics.pfadiHold) / metrics.colorTransition,
      );
      const colorTravel = metrics.stageHeight + metrics.cutHeight;
      const darkY = metrics.stageHeight - beigeProgress * colorTravel;

      if (darkSheetRef.current) {
        darkSheetRef.current.style.transform = `translate3d(0, ${darkY}px, 0)`;
      }

      // Keep the beige content above the incoming dark field. Individual
      // elements leave the viewport under their own motion instead of being
      // covered by the next color.
      if (beigeContentRef.current) {
        beigeContentRef.current.style.transform = 'translate3d(0, 0, 0)';
      }

      const introFade = 1 - clamp01((beigeProgress - 0.05) / 0.95);
      const introY = -beigeProgress * Math.min(220, metrics.stageHeight * 0.28);
      const swordY = -beigeProgress * (metrics.stageHeight + 220);
      const pfadiY = -beigeProgress * (metrics.stageHeight + 105);

      if (introMotionRef.current) {
        introMotionRef.current.style.opacity = `${introFade}`;
        introMotionRef.current.style.transform = `translate3d(0, ${introY}px, 0)`;
      }

      if (swordMotionRef.current) {
        swordMotionRef.current.style.transform = `translate3d(0, ${swordY}px, 0)`;
      }

      if (pfadiCopyMotionRef.current) {
        pfadiCopyMotionRef.current.style.opacity = '1';
        pfadiCopyMotionRef.current.style.transform = `translate3d(0, ${pfadiY}px, 0)`;
      }

      const bikeStart = metrics.pfadiHold + metrics.colorTransition;
      const bikeProgress = clamp01(
        (localScroll - bikeStart) / metrics.bikeTravel,
      );
      const bikeActive = localScroll >= bikeStart;

      // Once the bike reaches the centered stop, keep the whole black scene
      // still for the same scroll distance as the final blue hold.
      const blueStart = bikeStart + metrics.bikeTravel + metrics.bikeHold;
      const blueProgress = clamp01(
        (localScroll - blueStart) / metrics.colorTransition,
      );
      const blueY = metrics.stageHeight - blueProgress * colorTravel;

      if (blueSheetRef.current) {
        blueSheetRef.current.style.transform = `translate3d(0, ${blueY}px, 0)`;
      }

      // With the current asset geometry x=192 places the motorcycle itself,
      // not the oversized scene group, in the horizontal center of the screen.
      // When the bike has stopped there, the blue transition begins and the
      // bike scene actively travels upward above the incoming blue field.
      const bikeCenterX = metrics.compactLayout ? 0 : 546;
      const bikeStartX = metrics.compactLayout
        ? -(window.innerWidth + 520)
        : -700;
      const bikeX = bikeStartX + bikeProgress * (bikeCenterX - bikeStartX);
      const bikeExitY = -60 - blueProgress * (metrics.stageHeight + 280);
      const wheelRotation = bikeProgress * 1080;

      if (bikegroupRef.current) {
        bikegroupRef.current.style.opacity = bikeActive && blueProgress < 1 ? '1' : '0';
        bikegroupRef.current.style.transform = `translate3d(${bikeX}px, ${bikeExitY}px, 0)`;
      }

      if (backwheelRef.current) {
        backwheelRef.current.style.transform = `rotate(${wheelRotation}deg)`;
      }

      if (frontwheelRef.current) {
        frontwheelRef.current.style.transform = `rotate(${wheelRotation}deg)`;
      }

      // Video and copy belong to the same blue scene, but use different
      // approach paths. Both settle at their centered layout exactly when the
      // blue field has filled the viewport.
      const diveVideoX = (1 - blueProgress) * -28;
      const diveVideoY = (1 - blueProgress) * 86;
      const diveCopyX = (1 - blueProgress) * 34;
      const diveCopyY = (1 - blueProgress) * 145;

      if (diveVideoMotionRef.current) {
        diveVideoMotionRef.current.style.transform = `translate3d(${diveVideoX}px, ${diveVideoY}px, 0)`;
      }

      if (diveCopyMotionRef.current) {
        diveCopyMotionRef.current.style.transform = `translate3d(${diveCopyX}px, ${diveCopyY}px, 0)`;
      }
    };

    const requestRender = () => {
      if (frameId) return;
      frameId = requestAnimationFrame(renderStory);
    };

    const measure = () => {
      const compactLayout = window.innerWidth < 1180;
      const headerHeight = getHeaderHeight();
      const stageHeight = Math.max(
        compactLayout ? 520 : 460,
        window.innerHeight - headerHeight,
      );
      const cutHeight = window.innerWidth * Math.tan((5 * Math.PI) / 180);

      // Desktop positioning remains CSS-driven. On narrower screens the same
      // story is stacked and centered by responsive CSS instead of a second,
      // simplified mobile implementation.
      if (swordMotionRef.current) {
        swordMotionRef.current.style.top = '';
      }

      // One third of a viewport of real scroll moves a color edge through
      // roughly one full viewport: the requested apparent 3x color sweep.
      const colorTransition = Math.max(220, stageHeight / 3);

      // "Hold" means real scroll distance where the sticky scene itself does
      // not move. Tauchen stays at the requested half-length. Motorrad gets
      // exactly the same hold. Pfadi gets the same hold too, but its sword
      // continues reacting to scroll during that stationary phase.
      const blueHold = Math.max(210, stageHeight * 0.275);
      const bikeHold = blueHold;
      const pfadiHold = blueHold;

      // Restore the original bike travel duration so the animation itself is
      // not sped up by the new stationary holds.
      const bikeTravel = Math.max(820, stageHeight * 0.95);
      const totalScroll = (
        pfadiHold
        + colorTransition
        + bikeTravel
        + bikeHold
        + colorTransition
        + blueHold
      );

      metrics = {
        headerHeight,
        stageHeight,
        cutHeight,
        colorTransition,
        pfadiHold,
        bikeTravel,
        bikeHold,
        blueHold,
        totalScroll,
        compactLayout,
      };

      setStoryHeight(Math.ceil(stageHeight + totalScroll));
      requestRender();
    };

    const handleScroll = () => requestRender();
    const handleResize = () => measure();

    measure();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="page">
      <FreizeitHeader />

      <main className="freizeitMain">
        <div className="desktopFreizeit">
          <DesktopFreizeitStory
            storyRef={storyRef}
            storyHeight={storyHeight}
            swordScrollProgressRef={swordScrollProgressRef}
            beigeContentRef={beigeContentRef}
            introMotionRef={introMotionRef}
            swordMotionRef={swordMotionRef}
            pfadiCopyMotionRef={pfadiCopyMotionRef}
            darkSheetRef={darkSheetRef}
            blueSheetRef={blueSheetRef}
            diveVideoMotionRef={diveVideoMotionRef}
            diveCopyMotionRef={diveCopyMotionRef}
            bikegroupRef={bikegroupRef}
            backwheelRef={backwheelRef}
            frontwheelRef={frontwheelRef}
          />
        </div>

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

        .responsivePanel {
          position: relative;
        }

        .desktopStory {
          position: relative;
          background: var(--freizeit-beige);
        }

        .storyViewport {
          position: sticky;
          top: 70px;
          height: calc(100vh - 70px);
          overflow: hidden;
          background: var(--freizeit-beige);
          isolation: isolate;
        }

        .storyBeigeBase,
        .storyBeigeContent,
        .storyColorSheet,
        .storyBikeLayer {
          position: absolute;
          inset: 0;
        }

        .storyBeigeBase {
          z-index: 0;
          background: var(--freizeit-beige);
        }

        .storyBeigeContent {
          z-index: 3;
          color: var(--freizeit-beige-ink);
        }

        .storyBeigeInner {
          position: relative;
          height: 100%;
        }

        .storyColorSheet {
          left: 0;
          right: 0;
          top: 0;
          bottom: auto;
          height: calc(100% + var(--panel-cut) + var(--panel-cut) + 4px);
          will-change: transform;
          backface-visibility: hidden;
        }

        .storyDarkSheet {
          z-index: 2;
          background: var(--freizeit-dark);
          clip-path: polygon(
            0 var(--panel-cut),
            100% 0,
            100% 100%,
            0 100%
          );
          transform: translate3d(0, 100vh, 0);
        }

        .storyBikeLayer {
          z-index: 6;
          pointer-events: none;
        }

        .storyBlueSheet {
          z-index: 5;
          background: var(--freizeit-blue);
          clip-path: polygon(
            0 0,
            100% var(--panel-cut),
            100% 100%,
            0 100%
          );
          transform: translate3d(0, 100vh, 0);
        }

        .section {
          padding: 34px 0 8px;
        }

        .desktopStory .section {
          animation: freizeitIntroIn 1.1s cubic-bezier(0.22, 1, 0.36, 1) both;
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

        .pfadiStage {
          position: relative;
          min-height: 650px;
        }

        .storyIntroMotion,
        .swordMotion,
        .pfadiCopyMotion,
        .diveVideoMotion,
        .diveCopy {
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        .swordMotion {
          position: absolute;
          left: -40px;
          top: 24px;
          width: 610px;
          height: 350px;
        }

        .swordModelWrap {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: visible;
          animation: freizeitIntroIn 1.1s 0.12s cubic-bezier(0.22, 1, 0.36, 1) both;
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

        .swordModel {
          position: relative;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .swordModel {
          filter: drop-shadow(0 10px 18px rgba(30, 22, 15, 0.17));
        }

        .swordCanvas {
          position: relative;
          z-index: 2;
          display: block;
          width: 100%;
          height: 100%;
        }

        .swordLoadingIndicator {
          position: absolute;
          z-index: 1;
          left: 50%;
          top: 50%;
          width: 24px;
          height: 24px;
          margin: -12px 0 0 -12px;
          border: 2px solid rgba(36, 29, 23, 0.2);
          border-top-color: rgba(36, 29, 23, 0.78);
          border-radius: 50%;
          animation: swordLoadingSpin 0.75s linear infinite;
        }

        .swordModel[data-model-loaded='true'] .swordLoadingIndicator,
        .swordModel[data-model-error='true'] .swordLoadingIndicator {
          display: none;
        }

        .pfadiCopyMotion {
          position: absolute;
          left: 560px;
          top: 120px;
          width: 620px;
        }

        .pfadiCopy {
          position: relative;
          width: 100%;
          animation: freizeitIntroIn 1.1s 0.2s cubic-bezier(0.22, 1, 0.36, 1) both;
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

        .bikegroup {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 500px;
          height: 520px;
          margin-left: -250px;
          margin-top: -260px;
          opacity: 0;
          will-change: transform;
          backface-visibility: hidden;
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

        .desktopDiveContent {
          position: absolute;
          left: 0;
          top: var(--panel-cut);
          width: 100%;
          height: calc(100% - var(--panel-cut) - var(--panel-cut) - 4px);
          color: var(--freizeit-blue-ink);
        }

        .desktopDiveInner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(40px, 5vw, 72px);
        }

        .diveCopy {
          flex: 0 1 640px;
          min-width: 0;
          max-width: 640px;
        }

        .diveVideoMotion {
          width: min(500px, 42vw);
          flex: 0 1 500px;
        }

        .whalesharkVideo {
          width: 100%;
          display: block;
          border-radius: 40px;
        }

        .diveTitle {
          margin: 0 0 12px;
          width: 100%;
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

        @keyframes freizeitIntroIn {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes swordLoadingSpin {
          to {
            transform: rotate(360deg);
          }
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
          .responsiveFirstFeature,
          .responsiveDiveFeature {
            opacity: 1;
            transform: none;
            transition: none;
            animation: none;
          }

          .swordLoadingIndicator {
            animation-duration: 1.5s;
          }
        }

        @media (max-width: 1179px) {
          .storyViewport {
            top: 70px;
            height: calc(100vh - 70px);
          }

          .storyBeigeInner {
            padding-left: clamp(20px, 5vw, 56px);
            padding-right: clamp(20px, 5vw, 56px);
          }

          .storyIntroMotion {
            position: absolute;
            z-index: 3;
            top: clamp(18px, 3vh, 32px);
            left: clamp(20px, 5vw, 56px);
            right: clamp(20px, 5vw, 56px);
          }

          .section {
            padding: 0;
          }

          .pfadiStage {
            position: absolute;
            inset: 0;
            min-height: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: clamp(14px, 2.5vh, 26px);
            padding: clamp(88px, 12vh, 120px) 0 24px;
          }

          .pfadiCopyMotion {
            position: relative;
            order: 1;
            left: auto;
            top: auto;
            width: min(760px, 100%);
          }

          .pfadiCopy {
            width: 100%;
          }

          .pfadiTitle {
            font-size: clamp(17px, 2.4vw, 22px);
          }

          .pfadiText {
            width: 100%;
            max-width: none;
            font-size: clamp(18px, 3vw, 26px);
            line-height: 1.32;
          }

          .swordMotion {
            position: relative;
            order: 2;
            left: auto;
            top: auto;
            width: min(720px, 100%);
            height: clamp(190px, 32vh, 320px);
          }

          .bikegroup {
            left: 50%;
            top: 50%;
            width: 500px;
            height: 680px;
            margin-left: -250px;
            margin-top: -340px;
            scale: 0.88;
            transform-origin: center center;
          }

          .bikeTitle {
            left: 0;
            top: 38px;
            width: 500px;
            text-align: center;
            font-size: 21px;
          }

          .bikeText {
            left: 0;
            top: 78px;
            width: 500px;
            text-align: center;
            font-size: 26px;
            line-height: 1.24;
          }

          .nakedbike {
            top: 250px;
            left: 50px;
          }

          .backwheel,
          .shadingback {
            top: 540px;
            left: 102px;
          }

          .frontwheel,
          .shadingfront {
            top: 543px;
            left: 303px;
          }

          .desktopDiveContent {
            top: var(--panel-cut);
            height: calc(100% - var(--panel-cut) - var(--panel-cut) - 4px);
          }

          .desktopDiveInner {
            width: 100%;
            max-width: 820px;
            height: 100%;
            padding: clamp(22px, 4vh, 42px) clamp(20px, 5vw, 52px);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: clamp(16px, 2.5vh, 28px);
          }

          .diveCopy {
            order: 1;
            flex: 0 0 auto;
            width: min(700px, 100%);
            max-width: 700px;
          }

          .diveVideoMotion {
            order: 2;
            flex: 0 0 auto;
            width: min(620px, 100%);
          }

          .whalesharkVideo {
            width: 100%;
            max-height: 36vh;
            object-fit: cover;
            border-radius: 28px;
          }

          .diveTitle {
            font-size: clamp(17px, 2.4vw, 22px);
          }

          .diveText {
            width: 100%;
            max-width: none;
            font-size: clamp(18px, 2.8vw, 25px);
            line-height: 1.3;
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

          .storyViewport {
            top: 64px;
            height: calc(100vh - 64px);
          }

          .storyIntroMotion {
            top: 16px;
          }

          .kicker {
            font-size: 10px;
            margin-bottom: 6px;
          }

          .title {
            font-size: clamp(25px, 8vw, 32px);
          }

          .pfadiStage {
            gap: clamp(12px, 2vh, 20px);
            padding-top: clamp(82px, 12vh, 102px);
            padding-bottom: 18px;
          }

          .pfadiCopyMotion {
            width: 100%;
          }

          .pfadiTitle {
            margin-bottom: 8px;
            font-size: clamp(15px, 4.2vw, 18px);
          }

          .pfadiText {
            font-size: clamp(16px, 4.35vw, 19px);
            line-height: 1.28;
          }

          .swordMotion {
            width: 100%;
            height: clamp(180px, 29vh, 245px);
          }

          .bikegroup {
            scale: 0.72;
          }

          .bikeTitle {
            font-size: 20px;
          }

          .bikeText {
            font-size: 25px;
          }

          .desktopDiveInner {
            padding: 18px clamp(18px, 5vw, 28px);
            gap: 16px;
          }

          .diveCopy {
            width: 100%;
          }

          .diveTitle {
            margin-bottom: 8px;
            font-size: clamp(15px, 4.2vw, 18px);
          }

          .diveText {
            font-size: clamp(16px, 4.3vw, 19px);
            line-height: 1.25;
          }

          .diveVideoMotion {
            width: min(100%, 520px);
          }

          .whalesharkVideo {
            max-height: 32vh;
            border-radius: 22px;
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
