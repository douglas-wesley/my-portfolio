/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-orange': '#FF9B51', // Ajuste para o hex do seu Figma
            },
            boxShadow: {
                'neo': '5px 5px 0px 0px #1E1E1E', // Sombra personalizada
            }
        },
    },
    plugins: [],
}