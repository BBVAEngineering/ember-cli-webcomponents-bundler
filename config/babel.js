/* eslint-env node */

'use strict';

module.exports = function(targets) {
	return {
		modules: {
			babelrc: false,
			presets: [
				[
					'@babel/env',
					{
						targets: {
							esmodules: true
						}
					}
				]
			],
			plugins: [
				'@babel/plugin-syntax-import-meta'
			]
		},
		legacy: {
			babelrc: false,
			presets: [
				[
					'@babel/env',
					{
						modules: false,
						targets
					}
				]
			]
		}
	};
};
