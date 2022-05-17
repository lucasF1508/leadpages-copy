import * as fieldTypes from './types'

export const parseField = ({ name, type }) => {
  const { name: fieldType, parseType } = type
  const parserType = fieldTypes[parseType || fieldType] || fieldTypes.jsonType

  return parserType(name, type)
}

export const parser = (fields) => fields.map((field) => parseField(field))
export default parser
