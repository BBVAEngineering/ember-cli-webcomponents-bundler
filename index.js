/* eslint-disable consistent-return */
/* eslint-env node */

'use strict';

const mergeTrees = require('broccoli-merge-trees');
const Rollup = require('broccoli-rollup');
const rollupConfig = require('./config/rollup');
const outputConfig = require('./config/output');
const path = require('path');

module.exports = {
	name: require('./package').name,

	isDevelopingAddon: () => true,

	config(env, baseConfig) {
		const options = baseConfig[this.name] || {};

		env = env || process.env.EMBER_ENV;
		const isProductionEnv = Boolean(env.match('prod'));
		const url = baseConfig.rootURL || '';

		const defaults = {
			entrypointFileName: 'module-imports.js',
			outputFileName: 'bundle.js',
			outputPath: 'assets',
			minify: isProductionEnv,
			modules: false,
			entrypointPaths: [],
			autoImport: true
		};

		this.options = Object.assign(defaults, options);
		this.options.rootURL = url;

		this._setOutputOptions();
	},

	_setOutputOptions() {
		this._outputFilePaths = this.options.entrypointPaths.map((dirname) =>
			path.basename(dirname, this.options.entrypointFileName)
		);

		const config = outputConfig(this.app.project.targets);

		this._outputConfigs = [config.legacy];

		if (this.options.modules) {
			this._outputConfigs.push(config.modules);
		}
	},

	/* istanbul ignore next */
	afterInstall() {
		return this.addPackageToProject('@webcomponents/webcomponentsjs', '2.2.10');
	},

	included(app, parentAddon) {
		this._super.included.apply(this, arguments);
		this.app = parentAddon || app;

		this._importPolyfills();
	},

	_importPolyfills() {
		this.app.import('node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js', { options: 'prepend' });
		this.app.import(path.join(__dirname, 'utils/webcomponents-utils.js'));
	},

	contentFor(type) {
		if (type === 'body-footer' && this.options.autoImport) {
			const scriptForPath = this._getScriptTag(this.options.modules);

			return this._outputFilePaths.map(scriptForPath).join('\n');
		}
	},

	_getScriptTag(module) {
		return (src) => {
			if (module) {
				return `
				<script src="${this._getOutputFilePath(src, null, true)}" type="module"></script>
				<script src="${this._getOutputFilePath(src)}" defer nomodule></script>`;
			}

			return `<script src="${this._getOutputFilePath(src)}" async defer></script>`;
		};
	},

	_getOutputFilePath(dirname, relative, esmodule) {
		const root = relative ? '' : this.options.rootURL;
		const filename = path.parse(this.options.outputFileName).name;
		const ext = esmodule ? '-esm.js' : '.js';

		return `${root}${this.options.outputPath}/${dirname}/${filename}${ext}`;
	},

	postprocessTree(type, tree) {
		if (type !== 'all') {
			return tree;
		}

		const rollupTrees = this.options.entrypointPaths.map((dirname) => {
			const absEntrypointPath = path.join(this.app.project.root, dirname);
			const basename = path.basename(dirname, this.options.entrypointFileName); // last part of the path
			const getOutputFileName = (config) => this._getOutputFilePath(basename, true, config.name === 'modules');

			const bundles = this._outputConfigs.map((config) => new Rollup(
				absEntrypointPath,
				rollupConfig({
					entrypoint: this.options.entrypointFileName,
					root: absEntrypointPath,
					minify: this.options.minify,
					outputfile: getOutputFileName(config),
					config
				})
			));

			return mergeTrees(bundles);
		});

		return mergeTrees(rollupTrees.concat(tree), {
			overwrite: true
		});
	}
};
