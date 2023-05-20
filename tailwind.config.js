/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','./src/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'firaSans': 'Fira Sans, sans-serif',
        'barlow': 'Barlow, sans-serif',
      },
      colors: {
        'desirePink': '#E63946',
        'honeyDew': '#F1FAEE',
        'jellyBlue': '#45789D',
        'spaceCadet': '#1D3557'
      }
    },
  },
  plugins: [],
}

