import React from 'react'

const ColorMarkRender = ({children, markKey}: {
  children: React.ReactNode
  markKey?: string
}) => {
  let className = ''

  switch (markKey) {
    case 'textGradient':
      className = 'bg-gradient-purple text-transparent bg-clip-text inline-flex'
      break
    default:
      break
  }

  return <span className={className}>{children}</span>
}

export default ColorMarkRender
