import {F, G, P} from '@/schema/tool'
import {MdOutlineFeaturedPlayList as icon} from 'react-icons/md'

export const featureScroll = F.object({
  name: 'featureScroll',
  title: 'Feature Scroll',
  icon,
  groups: G.fieldGroupComponentOptions(),
  fields: [
    ...G.group('content', [
      F.string({name: 'heading'}),
      F.string({name: 'subheading'}),
      F.image({name: 'laptopImage'}),
      F.array({
        name: 'features',
        of: [
          F.object({
            name: 'feature',
            fields: [
              F.image({name: 'icon'}),
              F.string({name: 'title'}),
              F.text({name: 'description'}),
            ],
            preview: {
              select: {
                title: 'title',
                icon: 'icon',
              },
              prepare({title, icon}) {
                return {
                  title: title || 'Feature',
                  media: icon,
                }
              },
            },
          }),
        ],
      }),
    ]),
    ...G.group('options', [
      F.string({
        name: 'variant',
        title: 'Variant',
        options: {
          list: [
            {title: 'Light', value: 'light'},
            {title: 'Dark', value: 'dark'},
          ],
        },
        initialValue: 'light',
      }),
    ]),
  ],
  preview: {
    select: {
      heading: 'heading',
      subheading: 'subheading',
      laptopImage: 'laptopImage',
      features: 'features',
    },
    prepare({heading, subheading, laptopImage, features}) {
      return {
        title: heading || 'Feature Scroll',
        subtitle: subheading || `${features?.length || 0} features`,
        media: laptopImage,
      }
    },
  },
})

