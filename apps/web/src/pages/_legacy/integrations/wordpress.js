import React from 'react'
import Wordpress from '@layouts/Integrations/Wordpress'
import { runQueries } from '@lib'

const WordpressPage = (props) => <Wordpress {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/wordpress'

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

export default WordpressPage
