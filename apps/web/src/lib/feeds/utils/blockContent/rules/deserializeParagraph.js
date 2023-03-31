/* eslint-disable */
export const deserializeParagraph = {
  // Special case for paragraphs
  deserialize(el, next, block) {
    if (!el) {
      return undefined
    }

    if (el.tagName?.toLowerCase() !== 'p') {
      return undefined
    }

    if (el.classList.value === 'has-text-align-center') {
      return block({
        _type: 'block',
        children: [
          {
            _type: 'span',
            marks: ['strong', 'align'],
            text: el.textContent,
          },
        ],
        markDefs: [],
        style: 'normal',
      })
    }
  },
}
