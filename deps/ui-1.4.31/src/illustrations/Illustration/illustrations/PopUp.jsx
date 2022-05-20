import React from 'react';
import PropTypes from 'prop-types';
export default function PopUp({ width, height, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-12 -11 72 72"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <rect width="48" height="38" fill="#E7E6E6" />
        <rect width="32" height="22" x="8" y="8" fill="#D1C6F9" />
        <polygon fill="#878584" points="38 44 24 50 10 44 24 38" />
      </g>
    </svg>
  );
}

PopUp.propTypes = { width: PropTypes.number, height: PropTypes.number };

PopUp.defaultProps = { width: 72, height: 72 };
