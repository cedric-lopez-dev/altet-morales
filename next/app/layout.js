
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';
import SchemaMarkup from '@/components/SchemaMarkup';

// Métadonnées par défaut
export const metadata = {
  title: 'Cabinet d\'avocat à Perpignan',
  description: 'Cabinet d\'avocat spécialisé à Perpignan - Consultation et accompagnement juridique',
  keywords: 'avocat, perpignan, droit, juridique, consultation',
};

const menuItems = [
  { label: "Accueil", href: "/" },
  { label: "Cabinet", href: "/avocat-perpignan" },
  { label: "Contact", href: "/contact" }
];

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <SchemaMarkup />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header menuItems={menuItems} />
          <main className="flex-grow">
            {children}
          </main>
          <Footer menuItems={menuItems} />
        </div>
      </body>
    </html>
  );
}
