import Image from 'next/image';
import Link from 'next/link';

const archiveUrl = 'https://x-archive-v1.vercel.app/';

export default function Projekte() {
  return (
    <main className="projectsPage">
      <section className="projectsHero">
        <div className="projectCopy">
          <p className="eyebrow">Projekte</p>
          <h1>X-Archive Preview</h1>
          <p>
            Eine interaktive Vorschau des Live-Projekts im Handy-Rahmen. Hover,
            Klicks und Scrollen laufen direkt innerhalb des Screens.
          </p>
          <Link className="backLink" href="/">
            Zurueck zur Startseite
          </Link>
        </div>

        <div className="phoneStage" aria-label="Website Vorschau">
          <div className="phoneMockup">
            <div className="phoneScreen">
              <iframe
                src={archiveUrl}
                title="X-Archive Website Vorschau"
                loading="lazy"
              />
            </div>
            <Image
              className="phoneFrame"
              src="/iphone_rahmen_transparent.png"
              alt="iPhone Rahmen"
              width={362}
              height={730}
              priority
            />
          </div>
        </div>
      </section>

      <style>{`
        .projectsPage {
          min-height: 100svh;
          overflow: hidden;
          color: #f6f1e7;
          font-family: Bahnschrift, 'Arial Narrow', 'Segoe UI', sans-serif;
          background:
            radial-gradient(circle at 80% 18%, rgba(242, 201, 76, 0.16), transparent 22rem),
            radial-gradient(circle at 12% 84%, rgba(255, 255, 255, 0.08), transparent 20rem),
            linear-gradient(135deg, #070707 0%, #171717 48%, #050505 100%);
        }

        .projectsHero {
          width: min(1180px, calc(100% - 40px));
          min-height: 100svh;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(320px, 0.7fr);
          align-items: center;
          gap: clamp(44px, 7vw, 110px);
          padding: clamp(26px, 5vh, 56px) 0;
          box-sizing: border-box;
        }

        .projectCopy {
          max-width: 620px;
        }

        .eyebrow {
          margin: 0 0 16px;
          color: #f2c94c;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          font-size: clamp(56px, 10vw, 132px);
          line-height: 0.82;
          letter-spacing: -0.08em;
          text-transform: uppercase;
        }

        .projectCopy p:not(.eyebrow) {
          max-width: 520px;
          margin: 28px 0 0;
          color: #cfc7ba;
          font-size: clamp(18px, 2vw, 22px);
          line-height: 1.55;
        }

        .backLink {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          margin-top: 34px;
          padding: 0 18px;
          border-radius: 999px;
          color: #171717;
          background: #f2c94c;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-decoration: none;
          text-transform: uppercase;
        }

        .phoneStage {
          display: flex;
          justify-content: flex-end;
          perspective: 1400px;
        }

        .phoneMockup {
          position: relative;
          width: min(340px, 78vw, calc((100vh - 96px) * 362 / 730));
          aspect-ratio: 362 / 730;
          transform: rotate(5deg);
          filter: drop-shadow(0 34px 56px rgba(0, 0, 0, 0.62));
          transition: transform 220ms ease, filter 220ms ease;
        }

        .phoneMockup:hover,
        .phoneMockup:focus-within {
          transform: rotate(5deg) translateY(-8px);
          filter: drop-shadow(0 42px 66px rgba(0, 0, 0, 0.72));
        }

        .phoneScreen {
          position: absolute;
          inset: 1.4% 5.7% 2.8%;
          z-index: 1;
          overflow: hidden;
          border-radius: 40px;
          background: #050505;
        }

        .phoneScreen iframe {
          width: calc(147.059% + 12px);
          height: 147.059%;
          display: block;
          border: 0;
          transform: scale(0.68);
          transform-origin: top left;
          pointer-events: auto;
          background: #050505;
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

        @media (max-width: 820px) {
          .projectsHero {
            grid-template-columns: 1fr;
            padding: 42px 0 80px;
          }

          .phoneStage {
            justify-content: center;
          }

          .phoneMockup {
            width: min(280px, 82vw, calc((100vh - 92px) * 362 / 730));
          }
        }
      `}</style>
    </main>
  );
}
