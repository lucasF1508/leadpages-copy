import React from 'react'
import { styled } from '@design'
// components
// import ChildPageHeader from '@legacy/components/product/ChildPageHeader'
// import FeatureIconsGrid from '@legacy/components/grids/FeatureIconsGrid'
// import HeadlineSection from '@legacy/components/layout/HeadlineSection'
import LeadmeterMakeTheMost from '@legacy/components/product/LeadmeterMakeTheMost'
// import ProductFeaturesClickReveal from '@legacy/components/click-reveals/ProductFeaturesClickReveal'
// import ProductFeaturesRotator from '@legacy/components/rotators/ProductFeaturesRotator'
// import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import SEO from '@legacy/components/SEO'
// import SpacerRow from '@legacy/components/SpacerRow'
// import ToolkitCardsGrid from '@legacy/components/grids/ToolkitCardsGrid'
// images
// import heroImage from '@legacy/assets/images/heros/leadmeter-hero_600px@2x.png'
import productFeatureImage1 from '@legacy/assets/images/product/leadmeter/improve-cro_page-layout-and-content.png'
import productFeatureImage2 from '@legacy/assets/images/product/leadmeter/improve-cro_call-to-action-countdown.png'
import productFeatureImage3 from '@legacy/assets/images/product/leadmeter/improve-cro_readability.png'
import realtimeAnalysisFeatureIcon from '@legacy/assets/images/icons/featureicons/forest_bolt.png'
import expertMarketingAdviceFeatureIcon from '@legacy/assets/images/icons/featureicons/cyan_monitor-award.png'
import stepbystepGuidanceFeatureIcon from '@legacy/assets/images/icons/featureicons/rose_argyle.png'
import betterResultsFeatureIcon from '@legacy/assets/images/icons/featureicons/camel_chart.png'

// import circleForestLightSVG from '@legacy/assets/images/shapes/circle-forest-light.svg'
// import semicircleGraySVG from '@legacy/assets/images/shapes/semicircle-gray.svg'

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

const LeadmeterProductPage = () => {
  const productFeaturesArray = [
    {
      title: 'Page layout & content',
      text: 'Optimize your page content and the structure of your page.',
      image: productFeatureImage1,
    },
    {
      title: 'Call-to-action',
      text: 'Consider everything from button color to copy at the point of conversion.',
      image: productFeatureImage2,
    },
    {
      title: 'Readability',
      text: 'Fine-tune your copy for maximum persuasion and web best practices.',
      image: productFeatureImage3,
    },
    {
      title: 'Lead collection',
      text: 'Take a look at your form fields and lead collection set-up.',
      image: productFeatureImage2,
    },
  ]

  const leadmeterFeaturesArray = [
    {
      title: 'Real-time analysis',
      description:
        'As you adjust your page’s content, Leadmeter runs in the background to instantly predict your page’s performance before you publish it.',
      icon: realtimeAnalysisFeatureIcon,
      alt: 'real-time analysis icon',
    },
    {
      title: 'Expert marketing advice',
      description:
        'Powered by exclusive analytics across dozens of industries as well as marketing best practices, Leadmeter tells you what to tweak and why.',
      icon: expertMarketingAdviceFeatureIcon,
      alt: 'expert marketing advice icon',
    },
    {
      title: 'Step-by-step guidance',
      description:
        'Use your custom results to optimize your page as you build it and watch your Leadmeter score rise from good to great to excellent.',
      icon: stepbystepGuidanceFeatureIcon,
      alt: 'step-by-step guidance icon',
    },
    {
      title: 'Better results',
      description:
        'Make the most of every visitor you attract and dollar you spend, knowing your page is expertly optimized from the get-go.',
      icon: betterResultsFeatureIcon,
      alt: 'better results icon',
    },
  ]

  return (
    <>
      <SEO
        pathname="/product/leadmeter"
        title="Leadmeter | Leadpages | Get Online & Grow"
        description="Get data-powered, real-time conversion tips at your fingertips with Leadpages Leadmeter—helping you guess less and grow more."
        image="https://static.leadpages.com/images/og/og-leadmeter.jpg"
      />
      {/* <ChildPageHeader
        headingText="Leadmeter"
        subheadingText="Get data-powered, real-time conversion tips at your fingertips, helping you build higher-performing pages so you can guess less and grow more."
        outboundCTA={false}
        image={heroImage}
        imageAltText="leadmeter product image"
        bgImage={semicircleGraySVG}
        bgImageAltText="Capture your audience background"
      />
      <SpacerRow size="small" /> */}
      {/* <HeadlineSection
        title="Improve Your Conversion Rates with Custom, Real-time Recommendations"
        caption="The Leadmeter is built-in technology that instantly analyzes your page's content, compares it to tens of thousands of pages in our database, rates its ability to convert, and provides step-by-step guidance on how to optimize your page as you build it."
      /> */}
      {/* this section uses a click-reveal on desktop and a rotator on mobile */}
      {/* <ClickRevealSection_Desktop>
        <ProductFeaturesClickReveal
          backgroundImage={circleForestLightSVG}
          imageSide="left"
          itemArray={productFeaturesArray}
        />
      </ClickRevealSection_Desktop>
      <RotatorSection_Mobile>
        <ProductFeaturesRotator itemArray={productFeaturesArray} />
      </RotatorSection_Mobile>
      <SpacerRow size="small" />
      <HeadlineSection
        subtitle="Data-Driven Analysis of 4 Conversion Categories"
        caption="The Leadmeter analyzes your content and considers four key conversion categories to scientifically predict how your page will perform (before you publish it)."
      />
      <FeatureIconsGrid
        features={leadmeterFeaturesArray}
        showSectionCaption={false}
        itemsPerRow={4}
      /> */}
      <LeadmeterMakeTheMost />
      {/* <SpacerRow size="small" backgroundColor="$grayAlt" />
      <HeadlineSection
        title="Access the complete conversion toolkit"
        caption="Explore more Leadpages tools"
        backgroundColor="$grayAlt"
      />
      <ToolkitCardsGrid hide={['leadmeter']} />
      <ReadyToGrow
        headline="Ready to guess less and grow more?"
        caption="Experience the only platform that offers real-time tips for how to<br/> optimize your page as you build it."
      /> */}
    </>
  )
}

export default LeadmeterProductPage
