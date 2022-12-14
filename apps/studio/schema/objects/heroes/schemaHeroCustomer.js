import { BsFilePerson as icon } from 'react-icons/bs'
import { F } from 'part:gearbox-schema-tool/schema-builder'

export const schemaHeroCustomer = F.hero({
  name: 'heroCustomer',
  title: 'Customer Hero',
  icon,
  args: {
    label: false,
    link: false,
    align: false,
  },
  fields: [],
})
