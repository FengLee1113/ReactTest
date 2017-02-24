'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWebpackProdConfig;

var _getWebpackCommonConfig = require('./getWebpackCommonConfig');

var _getWebpackCommonConfig2 = _interopRequireDefault(_getWebpackCommonConfig);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackStrip = require('webpack-strip');

var _webpackStrip2 = _interopRequireDefault(_webpackStrip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getWebpackProdConfig(args) {
  var webpackConfig = (0, _getWebpackCommonConfig2.default)(args);
  webpackConfig.UglifyJsPluginConfig = {
    output: {
      ascii_only: true
    },
    compress: {
      warnings: false
    }
  };

  // disable console log and error in production
  webpackConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    loader: _webpackStrip2.default.loader('console.log', 'console.error')
  });

  webpackConfig.debug = false;
  webpackConfig.plugins = [].concat(_toConsumableArray(webpackConfig.plugins), [new _webpack2.default.optimize.DedupePlugin(), new _webpack2.default.optimize.UglifyJsPlugin(webpackConfig.UglifyJsPluginConfig), new _webpack2.default.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
  })]);
  return webpackConfig;
}
module.exports = exports['default'];