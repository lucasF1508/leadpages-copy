import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Provider, Root, Trigger, Content } from '@radix-ui/react-tooltip'
import { styled, keyframes } from '@design'

const slideIn = keyframes({
  '0%': { opacity: 0, transform: 'translate3d(0, -$space$1, 0)' },
  '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
})

const slideOut = keyframes({
  '0%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  '100%': { opacity: 0, transform: 'translate3d(0, -$space$1, 0)' },
})

const $TooltipContent = styled(Content, {
  width: 220,
  backgroundColor: '$white',
  boxShadow: '$m',
  my: '$2',
  padding: '1.5rem',
  fontSize: 12,
  lineHeight: '18px',
  color: '$grey10',
  animation: `${slideIn} 200ms ease-out`,
})

const $TooltipTrigger = styled(Trigger, {
  [`&[data-state="closed"] + div > ${$TooltipContent}`]: {
    animation: `${slideOut} 300ms ease-out`,
  },
})

const TooltipComponent = ({
  children,
  side = 'bottom',
  align = 'start',
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const handleOpenChange = (open) => {
    const delay = open ? 0 : 300

    setTimeout(() => {
      setIsMounted(open)
    }, delay)

    setIsOpen(open)
  }

  return (
    <Provider>
      <Root open={isOpen} delayDuration={0} onOpenChange={handleOpenChange}>
        <$TooltipTrigger>{title}</$TooltipTrigger>
        <$TooltipContent side={side} align={align} forceMount={isMounted}>
          {children}
        </$TooltipContent>
      </Root>
    </Provider>
  )
}

TooltipComponent.defaultProps = {
  placement: 'bottom-start',
}

TooltipComponent.propTypes = {
  placement: PropTypes.string,
}

export default TooltipComponent
