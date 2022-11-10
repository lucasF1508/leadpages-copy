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
    F.radio(['center', 'bottom', 'right'], {
      name: 'imageAlign',
      group: 'options',
      initialValue: 'center',
    }),
    F.radio(['small', 'medium', 'large'], {
      name: 'size',
      title: 'Hero Size',
      group: 'options',
      initialValue: 'medium',
    }),
    F.checkbox({ name: 'darkBackground', group: 'options' }),
    F.image({
      group: 'media',
      name: 'backgroundImage',
    }),
  ],
})
