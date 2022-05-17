import { useSanityImage } from 'sanity-hooks'
import isString from 'lodash/isString'

const useImageParser = (image) => {
  switch (true) {
    case isString(image):
      return {
        url: image,
      }
    case image?.src?.includes('_next/static') ||
      image?.src?.includes('data:image'):
      return {
        ...image,
        placeholderType: image?.blurDataURL ? 'blur' : undefined,
        lqip: image?.blurDataURL,
        url: image?.src,
      }

    default:
      return useSanityImage(image)
  }
}

export default useImageParser
