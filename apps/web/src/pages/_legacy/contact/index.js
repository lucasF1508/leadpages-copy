import React from 'react'
import Contact from '@layouts/Contact'
import { runQueries } from '@lib/queries'

const ContactPage = (props) => <Contact {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/contact'

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
            seoTitle: `Contact Leadpages Support`,
            seoDescription: `Considering Leadpages or need help with your account? Our tech support team is available via chat, phone, and email to assist you.`,
            seoImage: 'https://static.leadpages.com/images/og/og-contact.jpg',
          },
        },
      ],
    },
  }
}

export default ContactPage
