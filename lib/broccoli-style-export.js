/* eslint-disable no-sync */
/* eslint-env node */

'use strict';

const fs = require('fs-extra');
const Filter = require('broccoli-persistent-filter');
const extend = require('deep-extend');
const path = require('path');
const sass = require('node-sass');
const postcss = require('postcss');
const styleprefixer = require('autoprefixer');

const EXTENSION_TO_TEMPLATES = {
	scss: 'sass',
	sass: 'sass',
	css: 'css'
};

class BroccoliStyleExport extends Filter {
	constructor(inputNodes, options) {
		super(inputNodes, {
			annotation: 'BroccoliStyleProcessor'
		});

		const defaults = {
			extensions: ['sass', 'scss', 'css'],
			autoprefixer: {},
			useLitHtml: false
		};

		this.options = extend(defaults, options);
	}

	getDestFilePath(relativePath) {
		const { ext } = path.parse(relativePath);
		const { extensions } = this.options;
		const fileExtension = ext.slice(1);

		if (extensions.includes(fileExtension)) {
			return relativePath.replace(fileExtension, `${fileExtension}.js`);
		}

		return null;
	}

	async processString(content, relativePath) {
		const { ext } = path.parse(relativePath);
		const fileExtension = ext.slice(1);
		const { autoprefixer, styleTemplates } = this.options;

		let digested = content;

		if (fileExtension === 'scss') {
			digested = sass.renderSync({
				data: digested,
				outputStyle: 'compressed'
			}).css;
		}

		const template = await fs.readFile(styleTemplates[EXTENSION_TO_TEMPLATES[fileExtension]], 'utf8');

		const { css } = await postcss(styleprefixer(autoprefixer)).process(digested, {
			from: undefined, to: undefined
		});

		return template.replace(/{{styles}}/g, css);
	}
}

module.exports = BroccoliStyleExport;
