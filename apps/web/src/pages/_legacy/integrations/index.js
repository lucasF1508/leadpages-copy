import React from 'react'
import Integrations from '@layouts/Integrations/IntegrationsLegacy'
import { runQueries } from '@lib'

const IntegrationsPage = (props) => <Integrations {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations'

  const options = { hideBar: true, underlaidMenu: true }
  const { global } = await runQueries([])

  return {
    props: {
      options,
      slug,
      preview,
      global,
    },
  }
}

export default IntegrationsPage
