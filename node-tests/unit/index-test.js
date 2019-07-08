'use strict';

const addon = require('../../index');
const assert = require('assert');
const sinon = require('sinon');

describe('ember-cli-webcomponents-bundler | installation', () => {
	it('Adds the required dependencies after installing it', () => {
		const fake = addon.addPackageToProject = sinon.fake();

		addon.afterInstall();

		assert.ok(
			fake.calledWithMatch('@webcomponents/webcomponentsjs', '2.2.10'),
			'addPackageToProject() is called with version 2.2.10 of @webcomponents/webcomponentsjs'
		);
	});
});

