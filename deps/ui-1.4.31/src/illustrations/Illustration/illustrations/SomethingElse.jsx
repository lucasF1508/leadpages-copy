import React from 'react';
import PropTypes from 'prop-types';
export default function SomethingElse({ width, height, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="-22 -6 72 72"
      {...props}
    >
      <g fill="none" fillRule="evenodd" transform="translate(0 -.02)">
        <path
          fill="#C3C2C1"
          d="M28,60.0208153 C28,52.2888288 21.7319865,46.0208153 14,46.0208153 C6.2680135,46.0208153 0,52.2888288 0,60.0208153 L28,60.0208153 Z"
          transform="rotate(-180 14 53.02)"
        />
        <path
          fill="#E7E6E6"
          d="M4.10050506,4.12383227 C9.56784515,-1.34685705 18.4321549,-1.34685705 23.8994949,4.12383227 C29.366835,9.59452159 29.366835,18.4642615 23.8994949,23.9349508 L14,34.0208153 L4.10050506,23.9349508 C-1.36683502,18.4642615 -1.36683502,9.59452159 4.10050506,4.12383227 Z"
        />
        <circle cx="14" cy="40.021" r="6" fill="#E28F44" />
      </g>
    </svg>
  );
}

SomethingElse.propTypes = { width: PropTypes.number, height: PropTypes.number };

SomethingElse.defaultProps = { width: 72, height: 72 };
