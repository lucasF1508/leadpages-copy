import React from 'react'

// Legacy components
import HomepageHeader from '@components/Hero/HeroHome'
import SpacerRow from '@legacy/components/SpacerRow'
import FeatureIconsGrid from '@legacy/components/grids/FeatureIconsGrid'
import FeaturedTemplates from '@legacy/components/templates/FeaturedTemplates'
import FlexRow from '@legacy/components/layout/FlexRow'
import HeadlineSection from '@legacy/components/layout/HeadlineSection'
import ConnectedIntegrations from '@legacy/components/integrations/ConnectedIntegrations'
import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import SEO from '@legacy/components/SEO'
import TwoColumnTextBlock from '@legacy/components/layout/TwoColumnTextBlock'
import CustomerStoriesRotator from '@components/Rotator/CustomerStoriesRotator'
import CustomerSuccessTestimonialsRotator from '@components/Rotator/CustomerSuccessTestimonialsRotator'
// images
import ArchForestSVG from '@legacy/assets/images/shapes/arch-forest.svg'
import RoundedSquareTanSVG from '@legacy/assets/images/shapes/rounded-square-tan.svg'
import TriangleCyanSVG from '@legacy/assets/images/shapes/triangle-cyan-dark.svg'
import websiteBuilderTotem from '@legacy/assets/images/totems/publish-high-converting-pages_754px@2x.png'
import conversionToolsTotem from '@legacy/assets/images/totems/make-content-count-827px@2x.png'
import analyticsLeadmeterTotem from '@legacy/assets/images/totems/insights-analytics_765px@2x.png'
import featureIcon1 from '@legacy/assets/images/icons/featureicons/cyan_monitor.png'
import featureIcon2 from '@legacy/assets/images/icons/featureicons/lilac_inbound.png'
import featureIcon3 from '@legacy/assets/images/icons/featureicons/forest_credit-card.png'
import featureIcon4 from '@legacy/assets/images/icons/featureicons/coral_chart.png'
// scripts
import RedbrickStructuredDataScript from '@legacy/scripts/RedbrickStructuredDataScript'

const images = {
  websiteBuilderTotem,
  conversionToolsTotem,
  analyticsLeadmeterTotem,
  featureIcon1,
  featureIcon2,
  featureIcon3,
  featureIcon4,
}

const getImage = (image) => image

const productFeaturesArray = [
  {
    title: 'Get online',
    description:
      'Showcase your business with DIY websites and landing pages engineered to entice your visitors to take action.',
    icon: getImage(images.featureIcon1),
    alt: 'get online icon',
  },
  {
    title: 'Collect quality leads',
    description:
      'Grow your email subscriber list with opt-in offers, instant digital file delivery, and conversion-optimized content.',
    icon: getImage(images.featureIcon2),
    alt: 'collect quality leads icon',
  },
  {
    title: 'Sell products & services',
    description:
      'Increase your income with high-converting sales pages, built-in checkouts, and secure online payments powered by Stripe.',
    icon: getImage(images.featureIcon3),
    alt: 'sell products & services icon',
  },
  {
    title: 'Optimize & grow',
    description:
      'Check up on your performance with real-time tracking and run unlimited split tests to maximize your results.',
    icon: getImage(images.featureIcon4),
    alt: 'optimize & grow icon',
  },
]

const twoColumnTextBlockArray = [
  {
    heading: 'Marketing education',
    text: 'Level-up your skills with virtual workshops, coaching, and free resources.',
    linkType: 'internal',
    linkText: 'Discover marketing resources',
    linkRoute: '/marketing-resources',
    linkAltText: 'discover marketing resources',
  },
  {
    heading: 'Tech support',
    text: 'Have a question? Hit a snag? Get the help you need, when you need it.',
    linkType: 'external',
    linkRoute: 'https://support.leadpages.com/hc/en-us',
    linkText: 'Visit the help center',
    linkAltText: 'visit the help center',
  },
]

const HomePage = () => (
  <>
    {/* homepage seo metadata is set in the SEO component */}
    <SEO pathname="/" canonical="/" />
    <RedbrickStructuredDataScript />
    <HomepageHeader />
    <SpacerRow size="small" backgroundColor="$grayAlt" />
    <FeatureIconsGrid
      features={productFeaturesArray}
      itemsPerRow={4}
      showSectionLink={false}
      backgroundColor="$grayAlt"
    />
    <SpacerRow size="small" backgroundColor="$grayAlt" />
    <SpacerRow size="small" />
    <HeadlineSection
      title="Be inspired by someone like you"
      caption="Join more than 40,000 small businesses who trust us with their dreams."
    />
    <CustomerStoriesRotator />
    <SpacerRow size="small" />
    <HeadlineSection
      title="Leadpages is the best way to get online and grow your business"
      caption="Create code-free websites and landing pages to engage your audience from first click to final sale."
      button={{
        text: 'Take a product tour',
        route: '/product',
        withArrow: true,
      }}
    />
    <FlexRow
      flexDirectionReverse
      bgImage={TriangleCyanSVG}
      bgImageMargin="-5vw"
      title="Code-Free, Website & Landing Page Software"
      headline="Create high-converting websites & landing pages"
      caption="Quickly & easily publish your first webpages in a matter of minutes. Start with a conversion-optimized, mobile-responsive template. Then customize it inside the Drag & Drop Builder, and launch a professional-looking landing page or website that's designed to convert."
      image={getImage(images.websiteBuilderTotem)}
      imageMaxWidth="754px"
      padImage
      ctaArray={[
        {
          text: 'Websites',
          link: '/product/website-builder',
        },
        {
          text: 'Landing Pages',
          link: '/product/landing-page-builder',
        },
        {
          text: 'Templates',
          link: '/templates',
        },
      ]}
    />
    <SpacerRow size="small" />
    <FlexRow
      bgImage={RoundedSquareTanSVG}
      bgImageMargin="-11vw"
      title="The Ultimate Conversion Toolkit"
      headline="Make every piece of content count"
      caption="Wherever you’re publishing or posting content, now you can optimize it all for business growth. Turn your hard-won web traffic into more leads and sales with a complete conversion toolkit, including:"
      image={getImage(images.conversionToolsTotem)}
      imageMaxWidth="827px"
      padImage
      checkmarks
      ctaArray={[
        {
          text: 'Pop-ups',
          link: '/product/pop-up-builder',
        },
        {
          text: 'Alert Bars',
          link: '/product/alert-bars',
        },
        {
          text: 'Checkout Forms',
          link: '/product/checkouts',
        },
        {
          text: 'And More!',
          link: '/product/feature-index',
        },
      ]}
    />
    <SpacerRow size="small" />
    <FlexRow
      flexDirectionReverse
      narrowOverride
      bgImage={ArchForestSVG}
      bgImageMargin="-14vw"
      title="Analytics & Performance Tracking"
      headline="Get the insights you need to guess less & grow more"
      caption="Confidently optimize every aspect of your marketing campaigns with the help of an easy-to-read analytics dashboard, a/b split tests, and real-time conversion tips you won’t find anywhere else. "
      image={getImage(images.analyticsLeadmeterTotem)}
      imageMaxWidth="765px"
      padImage
    />
    <FeaturedTemplates />
    <ConnectedIntegrations />
    <SpacerRow size="small" />
    <HeadlineSection
      title="Customer service is our secret sauce"
      caption="With world-class support, you can reach us via phone, email, or chat — so you never stay stuck."
    />
    <TwoColumnTextBlock textBlockArray={twoColumnTextBlockArray} />
    <CustomerSuccessTestimonialsRotator />
    <ReadyToGrow />
  </>
)

export default HomePage
