import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './TabLink.css';

const TabLink = ({ children, active, onClick, ...props }) => (
  <li
    className={classNames(styles.link, {
      [`${styles.linkActive}`]: active,
    })}
  >
    <button type="button" onClick={onClick} {...props}>
      {children}
    </button>
  </li>
);

TabLink.displayName = 'TabLink';

TabLink.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

TabLink.defaultProps = {
  active: false,
  onClick: undefined,
};

export default TabLink;
