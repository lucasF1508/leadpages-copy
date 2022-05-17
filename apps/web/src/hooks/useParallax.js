import React, { useRef, useCallback, useEffect, useState } from 'react'
import { useViewportScroll, useTransform, m } from 'framer-motion'
import throttle from 'lodash/throttle'
import useEventListener from '@hooks/useEventListener'

const ParallaxItem = ({
  className,
  children,
  style,
  config: initialConfig = {},
}) => {
  const ref = useRef()
  const { scrollY } = useViewportScroll()
  const tweens = {}
  const config = Array.isArray(initialConfig) ? initialConfig : [initialConfig]
  const defaults = {
    scrollPositionRange: [99999, 99999], // when viewport scroll matches these values, Obscenely large default before the window loads
    fromTo: ['0%', '50%'], // Animation range
    length: 1, // Affect duration based on the height of the target
    viewportOffset: 0.5, // Viewport offset.
    distance: false,
  }

  const [properties, setProperties] = useState(
    config.map((property) => ({
      ...defaults,
      ...property,
    }))
  )

  properties.forEach(({ prop, scrollPositionRange, fromTo }) => {
    tweens[prop] = useTransform(scrollY, scrollPositionRange, fromTo, {
      clamp: true,
    })
  })

  const getScrollPositionRange = useCallback(
    ({ length, viewportOffset }) => {
      const { top, height } = ref.current.getBoundingClientRect()
      const waypoint = window.innerHeight * viewportOffset
      const scrollStart = top - waypoint > 0 ? top - waypoint : 0
      const scrollEnd =
        scrollStart === 0 ? height * length : scrollStart + height * length

      return [scrollStart, scrollEnd]
    },
    [ref]
  )

  const updateProperties = () => {
    setProperties(
      [...properties].map((property) => ({
        ...property,
        scrollPositionRange:
          property.distance || getScrollPositionRange(property),
      }))
    )
  }

  useEffect(() => updateProperties(), [config])

  useEventListener(
    'resize', // event to listen to
    () => {
      throttle(() => updateProperties(), 500)
    }
  )

  return (
    <m.div
      className={className}
      ref={ref}
      style={{
        willChange: 'transform',
        ...style,
        ...tweens,
      }}
      transform={{
        ease: 'easeIn',
      }}
    >
      {children}
    </m.div>
  )
}

export default ParallaxItem
