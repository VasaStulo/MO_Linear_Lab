/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js


const { configure } = require('quasar/wrappers');


module.exports = configure(function (/* ctx */) {
  return {
    eslint: {
      fix: true,
      // include = [],
      // exclude = [],
      // rawOptions = {},
      warnings: true,
      errors: true
    },
    boot: [
      'axios',
    ],
    css: [
      'app.scss'
    ],
    extras: [
      'roboto-font',
      'material-icons',
    ],
    build: {
      target: {
        browser: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1' ],
        node: 'node16'
      },
      vueRouterMode: 'hash', // available values: 'hash', 'history'
    },
    devServer: {
      open: true
    },
    framework: {
      config: {},
      plugins: []
    },
    animations: [],
    ssr: {
      pwa: false,
      prodPort: 3000,
      middlewares: [
        'render'
      ]
    },
    pwa: {
      workboxMode: 'generateSW', // or 'injectManifest'
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false
    },
    cordova: {
    },
    capacitor: {
      hideSplashscreen: true
    },
    electron: {
      inspectPort: 5858,
      bundler: 'packager',
      packager: {
      },

      builder: {
        appId: 'linearproblem'
      }
    },

    bex: {
      contentScripts: [
        'my-content-script'
      ],
    }
  }
});
