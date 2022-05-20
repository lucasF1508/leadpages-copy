import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { bodyClassName } from './Modal.css';

export const Body = ({
  children,
  isHero,
  className,
  'data-qa-selector': dataQaSelector
}) => (
  <div
    className={cx(bodyClassName, {
      [`${className}`]: className,
      'is-hero': isHero
    })}
    data-qa-selector={dataQaSelector}
  >
    {children}
  </div>
);

Body.defaultProps = {
  children: null,
  className: '',
  isHero: false,
  'data-qa-selector': 'modal-body'
};

Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isHero: PropTypes.bool,
  'data-qa-selector': PropTypes.string
};

export default Body;
