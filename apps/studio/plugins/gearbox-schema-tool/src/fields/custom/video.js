import * as F from '../../fields'

const vimeoToken = process.env.SANITY_STUDIO_VIMEO_TOKEN

export const video = (args = {}) =>
  vimeoToken
    ? F.field('vimeo.videoAsset', {
        name: 'video',
        ...args,
      })
    : F.url({
        name: 'video',
        ...args,
      })

export default video
