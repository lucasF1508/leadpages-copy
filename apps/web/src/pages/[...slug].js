import React from 'react'
import { getDoc, getDocSlugs, runQueries } from '@lib'
import Page from '@layouts/Page'

const DynamicPage = (props) => <Page {...props} />

export async function getStaticProps(context) {
  const { params, preview = false } = context
  const path = `/${params?.slug?.join('/')}`

  const { data, queries, global } = await runQueries(
    getDoc(['page', 'customer'], {
      preview,
      params: { path },
      projections: { 'category[]': '->' },
    })
  )

  // TODO: Add this to shape data
  const [pageData] = (data?.length && data) || []
  const { hero: heroes, options: pageOptions } = pageData || {}
  const [hero] = heroes || []

  const options = {
    ...pageData?.options,
    underlaidMenu: !!hero?.darkBackground || pageOptions?.underlaidMenu || null,
    darkHero: !!hero?.darkBackground,
  }

  return {
    props: {
      data: data && !data[0] ? [{}] : data,
      queries,
      global,
      preview,
      options,
    },
  }
}

export async function getStaticPaths() {
  const docPaths = await getDocSlugs(['page', 'customer'], {
    // filters: ['slug.current != "404"'],
  })

  const paths = docPaths.map(({ slug, path }) => ({
    params: {
      slug: path?.split('/').filter(Boolean) || slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default DynamicPage
