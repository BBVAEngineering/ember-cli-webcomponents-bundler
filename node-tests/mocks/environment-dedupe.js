'use strict';

const path = require('path');
const entrypoint = path.join('tests', 'dummy', 'lib');

module.exports = function(environment) {
	const ENV = {
		modulePrefix: 'dummy',
		environment,
		rootURL: '/',
		locationType: 'auto',
		EmberENV: {
			EXTEND_PROTOTYPES: {
				Date: false
			}
		},
		'ember-cli-webcomponents-bundler': {
			modules: false,
			entrypointPaths: [
				path.join(entrypoint, 'dedupe')
			],
			dedupe: ['weightless']
		}
	};

	return ENV;
};
