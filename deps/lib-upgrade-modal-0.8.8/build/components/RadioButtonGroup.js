"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

var _constants = require("../constants");

var _RadioInput = _interopRequireDefault(require("./RadioInput"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  height: 36px;\n  width: 194px;\n  flex-wrap: nowrap;\n  background: ", ";\n  justify-content: space-between;\n  border-radius: 100px;\n\n  &__btn {\n    display: flex;\n    align-items: center;\n    color: ", ";\n    font-family: 'Apercu Pro';\n    font-size: 15px;\n    font-weight: 500;\n    line-height: 20px;\n\n    height: 36px;\n    border-radius: 100px;\n    padding: 0 24px;\n    cursor: pointer;\n\n    &.disabled {\n      opacity: 0.4;\n      cursor: not-allowed;\n    }\n  }\n\n  & input[type='radio'] {\n    opacity: 0;\n    position: absolute;\n\n    &:checked + [class$='__btn'] {\n      background: #ffffff;\n      box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.25);\n      color: ", ";\n    }\n  }\n\n  @media (max-width: 1100px) {\n    width: 164px;\n    &__btn {\n      padding: 0 16px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var radioGroupClass = (0, _emotion.css)(_templateObject(), _constants.COLORS.bg.midGrey, _constants.COLORS.text.tundora, _constants.COLORS.lp);

var RadioButtonGroup = function RadioButtonGroup(_ref) {
  var items = _ref.items,
      onChange = _ref.onChange,
      selectedValue = _ref.selectedValue,
      rootPlans = _ref.rootPlans,
      isBottom = _ref.isBottom;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: radioGroupClass
  }, Object.keys(items).map(function (key) {
    var _items$key = items[key],
        label = _items$key.label,
        value = _items$key.value,
        id = _items$key.id;
    return /*#__PURE__*/_react.default.createElement(_RadioInput.default, {
      key: label,
      labelText: label,
      labelClass: "".concat(radioGroupClass, "__btn"),
      value: value,
      isChecked: selectedValue === value,
      id: isBottom ? id + '1' : id,
      onChange: onChange,
      disabled: !rootPlans[value]
    });
  }));
};

RadioButtonGroup.propTypes = {
  items: _propTypes.default.objectOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired,
    id: _propTypes.default.string.isRequired
  })).isRequired,
  onChange: _propTypes.default.func.isRequired,
  selectedValue: _propTypes.default.string
};
RadioButtonGroup.defaultProps = {
  selectedValue: ''
};
var _default = RadioButtonGroup;
exports.default = _default;