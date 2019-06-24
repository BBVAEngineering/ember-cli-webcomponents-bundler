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
			entrypointPaths: [
				path.join(entrypoint, 'web-components'),
				path.join(entrypoint, 'dummy-path')
			]
		}
	};

	return ENV;
};
