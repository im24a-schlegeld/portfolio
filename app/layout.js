import './globals.css';

export const metadata = {
  title: {
    default: 'Dario Schlegel | Portfolio',
    template: '%s | Dario Schlegel',
  },
  description: 'Portfolio von Dario Schlegel mit Softwareprojekten, Frontend-Arbeiten und persönlichen Interessen.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
