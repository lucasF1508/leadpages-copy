import React from 'react'
import Press from '@layouts/Press'
import { runQueries } from '@lib'

const PressPage = (props) => <Press {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/press'

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
            seoTitle: `Press & Media Kit | Leadpages`,
            seoDescription: `Don't want to miss anything at Leadpages? Keep updated with our announcements, press releases, and media coverage right here.`,
          },
        },
      ],
    },
  }
}

export default PressPage
