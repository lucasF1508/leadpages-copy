import React from 'react';
import PropTypes from 'prop-types';
export default function ENewsletter({ width, height, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-18 -24.5 72 72"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <rect width="36" height="23" fill="#E7E6E6" />
        <polygon fill="#603EFF" points="0 0 36 0 18 14" />
      </g>
    </svg>
  );
}

ENewsletter.propTypes = { width: PropTypes.number, height: PropTypes.number };

ENewsletter.defaultProps = { width: 72, height: 72 };
