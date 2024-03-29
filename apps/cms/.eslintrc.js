module.exports = {
	root: true,
	extends: ["@bpvs/eslint-config/eslint/next"].map(require.resolve),
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
	},
	parser: "@typescript-eslint/parser",
	settings: {
		"import/resolver": {
			typescript: {
				project: ["./tsconfig.json"],
			},
		},
	},
};
