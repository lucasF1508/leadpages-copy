export const joinValues = (value, symbol = ' && ', prependSymbol = true) => {
  if (!value) return ''
  return (
    (prependSymbol ? symbol : '') +
    (Array.isArray(value) ? `${value.join(symbol)}` : value)
  )
}

export default joinValues
