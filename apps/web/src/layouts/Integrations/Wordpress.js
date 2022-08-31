import React from 'react'
// Components
import SEO from '@legacy/components/SEO'
import IntegrationsSubpage from '@legacy/components/integrations/IntegrationsSubpage'
// Images
import heroImage from '@legacy/assets/images/integrations/subpages/WordPress+Leadpages_304px@2x.png'
import twoColumnImage from '@legacy/assets/images/integrations/subpages/WordPress-connect_730px@2x.png'
import sallyTestimonial from '@legacy/assets/images/testimonials/sally-zimney-72px@2x.png'

const integrationName = 'WordPress'

const integrationInfo = [
  {
    headline: 'Publish, update, and delete landing pages on WordPress',
    description:
      'From landing pages and web pages to your homepage and 404, publishing from Leadpages to a WordPress site is simple with our built-in plugin.',
  },
  {
    headline: 'Publish Pop-ups to WordPress',
    description:
      'Easily publish a button, text link, and image pop-ups to your WordPress site with our complementary plugin or by copying and pasting our HTML snippet.',
  },
  {
    headline: 'Publish Alert Bars to WordPress',
    description:
      'Easily publish an alert bart to your WordPress site with our complementary plugin or by copying and pasting our HTML snippet.',
  },
  {
    headline: 'Automatically update content from within Leadpages',
    description:
      'When it’s time for a change, simply save and update your page from within Leadpages, and the content will update automatically on your site.',
  },
]

const Wordpress = () => {
  const testimonial = {
    quote: `“Leadpages takes the daunting tasks - tasks that my business depends on, but that are not in my wheelhouse as founder - and makes them doable and beautiful. Leadpages is essential.”`,
    clientName: 'Sally Zimney',
    clientTitle: 'Leadpages Customer',
    image: sallyTestimonial,
  }

  const heroData = {
    headlineText: 'Leadpages + WordPress',
    tooltipText: '  •  Last Updated August 2020',
    tooltipTitle:
      'Integrated applications have been specifically developed to connect with Leadpages, meaning they are built right into Leadpages for the quickest and easiest way to connect, and they’re backed by our customer support team.',
    descriptionText:
      'Use the Leadpages Plugin to publish your landing pages, pop-ups, and alert bars to your WordPress website.',
    heroImage,
  }

  const twoColumnInfo = {
    headline:
      'Use the Leadpages WordPress Plugin to Publish to Your Site or Blog',
    description:
      'With your complementary plugin installed, it’s a snap to start publishing landing pages and pop-ups to your WordPress blog or website. ',
    image: twoColumnImage,
    imageAlt: 'Connecting WordPress',
  }

  return (
    <>
      <SEO
        pathname="integrations/wordpress"
        title="Connect & Publish Leadpages to WordPress | Get Online & Grow"
        description="Easily publish your landing pages, pop-ups, and alert bars to your WordPress website. Use Leadpages WordPress plugin to publish in just a few clicks. "
        image="https://static.leadpages.com/images/og/og-Leadpages+WordPress.jpg"
      />
      <IntegrationsSubpage
        heroData={heroData}
        twoColumnInfo={twoColumnInfo}
        buttonText={`Try Leadpages + ${integrationName}`}
        testimonial={testimonial}
        integrationInfo={integrationInfo}
      />
    </>
  )
}

export default Wordpress
