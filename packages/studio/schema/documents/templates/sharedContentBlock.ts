import sortBy from 'lodash/sortBy'
import {AiOutlineBlock as icon} from 'react-icons/ai'
import {blockContent} from '@/schema/objects/blockContent/blockContent'
import {F, P} from '@/schema/tool'

const contentBlockComponents = sortBy(
  blockContent.of.filter((content) => !['block', 'contentBlockReference'].includes(content.type)),
  (o) => o.title
)

export const sharedContentBlock = {
  icon,
  name: 'sharedContentBlock',
  title: 'Content Block',
  type: 'document',
  fields: [
    F.string({name: 'title'}),
    F.array({
      icon,
      name: 'components',
      of: [...contentBlockComponents],
    }),
  ],
  preview: P.titleImage(),
}
