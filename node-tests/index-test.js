/* eslint-disable no-sync */
'use strict';

const fs = require('fs-extra');
const path = require('path');
const exec = require('child_process').exec;
const assert = require('yeoman-assert');

const TEST_TIMEOUT = 50000;
const MOCK_ENV_CONFIGS = {
	default: path.resolve(__dirname, './mocks/environment-default.js'),
	modules: path.resolve(__dirname, './mocks/environment-modules.js'),
	noAutoImport: path.resolve(__dirname, './mocks/environment-no-autoimport.js')
};

const emberCLIPath = path.resolve(__dirname, '../node_modules/ember-cli/bin/ember');
const fixturePath = path.resolve(__dirname, '../');
const fixtureConfigPath = path.resolve(__dirname, '../tests/dummy/config');
const distPath = path.resolve(__dirname, '../dist');

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

function mockConfig(mockFile) {
	fs.renameSync(path.resolve(fixtureConfigPath, 'environment.js'), path.resolve(fixtureConfigPath, 'environment-BACKUP.js'));
	fs.renameSync(mockFile, path.resolve(fixtureConfigPath, 'environment.js'));
}

function restoreConfig(mockFile) {
	fs.renameSync(path.resolve(fixtureConfigPath, 'environment.js'), mockFile);
	fs.renameSync(path.resolve(fixtureConfigPath, 'environment-BACKUP.js'), path.resolve(fixtureConfigPath, 'environment.js'));
}

function outputFilePath(file) {
	return path.join(distPath, file);
}

describe('ember-cli-webcomponents-bundler | options', function() {
	this.timeout(TEST_TIMEOUT);

	context('using defaults', () => {
		const mockConfigFile = MOCK_ENV_CONFIGS.default;

		before(() => {
			mockConfig(mockConfigFile);
			return runEmberCommand(fixturePath, 'build --prod');
		});

		after(() => {
			restoreConfig(mockConfigFile);
			fs.removeSync(distPath);
		});

		it('generates one bundle for each entrypointPath', () => {
			assert.file(outputFilePath('assets/web-components/bundle.js'));
			assert.file(outputFilePath('assets/dummy-path/bundle.js'));
		});

		it('inserts the script tag for the bundle in index', () => {
			assert.fileContent(outputFilePath('index.html'), '<script src="/assets/web-components/bundle.js"');
			assert.fileContent(outputFilePath('index.html'), '<script src="/assets/dummy-path/bundle.js"');
		});
	});

	context('using modules (modules: true)', () => {
		const mockConfigFile = MOCK_ENV_CONFIGS.modules;

		before(() => {
			mockConfig(mockConfigFile);
			return runEmberCommand(fixturePath, 'build --prod');
		});

		after(() => {
			restoreConfig(mockConfigFile);
			fs.removeSync(distPath);
		});

		it('generates two bundles for each entrypointPath: one as module and one with the build config for the app targets', () => {
			assert.file(outputFilePath('assets/web-components/bundle.js'));
			assert.file(outputFilePath('assets/web-components/bundle-esm.js'));
		});

		it('inserts two script tags for the bundles in index', () => {
			assert.fileContent(outputFilePath('index.html'), '<script src="/assets/web-components/bundle-esm.js" type="module"');
			assert.fileContent(outputFilePath('index.html'), '<script src="/assets/web-components/bundle.js" defer nomodule');
		});
	});

	context('without autoImport (autoImport: false)', () => {
		const mockConfigFile = MOCK_ENV_CONFIGS.noAutoImport;

		before(() => {
			mockConfig(mockConfigFile);
			return runEmberCommand(fixturePath, 'build --prod');
		});

		after(() => {
			restoreConfig(mockConfigFile);
			fs.removeSync(distPath);
		});

		it('does not insert a script tag for the bundle in index', () => {
			assert.noFileContent(outputFilePath('index.html'), '<script src="/assets/web-components/bundle.js"');
		});
	});
});
