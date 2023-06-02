/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-black': 'rgb(20, 23, 26)',
      },
      spacing: {
        '30': '30px',
      }
    },
  },
  plugins: [],
};

