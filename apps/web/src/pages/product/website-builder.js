import React from 'react'
import WebsiteBuilder from '@layouts/Product/WebsiteBuilder'

const WebsiteBuilderPage = (props) => <WebsiteBuilder {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/website-builder'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default WebsiteBuilderPage
