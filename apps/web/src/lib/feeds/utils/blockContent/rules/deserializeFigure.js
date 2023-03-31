const urlParser = require('js-video-url-parser/lib/base')

export const deserializeFigure = {
  // Special case for iframe blocks
  deserialize(el, next, block) {
    if (!el) {
      return undefined
    }

    if (el.tagName?.toLowerCase() !== 'figure') {
      return undefined
    }

    const isNativeVideo = el.classList.contains('wp-block-video')

    const isEmbed = el.classList.contains('wp-block-embed')
    const isVideo = el.classList.contains('is-type-video')
    const isYoutube = el.classList.contains('is-provider-youtube')

    if (isNativeVideo) {
      return block({
        _type: 'embed',
        code: el.innerHTML,
      })
    }

    if (isEmbed && isVideo && isYoutube && el.textContent) {
      const videoData = urlParser.parse(el.textContent) || {}
      const { id } = videoData

      return (
        id &&
        block({
          _type: 'embed',
          code: `<iframe src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
          isResponsive: true,
          ratio: '16:9',
        })
      )
    }

    return undefined
  },
}
