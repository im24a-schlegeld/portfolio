export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a>
        </nav>

        {children}
      </body>
    </html>
  );
}