"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

var RadioInput = function RadioInput(_ref) {
  var labelText = _ref.labelText,
      labelClass = _ref.labelClass,
      value = _ref.value,
      isChecked = _ref.isChecked,
      onChange = _ref.onChange,
      id = _ref.id,
      disabled = _ref.disabled;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    id: id,
    type: "radio",
    value: value,
    onChange: onChange,
    checked: isChecked,
    disabled: disabled
  }), /*#__PURE__*/_react.default.createElement("label", {
    "data-qa-selector": "".concat(id, "-radio-top-label"),
    className: (0, _emotion.cx)(labelClass, {
      disabled: disabled
    }),
    htmlFor: id
  }, labelText));
};

RadioInput.propTypes = {
  labelText: _propTypes.default.string.isRequired,
  labelClass: _propTypes.default.string,
  value: _propTypes.default.string.isRequired,
  isChecked: _propTypes.default.bool.isRequired,
  onChange: _propTypes.default.func.isRequired,
  id: _propTypes.default.string.isRequired
};
RadioInput.defaultProps = {
  labelClass: ''
};
var _default = RadioInput;
exports.default = _default;