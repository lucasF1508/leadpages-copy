import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { footerClassName } from './Modal.css';

export const Footer = ({ children, className }) => (
  <div className={cx(footerClassName, className)}>{children}</div>
);

Footer.defaultProps = {
  children: null,
  className: ''
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Footer;
