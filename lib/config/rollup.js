'use strict';

const babel = require('rollup-plugin-babel');
const resolver = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const includePaths = require('rollup-plugin-includepaths');
const multiEntry = require('@rollup/plugin-multi-entry');
const terser = require('rollup-plugin-terser').terser;
const path = require('path');

module.exports = function({
	entrypoint,
	outputfile,
	root,
	minify,
	dedupe,
	config
}) {
	const legacy = config.name === 'legacy';

	const inputFiles = [
		legacy ? require.resolve('regenerator-runtime') : undefined,
		path.join(__dirname, '../utils/customelements-define.js'),
		entrypoint
	].filter(Boolean);

	const onwarn = (warning, next) => {
		if (warning.code === 'THIS_IS_UNDEFINED') {
			return;
		}

		if (warning.code === 'CIRCULAR_DEPENDENCY') {
			return;
		}

		next(warning);
	};

	return {
		rollup: {
			input: inputFiles,
			output: {
				file: outputfile,
				format: config.format,
				sourcemap: !minify
			},
			plugins: [
				commonjs(),
				resolver({
					browser: true,
					dedupe
				}),
				multiEntry({ exports: false }),
				includePaths({ paths: [root] }),
				babel(config.babel),
				minify && terser()
			],
			onwarn
		}
	};
};
