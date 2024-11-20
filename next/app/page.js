import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronRight,
  Scale,
  Building2,
  Briefcase,
  Users,
  FileText,
  MessageCircle,
  DollarSign,
  Clock,
  Star,
  Award
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="w-full">
        {/* Top Bar */}
        <div className="bg-[#1B1B1B] py-3">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-6 text-white">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:contact@altet-morales-avocat.fr" className="text-sm hover:text-[#b1976b]">
                    contact@altet-morales-avocat.fr
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">04 68 51 00 19</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-white hover:text-[#b1976b] cursor-pointer" />
                <Twitter className="w-5 h-5 text-white hover:text-[#b1976b] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Logo & Navigation */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
              <Scale className="w-12 h-12 text-[#b1976b]" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800">Aurélie Altet-Morales</span>
                <span className="text-sm text-gray-600">Avocat à Perpignan</span>
              </div>
            </Link>
            <nav className="hidden lg:block">
              <ul className="flex space-x-8">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-800 hover:text-[#b1976b] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-cover bg-center py-32"
          style={{ backgroundImage: "url('/pexels-sora-shimazaki-5668882.jpg')" }}>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">Maître Aurélie Altet-Morales<br />Votre avocat à Perpignan</h1>
              <p className="text-xl mb-8">Faites-moi part, au plus vite, de vos demandes !</p>
              <button className="bg-transparent border-2 border-white px-8 py-3 text-white hover:bg-white hover:text-black transition-colors duration-200">
                En savoir plus
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Confiez vos problématiques à votre avocate expérimentée</h2>
              <p className="text-gray-600">Une justice à taille humaine</p>
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
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Votre Nom"
                    className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded focus:outline-none focus:border-white"
                  />
                  <input
                    type="email"
                    placeholder="Votre Email"
                    className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded focus:outline-none focus:border-white"
                  />
                  <textarea
                    placeholder="Votre Message"
                    rows={4}
                    className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/70 border border-white/30 rounded focus:outline-none focus:border-white"
                  ></textarea>
                  <button className="bg-[#b1976b] text-white px-8 py-3 rounded hover:bg-[#a08555] transition-colors duration-200">
                    Envoyer
                  </button>
                  <p className="text-white/70 text-sm mt-4">
                    En soumettant ce formulaire, vous acceptez que les informations saisies soient utilisées pour permettre de vous recontacter dans le cadre de votre demande. Aucune donnée n'est conservée après le traitement de votre demande. Pour en savoir plus sur vos droits, consultez notre <a href="/politique-confidentialite" className="underline hover:text-white">politique de confidentialité</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1B1B1B] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-[#b1976b]" />
                  <p>3 Place de Catalogne 66000 Perpignan</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-[#b1976b]" />
                  <p>04 68 51 00 19</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-[#b1976b]" />
                  <a href="mailto:contact@altet-morales-avocat.fr" className="hover:text-[#b1976b]">
                    contact@altet-morales-avocat.fr
                  </a>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div>
              <h3 className="text-xl font-bold mb-6">Horaires d'ouverture</h3>
              <div className="space-y-2">
                <p>Lundi - Vendredi</p>
                <p className="text-[#b1976b]">9:00 - 12:00 | 14:00 - 18:00</p>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-xl font-bold mb-6">Navigation</h3>
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="hover:text-[#b1976b] transition-colors duration-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xl font-bold mb-6">Suivez-nous</h3>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 hover:text-[#b1976b] cursor-pointer transition-colors duration-200" />
                <Twitter className="w-6 h-6 hover:text-[#b1976b] cursor-pointer transition-colors duration-200" />
                <Linkedin className="w-6 h-6 hover:text-[#b1976b] cursor-pointer transition-colors duration-200" />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Cabinet Aurélie Altet-Morales. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const menuItems = [
  { label: "Accueil", href: "/" },
  { label: "Cabinet", href: "/cabinet" },
  { label: "Domaines d'Intervention", href: "/domaines" },
  { label: "Honoraires", href: "/honoraires" },
  { label: "Contact", href: "/contact" }
];

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
