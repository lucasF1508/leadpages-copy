import React from 'react'
import Legal from '@layouts/Legal'
import { runQueries } from '@lib'

const LegalPage = (props) => <Legal {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/legal'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default LegalPage
