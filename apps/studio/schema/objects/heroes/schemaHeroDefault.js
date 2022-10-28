import { BsFileRichtext as icon } from 'react-icons/bs'
import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaHeroDefault = F.hero({
  name: 'heroDefault',
  title: 'Hero With Media',
  icon,
  args: {
    label: false,
    link: {
      initialValue: {
        condition: 'none',
        linkStyle: 'button',
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
