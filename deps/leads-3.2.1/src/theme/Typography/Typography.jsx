/* eslint react/prop-types: 0 */

import React from 'react';
import classNames from 'classnames';
import styles from './Typography.css';

export const types = {
  largeDisplayHeading: 'largeDisplayHeading',
  mediumDisplayHeading: 'mediumDisplayHeading',
  inPageHeading: 'inPageHeading',
  headingDefault: 'headingDefault',
  bodyHeading: 'bodyHeading',
  bodyDefault: 'bodyDefault',
  supportContent: 'supportContent',
  tableHeader: 'tableHeader',
  inlineLink: 'inlineLink',
};

const withTypography = WrappedComponent => ({ type, className, ...props }) => (
  <WrappedComponent
    className={classNames(className, {
      [`${styles[`${type}`]}`]: !!types[type],
    })}
    {...props}
  />
);
export default withTypography;
