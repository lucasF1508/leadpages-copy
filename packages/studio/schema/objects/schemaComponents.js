import {getTemplateSchemas} from '@/utils'
import {F} from '@/schema/tool'
import * as pageComponentsSchema from '../components/page'

const componentsSchema = getTemplateSchemas({
  schema: pageComponentsSchema,
})

export const schemaComponents = F.array({
  name: 'components',
  of: componentsSchema,
})
