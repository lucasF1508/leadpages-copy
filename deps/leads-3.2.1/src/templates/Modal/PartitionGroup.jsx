import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';

const PartitionGroup = ({ children, className, ...rest }) => {
  const defaultClassName = css`
    display: flex;
  `;

  const partitionProps = {
    ...rest,
    className: cx(defaultClassName, className)
  };

  return <div {...partitionProps}>{children}</div>;
};

PartitionGroup.defaultProps = {
  children: null,
  className: ''
};

PartitionGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default PartitionGroup;
