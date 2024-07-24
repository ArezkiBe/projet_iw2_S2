/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './index.js', "./**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        texte: ['texte', 'sans-serif'],
        title: ['title', 'serif'],
      },
    },
  },
  plugins: [],
}

