import React from 'react';
import PropTypes from 'prop-types';
export default function WebinarEvent({ width, height, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-17 -20 72 72"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <rect width="38" height="26" fill="#E7E6E6" />
        <path
          fill="#FFF"
          d="M27,26 C27,21.581722 23.418278,18 19,18 C14.581722,18 11,21.581722 11,26 L27,26 Z"
        />
        <circle cx="19" cy="11" r="4" fill="#DFAE78" />
        <polygon fill="#C3C2C1" points="11 32 19 26 27 32" />
      </g>
    </svg>
  );
}

WebinarEvent.propTypes = { width: PropTypes.number, height: PropTypes.number };

WebinarEvent.defaultProps = { width: 72, height: 72 };
