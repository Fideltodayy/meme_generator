/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'arch': ['Architects Daughter', 'cursive'],
      'poppins': ['Poppins', 'sans-serif']

    }
  },
  plugins: [],
}