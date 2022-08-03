import React from 'react'
import { styled } from '@design'
// components
import CheckoutsProduct from '@legacy/components/product/CheckoutsProduct'
// import ColumnsLeft from '@legacy/components/columns/ColumnsLeft'
// import ColumnsRight from '@legacy/components/columns/ColumnsRight'
import ConnectAccount from '@legacy/components/product/ConnectAccount'
import FeatureIconsGrid from '@legacy/components/grids/FeatureIconsGrid'
import HeadlineSection from '@legacy/components/layout/HeadlineSection'
import ProductPageHeader from '@legacy/components/headers/ProductPageHeader'
// import ProductToolkitClickReveal from '@legacy/components/click-reveals/ProductToolkitClickReveal'
import ProductToolkitRotator from '@legacy/components/rotators/ProductToolkitRotator'
import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import Resources from '@legacy/components/product/Resources'
import SEO from '@legacy/components/SEO'
// import SingleTestimonialQuoteRow from '@legacy/components/testimonials/SingleTestimonialQuoteRow'
import SpacerRow from '@legacy/components/SpacerRow'
// import ToolkitCardsGrid from '@legacy/components/grids/ToolkitCardsGrid'
// icon images
import featureIcon1 from '@legacy/assets/images/icons/featureicons/cyan_monitor.png'
import featureIcon2 from '@legacy/assets/images/icons/featureicons/lilac_inbound.png'
import featureIcon3 from '@legacy/assets/images/icons/featureicons/forest_credit-card.png'
import featureIcon4 from '@legacy/assets/images/icons/featureicons/coral_chart.png'
import featureIcon5 from '@legacy/assets/images/icons/featureicons/rose_globe.png'
import featureIcon6 from '@legacy/assets/images/icons/featureicons/coral_server.png'
import featureIcon7 from '@legacy/assets/images/icons/featureicons/lilac_chart.png'
import featureIcon8 from '@legacy/assets/images/icons/featureicons/pumpkin_mobile.png'
import featureIcon9 from '@legacy/assets/images/icons/featureicons/cyan_up-arrow.png'
import featureIcon10 from '@legacy/assets/images/icons/featureicons/forest_shield.png'
import featureIcon11 from '@legacy/assets/images/icons/featureicons/navy_padlock.png'
import featureIcon12 from '@legacy/assets/images/icons/featureicons/indigo_bolt.png'
import revealImage1 from '@legacy/assets/images/product/website-builder/website-builder_736px@2x.png'
import revealImage2 from '@legacy/assets/images/product/landing-page-builder/landing-page-builder_736px@2x.png'
import revealImage3 from '@legacy/assets/images/product/pop-up-builder/pop-up-form-builder_736px@2x.png'
import revealImage4 from '@legacy/assets/images/product/alert-bars/alert-bar-builder_736px@2x.png'
// import testimonialImage1 from '@legacy/assets/images/testimonials/jackie-ellis-color-circle.png'
// import testimonialImage2 from '@legacy/assets/images/testimonials/kailei-carr-color-circle.png'
// import testimonialImage3 from '@legacy/assets/images/testimonials/greg-benz-color-circle.png'
import AlertBarsIconSVG from '@legacy/assets/images/icons/toolkiticons/AlertBars.svg'
import LandingPagesIconSVG from '@legacy/assets/images/icons/toolkiticons/LandingPages.svg'
import PopupsIconSVG from '@legacy/assets/images/icons/toolkiticons/Popup.svg'
import WebsitesIconSVG from '@legacy/assets/images/icons/toolkiticons/Website.svg'

const ClickRevealSection_Desktop = styled('div', {
  d: 'block',

  '@media (max-width: 768px)': {
    d: 'none',
  },
})

const RotatorSection_Mobile = styled('div', {
  d: 'block',

  '@media (min-width: 769px)': {
    d: 'none',
  },
})

