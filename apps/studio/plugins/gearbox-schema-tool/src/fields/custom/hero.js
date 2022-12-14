import startCase from 'lodash/startCase'
import * as F from '../../fields'
import * as G from '../../groups'
import * as P from '../../preview'

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
    args.content
      ? F.field('blockContentHero', {
          name: 'content',
          group: 'content',
          ...args.content,
        })
      : '',
    args.link
      ? F.links({
          group: 'content',
          link: { ...args.link },
        })
      : '',
    args.media
      ? F.media({
          group: 'media',
          conditions: { none: [] },
          initialValue: {
            condition: 'none',
          },
          args: { caption: false },
          ...args.media,
        })
      : '',
    args.align
      ? F.radio(['left', 'right'], {
          name: 'align',
          title: 'Content Alignment',
          initialValue: 'left',
          group: 'options',
        })
      : '',
    ...fieldsOrg,
  ].filter(Boolean)

  return F.object({
    name,
    groups: [
      G.fieldGroup('content', { title: 'Content', default: true }),
      G.fieldGroup('links', { title: 'Links' }),
      G.fieldGroup('media', { title: 'Media' }),
      G.fieldGroup('options', { title: 'Options' }),
      ...groups,
    ],
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
        media: 'media',
      },
      prepare({ heading = props?.title || startCase(name), content, media }) {
        return {
          title: heading,
          subtitle: P.richText({ content }),
          media: media?.condition === 'image' && media.image,
        }
      },
      ...preview,
    },
    ...props,
  })
}

export default hero
