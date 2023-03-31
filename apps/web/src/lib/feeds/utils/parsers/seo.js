const processSeoString = (value) =>
  value.split('|').reduce((object, field) => {
    const [key, seoValue] = field.split('::').map((string) => string.trim())

    const image =
      key === 'seoImage'
        ? {
            image: {
              _type: 'image',
              _sanityAsset: `image@${seoValue}`,
            },
          }
        : false
    return {
      ...(seoValue ? { [key]: key === 'seoImage' ? image : seoValue } : {}),
      ...object,
    }
  }, {})

export const seo = (value, map) => {
  if (!value) return value
  const { seoField } = map
  let result = {}

  switch (seoField) {
    case 'seoImage':
      result[seoField] = {
        _type: 'image',
        _sanityAsset: `image@${value}`,
      }
      break
    case null:
      result = processSeoString(value)
      break
    default:
      result[seoField] = value
      break
  }

  return Object.values(result).length > 0 ? result : undefined
}
