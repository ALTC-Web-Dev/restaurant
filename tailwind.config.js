/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/asset/ingredients-bg.png')",
        menu: "url('../public/asset/menu-bg.jpeg')",
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        title: ["Playfair Display"],
      },
    },
  },
  plugins: [],
};
