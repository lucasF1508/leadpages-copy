import {getTemplateSchemas} from './getTemplateSchemas'

export const getTemplateTypes = (props = {}) =>
  getTemplateSchemas(props).map((template) => template.name)
