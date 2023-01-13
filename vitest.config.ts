import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		coverage: {
			all: true,
			include: ["src/**/*.{ts,tsx}"],
			reporter: ["text", "json", "html", "lcov"],
		},
		environment: "jsdom",
		globals: true,
	},
});
