import React from 'react'
import { getAllDocs, getDoc, getDocSlugs, runQueries } from '@lib'
import { ArchiveSingle } from '@layouts/Archive'
import { categoryPostCountQuery } from '@lib/feeds/utils/sanity/feedQueries'

const ArchiveSinglePage = (props) => <ArchiveSingle {...props} />

export const shapeData = ([data, { docs: categories }]) => [
  {
    ...data,
    categories,
  },
]

export const exporter = (props) => shapeData(props)

export async function getStaticProps(context) {
  const { params, preview = false } = context

  const { data, queries, global } = await runQueries([
    getDoc('post', {
      preview,
      params,
      projections: `"settings": *[_type == 'postSettings'][0] {
        ...,
        relatedArticlesImage {
          ...,
          asset->
        },
        defaultCtaImage {
          ...,
          asset->
        },
        trendingArticles[]-> {
            ...,
            image {
              ...,
              asset->
            }
         }
      }`,
    }),
    getAllDocs('categoryPost', {
      filters: ["!(_id in path('drafts.**'))"],
      projections: `${categoryPostCountQuery}`,
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
  const docPaths = await getDocSlugs('post', {
    filters: ['isExternal != true', 'redirectToLegacy != true'],
    order: 'order(publishedDate desc, _createdAt desc)',
  })

  const paths = docPaths.map(({ slug }) => ({
    params: {
      slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default ArchiveSinglePage
