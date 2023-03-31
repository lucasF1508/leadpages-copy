/* eslint-disable */
const blockTools = require('@sanity/block-tools').default
const sanitizeHTML = require('sanitize-html')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const blockContentSchema = require('./blockContentSchema')
const blockContentType = blockContentSchema.get('blockContent')

const {
  parseWpMediaTextComments,
  parseWpButtonComments,
  parseWpHtmlComments,
} = require('./functions/parseWpComments')

// const { parseWpDropShadowBox } = require('./functions/parseWpShortcodes')

const {
  deserializeButton,
  deserializeCodeAndPre,
  deserializeIframe,
  deserializeImage,
  deserializeInlineCta,
  deserializeParagraph,
  deserializeAudio,
  deserializeFigure,
  deserializeWistia,
  deserializeContentGroup,
  deserializeDropShadowBox,
  deserializeSpan,
} = require('./rules')

const rules = [
  deserializeInlineCta,
  deserializeContentGroup,
  deserializeWistia,
  deserializeButton,
  deserializeAudio,
  deserializeIframe,
  deserializeFigure,
  deserializeCodeAndPre,
  deserializeImage,
  deserializeParagraph,
  deserializeDropShadowBox,
  deserializeSpan,
]

const parseHtmlToBlocks = (html, options) => {
  if (!html) {
    return []
  }

  const htmlWithParsedMediaText = parseWpMediaTextComments(html)
  const htmlWithParsedButtons = parseWpButtonComments(htmlWithParsedMediaText)
  const htmlWithParsedHtml = parseWpHtmlComments(htmlWithParsedButtons)

  // const htmlWithParsedDropShadowBox = parseWpDropShadowBox(htmlWithParsedHtml)

  const avoidOrphan = (textString) =>
    /<[a-z][\s\S]*>/i.test(textString) ? textString : `<p>${textString}</p>`

  const sanitizedHTML = sanitizeHTML(avoidOrphan(htmlWithParsedHtml), {
    allowVulnerableTags: true,
    transformTags: {
      a: (tagName, attribs = {}) => {
        if (
          attribs?.href &&
          (attribs.href.includes('itunes.apple.com/us/podcast') ||
            attribs.href.includes('www.google.com/podcasts'))
        ) {
          return {
            tagName: 'podcastbadge',
            attribs,
          }
        }
        return {
          tagName: 'a',
          attribs,
        }
      },
      script: (tagName, attribs = {}) => {
        if (attribs.src?.includes('https://fast.wistia.com/embed/medias/')) {
          return {
            tagName: 'wistia',
            attribs,
          }
        }
        return {
          tagName: 'script',
          attribs,
        }
      },
    },
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
      'button',
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
      'iframe',
      'inlinecta',
      'audio',
      'script',
      'wistia',
      'contentgroup',
      'podcastbadge',
      'dropshadowbox',
      'span',
      'video',
    ],
    allowedAttributes: {
      iframe: [
        'title',
        'src',
        'height',
        'width',
        'scrolling',
        'allowfullscreen',
        'webkitallowfullscreen',
        'mozallowfullscreen',
        'oallowfullscreen',
        'msallowfullscreen',
        'style',
        'frameborder',
        'allow',
      ],
      audio: ['controls', 'src'],
      button: [
        'data-leadbox-popup',
        'data-leadbox-domain',
        'style',
        'data-json',
      ],
      img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading'],
      a: ['href', 'name', 'target'],
      inlinecta: ['data-json'],
      p: ['class'],
      figure: ['class'],
      script: ['src', 'async'],
      wistia: ['async', 'defer', 'src'],
      podcastbadge: ['src', 'href'],
      span: ['class', 'style'],
      blockquote: ['class', 'data-instgrm-permalink'],
      video: ['autoplay', 'controls', 'loop', 'muted', 'playsinline', 'src'],
    },
  })

  return blockTools.htmlToBlocks(sanitizedHTML, blockContentType, {
    rules,
    parseHtml: (htmlContent) => {
      return new JSDOM(htmlContent).window.document
    },
  })
}

module.exports = parseHtmlToBlocks
