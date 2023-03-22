import React from 'react'
import getBaseUrlFromResolvedUrl from '@utils/getBaseUrlFromResolvedUrl'
import { getDoc, getAllDocs, runQueries } from '@lib'
import Archive from '@layouts/Archive'
import { categoryPostCountQuery } from '@lib/feeds/utils/sanity/feedQueries'

const PaginationPage = (props) => <Archive {...props} />

export const shapeData = ([
  data,
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
      settings: data,
      categories,
      docs,
      pagination,
    },
  ]
}

export const exporter = (props) => shapeData(props)

export async function getServerSideProps(context) {
  const { preview = false, params, resolvedUrl } = context
  const docType = 'post'
  const { num: [num] = [] } = params
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

  const { data, queries, global } = await runQueries([
    getDoc('postSettings', {}),
    getAllDocs('categoryPost', {
      filters: "!(_id in path('drafts.**'))",
      projections: `${categoryPostCountQuery}`,
      preview,
    }),
    getAllDocs(docType, {
      filters: "!(_id in path('drafts.**'))",
      order: 'order(publishedDate desc)',
      preview,
      currentPage: num,
      offsetStart: 1,
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
