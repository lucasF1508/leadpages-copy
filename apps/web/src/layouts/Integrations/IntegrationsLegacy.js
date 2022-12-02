import React from 'react'
// components
import Integrations from '@legacy/components/integrations/Integrations'
import SEO from '@legacy/components/SEO'

const IntegrationsPage = (props) => (
  <>
    <SEO
      pathname="/integrations"
      title="Leadpages Integrations - Mailchimp, Salesforce, and More!"
      description="With Leadpages integrations⁠—including email, CRM, analytics, payment, social media, and more⁠—you can be sure we fit right in with the tools you already use."
      image="https://static.leadpages.com/images/og/og-integrations.jpg"
    />
    <Integrations {...props} />
  </>
)

export default IntegrationsPage
