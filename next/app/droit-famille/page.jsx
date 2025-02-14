import Link from 'next/link';

export const metadata = {
    title: "Droit de la Famille à Perpignan | Me Aurélie Altet-Morales",
    description: "Avocate spécialisée en droit de la famille à Perpignan : divorce, garde d'enfants, pension alimentaire. Accompagnement personnalisé et solutions adaptées.",
    keywords: [
        "droit famille Perpignan",
        "avocat famille",
        "divorce Perpignan",
        "garde enfants",
        "pension alimentaire",
        "médiation familiale"
    ],
};

export default function DroitFamille() {
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
                                Droit de la Famille à Perpignan
                            </h1>
                            <p className="text-xl mb-8">
                                Un accompagnement juridique personnalisé pour protéger vos intérêts et ceux de votre famille
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold mb-8">
                                Une expertise au service de votre famille
                            </h2>

                            <p className="text-gray-700 mb-6">
                                Le droit de la famille touche aux aspects les plus personnels de notre vie. En tant qu'avocate expérimentée, je vous accompagne avec empathie et professionnalisme dans toutes vos démarches juridiques familiales.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 my-12">
                                {domainesIntervention.map((domaine, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-4">{domaine.titre}</h3>
                                        <ul className="space-y-2">
                                            {domaine.points.map((point, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-[#b1976b] mr-2">•</span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-[#FF7BE5]/10 p-8 rounded-lg mb-12">
                                <h3 className="text-2xl font-bold mb-4">
                                    Mon engagement pour votre situation
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Je m'engage à vous offrir :
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-[#FF7BE5] mr-2">✓</span>
                                        Une écoute attentive et bienveillante
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FF7BE5] mr-2">✓</span>
                                        Des solutions juridiques adaptées à votre situation
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FF7BE5] mr-2">✓</span>
                                        Un accompagnement personnalisé tout au long de la procédure
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#FF7BE5] mr-2">✓</span>
                                        Une défense rigoureuse de vos intérêts
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
        titre: "Procédures familiales",
        points: [
            "Divorce par consentement mutuel",
            "Divorce pour faute",
            "Séparation de corps",
            "Rupture de PACS",
            "Médiation familiale"
        ]
    },
    {
        titre: "Protection de la famille",
        points: [
            "Garde d'enfants et droit de visite",
            "Pension alimentaire",
            "Autorité parentale",
            "Modification des mesures",
            "Protection des mineurs"
        ]
    }
]; 