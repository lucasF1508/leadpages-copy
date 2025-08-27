'use client'

import type { useWaypointProps } from '@/hooks/useWaypoint'
import React from 'react'
import clsx from 'clsx'
import useWaypoint from '@/hooks/useWaypoint'

interface WaypointProps extends useWaypointProps {
  children?: React.ReactNode
  className?: string
  debug?: boolean
  id?: string
}

const Waypoint = ({
  children,
  className,
  debug,
  id,
  ...props
}: WaypointProps) => {
  const { setWaypointRef } = useWaypoint(props)
  const hasChildren = React.Children.count(children) > 0

  return (
    <div
      className={clsx('z-content relative w-full block', className)}
      id={id}
      ref={setWaypointRef}
    >
      {debug && <span className="absolute left-0 top-0 w-full h-px bg-error" />}
      {children}
      {debug && hasChildren && (
        <span className="absolute left-0 bottom-0 w-full h-px bg-error" />
      )}
    </div>
  )
}

export default Waypoint
