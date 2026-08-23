import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: 'Kontakt',
  description: 'Kontaktseite von Dario Schlegel.',
};

export default function Kontakt() {
  return (
    <main className="contactPage">
      <SiteHeader activeKey="contact" roadStripes />

      <section className="contactContent" aria-labelledby="contact-title">
        <p className="contactEyebrow">Direkte Verbindung</p>
        <h1 id="contact-title">Kontakt</h1>
        <p className="contactLead">
          Weitere Projekte und den aktuellen Code findest du auf GitHub.
        </p>

        <div className="contactDetails">
          <div>
            <span>GitHub</span>
            <a href="https://github.com/im24a-schlegeld" target="_blank" rel="noreferrer">
              github.com/im24a-schlegeld
            </a>
          </div>
        </div>
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

        .contactEyebrow {
          margin: 0 0 16px;
          color: #f2c94c;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .contactContent h1 {
          margin: 0;
          font-size: clamp(64px, 13vw, 156px);
          line-height: 0.8;
          letter-spacing: -0.08em;
          text-transform: uppercase;
        }

        .contactLead {
          max-width: 640px;
          margin: 34px 0 0;
          color: #cfc7ba;
          font-size: clamp(19px, 2.4vw, 27px);
          line-height: 1.5;
        }

        .contactDetails {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
          margin-top: 70px;
        }

        .contactDetails > div {
          min-width: 0;
          padding: 20px 0;
          border-top: 1px solid rgba(242, 201, 76, 0.42);
        }

        .contactDetails span {
          display: block;
          margin-bottom: 12px;
          color: #aaa395;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .contactDetails a {
          color: #f7f2e8;
          font-size: clamp(15px, 1.6vw, 19px);
          font-weight: 800;
          overflow-wrap: anywhere;
          text-decoration: none;
        }

        .contactDetails a:hover,
        .contactDetails a:focus-visible {
          color: #f2c94c;
          outline: none;
        }

        @media (max-width: 620px) {
          .contactContent {
            width: min(100% - 28px, 820px);
            padding-top: 70px;
          }

          .contactDetails {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-top: 48px;
          }
        }
      `}</style>
    </main>
  );
}
