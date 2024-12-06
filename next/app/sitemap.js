export default function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_DOMAIN

    if (!baseUrl) {
        throw new Error('NEXT_PUBLIC_DOMAIN environment variable is not defined')
    }

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/avocat-perpignan`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        }
    ].map(route => ({
        ...route,
        lastModified: route.lastModified.toISOString()
    }))
} 