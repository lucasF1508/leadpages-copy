"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _emotion = require("emotion");

var _constants = require("../constants");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  &,\n  &:before,\n  &:after {\n    border-radius: 50%;\n    width: 2.5em;\n    height: 2.5em;\n    animation-fill-mode: both;\n    animation: loader 1.8s infinite ease-in-out;\n  }\n\n  & {\n    color: ", ";\n    font-size: 9px;\n    margin: 40px auto;\n    position: relative;\n    transform: translateZ(0);\n    animation-delay: -0.16s;\n  }\n\n  &:before,\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n  }\n\n  &:before {\n    left: -3.5em;\n    animation-delay: -0.32s;\n  }\n  &:after {\n    left: 3.5em;\n  }\n\n  @keyframes loader {\n    0%,\n    80%,\n    100% {\n      box-shadow: 0 2.5em 0 -1.3em;\n    }\n    40% {\n      box-shadow: 0 2.5em 0 0;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var loaderAnimationClass = (0, _emotion.css)(_templateObject(), _constants.COLORS.main.primary);

var _default = function _default() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: loaderAnimationClass
  });
};

exports.default = _default;