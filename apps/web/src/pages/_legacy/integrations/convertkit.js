import React from 'react'
import ConvertKit from '@layouts/Integrations/ConvertKit'
import { runQueries } from '@lib'

const ConvertKitPage = (props) => <ConvertKit {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/convertkit'

  const options = { headerBkgColor: '$grayAlt' }
  const { global } = await runQueries([])

  return {
    props: {
      options,
      slug,
      preview,
      global,
    },
  }
}

export default ConvertKitPage
