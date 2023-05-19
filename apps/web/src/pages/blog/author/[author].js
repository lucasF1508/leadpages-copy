import React from 'react'
import { getDoc, getAllDocs, runQueries, getDocSlugs } from '@lib'
import { ArchiveAuthor } from '@layouts/Archive'

const AuthorPage = (props) => <ArchiveAuthor {...props} />

export const shapeData = ([publisher, { docs: _docs, pagination }]) => {
  const { seo } = publisher
  const docs = _docs.map(
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
      image,
      primaryCategory,
      title,
    })
  )

  return [
    {
      publisher,
      docs,
      pagination,
      seo,
    },
  ]
}

export const dataShaper = (props) => shapeData(props)

export async function getStaticProps(context) {
  const docType = 'post'
  const { preview = false, params } = context
  const { author } = params

  const { data, queries, global } = await runQueries([
    getDoc('publisher', {
      filters: `slug.current == '${author}'`,
      projections: '"slug": slug.current',
    }),
    getAllDocs(docType, {
      order: 'order(publishedDate desc)',
      filters: [
        "!(_id in path('drafts.**'))",
        `(publisher->slug.current == '${author}')`,
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
  const publisherPaths = await getDocSlugs(['publisher'], {
    filters: `count(*[_type == 'post' && references(^._id)]) > 0`,
  })

  const paths = publisherPaths.map(({ slug: author }) => ({
    params: { author },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default AuthorPage
