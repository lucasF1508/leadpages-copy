const defaultMap = {
  dropShadowBox: (item: any) => item.content,
  headlineSubtitle: (item: any) => ({
    ...item,
    style: 'h4',
  }),
  headlineSupertitle: (item: any) => ({
    ...item,
    style: 'small',
  }),
  headlineTitle: (item: any) => ({
    ...item,
    style: 'h2',
  }),
  normal: (item: any) => {
    const { listItem } = item
    if (listItem === 'checkmarks') {
      return {
        ...item,
        listItem: 'bullet',
      }
    }
    return item
  },
}

const mapBlockContent = (_content: any, _map = {}) => {
  if (!_content) {
    return []
  }

  const map = { ...defaultMap, ..._map }
  const data = Array.isArray(_content) ? _content : [_content]

  const content = data.flatMap((item) => {
    const mapper = map[item.style] || map[item._type]

    return typeof mapper === 'function' ? mapper(item) : item
  })

  return content
}

export default mapBlockContent
