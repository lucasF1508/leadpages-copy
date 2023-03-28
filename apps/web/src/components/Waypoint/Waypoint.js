import React from 'react'
import { styled } from '@design'
import useWaypoint from '@hooks/useWaypoint'

export const $Waypoint = styled('div', {
  position: 'relative',
  z: '$cover',
  d: 'block',
  w: '100%',
  h: '1px',
  bc: 'transparent',

  variants: {
    debug: {
      true: {
        bc: 'red',
      },
    },
  },

  '&::after': {
    content: `''`,
    d: 'block',
    mb: '-1px',
    w: '100%',
  },
})

const Waypoint = ({
  className,
  debug,
  top,
  bottom,
  threshold,
  onEnter,
  onLeave,
  ignoreInitial,
  css,
}) => {
  const { setWaypointRef } = useWaypoint({
    top,
    bottom,
    threshold,
    onEnter,
    onLeave,
    ignoreInitial,
    debug,
  })

  return (
    <$Waypoint
      css={css}
      ref={setWaypointRef}
      className={className}
      debug={debug}
    />
  )
}

Waypoint.displayName = 'Waypoint'

export default Waypoint
