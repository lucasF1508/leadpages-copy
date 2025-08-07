import {F, P} from '@/schema/tool'
import {BiImage as icon} from 'react-icons/bi'

export const cta = F.object({
  name: 'cta',
  title: "Call to Action",
  icon,
  fields: [
    F.string({name: 'heading'}),
    F.field('blockContent', {name: 'content'}), 
    F.links({
      signUpOption: true,
    }),
    F.image({name: 'backgroundImage'}),
    F.radio(['horizontal', 'vertical'], {name: 'desktopOrientation'}),  
  ],
  preview: {
    select: {
      heading: 'heading',
      content: 'content',
      media: 'backgroundImage',
    },
    prepare({heading = '', content, media}) {
      const subtitle = content ? P.richText(content) : ''
      return {
        title: heading || subtitle,
        subtitle: heading ? subtitle : '',
        media: media?._ref ? media : icon,
      }
    },
  },
})