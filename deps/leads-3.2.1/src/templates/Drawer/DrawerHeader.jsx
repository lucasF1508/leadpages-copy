import React from 'react';
import PropTypes from 'prop-types';
import styles from './Drawer.css';

const DrawerHeader = ({ header, subheader }) => (
  <div className={styles.templateDrawerHeader}>
    <h3 className={styles.header}>{header}</h3>
    {subheader ? <div className={styles.subheader}>{subheader}</div> : null}
  </div>
);

export default DrawerHeader;

DrawerHeader.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string
};

DrawerHeader.defaultProps = {
  header: '',
  subheader: ''
};
