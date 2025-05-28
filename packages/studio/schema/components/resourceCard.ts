import {F, G} from '@/schema/tool'
import {BiHighlight as icon} from 'react-icons/bi'

export const resourceCard = F.object({
  name: 'resourceCard',
  icon,
  groups: [
    G.define('content', {default: true}), 
    G.define('media'),
    G.define('deprecated', {
      hidden: true
    }), 
  ],
  fields: [
    ...G.group('content', [
      F.string({name: 'heading'}),
      F.string({name: 'title'}),
      F.text({name: 'content'}),
      F.links({
        signUpOption: true,
        linkStyle: false,
        validation: (Rule) => Rule.max(1),
      })
    ]),
    ...G.group('media', [
      F.image(),
    ]),
    ...G.group('deprecated', [
        F.link({
        deprecated: {
          reason: 'Updated in favour of the links field to allow for sign up fields',
        },
        args: {
          linkSize: false,
          hasHash: false,
        },
      }),
    ])
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title,
        media: image,
      }
    },
  },
})