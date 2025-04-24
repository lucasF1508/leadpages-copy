import {F} from '@/schema/tool'
import {blockContent} from './blockContent'

const [toolbar] = blockContent?.of || []

export const tooltip = F.array({
  title: 'Tooltip',
  name: 'tooltip',
  of: [
    {
      ...toolbar,
      type: 'block',
      marks: {
        ...toolbar.marks,
        annotations: [
          ...(toolbar?.marks?.annotations
            ? toolbar.marks.annotations.filter(({name}) => name !== 'tooltip')
            : []),
        ],
      },
    },
  ],
})
