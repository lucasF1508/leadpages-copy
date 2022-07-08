import React from 'react';
import PropTypes from 'prop-types';
export default function FreeResource({ width, height, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-24 -20.5 72 72"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <polygon fill="#E7E6E6" points="0 0 12.571 0 24 11.429 24 31 0 31" />
        <polygon fill="#43E0F0" points="12.571 0 24 11.429 12.571 11.429" />
      </g>
    </svg>
  );
}

FreeResource.propTypes = { width: PropTypes.number, height: PropTypes.number };

FreeResource.defaultProps = { width: 72, height: 72 };
