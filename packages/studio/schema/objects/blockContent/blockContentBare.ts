import {F} from '@/schema/tool'
import {blockContent} from './blockContent'

const [toolbar] = (blockContent as any)?.of || []

export const blockContentBare = F.array({
  title: 'Block Content Bare',
  name: 'blockContentBare',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        {
          title: 'Normal',
          value: 'normal',
        },
      ],
      lists: [],
      marks: {
        decorators: toolbar.marks.decorators,
        annotations: toolbar.marks.annotations,
      },
    },
  ],
})
