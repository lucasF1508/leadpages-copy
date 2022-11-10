import React from 'react'
import FAQ from '@layouts/FAQ'

const FAQPage = (props) => <FAQ {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/faq'

  const options = { underlaidMenu: true }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default FAQPage
