/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-mode-text': 'rgb(146,154,142)',
        'light-mode-text': 'rgb(30,30,30)'
      },
      backgroundImage: theme => ({
        'dark-mode-bg': "url('./assets/bg-dark-mode.jpg')",
        'light-mode-bg': "url('./assets/bg-light-mode.jpg')"
      }),
      spacing: {
        '30': '30px',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'capture-waves': ['Capture The Waves', 'sans-serif'],
      },
      fontWeight: {
        'thin': 100,
        'extra-light': 200,
        'light': 300,
        'regular': 400,
        'medium': 500,
        'bold': 700
      },
    },
  },
  plugins: [],
};


