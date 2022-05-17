import { BsArrowsExpand as icon } from 'react-icons/bs'
import { getTemplateSchemas } from 'part:gearbox-utils/utils'
import { F } from 'part:gearbox-schema-tool/schema-builder'
import * as allComponentsSchema from '../components'

const componentsSchema = getTemplateSchemas({
  schema: allComponentsSchema,
})

export const schemaComponents = F.array({
  icon,
  name: 'components',
  of: [
    ...componentsSchema.map(({ name, title }) =>
      F.field(name, { name, title })
    ),
  ],
})
