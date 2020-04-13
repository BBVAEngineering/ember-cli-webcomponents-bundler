'use strict';

const common = {
	babelrc: false,
	plugins: [
		'@babel/plugin-syntax-import-meta'
	]
};

module.exports = function(targets) {
	return {
		modules: Object.assign({}, common, {
			presets: [
				[
					'@babel/env',
					{
						targets: {
							esmodules: true
						}
					}
				]
			]
		}),
		legacy: Object.assign({}, common, {
			presets: [
				[
					'@babel/env',
					{
						modules: false,
						targets
					}
				]
			]
		})
	};
};
