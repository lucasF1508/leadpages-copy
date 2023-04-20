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
      data: [
        {
          seo: {
            hasCustomSeoTitle: true,
            hasImageUrl: true,
            seoTitle: `Add Pop-ups to Any Landing Page or Website in Minutes | Leadpages`,
            seoDescription: `Easily build and add pop-ups to any website or landing page with Leadpages Pop-up Builder. Collect more leads and scale quickly. Try for free for 14 days.`,
            seoImage: 'https://static.leadpages.com/images/og/og-pop-ups.jpg',
          },
        },
      ],
    },
  }
}

export default PopUpBuilderPage
