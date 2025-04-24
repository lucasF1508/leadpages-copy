import {BiImage as icon} from 'react-icons/bi'
import {F, G, P} from '@/schema/tool'

export const heroHome = F.object({
  icon,
  name: 'heroHome',
  groups: [...G.fieldGroupDefaults(), G.define('seo', {title: 'SEO'})],
  fields: [
    ...G.group('content', [
      F.string({name: 'heading'}),
      F.text({
        name: 'content',
      }),
      F.links({
        signUpOption: true,
        validation: (Rule) => Rule.max(1),
      }),
    ]),
  ],
  preview: {
    select: {
      heading: 'heading',
      content: 'content',
    },
    prepare({heading = '', content}) {
      return {
        title: heading || "Hero Home",
        subtitle: content,
        media: icon,
      }
    },
  },
})
