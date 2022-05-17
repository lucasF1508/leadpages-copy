import * as builder from './types'

export const buildQuery = ({
  schemaType,
  projections,
  params,
  slice,
  pipes,
  filters,
  order = 'order(_updatedAt desc)',
  registry,
}) =>
  [
    '*',
    builder.selectors(schemaType, params, filters),
    builder.pipes(pipes),
    builder.order(order),
    builder.slice(slice),
    builder.fields(projections, registry),
  ]
    .join('')
    .replace(/\s+/g, ' ')
    .trim()

export default buildQuery
