import runQuery from './runQuery'

const getStaticPathsParams = async ({
  type,
  types,
  filter,
  key = 'slug',
  preview = false,
  catchAll = false,
  optionalCatchAll = false,
}) => {
  const catchAllRoute = catchAll || optionalCatchAll || ''
  const docs = await runQuery(
    `*[_type in $types ${
      filter ? ` && ${filter}` : ''
    }] {"slug": slug.current,path}`,
    {
      preview,
      params: {
        types: types || [type],
      },
    }
  )

  const paths = docs
    .filter(({ slug }) => {
      if (!slug) {
        console.error(`Slug not found on type ${type}`)
      }
      return slug
    })
    .map(({ slug, path }) => {
      const pathParams = path
        ?.replace(catchAllRoute, '')
        ?.split('/')
        ?.filter(Boolean)

      return {
        params: {
          [key]: catchAllRoute ? pathParams : slug,
        },
      }
    })

  return optionalCatchAll
    ? [
        ...paths,
        {
          params: {
            [key]: [''],
          },
        },
      ]
    : paths
}

export default getStaticPathsParams
