export const deserializeImage = {
  deserialize(el, next, block) {
    if (el.tagName.toLowerCase() !== 'img') {
      return undefined
    }

    const img = el
    const caption = Array.from(img.parentNode.children).find(
      (child) => child.tagName.toLowerCase() === 'figcaption'
    )

    const src = img?.getAttribute('src')
    const alt = img?.getAttribute('alt')?.toLowerCase()?.includes('http')
      ? undefined
      : img.getAttribute('alt')
    const isUrl = src?.includes('http')

    if (
      src?.includes('https://fast.wistia.com/embed/medias/') &&
      src?.includes('/swatch')
    ) {
      return undefined
    }

    if (img && src && isUrl) {
      return block({
        _type: 'media',
        condition: 'image',
        image: {
          _type: 'image',
          _sanityAsset: `image@${img.getAttribute('src').trim()}`,
          altText: alt || undefined,
          title: img.getAttribute('title'),
          description: img.getAttribute('description'),
        },
        caption: caption ? caption?.textContent : undefined,
      })
    }

    return undefined
  },
}
