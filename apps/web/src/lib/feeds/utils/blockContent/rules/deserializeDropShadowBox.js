/* eslint-disable */
const blockTools = require('@sanity/block-tools').default
const blockContentSchema = require('../blockContentSchema')
const blockContentType = blockContentSchema.get('blockContent')

const jsdom = require('jsdom')

const { JSDOM } = jsdom

export const deserializeDropShadowBox = {
  // Special case for dropshadow blocks
  deserialize(el, next, block) {
    if (!el) {
      return undefined
    }

    if (el.tagName.toLowerCase() !== 'dropshadowbox') {
      return undefined
    }

    const content = blockTools.htmlToBlocks(el.innerHTML, blockContentType, {
      parseHtml: (htmlContent) => new JSDOM(htmlContent).window.document,
    })

    if (content && content.length > 0) {
      return block({
        _type: 'dropShadowBox',
        content: content,
      })
    }

    return undefined
  },
}
