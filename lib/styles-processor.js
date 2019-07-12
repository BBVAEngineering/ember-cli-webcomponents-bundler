/* eslint-env node */

'use strict';

const postcss = require('postcss');
const styleprefixer = require('autoprefixer');

const template = [
	"import { css } from 'lit-element';",
	'export default css`',
	'{{styles}}`;'
].join('\n');

async function processCss(content, autoprefixer) {
	if (autoprefixer.enabled) {
		return await postcss(styleprefixer(autoprefixer)).process(content).css;
	}

	return content;
}

function transform(content) {
	return template.replace(/{{styles}}/g, content);
}

module.exports = async function(content, autoprefixer) {
	const css = await processCss(content, autoprefixer);

	return transform(css);
};
