import {F} from '@/schema/tool'

export const contactInfo = F.object({
  name: 'contactInfo',
  options: {
    columns: 2,
  },
  fields: [F.email(), F.string({name: 'phone'})],
})
