import type { ClassValue } from 'clsx'
import type { AnimationControls, MotionProps } from 'motion/react'
import type { ComponentPropsWithoutRef } from 'react'
import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { motion } from 'motion/react'

interface AnimateChangeInHeightProps
  extends Omit<MotionProps, 'animate' | 'children'>,
    Omit<
      ComponentPropsWithoutRef<'div'>,
      | 'className'
      | 'onAnimationStart'
      | 'onDrag'
      | 'onDragEnd'
      | 'onDragStart'
      | 'style'
    > {
  animate?: AnimationControls
  children: React.ReactNode
  className?: ClassValue
}

const AnimateChangeInHeight: React.FC<AnimateChangeInHeightProps> = ({
  animate,
  children,
  className,
  style,
  ...motionProps
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState<'auto' | number>('auto')

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        if (!entries) return
        const entry = entries[0]
        const observedHeight = entry?.contentRect.height
        setHeight(observedHeight || 'auto')
      })

      resizeObserver.observe(containerRef.current)

      return () => {
        // Cleanup the observer when the component is unmounted
        resizeObserver.disconnect()
      }
    }
  }, [])

  return (
    <motion.div
      className={clsx(className)}
      transition={{ duration: 0.1 }}
      {...motionProps}
      animate={{ ...animate, height }}
      style={{ ...style, height }}
    >
      <div ref={containerRef}>{children}</div>
    </motion.div>
  )
}

export default AnimateChangeInHeight
