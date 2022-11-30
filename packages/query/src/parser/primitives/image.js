export const image = {
  hotspot: true,
  crop: true,
  altText: true,
  'asset->': {
    _id: true,
    mimeType: true,
    originalFilename: true,
    url: true,
    altText: true,
    metadata: {
      lqip: true,
      dimensions: {
        aspectRatio: true,
        width: true,
        height: true,
      },
    },
  },
}

export default image
