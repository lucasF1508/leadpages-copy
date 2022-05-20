import React from 'react';
import PropTypes from 'prop-types';
export default function Event({ width, height, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-18 -15.5 72 72"
      {...props}
    >
      <g fill="none" fillRule="evenodd" transform="translate(0 -.5)">
        <rect width="36" height="26" y="15.5" fill="#E7E6E6" />
        <rect
          width="11"
          height="11"
          x="12.278"
          y="22.985"
          fill="#603EFF"
          transform="rotate(-45 17.778 28.485)"
        />
        <rect width="36" height="10" y="5.5" fill="#C3C2C1" />
        <path
          fill="#E7E6E6"
          d="M6.5,8 C9.26142375,8 11.5,5.76142375 11.5,3 C11.5,0.238576251 9.26142375,-2 6.5,-2 L6.5,8 Z"
          transform="rotate(-90 9 3)"
        />
        <path
          fill="#E7E6E6"
          d="M24.5,8 C27.2614237,8 29.5,5.76142375 29.5,3 C29.5,0.238576251 27.2614237,-2 24.5,-2 L24.5,8 Z"
          transform="rotate(-90 27 3)"
        />
        <circle cx="9" cy="5.5" r="5" fill="#E7E6E6" />
        <circle cx="27" cy="5.5" r="5" fill="#E7E6E6" />
      </g>
    </svg>
  );
}

Event.propTypes = { width: PropTypes.number, height: PropTypes.number };

Event.defaultProps = { width: 72, height: 72 };
