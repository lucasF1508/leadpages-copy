import React from 'react'
// Components
import Layout from '@legacy/components/Layout'
import SEO from '@legacy/components/SEO'
import IntegrationsSubpage from '@legacy/components/integrations/IntegrationsSubpage'
// Images
import heroImage from '@legacy/assets/images/integrations/subpages/Stripe+Leadpages_304px@2x.png'
import twoColumnImage from '@legacy/assets/images/integrations/subpages/Stripe-connect_730px@2x.png'
import promoImage from '@legacy/assets/images/integrations/subpages/Stripe-promo_860px@2x.png'
import testimonialImage from '@legacy/assets/images/testimonials/Anil-60px@2x.png'

const integrationName = 'Stripe'

const headerBkgColor = '#f7f7f7'

const integrationInfo = [
  {
    headline: 'Flexible publishing options',
    description:
      'Publish your checkouts on a Leadpages webpage or embed a checkout pop-up on a third-party site.',
  },
  {
    headline: 'Connect Checkouts to third-party integrations',
    description:
      'In addition to processing their payment, send your customer data to a third-party integration (such as an ESP or CRM).',
  },
  {
    headline: 'Customizable form fields',
    description:
      'Collect standard sales fields, shipping-related information, and any additional information you may desire (such as name, phone number, etc.).',
  },
]

const IntegrationsSubpageStripe = () => {
  const testimonial = {
    quote: `"Integrating Stripe for the first time was a BREEZE ✅ Adding a SKU on-the-fly in Stripe ✅ #BloodyBrilliant 💥"`,
    clientName: 'Anil Agrawal',
    clientTitle: 'Owner, Marketing Automation Focus',
    image: testimonialImage,
  }

  const heroData = {
    headlineText: 'Leadpages + Stripe',
    tooltipText: '  •  Last Updated August 2020',
    tooltipTitle:
      'Integrated applications have been specifically developed to connect with Leadpages, meaning they are built right into Leadpages for the quickest and easiest way to connect, and they’re backed by our customer support team.',
    descriptionText:
      'Easily sell your services online, deliver products, and accept credit cards with Leadpages Checkouts, powered by Stripe.',
    heroImage,
  }

  const promoInfo = {
    image: promoImage,
    headline: 'Accept payments with Customizable Checkout Forms',
    description:
      'Easily embed secure, mobile-responsive checkout forms on any webpage or pop-up. ',
    checklist: [
      'Accept credit cards',
      'Secure payment processing (SCA compliant)',
      'Customizable form fields (including shipping-related fields)',
      'Automatic receipt delivery',
      'Refund processing',
    ],
    buttonText: 'Learn about Checkouts',
    link: '/product/checkouts',
  }

  const twoColumnInfo = {
    headline: 'Connect your account in a matter of minutes',
    description: '',
    image: twoColumnImage,
    imageAlt: 'Connecting Stripe',
    checkboxInfo: [
      'Create a free Stripe account',
      'Add a Checkout form to any page or pop-up',
      'Select the product or service for sale',
      'Customize your form fields and integrations',
      'Publish and you’re open for business!',
    ],
  }

  return (
    <Layout headerBkgColor={headerBkgColor}>
      <SEO
        pathname="integrations/stripe"
        title="Sell More With Leadpages + Stripe | Get Online & Grow"
        description="Easily sell your services online, deliver products, and accept credit cards with Leadpages Checkouts, powered by Stripe."
        image="https://static.leadpages.com/images/og/og-Leadpages+Stripe.jpg"
      />
      <IntegrationsSubpage
        heroData={heroData}
        twoColumnInfo={twoColumnInfo}
        buttonText={`Try Leadpages + ${integrationName}`}
        testimonial={testimonial}
        integrationInfo={integrationInfo}
        promoInfo={promoInfo}
      />
    </Layout>
  )
}

export default IntegrationsSubpageStripe
