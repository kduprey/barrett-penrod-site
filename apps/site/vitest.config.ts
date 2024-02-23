import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	envDir: "../../.env",
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/utils/vitest.setup.mjs",
	},
});
