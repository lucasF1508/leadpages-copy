export const deserializeButton = {
  // Special case for buttons
  deserialize(el, next, block) {
    if (!el) {
      return undefined
    }

    if (el.constructor.name !== 'HTMLButtonElement') {
      return undefined
    }

    return block({
      _type: 'embed',
      code: `${el.outerHTML}`,
      isResponsive: false,
    })
  },
}
