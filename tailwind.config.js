/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '12': '3rem',
      },
      colors:{
        purple:"#575cff",
        backgroundcolor:"#0e1014"
       
      },
      boxShadow: {
        '3xl': '10px 10px 0px 1px #575cff',
      }
    },
  },
  plugins: [],
}