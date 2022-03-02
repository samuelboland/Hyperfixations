module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './lib/**/*.{js,ts,jsx,tsx}',
    ],
    daisyui: {
        themes: [
            'cmyk',
            {
                ysayle: {
                    primary: '#33557d',
                    secondary: '#60aec6',
                    accent: '#617091',
                    neutral: '#18141d',
                    'base-100': '#e8e7ea',
                    info: '#18141d',
                    success: '#45945e',
                    warning: '#c28426',
                    error: '#f44336',
                },
            },
            'light',
            'cupcake',
        ],
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
