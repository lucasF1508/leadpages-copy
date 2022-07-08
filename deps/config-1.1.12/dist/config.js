"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Config = void 0;

var _get2 = _interopRequireDefault(require("lodash/get"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _merge2 = _interopRequireDefault(require("lodash/merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let _config;

if (typeof window !== "undefined") {
  window.ct = window.ct || {};
  window.ct.config = window.ct.config || {};
  _config = window.ct.config;
} else {
  _config = {};
}

let instance;

class Config {
  set(key, value) {
    (0, _set2.default)(_config, key, value);
  }

  get(key) {
    let defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var value = (0, _get2.default)(_config, key);
    return value === void 0 ? defaultValue : value;
  }

  loadConfig(obj) {
    (0, _merge2.default)(_config, obj);
  }

  static getInstance() {
    if (!instance) {
      instance = new Config();
    }

    return instance;
  }

}

exports.Config = Config;
var _default = Config;
exports.default = _default;