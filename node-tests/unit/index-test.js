'use strict';

const addon = require('../../index');
const assert = require('assert');
const sinon = require('sinon');

const appFixture = {
	import() {},
	project: {
		targets: []
	}
};

const baseConfig = {
	'ember-cli-webcomponents-bundler': {}
};

describe('ember-cli-webcomponents-bundler | Unit | Installation', () => {
	it('Adds the required dependencies after installing it', () => {
		const fake = addon.addPackageToProject = sinon.fake();

		addon.afterInstall();

		assert.ok(
			fake.calledWithMatch('@webcomponents/webcomponentsjs', '2.2.10'),
			'addPackageToProject() is called with version 2.2.10 of @webcomponents/webcomponentsjs'
		);
	});
});

describe('ember-cli-webcomponents-bundler | Unit | Config', () => {
	before(() => {
		addon.app = appFixture;
	});

	it('Sets its options if the addon is not configured in environment.js', () => {
		addon.config('dummy-env', {});

		assert.ok(addon.options);
	});

	it('Sets environment from EMBER_ENV if not provided', () => {
		process.env = Object.assign({}, process.env, {
			EMBER_ENV: 'prod'
		});

		addon.config(null, baseConfig);

		assert.ok(addon.options.minify);
	});

	it('Sets default options', () => {
		const defaults = {
			entrypointFileName: 'module-imports.js',
			outputFileName: 'bundle.js',
			outputPath: 'assets',
			minify: false,
			modules: false,
			entrypointPaths: [],
			autoImport: true
		};

		addon.config('dummy-env', baseConfig);

		assert.deepStrictEqual(addon.options, Object.assign({}, addon.options, defaults));
	});

	it('Sets custom options from environment.js', () => {
		const config = {
			rootURL: 'any',
			'ember-cli-webcomponents-bundler': {
				entrypointFileName: 'input.js',
				outputFileName: 'output.js',
				outputPath: 'any',
				minify: false,
				modules: true,
				entrypointPaths: ['foo', 'bar'],
				autoImport: false
			}
		};

		const expected = Object.assign({}, config[addon.name], {
			rootURL: 'any'
		});

		addon.config('dummy-env', config);

		assert.deepStrictEqual(addon.options, expected);
	});

	it('Sets options.rootURL as an empty string if not provided in environment.js', () => {
		addon.config('dummy-env', baseConfig);

		assert.strictEqual(addon.options.rootURL, '');
	});

	it('Sets options.minify automatically to true in prod env if the option is not specified', () => {
		addon.config('prod', baseConfig);

		assert.ok(addon.options.minify);
	});
});

