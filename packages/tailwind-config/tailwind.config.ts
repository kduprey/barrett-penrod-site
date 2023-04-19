import type { Config } from "tailwindcss";

export const baseTailwindConfig: Config = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
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
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("@tailwindcss/forms"),
  ],
} satisfies Config;
