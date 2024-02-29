import * as React from 'react'

const SubmitLoadSpinner = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <path
      strokeWidth={2}
      d="M13 1c6.627 0 12 5.373 12 12s-5.373 12-12 12S1 19.627 1 13c0-2.294.644-4.438 1.76-6.26"
    />
  </svg>
)

export default SubmitLoadSpinner
