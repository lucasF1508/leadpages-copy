import React from 'react'
import Wordpress from '@layouts/Integrations/Wordpress'

const WordpressPage = (props) => <Wordpress {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/wordpress'

  const data = { headerBkgColor: '$grayAlt' }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default WordpressPage
