import { LuAlignJustify as icon } from "react-icons/lu";
import {F, G, P} from '@/schema/tool'

export const heroSimple = F.object({
  icon,
  name: 'heroSimple',
  groups: [
    G.define('content', {title: 'Content', default: true}),
    G.define('media', {title: 'Media'}),
  ],
  fields: [
    ...G.group('content', [
      F.string({name: 'pill'}),
      F.string({name: 'label'}),
      F.field('blockContentHero', {
        name: 'content',
      }),
      F.links({
        signUpOption: true,
      }),
    ]),
    ...G.group('media', [
      F.media(), 
    ]),
  ],
  preview: {
    select: {
      heading: 'heading',
      content: 'content',
      media: 'media',
    },
    prepare({heading = '', content}) {
      const subtitle = content ? P.richText(content) : ''
      return {
        title: heading || subtitle,
        subtitle: heading ? subtitle : '',
      }
    },
  },
})
