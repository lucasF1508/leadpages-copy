const getBrowserScrollbarWidth = () => {
  if (typeof window === 'undefined') return undefined

  const cssVariable = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--scrollbar-width')

  if (cssVariable) return cssVariable

  const scrollDiv = document.createElement('div')
  scrollDiv.style.cssText =
    'width: 100px;height: 100px;overflow: scroll;position: absolute;top: -9999px;'
  document.body.appendChild(scrollDiv)
  const scrollbarWidth = `${scrollDiv.offsetWidth - scrollDiv.clientWidth}px`
  document.body.removeChild(scrollDiv)

  document.documentElement.style.setProperty(
    '--scrollbar-width',
    scrollbarWidth
  )
  return scrollbarWidth
}

const scrollLock = (lock: boolean): undefined => {
  if (!document?.body) return undefined

  {/* @ts-expect-error Direct port from R&P: Perhaps a TS version issue? */}
  document.body.parentElement.style.overflow = lock ? 'hidden' : null
  {/* @ts-expect-error Direct port from R&P: Perhaps a TS version issue? */}
  document.body.parentElement.style.paddingRight = lock
    ? getBrowserScrollbarWidth()
    : null

  if (lock) {
    document.body.classList.add('u-lock') // TODO: Verify that this works
  } else {
    document.body.classList.remove('u-lock')
  }

  return undefined
}

export default scrollLock
export { getBrowserScrollbarWidth }
