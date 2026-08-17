import Link from 'next/link';
import { navigationItems } from '../data/portfolio';

export default function NotFound() {
  return (
    <main className="notFoundPage">
      <div className="roadLine" aria-hidden="true" />
      <section className="notFoundCard">
        <p className="code">404 / Sackgasse</p>
        <h1>Diese Route endet hier.</h1>
        <p>
          Die aufgerufene Seite existiert nicht oder wurde verschoben. Über die Navigation kommst du direkt zurück zu den vorhandenen Bereichen.
        </p>
        <nav aria-label="Hauptnavigation">
          {navigationItems.map((item) => (
            <Link href={item.href} key={item.key}>
              {item.label}
            </Link>
          ))}
        </nav>
      </section>

      <style>{`
        .notFoundPage {
          position: relative;
          min-height: 100svh;
          display: grid;
          place-items: center;
          overflow: hidden;
          padding: 28px;
          color: #f5f2e9;
          font-family: Bahnschrift, 'Arial Narrow', 'Segoe UI', sans-serif;
          background:
            radial-gradient(circle at 20% 15%, rgba(255, 255, 255, 0.05), transparent 20rem),
            linear-gradient(180deg, #1a1a1a, #070707);
        }

        .roadLine {
          position: absolute;
          top: -10%;
          bottom: -10%;
          left: 50%;
          width: 7px;
          background: repeating-linear-gradient(
            180deg,
            #f2c94c 0 46px,
            transparent 46px 82px
          );
          opacity: 0.72;
          transform: rotate(12deg);
        }

        .notFoundCard {
          position: relative;
          z-index: 1;
          width: min(720px, 100%);
          padding: clamp(28px, 6vw, 58px);
          border: 1px solid rgba(245, 242, 233, 0.14);
          border-radius: 28px;
          background: rgba(8, 8, 8, 0.9);
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.45);
        }

        .code {
          margin: 0 0 14px;
          color: #f2c94c;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          font-size: clamp(48px, 10vw, 96px);
          line-height: 0.88;
          letter-spacing: -0.065em;
          text-transform: uppercase;
        }

        .notFoundCard > p:last-of-type {
          max-width: 600px;
          margin: 24px 0 0;
          color: #c7c0b3;
          font-size: 17px;
          line-height: 1.6;
        }

        nav {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 30px;
        }

        nav a {
          min-height: 40px;
          display: inline-flex;
          align-items: center;
          padding: 0 15px;
          border: 1px solid rgba(242, 201, 76, 0.35);
          border-radius: 999px;
          color: #f2c94c;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-decoration: none;
          text-transform: uppercase;
        }
      `}</style>
    </main>
  );
}
