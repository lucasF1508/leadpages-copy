import { getTemplateTypes } from 'part:@gearbox-built/studio/config'
import { F } from 'part:gearbox-schema-tool/schema-builder'

const pageTemplates = getTemplateTypes()

export const schemaLink = F.link(pageTemplates)
