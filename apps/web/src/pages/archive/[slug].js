import React from 'react'
import { getDoc, getDocSlugs } from '@lib'
import { ArchiveSingle } from '@layouts/Archive'

const ArchiveSinglePage = (props) => <ArchiveSingle {...props} />

export async function getStaticProps(context) {
  const {
    params: { slug },
    preview = false,
  } = context

  const data = await getDoc('post', {
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
