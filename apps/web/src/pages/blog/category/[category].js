import React from 'react'
import getBaseUrlFromResolvedUrl from '@utils/getBaseUrlFromResolvedUrl'
import { getDoc, getAllDocs, runQueries, getDocSlugs } from '@lib'
import Archive from '@layouts/Archive'
import { categoryPostCountQuery } from '@lib/feeds/utils/sanity/feedQueries'

const CategoryPage = (props) => <Archive {...props} />

export const shapeData = ([
  settings,
  currentCategory,
  { docs: categories },
  { docs: _docs, pagination },
]) => {
  const { seo } = currentCategory
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
      seo,
    },
  ]
}

export const dataShaper = (props) => shapeData(props)

export async function getStaticProps(context) {
  const docType = 'post'
  const { preview = false, params } = context
  const { category } = params

  const { data, queries, global } = await runQueries([
    getDoc('postSettings', {}),
    getDoc('categoryPost', {
      filters: `slug.current == '${category}'`,
      projections: '"slug": slug.current',
    }),
    getAllDocs('categoryPost', {
      filters: "!(_id in path('drafts.**'))",
      projections: `${categoryPostCountQuery}`,
      hasPagination: false,
      preview,
    }),
    getAllDocs(docType, {
      order: 'order(publishedDate desc)',
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

export async function getStaticPaths() {
  const categoryPaths = await getDocSlugs(['categoryPost'], {
    filters: `count(*[_type == 'post' && references(^._id)]) > 0`,
  })

  const paths = categoryPaths.map(({ slug: category }) => ({
    params: { category },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default CategoryPage
