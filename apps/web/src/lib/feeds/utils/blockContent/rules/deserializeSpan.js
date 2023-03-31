/* eslint-disable */
export const deserializeSpan = {
  // Special case for paragraphs
  deserialize(el, next, block) {
    if (!el) {
      return undefined
    }

    if (el.tagName?.toLowerCase() !== 'span') {
      return undefined
    }

    if (el.classList.contains('has-inline-color')) {
      let color = ''

      if (el.style.color === 'rgb(96, 62, 255)') {
        color = 'textColorHighlight'
      } else if (el.style.color === 'rgb(52, 175, 187)') {
        color = 'textColorHighlightAlt'
      }

      return {
        _type: 'span',
        marks: [color],
        text: el.textContent,
      }
    }
  },
}
