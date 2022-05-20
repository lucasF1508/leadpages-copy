import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import * as style from './RadioButton.css';

class RadioButton extends Component {
  handleKeyPress = ({ ...event }) => {
    if (event.keyCode === 0) {
      this.props.onChange({
        ...event,
        target: {
          ...event.target,
          value: this.radio.value
        }
      });
    }
  };

  render() {
    const {
      className,
      disabled,
      isActive,
      labelContent,
      checked,
      id,
      tabIndex,
      ...props
    } = this.props;

    const lpIconClass = !!checked
      ? 'lp-icon-radio_button_checked'
      : 'lp-icon-radio_button_unchecked';

    return (
      <div
        className={cx(className, style.radioButtonClass, {
          [`${style.radioButtonActive}`]: isActive,
          [`${style.radioButtonDisabled}`]: !!disabled
        })}
      >
        <input
          className={style.radioButtonStyles}
          id={id}
          type="radio"
          checked={checked}
          disabled={disabled}
          ref={radio => (this.radio = radio)}
          {...props}
        />
        <label
          className={style.radioButtonLabelText}
          htmlFor={id}
          tabIndex={disabled ? undefined : tabIndex}
          onKeyPress={this.handleKeyPress}
        >
          <i className={cx('lp-icon', lpIconClass)} />
          {labelContent}
        </label>
      </div>
    );
  }
}

RadioButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
  labelContent: PropTypes.node,
  checked: PropTypes.bool,
  id: PropTypes.string,
  tabIndex: PropTypes.number
};

RadioButton.defaultProps = {
  className: '',
  disabled: false,
  isActive: false,
  labelContent: null,
  checked: false,
  id: '',
  tabIndex: 0
};

export default RadioButton;
