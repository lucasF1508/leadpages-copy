import GearboxImporter from 'part:gearbox-importer/gearbox-importer'
import { BsCardText as icon } from 'react-icons/bs'

export const schemaImporter = {
  icon,
  title: 'Importer',
  name: 'gearboxImporter',
  type: 'object',
  inputComponent: GearboxImporter,
  options: {},
  fields: [
    {
      type: 'string',
      name: 'Tester',
    },
  ],
}

export default schemaImporter
