/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    'node_modules/preline/dist/*.js',
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['TGAqsaPro'],
        'body': ['TGAqsaPro-regular'],
        'title-regular': ['TGAqsaPro-regular']
      },
      colors: {
        'cs-primary': "#2196F3",
        'primary-hover':"#A3B028",
        'primary-click':"#8F9A21",
        'cs-black': "#191919",
        'cs-gray': "#999999"
      }
    },
  },
  plugins: [
        require('tailwind-scrollbar-hide'),
        require('preline/plugin'),
        require('tw-elements/dist/plugin'),
  ],
}
