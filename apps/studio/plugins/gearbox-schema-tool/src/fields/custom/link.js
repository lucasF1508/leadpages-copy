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
  isGrouped = true,
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
    leadpagesDomain: {},
    popUpId: {},
    hasHash: {},
    linkStyle: {},
    linkSize: {},
    condition: {},
    ...argsOrg,
  }

  const [conditions, conditionValues] = getConditions({
    internal: [],
    external: [],
    download: [],
    leadpagesTrigger: [],
    ...conditionsOrg,
  })

  const fields = [
    F.radio(conditions, {
      name: 'condition',
      group: isGrouped && 'content',
      ...args.condition,
    }),
    args.linkStyle
      ? F.radio(['text', 'button', 'ghost'], {
          name: 'linkStyle',
          initialValue: 'text',
          group: isGrouped && 'options',
          hidden: ({ parent }) => parent.condition === 'none',
          ...args.linkStyle,
        })
      : '',
    args.url
      ? F.string({
          name: 'url',
          description: 'eg. https://google.com',
          group: isGrouped && 'content',
          hidden: ({ parent }) => parent.condition !== 'external',
          ...args.url,
        })
      : '',
    args.target
      ? F.checkbox({
          name: 'target',
          title: 'Open in a New Tab',
          group: isGrouped && 'options',
          hidden: ({ parent }) => parent.condition !== 'external',
          ...args.target,
        })
      : '',
    args.page
      ? F.reference(types, {
          name: 'page',
          group: isGrouped && 'content',
          weak: true,
          hidden: ({ parent }) => parent.condition !== 'internal',
          ...args.page,
        })
      : '',
    args.hasHash
      ? F.checkbox({
          name: 'hasHash',
          group: isGrouped && 'content',
          initialValue: false,
          hidden: ({ parent }) => parent.condition !== 'internal',
          ...args.hasHash,
        })
      : '',
    args.hash
      ? F.string({
          name: 'hash',
          group: isGrouped && 'content',
          hidden: ({ parent }) =>
            parent.condition !== 'internal' || parent.hasHash !== true,
          ...args.hash,
        })
      : '',
    args.popUpId
      ? F.string({
          name: 'popUpId',
          group: isGrouped && 'content',
          hidden: ({ parent }) => parent.condition !== 'leadpagesTrigger',
          ...args.popUpId,
        })
      : '',
    args.leadpagesDomain
      ? F.string({
          name: 'leadpagesDomain',
          group: isGrouped && 'content',
          hidden: ({ parent }) => parent.condition !== 'leadpagesTrigger',
          ...args.leadpagesDomain,
        })
      : '',
    args.file
      ? F.file({
          group: isGrouped && 'content',
          hidden: ({ parent }) => parent.condition !== 'download',
          ...args.file,
        })
      : '',
    args.video
      ? F.video({
          group: isGrouped && 'content',
          hidden: ({ parent }) => parent.condition !== 'video',
          ...args.video,
        })
      : '',
    args.label
      ? F.string({
          name: 'label',
          group: isGrouped && 'content',
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
