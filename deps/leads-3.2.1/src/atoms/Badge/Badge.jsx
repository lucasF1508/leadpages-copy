import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Badge.css';

const Badge = ({ className, children, icon, ...rest }) => (
  <div className={classNames(className, styles.badgeClass)} {...rest}>
    {icon && <i className="lp-icon">{icon}</i>}
    {children}
  </div>
);

Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  icon: PropTypes.string
};

Badge.defaultProps = {
  className: '',
  children: null,
  icon: null
};

export default Badge;
