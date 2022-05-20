import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  defaultClassName,
  dangerClassName,
  secondaryClassName,
  secondaryDangerClassName
} from './Link.css.js';

export default class Link extends Component {
  displayName = 'Link';
  render() {
    const {
      children,
      className,
      component: LinkComponent,
      isActive,
      isDanger,
      isSecondary,
      ...props
    } = this.props;

    return (
      <LinkComponent
        className={cx(
          defaultClassName,
          isSecondary && secondaryClassName,
          isDanger && dangerClassName,
          isSecondary && isDanger && secondaryDangerClassName,
          isActive && 'active',
          className
        )}
        {...props}
      >
        {children}
      </LinkComponent>
    );
  }
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  isActive: PropTypes.bool,
  isDanger: PropTypes.bool,
  isSecondary: PropTypes.bool
};

Link.defaultProps = {
  children: null,
  className: '',
  component: 'a',
  isActive: false,
  isDanger: false,
  isSecondary: false
};
