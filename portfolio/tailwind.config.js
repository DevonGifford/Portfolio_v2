/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth: {
      container: "auto",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {  //l refers to landscape orientation
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        'no1': "url('../public/assets/images/ProjectPictures/ComingSoon2.png')",
        'no2': "url('../public/assets/images/ProjectPictures/Smallened/ComingSoon3_small.png')",
        'no3': "url('../public/assets/images/ProjectPictures/Smallened/ComingSoon1_small.png')",
        'no4': "url('../public/assets/images/ProjectPictures/Smallened/ComingSoon4_small.png')",
      },
      fontFamily : {
        bodyFont: ['Montserrat', 'sans-serif'],
        titleFont: ['Inter', 'sans-serif'],
        codeFont: ['Fira Code', 'monospace']
      },
      boxShadow : {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bodyColor: "#0A192F",
        textGreen: "#64ffda",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(100, 255, 218, 0.1)", 
      },
    },
  },
  plugins: [require ("tailwind-scrollbar")],
}
