import { defineConfig } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

const config = defineConfig({
	clean: true,
	dts: true,
	entry: ["src/index.ts"],
	format: ["cjs", "esm"],
	minify: isProduction,
	sourcemap: true,
});
// eslint-disable-next-line import/no-default-export -- required for tsup
export default config;
