import { useEffect, useState } from 'react'
import { useMotionValue, useScroll } from 'motion/react'
import { useShallow } from 'zustand/react/shallow'
import { navStore } from '@/stores/navStore'

const useStickyHeader = ({ offsetTop = 200 } = {}) => {
  const { isSticky, setIsSticky } = navStore(
    useShallow((state) => ({ 
      isSticky: state.isSticky,
      setIsSticky: state.setIsSticky,
    })),
  )

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

  const isScrollingUp = (scrollValue: number) =>
    prevScrollY.get() > scrollValue && direction.get() !== 'up'

  const isScrollingDown = (scrollValue: number) =>
    prevScrollY.get() < scrollValue && direction.get() !== 'down'

  const toggleDirection = (scrollValue: number) => {
    if (isScrollingUp(scrollValue)) {
      direction.set('up')
    } else if (isScrollingDown(scrollValue)) {
      direction.set('down')
    }
  }

  useEffect(() => {
    const unsubscribeScrollY = scrollY.on('change', (scrollValue) => {
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

    const unsubscribeDirection = direction.on('change', (directionValue) =>
      setShowHeader(directionValue === 'up')
    )

    return () => {
      unsubscribeScrollY()
      unsubscribeDirection()
    }
  }, [])

  useEffect(() => {
    hasSticky.set(isSticky)
  }, [isSticky])

  return {
    isSticky,
    setIsSticky,
    setShowHeader,
    showHeader,
    stickyMotionProps,
  }
}
export default useStickyHeader
