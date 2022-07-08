import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import Input from '../../atoms/Input';
import Tooltip from '../../molecules/Tooltip';
import {
  defaultClassName,
  labelStyles,
  subLabelStyles,
  subLabelListStyles,
  subLabelListItemStyles,
  subLabelListItemComplete,
  viewIcon,
  helperTextStyles
} from './SetPassword.css.js';

export default class SetPassword extends Component {
  displayName = 'SetPassword';
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false
    };
  }
  handleOnChange = ({ target }) => {
    const password = target.value;
    this.props.onChange(password);
  };
  toggleTextType = () => {
    this.setState(state => ({
      showPassword: !state.showPassword
    }));
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit();
  };
  render() {
    const {
      children,
      className,
      component: SetPasswordComponent,
      password,
      validations,
      onChange,
      onSubmit,
      ...props
    } = this.props;

    const { showPassword } = this.state;

    return (
      <SetPasswordComponent
        className={cx(defaultClassName, className)}
        {...props}
      >
        <form onSubmit={this.onSubmit}>
          <label htmlFor="password" className={labelStyles}>
            Create a Password
          </label>
          <Input
            isSingleInput
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter a secure password"
            value={password}
            onChange={this.handleOnChange}
          />
          <div
            className={viewIcon}
            onClick={this.toggleTextType}
            data-test="test"
          >
            <Tooltip tip={showPassword ? 'Hide' : 'Show'}>
              <i className={cx('lp-icon')}>{showPassword ? 'hide' : 'view'}</i>
            </Tooltip>
          </div>
        </form>
        {validations.length > 0 && (
          <div className={subLabelStyles}>
            <p className={helperTextStyles}>
              Please make sure your password contains:
            </p>
            <div className={subLabelListStyles}>
              {validations.map(({ content, passedCheck }, index) => (
                <div
                  key={index}
                  className={cx(
                    subLabelListItemStyles,
                    passedCheck && subLabelListItemComplete
                  )}
                >
                  {content()}
                </div>
              ))}
            </div>
          </div>
        )}
      </SetPasswordComponent>
    );
  }
}

SetPassword.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  password: PropTypes.string,
  validations: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
      passedCheck: PropTypes.bool
    })
  )
};

SetPassword.defaultProps = {
  children: null,
  className: '',
  component: 'div',
  onChange: () => {
    console.log('default');
  },
  onSubmit: () => {
    console.log('default');
  },
  password: '',
  validations: []
};
