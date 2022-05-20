"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useConfig;

var _react = require("react");

var _config = require("./config");

function useConfig(keys) {
  return (0, _react.useMemo)(() => {
    const config = _config.Config.getInstance();

    const configKeys = Array.isArray(keys) ? keys : [keys];
    const configValues = configKeys.map(key => config.get(key));

    if (configKeys.length === 1) {
      return configValues[0];
    }

    return configValues;
  }, Array.isArray(keys) ? keys : [keys]);
}