import type {PortableTextBlock} from 'sanity'
import {RxSection as icon} from 'react-icons/rx'
import {F, G, P} from '@/schema/tool'
import * as allComponentsSchema from '../components'

const componentsSchema = Object.values(allComponentsSchema).map(({name, title}) =>
  F.field(name, {name, title})
)

type SectionPreview = {
  columns?: {content: PortableTextBlock[]}[]
  content?: PortableTextBlock[]
  heading?: string
}

export const section = F.object({
  name: 'section',
  icon,
  groups: [G.define('components', {default: true}), G.define('options')],
  fields: [
    ...G.group('components', [
      F.array({
        icon,
        name: 'components',
        of: componentsSchema,
      }),
    ]),
  ],
  preview: {
    select: {
      components: 'components',
    },
    prepare: ({components = []}) => {
      const {heading, content} =
        components.find((component: SectionPreview) => component?.heading || component?.content) ||
        {}
      const {columns = []} =
        components.find((component: SectionPreview) => component?.columns) || {}

      const subtitle = content
        ? P.richText(content)
        : columns
            .map(({content}: {content: PortableTextBlock[]}) =>
              content ? P.richText(content) : ''
            )
            .join(', ') || ''

      return {
        title: heading || subtitle || 'Section',
        subtitle: heading ? subtitle : '',
        media: icon,
      }
    },
  },
})
