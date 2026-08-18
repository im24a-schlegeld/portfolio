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
                      mediaQuery="(min-width: 768px)"
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
  const storyRef = useRef(null);
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
    let isMobileViewport = false;
    let metrics = null;

    const clamp01 = (value) => Math.max(0, Math.min(1, value));

    const getHeaderHeight = () => (
      document.querySelector('.header')?.getBoundingClientRect().height ?? 70
    );

    const renderStory = () => {
      frameId = undefined;
      if (isMobileViewport || !metrics || !storyRef.current) return;

      const rect = storyRef.current.getBoundingClientRect();
      const localScroll = Math.max(
        0,
        Math.min(metrics.totalScroll, metrics.headerHeight - rect.top),
      );

      const beigeProgress = clamp01(localScroll / metrics.colorTransition);
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

      const bikeStart = metrics.colorTransition;
      const bikeProgress = clamp01(
        (localScroll - bikeStart) / metrics.bikeTravel,
      );
      const bikeActive = localScroll >= bikeStart;

      const blueStart = bikeStart + metrics.bikeTravel;
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
      const bikeCenterX = 546;
      const bikeX = -700 + bikeProgress * (bikeCenterX + 700);
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
      if (frameId || isMobileViewport) return;
      frameId = requestAnimationFrame(renderStory);
    };

    const measure = () => {
      isMobileViewport = window.innerWidth < 768;

      if (isMobileViewport) {
        metrics = null;
        return;
      }

      const headerHeight = getHeaderHeight();
      const stageHeight = Math.max(460, window.innerHeight - headerHeight);
      const cutHeight = window.innerWidth * Math.tan((5 * Math.PI) / 180);

      // One third of a viewport of real scroll moves a color edge through
      // roughly one full viewport: the requested apparent 3x color sweep.
      const colorTransition = Math.max(220, stageHeight / 3);
      const bikeTravel = Math.max(820, stageHeight * 0.95);
      const blueHold = Math.max(420, stageHeight * 0.55);
      const totalScroll = colorTransition + bikeTravel + colorTransition + blueHold;

      metrics = {
        headerHeight,
        stageHeight,
        cutHeight,
        colorTransition,
        bikeTravel,
        blueHold,
        totalScroll,
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
        .swordModel[data-model-error='true'] .swordLoadingIndicator,
        .responsiveSwordModel[data-model-loaded='true'] .swordLoadingIndicator,
        .responsiveSwordModel[data-model-error='true'] .swordLoadingIndicator {
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
