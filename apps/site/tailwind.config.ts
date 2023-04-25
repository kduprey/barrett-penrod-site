import { createGlobPatternsForDependencies } from "@nrwl/next/tailwind";
import { join } from "path";
import type { Config } from "tailwindcss";

export default {
	presets: [require("../../packages/tailwind-config/src/index.ts")],
	content: [
		join(__dirname, "./src/**/*.{js,ts,jsx,tsx}"),
		...createGlobPatternsForDependencies(__dirname),
	],
} satisfies Config;
