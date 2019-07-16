'use strict';

const addon = require('../../index');
const { assert } = require('chai');
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
		addon.config('dummy-env', baseConfig);

		const expected = {
			entrypointFileName: 'module-imports.js',
			outputFileName: 'bundle.js',
			entrypointPaths: []
		};

		assert.deepInclude(addon.options, expected);
	});

	it('Sets custom options from environment.js', () => {
		const config = {
			rootURL: 'any'
		};

		addon.config('dummy-env', config);

		assert.include(addon.options, config);
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

