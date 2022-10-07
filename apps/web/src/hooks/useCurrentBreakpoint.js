import { useEffect, useState } from 'react'
import useEventListener from '@hooks/useEventListener'
import getCSSvar from '@utils/getCSSvar'

const useCurrentBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(false)

  const getCurrentBreakpoint = () => {
    const cssBreakpoint = getCSSvar('--current-breakpoint')
    if (cssBreakpoint !== breakpoint) {
      setBreakpoint(getCSSvar('--current-breakpoint'))
    }
  }

  useEventListener('resizeEnd', () => getCurrentBreakpoint())

  useEffect(() => {
    getCurrentBreakpoint()
  }, [])

  return breakpoint
}

export default useCurrentBreakpoint
