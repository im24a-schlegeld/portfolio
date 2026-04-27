'use client';

import { useEffect, useRef, useState } from 'react';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

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

  const [sceneHeight, setSceneHeight] = useState(1800);
  const [swordAnimationKey, setSwordAnimationKey] = useState(0);

  const replaySwordAnimation = () => {
    setSwordAnimationKey((key) => key + 1);
  };

  useEffect(() => {
    let animationFrameId;

    let targetProgress = 0;
    let currentProgress = 0;

    const startOffsetX = -700;  // Start further left for longer travel
    const endOffsetX = 475;     // End further right
    const totalRotation = 1080;
    const smoothing = 0.08;

    const updateMeasurements = () => {
      const viewportHeight = window.innerHeight;
      setSceneHeight(viewportHeight + 900);
    };

    const updateTargetProgress = () => {
      const scene = sceneRef.current;
      if (!scene) return;

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

      const moveX =
        startOffsetX + currentProgress * (endOffsetX - startOffsetX);
      const rotation = currentProgress * totalRotation;

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
      <header className="header">
        <div className="container headerInner">
          <a className="logo" href="/">Dario Schlegel</a>
          <nav>
            <a className="navLink active" href="/about">Freizeit</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="section">
          <h1 className="title">Freizeit</h1>
        </section>

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
                alt="Motorcycleframe"
                className="nakedbike"
                width="400"
              />
              <img
                ref={backwheelRef}
                src="/cbbackwheel.png"
                alt="Rear wheel"
                className="backwheel"
                width="93"
              />
              <img
                ref={frontwheelRef}
                src="/cbfrontwheel2.png"
                alt="Front wheel"
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
                className={`bikeTitle ${orbitron.className}`}
              >
                Motorradfahren
              </h2>
              <p
                ref={bikeTextRef}
                className={`bikeText ${orbitron.className}`}
              >
                Seit 2 Jahren fahre ich Motorrad. Mit 16 habe ich auf einer
                125er angefangen und bin nun diesen Winter auf eine gedrosselte
                650er aufgestiegen.
              </p>
              <div className="swordGroup">
                <div className="swordImageWrap">
                  <div
                    key={swordAnimationKey}
                    className="swordAnimationLayer"
                    onClick={replaySwordAnimation}
                  >
                    <img
                      src="/flambergschwert.png"
                      alt="Schwert"
                      className="swordImage"
                    />
                    <span className="swordSpark swordSparkOne" aria-hidden="true"></span>
                    <span className="swordSpark swordSparkTwo" aria-hidden="true"></span>
                    <span className="swordSpark swordSparkThree" aria-hidden="true"></span>
                  </div>
                </div>

                <div className="swordCopy">
                  <h2 className={`swordTitle ${orbitron.className}`}>
                    Schwert
                  </h2>
                  <p className={`swordText ${orbitron.className}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer vitae arcu sed neque tempus fermentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="diveSection">
          <video
            className="whalesharkVideo"
            src="/whaleshark.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
          <div className="diveCopy">
            <h2 className={`diveTitle ${orbitron.className}`}>Tauchen</h2>
            <p className={`diveText ${orbitron.className}`}>
              Vor 3 Jahren habe ich mit dem Tauchen angefangen. Mitlerweile habe ich 41  Tauchgänge, Advanced Open Water und Nitrox. Mein speziellster Tauchgang war mit einem Walhai in Indonesien.
            </p>
          </div>
        </section>

        <div className="spacer"></div>
      </main>

      <style>{`
        :root {
          --bg: #101010;
          --card: #ffffff;
          --text: #b7b7b7;
          --muted: #6b7280;
          --border: #e5e7eb;
          --accent: #2563eb;
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
          width: min(1440px, 100%);
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
          border-bottom: 1px solid var(--border);
          background: var(--card);
        }

        .headerInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }

        .logo {
          font-weight: 600;
          font-size: 18px;
          color: #111827;
        }

        .navLink {
          font-size: 15px;
          color: var(--muted);
          transition: color 0.2s ease;
        }

        .navLink:hover {
          color: #111827;
        }

        .active {
          color: var(--accent);
          font-weight: 500;
        }

        .section {
          padding: 72px 0 40px;
        }

        .title {
          font-size: 40px;
          margin: 0 0 24px;
          letter-spacing: -0.02em;
        }

        .swordGroup {
          position: absolute;
          left: -60px;
          top: 28px;
          width: 1450px;
          height: 260px;
        }

        .swordImageWrap {
          position: absolute;
          left: -300px;
          top: 142px;
          width: 575px;
          min-height: 220px;
          overflow: visible;
        }

        .swordAnimationLayer {
          position: relative;
          width: 100%;
          transform-origin: 6% 86%;
          transform: rotate(-15deg);
          cursor: pointer;
          animation: swordRotateIn 1.15s cubic-bezier(0.2, 0.9, 0.1, 1) forwards;
        }

        .swordImage {
          width: 100%;
          display: block;
          opacity: 1;
          filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.18));
          pointer-events: none;
        }

        .swordSpark {
          position: absolute;
          left: 96%;
          top: 55%;
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: #ffffff;
          box-shadow: 0 0 16px #ffffff, 0 0 34px rgba(255, 255, 255, 0.95);
          opacity: 0;
          pointer-events: none;
          z-index: 5;
        }

        .swordSparkOne {
          animation: swordSparkOne 0.42s ease-out 1.01s forwards;
        }

        .swordSparkTwo {
          animation: swordSparkTwo 0.42s ease-out 1.03s forwards;
        }

        .swordSparkThree {
          animation: swordSparkThree 0.42s ease-out 1.05s forwards;
        }

        @keyframes swordRotateIn {
          0% {
            transform: rotate(-17deg);
          }

          85% {
            transform: rotate(-23deg);
          }

          100% {
            transform: rotate(-17deg);
          }
        }

        @keyframes swordSparkOne {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.3);
          }

          20% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(64px, -46px) scale(0.12);
          }
        }

        @keyframes swordSparkTwo {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.3);
          }

          20% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(78px, 8px) scale(0.12);
          }
        }

        @keyframes swordSparkThree {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.3);
          }

          20% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(38px, 58px) scale(0.12);
          }
        }


        .swordCopy {
          position: absolute;
          left: 220px;
          top: 66px;
          width: 520px;
        }

        .swordTitle {
          margin: 0 0 12px;
          font-size: 22px;
          font-weight: 400;
          color: #c8c8c8;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .swordText {
          margin: 0;
          font-size: 30px;
          font-weight: 400;
          line-height: 1.35;
          color: #a8a8a8;
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
          left: -52px;
          z-index: 3;
          will-change: transform;
        }

        .backwheel {
          position: absolute;
          top: 410px;
          left: 0;
          z-index: 1;
          will-change: transform;
          transform-origin: center center;
        }

        .frontwheel {
          position: absolute;
          top: 413px;
          left: 201px;
          z-index: 1;
          will-change: transform;
          transform-origin: center center;
        }

        .shadingback {
          position: absolute;
          top: 410px;
          left: 0;
          z-index: 2;
          pointer-events: none;
          will-change: transform;
        }

        .shadingfront {
          position: absolute;
          top: 413px;
          left: 201px;
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
          width: 800px;
          font-style: normal;
          font-size: 30px;
          font-weight: 400;
          color: #9a8679;
          margin: 0;
          will-change: transform;
        }

        .diveSection {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 50px;
          padding: 50px 0 80px;
        }

        .diveCopy {
          flex: 1 1 420px;
          min-width: 0;
          max-width: 800px;
          padding-top: 10px;
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
          font-size: 30px;
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
        .spacer {
          height: 1300px;
        }
      `}</style>
    </div>
  );
}
