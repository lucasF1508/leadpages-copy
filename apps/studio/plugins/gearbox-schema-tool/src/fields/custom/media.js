import * as F from '../../fields'
import { BsImages as icon, BsCameraVideo as videoIcon } from 'react-icons/bs'
import startCase from 'lodash/startCase'

const vimeoToken = process.env.SANITY_STUDIO_VIMEO_TOKEN

export const media = ({
  fields = [],
  conditions = {},
  caption = true,
  name = 'media',
  ...props
} = {}) => {
  const defaultFields = caption ? [F.string({ name: 'caption' })] : []

  return F.conditional('Select Media type', {
    icon,
    name,
    ...props,
    parseType: 'media',
    conditions: {
      image: [F.image()],
      video: [
        vimeoToken ? F.field('vimeo.videoAsset', { name: 'video' }) : F.url(),
      ],
      ...conditions,
    },
    fields: [...defaultFields, ...fields],
    preview: {
      select: {
        condition: 'condition',
        image: 'image',
        video: 'video',
        url: 'url',
      },
      prepare: ({ condition, image, video, url }) => ({
        title: url || video?.name || startCase(condition) || 'Media (Empty)',
        media: condition === 'image' ? image : videoIcon,
      }),
    },
  })
}

export default media
