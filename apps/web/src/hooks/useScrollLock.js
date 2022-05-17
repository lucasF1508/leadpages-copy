const getBrowserScrollbarWidth = () => {
  if (typeof window === 'undefined') return null

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

const scrollLock = (lock) => {
  if (!document?.body) return

  document.body.parentElement.style.overflow = lock ? 'hidden' : null
  document.body.parentElement.style.paddingRight = lock
    ? getBrowserScrollbarWidth()
    : null

  if (lock) {
    document.body.classList.add('u-lock')
  } else {
    document.body.classList.remove('u-lock')
  }
}

export default scrollLock
export { getBrowserScrollbarWidth }
