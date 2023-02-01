import React from 'react'
import Press from '@layouts/Press'
import { runQueries } from '@lib'

const PressPage = (props) => <Press {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/press'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default PressPage
