import { BsPlug as icon } from 'react-icons/bs'
import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaHeroIntegration = F.hero({
  name: 'heroIntegration',
  title: 'Integration Hero',
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
    F.image({
      parseType: 'backgroundImage',
      group: 'media',
      name: 'backgroundImage',
    }),
  ],
})
