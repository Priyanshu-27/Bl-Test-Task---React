/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: { min: "320px", max: "440px" },
      ss: { min: "440px", max: "640px" },
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1024px",
      xxl: "1200px",
      img: { min: "1200px", max: "1376px" },
    },
  },
  plugins: [],
};
