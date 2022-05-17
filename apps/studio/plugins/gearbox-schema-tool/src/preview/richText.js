export const richText = (content = []) => {
  let title = ''
  const textBlocks = content.filter((blocks) => blocks._type === 'block')
  if (textBlocks.length) {
    title = textBlocks
      .map(({ children }) => children.map(({ text }) => text))
      .join(' ')
  }
  return title
}
