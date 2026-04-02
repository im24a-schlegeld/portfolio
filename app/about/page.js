'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const sceneRef = useRef(null);
  const bikegroupRef = useRef(null);
  const nakedbikeRef = useRef(null);
  const backwheelRef = useRef(null);
  const frontwheelRef = useRef(null);
  const shadingbackRef = useRef(null);
  const shadingfrontRef = useRef(null);

  const [sceneHeight, setSceneHeight] = useState(1800);

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
      const startScroll = stickyTop;
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
            <a className="navLink active" href="/about">About</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="section">
          <h1 className="title">About</h1>
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
                alt="Crossbike"
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
            </div>
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
        }

        body {
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
          background: var(--bg);
          color: var(--text);
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .page {
          min-height: 100vh;
        }

        .container {
          max-width: 3000px;
          margin: 0 auto;
          padding: 0 24px;
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
          padding: 120px 0;
        }

        .title {
          font-size: 40px;
          margin: 0 0 24px;
          letter-spacing: -0.02em;
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

        .spacer {
          height: 1300px;
        }
      `}</style>
    </div>
  );
}