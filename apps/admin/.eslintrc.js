module.exports = {
	root: true,
	extends: [
		...["@bpvs/eslint-config/eslint/next"].map(require.resolve),
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
