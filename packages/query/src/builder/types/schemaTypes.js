export const schemaTypes = (value) => {
  if (!value) return ''
  const array = Array.isArray(value) ? value : [value]
  return array.map((type) => `_type == '${type}'`).join(' && ')
}
