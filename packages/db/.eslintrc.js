module.exports = {
	root: true,
	extends: ["bpvs"],
	parserOptions: {
		project: ["./tsconfig.json"],
		tsconfigRootDir: __dirname,
	},
};
