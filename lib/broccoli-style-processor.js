/* eslint-env node */

'use strict';

const Filter = require('broccoli-persistent-filter');
const extend = require('deep-extend');
const path = require('path');
const processStyles = require('./style-processor');

class BroccoliStyleProcessor extends Filter {
	constructor(inputNodes, options) {
		super(inputNodes, {
			annotation: 'broccoli-style-processor',
			persistentOutput: true
		});

		const defaults = {
			extensions: ['css'],
			targetExtension: 'css.js',
			autoprefixer: {}
		};

		this.options = extend(defaults, options);
		this.autoprefixer = this.options.autoprefixer;
	}

	getDestFilePath(relativePath) {
		const { ext } = path.parse(relativePath);
		const { extensions, targetExtension } = this.options;
		const cssExtension = ext.slice(1);

		if (extensions.includes(cssExtension)) {
			return relativePath.replace(cssExtension, targetExtension);
		}

		return null;
	}

	async processString(content) {
		return await processStyles(content, this.autoprefixer);
	}
}

module.exports = BroccoliStyleProcessor;
