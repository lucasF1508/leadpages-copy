import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  checkboxActive,
  checkboxClass,
  checkboxDisabled,
  checkboxLabelText,
  checkboxLabelSubtext,
  checkboxStyles,
  checkboxChecked,
  checkboxAlignTop,
  checkboxLabelTextAlignTop
} from './Checkbox.css';

class Checkbox extends Component {
  handleKeyPress = ({ ...event }) => {
    if (event.keyCode === 0) {
      this.props.onChange({
        ...event,
        target: {
          ...event.target,
          checked: !this.checkbox.checked
        }
      });
    }
  };

  render() {
    const {
      className,
      disabled,
      id,
      isActive,
      checked,
      fontStyle,
      labelContent,
      subContent,
      tabIndex,
      alignTop,
      ...props
    } = this.props;

    return (
      <div
        className={cx(checkboxClass, {
          [`${className}`]: className,
          [`${checkboxActive}`]: isActive,
          [`${checkboxDisabled}`]: !!disabled,
          [`${checkboxChecked}`]: !!checked,
          [`${checkboxAlignTop}`]: !!alignTop
        })}
      >
        <div>
          <input
            className={checkboxStyles}
            id={id}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            ref={checkbox => (this.checkbox = checkbox)}
            {...props}
          />
          <label
            className={checkboxLabelText}
            htmlFor={id}
            tabIndex={disabled ? undefined : tabIndex}
            onKeyPress={this.handleKeyPress}
          >
            {!!checked && <i className="lp-icon lp-icon-enclosed_checkmark" />}
            {!checked && <i className="lp-icon lp-icon-unchecked_box" />}
          </label>
        </div>
        <div>
          <label
            className={cx(checkboxLabelText, {
              [`${checkboxLabelTextAlignTop}`]: alignTop
            })}
            htmlFor={id}
            style={{
              fontStyle
            }}
          >
            {labelContent}
          </label>
          {subContent && (
            <label htmlFor={id} className={checkboxLabelSubtext}>
              {subContent}
            </label>
          )}
        </div>
      </div>
    );
  }
}

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelContent: PropTypes.node,
  subContent: PropTypes.node,
  fontStyle: PropTypes.oneOf([
    'inherit',
    'initial',
    'normal',
    'italic',
    'oblique',
    'unset'
  ]),
  tabIndex: PropTypes.number,
  alignTop: PropTypes.bool
};

Checkbox.defaultProps = {
  alignTop: false,
  disabled: false,
  className: '',
  isActive: false,
  checked: false,
  children: null,
  fontStyle: 'normal',
  labelContent: null,
  subContent: null,
  tabIndex: 0
};

export default Checkbox;
