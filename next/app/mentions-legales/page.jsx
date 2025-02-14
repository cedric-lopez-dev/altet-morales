import Link from 'next/link';

export const metadata = {
    title: "Mentions Légales | Cabinet d'avocat Me Aurélie Altet-Morales à Perpignan",
    description: "Mentions légales du cabinet d'avocat de Me Aurélie Altet-Morales à Perpignan",
};

export default function MentionsLegales() {
    return (
        <div className="bg-gray-50">
            <main>
                <section className="relative bg-cover bg-center py-20"
                    style={{ background: 'linear-gradient(to bottom, #FFA4ED 0%, #ffffff 100%)' }}>
                    <div className="absolute inset-0 bg-dark/20"></div>
                    <div className="container mx-auto px-4 relative">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
                            Mentions Légales
                        </h1>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Éditeur du site</h2>
                                    <p className="text-gray-700">
                                        Cabinet d'avocat Me Aurélie ALTET-MORALES<br />
                                        3 Place de Catalogne 66000 Perpignan<br />
                                        Tél : 04 68 51 00 19<br />
                                        Email : ampr@orange.fr
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Barreau</h2>
                                    <p className="text-gray-700">
                                        Me Aurélie ALTET-MORALES est inscrite au Barreau de Perpignan
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Hébergement</h2>
                                    <p className="text-gray-700">
                                        Ce site est hébergé par OVH SAS<br />
                                        2 rue Kellermann - BP 80157<br />
                                        59053 Roubaix Cedex 1<br />
                                        France
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Propriété intellectuelle</h2>
                                    <p className="text-gray-700">
                                        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Protection des données personnelles</h2>
                                    <p className="text-gray-700">
                                        Les seules données personnelles collectées sont celles que vous nous transmettez volontairement via le formulaire de contact. Ces informations ne sont utilisées que pour répondre à votre demande et ne font l'objet d'aucun stockage ni traitement ultérieur. Aucune donnée n'est conservée après le traitement de votre demande.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Cookies</h2>
                                    <p className="text-gray-700">
                                        Ce site n'utilise aucun cookie et ne collecte aucune donnée de navigation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
} 