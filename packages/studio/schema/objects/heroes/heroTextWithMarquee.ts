import {RxSpaceEvenlyHorizontally as icon} from 'react-icons/rx'
import {F, G, P} from '@/schema/tool'

export const heroTextWithMarquee = F.object({
  icon,
  name: 'heroTextWithMarquee',
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],
  fields: [
    ...G.group('content', [
      F.field('blockContentHero', {name: 'content'}),
      F.links({
        signUpOption: true,
        validation: (Rule) => Rule.max(1),
      }),
      F.field('marquee'),
    ]),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({content}) {
      return {
        title: content ? P.richText(content) : 'Hero Text With Marquee',
        media: icon,
      }
    },
  },
})
