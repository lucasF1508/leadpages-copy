import React from 'react'
import AlertBars from '@layouts/Product/AlertBars'
import { runQueries } from '@lib'

const AlertBarsPage = (props) => <AlertBars {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/alert-bars'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default AlertBarsPage
