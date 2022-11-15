import * as fieldTypes from './types'
import { getParserConfig } from './config'

const custom = getParserConfig('custom')

export const parseField = ({ name, type }) => {
  const { name: fieldType, parseType } = type
  const customParser = custom[parseType || fieldType]
  const parserType =
    customParser || fieldTypes[parseType || fieldType] || fieldTypes.jsonType

  return parserType(name, type)
}

export const parser = (fields) => fields.map((field) => parseField(field))
export default parser
