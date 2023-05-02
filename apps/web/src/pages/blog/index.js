import React from 'react'
import { getDoc, getAllDocs, runQueries } from '@lib'
import Archive from '@layouts/Archive'
import { categoryPostCountQuery } from '@lib/feeds/utils/sanity/feedQueries'

const ArchivePage = (props) => <Archive {...props} hasFeaturedPost={true} />

export const shapeData = ([
  data,
  { docs: categories },
  { docs: _docs },
  blogData,
]) => {
  const { seo } = blogData
  // TODO: Audit getAllDocs, getDocPagination, getDocSlice
  // Trim data
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
      settings: data,
      categories,
      docs,
      seo,
    },
  ]
}

export const exporter = (props) => shapeData(props)

export async function getStaticProps(context) {
  const docType = 'post'
  const { preview = false } = context

  // TODO: Combine 'postSettings' and 'pageArchive' queries
  // TODO: Grab 'perPage' from here so that we don't have to get it again later
  const { data, global, queries } = await runQueries([
    getDoc('postSettings', {}),
    getAllDocs('categoryPost', {
      filters: "!(_id in path('drafts.**'))",
      projections: `${categoryPostCountQuery}`,
      hasPagination: false,
      preview,
    }),
    getAllDocs(docType, {
      filters: "!(_id in path('drafts.**'))",
      order: 'order(publishedDate desc)',
      offsetEnd: 1,
      paginationHasFeatured: true,
      hasPagination: false,
      preview,
    }),
    getDoc('pageArchive', {
      filters: [`archiveOf == "${docType}"`],
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

export default ArchivePage
