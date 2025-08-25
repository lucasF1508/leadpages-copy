import {BsTextareaT as icon} from 'react-icons/bs'
import {F, G, P} from '@/schema/tool'

export const textBlockWithSidebar = F.object({
  icon,
  title: 'Text With Sidebar',
  name: 'textBlockWithSidebar',
  groups: [G.define('content', {default: true}), G.define('sidebar'), G.define('options')],
  fields: [
    ...G.group('content', [F.field('blockContent', {name: 'content'})]),
    ...G.group('sidebar', [
      F.object({
        name: 'sidebar',
        fields: [
          F.string({name: 'heading', title: 'Collapsed Heading'}),
          F.array({
            name: 'sections',
            of: [
              F.object({
                name: 'sidebarSection',
                fields: [
                  F.string({name: 'heading'}),
                  F.array({
                    name: 'links',
                    of: [F.rawLink()],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ]),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({content}: any) => {
      if (!content) {
        return {
          title: 'Text Block With Sidebar',
          media: icon,
        }
      }

      const [title, subtitle] = P.richHeading(content, 'all')

      return {
        title,
        subtitle,
        media: icon,
      }
    },
  },
})
