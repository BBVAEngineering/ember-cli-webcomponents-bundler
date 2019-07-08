/* eslint-env node */

'use strict';

const babel = require('rollup-plugin-babel');
const resolver = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const includePaths = require('rollup-plugin-includepaths');
const multiEntry = require('rollup-plugin-multi-entry');
const terser = require('rollup-plugin-terser').terser;

module.exports = function({
	entrypoint,
	outputfile,
	root,
	minify,
	config
}) {
	const legacy = config.name === 'legacy';

	const inputFiles = [
		legacy ? require.resolve('regenerator-runtime') : undefined,
		entrypoint
	].filter(Boolean);

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
				resolver(),
				multiEntry({ exports: false }),
				includePaths({ paths: [root] }),
				babel(config.babel),
				minify && terser()
			]
		}
	};
};
