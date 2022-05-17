import React from 'react'
import { getDoc, getAllDocs } from '@lib'
import Archive from '@layouts/Archive'

const ArchivePage = (props) => <Archive {...props} />

export async function getStaticProps(context) {
  const slug = 'archive'
  const docType = 'post'
  const { preview = false } = context

  const data = await getDoc('pageArchive', {
    filters: [`archiveOf == "${docType}"`],
    preview,
  })

  const { data: categories } = await getDoc('categoryPost', {
    preview,
  })

  const docs = await getAllDocs(docType, {
    order: 'order(publishedDate desc)',
    preview,
    asCards: true,
  })

  return {
    props: {
      data: {
        ...data,
        ...docs,
        categories,
      },
      preview,
      slug,
    },
  }
}

export default ArchivePage
