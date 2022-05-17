import imageUrlBuilder from '@sanity/image-url'
import getClient from 'client'

const builder = imageUrlBuilder(getClient())

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

const getLabelsFromAsset = ({ alt, title, originalFilename }) => ({
  alt: alt || title || originalFilename,
  title: title || alt || originalFilename,
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
    ...getLabelsFromAsset(asset),
    ...getPlaceholderFromAsset(asset),
    ...getMetaFromAsset(image),
  }
}

export default useSanityImage
