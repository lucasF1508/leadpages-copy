import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Input.css';

const Input = ({
  className,
  disabled,
  hasError,
  subContent,
  id,
  isActive,
  labelContent,
  isSingleInput,
  inputContainerClass,
  inputLabelClass,
  inputSelfClass,
  placeholder,
  type,
  inputRef,
  tabIndex,
  inputComponent: InputComponent,
  inputWrapper: InputWrapper,
  inputWrapperProps,
  ...props
}) => {
  function renderInput() {
    return (
      <InputComponent
        className={classNames(styles.inputStyles, inputSelfClass, {
          [styles.inputActive]: isActive,
          [styles.singleInputField]: isSingleInput,
        })}
        ref={inputRef}
        type={type}
        id={id}
        disabled={disabled}
        placeholder={!disabled ? placeholder : ''}
        tabIndex={disabled ? undefined : tabIndex}
        {...props}
      />
    );
  }

  return (
    <div
      className={classNames(className, styles.inputClass, inputContainerClass, {
        [styles.inputActive]: isActive,
        [styles.inputError]: hasError,
        [styles.inputDisabled]: !!disabled,
      })}
    >
      <label className={classNames(styles.inputLabelText, inputLabelClass)} htmlFor={id}>
        {labelContent}
      </label>
      {InputWrapper && <InputWrapper {...inputWrapperProps}>{renderInput()}</InputWrapper>}
      {!InputWrapper && renderInput()}
      {subContent && <div className={styles.inputHelperText}>{subContent}</div>}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  subContent: PropTypes.node,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  inputComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  inputContainerClass: PropTypes.string,
  inputLabelClass: PropTypes.string,
  inputSelfClass: PropTypes.string,
  inputRef: PropTypes.func,
  inputWrapper: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  inputWrapperProps: PropTypes.shape({}),
  isActive: PropTypes.bool,
  isSingleInput: PropTypes.bool,
  labelContent: PropTypes.node,
  type: PropTypes.string,
  tabIndex: PropTypes.number,
};

Input.defaultProps = {
  className: '',
  disabled: false,
  hasError: false,
  subContent: null,
  id: '',
  inputComponent: 'input',
  inputContainerClass: null,
  inputLabelClass: null,
  inputSelfClass: null,
  inputRef: null,
  inputWrapper: null,
  inputWrapperProps: null,
  isActive: false,
  isSingleInput: false,
  labelContent: null,
  placeholder: '',
  type: 'text',
  tabIndex: 0,
};

export default Input;
