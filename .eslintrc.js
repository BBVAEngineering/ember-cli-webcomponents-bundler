'use strict';

module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module'
	},
	plugins: [
		'ember'
	],
	extends: [
		'plugin:ember/recommended',
		'eslint-config-bbva'
	],
	env: {
		browser: true
	},
	overrides: [{
		files: [
			'.huskyrc.js',
			'.commitlintrc.js',
			'.eslintrc.js',
			'.template-lintrc.js',
			'ember-cli-build.js',
			'index.js',
			'testem.js',
			'blueprints/*/index.js',
			'config/**/*.js',
			'tests/dummy/config/**/*.js',
			'node-tests/**/*.js',
			'lib/config/*.js'
		],
		excludedFiles: [
			'addon/**',
			'addon-test-support/**',
			'app/**',
			'tests/dummy/app/**',
			'tests/dummy/lib/**/node_modules/**'
		],
		parserOptions: {
			sourceType: 'script',
			ecmaVersion: 2017
		},
		env: {
			browser: false,
			node: true,
			mocha: true
		},
		plugins: ['node'],
		rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
			'no-process-env': 0
		})
	}]
};
