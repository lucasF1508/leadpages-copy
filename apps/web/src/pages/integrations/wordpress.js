import React from 'react'
import Wordpress from '@layouts/Integrations/Wordpress'

const WordpressPage = (props) => <Wordpress {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/wordpress'

  const options = { headerBkgColor: '$grayAlt' }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default WordpressPage
