import React from 'react';
import { cx } from 'emotion';
import PropTypes from 'prop-types';

import Input from '../../atoms/Input';
import Option from '../../atoms/Option';
import Select from '../Select';
import { CopyButton } from '../CopyLink';

import {
  getSelectContainerClass,
  containerClass,
  selectInputClassName,
  getInputGroupClass,
  errorClass,
  labelClass,
  singleOptionClass,
  selectClass,
  inputContainerClass,
} from './UrlInputGroup.css.js';

export const selectors = {
  SINGLE_OPTION_SELECT: 'url-option-select-single',
  MULTI_OPTION_SELECT: 'url-option-select-multi',
  SELECT_ERROR: 'url-option-select-error',
  SELECT_LABEL: 'url-option-select-label',
  INPUT: 'url-input',
  INPUT_LABEL: 'url-input-label',
  INPUT_ERROR: 'url-input-error',
  COPY_LINK: 'url-copy',
};

const SingleOptionComponent = ({ value }) => (
  <div data-qa-selector={selectors.SINGLE_OPTION_SELECT} className={singleOptionClass}>
    {value}
  </div>
);

const SelectComponent = ({
  options,
  onUpdateSelect,
  selectValue,
  getOptionValue,
  getOptionDisplay,
}) => (
  <Select
    data-qa-selector={selectors.MULTI_OPTION_SELECT}
    onChange={({ value }) => onUpdateSelect(value)}
    className={selectClass}
    inputClassName={selectInputClassName}
    isSingleInput
  >
    {options.map(option => {
      const value = getOptionValue(option);
      return (
        <Option
          value={value}
          key={value}
          primaryText={getOptionDisplay(option)}
          selected={value === selectValue}
        />
      );
    })}
  </Select>
);

const InputComponent = ({
  inputValue,
  inputPlaceholder,
  inputLabel,
  onUpdateInput,
  inputError,
}) => (
  <div className={inputContainerClass}>
    {inputLabel && (
      <span data-qa-selector={selectors.INPUT_LABEL} className={labelClass}>
        {inputLabel}
      </span>
    )}
    <Input
      data-qa-selector={selectors.INPUT}
      value={inputValue}
      onChange={({ target }) => onUpdateInput(target.value)}
      placeholder={inputPlaceholder}
    />
    {inputError && (
      <span data-qa-selector={selectors.INPUT_ERROR} className={errorClass}>
        {inputError}
      </span>
    )}
  </div>
);

const UrlInputGroup = ({
  options,
  getOptionDisplay,
  getOptionValue,
  onUpdateSelect,
  selectValue,
  selectMinWidth,
  selectLabel,
  selectError,
  allowInputSelection,
  onUpdateInput,
  inputValue,
  inputError,
  inputPlaceholder,
  inputLabel,
  allowCopyLink,
  className,
}) => {
  const selectContainer = getSelectContainerClass(
    allowInputSelection,
    allowCopyLink,
    selectMinWidth,
  );
  const inputGroupClass = getInputGroupClass(selectLabel || inputLabel);

  let selectDisplay;
  if (allowCopyLink && selectValue) {
    const match = options.filter(opt => getOptionValue(opt) === selectValue);
    selectDisplay = match.length > 0 ? getOptionDisplay(match[0]) : '';
  }

  return (
    <div className={cx(containerClass, className)}>
      <div className={cx(inputGroupClass)}>
        <div className={selectContainer}>
          {selectLabel && (
            <span data-qa-selector={selectors.SELECT_LABEL} className={labelClass}>
              {selectLabel}
            </span>
          )}
          {options.length === 1 ? (
            <SingleOptionComponent value={getOptionDisplay(options[0])} />
          ) : (
            <SelectComponent
              options={options}
              onUpdateSelect={onUpdateSelect}
              selectValue={selectValue}
              getOptionValue={getOptionValue}
              getOptionDisplay={getOptionDisplay}
            />
          )}
          {selectError && (
            <span data-qa-selector={selectors.SELECT_ERROR} className={errorClass}>
              {selectError}
            </span>
          )}
        </div>
        {allowInputSelection && (
          <InputComponent
            inputValue={inputValue}
            inputPlaceholder={inputPlaceholder}
            inputLabel={inputLabel}
            onUpdateInput={onUpdateInput}
            inputError={inputError}
          />
        )}
        {allowCopyLink && (
          <span>
            <CopyButton
              data-qa-selector={selectors.COPY_LINK}
              linkToCopy={`${selectDisplay}${inputValue}`}
            />
          </span>
        )}
      </div>
    </div>
  );
};

UrlInputGroup.propTypes = {
  // Select
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  getOptionDisplay: PropTypes.func,
  getOptionValue: PropTypes.func,
  onUpdateSelect: PropTypes.func.isRequired,
  selectValue: PropTypes.string,
  selectMinWidth: PropTypes.string,
  selectLabel: PropTypes.string,
  selectError: PropTypes.node,

  // Input
  allowInputSelection: PropTypes.bool,
  onUpdateInput: PropTypes.func,
  inputValue: PropTypes.string,
  inputError: PropTypes.node,
  inputPlaceholder: PropTypes.string,
  inputLabel: PropTypes.string,

  allowCopyLink: PropTypes.bool,
  className: PropTypes.string,
};

UrlInputGroup.defaultProps = {
  getOptionDisplay: opt => opt,
  getOptionValue: opt => opt,
  selectValue: '',
  selectMinWidth: '50%',
  selectLabel: '',
  selectError: '',

  allowInputSelection: false,
  onUpdateInput: () => {},
  inputValue: '',
  inputError: '',
  inputPlaceholder: '',
  inputLabel: '',

  allowCopyLink: false,
  className: '',
};

export default UrlInputGroup;
