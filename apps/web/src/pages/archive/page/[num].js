import React from 'react'
import { getDoc, getAllDocs } from '@lib'
import Archive from '@layouts/Archive'

const PaginationPage = (props) => <Archive {...props} />

export async function getServerSideProps(context) {
  const { preview = false, params, resolvedUrl } = context
  const docType = 'post'
  const { num: [num] = [] } = params

  if (!num) {
    const [baseUrl] = resolvedUrl
      .split('/')
      .filter((path) => !/.*\[.*\].*/.test(path) && path)

    return {
      redirect: {
        destination: `/${baseUrl}`,
        permanent: false,
      },
    }
  }

  const {
    data: [archive],
    query,
    navigation,
    siteMeta,
  } = await getDoc('pageArchive', {
    filters: [`archiveOf == "${docType}"`],
    preview,
  })

  const { data: categories } = await getDoc('categoryPost', {
    preview,
  })

  const docs = await getAllDocs(docType, {
    order: 'order(publishedDate desc)',
    currentPage: num,
    asCards: true,
    preview,
  })

  return {
    props: {
      data: {
        query,
        data: [
          {
            ...archive,
            ...docs,
            categories,
          },
        ],
        navigation,
        siteMeta,
      },
      preview,
    },
  }
}

export default PaginationPage
