import SiteHeader from '../components/SiteHeader';
import { portfolioContact } from '../../data/portfolio';

export const metadata = {
  title: 'Kontakt',
  description: 'Kontaktseite von Dario Schlegel.',
};

export default function Kontakt() {
  return (
    <main className="contactPage">
      <SiteHeader activeKey="contact" roadStripes />

      <section className="contactContent" aria-labelledby="contact-title">
        <h1 id="contact-title">Kontakt</h1>
        <p className="contactLead">
          Für mein Praktikumsjahr von Sommer 2027 bis Sommer 2028 suche ich eine Stelle im Bereich Informatik Applikationsentwicklung.
        </p>
        <a className="contactButton" href={`mailto:${portfolioContact.email}`}>
          E-Mail schreiben
        </a>
      </section>

      <style>{`
        .contactPage {
          min-height: 100svh;
          color: #f7f2e8;
          font-family: Bahnschrift, 'Arial Narrow', 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #070707 0%, #151411 48%, #050505 100%);
        }

        .contactContent {
          width: min(820px, calc(100% - 40px));
          margin: 0 auto;
          padding: clamp(84px, 13vw, 170px) 0 140px;
        }

        .contactContent h1 {
          margin: 0;
          font-size: clamp(64px, 13vw, 156px);
          line-height: 0.8;
          letter-spacing: -0.08em;
          text-transform: none;
        }

        .contactLead {
          max-width: 680px;
          margin: 34px 0 0;
          color: #cfc7ba;
          font-size: clamp(19px, 2.4vw, 27px);
          line-height: 1.5;
        }

        .contactButton {
          min-height: 46px;
          display: inline-flex;
          align-items: center;
          margin-top: 34px;
          padding: 0 18px;
          border: 1px solid rgba(242, 201, 76, 0.5);
          color: #171717;
          background: #f2c94c;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.14em;
          text-decoration: none;
          text-transform: uppercase;
          transition: transform 180ms ease, filter 180ms ease;
        }

        .contactButton:hover,
        .contactButton:focus-visible {
          transform: translateY(-2px);
          filter: brightness(1.08);
          outline: none;
        }

        @media (max-width: 620px) {
          .contactContent {
            width: min(100% - 28px, 820px);
            padding-top: 70px;
          }
        }
      `}</style>
    </main>
  );
}
