import React from 'react';
import PropTypes from 'prop-types';
export default function FreeConsultation({ width, height, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-14 -11.5 72 72"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <rect width="38" height="22" fill="#E7E6E6" />
        <circle cx="8" cy="11" r="4" fill="#FFF" />
        <circle cx="19" cy="11" r="4" fill="#FFF" />
        <circle cx="30" cy="11" r="4" fill="#FFF" />
        <polygon fill="#C3C2C1" points="0 22 8 22 0 30" />
        <g transform="translate(21 26)">
          <rect width="23" height="15" fill="#4D7523" transform="matrix(-1 0 0 1 23 0)" />
          <polygon fill="#C3C2C1" points="15 15 23 15 15 23" transform="matrix(-1 0 0 1 38 0)" />
        </g>
      </g>
    </svg>
  );
}

FreeConsultation.propTypes = { width: PropTypes.number, height: PropTypes.number };

FreeConsultation.defaultProps = { width: 72, height: 72 };
