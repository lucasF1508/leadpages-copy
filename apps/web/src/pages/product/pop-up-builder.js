import React from 'react'
import PopUpBuilder from '@layouts/Product/PopUpBuilder'

const PopUpBuilderPage = (props) => <PopUpBuilder {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/pop-up-builder'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default PopUpBuilderPage
