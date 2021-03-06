const { fontSize } = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'Helvetica', 'sans-serif']
      // sans: ['Circular', 'Helvetica', 'sans-serif']
    },
    colors: {
      gray: {
        100: '#F5F5F5',
        200: '#D8D8D8',
        300: '#BBBBBB',
        400: '#9E9E9E',
        500: '#818181',
        600: '#646464',
        700: '#474747',
        800: '#2A2A2A',
        900: '#0D0D0D',
      }
    },
    fontSize: {
      'base': '1rem',
      'lg': '1.5rem',
      'xl': '2rem',
      '2xl': '3rem',
    }
  },
  plugins: [
    require("daisyui")
  ],
}
