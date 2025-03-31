import type { ImageType, MediaType } from '@types'

export const hasImage = (image: any): image is ImageType =>
  !!image?.asset || !!image?.src

export const hasMedia = (media: any): media is MediaType => {
  switch (media?.condition) {
    case 'image':
      return hasImage(media?.image)
    default:
      return media ? !!media[media?.condition] : false
  }
}
