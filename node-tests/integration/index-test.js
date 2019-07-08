'use strict';

const fs = require('fs-extra');
const path = require('path');
const exec = require('child_process').exec;
const assert = require('yeoman-assert');

const TEST_TIMEOUT = 50000;
const MOCK_ENV_CONFIGS = {
	default: path.resolve(__dirname, '../mocks/environment-default.js'),
	modules: path.resolve(__dirname, '../mocks/environment-modules.js'),
	noAutoImport: path.resolve(__dirname, '../mocks/environment-no-autoimport.js')
};

const emberCLIPath = path.resolve(__dirname, '../../node_modules/ember-cli/bin/ember');
const fixturePath = path.resolve(__dirname, '../..');
const fixtureConfigPath = path.resolve(__dirname, '../../tests/dummy/config');
const envPath = path.resolve(fixtureConfigPath, 'environment.js');
const mockEnvPath = path.resolve(fixtureConfigPath, 'environment-BACKUP.js');
const distPath = path.resolve(__dirname, '../../dist');

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

async function mockConfig(mockFile) {
	await fs.rename(envPath, mockEnvPath);
	await fs.rename(mockFile, envPath);
}

async function restoreConfig(mockFile) {
	await fs.rename(envPath, mockFile);
	await fs.rename(mockEnvPath, envPath);
}

function outputFilePath(file) {
	return path.join(distPath, file);
}

describe('ember-cli-webcomponents-bundler | options', function() {
	this.timeout(TEST_TIMEOUT);

	const indexPath = outputFilePath('index.html');

	context('using defaults', () => {
		const mockConfigFile = MOCK_ENV_CONFIGS.default;

		before(() => {
			mockConfig(mockConfigFile);
			return runEmberCommand(fixturePath, 'build --prod');
		});

		after(async() => {
			restoreConfig(mockConfigFile);
			await fs.remove(distPath);
		});

		it('generates one bundle for each entrypointPath', () => {
			assert.file(outputFilePath('assets/web-components/bundle.js'));
			assert.file(outputFilePath('assets/dummy-path/bundle.js'));
		});

		it('inserts the script tag for the bundle in index', () => {
			assert.fileContent(indexPath, '<script src="/assets/web-components/bundle.js"');
			assert.fileContent(indexPath, '<script src="/assets/dummy-path/bundle.js"');
		});
	});

	context('using modules (modules: true)', () => {
		const mockConfigFile = MOCK_ENV_CONFIGS.modules;

		before(() => {
			mockConfig(mockConfigFile);
			return runEmberCommand(fixturePath, 'build --prod');
		});

		after(async() => {
			restoreConfig(mockConfigFile);
			await fs.remove(distPath);
		});

		it('generates two bundles for each entrypointPath: one as module and one with the build config for the app targets', () => {
			assert.file(outputFilePath('assets/web-components/bundle.js'));
			assert.file(outputFilePath('assets/web-components/bundle-esm.js'));
		});

		it('inserts two script tags for the bundles in index', () => {
			assert.fileContent(indexPath, '<script src="/assets/web-components/bundle-esm.js" type="module"');
			assert.fileContent(indexPath, '<script src="/assets/web-components/bundle.js" defer nomodule');
		});
	});

	context('without autoImport (autoImport: false)', () => {
		const mockConfigFile = MOCK_ENV_CONFIGS.noAutoImport;

		before(() => {
			mockConfig(mockConfigFile);
			return runEmberCommand(fixturePath, 'build --prod');
		});

		after(async() => {
			restoreConfig(mockConfigFile);
			await fs.remove(distPath);
		});

		it('does not insert a script tag for the bundle in index', () => {
			assert.noFileContent(indexPath, '<script src="/assets/web-components/bundle.js"');
		});
	});
});
