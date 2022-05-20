import React from 'react';
import PropTypes from 'prop-types';
export default function AlertBar({ width, height, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-12 -9 72 72"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path fill="#E7E6E6" d="M0,0 L48,0 L48,26 C48,32.627417 42.627417,38 36,38 L0,38 L0,0 Z" />
        <rect width="48" height="10" fill="#DFAE78" />
        <circle cx="24" cy="46" r="8" fill="#C3C2C1" />
      </g>
    </svg>
  );
}

AlertBar.propTypes = { width: PropTypes.number, height: PropTypes.number };

AlertBar.defaultProps = { width: 72, height: 72 };
