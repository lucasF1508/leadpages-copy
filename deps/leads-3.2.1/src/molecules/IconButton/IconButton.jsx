import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  defaultClassName,
  noBackgroundClassName,
  noHoverBackgroundClassName,
  isDangerClassName,
  isHighlightedClassName
} from './IconButton.css.js';

export default class IconButton extends Component {
  displayName = 'IconButton';
  render() {
    const {
      children,
      className,
      component: IconButtonComponent,
      icon,
      noBackground,
      noHoverBackground,
      isDanger,
      isActive,
      isHighlighted,
      ...props
    } = this.props;

    return (
      <IconButtonComponent
        className={cx(
          defaultClassName,
          noBackground && noBackgroundClassName,
          noHoverBackground && noHoverBackgroundClassName,
          noHoverBackground && isDanger && isDangerClassName,
          isHighlighted && isHighlightedClassName,
          isActive && 'active',
          className
        )}
        {...props}
      >
        {icon && <i className="lp-icon">{icon}</i>}
        {children}
      </IconButtonComponent>
    );
  }
}

IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  icon: PropTypes.string,
  noBackground: PropTypes.bool,
  noHoverBackground: PropTypes.bool,
  isDanger: PropTypes.bool,
  isActive: PropTypes.bool,
  isHighlighted: PropTypes.bool
};

IconButton.defaultProps = {
  children: null,
  className: '',
  component: 'button',
  icon: null,
  noBackground: false,
  noHoverBackground: false,
  isDanger: false,
  isActive: false,
  isHighlighted: false
};
