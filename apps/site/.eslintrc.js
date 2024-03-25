// @ts-check
/** @type {import("eslint").Linter.Config} */

module.exports = {
	root: true,
	extends: ["@bpvs/eslint-config/eslint/next"].map((v) => require.resolve(v)),
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
};
