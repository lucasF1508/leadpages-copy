import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

const RadioInput = ({
  labelText,
  labelClass,
  value,
  isChecked,
  onChange,
  id,
  disabled,
}) => (
  <div>
    <input
      id={id}
      type="radio"
      value={value}
      onChange={onChange}
      checked={isChecked}
      disabled={disabled}
    />
    <label
      data-qa-selector={`${id}-radio-top-label`}
      className={cx( labelClass, { disabled })}
      htmlFor={id}
    >
      {labelText}
    </label>
  </div>
);

RadioInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelClass: PropTypes.string,
  value: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

RadioInput.defaultProps = {
  labelClass: '',
};

export default RadioInput;
