import { useEffect, useRef } from 'react'

function useEventListener<T extends Event>(
  eventName: keyof WindowEventMap | keyof HTMLElementEventMap,
  callback: (event: T) => void,
  elementSelector: 'window' | string = 'window'
) {
  // Correctly type useRef to store a callback function for T events
  const savedCallback = useRef<((event: T) => void) | null>(null)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const element: Window | Element | HTMLElement | null =
      elementSelector === 'window'
        ? window
        : document.querySelector(elementSelector)

    if (!element) return

    const eventListener = (event: Event) => {
      if (savedCallback.current) {
        savedCallback.current(event as T)
      }
    }

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, elementSelector])
}

export default useEventListener
