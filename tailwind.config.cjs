/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      
      colors: {
        "book-yellow": "#fce62e",
        "book-gray": "#1a1a1c",
        "book-theme": "#8a3bbf",
        "navbar": "#020118"
      },
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};


