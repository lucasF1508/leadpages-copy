import {RiLayoutBottom2Line as icon, RiNavigationLine} from 'react-icons/ri'
import {F} from '@/schema/tool'

export const schemaFooter = {
  icon,
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    F.array({
      name: 'menu',
      description:
        'Dynamic navigation options for site footer. Leave blank to default to legacy footer.',
      validation: (Rule) => Rule.max(4),
      of: [
        F.object({
          icon: RiNavigationLine,
          fields: [
            F.string({
              name: 'heading',
              validation: (Rule) => Rule.required(),
            }),
            F.links(
              {
                validation: (Rule) => Rule.required().min(1),
              },
              {
                args: {linkStyle: false, hasIcon: false},
                required: true,
              }
            ),
          ],
        }),
      ],
    }),
  ],
}
