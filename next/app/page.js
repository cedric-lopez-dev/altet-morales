export const metadata = {
  title: "Avocat Droit de la Famille & Pénal Perpignan | Me Aurélie Altet-Morales",
  description: "Cabinet d'avocat à Perpignan spécialisé en droit de la famille (divorce, garde d'enfants), droit pénal et droit civil. Consultation sur rendez-vous avec Me Aurélie Altet-Morales.",
  keywords: [
    "avocat Perpignan",
    "avocat droit famille Perpignan",
    "avocat divorce Perpignan",
    "avocat pénal Perpignan",
    "Aurélie Altet-Morales",
    "garde d'enfants",
    "pension alimentaire",
    "succession"
  ],
  openGraph: {
    title: "Avocat Droit de la Famille & Pénal Perpignan | Me Aurélie Altet-Morales",
    description: "Cabinet d'avocat à Perpignan spécialisé en droit de la famille (divorce, garde d'enfants), droit pénal et droit civil. Consultation sur rendez-vous.",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import ContactForm from "./components/ContactForm";
import { Users, Scale, FileText } from "lucide-react";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="bg-gray-50">
      <main>
        {/* Hero Section */}
        <section className="relative bg-cover bg-center py-32"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">Maître <span className="text-[#FF7BE5]">Aurélie Altet-Morales</span><br />Votre avocate à Perpignan</h1>
              <p className="text-xl mb-8">Faites-moi part, au plus vite, de vos demandes !</p>
              <Link href="/avocat-perpignan">
                <button className="bg-[#FF7BE5] hover:bg-[#FFA4ED] px-8 py-3 text-white rounded-md transition-colors duration-200">
                  En savoir plus
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-dark">Confiez vos problématiques à votre avocate expérimentée</h2>
              <p className="text-dark/80">Une justice à taille humaine</p>
              <p className="text-dark/70 mt-4 max-w-2xl mx-auto">
                Forte d'une expérience significative de 25 ans dans le domaine juridique, je vous accompagne dans toutes vos démarches avec professionnalisme et bienveillance.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-200 border border-accent">
                  <service.icon className="w-12 h-12 text-[#FF7BE5] mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-dark">{service.title}</h3>
                  <p className="text-dark/70">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visio Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 text-dark">Consultation en Visioconférence</h2>
              <p className="text-xl text-dark/80 mb-8">
                Pour plus de flexibilité, je propose également des consultations à distance
              </p>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="max-w-xl mx-auto space-y-4">
                  <h3 className="text-2xl font-semibold text-[#FF7BE5]">Les avantages</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                      <span className="text-[#FF7BE5] mr-2">✓</span>
                      Consultation depuis votre domicile
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF7BE5] mr-2">✓</span>
                      Gain de temps et praticité
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FF7BE5] mr-2">✓</span>
                      Même qualité de conseil qu'en présentiel
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative bg-cover bg-center py-20"
          style={{ backgroundImage: "url('/pexels-pavel-danilyuk-8112199.jpg')" }}>
          <div className="absolute inset-0 bg-dark/80"></div>
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-3xl font-bold text-white mb-6">Contactez-nous</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const services = [
  {
    title: "Droit de la Famille",
    description: "Divorce, garde d'enfants, pension alimentaire, succession",
    icon: Users
  },
  {
    title: "Droit Pénal",
    description: "Défense des victimes, accompagnement dans les procédures pénales",
    icon: Scale
  },
  {
    title: "Droit Civil",
    description: "Contrats, responsabilité civile, litiges",
    icon: FileText
  }
];
