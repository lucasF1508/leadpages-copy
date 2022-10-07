import React from 'react'
import Contact from '@layouts/Contact'

const ContactPage = (props) => <Contact {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/contact'

  return {
    props: {
      slug,
      preview,
    },
  }
}

export default ContactPage
