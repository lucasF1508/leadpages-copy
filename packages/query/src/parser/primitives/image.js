export const image = {
  hotspot: true,
  crop: true,
  'asset->': {
    _id: true,
    mimeType: true,
    originalFilename: true,
    url: true,
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
