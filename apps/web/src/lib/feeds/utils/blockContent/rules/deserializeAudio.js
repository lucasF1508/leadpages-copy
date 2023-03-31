export const deserializeAudio = {
  // Special case for paragraphs
  deserialize(el, next, block) {
    if (!el) {
      return undefined
    }

    if (el.tagName?.toLowerCase() === 'audio') {
      const src = el?.getAttribute('src')

      return (
        src &&
        block({
          _type: 'audio',
          src,
        })
      )
    }

    return undefined
  },
}
