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

const Waypoint = ({ className, debug, waypointProps = {} }) => {
  const { setWaypointRef } = useWaypoint({
    ...waypointProps,
    debug,
  })

  return <$Waypoint ref={setWaypointRef} className={className} debug={debug} />
}

Waypoint.displayName = 'Waypoint'

export default Waypoint
