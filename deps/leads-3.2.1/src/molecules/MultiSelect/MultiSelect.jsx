import React, { Fragment } from 'react';
import ReactSelect, { components } from 'react-select';
import CreatableReactSelect from 'react-select/lib/Creatable';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';

import { colors, shadows, typographyDefs } from '../../theme/Theme';

const DEFAULT_MIN_INPUT_HEIGHT = 38;
const DEFAULT_MAX_MENU_HEIGHT = 306;

// https://react-select.com/styles
const selectStyles = {
  container: (styles, { isDisabled }) => ({
    ...styles,
    ...typographyDefs.bodyDefault,
    opacity: isDisabled ? 0.4 : 1,
  }),
  control: (styles, props) => {
    const { isFocused } = props;
    const { minInputHeight, maxInputHeight, verticallyCentered } = props.selectProps;

    return {
      ...styles,
      borderColor: isFocused ? colors.blue : colors.grey,
      backgroundColor: `#fff`,
      boxShadow: 'none',
      minHeight: minInputHeight,
      maxHeight: maxInputHeight,
      overflowX: maxInputHeight && 'hidden',
      overflowY: maxInputHeight && 'auto',
      alignItems: verticallyCentered ? 'center' : 'flex-start',
      '&:hover': {
        borderColor: isFocused ? colors.blue : colors.greyDarker,
      },
    };
  },
  dropdownIndicator: (styles, props) => {
    const { menuIsOpen, isSearchable } = props.selectProps;

    return {
      ...styles,
      color: `${colors.greyDark} !important`,
      transform: !isSearchable && menuIsOpen ? 'rotate(180deg)' : 'rotate(0)',
      transition: 'transform 0.2s ease',
    };
  },
  indicatorsContainer: (styles, { selectProps }) => ({
    ...styles,
    alignItems: selectProps.verticallyCentered ? 'center' : 'flex-start',
  }),
  indicatorSeparator: (styles, { selectProps }) => ({
    ...styles,
    backgroundColor: colors.grey,
    display: !selectProps.hasIndicatorSeparator && 'none',
  }),
  input: styles => ({ ...styles, color: colors.greyDarker, padding: 0 }),
  multiValue: styles => ({
    ...styles,
    backgroundColor: colors.blue,
    borderRadius: 3,
  }),
  multiValueLabel: styles => ({ ...styles, color: '#fff', fontSize: 13, padding: '0 6px' }),
  multiValueRemove: (styles, { isFocused }) => ({
    ...styles,
    color: '#fff',
    backgroundColor: isFocused && colors.blueDark,
    borderRadius: 0,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    '&:hover': {
      color: '#fff',
      backgroundColor: colors.blueDark,
    },
  }),
  menu: styles => ({
    ...styles,
    borderColor: colors.grey,
    borderWidth: 1,
    borderStyle: 'solid',
    boxShadow: shadows.l3,
    marginTop: 6,
  }),
  menuList: styles => ({
    ...styles,
    padding: 9,
  }),
  noOptionsMessage: styles => ({
    ...styles,
    textAlign: 'left',
    color: colors.greyDarker,
    fontSize: 15,
    padding: '0 2px',
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    fontSize: 15,
    lineHeight: 1.2,
    backgroundColor: isSelected || isFocused ? colors.blue : null,
    color: isSelected || isFocused ? `#fff` : colors.greyDarker,
    padding: 9,
    borderRadius: 3,
  }),
  placeholder: (styles, { selectProps }) => ({
    ...styles,
    color: colors.grey,
    lineHeight: '28px',
  }),
  valueContainer: (styles, { hasValue, selectProps }) => ({
    ...styles,
    padding: hasValue ? '4px' : selectProps.isSearchable ? '4px 8px' : '10px 8px 8px',
    alignItems: selectProps.verticallyCentered ? 'center' : 'flex-start',
  }),
};

// https://react-select.com/styles#overriding-the-theme
const selectTheme = theme => ({
  ...theme,
  borderRadius: 3,
  colors: {
    ...theme.colors,
    primary: colors.blue,
    primary25: colors.blueLighter,
    primary75: colors.blueLight,
    danger: colors.redDark,
    dangerLight: colors.redLight,
  },
});

