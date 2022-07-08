import React from 'react';
import PropTypes from 'prop-types';
export default function AboutMeBio({ width, height, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-16 -23 72 72"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <rect width="40" height="26" fill="#E7E6E6" />
        <rect width="15" height="5" x="25" y="7" fill="#C3C2C1" />
        <rect width="15" height="5" x="25" y="15" fill="#C3C2C1" />
        <path
          fill="#FFF"
          d="M20,26 C20,21.581722 16.418278,18 12,18 C7.581722,18 4,21.581722 4,26 L20,26 Z"
        />
        <circle cx="12" cy="11" r="4" fill="#B27E52" />
      </g>
    </svg>
  );
}

AboutMeBio.propTypes = { width: PropTypes.number, height: PropTypes.number };

AboutMeBio.defaultProps = { width: 72, height: 72 };
