/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: '900px',
            md: '1080px',
            lg: '1630px',
            xl: '2440px',
        },
        extend: {},
    },
    plugins: [],
}