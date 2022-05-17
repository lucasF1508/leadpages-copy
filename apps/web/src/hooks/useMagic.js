import React, { useEffect, useState } from 'react'
import { m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { styled } from '@design'

const $MagicItem = styled('div', {
  [`
    &,
    & > div
  `]: {
    w: '100%',
  },
})

const defaultVariants = {
  fadeUp: {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  },
  opacity: {
    initial: {
      opacity: 0.1,
    },
    animate: {
      opacity: 1,
    },
  },
}

export const MagicItem = ({
  type = 'opacity',
  duration = 0.2,
  delay = 0,
  ease = 'easeOut',
  threshold = [0.2],
  variants: orgVariants,
  children,
  ...props
}) => {
  const variants = orgVariants || defaultVariants[type]
  const [animation, setAnimation] = useState('initial')
  const transition = {
    duration,
    delay,
    ease,
  }
  const [ref, inView, entry] = useInView({
    threshold,
  })

  useEffect(() => {
    if (!entry) return

    // Scrolled InView
    if (animation === 'initial' && inView) {
      setAnimation('animate')
    }

    // Scrolled up out of view
    if (!inView && entry.boundingClientRect.top > 0) {
      setAnimation('initial')
    }
  }, [inView])

  return (
    <$MagicItem ref={ref} {...props}>
      <m.div
        initial="initial"
        animate={animation}
        variants={variants}
        transition={transition}
      >
        {children}
      </m.div>
    </$MagicItem>
  )
}

export default MagicItem
