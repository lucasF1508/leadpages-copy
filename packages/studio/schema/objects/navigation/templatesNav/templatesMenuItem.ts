import {F, G} from '@/legacy/schema/tool'
import {FiLink2 as icon} from 'react-icons/fi'

export const schemaTemplateMenuItem = F.object({
  icon,
  name: 'templateMenuItem',
  groups: [G.define('content'), G.define('image')],
  fields: [
    ...G.group('content', [
      F.array({
        name: 'links',
        title: 'Link',
        of: [
          F.link({
            args: {
              linkStyle: false,
              file: false,
              target: false,
            },
          }),
        ],
        validation: (Rule) => Rule.max(1),
      }),
      F.text({
        name: 'secondaryText',
        title: 'Description',
        description: 'Used to add text below the link label',
        rows: 2,
      }),
    ]),
    ...G.group('image', [F.image({name: 'templateImage'})]),
  ],
  preview: {
    select: {
      title: 'links[0].label',
      subTitle: 'secondaryText',
      image: 'templateImage',
    },
    prepare: ({title, subTitle, image}) => ({
      title,
      subTitle,
      media: image || icon,
    }),
  },
})
