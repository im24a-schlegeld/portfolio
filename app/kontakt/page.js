import SiteHeader from '../components/SiteHeader';
import { portfolioContact } from '../../data/portfolio';

export const metadata = {
  title: 'Kontakt',
  description: 'Kontaktseite von Dario Schlegel.',
};

function ContactRow({ index, label, value, action, href, external = false }) {
  return (
    <a
      className="contactRow"
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <span className="contactRowIndex">{index}</span>
      <span className="contactRowLabel">{label}</span>
      <span className="contactRowValue">{value}</span>
      <strong className="contactRowAction">
        {action} <span className="contactArrow" aria-hidden="true">-&gt;</span>
      </strong>
    </a>
  );
}

export default function Kontakt() {
  return (
    <main className="contactPage">
      <SiteHeader activeKey="contact" />

      <section className="contactContent" aria-labelledby="contact-title">
        <div className="contactIntro">
          <h1 id="contact-title">Kontakt</h1>
          <div className="contactRule" aria-hidden="true" />
        </div>

        <div className="contactDirectory" aria-label="Kontaktmöglichkeiten">
          <ContactRow
            index="01"
            label="E-Mail"
            value={portfolioContact.emailDisplay}
            action="Schreiben"
            href={`mailto:${portfolioContact.email}`}
          />
          <ContactRow
            index="02"
            label="Telefon"
            value={portfolioContact.phone}
            action="Anrufen"
            href={`tel:${portfolioContact.phone}`}
          />
          <ContactRow
            index="03"
            label="GitHub"
            value={portfolioContact.githubUrl.replace(/^https?:\/\//, '')}
            action="Öffnen"
            href={portfolioContact.githubUrl}
            external
          />
        </div>
      </section>

      <style>{`
        .contactPage {
          min-height: 100svh;
          color: #f5f2e9;
          font-family: Bahnschrift, 'Arial Narrow', 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #070707 0%, #111111 55%, #070707 100%);
        }

        .contactPage,
        .contactPage * {
          box-sizing: border-box;
        }

        .contactContent {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          padding: clamp(100px, 11vw, 150px) 0 150px;
        }

        .contactIntro {
          width: min(820px, 100%);
          padding: clamp(20px, 3vw, 36px) 0 clamp(20px, 3vw, 36px) 36px;
          border-left: 6px solid #f2c94c;
          background: linear-gradient(90deg, rgba(8, 8, 8, 0.56), transparent 92%);
        }

        .contactRowIndex,
        .contactRowLabel {
          color: rgba(242, 201, 76, 0.72);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .contactIntro h1 {
          margin: 0;
          font-size: clamp(52px, 8vw, 105px);
          line-height: 0.88;
          letter-spacing: -0.07em;
          text-transform: uppercase;
        }

        .contactRule {
          width: min(280px, 72%);
          height: 2px;
          margin-top: 28px;
          background: #f2c94c;
        }

        .contactDirectory {
          margin-top: clamp(72px, 8vw, 112px);
          border-top: 1px solid rgba(245, 242, 233, 0.24);
        }

        .contactRow {
          display: grid;
          grid-template-columns: 52px minmax(150px, 0.35fr) minmax(0, 1fr) auto;
          align-items: center;
          gap: 20px;
          min-width: 0;
          min-height: 92px;
          padding: 22px 0;
          border-bottom: 1px solid rgba(245, 242, 233, 0.24);
          color: inherit;
          text-decoration: none;
          transition: border-color 180ms ease, color 180ms ease;
        }

        .contactRow:hover,
        .contactRow:focus-visible {
          border-color: #f2c94c;
          outline: none;
        }

        .contactRowIndex {
          color: #f2c94c;
        }

        .contactRowLabel {
          color: #f5f2e9;
        }

        .contactRowValue {
          min-width: 0;
          overflow-wrap: break-word;
          color: #c7c0b3;
          font-size: clamp(16px, 2vw, 22px);
          line-height: 1.35;
        }

        .contactRowAction {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #f2c94c;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .contactArrow {
          display: inline-block;
          transition: transform 180ms ease;
        }

        .contactRow:hover .contactArrow,
        .contactRow:focus-visible .contactArrow {
          transform: translateX(5px);
        }

        @media (max-width: 700px) {
          .contactContent {
            width: calc(100% - 28px);
            padding: 82px 0 100px;
          }

          .contactIntro {
            width: calc(100% - 26px);
            padding-left: 22px;
          }

          .contactRow {
            grid-template-columns: 42px minmax(0, 1fr) auto;
            gap: 12px;
            min-height: 112px;
            padding: 22px 0;
          }

          .contactRowLabel {
            grid-column: 2 / -1;
            grid-row: 1;
          }

          .contactRowIndex {
            grid-column: 1;
            grid-row: 1 / span 2;
            align-self: start;
          }

          .contactRowValue {
            grid-column: 2;
            grid-row: 2;
          }

          .contactRowAction {
            grid-column: 3;
            grid-row: 2;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contactRow,
          .contactArrow {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
