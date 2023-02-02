import React from 'react'
import Careers from '@layouts/Careers'
import { runQueries } from '@lib'

const CareersPage = (props) => <Careers {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/careers'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default CareersPage
