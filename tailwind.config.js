/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-mode-text': 'rgb(146,154,142)',
        'light-mode-text': 'rgb(30,30,30)'
      },
      spacing: {
        '30': '30px',
      }
    },
  },
  plugins: [],
};

