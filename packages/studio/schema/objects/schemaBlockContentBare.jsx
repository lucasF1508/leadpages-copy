import {F} from '@/schema/tool'

export const blockContentBare = F.array({
  title: 'Block Content Bare',
  name: 'blockContentBare',
  parseType: 'blockContent',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [{title: 'Normal', value: 'normal'}],
    },
  ],
})
