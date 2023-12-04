import { useEffect, useState } from 'react'
import { useScroll, useMotionValue } from 'framer-motion'

const useStickyHeader = ({ offsetTop = 200 } = {}) => {
  const [isSticky, setIsSticky] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const { scrollY } = useScroll()
  const prevScrollY = useMotionValue(0)
  const hasSticky = useMotionValue(isSticky)
  const direction = useMotionValue('')
  const stickyMotionProps = {
    animate: {
      y: isSticky && showHeader ? '100%' : 0,
    },
    transition: {
      duration: 0.2,
      ease: 'linear',
    },
  }

  const resetStickyHeader = () => {
    setIsSticky(false)
    direction.set('up')
  }

  const isScrollingUp = (scrollValue) =>
    prevScrollY.get() > scrollValue && direction.get() !== 'up'

  const isScrollingDown = (scrollValue) =>
    prevScrollY.get() < scrollValue && direction.get() !== 'down'

  const toggleDirection = (scrollValue) => {
    if (isScrollingUp(scrollValue)) {
      direction.set('up')
    } else if (isScrollingDown(scrollValue)) {
      direction.set('down')
    }
  }

  useEffect(() => {
    const unsubscribeScrollY = scrollY.onChange((scrollValue) => {
      if (scrollValue < offsetTop) {
        resetStickyHeader()
      } else {
        if (!hasSticky.get()) {
          setIsSticky(true)
        }

        toggleDirection(scrollValue)
      }

      prevScrollY.set(scrollValue)
    })

    const unsubscribeDirection = direction.onChange((directionValue) =>
      setShowHeader(directionValue === 'up')
    )

    return () => {
      unsubscribeScrollY()
      unsubscribeDirection()
    }
  }, [offsetTop])

  useEffect(() => {
    hasSticky.set(isSticky)
  }, [isSticky])

  return {
    isSticky,
    setIsSticky,
    showHeader,
    setShowHeader,
    stickyMotionProps,
  }
}
export default useStickyHeader
