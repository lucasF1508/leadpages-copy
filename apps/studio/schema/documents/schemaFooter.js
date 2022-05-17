import { RiLayoutBottom2Line as icon } from 'react-icons/ri'
import { F, FS, P } from 'part:gearbox-schema-tool/schema-builder'

export const schemaFooter = {
  icon,
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    F.text({ name: 'footerContent', title: 'Content' }),
    F.multiReference('navigation', { name: 'navigations' }),
  ],
}
