export const seo = (value) => {
  if (!value) return value

  const seoObject = value.split('|').reduce((object, field) => {
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

  return Object.values(seoObject).length > 0 ? seoObject : undefined
}
