"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ctaPrimaryButtonClass = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

var _constants = require("../constants");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n  background-color: ", ";\n  border-color: ", ";\n  color: #ffffff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  height: 36px;\n  width: 176px;\n  border: 3px solid ", ";\n  border-radius: 32px;\n  background: transparent;\n  color: ", ";\n  font-weight: 500;\n  font-size: 16px;\n  margin-top: 20px;\n  margin-bottom: 12px;\n  text-align: center;\n  padding: 0;\n  font-family: Apercu Pro;\n\n  &:hover {\n    background: ", ";\n    border-color: ", ";\n    color: #ffffff;\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ctaButtonClass = (0, _emotion.css)(_templateObject(), _constants.COLORS.alt.secondary, _constants.COLORS.main.primary, _constants.COLORS.alt.primaryHover, _constants.COLORS.alt.primaryHover);
var ctaPrimaryButtonClass = (0, _emotion.css)(_templateObject2(), ctaButtonClass, _constants.COLORS.main.primary, _constants.COLORS.main.primary);
exports.ctaPrimaryButtonClass = ctaPrimaryButtonClass;

var CtaButton = function CtaButton(_ref) {
  var labelText = _ref.labelText,
      isPrimary = _ref.isPrimary,
      ctaClassName = _ref.ctaClassName,
      onClick = _ref.onClick,
      buttonProps = _ref.buttonProps;
  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    onClick: onClick,
    className: (0, _emotion.cx)([ctaClassName, isPrimary ? ctaPrimaryButtonClass : ctaButtonClass])
  }, buttonProps, {
    "data-analytics": "start-trial-button"
  }), labelText);
};

CtaButton.propTypes = {
  onClick: _propTypes.default.func.isRequired,
  labelText: _propTypes.default.string.isRequired,
  isPrimary: _propTypes.default.bool,
  ctaClassName: _propTypes.default.string,
  buttonProps: _propTypes.default.shape({})
};
CtaButton.defaultProps = {
  isPrimary: false,
  ctaClassName: '',
  buttonProps: {}
};
var _default = CtaButton;
exports.default = _default;