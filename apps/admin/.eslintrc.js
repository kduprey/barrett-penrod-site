module.exports = {
	root: true,
	extends: ["@bpvs/style-guide/eslint/next"].map(require.resolve),
	parserOptions: {
		project: ["./tsconfig.json"],
	},
	settings: {
		"import/resolver": {
			typescript: {
				project: ["./tsconfig.json"],
			},
		},
		"@typescript-eslint/no-unsafe-assignment": "off",
	},
};
