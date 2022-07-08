import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import { colors } from '../../theme/Theme';

const { grey } = colors;

const defaultClassName = css`
  flex-grow: 1;
  border-right: 1px solid ${grey};
`;

const Partition = ({ children, className, ...rest }) => {
  const partitionProps = {
    ...rest,
    className: cx(defaultClassName, className)
  };

  return <div {...partitionProps}>{children}</div>;
};

Partition.defaultProps = {
  children: null,
  className: ''
};

Partition.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Partition;
