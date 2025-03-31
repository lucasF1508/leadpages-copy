import {F} from '@/schema/tool'

const marquee = F.object({
  name: 'marquee',
  fields: [F.array({name: 'logos', of: [F.image({title: 'Image'})]})],
})

export default marquee