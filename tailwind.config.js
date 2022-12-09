/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/asset/ingredients-bg.webp')",
        menu: "url('../public/asset/menu-bg.webp')",
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        title: ["Playfair Display"],
      },
    },
  },
  plugins: [],
};
