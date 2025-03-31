import {F} from '@/schema/tool'
import {blockContent} from './blockContent'
import { links } from './links'

const cta = F.object({
  name: 'cta',
  fields: [
    F.string({name: 'heading'}),
    blockContent,
    links,
    F.image({name: 'backgroundImage'}),
    F.string({name: 'desktopOrientation', options: {list: ['horizontal', 'vertical']}}),
  ],
})

export default cta