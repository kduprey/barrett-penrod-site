import { Config } from "tailwindcss";

module.exports = {
  theme: {
    fontFamily: {
      sans: ["var(--font-montserrat)", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#364249",
        secondary: "#E3F2FC",
      },
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
