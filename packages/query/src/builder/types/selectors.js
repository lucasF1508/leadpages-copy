import isObject from 'lodash/isObject'
import { schemaTypes as buildSchemaTypes } from './schemaTypes'
import { filters as buildFilters } from './filters'

export const selectors = (schemaType, params, filters) => {
  if (!schemaType && !params && !filters) {
    return ''
  }

  const slugFilter =
    isObject(params) && 'slug' in params ? 'slug.current == $slug' : ''

  return [
    `[`,
    buildSchemaTypes(schemaType),
    buildFilters(filters, ' && ', !!schemaType),
    buildFilters(slugFilter),
    `]`,
  ].join('')
}
