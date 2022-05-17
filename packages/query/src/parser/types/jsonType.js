import { getParserConfig } from '../config'
import { object } from './object'
import { array } from './array'
import { string } from './string'

const { filter = () => false } = getParserConfig('jsonType')

export const jsonType = (name, type) => {
  const result = filter(name, type)
  if (result) {
    return result
  }

  if (['object'].includes(type?.jsonType) && type?.fields) {
    return object(name, type)
  }

  if (['array'].includes(type?.jsonType) && type?.of) {
    return array(name, type)
  }

  return string(name, type)
}
