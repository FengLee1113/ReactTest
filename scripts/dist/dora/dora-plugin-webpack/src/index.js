'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mergeCustomConfig = require('../../../../dist/atool-build/lib/mergeCustomConfig');

var _mergeCustomConfig2 = _interopRequireDefault(_mergeCustomConfig);

var _getWebpackCommonConfig = require('../../../../dist/atool-build/lib/getWebpackCommonConfig');

var _getWebpackCommonConfig2 = _interopRequireDefault(_getWebpackCommonConfig);

var _webpack = require('../../../../dist/atool-build/lib/webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require('path');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _chokidar = require('chokidar');

var _chokidar2 = _interopRequireDefault(_chokidar);

var _npmInstallWebpackPluginCn = require('npm-install-webpack-plugin-cn');

var _npmInstallWebpackPluginCn2 = _interopRequireDefault(_npmInstallWebpackPluginCn);

var _lodash = require('lodash.isequal');

var _lodash2 = _interopRequireDefault(_lodash);

var _fs = require('fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webpackConfig = void 0;

exports.default = {
  name: 'dora-plugin-webpack',

  'middleware.before': function middlewareBefore() {
    var _this = this;

    var applyPlugins = this.applyPlugins,
        query = this.query;
    var cwd = this.cwd;

    if (query.cwd) {
      cwd = query.cwd;
    }
    var customConfigPath = (0, _path.resolve)(cwd, query.config || 'webpack.config.js');

    if ((0, _fs.existsSync)(customConfigPath)) {
      var customConfig = require(customConfigPath);

      // Support native webpack
      if ((typeof customConfig === 'undefined' ? 'undefined' : _typeof(customConfig)) === 'object') {
        webpackConfig = customConfig;
        return;
      }
    }

    webpackConfig = (0, _getWebpackCommonConfig2.default)(_extends({}, this, { cwd: cwd }));
    webpackConfig.devtool = '#cheap-module-source-map';
    webpackConfig.plugins = webpackConfig.plugins.concat([new _webpack.ProgressPlugin(function (percentage, msg) {
      var stream = process.stderr;
      if (stream.isTTY && percentage < 0.71 && _this.get('__ready')) {
        stream.cursorTo(0);
        stream.write('📦  ' + _chalk2.default.magenta(msg));
        stream.clearLine(1);
      } else if (percentage === 1) {
        console.log(_chalk2.default.green('\nwebpack: bundle build is now finished.'));
      }
    })]);
    if (!query.disableNpmInstall) {
      webpackConfig.plugins.push(new _npmInstallWebpackPluginCn2.default({
        save: true
      }));
    }
    webpackConfig = applyPlugins('webpack.updateConfig', webpackConfig);
    webpackConfig = (0, _mergeCustomConfig2.default)(webpackConfig, customConfigPath, 'development');
    webpackConfig = applyPlugins('webpack.updateConfig.finally', webpackConfig);
    if (query.publicPath) {
      webpackConfig.output.publicPath = query.publicPath;
    }
    if (!query.publicPath && webpackConfig.output.publicPath) {
      query.publicPath = webpackConfig.output.publicPath;
    }
  },
  'middleware': function middleware() {
    var _query = this.query,
        verbose = _query.verbose,
        physcisFileSystem = _query.physcisFileSystem;

    var compiler = (0, _webpack2.default)(webpackConfig);
    this.set('compiler', compiler);
    compiler.plugin('done', function doneHandler(stats) {
      if (verbose || stats.hasErrors()) {
        console.log(stats.toString({ colors: true }));
      }
    });
    if (physcisFileSystem) {
      (function () {
        var outputFileSystem = compiler.outputFileSystem;
        setTimeout(function () {
          compiler.outputFileSystem = outputFileSystem;
        }, 0);
      })();
    }
    return require('koa-webpack-dev-middleware')(compiler, _extends({
      publicPath: '/',
      quiet: true
    }, this.query));
  },
  'server.after': function serverAfter() {
    var _this2 = this;

    var query = this.query;
    var cwd = this.cwd;

    if (query.cwd) {
      cwd = query.cwd;
    }
    var pkgPath = (0, _path.join)(cwd, 'package.json');

    function getEntry() {
      try {
        return JSON.parse((0, _fs.readFileSync)(pkgPath, 'utf-8')).entry;
      } catch (e) {
        return null;
      }
    }

    var entry = getEntry();
    _chokidar2.default.watch(pkgPath).on('change', function () {
      if (!(0, _lodash2.default)(getEntry(), entry)) {
        _this2.restart();
      }
    });

    var webpackConfigPath = (0, _path.resolve)(cwd, query.config || 'webpack.config.js');
    _chokidar2.default.watch(webpackConfigPath).on('change', function () {
      _this2.restart();
    });
  }
};
module.exports = exports['default'];