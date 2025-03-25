/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zuume: ['Oswald', 'sans-serif'],
        impact: ['Impact', 'sans-serif'],
      },

      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
      },
    },
  },
  plugins: [],
}