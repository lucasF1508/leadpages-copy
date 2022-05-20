import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

var RadioInput = function RadioInput(_ref) {
  var labelText = _ref.labelText,
      labelClass = _ref.labelClass,
      value = _ref.value,
      isChecked = _ref.isChecked,
      onChange = _ref.onChange,
      id = _ref.id,
      disabled = _ref.disabled;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "radio",
    value: value,
    onChange: onChange,
    checked: isChecked,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("label", {
    "data-qa-selector": "".concat(id, "-radio-top-label"),
    className: cx(labelClass, {
      disabled: disabled
    }),
    htmlFor: id
  }, labelText));
};

RadioInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelClass: PropTypes.string,
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};
RadioInput.defaultProps = {
  labelClass: ''
};
export default RadioInput;