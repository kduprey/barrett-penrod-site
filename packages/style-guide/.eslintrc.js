// @ts-check
/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: ["@vercel/style-guide/eslint/node"].map((v) => require.resolve(v)),
};
