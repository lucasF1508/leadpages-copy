import buildQuery from '../builder/buildQuery'
import runQuery from './runQuery'

export const getDocSlugs = async (
  schemaType,
  {
    projections = {},
    params,
    slice,
    pipes,
    filters,
    order = 'order(order asc, _createdAt desc)',
  } = {}
) => {
  const query = buildQuery({
    schemaType,
    projections: {
      slug: 'slug.current',
      path: true,
      url: 'path',
      ...projections,
    },
    params,
    slice,
    pipes,
    filters,
    order,
  })

  return (await runQuery(query, params)) || []
}

export default getDocSlugs
