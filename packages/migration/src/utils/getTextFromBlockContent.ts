import type {PortableTextBlock} from 'sanity'

export const getTextFromBlockContent = (_content: PortableTextBlock | PortableTextBlock[]) => {
  const content = Array.isArray(_content) ? _content : [_content]

  return content.reduce((string, block) => {
    if (block?._type !== 'block') return string

    const children = Array.isArray(block.children) ? block.children : [block.children]

    return [
      string,
      children
        .reduce((words, child) => {
          if (!child?.text) return string

          return [words, child.text].join(' ')
        }, '')
        .trim(),
    ]
      .join(' ')
      .trim()
  }, '')
}