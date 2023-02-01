import React from 'react'
import WebsiteBuilder from '@layouts/Product/WebsiteBuilder'
import { runQueries } from '@lib'

const WebsiteBuilderPage = (props) => <WebsiteBuilder {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/website-builder'

  const options = { hideBar: true }
  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      options,
      global,
    },
  }
}

export default WebsiteBuilderPage
