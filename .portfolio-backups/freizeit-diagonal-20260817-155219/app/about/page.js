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
    <section className="section">
      <p className="kicker">Persönliche Interessen</p>
      <h1 className="title">{FREIZEIT_COPY.pageTitle}</h1>
    </section>
  );
}

function BikeScene({
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
  swordScrollProgressRef,
}) {
  return (
    <section
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

          <PfadiSwordGroup swordScrollProgressRef={swordScrollProgressRef} />
        </div>
      </div>
    </section>
  );
}

function PfadiSwordGroup({ swordScrollProgressRef }) {
  return (
    <div className="swordGroup">
      <div className="swordModelWrap">
        <a
          className="swordLink"
          href="https://www.flamberg.ch/"
          aria-label="Flamberg Website öffnen"
        >
          <SwordModel
            className="swordModel"
            scrollProgressRef={swordScrollProgressRef}
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
  );
}

function DiveSection() {
  return (
    <section className="diveSection">
      <video
        className="whalesharkVideo"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
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
    </section>
  );
}

function ResponsiveFreizeitSections() {
  return (
    <section className="responsiveFreizeitSections">
      <article className="responsiveFeature">
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
      </article>

      <article className="responsiveFeature">
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
      </article>

      <article className="responsiveFeature">
        <video
          className="responsiveWhaleshark"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
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
  const sceneRef = useRef(null);
  const bikegroupRef = useRef(null);
  const nakedbikeRef = useRef(null);
  const backwheelRef = useRef(null);
  const frontwheelRef = useRef(null);
  const shadingbackRef = useRef(null);
  const shadingfrontRef = useRef(null);
  const bikeTitleRef = useRef(null);
  const bikeTextRef = useRef(null);
  const swordScrollProgressRef = useRef(0);

  const [sceneHeight, setSceneHeight] = useState(1800);

  useEffect(() => {
    let animationFrameId;

    let targetProgress = 0;
    let currentProgress = 0;
    let isMobileViewport = false;

    const startOffsetX = -700;  // Start further left for longer travel
    const endOffsetX = 475;     // End further right
    const totalRotation = 1080;
    const smoothing = 0.08;

    const updateMeasurements = () => {
      const viewportHeight = window.innerHeight;
      isMobileViewport = window.innerWidth < 768;
      setSceneHeight(isMobileViewport ? 720 : viewportHeight + 900);
    };

    const updateTargetProgress = () => {
      const scene = sceneRef.current;
      if (!scene) return;

      if (isMobileViewport) {
        targetProgress = 0;
        currentProgress = 0;
        swordScrollProgressRef.current = 0;
        return;
      }

      const rect = scene.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const stickyTop = viewportHeight / 2 - 270;
      const startScroll = stickyTop + 120;
      const endScroll = stickyTop - 750;

      let progress = (startScroll - rect.top) / (startScroll - endScroll);
      progress = Math.max(0, Math.min(1, progress));

      targetProgress = progress;
    };

    const animate = () => {
      currentProgress += (targetProgress - currentProgress) * smoothing;
      swordScrollProgressRef.current = currentProgress;

      const moveX = isMobileViewport
        ? 0
        : startOffsetX + currentProgress * (endOffsetX - startOffsetX);
      const rotation = isMobileViewport ? 0 : currentProgress * totalRotation;

      if (bikegroupRef.current) {
        bikegroupRef.current.style.opacity = '1';
      }

      if (nakedbikeRef.current) {
        nakedbikeRef.current.style.transform = `translateX(${moveX}px)`;
      }

      if (backwheelRef.current) {
        backwheelRef.current.style.transform = `translateX(${moveX}px) rotate(${rotation}deg)`;
      }

      if (frontwheelRef.current) {
        frontwheelRef.current.style.transform = `translateX(${moveX}px) rotate(${rotation}deg)`;
      }

      if (shadingbackRef.current) {
        shadingbackRef.current.style.transform = `translateX(${moveX}px)`;
      }

      if (shadingfrontRef.current) {
        shadingfrontRef.current.style.transform = `translateX(${moveX}px)`;
      }

      if (bikeTitleRef.current) {
        bikeTitleRef.current.style.transform = `translateX(${moveX}px)`;
      }

      if (bikeTextRef.current) {
        bikeTextRef.current.style.transform = `translateX(${moveX}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    updateMeasurements();
    updateTargetProgress();
    animate();

    window.addEventListener('resize', updateMeasurements);
    window.addEventListener('resize', updateTargetProgress);
    window.addEventListener('scroll', updateTargetProgress, { passive: true });

    return () => {
      window.removeEventListener('resize', updateMeasurements);
      window.removeEventListener('resize', updateTargetProgress);
      window.removeEventListener('scroll', updateTargetProgress);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="page">
      <FreizeitHeader />

      <main className="container">
        <PageIntro />

        <BikeScene
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
          swordScrollProgressRef={swordScrollProgressRef}
        />

        <DiveSection />

        <ResponsiveFreizeitSections />
      </main>

      <FreizeitFooter />

      <style>{`
        :root {
          --bg: #101010;
          --text: #b7b7b7;
          --muted: #6b7280;
          --header-bg: rgba(16, 16, 16, 0.78);
          --header-border: rgba(255, 255, 255, 0.08);
          --header-active: #e8ded6;
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
          background: var(--bg);
          color: var(--text);
        }

        body::-webkit-scrollbar:horizontal {
          display: none;
        }

        body {
          scrollbar-width: none;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .page {
          min-height: 100vh;
        }

        .container {
          width: auto;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 24px;
        }

        @media (max-width: 767px) {
          .container {
            width: 100%;
            max-width: 100%;
          }
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 20;
          border-bottom: 1px solid var(--header-border);
          background: var(--header-bg);
          backdrop-filter: blur(16px);
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
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          color: #a7a7a7;
          letter-spacing: 0.04em;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }

        .navLink:hover,
        .navLink:focus-visible {
          border-color: rgba(255, 255, 255, 0.22);
          color: #ffffff;
          outline: none;
        }

        .active {
          border-color: rgba(232, 222, 214, 0.55);
          background: var(--header-active);
          color: #101010;
        }

        .section {
          padding: 32px 0 12px;
        }

        .kicker {
          margin: 0 0 10px;
          color: #777;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .title {
          font-size: 40px;
          margin: 0 0 24px;
          letter-spacing: -0.02em;
        }

        .swordGroup {
          position: absolute;
          left: -60px;
          top: 0;
          width: 1450px;
          height: 260px;
        }

        .swordModelWrap {
          position: absolute;
          left: -380px;
          top: 4px;
          width: 610px;
          height: 350px;
          overflow: visible;
        }

        .swordLink {
          display: block;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .swordLink:focus-visible {
          outline: 2px solid rgba(255, 255, 255, 0.75);
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
          filter: drop-shadow(0 0 18px rgba(255, 255, 255, 0.18));
        }

        .swordCanvas {
          display: block;
          width: 100%;
          height: 100%;
        }


        .pfadiCopy {
          position: absolute;
          left: 220px;
          top: 66px;
          width: 520px;
        }

        .pfadiTitle {
          margin: 0 0 12px;
          font-size: 22px;
          font-weight: 400;
          color: #c8c8c8;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .pfadiText {
          margin: 0;
          width: min(700px, calc(100vw - 620px));
          max-width: 700px;
          font-size: 30px;
          font-weight: 400;
          line-height: 1.35;
          color: #a8a8a8;
          overflow-wrap: break-word;
        }

        .bikeScene {
          position: relative;
        }

        .bikeStickyLayer {
          position: sticky;
          top: calc(50vh - 260px);
          height: 520px;
          overflow: hidden;
        }

        .bikegroup {
          position: relative;
          width: 500px;
          height: 520px;
          opacity: 0;
          left: 400px;
        }

        .nakedbike {
          position: absolute;
          top: 120px;
          left: -142px;
          z-index: 3;
          will-change: transform;
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
          will-change: transform;
        }

        .shadingfront {
          position: absolute;
          top: 413px;
          left: 111px;
          z-index: 2;
          pointer-events: none;
          will-change: transform;
        }

        .bikeTitle {
          position: absolute;
          left: -850px;
          top: 320px;
          width: 800px;
          margin: 0;
          font-size: 22px;
          font-weight: 400;
          color: #9a8679;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          will-change: transform;
        }

        .bikeText {
          position: absolute;
          left: -850px;
          top: 365px;
          width: 750px;
          font-style: normal;
          font-size: 32px;
          font-weight: 400;
          color: #9a8679;
          margin: 0;
          will-change: transform;
        }

        .diveSection {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          gap: 50px;
          padding: 50px 0 36px;
        }

        .diveCopy {
          flex: 1 1 420px;
          min-width: 0;
          max-width: 800px;
          padding-top: 0;
        }

        .whalesharkVideo {
          width: min(500px, 100%);
          flex: 0 1 500px;
          display: block;
          border-radius: 40px;
        }

        .diveText {
          margin: 0;
          width: 100%;
          max-width: 640px;
          font-style: normal;
          font-size: 26px;
          font-weight: 400;
          color: #8bbfd1;
        }

        .diveTitle {
          margin: 0 0 12px;
          width: 100%;
          max-width: 800px;
          font-size: 22px;
          font-weight: 400;
          color: #8bbfd1;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .responsiveFreizeitSections {
          display: none;
        }

        .responsiveFeature {
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
        }

        .responsiveVisual {
          position: relative;
          width: 100%;
        }

        .responsiveCopy {
          width: 100%;
        }

        .responsiveTitle {
          margin: 0 0 12px;
          font-size: 20px;
          font-weight: 400;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .responsiveText {
          margin: 0;
          font-size: 22px;
          font-weight: 400;
          line-height: 1.35;
        }

        .pfadiVisual {
          height: 180px;
          display: flex;
          align-items: center;
        }

        .responsiveSwordModel {
          width: min(520px, 100%);
          height: 180px;
          filter: drop-shadow(0 0 18px rgba(255, 255, 255, 0.18));
        }

        .bikeVisual {
          height: 370px;
          max-width: 420px;
          margin: 0 auto;
        }

        .responsiveBikeFrame {
          position: absolute;
          width: 360px;
          height: auto;
          top: 0;
          left: 50%;
          transform: translateX(-50%) translateX(-47px);
          z-index: 3;
        }

        .responsiveBikeWheel {
          position: absolute;
          width: 84px;
          height: auto;
          z-index: 1;
        }

        .responsiveBackWheel {
          top: 261px;
          left: calc(50% - 180px);
        }

        .responsiveFrontWheel {
          top: 264px;
          left: calc(50% + 1px);
        }

        .responsiveBikeShading {
          position: absolute;
          width: 84px;
          height: auto;
          z-index: 2;
          pointer-events: none;
        }

        .responsiveBackShading {
          top: 261px;
          left: calc(50% - 180px);
        }

        .responsiveFrontShading {
          top: 264px;
          left: calc(50% + 1px);
        }

        .responsiveWhaleshark {
          width: min(500px, 100%);
          display: block;
          border-radius: 40px;
        }

        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.018);
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
          color: #ededed;
        }

        .footerText {
          margin: 6px 0 0;
          font-size: 13px;
          color: #777;
        }

        .footerLinks {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 13px;
          font-weight: 600;
          color: #a7a7a7;
        }

        .footerLink {
          transition: color 0.2s ease;
        }

        .footerLink:hover {
          color: #ffffff;
        }

        @media (max-width: 767px) {
          html,
          body {
            overflow-x: hidden;
          }

          body::-webkit-scrollbar:horizontal {
            display: none;
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

          .section {
            padding: 24px 0 24px;
          }

          .title {
            font-size: 32px;
          }

          .bikeScene,
          .diveSection {
            display: none;
          }

          .responsiveFreizeitSections {
            display: flex;
            flex-direction: column;
            gap: 56px;
            padding: 24px 0 40px;
          }

          .responsiveFeature {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .pfadiVisual {
            height: 150px;
          }

          .responsiveSwordModel {
            width: min(320px, 100%);
            height: 150px;
          }

          .bikeVisual {
            height: 290px;
            max-width: 320px;
          }

          .responsiveBikeFrame {
            width: 280px;
            top: 0;
            transform: translateX(-50%) translateX(-37px);
          }

          .responsiveBikeWheel {
            width: 65px;
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
            width: 65px;
          }

          .responsiveBackShading {
            top: 203px;
            left: calc(50% - 141px);
          }

          .responsiveFrontShading {
            top: 205px;
            left: 50%;
          }

          .responsiveTitle {
            font-size: 16px;
          }

          .responsiveText {
            font-size: 17px;
            line-height: 1.45;
          }

          .pfadiTitle,
          .pfadiText {
            color: #a8a8a8;
          }

          .bikeResponsiveTitle,
          .bikeResponsiveText {
            color: #9a8679;
          }

          .diveResponsiveTitle,
          .diveResponsiveText {
            color: #8bbfd1;
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
