import React, { useEffect, useRef } from 'react'

function useEventListener(eventName, callback, elementSelector = 'window') {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const element =
      elementSelector === 'window'
        ? window
        : document.addQuerySelector(elementSelector)
    const eventListener = event => savedCallback.current(event)

    element.addEventListener(eventName, eventListener)

    return () => {
      return element.removeEventListener(eventName, eventListener)
    }
  }, [eventName])
}

export default useEventListener
