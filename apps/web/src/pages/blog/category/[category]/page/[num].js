import React from 'react'
import getBaseUrlFromResolvedUrl from '@utils/getBaseUrlFromResolvedUrl'
import { getDoc, getAllDocs, runQueries } from '@lib'
import Archive from '@layouts/Archive'
import { categoryPostCountQuery } from '@lib/feeds/utils/sanity/feedQueries'

const PaginationPage = (props) => <Archive {...props} />

export const shapeData = ([
  settings,
  currentCategory,
  { docs: categories },
  { docs, pagination },
]) => [
  {
    settings,
    currentCategory,
    docs,
    pagination,
    categories,
  },
]

export const exporter = (props) => shapeData(props)

export async function getServerSideProps(context) {
  const { preview = false, params, resolvedUrl } = context
  const docType = 'post'
  const { num, category } = params
  const baseUrl = getBaseUrlFromResolvedUrl({
    resolvedUrl,
    params,
  })

  if (!num) {
    return {
      redirect: {
        destination: `/${baseUrl}`,
        permanent: false,
      },
    }
  }

  if (!category) {
    return {
      redirect: {
        destination: `/${baseUrl}`,
        permanent: false,
      },
    }
  }

  const { data, queries, global } = await runQueries([
    getDoc('postSettings', {}),
    getDoc('categoryPost', {
      filters: `slug.current == '${category}'`,
    }),
    getAllDocs('categoryPost', {
      filters: "!(_id in path('drafts.**'))",
      projections: `${categoryPostCountQuery}`,
      preview,
    }),
    getAllDocs(docType, {
      order: 'order(publishedDate desc)',
      currentPage: num,
      filters: [
        "!(_id in path('drafts.**'))",
        `(primaryCategory->slug.current == '${category}' || '${category}' in secondaryCategories[]->slug.current)`,
      ],
      preview,
    }),
  ])

  return {
    props: {
      data: shapeData(data),
      queries,
      global,
      preview,
    },
  }
}

export default PaginationPage
