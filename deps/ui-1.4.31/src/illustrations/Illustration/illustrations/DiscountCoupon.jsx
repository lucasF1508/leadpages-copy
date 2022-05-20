import React from 'react';
import PropTypes from 'prop-types';
export default function DiscountCoupon({ width, height, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-18 -24.5 72 72"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill="#E7E6E6"
          d="M36,7 C33.2385763,7 31,9.23857625 31,12 C31,14.7614237 33.2385763,17 36,17 L36,23 L0,23 L0,17 C2.76142375,17 5,14.7614237 5,12 C5,9.23857625 2.76142375,7 0,7 L0,0 L36,0 L36,7 Z"
        />
        <circle cx="18" cy="12" r="5" fill="#F65B1C" />
      </g>
    </svg>
  );
}

DiscountCoupon.propTypes = { width: PropTypes.number, height: PropTypes.number };

DiscountCoupon.defaultProps = { width: 72, height: 72 };
