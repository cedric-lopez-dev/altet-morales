/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#FF7BE5', // Rose principal
                    light: '#FFA4ED', // Version plus claire
                    dark: '#FF52DD', // Version plus foncée
                },
                secondary: {
                    DEFAULT: '#3B256D', // Violet foncé
                    light: '#4A2E89',
                },
                accent: {
                    DEFAULT: '#FFB7F0', // Rose clair pour les accents
                    light: '#FFF0FB', // Rose très clair pour les fonds
                },
                dark: {
                    DEFAULT: '#1A1B1E', // Couleur sombre pour le texte
                    light: '#2B2B2B',
                }
            },
        },
    },
    plugins: [],
} 