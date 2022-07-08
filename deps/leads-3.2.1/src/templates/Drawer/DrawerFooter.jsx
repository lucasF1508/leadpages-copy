import React from 'react';
import PropTypes from 'prop-types';
import styles from './Drawer.css';

const DrawerFooter = ({ children }) => (
  <div className={styles.templateDrawerFooter}>{children}</div>
);

export default DrawerFooter;

DrawerFooter.propTypes = {
  children: PropTypes.node
};

DrawerFooter.defaultProps = {
  children: null
};
