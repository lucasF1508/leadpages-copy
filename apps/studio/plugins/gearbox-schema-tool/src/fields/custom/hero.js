import { getTemplateTypes } from 'part:@gearbox-built/studio/config'
import { FiImage as icon } from 'react-icons/fi'
import * as F from '../../fields'
import * as G from '../../groups'
import * as P from '../../preview'

const pageTemplates = getTemplateTypes()

export const hero = ({
  fields: fieldsOrg = [],
  args: argsOrg = {},
  name = 'hero',
  preview = {},
  groups = [],
  options = {},
  ...props
} = {}) => {
  const args = {
    label: {},
    heading: {},
    content: {},
    link: {},
    media: {},
    align: {},
    ...argsOrg,
  }

  const fields = [
    args.label
      ? F.string({ name: 'label', group: 'content', ...args.label })
      : '',
    args.heading
      ? F.string({ name: 'heading', group: 'content', ...args.heading })
      : '',
    args.content
      ? F.blockContent({ name: 'content', group: 'content', ...args.content })
      : '',
    args.link
      ? F.link(pageTemplates, {
          name: 'link',
          group: 'content',
          conditions: {
            none: [],
          },
          ...args.link,
        })
      : '',
    args.media ? F.media({ conditions: { none: [] }, ...args.media }) : '',
    args.align
      ? F.radio(['left', 'center'], {
          name: 'align',
          title: 'Hero Alignment',
          initialValue: 'left',
          group: 'options',
        })
      : '',
    ...fieldsOrg,
  ].filter(Boolean)

  return F.object({
    icon,
    name,
    groups: [...G.fieldGroupComponentOptions(), ...groups],
    fields,
    options: {
      collapsible: true,
      collapsed: true,
      ...options,
    },
    preview: {
      select: {
        heading: 'heading',
        content: 'content',
        image: 'image',
      },
      prepare({ heading = 'Hero', content, image }) {
        return {
          title: heading,
          subtitle: content ? P.richText(content) : '',
          media: image || icon,
        }
      },
      ...preview,
    },
    ...props,
  })
}

export default hero
