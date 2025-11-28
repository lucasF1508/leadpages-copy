import getClient from 'client'
import isEmpty from 'lodash/isEmpty'
import { useNextSanityImage } from 'next-sanity-image'

// Use the correct dataset (production_v3) for image parsing
const client = getClient({
  config: {
    dataset: process.env.SANITY_STUDIO_API_DATASET,
  },
})

const isStaticImageData = (image) =>
  image?.src?.includes('_next/static') || image?.src?.includes('data:image')

// eslint-disable-next-line consistent-return
const useImageParser = (image, _options) => {
  if (isEmpty(image)) return {}

  // eslint-disable-next-line default-case
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
        // eslint-disable-next-line no-else-return
      } else {
        const imageData = useNextSanityImage(client, image, {
          imageBuilder: (imageUrlBuilder) => imageUrlBuilder.auto('format'),
          ..._options,
        })
        
        if (!imageData || !imageData.src) {
          return {}
        }

        const {
          height: assetHeight,
          src: _src,
          width: assetWidth,
        } = imageData
        
        if (!_src) {
          return {}
        }

        const extension = _src.split('.').pop().split('?')[0]
        const isSvg = extension?.includes('svg')
        const [src] = _src && isSvg ? _src.split('?') : [_src]

        const width = !image?.crop
          ? assetWidth
          : (1 - image.crop.left - image.crop.right) * assetWidth
        const height = !image?.crop
          ? assetHeight
          : (1 - image.crop.top - image.crop.bottom) * assetHeight
        const aspectRatio = width && height ? width / height : undefined

        return {
          alt: image?.altText,
          aspectRatio,
          extension,
          height,
          hotspot: image?.hotspot,
          isSvg,
          lqip: !isSvg && image?.lqip,
          placeholderType: !isSvg && image?.lqip ? 'blur' : undefined,
          url: src,
          width,
        }
      }
  }
}

export default useImageParser
