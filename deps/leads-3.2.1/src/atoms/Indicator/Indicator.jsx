import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Indicator.css';

const Indicator = ({ status, className }) =>
  <div className={classNames(styles.indicator, styles[status], className)} />;

Indicator.propTypes = {
  status: PropTypes.string,
  className: PropTypes.string,
};

Indicator.defaultProps = {
  status: 'success',
  className: '',
};

export default Indicator;
