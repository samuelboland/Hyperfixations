module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './lib/**/*.{js,ts,jsx,tsx}',
    ],
    daisyui: {
        themes: ['cmyk'],
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
