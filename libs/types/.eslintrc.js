module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"standard-with-typescript",
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		tsConfigRootDir: __dirname,
		project: ["./tsconfig.eslint.json", "./tsconfig.json"],
	},
	plugins: ["@typescript-eslint"],
	rules: {},
};
