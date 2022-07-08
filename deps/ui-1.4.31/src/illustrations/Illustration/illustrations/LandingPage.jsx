import React from 'react';
import PropTypes from 'prop-types';
export default function LandingPage({ width, height, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-12 -6 72 72"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <rect width="48" height="38" fill="#E7E6E6" />
        <rect width="26" height="8" x="11" y="19" fill="#F65B1C" rx="4" />
        <polygon fill="#C3C2C1" points="35.157 48.843 24 60 12.843 48.843 24 37.686" />
      </g>
    </svg>
  );
}

LandingPage.propTypes = { width: PropTypes.number, height: PropTypes.number };

LandingPage.defaultProps = { width: 72, height: 72 };
