import React, { useState } from 'react'
import { styled, keyframes } from '@design'
import * as Primitives from '@radix-ui/react-popover'
import { FiHelpCircle as PopoverIcon } from '@react-icons/all-files/fi/FiHelpCircle'
import { FiX as PopoverCloseIcon } from '@react-icons/all-files/fi/FiX'

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-0.25rem)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const scaleOut = keyframes({
  '0%': { opacity: 1, transform: 'translateY(0)' },
  '100%': { opacity: 0, transform: 'translateY(-0.25rem)' },
})

const $Popover = styled(Primitives.Root, {})

const $PopoverTrigger = styled(Primitives.Trigger, {
  svg: {
    w: '$space$4',
    h: '$space$4',
    stroke: '$white',
  },
})

const $PopoverArrow = styled(Primitives.Arrow, {
  fill: '$white',
  w: '1.125rem',
  h: '0.625rem',
})

const $PopoverContent = styled(Primitives.Content, {
  bs: '$m',
  p: '$3',
  mw: '$cols3',
  bc: '$white',
  br: '$m',
  transformOrigin: 'var(--radix-popover-content-transform-origin)',

  '&[data-state=open]': {
    animation: `${scaleIn} 300ms ease-out`,
  },

  '&[data-state=closed]': {
    animation: `${scaleOut} 150ms ease-out`,
  },
})

const $PopoverClose = styled(Primitives.Close, {
  position: 'absolute',
  d: 'inline-flex',
  ai: 'center',
  jc: 'center',
  h: '$space$3',
  w: '$space$3',
  top: '$1',
  right: '$1',
  br: '$round',

  svg: {
    h: '$space$2',
    w: '$space$2',
  },

  '&:hover': {
    bc: '$background',
  },
})

const Popover = ({ content, hover = true }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHoverToggle = () => {
    setIsHovered(!isHovered)
  }

  return (
    <$Popover open={hover ? isHovered : undefined}>
      <$PopoverTrigger
        onMouseEnter={hover && handleHoverToggle}
        onMouseLeave={hover && handleHoverToggle}
      >
        <PopoverIcon />
      </$PopoverTrigger>
      <$PopoverContent>
        <$PopoverArrow offset={8} />
        {!hover && (
          <$PopoverClose>
            <PopoverCloseIcon />
          </$PopoverClose>
        )}
        {content}
      </$PopoverContent>
    </$Popover>
  )
}

export default Popover
