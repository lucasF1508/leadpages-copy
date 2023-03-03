export const richText = ({ content = [], title: titleOrg = '' }) => {
  if (!content?.length || !Array.isArray(content)) return false
  let title = titleOrg
  const textBlocks = content.filter((blocks) => blocks?._type === 'block')
  if (textBlocks.length) {
    title = textBlocks
      .map(({ children }) => children.map(({ text }) => text))
      .join(' ')
  }
  return title
}
