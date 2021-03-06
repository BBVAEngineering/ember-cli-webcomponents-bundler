'use strict';

const fs = require('fs-extra');
const path = require('path');
const exec = require('child_process').exec;
const assert = require('yeoman-assert');

const TEST_TIMEOUT = 50000;
const MOCK_ENV_CONFIGS = {
	default: path.resolve(__dirname, '../mocks/environment-default.js'),
	modules: path.resolve(__dirname, '../mocks/environment-modules.js'),
	noAutoImport: path.resolve(__dirname, '../mocks/environment-no-autoimport.js'),
	noEntrypointPaths: path.resolve(__dirname, '../mocks/environment-no-entrypoints.js'),
	dedupe: path.resolve(__dirname, '../mocks/environment-dedupe.js'),
	noDedupe: path.resolve(__dirname, '../mocks/environment-no-dedupe.js')
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
		}, (err, stdout, stderr) => {
			if (err) {
				reject(err);
			}
			resolve({ stdout, stderr });
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

describe('ember-cli-webcomponents-bundler | Integration | options', function() {
	this.timeout(TEST_TIMEOUT);

	const indexPath = outputFilePath('index.html');

	context('using defaults', () => {
		const mockConfigFile = MOCK_ENV_CONFIGS.default;

		before(async() => {
			await mockConfig(mockConfigFile);

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

		before(async() => {
			await mockConfig(mockConfigFile);

			return runEmberCommand(fixturePath, 'build --prod');
		});

		after(async() => {
			restoreConfig(mockConfigFile);
			await fs.remove(distPath);
		});

		it('generates two bundles for each entrypointPath: one as module and one with the build config for the app targets', () => {
			assert.file(outputFilePath('assets/dummy-path/bundle.js'));
			assert.file(outputFilePath('assets/dummy-path/bundle-esm.js'));
		});

		it('inserts two script tags for the bundles in index', () => {
			assert.fileContent(indexPath, '<script src="/assets/dummy-path/bundle-esm.js" type="module"');
			assert.fileContent(indexPath, '<script src="/assets/dummy-path/bundle.js" defer nomodule');
		});
	});

	context('without autoImport (autoImport: false)', () => {
		const mockConfigFile = MOCK_ENV_CONFIGS.noAutoImport;

		before(async() => {
			await mockConfig(mockConfigFile);

			return runEmberCommand(fixturePath, 'build --prod');
		});

		after(async() => {
			restoreConfig(mockConfigFile);
			await fs.remove(distPath);
		});

		it('does not insert a script tag for the bundle in index', () => {
			assert.noFileContent(indexPath, '<script src="/assets/web-components/bundle.js"');
		});

		it('does not include webcomponentsjs polyfill in vendor.js', () => {
			const vendorPath = outputFilePath('assets/vendor.js');

			assert.noFileContent(vendorPath, 'window.customElements.forcePolyfill');
		});
	});

	context('without entrypointPaths', () => {
		const mockConfigFile = MOCK_ENV_CONFIGS.noEntrypointPaths;

		before(async() => {
			await mockConfig(mockConfigFile);

			return runEmberCommand(fixturePath, 'build --prod');
		});

		after(async() => {
			restoreConfig(mockConfigFile);
			await fs.remove(distPath);
		});

		it('does not include webcomponentsjs polyfill in vendor.js', () => {
			const vendorPath = outputFilePath('assets/vendor.js');

			assert.noFileContent(vendorPath, 'window.customElements.forcePolyfill');
		});
	});

	context('without dedupe (default)', () => {
		const mockConfigFile = MOCK_ENV_CONFIGS.noDedupe;

		before(async() => {
			await mockConfig(mockConfigFile);

			return runEmberCommand(fixturePath, 'build --prod');
		});

		after(async() => {
			restoreConfig(mockConfigFile);
			await fs.remove(distPath);
		});

		it('nested modules are not deduped', () => {
			const bundlePath = outputFilePath('assets/dedupe/bundle.js');

			assert.fileContent(bundlePath, 'nested weightless module');
		});
	});

	context('with dedupe', () => {
		const mockConfigFile = MOCK_ENV_CONFIGS.dedupe;

		before(async() => {
			await mockConfig(mockConfigFile);

			return runEmberCommand(fixturePath, 'build --prod');
		});

		after(async() => {
			restoreConfig(mockConfigFile);
			await fs.remove(distPath);
		});

		it('does not include multiple instances of deduped modules', () => {
			const bundlePath = outputFilePath('assets/dedupe/bundle.js');

			assert.noFileContent(bundlePath, 'nested weightless module');
		});
	});
});

describe('ember-cli-webcomponents-bundler | Integration | CLI', function() {
	this.timeout(TEST_TIMEOUT);

	context('warning messages', () => {
		const mockConfigFile = MOCK_ENV_CONFIGS.modules;
		let output = {};

		before(async() => {
			await mockConfig(mockConfigFile);

			output = await runEmberCommand(fixturePath, 'build --prod');

			return output;
		});

		after(async() => {
			restoreConfig(mockConfigFile);
			await fs.remove(distPath);
		});

		it('does not log warnings about rewriting `this`', () => {
			assert.equal(output.stderr.includes('`this` has been rewritten to `undefined`'), false);
		});

		it('logs another warnings', () => {
			assert.ok(output.stderr.includes('could not be resolved'));
		});
	});
});
