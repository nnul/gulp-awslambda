'use strict';

module.exports = {
	extends: 'eslint:recommended',
	env: {
		'es6': true,
		'node': true,
		'mocha': true
	},
	rules: {
		'indent': [ 2, 'tab' ],
		'linebreak-style': [ 2, 'unix' ],
		'no-console': 'off',
		'quotes': [ 2, 'single' ],
		'semi': [ 2, 'always' ],
	},
	parserOptions: {
		'ecmaVersion': 8,
	}
};
