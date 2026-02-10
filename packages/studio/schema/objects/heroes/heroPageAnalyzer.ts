import {AiOutlineBarChart as icon} from 'react-icons/ai'
import {F, G, P} from '@/schema/tool'

export const heroPageAnalyzer = F.object({
  icon,
  name: 'heroPageAnalyzer',
  groups: [G.define('content', {title: 'Content', default: true})],
  fields: [
    ...G.group('content', [
      F.image({
        name: 'logo',
        title: 'Logo Icon',
        description: 'Logo icon to show before the title',
      }),
      F.field('blockContentHero', {
        name: 'content',
      }),
    ]),
  ],
  preview: {
    select: {
      content: 'content',
      logo: 'logo',
    },
    prepare({content, logo}) {
      return {
        title: content ? P.richText(content) : 'Hero Page Analyzer',
        media: logo || icon,
      }
    },
  },
})


