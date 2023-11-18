/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding : '.75rem'
      },
      colors: {
        // Configure your color palette here
          primary : '#FFBB18',
          secondary : '#006C51',
          third : '#006491',
          light :'#BEBEBE',
          dark: '#333333',
      },
      fontFamily:{
        GenSekiGothic : 'GenSekiGothic,sans-serif',
        Montserrat : "Montserrat, sans-serif;"
      }
    },
  },
  plugins: [],
}
