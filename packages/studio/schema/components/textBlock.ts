import type {PortableTextTextBlock} from 'sanity'
import capitalize from 'lodash/capitalize'
import {BsTextareaT as icon} from 'react-icons/bs'
import {F, G} from '@/schema/tool'

export type TextBlockPrepareProps = {
  content?: PortableTextTextBlock[]
}

export const textBlock = F.object({
  icon,
  title: 'Text',
  name: 'textBlock',
  groups: [G.define('content', {default: true}), G.define('options')],
  fields: [
    ...G.group('content', [
      F.field('blockContent', {name: 'content'}),
      F.links({validation: (Rule) => Rule.max(1)}),
    ]),
    ...G.group('options', [
      F.dropdown(['center', 'start'], {
        name: 'alignment',
        title: 'Content Align',
        description: 'Align the content relative to the container',
        hidden: true,
      }),
      F.columnsWidth({name: 'columnsWidth', title: 'Max Width'}),
    ]),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({content}: TextBlockPrepareProps) => {
      if (!content) {
        return {
          title: 'Text Block',
          media: icon,
        }
      }

      const [first, ...blocks] = content.filter((blocks) => blocks._type === 'block')
      const title = first?.children?.map((child) => child.text).join('')

      return {
        title: capitalize(title) || 'Text Block',
        subtitle: blocks?.map(({children}) => children?.map(({text}) => text)).join(''),
        media: icon,
      }
    },
  },
})
