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

import ContactForm from "@/components/ContactForm";
import { Users, Scale, FileText } from "lucide-react";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative bg-cover bg-center py-32"
          style={{ backgroundImage: "url('/pexels-sora-shimazaki-5668882.jpg')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">Maître Aurélie Altet-Morales<br />Votre avocate à Perpignan</h1>
              <p className="text-xl mb-8">Faites-moi part, au plus vite, de vos demandes !</p>
              <Link href="/avocat-perpignan">
                <button className="bg-transparent border-2 border-white px-8 py-3 text-white hover:bg-white hover:text-black transition-colors duration-200">
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
              <h2 className="text-4xl font-bold mb-4">Confiez vos problématiques à votre avocate expérimentée</h2>
              <p className="text-gray-600">Une justice à taille humaine</p>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Forte d'une expérience significative dans le domaine juridique, je vous accompagne dans toutes vos démarches avec professionnalisme et bienveillance. Chaque situation est unique et mérite une attention particulière.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200">
                  <service.icon className="w-12 h-12 text-[#b1976b] mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative bg-cover bg-center py-20"
          style={{ backgroundImage: "url('/pexels-pavel-danilyuk-8112199.jpg')" }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
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
