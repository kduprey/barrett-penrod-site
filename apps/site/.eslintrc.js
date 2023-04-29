/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
	extends: [
		"next/core-web-vitals",
		"prettier",
		"plugin:@typescript-eslint/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: `${__dirname}/../../`,
		project: ["./tsconfig.eslint.json", "./tsconfig.base.json"],
	},
	root: true,
	plugins: ["@typescript-eslint", "eslint-plugin-tsdoc"],
};
