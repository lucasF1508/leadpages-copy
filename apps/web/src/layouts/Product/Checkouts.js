import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import { getImage } from 'gatsby-plugin-image'
import { styled } from '@design'
// components
import CheckoutsFeatures from '@legacy/components/product/CheckoutsFeatures'
import ChildPageHeader from '@legacy/components/product/ChildPageHeader'
// import CloseSalesCollectPayments from '@legacy/components/product/CloseSalesCollectPayments'
import HeadlineSection from '@legacy/components/layout/HeadlineSection'
// import ProductFeaturesClickReveal from '@legacy/components/click-reveals/ProductFeaturesClickReveal'
// import ProductFeaturesRotator from '@legacy/components/rotators/ProductFeaturesRotator'
import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import SEO from '@legacy/components/SEO'
import SpacerRow from '@legacy/components/SpacerRow'
// import ToolkitCardsGrid from '@legacy/components/grids/ToolkitCardsGrid'
// import TurnYourExpertiseIntoRevenue from '@legacy/components/product/TurnYourExpertiseIntoRevenue'
// images
import heroImage from '@legacy/assets/images/heros/checkouts-hero_600px@2x.png'
import productFeatureImage1 from '@legacy/assets/images/product/checkouts/turn-any-webpage-into-a-checkout.png'
import productFeatureImage2 from '@legacy/assets/images/product/checkouts/easily-upsell-your-email-subscribers.png'
import productFeatureImage3 from '@legacy/assets/images/product/checkouts/recurring-services_623px@2x.png'
import productFeatureImage4 from '@legacy/assets/images/product/checkouts/sales-page-live-webinar@2x.png'
import productFeatureImage5 from '@legacy/assets/images/product/checkouts/event-signup-landing-pages@2x.png'
// import circleForestLightSVG from '@legacy/assets/images/shapes/circle-forest-light.svg'
import semicircleGraySVG from '@legacy/assets/images/shapes/semicircle-gray.svg'

const ClickRevealSection_Desktop = styled('div', {
  display: 'block',

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

const RotatorSection_Mobile = styled('div', {
  display: 'block',

  '@media (min-width: 769px)': {
    display: 'none',
  },
})

const CheckoutsProductPage = () => {
  const productFeaturesArray = [
    {
      title: 'Turn any webpage into a checkout',
      text: 'Display the full range of your products and services on your website and collect payments seamlessly with a checkout close at hand.',
      image: productFeatureImage1,
    },
    {
      title: 'Easily upsell your email subscribers',
      text: 'Deliver free value with your lead magnet, then use the thank you page to showcase a low-priced, limited-time “tripwire” offer intended as an entry point to your paid services.',
      image: productFeatureImage2,
    },
    {
      title: 'Bill clients for recurring services',
      text: 'Create a tiered pricing page so clients can engage with your services at the cadence and duration that’s right for them.',
      image: productFeatureImage3,
    },
    {
      title: 'Sell your live webinars and trainings',
      text: 'Sell your live training package in a one-to-many format and reinforce the value by comparing the webinar to the cost of private coaching.',
      image: productFeatureImage4,
    },
    {
      title: 'Boost ticket sales for your events',
      text: 'Encourage your audience to register in advance or buy tickets online by offering an online checkout at a discounted ticket price.',
      image: productFeatureImage5,
    },
  ]

  return (
    <>
      <SEO
        pathname="/product/checkouts"
        title="Leadpages Checkout Widget"
        description="Create a Leadpages checkout and then embed it on any web page or pop-up you want. Easily sell online services, deliver products, and accept recurring payments."
        image="https://static.leadpages.com/images/og/og-checkouts.jpg"
      />
      <ChildPageHeader
        headingText="Leadpages Checkouts"
        subheadingText="Easily sell your services online, deliver products, and accept recurring payments by embedding Leadpages Checkouts, powered by Stripe, on any web page or pop-up."
        outboundCTA={false}
        showCTA={false}
        CTAtext=""
        link=""
        linkText=""
        image={heroImage}
        imageAltText="Easily sell your services online"
        bgImage={semicircleGraySVG}
        bgImageAltText="Easily sell your services online"
      />
      {/* <TurnYourExpertiseIntoRevenue />
      <CloseSalesCollectPayments /> */}
      <CheckoutsFeatures />
      <SpacerRow size="small" />
      <HeadlineSection
        title="5 Places to seamlessly pitch products & sell services online with checkouts"
        caption="Easily embed your Checkout widget on any webpage or pop-up. The possibilities are endless."
      />
      {/* this section uses a click-reveal on desktop and a rotator on mobile */}
      <ClickRevealSection_Desktop>
        {/* <ProductFeaturesClickReveal
          backgroundImage={circleForestLightSVG}
          imageSide="left"
          itemArray={productFeaturesArray}
        /> */}
      </ClickRevealSection_Desktop>
      <RotatorSection_Mobile>
        {/* <ProductFeaturesRotator itemArray={productFeaturesArray} /> */}
      </RotatorSection_Mobile>
      <SpacerRow size="small" />
      <SpacerRow size="small" backgroundColor="$grayAlt" />
      <HeadlineSection
        title="Access the complete conversion toolkit"
        caption="Explore more Leadpages tools"
        backgroundColor="$grayAlt"
      />
      {/* <ToolkitCardsGrid hide={['checkouts']} /> */}
      <ReadyToGrow
        headline="Ready to grow?"
        caption="Take Leadpages for a test drive when you start your free 14-day trial.<br>No obligation. No reason not to."
        subText="No commitment necessary. Cancel anytime."
      />
    </>
  )
}

export default CheckoutsProductPage
