'use strict';

const babelConfig = require('./babel');

module.exports = function(targets) {
	return {
		legacy: {
			name: 'legacy',
			format: 'iife',
			babel: babelConfig(targets).legacy
		},
		modules: {
			name: 'modules',
			format: 'esm',
			babel: babelConfig(targets).modules
		}
	};
};

