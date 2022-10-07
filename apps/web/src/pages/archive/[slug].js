import React from 'react'
import { getDoc, getDocSlugs, runQueries } from '@lib'
import { ArchiveSingle } from '@layouts/Archive'

const ArchiveSinglePage = (props) => <ArchiveSingle {...props} />

export async function getStaticProps(context) {
  const { params, preview = false } = context

  const { data, queries, global } = await runQueries(
    getDoc('post', {
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
  const docPaths = await getDocSlugs('post', {
    filters: ['isExternal != true'],
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
