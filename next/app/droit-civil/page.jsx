import Link from 'next/link';

export const metadata = {
    title: "Avocat Droit Civil à Perpignan | Me Aurélie Altet-Morales",
    description: "Cabinet d'avocat spécialisé en droit civil à Perpignan. Expertise en contrats, litiges, responsabilité civile. Consultation sur rendez-vous.",
    keywords: [
        "droit civil Perpignan",
        "avocat civil",
        "litige civil Perpignan",
        "contrats",
        "responsabilité civile",
        "conseil juridique"
    ],
};

export default function DroitCivil() {
    return (
        <div className="bg-gray-50">
            <main>
                {/* Hero Section */}
                <section className="relative bg-cover bg-center py-32"
                    style={{ background: 'linear-gradient(to bottom, #FFA4ED 0%, #ffffff 100%)' }}>
                    <div className="absolute inset-0 bg-dark/20"></div>
                    <div className="container mx-auto px-4 relative">
                        <div className="max-w-2xl text-dark">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Droit Civil à Perpignan
                            </h1>
                            <p className="text-xl mb-8">
                                Votre partenaire de confiance pour toutes vos affaires civiles
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8">
                                Protégez vos intérêts avec notre expertise en droit civil
                            </h2>

                            <p className="text-gray-700 mb-8">
                                En tant qu'avocate pratiquant le droit civil général, je suis en mesure de vous assister dans une large gamme de domaines juridiques. Que vous ayez besoin d'aide pour résoudre un différend juridique, obtenir une indemnisation suite à un préjudice ou pour vous représenter devant les tribunaux : je vous apporte mon expertise.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                {domainesIntervention.map((domaine, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-4 text-[#FF7BE5]">{domaine.titre}</h3>
                                        <ul className="space-y-2">
                                            {domaine.points.map((point, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-[#FF7BE5] mr-2">•</span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-[#FF7BE5]/10 p-8 rounded-lg mb-12">
                                <h3 className="text-2xl font-bold mb-4">
                                    Mon engagement à vos côtés
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Je m'engage à vous offrir :
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-[#FF7BE5] mr-2">✓</span>
                                        Une analyse approfondie de votre situation
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FF7BE5] mr-2">✓</span>
                                        Des solutions juridiques adaptées
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FF7BE5] mr-2">✓</span>
                                        Une représentation efficace devant les tribunaux
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FF7BE5] mr-2">✓</span>
                                        Un suivi personnalisé de votre dossier
                                    </li>
                                </ul>
                            </div>

                            <div className="text-center">
                                <Link href="/contact">
                                    <button className="bg-[#FF7BE5] text-white px-8 py-3 rounded hover:bg-[#FFA4ED] transition-colors duration-200">
                                        Prendre rendez-vous
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

const domainesIntervention = [
    {
        titre: "Domaines d'intervention",
        points: [
            "Droit des contrats",
            "Responsabilité civile",
            "Litiges entre particuliers",
            "Droit des obligations",
            "Réparation de préjudices"
        ]
    },
    {
        titre: "Notre accompagnement",
        points: [
            "Conseil juridique",
            "Négociation amiable",
            "Rédaction d'actes",
            "Représentation en justice",
            "Exécution des décisions"
        ]
    }
]; 