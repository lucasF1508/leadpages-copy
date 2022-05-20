import React from 'react';
import PropTypes from 'prop-types';
export default function Website({ width, height, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-12 -6 72 72"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="24" cy="24" r="24" fill="#E7E6E6" />
        <path
          fill="#C3C2C1"
          d="M24,48 C37.254834,48 48,37.254834 48,24 C48,10.745166 37.254834,-3.55271368e-15 24,-3.55271368e-15 L24,48 Z"
        />
        <polygon fill="#43E0F0" points="24 48 36 60 12 60" />
      </g>
    </svg>
  );
}

Website.propTypes = { width: PropTypes.number, height: PropTypes.number };

Website.defaultProps = { width: 72, height: 72 };
