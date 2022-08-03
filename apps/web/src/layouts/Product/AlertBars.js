import React from 'react'
import { styled } from '@design'
// components
import ChildPageHeader from '@legacy/components/product/ChildPageHeader'
// import CustomerSuccessTestimonialsRotator from '@legacy/components/rotators/CustomerSuccessTestimonialsRotator'
import MakeTheMost from '@legacy/components/product/MakeTheMost'
import GetInspired_AlertBars from '@legacy/components/product/GetInspired_AlertBars'
import HeadlineSection from '@legacy/components/layout/HeadlineSection'
// import ProductFeaturesClickReveal from '@legacy/components/click-reveals/ProductFeaturesClickReveal'
// import ProductFeaturesRotator from '@legacy/components/rotators/ProductFeaturesRotator'
// import ProductTestimonialsRotator from '@legacy/components/rotators/ProductTestimonialsRotator'
import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import SEO from '@legacy/components/SEO'
// import SimpleSetup from '@legacy/components/product/SimpleSetup'
import SpacerRow from '@legacy/components/SpacerRow'
// import ToolkitCardsGrid from '@legacy/components/grids/ToolkitCardsGrid'
// images
import heroImage from '@legacy/assets/images/heros/alert-bars-hero_615px@2x.png'
import productFeatureImage1 from '@legacy/assets/images/product/alert-bars/flexible-mobile_friendly-alert-bar-624px@2x.png'
import productFeatureImage2 from '@legacy/assets/images/product/alert-bars/flexible-form-text-alert-bar-624px@2x.png'
import productFeatureImage3 from '@legacy/assets/images/product/alert-bars/flexible-publishing-alert-bar-624px@2x.png'
import productFeatureImage4 from '@legacy/assets/images/product/alert-bars/analytics-alert-bar-624px@2x.png'
// import circleSandSideSVG from '@legacy/assets/images/shapes/circle-sand-side.svg'
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

const AlertBarsProductPage = () => {
  const productFeaturesArray = [
    {
      title: 'Mobile-friendly layouts',
      text: 'Choose from four mobile responsive layouts that automatically adjust to appear in the optimum position depending on your visitor’s device screen size.',
      image: productFeatureImage1,
    },
    {
      title: 'Opt-in form or text-based announcements',
      text: 'Announce your latest deal or invite your web visitors to opt into your email list by submitting a name and email address on a fixed header.',
      image: productFeatureImage2,
    },
    {
      title: 'Flexible publishing options',
      text: 'Publish an alert bar on any landing page or website that allows for the use of HTML and JavaScript, such as WordPress or Squarespace.',
      image: productFeatureImage3,
    },
    {
      title: 'Simplified analytics',
      text: 'Easily track your alert bar’s performance within the Leadpages dashboard to identify which pages outperform the rest.',
      image: productFeatureImage4,
    },
  ]

  return (
    <>
      <SEO
        pathname="/product/alert-bars"
        title="Alert Bars | Leadpages | Get Online & Grow"
        description="Capture your audience’s attention & boost conversions with mobile-friendly alert bars! Add alert bars to any landing page, web page, or website."
        image="https://static.leadpages.com/images/og/og-alert-bars.jpg"
      />
      <ChildPageHeader
        headingText="Alert Bars"
        subheadingText="Capture your audience's attention and boost conversions with a non-intrusive, mobile-friendly alert bar."
        showCTA={false}
        link="/"
        linkText="Capture your audience's attention"
        image={heroImage}
        imageAltText="Alert Bars"
        bgImage={semicircleGraySVG}
        bgImageAltText="Capture your audience's attention"
      />
      <SpacerRow size="small" />
      <HeadlineSection
        title="Flexible options to fit your needs"
        caption="Draw attention without drawing your visitors away from the primary content on a page."
      />
      {/* this section uses a click-reveal on desktop and a rotator on mobile */}
      {/* <ClickRevealSection_Desktop> */}
      {/* <ProductFeaturesClickReveal
          backgroundImage={circleSandSideSVG}
          imageSide="left"
          itemArray={productFeaturesArray}
        />
      </ClickRevealSection_Desktop>
      <RotatorSection_Mobile>
        <ProductFeaturesRotator itemArray={productFeaturesArray} />
      </RotatorSection_Mobile>
      <SpacerRow size="small" /> */}
      <MakeTheMost />
      {/* <SimpleSetup /> */}
      <GetInspired_AlertBars />
      {/* <ProductTestimonialsRotator /> */}
      <SpacerRow size="small" />
      <HeadlineSection
        supertitle="Customer Success Team"
        title="Real people answering real questions. Imagine that."
        caption="We work hard to build a product that helps your business grow with online marketing, and our support team works even harder to partner with you to generate leads. With custom videos, phone, email, and chat — we’re here when you need us."
      />
      {/* <CustomerSuccessTestimonialsRotator /> */}
      <SpacerRow size="small" backgroundColor="$grayAlt" />
      <HeadlineSection
        title="Access the complete conversion toolkit"
        caption="Explore more Leadpages tools"
        backgroundColor="$grayAlt"
      />
      {/* <ToolkitCardsGrid hide={['alertbars']} /> */}
      <ReadyToGrow headline="Ready to raise the bar in your business?" />
    </>
  )
}

export default AlertBarsProductPage
