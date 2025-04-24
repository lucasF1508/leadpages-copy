import * as templatesSchema from '../legacy/schema/documents/templates'

export const getTemplateSchemas = ({
  includes,
  onlyHidden = false,
  schema = templatesSchema,
  showHidden = false,
}: {includes?: string; onlyHidden?: boolean; schema?: object; showHidden?: boolean} = {}) =>
  Object.values(schema)
    .filter((template) => {
      if (!includes) return true
      const includesArray = Array.isArray(includes) ? includes : [includes]

      return includesArray.some((includesName) => template.name.includes(includesName))
    })
    .filter((template) => (onlyHidden ? template.hidden === true : template.hidden !== !showHidden))
