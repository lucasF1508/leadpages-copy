import React from 'react'
import { ArchiveSingle } from '@layouts/Archive'
import { getStaticPathsParams, query, runQueries } from '@lib/queries'
import { categoryPostCountQuery } from '@lib/queries/components'
import { contentQuery } from '@lib/queries/components'
import { seoQuery } from '@lib/queries/globalQueries'

const ArchiveSinglePage = (props) => <ArchiveSingle {...props} />

export const shapeData = ([data, categories]) => [
  {
    ...data,
    categories,
  },
]

export const exporter = (props) => shapeData(props)

const types = ['post']

export async function getStaticProps(context) {
  const { params, preview = false } = context
  const {slug} = params

  const { data, queries, global } = await runQueries(
    [
      query(
        `*[_type in $types && slug.current == $slug] | order(_updatedAt desc) [0]{
            ...,
            ${contentQuery},
            relatedArticles[]->,
            publisher->,
            primaryCategory-> {
              ...,
              "url": path
            },
            secondaryCategories[]->, 
            "settings": *[_type == 'postSettings'][0] {
              ...,
              cta->,
              trendingArticles[]->
            },
            ${seoQuery}
          }`,
        {
          params: {
            slug,
            types,
          },
          preview,
        }
      ),
      query(
        `*[_type == "categoryPost"] | order(lower(title) asc) {
          ...,
          ${categoryPostCountQuery}
        }`,
        {
          preview,
        }
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

export async function getStaticPaths() {
  const paths = await getStaticPathsParams({
    filter: 'isExternal != true && redirectToLegacy != true',
    types,
  })

  return {
    paths,
    fallback: false,
  }
}

export default ArchiveSinglePage