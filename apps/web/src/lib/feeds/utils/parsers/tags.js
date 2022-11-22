export const tags = (item) => {
  if (!item) return item

  const items = item.split('|')
  const labels = items.map((label) => {
    const words = label.split('::')
    const value = words.reduce(
      (string, word, index) =>
        index === 0
          ? word
          : `${string}${index === words.length - 1 ? ' &' : ','} ${word}`,
      ''
    )
    return {
      label: value,
      value,
    }
  })

  return labels
}
