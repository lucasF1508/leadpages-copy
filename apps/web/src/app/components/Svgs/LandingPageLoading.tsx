import React from 'react'
import clsx from 'clsx'

const LandingPageLoading = ({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) => (
  <svg
    className={clsx(className)}
    preserveAspectRatio="xMidYMid meet"
    style={style}
    viewBox="0 0 100 63"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="nonzero">
      <path className="fill-light" d="M0 0h100v63H0z" />
      <path className="fill-dark/10" d="M11 16h80v36H11z" />
      <path className="fill-light" d="M18 31h65v1H18zM30 35h41v1H30z" />
      <path className="fill-dark/20" d="M40 42h20v4H40z" />
      <path className="fill-light" d="M23 24h54v3H23z" />
      <path className="fill-dark/10" d="M0 0h100v6H0z" />
      <circle className="fill-dark/20" cx="7" cy="3" r="1" />
      <circle className="fill-dark/20" cx="3" cy="3" r="1" />
      <circle className="fill-dark/20" cx="11" cy="3" r="1" />
    </g>
  </svg>
)

export default LandingPageLoading
