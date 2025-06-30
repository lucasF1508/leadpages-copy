import type { Slug } from '@sanity/types'
import runQuery from './runQuery'

interface Props {
  catchAll?: false | string
  filter?: string
  key?: string
  optionalCatchAll?: false | string
  preview?: boolean
  type: string
  types: string[]
}

export type GetStaticPathParamsProps = RequireAtLeastOne<
  Props,
  'type' | 'types'
>

const getStaticPathsParams = async ({
  catchAll = false,
  filter,
  key = 'slug',
  optionalCatchAll = false,
  preview = false,
  type,
  types,
}: GetStaticPathParamsProps) => {
  const catchAllRoute = catchAll || optionalCatchAll || ''
  const docs = await runQuery(
    `*[_type in $types ${
      filter ? ` && ${filter}` : ''
    }] {"slug": slug.current,path}`,
    {
      params: {
        types: types || [type],
      },
      preview,
    }
  )

  const paths = docs
    .filter(({ slug }: { slug: Slug }) => {
      if (!slug) {
        console.error(`Slug not found on type ${type}`)
      }
      return slug
    })
    .map(({ path, slug }: { path: 'string'; slug: Slug }) => {
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
