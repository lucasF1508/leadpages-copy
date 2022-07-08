"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Loading = void 0;

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var Loading = function Loading(_ref) {
  var msg = _ref.msg,
      variant = _ref.variant;
  return /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    justify: "center",
    direction: "column",
    alignItems: "center",
    style: {
      height: '100%'
    }
  }, msg && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: variant,
    style: {
      paddingBottom: 10
    }
  }, msg), /*#__PURE__*/_react.default.createElement(_CircularProgress.default, null));
};

exports.Loading = Loading;
var _default = Loading;
exports.default = _default;