export const image = (value) => {
  const fallbackImage = 'https://static.leadpages.com/images/og/og-brand.jpg'

  return {
    _type: 'image',
    _sanityAsset: `image@${value || fallbackImage}`,
  }
}
