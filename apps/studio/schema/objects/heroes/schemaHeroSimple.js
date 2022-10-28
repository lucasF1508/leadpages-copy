import { BsFileText as icon } from 'react-icons/bs'
import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaHeroSimple = F.hero({
  name: 'heroSimple',
  title: 'Hero Simple',
  icon,
  args: {
    link: {
      initialValue: {
        condition: 'none',
        linkStyle: 'button',
      },
    },
    media: false,
  },
  fields: [],
})
