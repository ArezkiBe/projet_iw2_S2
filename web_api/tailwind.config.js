export default {
  css: [
      '@/assets/css/common.import.styl',
  ],
  theme: {
      extend: {
          colors:{
              "theme-green": '#3D8A70',
              "theme-lightgreen": '#EDF7F4',
              "theme-darkgreen": '#00514F',
              "theme-lightgray": '#E6E6E6',
              "theme-mediumgray": "#858585",
              "theme-darkgray": '#33413B',
              "theme-lightbrown": "#4D4D4D"
          },
          fontFamily: {
              text: ['Roboto', 'sans-serif'],
              title: ['Argentum', 'sans-serif']
          }
      },
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('tailwind-scrollbar'),
      require('tailwind-scrollbar-hide'),
  ],
}