'use strict';

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
		'ember-cli-webcomponents-bundler': {}
	};

	return ENV;
};
