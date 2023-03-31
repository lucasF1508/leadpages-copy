/* eslint-disable */
import { addJsonAttr } from './addJsonAttr'

export const parseWpDropShadowBox = (html) => {
  const updateClosingTags = html.replaceAll(
    '[/dropshadowbox]',
    '</dropshadowbox>'
  )

  const updateOpeningTags = updateClosingTags.replaceAll(
    '[dropshadowbox',
    '<dropshadowbox>'
  )

  const regexp = /<dropshadowbox>/g
  const matches = updateOpeningTags.matchAll(regexp)

  let value = updateOpeningTags

  for (const match of matches) {
    const addedJson = addJsonAttr(value, '<dropshadowbox>', ']')
    value = addedJson
  }

  return value
}
