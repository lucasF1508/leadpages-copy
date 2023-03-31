export const addJsonAttr = (htmlAsString, tagString, closeTag = '-->') => {
  const indexOfTag = htmlAsString.indexOf(tagString)
  const indexOfJsonEnd = htmlAsString.indexOf(closeTag, indexOfTag)

  const dataJson = htmlAsString
    .substring(indexOfTag + tagString.length, indexOfJsonEnd)
    .trim()

  const updatedString = `${htmlAsString.slice(
    0,
    indexOfTag + tagString.length - 1
  )} data-json='${dataJson}'>${htmlAsString.slice(
    indexOfJsonEnd + closeTag.length
  )}`

  return updatedString
}
