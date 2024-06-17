// @ts-check
/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ["@bpvs/eslint-config/eslint/next"].map((v) => require.resolve(v)),
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
