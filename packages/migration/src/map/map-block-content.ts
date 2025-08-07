const defaultMap = {}

const mapBlockContent = (_content: any, map = defaultMap) => {
  if (!_content) {
    return []
  }

  const data = Array.isArray(_content) ? _content : [_content]

  const content = data.flatMap((item) => {
    const mapper = map[item.style] || map[item._type]
    return typeof mapper === 'function' ? mapper(item) : item
  })

  return content
}

export default mapBlockContent