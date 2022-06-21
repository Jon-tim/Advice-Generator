const { cyan } = require("color-name");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "light-cyan": "hsl(193, 38%, 86%)",
      "neon-green": "hsl(150, 100%, 66%)",
      "grayish-blue": "hsl(217, 19%, 38%)",
      "dark-grayish-blue": "hsl(217, 19%, 24%)",
      "dark-blue": "hsl(218, 23%, 16%)",
    },
    fontSize: {
      quoteFont: "28px",
    },
    fontFamily: {
      fonts: ["Manrope", "sans-serif"],
    },
    // fontWeight: {
    //   normal: "400",
    //   bold: "800",
    // },
  },
  plugins: [],
};
