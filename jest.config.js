'use strict';

module.exports = {
	verbose: true,
	testEnvironment: 'node',
	coverageDirectory: './coverage/node',
	collectCoverage: true,
	coverageReporters: [
		'lcov',
		'text',
		'text-summary'
	],
	coverageThreshold: {
		global: {
			branches: 85,
			functions: 85,
			lines: 85,
			statements: 85
		}
	}
};
