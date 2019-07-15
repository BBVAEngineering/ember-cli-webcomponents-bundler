/* eslint-env node */

'use strict';

const Filter = require('broccoli-persistent-filter');
const extend = require('deep-extend');
const path = require('path');
const postcss = require('postcss');
const styleprefixer = require('autoprefixer');

class BroccoliStyleExport extends Filter {
	constructor(inputNodes, options) {
		super(inputNodes, {
			annotation: 'BroccoliStyleProcessor'
		});

		const defaults = {
			extensions: ['css'],
			targetExtension: 'css.js',
			autoprefixer: {}
		};

		this.options = extend(defaults, options);
		this.options.template = 'export default`{{styles}}`;';
	}

	getDestFilePath(relativePath) {
		const { ext } = path.parse(relativePath);
		const { extensions, targetExtension } = this.options;
		const fileExtension = ext.slice(1);

		if (extensions.includes(fileExtension)) {
			return relativePath.replace(fileExtension, targetExtension);
		}

		return null;
	}

	async processString(content) {
		const { autoprefixer, template } = this.options;
		const { css } = await postcss(styleprefixer(autoprefixer)).process(content, {
			from: undefined, to: undefined
		});

		return template.replace(/{{styles}}/g, css);
	}
}

module.exports = BroccoliStyleExport;
