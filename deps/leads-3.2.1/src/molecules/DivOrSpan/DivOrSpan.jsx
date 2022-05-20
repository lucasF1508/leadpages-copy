import React from 'react';
import PropTypes from 'prop-types';

function DivOrSpan({
  children,
  className,
  useDiv,
}) {
  return useDiv ?
    <div className={className}>
      {children}
    </div>
    :
    <span className={className}>
      {children}
    </span>;
}

DivOrSpan.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string,
  useDiv: PropTypes.bool,
};

DivOrSpan.defaultProps = {
  className: '',
  useDiv: false,
};

export default DivOrSpan;
