import { defineConfig } from "cypress";
import fs from "fs";
import path from "path";

export default defineConfig({
	projectId: "kzgfbk",
	fixturesFolder: false,
	chromeWebSecurity: false,
	e2e: {
		baseUrl: "http://localhost:3000",
		specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
		supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
		setupNodeEvents(on, config) {
			on("task", {
				findFile(fileName: string) {
					const downloadsFolder = config.downloadsFolder;
					const filePath = path.resolve(downloadsFolder, fileName);

					if (fs.existsSync(filePath)) {
						return true;
					}

					return false;
				},
			});

			return config;
		},
	},
});
