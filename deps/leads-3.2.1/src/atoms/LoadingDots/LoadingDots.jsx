import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './LoadingDots.css';

const LoadingDots = ({ className, inverted, size }) => (
  <div className={classNames(className, styles.loading, styles[size], {
    [`${styles.inverted}`]: inverted,
  })}
  >
    <div className={`${styles.dots} ${styles.dot1}`} />
    <div className={`${styles.dots} ${styles.dot2}`} />
    <div className={`${styles.dots} ${styles.dot3}`} />
  </div>
);

LoadingDots.defaultProps = {
  className: '',
  inverted: false,
  size: '',
};

LoadingDots.propTypes = {
  className: PropTypes.string,
  inverted: PropTypes.bool,
  size: PropTypes.string,
};

export default LoadingDots;
