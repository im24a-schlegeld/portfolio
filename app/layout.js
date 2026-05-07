export const metadata = {
  title: 'Dario Schlegel Portfolio',
  description: 'Portfolio von Dario Schlegel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
