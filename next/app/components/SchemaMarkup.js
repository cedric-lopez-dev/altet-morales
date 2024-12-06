import Script from 'next/script'

export default function SchemaMarkup() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Cabinet Aurélie Altet-Morales",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Perpignan",
            "addressRegion": "Occitanie",
            "addressCountry": "FR"
        },
        "description": "Cabinet d'avocat spécialisé en droit de la famille, pénal et civil",
        "telephone": "04 68 51 00 19",
        "email": "ampr@orange.fr",
        "openingHours": "Mo-Fr 09:00-18:00"
    }

    return (
        <Script
            id="schema-org"
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    )
} 