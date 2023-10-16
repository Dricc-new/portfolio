/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark:{
          50: '#dcdce1',
          100: '#d2d2d7',
          200: '#b4b4b9',
          300: '#96969b',
          400: '#78787d',
          500: '#5f5f64',
          600: '#46464b',
          700: '#2d2d32',
          800: '#1e1e23',
          900: '#141418',
          950: '#0e0e10',
        },
      }
    },
  },
  plugins: [],
}