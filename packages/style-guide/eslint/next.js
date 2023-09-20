const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
	extends: [
		"@vercel/style-guide/eslint/node",
		"@vercel/style-guide/eslint/browser",
		"@vercel/style-guide/eslint/typescript",
		"@vercel/style-guide/eslint/react",
		"@vercel/style-guide/eslint/next",
		"eslint-config-turbo",
		"eslint-config-prettier",
	].map(require.resolve),
	plugins: ["tailwindcss"],
	parserOptions: {
		project,
	},
	globals: {
		React: true,
		JSX: true,
	},
	settings: {
		"import/resolver": {
			typescript: {
				project,
			},
		},
	},
	ignorePatterns: ["node_modules/", "dist/"],
	// add rules configurations here
	rules: {
		"import/no-default-export": "off",
		"unicorn/filename-case": [
			"error",
			{
				cases: {
					camelCase: true,
					pascalCase: true,
				},
			},
		],
		"no-console": "off",
		"no-restricted-syntax": [
			"error",
			{
				selector:
					"CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace)$/]",
				message: "Unexpected property on console object was called",
			},
		],
		"react/function-component-definition": [
			"error",
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
		"@typescript-eslint/no-misused-promises": [
			"error",
			{ checksVoidReturn: { attributes: false } },
		],
	},
};