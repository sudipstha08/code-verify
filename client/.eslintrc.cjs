const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8")
);

module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "prettier", "@tanstack/query"],
	rules: {
    'prettier/prettier': ['error', prettierOptions],
		"no-console": 'error',
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		'@typescript-eslint/no-unused-vars': [
      2,
      {
         vars: 'all',
         args: 'all',
         varsIgnorePattern: '^_',
         argsIgnorePattern: '^_',
      },
   ],
	},
};
