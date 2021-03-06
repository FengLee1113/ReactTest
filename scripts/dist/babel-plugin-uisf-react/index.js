'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var types = _ref.types;

  var plugins = null;

  // For test
  global.__clearBabelAntdPlugin = function () {
    plugins = null;
  };

  function applyInstance(method, args, context) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var plugin = _step.value;

        if (plugin[method]) {
          plugin[method].apply(plugin, [].concat(_toConsumableArray(args), [context]));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return {
    visitor: {
      Program: function Program(path, _ref2) {
        var opts = _ref2.opts;

        if (!plugins) {
          if (Array.isArray(opts)) {
            plugins = opts.map(function (_ref3) {
              var libraryName = _ref3.libraryName,
                  libraryDirectory = _ref3.libraryDirectory,
                  style = _ref3.style;
              return new _Plugin2.default(libraryName, libraryDirectory, style, types);
            });
          } else {
            opts = opts || {};
            plugins = [new _Plugin2.default(opts.libraryName || 'uisf-react', opts.libraryDirectory || opts.libDir, opts.style, types)];
          }
        }
        applyInstance('Program', arguments, this);
      },
      ImportDeclaration: function ImportDeclaration() {
        applyInstance('ImportDeclaration', arguments, this);
      },
      CallExpression: function CallExpression() {
        applyInstance('CallExpression', arguments, this);
      },
      MemberExpression: function MemberExpression() {
        applyInstance('MemberExpression', arguments, this);
      },
      Property: function Property() {
        applyInstance('Property', arguments, this);
      },
      VariableDeclarator: function VariableDeclarator() {
        applyInstance('VariableDeclarator', arguments, this);
      },
      LogicalExpression: function LogicalExpression() {
        applyInstance('LogicalExpression', arguments, this);
      },
      ConditionalExpression: function ConditionalExpression() {
        applyInstance('ConditionalExpression', arguments, this);
      },
      IfStatement: function IfStatement() {
        applyInstance('IfStatement', arguments, this);
      },
      ExportDefaultDeclaration: function ExportDefaultDeclaration() {
        applyInstance('ExportDefaultDeclaration', arguments, this);
      }
    }
  };
};

var _Plugin = require('./Plugin');

var _Plugin2 = _interopRequireDefault(_Plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = exports['default'];