import React from 'react'
import Archive from '@layouts/Archive'
import { getStaticPathsParams, query, runQueries } from '@lib/queries'
import { categoryPostCountQuery } from '@lib/queries/components'
import { seoQuery } from '@lib/queries/globalQueries'
import { futurePublishedDateFilter } from '@lib/utils/filterForPublishedDate'

const CategoryPage = (props) => <Archive {...props} />

export const shapeData = ([
  settings,
  currentCategory,
  categories,
  _docs = [],
]) => {
  const { seo } = currentCategory
  const docs = _docs.map(
    ({ path, publishedDate, publisher, image, primaryCategory, title }) => ({
      path,
      publishedDate,
      publisher,
      image: image || null,
      primaryCategory,
      title,
    })
  )

  return [
    {
      settings,
      currentCategory,
      docs,
      categories,
      seo,
    },
  ]
}

export const dataShaper = (props) => shapeData(props)

export async function getStaticProps(context) {
  const { preview = false, params } = context
  const { category } = params

  const { data, queries, global } = await runQueries([
    query(
      `*[_type == "postSettings"][0]{
          ...,
          cta->,
          trendingArticles[]->,
      }`,
      {
        preview,
      }
    ),
    query(
      `*[_type == "categoryPost" && slug.current == $category][0] {
        ...,
        "slug": slug.current,
        ${seoQuery}
      }`,
      {
        preview,
        params: { category },
      }
    ),
    query(
      `*[_type == 'categoryPost'] { ..., ${categoryPostCountQuery} }`,
      {
        preview,
      }
    ),
    query(
      `*[_type == "post" && ${futurePublishedDateFilter()} && (primaryCategory->slug.current == $category || $category in secondaryCategories[]->slug.current)] | order(coalesce(publishedDate, _createdAt) desc)`,
      {
        preview,
        params: { category },
      }
    ),
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
  const paths = await getStaticPathsParams({
    types: ['categoryPost'],
    filter: `count(*[_type == 'post' && references(^._id)]) > 0`,
    key: 'category'
  })

  return {
    paths,
    fallback: false,
  }
}

export default CategoryPage
