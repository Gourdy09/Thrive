/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FFC400',
        secondary: {
          DEFAULT: '#F2B23D',
          100: '#F2DE3D',
          200: '#EDF23D'
        },
        black: '#181A1B',
        darkborder: '#282A2C',
        gray: '#B1B1B1',
      },
      fontFamily: {
        rthin: ["Roboto-Thin", "sans-serif"],
        rregular: ["Roboto-Regular", "sans-serif"],
        rmedium: ["Roboto-Medium", "sans-serif"],
        rbold: ["Roboto-Bold", "sans-serif"]
      }
    },
  },
  plugins: [],
}

