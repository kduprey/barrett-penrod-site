module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "rgb(1, 87, 97)",
        secondary: "rgb(247,220,79)",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
