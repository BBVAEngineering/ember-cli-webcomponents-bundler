/* eslint-disable consistent-return */

'use strict';

const mergeTrees = require('broccoli-merge-trees');
const Rollup = require('broccoli-rollup');
const Funnel = require('broccoli-funnel');
const rollupConfig = require('./lib/config/rollup');
const outputConfig = require('./lib/config/output');
const BroccoliStyleProcessor = require('./lib/broccoli-style-processor');
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

		if (this._shouldImportPolyfill()) {
			this._importPolyfills();
		}
	},

	_shouldImportPolyfill() {
		return this.options.autoImport && this.options.entrypointPaths.length;
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

	_importPolyfills() {
		this.app.import('node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js', { options: 'prepend' });
	},

	afterInstall() {
		return this.addPackageToProject('@webcomponents/webcomponentsjs', '2.2.10');
	},

	included(app, parentAddon) {
		this._super.included.apply(this, arguments);
		this.app = parentAddon || app;
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
			const styles = Funnel(dirname, { include: ['**/*.css'] });
			const scripts = Funnel(dirname, { exclude: ['**/*.css'] });

			const processedStyles = new BroccoliStyleProcessor(styles);
			const rollupInput = mergeTrees([processedStyles].concat(scripts));

			const absEntrypointPath = path.join(this.app.project.root, dirname);
			const basename = path.basename(dirname, this.options.entrypointFileName); // last part of the path
			const getOutputFileName = (config) => this._getOutputFilePath(basename, true, config.name === 'modules');

			const bundles = this._outputConfigs.map((config) => new Rollup(
				rollupInput,
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
