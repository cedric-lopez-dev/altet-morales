export default async function sitemap() {
    const baseUrl = 'https://votre-domaine.fr';

    // Routes statiques
    const routes = [
        '',
        '/avocat-perpignan',
        '/contact',
        '/droit-famille',
        '/droit-penal',
        '/droit-civil',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes];
} 