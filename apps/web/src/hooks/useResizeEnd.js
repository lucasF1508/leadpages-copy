import useEventListener from '@hooks/useEventListener'

export const useResizeEnd = () => {
  if (typeof window === 'undefined') return
  let resizeTimer

  const emitEvent = () => {
    window.dispatchEvent(
      new CustomEvent('resizeEnd', {
        detail: {
          resized: true,
        },
      })
    )
  }

  const resizeInterval = () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(function () {
      emitEvent()
    }, 150)
  }

  useEventListener('resize', () => {
    resizeInterval()
  })

  return {
    resizeInterval,
  }
}

export default useResizeEnd
