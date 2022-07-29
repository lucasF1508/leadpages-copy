import React from 'react'
import WebsiteBuilder from '@layouts/Product/WebsiteBuilder'

const WebsiteBuilderPage = (props) => <WebsiteBuilder {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/website-builder'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default WebsiteBuilderPage
