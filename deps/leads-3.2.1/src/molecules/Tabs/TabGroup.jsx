import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './TabGroup.css';

const TabGroup = ({ className, children }) => (
  <ul className={classNames(className, styles.tabGroup)}>
    { children }
  </ul>
);

TabGroup.displayName = 'TabGroup';

TabGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
};

TabGroup.defaultProps = {
  className: null,
};

export default TabGroup;
