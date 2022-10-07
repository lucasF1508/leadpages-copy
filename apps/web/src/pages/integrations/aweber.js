import React from 'react'
import Aweber from '@layouts/Integrations/Aweber'

const AweberPage = (props) => <Aweber {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/aweber'

  const options = { headerBkgColor: '$grayAlt' }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default AweberPage
