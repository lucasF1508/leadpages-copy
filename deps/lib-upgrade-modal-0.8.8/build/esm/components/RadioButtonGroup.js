import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: 36px;\n  width: 194px;\n  flex-wrap: nowrap;\n  background: ", ";\n  justify-content: space-between;\n  border-radius: 100px;\n\n  &__btn {\n    display: flex;\n    align-items: center;\n    color: ", ";\n    font-family: 'Apercu Pro';\n    font-size: 15px;\n    font-weight: 500;\n    line-height: 20px;\n\n    height: 36px;\n    border-radius: 100px;\n    padding: 0 24px;\n    cursor: pointer;\n\n    &.disabled {\n      opacity: 0.4;\n      cursor: not-allowed;\n    }\n  }\n\n  & input[type='radio'] {\n    opacity: 0;\n    position: absolute;\n\n    &:checked + [class$='__btn'] {\n      background: #ffffff;\n      box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.25);\n      color: ", ";\n    }\n  }\n\n  @media (max-width: 1100px) {\n    width: 164px;\n    &__btn {\n      padding: 0 16px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { COLORS } from '../constants';
import RadioInput from './RadioInput';
var radioGroupClass = css(_templateObject(), COLORS.bg.midGrey, COLORS.text.tundora, COLORS.lp);

var RadioButtonGroup = function RadioButtonGroup(_ref) {
  var items = _ref.items,
      onChange = _ref.onChange,
      selectedValue = _ref.selectedValue,
      rootPlans = _ref.rootPlans,
      isBottom = _ref.isBottom;
  return /*#__PURE__*/React.createElement("div", {
    className: radioGroupClass
  }, Object.keys(items).map(function (key) {
    var _items$key = items[key],
        label = _items$key.label,
        value = _items$key.value,
        id = _items$key.id;
    return /*#__PURE__*/React.createElement(RadioInput, {
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
  items: PropTypes.objectOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.string
};
RadioButtonGroup.defaultProps = {
  selectedValue: ''
};
export default RadioButtonGroup;