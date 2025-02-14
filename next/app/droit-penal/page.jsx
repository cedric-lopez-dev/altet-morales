import Link from 'next/link';

export const metadata = {
    title: "Avocat Droit Pénal à Perpignan | Me Aurélie Altet-Morales",
    description: "Défense pénale, assistance aux victimes, accompagnement dans les procédures pénales à Perpignan. Expertise et conseil en droit pénal.",
    keywords: [
        "avocat pénal Perpignan",
        "défense pénale",
        "droit pénal",
        "avocat victime",
        "assistance judiciaire",
        "procédure pénale"
    ],
};

export default function DroitPenal() {
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
                                Votre Défense Pénale à Perpignan
                            </h1>
                            <p className="text-xl mb-8">
                                Une expertise juridique rigoureuse pour défendre vos droits et intérêts
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <div className="prose max-w-none">
                                <h2 className="text-3xl font-bold mb-8 text-dark">
                                    Une défense pénale sur mesure
                                </h2>

                                <p className="text-gray-700 mb-8">
                                    Le droit pénal touche à ce que nous avons de plus précieux : notre liberté. En tant qu'avocate expérimentée, je vous accompagne à chaque étape de la procédure pénale, que vous soyez mis en cause ou victime d'une infraction.
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
                                        Mon engagement dans votre défense
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Je m'engage à vous offrir :
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <span className="text-[#FF7BE5] mr-2">✓</span>
                                            Disponibilité 24/7 pour les urgences pénales
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#FF7BE5] mr-2">✓</span>
                                            Analyse approfondie de votre dossier
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#FF7BE5] mr-2">✓</span>
                                            Stratégie de défense personnalisée
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#FF7BE5] mr-2">✓</span>
                                            Accompagnement à chaque étape de la procédure
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
                    </div>
                </section>
            </main>
        </div>
    );
}

const domainesIntervention = [
    {
        titre: "Défense pénale",
        points: [
            "Assistance en garde à vue",
            "Comparution immédiate",
            "Instruction pénale",
            "Tribunal correctionnel",
            "Cour d'assises"
        ]
    },
    {
        titre: "Assistance aux victimes",
        points: [
            "Constitution de partie civile",
            "Accompagnement procédural",
            "Réparation du préjudice",
            "Violences conjugales",
            "Protection des mineurs"
        ]
    }
]; 