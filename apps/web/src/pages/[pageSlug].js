import React from 'react'
import { getDoc, getDocSlugs } from '@lib'
import Page from '@layouts/Page'

const DynamicPage = (props) => <Page {...props} />

export async function getStaticProps(context) {
  const {
    params: { pageSlug: slug },
    preview = false,
  } = context

  const data = await getDoc('page', {
    preview,
    params: {
      slug,
    },
  })

  return {
    props: {
      preview,
      slug,
      data,
    },
  }
}

export async function getStaticPaths() {
  const docPaths = await getDocSlugs('page', {
    // filters: ['slug.current != "about-us"'],
  })

  const paths = docPaths.map(({ slug }) => ({
    params: {
      pageSlug: slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default DynamicPage
