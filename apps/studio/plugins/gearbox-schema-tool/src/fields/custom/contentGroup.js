import { getTemplateTypes } from 'part:@gearbox-built/studio/config'
import * as F from '../../fields'

const pageTemplates = getTemplateTypes()

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
      ? F.link(pageTemplates, {
          name: 'link',
          ...link,
        })
      : '',
  ].filter(Boolean)

export default contentGroup
