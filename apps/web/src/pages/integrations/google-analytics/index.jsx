import React from 'react'
// Components
import Layout from '@legacy/components/Layout'
import SEO from '@legacy/components/SEO'
import IntegrationsSubpage from '@legacy/components/integrations/IntegrationsSubpage'

// Images
import heroImage from '@legacy/assets/images/integrations/subpages/Google-Analytics+Leadpages_304px@2x.png'
import twoColumnImage from '@legacy/assets/images/integrations/subpages/Google-Analytics-connect_730px@2x.png'
import pamTestimonial from '@legacy/assets/images/testimonials/pam-moore.png'

const integrationName = 'Google Analytics'

const headerBkgColor = '#f7f7f7'

const integrationInfo = [
  {
    headline: 'Track users across your web properties',
    description:
      'Simply add your Leadpages domain to your Google Analytics account (exclusion list) to understand how visitors are engaging and converting across your domains.',
  },
  {
    headline: 'Better understand your web traffic',
    description:
      'Access Google’s traffic reports and audience insights to gain a detailed understanding of where your traffic comes from and what characteristics they share.',
  },
  {
    headline: 'Make data-driven decisions',
    description:
      'With advanced analytics, you can determine the behavior that leads up to a conversion and strengthen your customer journey at every critical step. ',
  },
]

const IntegrationsSubpageGoogleAnalytics = () => {
  const testimonial = {
    quote: `“Leadpages helped us more than double our email subscriber list to over 35,000 in less than 6 months. We now have an average conversion rate of 60% to 80%+ on all landing pages.”`,
    clientName: 'Pam Moore',
    clientTitle: 'Leadpages Customer',
    image: pamTestimonial,
  }

  const heroData = {
    headlineText: 'Leadpages + Google Analytics',
    tooltipText: '  •  Last Updated August 2020',
    tooltipTitle:
      'Integrated applications have been specifically developed to connect with Leadpages, meaning they are built right into Leadpages for the quickest and easiest way to connect, and they’re backed by our customer support team.',
    descriptionText:
      'Access even more data on the performance of your pages and forms by connecting Leadpages to your Google Analytics account.',
    heroImage,
  }

  const twoColumnInfo = {
    headline: 'Connect your account in a matter of minutes',
    description:
      'Simply copy & paste your Google Analytics Tracking ID into the ‘Settings’ section of the Leadpages Builder.',
    image: twoColumnImage,
    imageAlt: 'Connecting Google Analytics',
  }

  return (
    <Layout headerBkgColor={headerBkgColor}>
      <SEO
        pathname="integrations/google-analytics"
        title="Use Leadpages With Google Analytics | Get Online & Grow"
        description="Easily connect Leadpages with Google Analytics to access even more data on your pages and forms’ performance. Absolutely no coding required! "
        image="https://static.leadpages.com/images/og/og-Leadpages+GoogleAnalytics.jpg"
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

export default IntegrationsSubpageGoogleAnalytics
