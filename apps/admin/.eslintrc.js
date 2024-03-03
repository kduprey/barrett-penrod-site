// @ts-check
/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: [
		...["@bpvs/eslint-config/eslint/next"].map((v) => require.resolve(v)),
		"plugin:storybook/recommended",
	],
	parserOptions: {
		project: ["./tsconfig.json"],
	},
	settings: {
		"import/resolver": {
			typescript: {
				project: ["./tsconfig.json"],
			},
		},
	},
};
