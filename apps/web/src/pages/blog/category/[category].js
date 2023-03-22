import React from 'react'
import getBaseUrlFromResolvedUrl from '@utils/getBaseUrlFromResolvedUrl'
import { getDoc, getAllDocs, runQueries } from '@lib'
import Archive from '@layouts/Archive'
import { categoryPostCountQuery } from '@lib/feeds/utils/sanity/feedQueries'

const CategoryPage = (props) => <Archive {...props} />

export const shapeData = ([
  settings,
  currentCategory,
  { docs: categories },
  { docs: _docs, pagination },
]) => {
  const docs = _docs.map(
    ({ path, publishedDate, publisher, image, primaryCategory, title }) => ({
      path,
      publishedDate,
      publisher,
      image,
      primaryCategory,
      title,
    })
  )

  return [
    {
      settings,
      currentCategory,
      docs,
      pagination,
      categories,
    },
  ]
}

export const dataShaper = (props) => shapeData(props)

export async function getServerSideProps(context) {
  const docType = 'post'
  const { preview = false, params, resolvedUrl } = context
  const { category } = params

  const baseUrl = getBaseUrlFromResolvedUrl({
    resolvedUrl,
    params,
  })

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
      filters: [
        `(primaryCategory->slug.current == '${category}' || '${category}' in secondaryCategories[]->slug.current)`,
        "!(_id in path('drafts.**'))",
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

export default CategoryPage
