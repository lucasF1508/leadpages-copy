import find from 'lodash/find'

export const image = (value, { imageType }) => {
  switch (imageType) {
    case 'media:content':
      // eslint-disable-next-line no-case-declarations
      const media = value?.url ? value : find(value, 'url')
      return media?.url || value
    default:
      return value
  }
}
