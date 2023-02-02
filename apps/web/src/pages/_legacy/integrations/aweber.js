import React from 'react'
import Aweber from '@layouts/Integrations/Aweber'
import { runQueries } from '@lib'

const AweberPage = (props) => <Aweber {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/aweber'

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

export default AweberPage
