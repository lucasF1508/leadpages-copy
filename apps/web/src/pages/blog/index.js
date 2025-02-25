import React from 'react'
import { query, runQueries, runQuery } from '@lib/queries'
import Archive from '@layouts/Archive'
import { categoryPostCountQuery } from '@lib/queries/components'
import { futurePublishedDateFilter } from '@lib/utils/filterForPublishedDate'
import { seoQuery } from '@lib/queries/globalQueries'

const ArchivePage = ({ filterTags, ...props }) => {
  const filters = filterTags?.map(
    ({ value }) => `!('${value}' in tags[].value)`
  )

  return <Archive {...props} hasFeaturedPost={true} filters={filters} />
}

export const shapeData = ([
  data,
  categories,
  _docs,
  blogData,
]) => {
  const { seo, tags: filterTags } = blogData

  const docs = _docs.map(
    ({
      path = '',
      publishedDate,
      publisher = {},
      image = {},
      primaryCategory,
      title = '',
      _id,
    }) => ({
      path,
      publishedDate,
      publisher,
      image,
      primaryCategory,
      title,
      _id,
    })
  )

  return [
    {
      settings: data,
      categories,
      docs,
      seo,
      filterTags,
    },
  ]
}

export const exporter = (props) => shapeData(props)

export async function getStaticProps(context) {
  const docType = 'post'
  const { preview = false } = context

  const { tags: filterTags } = await runQuery(`*[_type == "pageArchive" && archiveOf == "${docType}"][0]`)

  const filters =
    filterTags?.map(({ value }) => `!('${value}' in tags[].value)`) || []

  const { data, global, queries } = await runQueries(
    [
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
        `*[_type == "categoryPost"] {
          ...,
          ${categoryPostCountQuery}
        }`,
        {
          preview,
        }
      ),
      query(
        `*[_type == "${docType}" && ${futurePublishedDateFilter()} && ${filters.join('&&')}] | order(coalesce(publishedDate, _createdAt) desc) {
            ...,
            relatedArticles[]->,
            publisher->,
            primaryCategory-> {
              ...,
              "url": path
            },
            secondaryCategories[]->,
        }`,
        {
          preview,
        }
      ),  
      query(
        `*[_type == "pageArchive" && archiveOf == "${docType}"][0] {
          ...,
          ${seoQuery}
        }`
      ),
    ],
  )

  return {
    props: {
      data: shapeData(data),
      queries,
      global,
      preview,
    },
  }
}

export default ArchivePage
