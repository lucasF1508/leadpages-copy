import React from 'react'
import Templates from '@layouts/Templates'

const TemplatesPage = (props) => <Templates {...props} />

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const { preview = false, params } = context
  const slug = '/templates'
  const route = params.templates || []
  const isPreviewPage = route?.includes('preview')
  const data = { isPreviewPage }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default TemplatesPage
