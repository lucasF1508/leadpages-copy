import { getSchemaRegistry } from 'schema-registry'
import buildQuery from './buildQuery'

export const getQuery = ({
  schemaType,
  projections,
  params,
  pipes,
  slice,
  filters,
  order,
}) => {
  const registry = getSchemaRegistry(schemaType)

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
