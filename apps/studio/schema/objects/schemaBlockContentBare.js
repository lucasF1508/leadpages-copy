import { F } from 'part:gearbox-schema-tool/schema-builder'

export const blockContentBare = F.array({
  title: 'Block Content Bare',
  name: 'blockContentBare',
  parseType: 'blockContent',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [{}],
    },
  ],
})
