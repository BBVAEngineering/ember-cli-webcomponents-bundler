/* eslint-disable no-sync */
'use strict';

const fs = require('fs-extra');
const path = require('path');
const exec = require('child_process').exec;
const assert = require('assert');

const TEST_TIMEOUT = 120000;
const MOCK_ENV_CONFIGS = {
	default: path.resolve(__dirname, './mocks/environment-default.js'),
	modules: path.resolve(__dirname, './mocks/environment-modules.js')
};

const emberCLIPath = path.resolve(__dirname, '../node_modules/ember-cli/bin/ember');
const fixturePath = path.resolve(__dirname, '../tests/dummy/config');

function runEmberCommand(packagePath, command) {
	return new Promise((resolve, reject) =>
		exec(`${emberCLIPath} ${command}`, {
			cwd: packagePath
		}, (err, result) => {
			if (err) {
				reject(err);
			}
			resolve(result);
		})
	);
}

function outputFilePath(file) {
	return path.join(path.resolve(__dirname, '../dist'), file);
}

function assertContains(filePath, regexp) {
	const fileContent = fs.readFileSync(filePath, 'utf8');

	assert.ok(fileContent.match(regexp), `${filePath} contains ${regexp}`);
}

function assertFileExists(filePath) {
	assert.ok(fs.existsSync(filePath), `${filePath} exists`);
}

function cleanup() {
	fs.removeSync(path.resolve(__dirname, '../dist'));
}

function mockConfig(mockFile) {
	fs.renameSync(path.resolve(fixturePath, 'environment.js'), path.resolve(fixturePath, 'environment-BACKUP.js'));
	fs.renameSync(mockFile, path.resolve(fixturePath, 'environment.js'));
}

function restoreConfig(mockFile) {
	fs.renameSync(path.resolve(fixturePath, 'environment.js'), mockFile);
	fs.renameSync(path.resolve(fixturePath, 'environment-BACKUP.js'), path.resolve(fixturePath, 'environment.js'));
}

describe('ember-cli-webcomponents-bundler | options', function() {
	this.timeout(TEST_TIMEOUT);

	context('using defaults', () => {
		const mockConfigFile = MOCK_ENV_CONFIGS.default;

		before(() => {
			mockConfig(mockConfigFile);
			return runEmberCommand(path.resolve(__dirname, '../'), 'build --prod');
		});

		after(() => {
			restoreConfig(mockConfigFile);
			cleanup();
		});

		it('generates one bundle for each entrypointPath', () => {
			assertFileExists(path.resolve(__dirname, '../dist/assets/web-components/bundle.js'));
		});

		it('inserts the script tag for the bundle in index', () => {
			assertContains(outputFilePath('index.html'), '<script src="/assets/web-components/bundle.js"');
		});
	});

	context('using modules', () => {
		const mockConfigFile = MOCK_ENV_CONFIGS.modules;

		before(() => {
			mockConfig(mockConfigFile);
			return runEmberCommand(path.resolve(__dirname, '../'), 'build --prod');
		});

		after(() => {
			restoreConfig(mockConfigFile);
			cleanup();
		});

		it('generates two bundles for each entrypointPath: one as module and one with the build config for the app targets', () => {
			assertFileExists(path.resolve(__dirname, '../dist/assets/web-components/bundle.js'));
			assertFileExists(path.resolve(__dirname, '../dist/assets/web-components/bundle-esm.js'));
		});

		it('inserts two script tags for the bundles in index', () => {
			assertContains(outputFilePath('index.html'), '<script src="/assets/web-components/bundle-esm.js" type="module"');
			assertContains(outputFilePath('index.html'), '<script src="/assets/web-components/bundle.js" defer nomodule');
		});
	});
});
