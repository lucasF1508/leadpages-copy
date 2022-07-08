/* eslint react/prop-types: 0 */

import React from 'react';
import classNames from 'classnames';
import styles from './Shadow.css';

export const levels = {
  L1: 'L1',
  L2: 'L2',
  L3: 'L3',
  L4: 'L4',
  L5: 'L5',
};

const withShadow = WrappedComponent => ({ level, ...props }) => (
  <WrappedComponent
    className={classNames({
      [`${styles[`shadow${level}`]}`]: !!levels[level],
    })}
    {...props}
  />
);
export default withShadow;
