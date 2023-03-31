export const deserializeCodeAndPre = {
  // Special case for code blocks (wrapped in pre and code tag)
  deserialize(el, next, block) {
    if (!el) {
      return undefined
    }
    if (el.tagName.toLowerCase() !== 'pre') {
      return undefined
    }
    const code = el.children[0]

    const childNodes =
      code && code.tagName.toLowerCase() === 'code'
        ? code.childNodes
        : el.childNodes

    let text = ''

    childNodes.forEach((node) => {
      text += node.textContent
    })

    /**
     * use `block()` to add it to the
     * root array, instead of as
     * children of a block
     *  */
    return block({
      _type: 'code',
      language: el.dataset.language,
      text,
    })
  },
}
