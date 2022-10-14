import React from 'react'
import { getDoc, getDocSlugs, runQueries } from '@lib'
import Page from '@layouts/Page'

const DynamicPage = (props) => <Page {...props} />

export async function getStaticProps(context) {
  const { params, preview = false } = context

  const { data, queries, global } = await runQueries(
    getDoc('page', {
      preview,
      params,
    })
  )

  return {
    props: {
      data,
      queries,
      global,
      preview,
    },
  }
}

export async function getStaticPaths() {
  const docPaths = await getDocSlugs('page', {
    // filters: ['slug.current != "404"'],
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

export default DynamicPage
