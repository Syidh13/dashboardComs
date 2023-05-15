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
        'headline1': ['primary-Regular'],
        'headline2': ['primary-Bold'],
        'title': ['primary-Bold'],
        'subtitle': ['primary-Regular'],
        'buttonbold': ['primary-Bold'],
        'buttonregular': ['primary-Regular'],
        'body': ['primary-Regular'],
        'caption': ['primary-Regular'],
        'overline': ['primary-Regular'],
      },
      colors: {
        'cs-primary': "#2196F3",
        'cs-primary-soft': "#eff6ff",
        'cs-background': "#f8fafc",
        'cs-primary-hover':"#38bdf8",
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
