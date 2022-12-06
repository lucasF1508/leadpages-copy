import { AiOutlineHome as icon } from 'react-icons/ai'
import { F, G } from 'part:gearbox-schema-tool/schema-builder'

export const schemaHeroHome = F.hero({
  name: 'heroHome',
  title: 'Home Hero',
  icon,
  args: {
    align: false,
    label: false,
    link: {
      initialValue: {
        condition: 'none',
        linkStyle: 'button',
      },
    },
  },
  fields: [...G.group('links', [F.link({ name: 'watchVideoLink' })])],
})
