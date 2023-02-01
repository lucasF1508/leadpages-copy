import React from 'react'
import PopUpBuilder from '@layouts/Product/PopUpBuilder'
import { runQueries } from '@lib'

const PopUpBuilderPage = (props) => <PopUpBuilder {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/pop-up-builder'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
    },
  }
}

export default PopUpBuilderPage
