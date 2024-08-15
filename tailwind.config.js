/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#151617",
        secondary: "#1f2223",
        textColor: "#f2f2f2",
        colorOne: "#6257ff",
        colorTwo: "#ee49fd",
      },
      fontFamily: {
        heading: "Josefin Sans",
        subHeading: "Outfit",
        para: "Figtree" 
      },
      backgroundImage: {
        primaryGradient: "linear-gradient(to bottom right, #6257ff, #ee49fd)",
      },
      screens: {
        xss: "318px",
        xs: "365px",
        smm: "425px"
      } 
    },
  },
  plugins: [],
};
