import { defineCliConfig } from "sanity/cli";
// import tsconfigPaths from "vite-tsconfig-paths";

export default defineCliConfig({
	api: {
		projectId: "n8emrwer",
	},
	graphql: [
		{
			id: "production",
			workspace: "production",
		},
		{
			id: "staging",
			workspace: "staging",
		},
	],
});
