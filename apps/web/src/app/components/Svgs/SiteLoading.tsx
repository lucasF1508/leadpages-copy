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
    viewBox="0 0 100 111"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none">
      <path className="fill-light" d="M0 0h100v111H0z" />
      <path
        className="fill-dark/20"
        d="M0 0h100v6H0zm0 28h100v36H0zm10 47h25v19H10zm29 0h23v19H39z"
      />
      <path className="fill-dark/20" d="M37 22h6v1h-6z" />
      <path
        className="fill-dark/20"
        d="M10 97h14v2H10zm29 0h14v2H39zm-29 4h25v1H10zm29 0h23v1H39zm-29 3h25v1H10zm29 0h23v1H39zm27-29h24v19H66zm0 22h14v2H66zm0 4h25v1H66zm0 3h25v1H66z"
      />
      <path className="fill-light" d="M18 43h65v1H18zm12 4h41v1H30z" />
      <path className="fill-dark/20" d="M10 71h16v1H10z" />
      <path
        className="fill-dark/20"
        d="M47 22h6v1h-6zm10 0h6v1h-6zM40 54h20v4H40z"
      />
      <path className="fill-light" d="M23 36h54v3H23z" />
      <circle className="fill-dark/20" cx="7" cy="3" r="1" />
      <circle className="fill-dark/20" cx="3" cy="3" r="1" />
      <circle className="fill-dark/20" cx="11" cy="3" r="1" />
      <circle className="fill-dark/20" cx="50" cy="15" r="4" />
    </g>
  </svg>
)

export default LandingPageLoading
