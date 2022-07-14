module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			sans: ["Montserrat", "Arial", "sans-serif"],
		},
		extend: {
			colors: {
				// primary: "rgb(1, 87, 97)",
				// secondary: "rgb(247,220,79)",
				// 1st
				// primary: "#5A7683",
				// secondary: "#E0F3FD",
				// 2nd
				// primary: "#353A41",
				// secondary: "#D8E9F1",
				// 3rd
				// primary: "#6A7799",
				// secondary: "#E0F3FD",
				// 4th
				// primary: "#A7D7F3",
				// secondary: "#191D22",
				// 5th
				primary: "#364249",
				secondary: "#E3F2FC",
			},
		},
	},
	plugins: [
		require("prettier-plugin-tailwindcss"),
		require("@tailwindcss/forms"),
	],
};
