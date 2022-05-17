import React, { useRef, useCallback, useEffect } from 'react'
import isNumber from 'lodash/isNumber'
import { useInView } from 'react-intersection-observer'

const useWaypoint = ({
  top = 0,
  bottom = 0,
  threshold = 1,
  onEnter = () => {},
  onLeave = () => {},
  debug,
  ignoreInitial: orgIgnoreInitial = false,
} = {}) => {
  const [rootTop, rootBottom] = [top, bottom].map((num) => {
    return isNumber(num) ? `${num * -100}%` : `-${num}`
  })
  const ref = useRef()
  const ignoreInitial = useRef(orgIgnoreInitial)

  const [inViewRef, inView, entry] = useInView({
    rootMargin: `${rootTop} 0px ${rootBottom}`,
    threshold,
  })

  const getWindowCenter = () => window.innerHeight / 2

  const setWaypointRef = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node)
    },
    [inViewRef]
  )

  const triggerWaypoint = ({ vertical, inView }) => {
    if (inView) {
      onEnter(vertical)
    } else {
      onLeave(vertical)
    }
  }

  useEffect(() => {
    if (!entry) return
    let vertical = ''

    if (ignoreInitial.current) {
      ignoreInitial.current = false
      return
    }

    triggerWaypoint({
      vertical:
        entry.boundingClientRect.top < getWindowCenter() ? 'top' : 'bottom',
      inView,
    })
  }, [inView, entry])

  return {
    setWaypointRef,
  }
}
export default useWaypoint
