import React from 'react'
import { getDoc, getAllDocs, runQueries } from '@lib'
import Archive from '@layouts/Archive'
import { categoryPostCountQuery } from '@lib/feeds/utils/sanity/feedQueries'

const ArchivePage = ({ filterTags, ...props }) => {
  const filters = filterTags.map(({ value }) => `!('${value}' in tags[].value)`)
  return <Archive {...props} hasFeaturedPost={true} filters={filters} />
}

export const shapeData = ([
  data,
  { docs: categories },
  { docs: _docs },
  blogData,
]) => {
  const { seo, tags: filterTags } = blogData
  // TODO: Audit getAllDocs, getDocPagination, getDocSlice
  // Trim data

  const docs = _docs.map(
    ({
      path,
      publishedDate,
      publisher,
      image,
      primaryCategory,
      title,
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

  const {
    data: { tags: filterTags },
  } = await getDoc('pageArchive', {
    filters: [`archiveOf == "${docType}"`],
    preview,
  })

  const filters =
    filterTags?.map(({ value }) => `!('${value}' in tags[].value)`) || []

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
      filters: ["!(_id in path('drafts.**'))", ...filters],
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
