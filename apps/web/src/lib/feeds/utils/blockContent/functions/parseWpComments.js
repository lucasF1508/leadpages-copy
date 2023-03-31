/* eslint-disable */
import { addJsonAttr } from './addJsonAttr'

export const parseWpMediaTextComments = (html) => {
  const updateClosingTags = html.replaceAll(
    '<!-- /wp:media-text -->',
    '</inlinecta>'
  )

  const updateOpeningTags = updateClosingTags.replaceAll(
    '<!-- wp:media-text',
    '<inlinecta>'
  )

  const regexp = /<inlinecta>/g
  const matches = updateOpeningTags.matchAll(regexp)

  let value = updateOpeningTags

  for (const match of matches) {
    const addedJson = addJsonAttr(value, '<inlinecta>')
    value = addedJson
  }

  return value
}

export const parseWpButtonComments = (html) => {
  const updateClosingTags = html.replaceAll('<!-- /wp:button -->', '</button>')
  const updateOpeningTags = updateClosingTags.replaceAll(
    '<!-- wp:button',
    '<button>'
  )

  let value = updateOpeningTags

  const regexp = /<button>/g
  const matches = updateOpeningTags.matchAll(regexp)

  for (const match of matches) {
    const addedJson = addJsonAttr(value, '<button>')
    value = addedJson
  }

  return value
}

export const parseWpHtmlComments = (html) => {
  const updateClosingTags = html.replaceAll(
    '<!-- /wp:html -->',
    '</contentgroup>'
  )
  const updateOpeningTags = updateClosingTags.replaceAll(
    '<!-- wp:html',
    '<contentgroup>'
  )

  let value = updateOpeningTags

  const regexp = /<contentgroup>/g
  const matches = updateOpeningTags.matchAll(regexp)

  for (const match of matches) {
    const addedJson = addJsonAttr(value, '<contentgroup>')
    value = addedJson
  }

  return value
}
