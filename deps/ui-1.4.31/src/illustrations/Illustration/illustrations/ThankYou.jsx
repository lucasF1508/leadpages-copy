import React from 'react';
import PropTypes from 'prop-types';
export default function ThankYou({ width, height, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="-18.5 -15 72 72"
      {...props}
    >
      <defs>
        <path
          id="thank-you-a"
          d="M30.3743874,5.54518267 C37.2085661,12.3391247 37.208509,23.3543407 30.3743874,30.1482259 L18.0000107,42.4497475 L5.62563404,30.1482259 C-1.20854468,23.3542839 -1.20854468,12.3391247 5.62563404,5.54518267 C12.4597557,-1.24870254 23.5402086,-1.24875932 30.3743874,5.54518267 Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(-.5 -.45)">
        <mask id="thank-you-b" fill="#fff">
          <use xlinkHref="#thank-you-a" />
        </mask>
        <use fill="#E7E6E6" xlinkHref="#thank-you-a" />
        <rect
          width="11"
          height="11"
          x="12.778"
          y="12.728"
          fill="#4D7523"
          mask="url(#thank-you-b)"
          transform="rotate(-45 18.278 18.228)"
        />
      </g>
    </svg>
  );
}

ThankYou.propTypes = { width: PropTypes.number, height: PropTypes.number };

ThankYou.defaultProps = { width: 72, height: 72 };
