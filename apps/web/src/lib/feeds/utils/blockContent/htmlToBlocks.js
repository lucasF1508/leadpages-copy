/* eslint-disable */
const blockTools = require('@sanity/block-tools').default
const sanitizeHTML = require('sanitize-html')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const blockContentSchema = require('./blockContentSchema')
const blockContentType = blockContentSchema.get('blockContent')

const rules = [
  {
    deserialize(el, next, block) {
      if (el.tagName.toLowerCase() !== 'img') {
        return undefined
      }

      const img = el
      const caption = Array.from(img.parentNode.children).find(
        (child) => child.tagName.toLowerCase() === 'figcaption'
      )

      const src = img.getAttribute('src')

      return img && src
        ? block({
            _type: 'media',
            condition: 'image',
            image: {
              _type: 'image',
              _sanityAsset: `image@${img.getAttribute('src')}`,
              altText: img.getAttribute('alt'),
              title: img.getAttribute('title'),
              description: img.getAttribute('description'),
            },
            caption: caption ? caption?.textContent : undefined,
          })
        : undefined
    },
  },
  {
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
  },
]

const parseHtmlToBlocks = (html, options) => {
  if (!html) {
    return []
  }

  const avoidOrphan = (textString) =>
    /<[a-z][\s\S]*>/i.test(textString) ? textString : `<p>${textString}</p>`

  const sanitizedHTML = sanitizeHTML(avoidOrphan(html), {
    allowedTags: [
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'blockquote',
      'br',
      'p',
      'a',
      'ul',
      'ol',
      'nl',
      'li',
      'b',
      'i',
      'strong',
      'em',
      'strike',
      'code',
      'hr',
      'div',
      'table',
      'thead',
      'caption',
      'tbody',
      'tr',
      'th',
      'td',
      'pre',
      'figure',
      'figcaption',
      'img',
    ],
  })

  return blockTools.htmlToBlocks(sanitizedHTML, blockContentType, {
    rules,
    parseHtml: (htmlContent) => new JSDOM(htmlContent).window.document,
  })
}

module.exports = parseHtmlToBlocks
