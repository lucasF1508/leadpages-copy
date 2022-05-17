import React from 'react'
import { getDoc, getAllDocs } from '@lib'
import Archive from '@layouts/Archive'

const CategoryPage = (props) => <Archive {...props} />

export async function getServerSideProps(context) {
  const { preview = false, params, resolvedUrl } = context
  const { category: [category, type, num = 1] = [] } = params
  const docType = 'post'
  const [baseUrl] = resolvedUrl
    .split('/')
    .filter((path) => !/.*\[.*\].*/.test(path) && path)

  if (!category) {
    return {
      redirect: {
        destination: `/${baseUrl}`,
        permanent: false,
      },
    }
  }

  if (type === 'page' && Number(num) === 1) {
    return {
      redirect: {
        destination: `/${baseUrl}/category/${category}`,
        permanent: false,
      },
    }
  }

  const {
    data: [data],
    query,
  } = await getDoc('categoryPost', {
    preview,
    params: {
      slug: category,
    },
  })

  const {
    data: [archive],
    navigation,
    siteMeta,
  } = await getDoc('pageArchive', {
    filters: [`archiveOf == "${docType}"`],
    preview,
  })

  const docs = await getAllDocs(docType, {
    order: 'order(publishedDate desc)',
    filters: [`category->slug.current == '${category}'`],
    currentPage: parseInt(num, 10),
    asCards: true,
    preview,
  })

  const { data: categories } = await getDoc('categoryPost', {
    preview,
  })

  const hero = {
    ...(archive?.hero || {}),
    label: data?.label || data?.title || null,
    heading: data?.heading || archive?.hero?.heading || null,
    content: data?.content || archive?.hero?.content || null,
  }

  return {
    props: {
      data: {
        query,
        data: [
          {
            ...archive,
            ...docs,
            ...data,
            categories,
            hero,
          },
        ],
        navigation,
        siteMeta,
      },
      preview,
    },
  }
}

export default CategoryPage
