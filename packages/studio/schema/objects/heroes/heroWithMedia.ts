import {BiImage as icon} from 'react-icons/bi'
import {F, G, P} from '@/schema/tool'

export const heroWithMedia = F.object({
  icon,
  name: 'heroWithMedia',
  groups: [
    G.define('content', {title: 'Content', default: true}),
    G.define('media', {title: 'Media'}),
    G.define('options', {title: 'Options'}),
  ],
  fields: [
    ...G.group('content', [
      F.string({name: 'label'}),
      F.string({name: 'pill'}),
      F.field('blockContentHero', {
        name: 'content',
      }),
      F.links({
        signUpOption: true,
        validation: (Rule) => Rule.max(2),
      }),
    ]),
    ...G.group('media', [
      F.media(), 
      F.boolean({name: 'overflowMedia', initialValue: false}),
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
