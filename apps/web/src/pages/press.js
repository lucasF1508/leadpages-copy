import React from 'react'
import Press from '@layouts/Press'

const PressPage = (props) => <Press {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/press'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default PressPage
