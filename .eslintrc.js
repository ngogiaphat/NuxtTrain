// module.exports = {
// 	root: true,
// 	parserOptions: {
// 		parser: "babel-eslint",
// 		sourceType: "module",
// 	},
// 	env: {
// 		browser: true,
// 		node: true,
// 		es6: true,
// 	},
// 	extends: ["plugin:vue/recommended", "eslint:recommended"],
// 	// add your custom rules here
// 	//it is base on https://github.com/vuejs/eslint-config-vue
// 	rules: {
// 		"semi": 0,
//     "eol-last": 0,
// 		"accessor-pairs": 0,
// 		"constructor-super": 0,
// 		"vue/no-v-html": "off",
//     "@javascript-eslint/semi": "off",
// 		"@typescript-eslint/semi": "off",
//     "@typescript-eslint/no-explicit-any": "warn",
//     "@typescript-eslint/interface-name-prefix": "off",
// 		"vue/multiline-html-element-content-newline": "off",
// 		"vue/singleline-html-element-content-newline": "off",
// 		"vue/name-property-casing": ["error", "PascalCase"],
// 	},
// };

module.exports = {
	parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir : __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "semi": 0,
    "vue/no-v-html": "never",
    "@javascript-eslint/semi": "off",
		"@typescript-eslint/semi": "off",
    "vue/name-property-casing": "off",
    "vue/multiline-html-element-content-newline": "off",
 		"vue/singleline-html-element-content-newline": "off",
  },
};