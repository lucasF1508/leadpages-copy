import * as F from '../../fields'

export const contentGroup = ({
  label = {},
  heading = {},
  content = {},
  link = {},
} = {}) =>
  [
    label ? F.string({ name: 'label', ...label }) : '',
    heading ? F.string({ name: 'heading', ...heading }) : '',
    content ? F.blockContent({ name: 'content', ...content }) : '',
    link
      ? F.link({
          name: 'link',
          ...link,
        })
      : '',
  ].filter(Boolean)

export default contentGroup
