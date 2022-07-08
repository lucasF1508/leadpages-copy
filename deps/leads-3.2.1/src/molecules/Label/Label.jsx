import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Label.css';

const Label = ({ children, className, icon, iconText, ...rest }) => {
  let Indicator = () => (
    <div className={classNames(styles.indicator, className)} />
  );
  if (icon) {
    Indicator = () => <i className="lp-icon">{icon}</i>;
  }
  if (iconText) {
    Indicator = () => (
      <div className={classNames(className, styles.indicatorWithText)}>
        <span>{iconText}</span>
      </div>
    );
  }
  return (
    <div className={classNames(styles.labelClass)} {...rest}>
      <Indicator />
      {children}
    </div>
  );
};

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.string,
  icon: PropTypes.string,
  iconText: PropTypes.string
};

Label.defaultProps = {
  children: null,
  className: '',
  icon: null,
  iconText: ''
};

export default Label;
