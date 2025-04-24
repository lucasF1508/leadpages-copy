interface ParseImageRefProps {
  _type: string
  asset: {
    _ref: string
    _type: string 
  }
  lqip: null | string
}

const SANITY_STUDIO_API_PROJECT_ID = process.env.SANITY_STUDIO_API_PROJECT_ID
const SANITY_STUDIO_API_DATASET = process.env.SANITY_STUDIO_API_DATASET

export const parseImageRef = (image: ParseImageRefProps) => {
  const { asset } = image || {}
  const _ref = asset?._ref

  if (!_ref) {
    console.error(`⚠️ parseImageRef: No asset ref found in image`, image)
    return null
  }

  const [, hash, dimensions, extension] = _ref.split('-')
  const [width, height] = dimensions?.split('x') || []

  const url = `https://cdn.sanity.io/images/${SANITY_STUDIO_API_PROJECT_ID}/${SANITY_STUDIO_API_DATASET}/${hash}-${dimensions}.${extension}?w=1200&h=630`

  return {
    extension,
    hash,
    height: Number(height),
    url,
    width: Number(width)
  }
}