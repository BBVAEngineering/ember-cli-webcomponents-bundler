# ember-cli-webcomponents-bundler

[![Build Status](https://github.com/github/docs/actions/workflows/build.yml/badge.svg?branch=master)](https://github.com/BBVAEngineering/ember-cli-webcomponents-bundler/actions)
[![GitHub version](https://badge.fury.io/gh/BBVAEngineering%2Fember-cli-webcomponents-bundler.svg)](https://badge.fury.io/gh/BBVAEngineering%2Fember-cli-webcomponents-bundler)
[![NPM version](https://badge.fury.io/js/ember-cli-webcomponents-bundler.svg)](https://badge.fury.io/js/ember-cli-webcomponents-bundler)
[![Dependency Status](https://david-dm.org/BBVAEngineering/ember-cli-webcomponents-bundler.svg)](https://david-dm.org/BBVAEngineering/ember-cli-webcomponents-bundler)
[![codecov](https://codecov.io/gh/BBVAEngineering/ember-cli-webcomponents-bundler/branch/master/graph/badge.svg)](https://codecov.io/gh/BBVAEngineering/ember-cli-webcomponents-bundler)
[![Greenkeeper badge](https://badges.greenkeeper.io/BBVAEngineering/ember-cli-webcomponents-bundler.svg)](https://greenkeeper.io/)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-webcomponents-bundler.svg)](https://emberobserver.com/addons/ember-cli-webcomponents-bundler)

## Information

[![NPM](https://nodei.co/npm/ember-cli-webcomponents-bundler.png?downloads=true&downloadRank=true)](https://nodei.co/npm/ember-cli-webcomponents-bundler/)

Allows to use Web Components using ES6 modules in an Ember application.

## Installation

```
ember install ember-cli-webcomponents-bundler
```

## Usage

The addon options can be configured in `config/environment.js`.

**Example config:**

```js
'ember-cli-webcomponents-bundler': {
  modules: true,
  entrypointPaths: [
    'lib/path-one',
    'lib/path-two'
  ]
}
```

A file named `module-imports.js` (default value) should exist inside each entry point path with the imports to be bundled. The file name can be configured in `entrypointFileName` option.

**Example entrypoint:**

```js
// file: lib/path-one/module-imports.js
import './components/some-component/some-component';
import './components/another-component/another-component';
```

**Output**

A bundled file will be generated for each of the `entrypointPaths` in the directory with the name of the entry point path. For example, the bundle for `lib/path-one` will be saved in `dist/assets/path-one/bundle.js`. 

Both, the bundle name and the output path can be configured by setting them as `outputFileName` and `outputPath` respectively.

## Options

### `entrypointFileName`

type: `String`   
default: `module-imports.js`

Name of the file used as entry point for ES modules inside each entry point path.

### `outputFileName`

type: `String`   
default: `bundle.js`

Name of the generated bundle for each entry point path.

### `outputPath`

type: `String`   
default: `assets`

Path where the generated bundle will be saved inside the dist folder.

### `minify`

type: `Boolean`   
default: `false` (`true` in production env)

Minifies the bundle.

### `modules`

type: `Boolean`   
default: `false` 

Generates two bundles: one for browsers with ES6 modules support and another for the rest of browsers using the build presets of the app.targets.

### `entrypointPaths` 

type: `Array`  
default: `[]`

List of paths where the addon will search for an entry point to generate its corresponding bundle.

### `autoImport`

type: `Boolean`   
default: `true` 

Writes the script tags for the bundle(s) in index.html. You can disable this option if you want to import the scripts on demand. 

When this option is set to `false`, [webcomponents.js polyfill](https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs) is not included in `vendor.js`, so you must import it explicitly before the bundle.

### `importStyles`

type: `Boolean`   
default: `false`

Allows to import css files in components. 

Example:

```js
import styles from './some-component.css';
```

The imported files exports the styles in a template literal that can be interpolated in the component's template. The processed styles are transformed with Autoprefixer using the hosting app targets configured in `config/targets.js`.

### `dedupe`

type: `Array`   
default: `[]`

Module names that should be resolved from the app `node_modules` instead of another packages requiring them. Helps to prevent bundling the same package multiple times if package is imported from dependencies.

Example:

```js
'ember-cli-webcomponents-bundler': {
  modules: true,
  entrypointPaths: [
    'lib/path-one'
  ],
  dedupe: ['lit-element', 'moment']
}
```

## Contribute

If you want to contribute to this addon, please read the [CONTRIBUTING.md](CONTRIBUTING.md).


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/BBVAEngineering/ember-cli-webcomponents-bundler/tags).


## Authors

See the list of [contributors](https://github.com/BBVAEngineering/ember-cli-webcomponents-bundler/graphs/contributors) who participated in this project.


## License

This project is licensed under the [MIT License](LICENSE.md).
