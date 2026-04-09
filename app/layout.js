export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <nav>
          <a href="/">Home</a> | <a href="/about">Freizeit</a>
        </nav>

        {children}
      </body>
    </html>
  );
}
