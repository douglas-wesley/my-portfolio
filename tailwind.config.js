/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-orange': '#FF9E5E', // Ajuste para o hex do seu Figma
            },
            boxShadow: {
                'neo': '5px 5px 0px 0px rgba(0, 0, 0, 1)',
            }
        },
    },
    plugins: [],
}