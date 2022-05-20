import React from 'react';
import PropTypes from 'prop-types';
export default function GenerateLeads({ width, height, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-10 -6 72 72"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(0 26)">
          <rect width="52" height="34" fill="#E7E6E6" />
          <polygon fill="#C3C2C1" points="0 0 52 0 26 22" />
        </g>
        <path
          fill="#43E0F0"
          d="M40,26 C40,18.2680135 33.7319865,12 26,12 C18.2680135,12 12,18.2680135 12,26 L40,26 Z"
        />
        <circle cx="26" cy="6" r="6" fill="#C3C2C1" />
      </g>
    </svg>
  );
}

GenerateLeads.propTypes = { width: PropTypes.number, height: PropTypes.number };

GenerateLeads.defaultProps = { width: 72, height: 72 };
