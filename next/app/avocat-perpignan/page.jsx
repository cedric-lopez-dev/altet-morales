import Image from "next/image";

export const metadata = {
    title: 'Avocat Perpignan - Maître Altet-Morales | Droit Famille, Pénal, Civil',
    description: 'Cabinet d\'avocat à Perpignan - Maître Aurélie Altet-Morales, experte en droit de la famille, pénal et civil. Consultation sur RDV. Plus de 20 ans d\'expérience. Défense de vos droits.',
    keywords: 'avocat perpignan, cabinet avocat perpignan, avocat droit famille perpignan, avocat pénal perpignan, avocat civil perpignan, divorce perpignan, succession perpignan, défense pénale perpignan',
    openGraph: {
        title: 'Avocat Perpignan - Maître Altet-Morales | Expert Droit Famille & Pénal',
        description: 'Cabinet d\'avocat à Perpignan - Maître Aurélie Altet-Morales, spécialiste en droit de la famille, pénal et civil. Consultation personnalisée sur rendez-vous.',
        url: 'https://[votre-domaine].fr/avocat-perpignan',
        siteName: 'Cabinet Aurélie Altet-Morales - Avocat Perpignan',
        locale: 'fr_FR',
        type: 'website'
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large'
        }
    }
};

export default function AvocatPerpignan() {
    return (
        <main className="container mx-auto px-4 py-12 max-w-7xl">
            {/* Hero Section */}
            <section className="mb-20 text-center">
                <h1 className="text-5xl font-bold mb-8 text-gray-800 leading-tight">
                    Maître Aurélie Altet-Morales
                </h1>
                <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Votre avocate à Perpignan, spécialisée en droit de la famille, pénal, civil et commercial
                </p>
            </section>

            {/* Section Présentation */}
            <section className="mb-20">
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    <div className="md:w-1/2">
                        <Image
                            src="/cabinet-avocat-perpignan.jpg"
                            alt="Cabinet de Maître Aurélie Altet-Morales à Perpignan"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-lg"
                            priority
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                            Un accueil chaleureux et professionnel
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Maître Aurélie Altet-Morales vous accueille chaleureusement au sein de son cabinet situé à Perpignan pour répondre à vos demandes. Attachée aux valeurs qui font sa renommée, à savoir le sérieux et la qualité, elle met son expertise à votre service.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section Domaines d'expertise */}
            <section className="mb-20">
                <h2 className="text-3xl font-semibold mb-12 text-center">Nos domaines d'intervention</h2>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-6 text-[#b1976b]">Droit de la Famille</h3>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center">
                                <span className="text-[#b1976b] mr-2">•</span>
                                Divorce contentieux
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#b1976b] mr-2">•</span>
                                Divorce par consentement mutuel
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#b1976b] mr-2">•</span>
                                Séparation hors divorce
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#b1976b] mr-2">•</span>
                                Adoption
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#b1976b] mr-2">•</span>
                                Ordonnance de protection
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#b1976b] mr-2">•</span>
                                Patrimoine et successions
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-6 text-[#b1976b]">Droit Pénal</h3>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center">
                                <span className="text-[#b1976b] mr-2">•</span>
                                Défense pénale
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#b1976b] mr-2">•</span>
                                Droit des victimes
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#b1976b] mr-2">•</span>
                                Assistance juridique
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-6 text-[#b1976b]">Autres Domaines</h3>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center">
                                <span className="text-[#b1976b] mr-2">•</span>
                                Droit civil
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#b1976b] mr-2">•</span>
                                Droit commercial
                            </li>
                            <li className="flex items-center">
                                <span className="text-[#b1976b] mr-2">•</span>
                                Conseil juridique
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section Contact */}
            <section className="bg-gray-50 p-10 rounded-xl shadow-md">
                <h2 className="text-3xl font-semibold mb-8 text-center">Contactez votre avocate à Perpignan</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700">
                            Pour prendre rendez-vous ou obtenir plus d'informations, contactez le cabinet :
                        </p>
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-center space-x-3">
                                <span className="text-[#b1976b]">📍</span>
                                <span>[Adresse du cabinet à Perpignan]</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-[#b1976b]">📞</span>
                                <span>04 68 51 00 19</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-[#b1976b]">✉️</span>
                                <span>ampr@orange.fr</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">
                            Consultation sur rendez-vous du lundi au vendredi.
                            Premier rendez-vous d'évaluation de votre situation.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
} 