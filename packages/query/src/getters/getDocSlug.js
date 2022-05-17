import getDocSlugs from './getDocSlugs'

export const getDocSlug = async (
  type = 'page',
  { params = { slug: null } } = {}
) =>
  getDocSlugs(type, {
    params,
    slice: 0,
  })

export default getDocSlug
