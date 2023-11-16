import tailwindcssForms from "@tailwindcss/forms";
import tailwindcssTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export const tailwindcssConfig = {
	content: [],
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
	plugins: [tailwindcssForms, tailwindcssTypography],
} satisfies Config;
