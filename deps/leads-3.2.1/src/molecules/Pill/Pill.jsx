import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Pill.css';

const Pill = ({ pillText, data, className, children, icon }) => {
  const isEmpty = data.length === 0;

  return (
    <div
      className={classNames(styles.pillBase, {
        [`${className}`]: !isEmpty,
        [`${styles.pillEmpty}`]: isEmpty
      })}
    >
      {isEmpty && (
        <span
          className={classNames({
            [`${styles.pillEmptyIcon}`]: isEmpty
          })}
        >
          {isEmpty && <i className="lp-icon">{icon}</i>}
        </span>
      )}

      <span
        className={classNames({
          [`${styles.pillEmptyText}`]: isEmpty
        })}
      >
        {isEmpty && pillText}
      </span>
      {!isEmpty && children}
    </div>
  );
};

Pill.defaultProps = {
  data: [],
  pillText: 'Choose Progression Point(s) to Track',
  className: '',
  children: null,
  icon: 'add'
};

Pill.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  pillText: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.string
};

export default Pill;
