import React from 'react';
import PropTypes from 'prop-types';
export default function ComingSoon({ width, height, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-25 -19 72 72"
      {...props}
    >
      <g fill="none" fillRule="evenodd" opacity=".9" transform="translate(-.2)">
        <path
          fill="#C3C2C1"
          d="M0.2,5.8 L0.2,-2.48689958e-13 L22.2,-2.48689958e-13 L22.2,5.8 C22.2,11.9855892 17.2751322,17 11.2,17 C5.12486775,17 0.2,11.9855892 0.2,5.8 Z"
        />
        <path
          fill="#E7E6E6"
          d="M0.2,22.8 L0.2,17 L22.2,17 L22.2,22.8 C22.2,28.9855892 17.2751322,34 11.2,34 C5.12486775,34 0.2,28.9855892 0.2,22.8 Z"
          transform="matrix(1 0 0 -1 0 51)"
        />
        <polygon fill="#43E0F0" points="3.2 32 11.2 26 19.2 32" />
        <polygon fill="#FFF" points="3.2 17 11.2 8 19.2 17" transform="matrix(1 0 0 -1 0 25)" />
      </g>
    </svg>
  );
}

ComingSoon.propTypes = { width: PropTypes.number, height: PropTypes.number };

ComingSoon.defaultProps = { width: 72, height: 72 };
