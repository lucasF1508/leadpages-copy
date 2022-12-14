import capitalize from 'lodash/capitalize'
import { richText } from './richText'
import { richTextImage } from './richTextImage'

export const blockContent = ({
  title = 'Text Block',
  name = 'content',
} = {}) => ({
  select: {
    content: name,
  },
  prepare: ({ content = [] }) => ({
    title: capitalize(richText({ content, title })),
    media: richTextImage({ content }),
  }),
})
