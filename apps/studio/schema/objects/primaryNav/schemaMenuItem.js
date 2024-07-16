import { F } from 'part:gearbox-schema-tool/schema-builder'
import { FiLink2 as icon } from 'react-icons/fi'

export const schemaMenuItem = F.object({
  icon,
  name: 'menuItem',
  fields: [
    F.array({
      name: 'links',
      title: 'Link',
      of: [
        F.link({
          args: {
            linkStyle: false,
            file: false,
            hasIcon: false,
            target: false,
          },
        }),
      ],
      validation: (Rule) => Rule.max(1),
    }),
    F.string({
      name: 'pillContent',
      description:
        'This will add featured text inside a purple pill beside the link title',
    }),
    F.text({
      name: 'secondaryText',
      title: 'Description',
      description: 'Used to add text below the link label',
      rows: 2,
    }),
    F.image({ name: 'icon' }),
  ],
  preview: {
    select: {
      title: 'links[0].label',
      subTitle: 'secondaryText',
      image: 'icon',
    },
    prepare: ({ title, subTitle, image }) => ({
      title,
      subTitle,
      media: image || icon,
    }),
  },
})
