import imageUrlBuilder from '@sanity/image-url'
import getClient from 'client'

const builder = imageUrlBuilder(getClient())

const titledFilename = (filename) => {
  if (!filename) return filename

  return filename
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' ')
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const getSizesFromAsset = (asset, crop) => {
  const {
    aspectRatio: assetAspectRatio,
    width: assetWidth,
    height: assetHeight,
  } = asset?.metadata?.dimensions || {}
  const width = !crop ? assetWidth : (1 - crop.left - crop.right) * assetWidth
  const height = !crop
    ? assetHeight
    : (1 - crop.top - crop.bottom) * assetHeight
  const aspectRatio = crop ? width / height : assetAspectRatio

  return {
    aspectRatio,
    width,
    height,
  }
}

const getLabelsFromImage = ({
  asset: { altText, title, originalFilename } = {},
  altText: alt,
}) => ({
  alt: alt || altText || title || titledFilename(originalFilename),
  title: title || alt || altText || titledFilename(originalFilename),
})

const getPlaceholderFromAsset = ({
  metadata: { lqip } = {},
  mimeType,
} = {}) => ({
  lqip,
  placeholderType: !mimeType?.includes('svg') && lqip ? 'blur' : undefined,
})

const getMetaFromAsset = (image) => {
  const url = builder.image(image).url()
  return {
    url,
    _key: image?.asset?._id,
  }
}

const useSanityImage = (image) => {
  const { hotspot, crop, asset } = image || {}
  if (!asset) return {}

  return {
    builder: builder.image(image),
    hotspot,
    crop,
    asset,
    ...getSizesFromAsset(asset, crop),
    ...getLabelsFromImage(image),
    ...getPlaceholderFromAsset(asset),
    ...getMetaFromAsset(image),
  }
}

export default useSanityImage
