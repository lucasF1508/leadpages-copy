import React from 'react'
import { BsImages as icon, BsCameraVideo as videoIcon } from 'react-icons/bs'
import startCase from 'lodash/startCase'
import getConditions from '../../utils/getConditions'
import * as F from '../../fields'
import * as G from '../../groups'

export const media = ({
  fields: fieldsOrg = [],
  args: argsOrg = {},
  preview = {},
  groups = [],
  conditions: conditionsOrg = {},
  name = 'media',
  ...props
} = {}) => {
  const args = {
    image: {},
    video: {},
    caption: {},
    ratio: {},
    ...argsOrg,
  }

  const [conditions, conditionValues] = getConditions({
    image: [],
    video: [],
    download: [],
    ...conditionsOrg,
  })

  const fields = [
    F.radio(conditions, {
      name: 'condition',
      title: 'Type',
      group: 'content',
      initialValue: 'image',
    }),
    args.image
      ? F.image({
          group: 'content',
          hidden: ({ parent }) => parent.condition !== 'image',
          ...args.image,
        })
      : '',
    args.video
      ? F.video({
          group: 'content',
          hidden: ({ parent }) => parent.condition !== 'video',
          ...args.video,
        })
      : '',
    args.caption
      ? F.string({
          name: 'caption',
          group: 'content',
          hidden: ({ parent }) => parent.condition === 'none',
          ...args.caption,
        })
      : '',
    args.ratio
      ? F.string({
          name: 'ratio',
          group: 'options',
          hidden: ({ parent }) =>
            parent.condition === 'none' || parent.condition === 'lottie',
          ...args.ratio,
        })
      : '',
    ...conditionValues.flat(),
    ...fieldsOrg,
  ].filter(Boolean)

  return F.object({
    icon,
    name,
    ...props,
    parseType: 'media',
    groups: [...G.fieldGroupComponentOptions(), ...groups],
    fields,
    preview: {
      select: {
        condition: 'condition',
        image: 'image',
        video: 'video',
        url: 'url',
        ratio: 'ratio',
        caption: 'caption',
      },
      prepare: ({ condition, image, video, url, ratio, caption }) => ({
        title: url || video?.name || startCase(condition) || 'Media (Empty)',
        subtitle: caption || ratio || '',
        media: condition === 'image' ? image : videoIcon,
      }),
      ...preview,
    },
  })
}

export default media
