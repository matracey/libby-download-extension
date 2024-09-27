/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './action/**/*.tsx',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
}
