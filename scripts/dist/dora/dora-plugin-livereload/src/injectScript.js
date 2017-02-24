'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ConcatSource = require('webpack-core/lib/ConcatSource');

var _ConcatSource2 = _interopRequireDefault(_ConcatSource);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InjectScript = function () {
  function InjectScript(options) {
    _classCallCheck(this, InjectScript);

    this.options = _extends({}, InjectScript.defaults, options);
  }

  _createClass(InjectScript, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      compiler.plugin('compilation', function (compilation) {
        var opts = _this.options;
        compilation.plugin('optimize-chunk-assets', function (chunks, callback) {
          chunks.forEach(function (chunk) {
            chunk.files.filter(function (file) {
              return (/.(js)$/.test(file)
              );
            }).forEach(function (file) {
              var injectContent = (0, _util.getInjectLivereloadContent)(opts.injectHost, opts.port);
              compilation.assets[file] = new _ConcatSource2.default(injectContent, '\n', compilation.assets[file]);
            });
          });

          callback();
        });
      });
    }
  }]);

  return InjectScript;
}();

InjectScript.defaults = {
  injectHost: '127.0.0.1',
  port: '35729'
};
exports.default = InjectScript;
module.exports = exports['default'];