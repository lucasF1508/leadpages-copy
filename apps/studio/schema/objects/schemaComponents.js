import { getTemplateSchemas } from 'part:gearbox-utils/utils'
import { F } from 'part:gearbox-schema-tool/schema-builder'
import * as pageComponentsSchema from '../components/page'

const componentsSchema = getTemplateSchemas({
  schema: pageComponentsSchema,
})

export const schemaComponents = F.components(componentsSchema)
