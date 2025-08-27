import React from 'react'

const ColorMarkRender = ({
  children,
  markKey,
}: {
  children: React.ReactNode
  markKey?: string
}) => {
  let className = ''

  switch (markKey) {
    case 'textGradient':
      className =
        'bg-gradient-to-l from-purple-500 to-purple-300 text-transparent bg-clip-text inline-flex'
      break
    default:
      break
  }

  return <span className={className}>{children}</span>
}

export default ColorMarkRender
