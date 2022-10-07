import { BsLink as icon } from 'react-icons/bs'
import { getTemplateTypes } from 'part:@gearbox-built/studio/config'
import getConditions from '../../utils/getConditions'
import * as F from '../../fields'
import * as G from '../../groups'
import * as P from '../../preview'

const pageTemplates = getTemplateTypes()

export const link = ({
  types = pageTemplates,
  conditions: conditionsOrg = {},
  fields: fieldsOrg = [],
  args: argsOrg = {},
  groups = [],
  preview = {},
  name = 'link',
  ...props
} = {}) => {
  const args = {
    label: {},
    url: {},
    file: {},
    page: {},
    target: {},
    video: {},
    hash: {},
    hasHash: {},
    linkStyle: {},
    linkSize: {},
    ...argsOrg,
  }

  const [conditions, conditionValues] = getConditions({
    internal: [],
    external: [],
    download: [],
    ...conditionsOrg,
  })

  const fields = [
    F.radio(conditions, { name: 'condition', group: 'content' }),
    args.linkStyle
      ? F.radio(['text', 'button', 'ghost'], {
          name: 'linkStyle',
          initialValue: 'text',
          group: 'options',
          hidden: ({ parent }) => parent.condition === 'none',
          ...args.linkStyle,
        })
      : '',
    args.linkSize
      ? F.radio(['normal', 'large'], {
          name: 'linkSize',
          initialValue: 'normal',
          group: 'options',
          hidden: ({ parent }) =>
            parent.condition === 'none' ||
            !parent?.linkStyle ||
            parent.linkStyle === 'text',
          ...args.linkStyle,
        })
      : '',
    args.url
      ? F.string({
          name: 'url',
          description: 'eg. https://google.com',
          group: 'content',
          hidden: ({ parent }) => parent.condition !== 'external',
          ...args.url,
        })
      : '',

    args.target
      ? F.checkbox({
          name: 'target',
          title: 'Open in a New Tab',
          group: 'options',
          hidden: ({ parent }) => parent.condition !== 'external',
          ...args.target,
        })
      : '',
    args.page
      ? F.reference(types, {
          name: 'page',
          group: 'content',
          weak: true,
          hidden: ({ parent }) => parent.condition !== 'internal',
          ...args.page,
        })
      : '',
    args.hasHash
      ? F.checkbox({
          name: 'hasHash',
          group: 'content',
          initialValue: false,
          hidden: ({ parent }) => parent.condition !== 'internal',
          ...args.hasHash,
        })
      : '',
    args.hash
      ? F.string({
          name: 'hash',
          group: 'content',
          hidden: ({ parent }) =>
            parent.condition !== 'internal' || parent.hasHash !== true,
          ...args.hash,
        })
      : '',
    args.file
      ? F.file({
          group: 'content',
          hidden: ({ parent }) => parent.condition !== 'download',
          ...args.file,
        })
      : '',
    args.video
      ? F.video({
          group: 'content',
          hidden: ({ parent }) => parent.condition !== 'video',
          ...args.video,
        })
      : '',
    args.label
      ? F.string({
          group: 'content',
          name: 'label',
          hidden: ({ parent }) => parent.condition === 'none',
          ...args.label,
        })
      : '',

    ...conditionValues.flat(),
    ...fieldsOrg,
  ].filter(Boolean)

  return F.object({
    icon,
    name,
    groups: [...G.fieldGroupComponentOptions(), ...groups],
    parseType: 'link',
    fields,
    preview: {
      ...P.link(),
      ...preview,
    },
    ...props,
  })
}
export default link
