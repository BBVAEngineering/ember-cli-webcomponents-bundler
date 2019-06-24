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
			modules: true,
			entrypointPaths: [
				path.join(entrypoint, 'web-components')
			]
		}
	};

	return ENV;
};
