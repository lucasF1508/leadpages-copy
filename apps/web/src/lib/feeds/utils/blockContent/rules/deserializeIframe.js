export const deserializeIframe = {
  // Special case for iframe blocks
  deserialize(el, next, block) {
    if (!el) {
      return undefined
    }
    if (el.constructor.name !== 'HTMLIFrameElement') {
      return undefined
    }

    return block({
      _type: 'embed',
      code: `${el.outerHTML}`,
    })
  },
}