const DropdownIndicator = props => {
  const { isSearchable, hasDropdownIndicator } = props.selectProps;

  return (
    <Fragment>
      {hasDropdownIndicator && (
        <components.DropdownIndicator {...props}>
          {isSearchable ? (
            <i
              className={cx(
                'lp-icon',
                css`
                  font-size: 16px;
                  width: 20px;
                  height: 20px;
                  text-align: center;
                  margin-top: -1px;
                `,
              )}
            >
              search
            </i>
          ) : (
            <i
              className={cx(
                'lp-icon',
                css`
                  line-height: 1;
                  height: 20px;
                `,
              )}
            >
              down_angle
            </i>
          )}
        </components.DropdownIndicator>
      )}
    </Fragment>
  );
};

export default class MultiSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxSelectedOptionsReached: false,
      selectedOptions: props.defaultValue || [],
    };
  }

  handleChange = (selectedOptions, actionMeta) => {
    const { maxSelectedOptions, onChange } = this.props;

    const maxSelectedOptionsReached =
      !!maxSelectedOptions && selectedOptions.length >= maxSelectedOptions;

    this.setState({ maxSelectedOptionsReached, selectedOptions });

    return onChange(selectedOptions, actionMeta);
  };

  noOptionsMessage = ({ inputValue }) => {
    const { maxSelectedOptionsMessage, noOptionsMessage } = this.props;
    const { maxSelectedOptionsReached } = this.state;

    if (maxSelectedOptionsMessage && maxSelectedOptionsReached) {
      return maxSelectedOptionsMessage;
    }

    return noOptionsMessage({ inputValue });
  };

  render() {
    const {
      classNamePrefix,
      label,
      options,
      hasDropdownIndicator,
      isCreatable,
      ...props
    } = this.props;

    const { maxSelectedOptionsReached, selectedOptions } = this.state;

    return (
      <Fragment>
        {label && (
          <div
            className={cx(css(typographyDefs.bodyDefault), {
              [`${classNamePrefix}__label`]: classNamePrefix,
            })}
          >
            {label}
          </div>
        )}
        {isCreatable ? (
          <CreatableReactSelect
            {...props}
            classNamePrefix={classNamePrefix}
            options={maxSelectedOptionsReached ? selectedOptions : options}
            components={{ DropdownIndicator }}
            styles={selectStyles}
            theme={selectTheme}
            hasDropdownIndicator={hasDropdownIndicator}
            onChange={this.handleChange}
            noOptionsMessage={this.noOptionsMessage}
            isMulti
          />
        ) : (
          <ReactSelect
            {...props}
            classNamePrefix={classNamePrefix}
            options={maxSelectedOptionsReached ? selectedOptions : options}
            components={{ DropdownIndicator }}
            styles={selectStyles}
            theme={selectTheme}
            hasDropdownIndicator={hasDropdownIndicator}
            noOptionsMessage={this.noOptionsMessage}
            onChange={this.handleChange}
            isMulti
          />
        )}
      </Fragment>
    );
  }
}

// Accepts all props for React Select v2: https://react-select.com/props
MultiSelect.propTypes = {
  label: PropTypes.string,
  minInputHeight: PropTypes.number,
  maxInputHeight: PropTypes.number,
  maxMenuHeight: PropTypes.number,
  maxSelectedOptions: PropTypes.number,
  maxSelectedOptionsMessage: PropTypes.string,
  hasDropdownIndicator: PropTypes.bool,
  hasIndicatorSeparator: PropTypes.bool,
  verticallyCentered: PropTypes.bool,
  noOptionsMessage: PropTypes.func,
  onChange: PropTypes.func,
};

MultiSelect.defaultProps = {
  label: '',
  minInputHeight: DEFAULT_MIN_INPUT_HEIGHT,
  maxInputHeight: null,
  maxMenuHeight: DEFAULT_MAX_MENU_HEIGHT,
  maxSelectedOptions: null,
  maxSelectedOptionsMessage: '',
  hasDropdownIndicator: true,
  hasIndicatorSeparator: true,
  verticallyCentered: true,
  noOptionsMessage: () => {},
  onChange: () => {},
};
