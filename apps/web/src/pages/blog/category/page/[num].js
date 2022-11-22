import React from 'react'
import getBaseUrlFromResolvedUrl from '@utils/getBaseUrlFromResolvedUrl'
import { getDoc, getAllDocs, runQueries } from '@lib'
import Archive from '@layouts/Archive'

const PaginationPage = (props) => <Archive {...props} />

export const shapeData = ([
  data,
  { docs: categories },
  { docs, pagination },
]) => [
  {
    ...data,
    docs,
    pagination,
    categories,
  },
]

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
    getDoc('pageArchive', {
      filters: [`archiveOf == "${docType}"`],
      preview,
    }),
    getAllDocs('categoryPost', {
      filters: "!(_id in path('drafts.**'))",
      preview,
    }),
    getAllDocs(docType, {
      filters: "!(_id in path('drafts.**'))",
      order: 'order(publishedDate desc)',
      currentPage: num,
      asCards: true,
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
