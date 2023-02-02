import React from 'react'
import FAQ from '@layouts/FAQ'
import { runQueries } from '@lib'

const FAQPage = (props) => <FAQ {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/faq'

  const options = { underlaidMenu: true }
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

export default FAQPage
