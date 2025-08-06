import type { SanityImageProps, StaticImageData } from '@types'
import type { UseNextSanityImageOptions } from 'next-sanity-image'
import getClient from 'client'
import isEmpty from 'lodash/isEmpty'
import { useNextSanityImage } from 'next-sanity-image'

type PlaceholderType = 'blur' | 'empty'

const client = getClient({
  // @ts-expect-error Better typing for client required
  config: {
    dataset: process.env.SANITY_STUDIO_API_DATASET,
  },
})

type useImageParserReturnType = {
  alt?: string
  aspectRatio?: number
  extension?: string
  height?: number
  hotspot?: any
  isSvg?: boolean
  lqip?: string
  placeholderType?: PlaceholderType
  url?: string
  width?: number
}

// Type guard for StaticImageData
const isStaticImageData = (
  image: SanityImageProps | StaticImageData
): image is StaticImageData =>
  !!(image?.src?.includes('_next/static') || image?.src?.includes('data:image'))

const getExtension = (src?: string) => {
  if (!src) return undefined

  const parts = src.split('.')

  if (!parts.length) return undefined

  return parts.pop()?.split('?')[0]
}

const useImageParser = (
  image: SanityImageProps | StaticImageData | string,
  _options?: UseNextSanityImageOptions
): useImageParserReturnType => {
  if (isEmpty(image)) return {}

  switch (typeof image) {
    case 'string':
      return {
        url: image,
      }
    case 'object':
      if (isStaticImageData(image)) {
        return {
          ...image,
          lqip: image?.blurDataURL,
          placeholderType: image?.blurDataURL ? 'blur' : undefined,
          url: image?.src,
        }
      } else {
        const {
          height: assetHeight,
          src: _src,
          width: assetWidth,
        } = useNextSanityImage(client, image, {
          imageBuilder: (imageUrlBuilder) => imageUrlBuilder.auto('format'),
          ..._options,
        }) || {}
        const extension = getExtension(_src)

        const isSvg = extension?.includes('svg')
        const [src] = _src && isSvg ? _src.split('?') : [_src]

        const width = !image?.crop
          ? assetWidth
          : (1 - image.crop.left - image.crop.right) * assetWidth
        const height = !image?.crop
          ? assetHeight
          : (1 - image.crop.top - image.crop.bottom) * assetHeight
        const aspectRatio = width / height

        return {
          alt: image?.altText,
          aspectRatio,
          extension,
          height,
          hotspot: image?.hotspot,
          isSvg,
          lqip: !isSvg ? image?.lqip : undefined,
          placeholderType: !isSvg && image?.lqip ? 'blur' : undefined,
          url: src,
          width,
        }
      }
  }
}

export default useImageParser
