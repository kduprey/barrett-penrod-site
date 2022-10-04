import { defineConfig } from "cypress";

const execa = require("execa");
const findBrowser = () => {
	// the path is hard-coded for simplicity
	const browserPath =
		"/Applications/Brave Browser.app/Contents/MacOS/Brave Browser";

	return execa(browserPath, ["--version"]).then(
		(result: { stdout: string }) => {
			// STDOUT will be like "Brave Browser 77.0.69.135"
			// @ts-ignore
			const [, version] = /Brave Browser (\d+\.\d+\.\d+\.\d+)/.exec(
				result.stdout
			);
			const majorVersion = parseInt(version.split(".")[0]);

			return {
				name: "Brave",
				channel: "stable",
				family: "chromium",
				displayName: "Brave",
				version,
				path: browserPath,
				majorVersion,
			};
		}
	);
};

export default defineConfig({
	projectId: "kzgfbk",
	fixturesFolder: false,
	e2e: {
		setupNodeEvents(on, config) {
			return findBrowser().then(
				(browser: ConcatArray<Cypress.Browser>) => {
					return {
						browsers: config.browsers.concat(browser),
					};
				}
			);
		},
		baseUrl: "http://localhost:3000",
		specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
		supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
	},
});
