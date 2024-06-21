export const checkOverflow = (inputRef) => {
  const input = inputRef.current
  const span = document.createElement('span')
  const computedStyle = getComputedStyle(input)

  const addPixels = (value, add) => {
    const numericValue = parseInt(value, 10) + add
    return `${numericValue}px`
  }

  span.style.visibility = 'hidden'
  span.style.whiteSpace = 'pre'
  span.style.paddingLeft = addPixels(computedStyle.paddingLeft, 3)
  span.style.paddingRight = addPixels(computedStyle.paddingRight, 3)
  span.style.paddingTop = addPixels(computedStyle.paddingTop, 3)
  span.style.paddingBottom = addPixels(computedStyle.paddingBottom, 3)
  span.style.font = computedStyle.font
  document.body.appendChild(span)

  span.textContent = input.value
  const isTextOverflowing = span.offsetWidth > input.offsetWidth

  document.body.removeChild(span)

  return isTextOverflowing
}
