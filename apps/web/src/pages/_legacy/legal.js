import React from 'react'
import Legal from '@layouts/Legal'

const LegalPage = (props) => <Legal {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/legal'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default LegalPage
