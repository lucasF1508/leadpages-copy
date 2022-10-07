import React from 'react'
import getBaseUrlFromResolvedUrl from '@utils/getBaseUrlFromResolvedUrl'
import { getDoc, getAllDocs, runQueries } from '@lib'
import Archive from '@layouts/Archive'

const CategoryPage = (props) => <Archive {...props} />

export const shapeData = ([
  data,
  archive,
  { docs: categories },
  { docs, pagination },
]) => {
  const hero = {
    ...(archive?.hero || {}),
    label: data?.label || data?.title || null,
    heading: data?.heading || archive?.hero?.heading || null,
    content: data?.content || archive?.hero?.content || null,
  }

  return [
    {
      ...archive,
      ...data,
      docs,
      pagination,
      categories,
      hero,
    },
  ]
}

export const dataShaper = (props) => shapeData(props)

export async function getServerSideProps(context) {
  const docType = 'post'
  const { preview = false, params, resolvedUrl } = context
  const { category: [category, type, num = 1] = [] } = params
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

  if (type === 'page' && Number(num) === 1) {
    return {
      redirect: {
        destination: `/${baseUrl}/category/${category}`,
        permanent: false,
      },
    }
  }

  const { data, queries, global } = await runQueries([
    getDoc('categoryPost', {
      preview,
      params: {
        slug: category,
      },
    }),
    getDoc('pageArchive', {
      filters: [`archiveOf == "${docType}"`],
      preview,
    }),
    getAllDocs('categoryPost', {
      filters: "!(_id in path('drafts.**'))",
      preview,
    }),
    getAllDocs(docType, {
      order: 'order(publishedDate desc)',
      filters: [
        `category->slug.current == '${category}'`,
        "!(_id in path('drafts.**'))",
      ],
      currentPage: parseInt(num, 10),
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

export default CategoryPage
