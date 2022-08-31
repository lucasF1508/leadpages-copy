import React from 'react'
import Integrations from '@layouts/Integrations'

const IntegrationsPage = (props) => <Integrations {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations'

  const data = { underlaidMenu: true }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default IntegrationsPage
