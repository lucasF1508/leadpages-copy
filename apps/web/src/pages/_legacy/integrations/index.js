import React from 'react'
import Integrations from '@layouts/Integrations/IntegrationsLegacy'

const IntegrationsPage = (props) => <Integrations {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations'

  const options = { hideBar: true, underlaidMenu: true }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default IntegrationsPage