const ProductPage = () => {
  const columnItemsRightArray = [
    {
      header: 'Code-free publishing',
      text: 'Create and publish professional-quality, mobile-responsive pages in a matter of minutes without touching a speck of code.',
    },
    {
      header: 'Ready-made templates',
      text: 'Publish in minutes with professionally-designed templates and drag-and-drop customization.',
    },
  ]

  const columnItemsLeftArray = [
    {
      header: 'Real-time guidance',
      text: 'Experience the only platform that gives you optimization tips in real time, to help predict a page’s performance before you publish.',
      internalLink: {
        route: '/product/leadmeter',
        text: 'Discover Leadmeter',
        altText: 'leadmeter product detail page',
      },
    },
    {
      header: 'A/B & split testing',
      text: 'Optimize your Lead Pages for higher conversions by running unlimited split tests—including A/B tests and multivariate tests.',
    },
    {
      header: 'Simplified analytics',
      text: 'Quickly check up on your content performance with an easy-to-read, real-time data dashboard.',
    },
  ]

  const productPageFeaturesArray1 = [
    {
      title: 'Get online',
      description:
        'Showcase your business with DIY websites and landing pages engineered to entice your visitors to take action.',
      icon: featureIcon1,
      alt: 'get online icon',
    },
    {
      title: 'Collect quality leads',
      description:
        'Grow your email subscriber list with opt-in offers, instant digital file delivery, and conversion-optimized content.',
      icon: featureIcon2,
      alt: 'collect quality leads icon',
    },
    {
      title: 'Sell products & services',
      description:
        'Increase your income with high-converting sales pages, built-in checkouts, and secure online payments powered by Stripe.',
      icon: featureIcon3,
      alt: 'sell products & services icon',
    },
    {
      title: 'Optimize & grow',
      description:
        'Check up on your performance with real-time tracking and run unlimited split tests to maximize your results.',
      icon: featureIcon4,
      alt: 'optimize & grow icon',
    },
  ]

  const productToolkitArray = [
    {
      title: 'Websites',
      text: 'Engineered to be the easiest, most effective online website builder, Leadpages sites help you transform web traffic into leads and sales.',
      icon: WebsitesIconSVG,
      iconAltText: 'websites icon',
      linkText: 'Leadpages Sites',
      linkRoute: '/product/website-builder',
      linkAltText: 'link to website builder feature page',
      revealImage: revealImage1,
      revealImageAltText: 'website builder image',
    },
    {
      title: 'Landing Pages',
      text: 'Build unlimited drag-and-drop landing pages with the help of exclusive built-in conversion guidance that predicts your page’s performance before you publish.',
      icon: LandingPagesIconSVG,
      iconAltText: 'landing pages icon',
      linkText: 'Landing page builder',
      linkRoute: '/product/landing-page-builder',
      linkAltText: 'link to landing page builder feature page',
      revealImage: revealImage2,
      revealImageAltText: 'landing page image',
    },
    {
      title: 'Pop-Ups',
      text: 'Find the right moment for your message by creating pop-ups that trigger on click, time-delays, or exit intent and add them to any webpage with just a few clicks.',
      icon: PopupsIconSVG,
      iconAltText: 'pop-ups icon',
      linkText: 'Pop-up builder',
      linkRoute: '/product/pop-up-builder',
      linkAltText: 'link to pop-up builder feature page',
      revealImage: revealImage3,
      revealImageAltText: 'pop-up image',
    },
    {
      title: 'Alert Bars',
      text: 'Capture your audience’s attention and boost conversions by adding a non-intrusive, mobile-friendly alert bar to any webpage you own.',
      icon: AlertBarsIconSVG,
      iconAltText: 'alert bars icon',
      linkText: 'Alert bars',
      linkRoute: '/product/alert-bars',
      linkAltText: 'link to alert-bar feature page',
      revealImage: revealImage4,
      revealImageAltText: 'alert bar image',
    },
  ]

  const productPageFeaturesArray2 = [
    {
      title: 'SEO-friendly pages',
      description:
        'Customize and preview how your pages appear on search engines. Set your meta tags (title, description, and keywords), and preview your page in real-time.',
      icon: featureIcon5,
      alt: 'seo-friendly pages icon',
    },
    {
      title: 'Free hosting',
      description:
        'Securely host your website and/or landing pages on a free Leadpages domain, secured with SSL encryption and hosted on an HTTPS address.',
      icon: featureIcon6,
      alt: 'free hosting icon',
    },
    {
      title: 'Tracking & analytics',
      description:
        'Easily use third-party tracking code, such as Google Analytics and with our Facebook Ad Builder we’ll automatically place the Facebook tracking pixel for you.',
      icon: featureIcon7,
      alt: 'tracking & analytics icon',
    },
    {
      title: 'Device-specific preview',
      description:
        'Preview your content across different device screen sizes so that you can easily optimize how your content displays on desktop, tablet, and mobile.',
      icon: featureIcon8,
      alt: 'device-specific preview icon',
    },
    {
      title: '99.9% uptime',
      description:
        'Powered by Google’s App Engine, Leadpages delivers both reliability and speed, keeping your content in the hands of your audience.',
      icon: featureIcon9,
      alt: '99.9% uptime icon',
    },
    {
      title: 'Automatic SSL encryption',
      description:
        'All pages on our servers are secured with SSL and HTTPS protocols. Whether you use your Leadpages domain or connect your own domain, your pages are secure.',
      icon: featureIcon10,
      alt: 'automatic SSL encryption icon',
    },
    {
      title: 'GDPR compliance',
      description:
        'The data you collect with Leadpages is processed securely and in accordance with GDPR requirements. Easily add an active consent checkbox to any opt-in form.',
      icon: featureIcon11,
      alt: 'GDPR compliance icon',
    },
    {
      title: 'Top speed & reliability',
      description:
        'Increase conversions and improve user experience with industry-leading page load speeds and 99.9% uptime.',
      icon: featureIcon12,
      alt: 'top speed & reliability icon',
    },
  ]

  return (
    <>
      <SEO
        pathname="/product"
        title="Website & Landing Page Builder | Leadpages"
        description="Discover the tools you need to get online and grow your business: easy-to-make websites, landing pages, & more."
        image="https://static.leadpages.com/images/og/og-product.jpg"
      />
      <ProductPageHeader />
      <SpacerRow sizeArray={[3.5, 3.5, 3.5, 3.5]} backgroundColor="$grayAlt" />
      <FeatureIconsGrid
        features={productPageFeaturesArray1}
        itemsPerRow={4}
        showSectionLink={false}
        backgroundColor="$grayAlt"
      />
      <SpacerRow sizeArray={[3.5, 3.5, 3.5, 3.5]} backgroundColor="$grayAlt" />
      <SpacerRow size="small" />
      <HeadlineSection
        title="Showcase your business with digital content that’s as sleek as it is smart"
        caption="Build & publish code-free content that’s conversion-optimized from the ground up."
      />
      {/* this section uses a click-reveal on desktop and a rotator on mobile */}
      {/* <ClickRevealSection_Desktop>
        <ProductToolkitClickReveal itemArray={productToolkitArray} />
      </ClickRevealSection_Desktop> */}
      <RotatorSection_Mobile>
        <ProductToolkitRotator itemArray={productToolkitArray} />
      </RotatorSection_Mobile>
      <SpacerRow size="small" />
      {/* <SingleTestimonialQuoteRow
        quote="I absolutely LOVE Leadpages. The simplicity and ease-of-use is why I recommend it to all my clients and use it exclusively for my own business."
        image={getImage(images.testimonialImage1)}
        clientName="Jackie Ellis"
        clientTitle="Facebook Ads Strategist"
      /> */}
      <SpacerRow size="small" />
      <HeadlineSection
        title="Where you have the creative freedom to be yourself..."
        caption="Forget freelancers, delays, and extra expenses—our intuitive tools make it easy to create, publish, and update your content at the drop of a hat."
      />
      {/* <ColumnsRight columnItems={columnItemsRightArray} /> */}
      <SpacerRow size="small" />
      <HeadlineSection
        title="...and the confidence to get it right"
        caption="Transform your web traffic into business growth with the world’s #1 conversion marketing platform for small businesses."
      />
      {/* <ColumnsLeft columnItems={columnItemsLeftArray} /> */}
      {/* <SingleTestimonialQuoteRow
        quote="I haven’t seen anything that would meet my needs and sell my online program as well as Leadpages."
        image={getImage(images.testimonialImage2)}
        clientName="Kailei Carr"
        clientTitle="Executive Coach & Consultant"
      /> */}
      <SpacerRow sizeArray={[4.5, 4.5, 4.5, 4.5]} />
      <CheckoutsProduct />
      <ReadyToGrow
        title="Ready to get online and grow?"
        headline="Try Leadpages Free for 14 days"
        headlineFontSize="40px"
        mobileHeadlineFontSize="30px"
        mobileHeadlineLineHeight="40px"
        caption={null}
        buttonText="Start a Free Trial"
        subText="No obligation. Cancel anytime."
        bgColor="$terracottaLight"
        paddingScale={0.35}
      />
      <HeadlineSection
        title="We’ve got what you need"
        caption="Outfit your business with the features that fit today’s needs and tomorrow’s dreams."
      />
      <FeatureIconsGrid features={productPageFeaturesArray2} itemsPerRow={4} />
      {/* <SingleTestimonialQuoteRow
        quote="Leadpages saves me so much time on marketing that I can focus on things that drive new value in my business."
        image={getImage(images.testimonialImage3)}
        clientName="Greg Benz"
        clientTitle="Photographer and Software Developer"
      /> */}
      <ConnectAccount />
      <SpacerRow sizeArray={[0, 0, 1.5, 1.5]} />
      <Resources />
      <SpacerRow size="small" backgroundColor="$grayAlt" />
      <HeadlineSection
        title="Access the complete conversion toolkit"
        caption="Explore more Leadpages tools"
        backgroundColor="$grayAlt"
      />
      {/* <ToolkitCardsGrid hide={['featureindex']} /> */}
      <ReadyToGrow
        paddingScale={0.75}
        mobileHeadlineFontSize="30px"
        mobileHeadlineLineHeight="40px"
      />
    </>
  )
}

export default ProductPage
