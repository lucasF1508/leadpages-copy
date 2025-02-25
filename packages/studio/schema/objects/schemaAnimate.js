import {F} from '@/schema/tool'

export const schemaAnimate = F.boolean({
  name: 'animate',
  title: 'Animate Leading Text',
  initialValue: false,
  description: 'Include fade in-up animation for leading text.',
})
