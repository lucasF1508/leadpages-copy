import {F} from '@/schema/tool'
import {defaultDecorators} from './util'

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
        decorators: [...defaultDecorators],
        annotations: [],
      },
    },
  ],
})
