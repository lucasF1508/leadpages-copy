import React from 'react'
// components
import ContactMenu from '@legacy/components/contact/ContactMenu'
import SEO from '@legacy/components/SEO'

const ContactSubmissionPage = () => (
  <>
    <SEO
      pathname="/contact/submission"
      title="Leadpages® Landing Page Builder & Lead Gen Software"
      description="Generate leads and increase revenue using the industry-leading landing page
  creator with accompanying suite of lead generation and opt-in tools."
      image="https://static.leadpages.com/images/og/og-contact.jpg"
    />
    <ContactMenu submission />
  </>
)

export default ContactSubmissionPage
