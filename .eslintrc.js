module.exports = {
	root: true,
	parserOptions: {
		parser: "babel-eslint",
		sourceType: "module",
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: ["plugin:vue/recommended", "eslint:recommended"],
	// add your custom rules here
	//it is base on https://github.com/vuejs/eslint-config-vue
	rules: {
    "eol-last": 0,
		"accessor-pairs": 0,
		"constructor-super": 0,
		"vue/no-v-html": "off",
		"vue/multiline-html-element-content-newline": "off",
		"vue/singleline-html-element-content-newline": "off",
		"@javascript-eslint/semi": [0, "always"],
		"@typescript-eslint/semi": [0, "always"],
		"vue/name-property-casing": ["error", "PascalCase"],
		camelcase: [
			0,
			{
				properties: "always",
			},
		],
		"comma-spacing": [
			0,
			{
				before: false,
				after: true,
			},
		],

		curly: [2, "multi-line"],
		"comma-style": [2, "last"],
		"dot-location": [2, "property"],
		eqeqeq: ["error", "always", {
      null: "ignore",
    }],
		"generator-star-spacing": [
			0,
			{
				before: true,
				after: true,
			},
		],
		"handle-callback-err": [2, "^(err|error)$"],
		quotes: [
			2,
			"double",
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		semi: [0, "always"],
		"template-curly-spacing": [0, "never"],
		"use-isnan": 0,
		"valid-typeof": 2,
		"wrap-iife": [0, "any"],
		"yield-star-spacing": [0, "both"],
		yoda: [2, "never"],
		"prefer-const": 2,
		"no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
		"object-curly-spacing": [
			0,
			"always",
			{
				objectsInObjects: false,
			},
		],
		"array-bracket-spacing": [0, "never"],
	},
};