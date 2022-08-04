import React from 'react'
// Components
import Layout from '@legacy/components/Layout'
import SEO from '@legacy/components/SEO'
import IntegrationsSubpage from '@legacy/components/integrations/IntegrationsSubpage'
// Images
import heroImage from '@legacy/assets/images/integrations/subpages/ConvertKit+Leadpages_304px@2x.png'
import twoColumnImage from '@legacy/assets/images/integrations/subpages/ConvertKit-connect_730px@2x.png'
import arinTestimonial from '@legacy/assets/images/testimonials/Arin-Amsler-72px@2x.png'

const integrationName = 'ConvertKit'

const headerBkgColor = '#f7f7f7'

const integrationInfo = [
  {
    headline: 'Collect & segment your leads',
    description:
      'Automatically add or update contact information from form submissions to a list in ConvertKit for future follow-up.',
  },
  {
    headline: 'Create custom form fields',
    description:
      'If you’d like to collect more than a name and email address, easily embed your ConvertKit form using the Leadpages HTML widget. ',
  },
  {
    headline: 'Receive email notifications for new opt-ins',
    description:
      'Set up automated notifications in either Leadpages or ConvertKit to get new subscriber data sent straight to your inbox.',
  },
  {
    headline: 'Automate your follow-up emails',
    description:
      "Use ConvertKit’s marketing automation to create targeted emails that send when triggered by a specific date, event, or contact's activity.",
  },
]

const IntegrationsSubpageConvertkit = () => {
  const testimonial = {
    quote: `“I carefully reviewed (and tested) several landing page options before landing on Leadpages. By far the best value of functionality and price. Super simple to use with virtually no learning curve. The tool is great, but I would choose Leadpages all over again just for the customer support!”`,
    clientName: 'Arin Amsler',
    clientTitle: 'Leadpages Customer',
    image: arinTestimonial,
  }

  const heroData = {
    headlineText: 'Leadpages + ConvertKit',
    tooltipText: '  •  Last Updated August 2020',
    tooltipTitle:
      'Integrated applications have been specifically developed to connect with Leadpages, meaning they are built right into Leadpages for the quickest and easiest way to connect, and they’re backed by our customer support team.',
    descriptionText:
      'Send leads to designated lists within your ConvertKit account and trigger drip email sequences.',
    heroImage,
  }

  const twoColumnInfo = {
    headline: 'Connect your account in a matter of minutes',
    description: '',
    image: twoColumnImage,
    imageAlt: 'Connecting ConvertKit',
    checkboxInfo: [
      'Copy & paste your ConvertKit API key into Leadpages',
      'Connect a Leadpages form to a target email list (audience)',
      'Publish and let the leads roll in!',
    ],
  }

  return (
    <Layout headerBkgColor={headerBkgColor}>
      <SEO
        pathname="integrations/convertkit"
        title="Connect your Leadpages to ConvertKit| Get Online & Grow"
        description="Easily integrate Leadpages with ConvertKit. Connect your Leadpages froms to collect, segment, and update subscribers and trigger automated email campaigns."
        image="https://static.leadpages.com/images/og/og-Leadpages+ConvertKit.jpg"
      />
      <IntegrationsSubpage
        heroData={heroData}
        twoColumnInfo={twoColumnInfo}
        buttonText={`Try Leadpages + ${integrationName}`}
        testimonial={testimonial}
        integrationInfo={integrationInfo}
      />
    </Layout>
  )
}

export default IntegrationsSubpageConvertkit
