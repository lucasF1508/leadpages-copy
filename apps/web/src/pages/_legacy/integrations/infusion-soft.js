import React from 'react'
import InfusionSoft from '@layouts/Integrations/InfusionSoft'
import { runQueries } from '@lib'

const InfusionSoftPage = (props) => <InfusionSoft {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/infusion-soft'

  const options = { headerBkgColor: '$grayAlt' }
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

export default InfusionSoftPage
