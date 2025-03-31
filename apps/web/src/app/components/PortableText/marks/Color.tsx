import React from 'react'

const ColorMarkRender = ({children, markKey}: {
  children: React.ReactNode
  markKey?: string
}) => {
  let className = ''


  switch (markKey) {
    case 'textGradient':
      className = 'bg-gradient-dark-purple text-transparent bg-clip-text'
      break
    case 'textColorHighlight': // TODO Expand during design rollout
    case 'textColorHighlightAlt':
    case 'textColorAlt':
    default:
      break
  }

  return <span className={className}>{children}</span>
}

export default ColorMarkRender
