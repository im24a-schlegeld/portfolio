export default function About() {
  return (
    <div className="page">
      {/* Header */}
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

          <p className="text">
            Ich bin Schüler in der IMS.
          </p>
        </section>
      </main>

      <style>{`
        :root {
          --bg: #f8fafc;
          --card: #ffffff;
          --text: #111827;
          --muted: #6b7280;
          --border: #e5e7eb;
          --accent: #2563eb;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
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
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header */
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
        }

        .navLink {
          font-size: 15px;
          color: var(--muted);
          transition: 0.2s ease;
        }

        .navLink:hover {
          color: var(--text);
        }

        .active {
          color: var(--accent);
          font-weight: 500;
        }

        /* Section */
        .section {
          padding: 120px 0;
        }

        .title {
          font-size: 40px;
          margin: 0 0 24px;
          letter-spacing: -0.02em;
        }

        .text {
          font-size: 18px;
          line-height: 1.7;
          color: var(--muted);
          max-width: 600px;
        }
      `}</style>
    </div>
  );
}