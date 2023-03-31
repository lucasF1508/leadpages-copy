import { deserializeSpan } from './deserializeSpan'

/* eslint-disable */
const jsdom = require('jsdom')
const blockTools = require('@sanity/block-tools').default

const { JSDOM } = jsdom

const blockContentSchema = require('../blockContentSchema')

const blockContentType = blockContentSchema.get('blockContent')

const cleanChildren = (block) => {
  const newBlock = block

  const parsed = block.children
    ?.map((child) => {
      if (child.text && child.text.length > 0) {
        const trim = child.text.trim()
        switch (trim) {
          case 'Send me new episodes!':
            return
          default:
          // console.log('No edge case')
        }
        if (trim && trim.length > 0) {
          return child
        }
      }
    })
    .filter(Boolean)

  newBlock.children = parsed
  return newBlock
}

export const deserializeInlineCta = {
  // Special case for <inlinecta>
  deserialize(el, next, block) {
    if (!el) {
      return undefined
    }

    if (el.tagName.toLowerCase() !== 'inlinecta') {
      return undefined
    }

    const json = JSON.parse(el?.dataset?.json) || {}

    const {
      style,
      mediaWidth,
      mediaPosition,
      isStackedOnMobile,
      customBackgroundColor,
    } = json

    const bgColor = style?.color?.background || customBackgroundColor

    const result = blockTools.htmlToBlocks(el.innerHTML, blockContentType, {
      rules: [deserializeSpan],
      parseHtml: (htmlContent) => new JSDOM(htmlContent).window.document,
    })

    const imageNode = el.querySelector('img')
    const buttonNode = el.querySelector('button')
    const anchorNodes = el.querySelectorAll('a')

    // What this is doing:
    // where there is no button element do nothing and render inline cta content as content
    // where there is a button and that button element has a label assign button node to link for destructuring
    // where there is a button node with no text content with an anchor as a child, assign anchor to link for destructuring where appropriate
    // where there is a button element sniff out the child anchor and assign the href to link so that the button displays in the inline cta

    const linkNode = buttonNode
      ? buttonNode.textContent && buttonNode?.textContent?.trim() !== ''
        ? buttonNode
        : anchorNodes?.length === 1 && anchorNodes[0]
      : null

    const link = {
      leadboxDomain: linkNode?.dataset?.leadboxDomain,
      leadboxPopup: linkNode?.dataset?.leadboxPopup,
      label: linkNode?.textContent || anchorNodes[0]?.textContent,
      url:
        linkNode &&
        (linkNode.textContent || anchorNodes[0]?.textContent) &&
        (linkNode.getAttribute('href') ||
          (anchorNodes?.length === 1 && anchorNodes[0]?.getAttribute('href'))),
    }

    const image = imageNode
      ? {
          _type: 'image',
          _sanityAsset: `image@${imageNode?.getAttribute('src')}`,
          altText: imageNode?.getAttribute('alt'),
          title: imageNode?.getAttribute('title'),
          description: imageNode?.getAttribute('description'),
        }
      : undefined

    const linkIndex = result.findIndex(
      (element) => element.markDefs?.length === 1
    )

    const content = result
      .map((block, i) => {
        if (linkNode && i !== linkIndex) {
          const cleaned = cleanChildren(block)
          return cleaned.children?.length > 0 && cleaned
        }
        if (!linkNode) {
          const cleaned = cleanChildren(block)
          return cleaned.children?.length > 0 && cleaned
        }
      })
      .filter(Boolean)

    return block({
      _type: 'inlineCTA',
      bgColor:
        (bgColor === '#f7f7f7' && 'grayAlt') ||
        (bgColor === '#603eff' && 'primary') ||
        (bgColor === '#d1c6f9' && 'secondary') ||
        (bgColor === '#fef9f1' && 'tan') ||
        (bgColor === '#e4defc' && 'lavenderLight') ||
        (bgColor === '#e28f44' && 'textHighlight') ||
        (bgColor === '#f4e3cc' && 'champagne') ||
        (bgColor === '#f1edfd' && 'magnolia') ||
        (bgColor === '#0b236d' && 'darkBlue') ||
        (bgColor === '#fcedf5' && 'lavenderBlush') ||
        'transparent',
      content,
      contentRight: mediaPosition !== 'right' && true,
      ctaLink: {
        condition: link?.leadboxDomain ? 'leadpagesTrigger' : 'external',
        hasHash: false,
        label:
          link?.label?.replace(/[^a-z0-9\s]/gi, '') || 'Start a Free Trial',
        leadpagesDomain: link?.leadboxDomain || 'lps.lpages.co',
        linkStyle: 'text',
        popUpId: link?.leadboxPopup || 'rMjFeuLYTU7X8rt2hg7tTm',
        target: false,
        url: link?.url || null,
      },
      image,
      imageWidth:
        (mediaWidth < 30 && 'quarter') ||
        (mediaWidth <= 40 && 'third') ||
        'half',
    })
  },
}
