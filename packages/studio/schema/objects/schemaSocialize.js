import {F} from '@/schema/tool'

export const schemaSocialize = F.boolean({
  name: 'hasSocialize',
  description: 'Includes social icons after the content.',
  initialValue: false,
})
