import React from 'react'
import { ArchiveSearch } from '@layouts/Archive'
import { categoryPostCountQuery } from '@lib/queries/components'
import { query, runQueries } from '@lib/queries'
import { seoQuery } from '@lib/queries/globalQueries'

const SearchPage = (props) => <ArchiveSearch {...props} />

export const shapeData = ([data, categories, blogData]) => [
  {
    settings: data,
    categories,
    seo: blogData?.seo,
  },
]

export const exporter = (props) => shapeData(props)

export async function getStaticProps(context) {
  const docType = 'post'
  const { preview = false } = context

  const { data, global, queries } = await runQueries([
    query(`*[_type == 'postSettings'][0] {
      ...,
      cta->,
      trendingArticles[]->,
    }`, {preview}),
    query(`*[_type == 'categoryPost'] { ..., ${categoryPostCountQuery} }`, {preview}),
    query(`*[_type == 'pageArchive' && archiveOf == "${docType}"][0] {..., ${seoQuery}}`, {preview}),
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

export default SearchPage
