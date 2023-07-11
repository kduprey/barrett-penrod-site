module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "turbo/no-undeclared-env-vars": "off",
    "@next/next/no-html-link-for-pages": "off",
    quotes: ["error", "double"],
    "arrow-body-style": ["error", "as-needed"],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
  },
  plugins: ["@typescript-eslint", "eslint-plugin-tsdoc", "vitest"],
  overrides: [
    {
      files: ["__tests__/**/*.test.{js,ts,jsx,tsx}"],
      rules: {
        "@typescript-eslint/unbound-method": "off",
      },
      extends: ["plugin:vitest/recommended"],
    },
    {
      files: ["*.test.ts"],
      rules: {
        "vitest/valid-expect": "warn",
      },
    },
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  ignorePatterns: [".eslintrc.js"],
};
