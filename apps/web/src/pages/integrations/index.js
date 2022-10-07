import React from 'react'
import Integrations from '@layouts/Integrations'

const IntegrationsPage = (props) => <Integrations {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations'

  const options = { underlaidMenu: true }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default IntegrationsPage
