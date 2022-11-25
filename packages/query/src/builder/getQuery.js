import { getSchemaRegistry } from 'schema-registry'
import buildQuery from './buildQuery'

export const getQuery = ({
  schemaType: type,
  projections,
  params,
  pipes,
  slice,
  filters,
  order,
}) => {
  const schemaType = Array.isArray(type) ? type : [type]
  const registry = getSchemaRegistry(schemaType[0])

  return buildQuery({
    schemaType,
    params,
    projections,
    pipes,
    slice,
    filters,
    order,
    registry,
  })
}

export default getQuery
