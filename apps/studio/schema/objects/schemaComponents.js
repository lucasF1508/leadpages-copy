import { getTemplateSchemas } from 'part:gearbox-utils/utils'
import { F } from 'part:gearbox-schema-tool/schema-builder'
import * as allComponentsSchema from '../components'

const componentsSchema = getTemplateSchemas({
  schema: allComponentsSchema,
})

export const schemaComponents = F.components(componentsSchema)
