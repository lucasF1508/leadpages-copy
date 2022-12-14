import React from 'react'
import AlertBars from '@layouts/Product/AlertBars'

const AlertBarsPage = (props) => <AlertBars {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/alert-bars'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default AlertBarsPage
