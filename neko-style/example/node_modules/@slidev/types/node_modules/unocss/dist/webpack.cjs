'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const presetUno = require('@unocss/preset-uno');
const WebpackPlugin = require('@unocss/webpack');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const presetUno__default = /*#__PURE__*/_interopDefaultCompat(presetUno);
const WebpackPlugin__default = /*#__PURE__*/_interopDefaultCompat(WebpackPlugin);

function UnocssWebpackPlugin(configOrPath) {
  return WebpackPlugin__default(
    configOrPath,
    {
      presets: [
        presetUno__default()
      ]
    }
  );
}

exports.default = UnocssWebpackPlugin;
Object.prototype.hasOwnProperty.call(WebpackPlugin, '__proto__') &&
  !Object.prototype.hasOwnProperty.call(exports, '__proto__') &&
  Object.defineProperty(exports, '__proto__', {
    enumerable: true,
    value: WebpackPlugin['__proto__']
  });

Object.keys(WebpackPlugin).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) exports[k] = WebpackPlugin[k];
});
