import { AiOutlineHome as icon } from 'react-icons/ai'
import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaHeroHome = F.hero({
  name: 'heroHome',
  title: 'Home Hero',
  icon,
  args: {
    label: false,
    link: {
      initialValue: {
        condition: 'none',
        linkStyle: 'button',
        linkSize: 'large',
      },
    },
  },
  fields: [
    F.string({
      name: 'spacing',
      options: {
        list: [
          {
            title: 'Loose',
            value: 'loose',
          },
          {
            title: 'Tight',
            value: 'tight',
          },
        ],
      },
      initialValue: 'tight',
      group: 'options',
    }),
    F.radio(['top', 'center', 'bottom'], {
      name: 'imageAlign',
      group: 'options',
      initialValue: 'bottom',
      hidden: ({ parent }) => parent?.spacing !== 'tight',
    }),
    F.checkbox({ name: 'hasRadialGradients', group: 'options' }),
  ],
})
