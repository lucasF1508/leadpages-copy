import React from 'react'
import Templates from '@layouts/Templates'

const TemplatesPage = (props) => <Templates {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/'
  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default TemplatesPage
