const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			primary: colors.violet,
			secondary: colors.teal,
			black: colors.black,
			white: colors.white,
			gray: colors.slate,
			danger: colors.red,
			warning: colors.amber,
			success: colors.emerald,
		},
		fontFamily: {
			sans: ["Inter", "sans-serif"],
			serif: ["Georgia", "serif"],
			mono: ["Menlo", "Monaco", "Consolas", "monospace"],
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
