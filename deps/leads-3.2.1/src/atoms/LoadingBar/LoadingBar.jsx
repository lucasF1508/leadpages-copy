import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './LoadingBar.css';

const LoadingBar = ({ className }) => (
  <div className={classNames(className, styles.uiLoadingBar)} />
);

LoadingBar.defaultProps = {
  className: '',
};

LoadingBar.propTypes = {
  className: PropTypes.string,
};

export default LoadingBar;
