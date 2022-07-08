import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Toggle.css';

const Toggle = ({ className, isActive, checked, id, ...props }) => (
  <div
    className={classNames(className, styles.toggleClass, {
      [`${styles.toggleActive}`]: isActive
    })}
  >
    <label htmlFor={id}>
      <div
        className={classNames(styles.toggleBase, {
          [`${styles.toggleBaseOn}`]: checked
        })}
      >
        <div
          className={classNames(styles.toggleSwitch, {
            [`${styles.toggleSwitchOn}`]: checked
          })}
        />
      </div>
    </label>
    <input
      checked={checked}
      className={styles.toggleInput}
      type="checkbox"
      id={id}
      {...props}
    />
  </div>
);

Toggle.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  isActive: PropTypes.bool
};

Toggle.defaultProps = {
  checked: false,
  className: '',
  id: '',
  isActive: false
};

export default Toggle;
