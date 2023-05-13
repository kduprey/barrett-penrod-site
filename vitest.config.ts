import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		coverage: {
			reporter: ["text", "json", "html", "lcov"],
			provider: "c8",
			exclude: [
				"coverage/**",
				"dist/**",
				"packages/*/test{,s}/**",
				"**/*.d.ts",
				"cypress/**",
				"test{,s}/**",
				"test{,-*}.{js,cjs,mjs,ts,tsx,jsx}",
				"**/*{.,-}test.{js,cjs,mjs,ts,tsx,jsx}",
				"**/*{.,-}spec.{js,cjs,mjs,ts,tsx,jsx}",
				"**/__tests__/**",
				"**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress}.config.*",
				"**/.{eslint,mocha,prettier}rc.{js,cjs,yml}",
			],
			include: [
				"pages/api/*.ts",
				"pages/api/**/*.ts",
				"utils/**",
				"utils/**/*.ts",
			],
		},
		environment: "jsdom",
		globals: true,
		isolate: true,
		threads: false,
	},
	resolve: {
		alias: {
			pages: path.resolve(__dirname, "src/pages"),
			data: path.resolve(__dirname, "src/data"),
			utils: path.resolve(__dirname, "src/utils"),
		},
	},
});