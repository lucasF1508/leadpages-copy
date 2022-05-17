import { fieldsFromRegistry } from './fieldsFromRegistry'
import { projections as buildProjections } from './projections'

export const fields = (projections, registry) => {
  if (!registry && !projections) return ''

  const fields = fieldsFromRegistry(registry)

  return [
    ' {',
    fields,
    fields && projections ? ',' : '',
    buildProjections(projections, registry),
    `}`,
  ].join('')
}
