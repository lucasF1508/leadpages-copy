'use client'

import { useCallback, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import isNumber from 'lodash/isNumber'
import useIsMount from '@hooks/useIsMount'

export interface useWaypointProps {
  bottom?: number | string
  ignoreInitial?: boolean
  onEnter?: (params: WaypointEventParams) => void
  onLeave?: (params: WaypointEventParams) => void
  onMount?: (params: WaypointEventParams) => void
  threshold?: number
  top?: number | string
}
interface WaypointEventParams {
  entry?: IntersectionObserverEntry
  height?: number
  vertical?: 'bottom' | 'top'
  width?: number
  x?: number
  y?: number
}

const useWaypoint = ({
  bottom = 0,
  ignoreInitial: orgIgnoreInitial = false,
  onEnter = () => undefined,
  onLeave = () => undefined,
  onMount = () => undefined,
  threshold = 0,
  top = 0,
}: useWaypointProps = {}) => {
  const [rootTop, rootBottom] = [top, bottom].map((num) =>
    isNumber(num) ? `${num * -100}%` : `-${num}`
  )
  const ref = useRef<HTMLDivElement | null>(null)
  const position = useRef({})
  const isMount = useIsMount()
  const ignoreInitial = useRef(orgIgnoreInitial)

  const [inViewRef, inView, entry] = useInView({
    rootMargin: `${rootTop} 0px ${rootBottom}`,
    threshold,
  })

  const setWaypointRef = useCallback(
    (node: HTMLDivElement) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node)
    },
    [inViewRef]
  )

  const triggerWaypoint = ({
    entry,
    inView: isInView,
    vertical,
  }: {
    entry?: IntersectionObserverEntry
    inView: boolean
    vertical: 'bottom' | 'top'
  }) => {
    const params = {
      ...(position?.current || {}),
      entry,
      vertical,
    }

    if (isInView) {
      onEnter(params)
    } else {
      onLeave(params)
    }
  }

  const setPosition = (): WaypointEventParams => {
    if (!ref?.current) return {}
    const loadPosition = ref.current.getBoundingClientRect()
    position.current = {
      height: loadPosition.height,
      width: loadPosition.width,
      x: loadPosition.x + window.pageXOffset,
      y: loadPosition.y + window.pageYOffset,
    }
    return position.current
  }

  useEffect(() => {
    if (!ref?.current) return undefined

    const handler = () => {
      const currentPosition = setPosition()

      if (isMount) {
        onMount({ ...currentPosition, entry })
      }
    }

    handler()
    const RO = new ResizeObserver(() => handler())
    RO.observe(document.body)

    return () => {
      RO.disconnect()
    }
  }, [ref?.current])

  useEffect(() => {
    if (!entry) return

    if (ignoreInitial.current) {
      ignoreInitial.current = false
      return
    }

    triggerWaypoint({
      entry,
      inView,
      vertical:
        entry?.boundingClientRect?.top < window.innerHeight / 2
          ? 'top'
          : 'bottom',
    })
  }, [inView, entry])

  return {
    setWaypointRef,
  }
}
export default useWaypoint
