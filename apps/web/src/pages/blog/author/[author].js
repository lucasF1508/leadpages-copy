import React from 'react'
import { ArchiveAuthor } from '@layouts/Archive'
import { getStaticPathsParams, query, runQueries } from '@lib/queries'
import { seoQuery } from '@lib/queries/globalQueries'
import { futurePublishedDateFilter } from '@lib/utils/filterForPublishedDate'

const AuthorPage = (props) => <ArchiveAuthor {...props} />

export const shapeData = ([publisher, _docs]) => {
  const { seo } = publisher || {}

  const docs = _docs?.map(
    ({
      path,
      publishedDate,
      publisher: author,
      image,
      primaryCategory,
      title,
    }) => ({
      path,
      publishedDate,
      author,
      image: image || null,
      primaryCategory,
      title,
    })
  )

  return [
    {
      publisher,
      docs,
      seo,
    },
  ]
}

export const dataShaper = (props) => shapeData(props)

export async function getStaticProps(context) {
  const { preview = false, params } = context
  const { author } = params

  const { data, queries, global } = await runQueries([
    query(`*[_type == 'publisher' && slug.current == '${author}'][0]{
      ...,
      "slug": slug.current,
      ${seoQuery}
    }`),
    query(`*[_type == 'post' && (publisher->slug.current == '${author}') && ${futurePublishedDateFilter()}] | order(publishedDate desc)`, {preview}),
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
    types: ['publisher'],
    filter: `count(*[_type == 'post' && references(^._id)]) > 0`,
    key: 'author'
  })

  return {
    paths,
    fallback: false,
  }
}

export default AuthorPage
