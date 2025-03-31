// Source: https://www.joshwcomeau.com/snippets/react-hooks/use-interval/
import { useEffect, useRef } from 'react'

const useInterval = (callback: () => void, delay: number | undefined) => {
  const intervalRef = useRef<null | number>(null)
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => savedCallback.current()

    const startInterval = () => {
      if (typeof delay === 'number') {
        intervalRef.current = window.setInterval(tick, delay)
      }
    }

    const stopInterval = () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
      }
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopInterval()
      } else {
        startInterval()
      }
    }

    if (typeof delay === 'number') {
      startInterval()
      document.addEventListener('visibilitychange', handleVisibilityChange)

      return () => {
        stopInterval()
        document.removeEventListener('visibilitychange', handleVisibilityChange)
      }
    }

    return () => {}
  }, [delay])

  return intervalRef
}

export default useInterval
