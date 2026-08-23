'use client';

import { useEffect, useRef, useState } from 'react';
import localFont from 'next/font/local';
import { New_Rocker, Racing_Sans_One } from 'next/font/google';
import SwordModel from './SwordModel';
import SiteHeader from '../components/SiteHeader';

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
  return <SiteHeader activeKey="about" roadTexture />;
}

function PageIntro() {
  return (
    <div className="section">
      <h1 className="title">{FREIZEIT_COPY.pageTitle}</h1>
    </div>
  );
}

function DesktopDiveContent({ videoMotionRef, copyMotionRef, videoElementRef }) {
  const sectionRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoElementRef.current;
    if (!section || !video) return undefined;

    const compactLayout = window.innerWidth < 1180;

    if (compactLayout) {
      video.preload = 'auto';
      video.poster = '/responsive/whaleshark-poster.jpg';
      video.load();
    }

    if (!('IntersectionObserver' in window)) {
      if (compactLayout) void video.play().catch(() => {});
      return undefined;
    }

    const playThreshold = compactLayout ? 0.08 : 0.45;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= playThreshold) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      compactLayout
        ? { threshold: [0, 0.08, 0.18, 0.45], rootMargin: '100px 0px' }
        : { threshold: [0, 0.2, 0.45, 0.75] },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [videoElementRef]);

  return (
    <div ref={sectionRef} className="desktopDiveContent">
      <div className="container desktopDiveInner">
        <div ref={videoMotionRef} className="diveVideoMotion">
          <span
            className={`videoLoadingIndicator ${videoReady ? 'isReady' : ''}`}
            aria-label="Video wird geladen"
          />
          <video
            ref={videoElementRef}
            className="whalesharkVideo"
            muted
            loop
            playsInline
            preload="none"
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoReady(false)}
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
  diveVideoElementRef,
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
              srcSet="/responsive/cbnaked1.png 1200w, /cbnaked1.png 3000w"
              sizes="(max-width: 1179px) 400px, 3000px"
              alt="Motorrad"
              className="nakedbike"
              width="400"
            />
            <img
              ref={backwheelRef}
              src="/cbbackwheel.png"
              srcSet="/responsive/cbbackwheel.png 320w, /cbbackwheel.png 1024w"
              sizes="(max-width: 1179px) 93px, 1024px"
              alt="Hinterrad"
              className="backwheel"
              width="93"
            />
            <img
              ref={frontwheelRef}
              src="/cbfrontwheel2.png"
              srcSet="/responsive/cbfrontwheel2.png 320w, /cbfrontwheel2.png 1024w"
              sizes="(max-width: 1179px) 93px, 1024px"
              alt="Vorderrad"
              className="frontwheel"
              width="93"
            />
            <img
              src="/wheelshading1.png"
              srcSet="/responsive/wheelshading1.png 320w, /wheelshading1.png 1024w"
              sizes="(max-width: 1179px) 93px, 1024px"
              alt=""
              className="shadingback"
              width="93"
            />
            <img
              src="/wheelshading2.png"
              srcSet="/responsive/wheelshading2.png 320w, /wheelshading2.png 1024w"
              sizes="(max-width: 1179px) 93px, 1024px"
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
            videoElementRef={diveVideoElementRef}
          />
        </div>
      </div>
    </section>
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
  const diveVideoElementRef = useRef(null);
  const bikegroupRef = useRef(null);
  const backwheelRef = useRef(null);
  const frontwheelRef = useRef(null);

  const [storyHeight, setStoryHeight] = useState(3600);

  useEffect(() => {
    let frameId;
    let metrics = null;

    const clamp01 = (value) => Math.max(0, Math.min(1, value));

    const getHeaderHeight = () => (
      document.querySelector('[data-site-header="true"]')?.getBoundingClientRect().height ?? 70
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
        ? -(window.innerWidth / 2 + 250 * metrics.bikeScale + 24)
        : -700;
      const bikeX = bikeStartX + bikeProgress * (bikeCenterX - bikeStartX);
      const bikeExitY = metrics.compactLayout
        ? -blueProgress * (metrics.stageHeight + 340 * metrics.bikeScale)
        : -150 - blueProgress * (metrics.stageHeight + 280);
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
      const stageHeight = compactLayout
        ? Math.max(1, window.innerHeight)
        : Math.max(460, window.innerHeight);
      const cutHeight = window.innerWidth * Math.tan((5 * Math.PI) / 180);
      const compactBikeMinScale = stageHeight < 480 ? 0.34 : 0.56;
      const bikeScale = compactLayout
        ? Math.max(compactBikeMinScale, Math.min(0.88, (window.innerWidth - 28) / 500, (stageHeight - 24) / 680))
        : 1;

      // Desktop positioning remains CSS-driven. Compact layouts receive only
      // responsive sizing variables; desktop values are left untouched.
      if (storyRef.current) {
        if (compactLayout) {
          storyRef.current.style.setProperty('--story-stage-height', `${stageHeight}px`);
          storyRef.current.style.setProperty('--bike-responsive-scale', `${bikeScale}`);
        } else {
          storyRef.current.style.removeProperty('--story-stage-height');
          storyRef.current.style.removeProperty('--bike-responsive-scale');
        }
      }

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
        bikeScale,
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
            diveVideoElementRef={diveVideoElementRef}
            bikegroupRef={bikegroupRef}
            backwheelRef={backwheelRef}
            frontwheelRef={frontwheelRef}
          />
        </div>

      </main>

      <style>{`
        .page {
          --site-header-height: 70px;
          --freizeit-beige: #17211A;
          --freizeit-beige-accent: #5F7A61;
          --freizeit-beige-ink: #F2F1EC;
          --freizeit-dark: #080808;
          --freizeit-dark-accent: #A6A6A6;
          --freizeit-dark-ink: #F5F5F5;
          --freizeit-blue: #071D24;
          --freizeit-blue-accent: #16758A;
          --freizeit-blue-ink: #EEF7F8;
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

        .responsivePanel {
          position: relative;
        }

        .desktopStory {
          position: relative;
          background: var(--freizeit-beige);
        }

        .storyViewport {
          position: sticky;
          top: 0;
          height: 100vh;
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
          color: var(--freizeit-beige-accent);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .title {
          margin: 0;
          font-size: 40px;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          font-weight: 700;
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
          outline: 2px solid var(--freizeit-beige-accent);
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
          border: 2px solid rgba(95, 122, 97, 0.24);
          border-top-color: var(--freizeit-beige-accent);
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
          color: var(--freizeit-beige-accent);
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
          color: var(--freizeit-beige-ink);
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
          color: var(--freizeit-dark-accent);
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
          color: var(--freizeit-dark-ink);
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
          border-radius: 28px;
          object-fit: cover;
        }

        .diveVideoMotion {
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          background: var(--freizeit-blue);
        }

        .videoLoadingIndicator {
          position: absolute;
          z-index: 2;
          left: 50%;
          top: 50%;
          width: 24px;
          height: 24px;
          margin: -12px 0 0 -12px;
          border: 2px solid rgba(22, 117, 138, 0.24);
          border-top-color: var(--freizeit-blue-accent);
          border-radius: 50%;
          animation: swordLoadingSpin 0.75s linear infinite;
          transition: opacity 180ms ease;
        }

        .videoLoadingIndicator.isReady {
          opacity: 0;
          pointer-events: none;
        }

        .diveTitle {
          margin: 0 0 12px;
          width: 100%;
          font-size: 22px;
          font-weight: 400;
          color: var(--freizeit-blue-accent);
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

        @media (min-width: 1180px) {
          /* Desktop-only centering. Horizontal positions and animation timing
             stay exactly as before; only the static vertical anchors change. */
          .pfadiStage {
            position: absolute;
            inset: 0;
            min-height: 0;
          }

          .swordMotion,
          .pfadiCopyMotion {
            top: 50%;
            translate: 0 -50%;
          }
        }

        @media (max-width: 1179px) {
          .storyViewport {
            top: 0;
            height: 100vh;
            contain: layout paint;
          }

          /* Keep the moving color fields much taller than the viewport on
             compact layouts. Their only visible edge is the 5deg top cut, so
             a finite lower edge can never flash through as a horizontal bar. */
          .storyColorSheet {
            height: calc(200% + var(--panel-cut) + var(--panel-cut) + 8px);
          }

          .storyBeigeInner {
            padding-left: clamp(20px, 5vw, 56px);
            padding-right: clamp(20px, 5vw, 56px);
          }

          .storyIntroMotion {
            position: absolute;
            z-index: 3;
            top: clamp(16px, 2.6vh, 28px);
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
            gap: clamp(12px, 2vh, 22px);
            padding: clamp(80px, 11vh, 108px) 0 clamp(16px, 2.5vh, 28px);
          }

          .pfadiCopyMotion {
            position: relative;
            order: 1;
            flex: 0 0 auto;
            left: auto;
            top: auto;
            width: min(720px, 100%);
          }

          .pfadiCopy {
            width: 100%;
          }

          .pfadiTitle {
            margin-bottom: 8px;
            font-size: clamp(16px, 2vw, 21px);
          }

          .pfadiText {
            width: 100%;
            max-width: none;
            font-size: clamp(16px, 2.35vw, 23px);
            line-height: 1.26;
          }

          .swordMotion {
            position: relative;
            order: 2;
            flex: 0 0 auto;
            left: auto;
            top: auto;
            width: min(680px, 100%);
            height: clamp(170px, 28vh, 290px);
          }

          .bikegroup {
            left: 50%;
            top: 50%;
            width: 500px;
            height: 680px;
            margin-left: -250px;
            margin-top: -340px;
            scale: var(--bike-responsive-scale, 0.88);
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

          /* The blue sheet is intentionally oversized on compact screens.
             Anchor its content to exactly one visible stage so the text/video
             center remains independent from the sheet's safety extension. */
          .desktopDiveContent {
            top: var(--panel-cut);
            height: var(--story-stage-height, calc(100vh - var(--site-header-height)));
          }

          .desktopDiveInner {
            width: 100%;
            max-width: 820px;
            height: 100%;
            padding: clamp(18px, 3vh, 34px) clamp(20px, 5vw, 52px);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: clamp(14px, 2vh, 24px);
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
            max-height: 34vh;
            object-fit: cover;
            border-radius: 22px;
          }

          .diveVideoMotion {
            border-radius: 22px;
          }

          .diveTitle {
            margin-bottom: 8px;
            font-size: clamp(16px, 2vw, 21px);
          }

          .diveText {
            width: 100%;
            max-width: none;
            font-size: clamp(16px, 2.3vw, 23px);
            line-height: 1.26;
          }
        }

        @media (max-width: 767px) {
          .page {
            --panel-cut: 8.75vw;
            --site-header-height: 112px;
          }

          html,
          body {
            overflow-x: hidden;
          }

          .container {
            width: 100%;
            max-width: 100%;
          }

          .storyViewport {
            top: 0;
            height: 100vh;
          }

          .storyIntroMotion {
            top: 12px;
            left: clamp(16px, 5vw, 24px);
            right: clamp(16px, 5vw, 24px);
          }

          .kicker {
            margin-bottom: 5px;
            font-size: 9px;
          }

          .title {
            font-size: clamp(23px, 7.5vw, 30px);
          }

          .pfadiStage {
            gap: clamp(10px, 1.8vh, 16px);
            padding: clamp(72px, 11vh, 92px) 0 14px;
          }

          .pfadiCopyMotion {
            width: 100%;
          }

          .pfadiTitle {
            margin-bottom: 6px;
            font-size: clamp(14px, 4vw, 17px);
          }

          .pfadiText {
            font-size: clamp(14px, 4vw, 17px);
            line-height: 1.23;
          }

          .swordMotion {
            width: 100%;
            height: clamp(150px, 26vh, 220px);
          }

          .bikeTitle {
            font-size: 20px;
          }

          .bikeText {
            font-size: 25px;
          }

          .desktopDiveContent {
            height: var(--story-stage-height, calc(100vh - var(--site-header-height)));
          }

          .desktopDiveInner {
            padding: 14px clamp(16px, 5vw, 24px);
            gap: clamp(10px, 1.8vh, 16px);
          }

          .diveCopy {
            width: 100%;
          }

          .diveTitle {
            margin-bottom: 6px;
            font-size: clamp(14px, 4vw, 17px);
          }

          .diveText {
            font-size: clamp(14px, 3.9vw, 17px);
            line-height: 1.22;
          }

          .diveVideoMotion {
            width: min(100%, 520px);
          }

          .whalesharkVideo {
            max-height: 31vh;
            border-radius: 18px;
          }

          .diveVideoMotion {
            border-radius: 18px;
          }

        }

        @media (min-width: 768px) and (max-width: 1179px) and (max-height: 680px) {
          .storyIntroMotion {
            top: 8px;
          }

          .kicker {
            display: none;
          }

          .title {
            font-size: 22px;
          }

          .pfadiStage {
            gap: 8px;
            padding-top: 42px;
            padding-bottom: 8px;
          }

          .pfadiTitle,
          .diveTitle {
            font-size: 14px;
          }

          .pfadiText,
          .diveText {
            font-size: 14px;
            line-height: 1.18;
          }

          .swordMotion {
            height: clamp(112px, 31vh, 140px);
          }

          .desktopDiveInner {
            padding-top: 8px;
            padding-bottom: 8px;
            gap: 8px;
          }

          .whalesharkVideo {
            max-height: 27vh;
          }
        }

        @media (max-width: 767px) and (max-height: 680px) {
          .storyIntroMotion {
            top: 8px;
          }

          .kicker {
            display: none;
          }

          .title {
            font-size: 22px;
          }

          .pfadiStage {
            gap: 8px;
            padding-top: 48px;
            padding-bottom: 8px;
          }

          .pfadiTitle,
          .diveTitle {
            font-size: 13px;
          }

          .pfadiText,
          .diveText {
            font-size: 13px;
            line-height: 1.18;
          }

          .swordMotion {
            height: clamp(128px, 23vh, 158px);
          }

          .desktopDiveInner {
            padding-top: 10px;
            padding-bottom: 10px;
            gap: 8px;
          }

          .whalesharkVideo {
            max-height: 28vh;
          }
        }
      `}</style>
    </div>
  );
}
