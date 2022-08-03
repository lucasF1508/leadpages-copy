import React from 'react'
// components
import ChildPageHeader from '@legacy/components/product/ChildPageHeader'
import ConversionFirstBuilder from '@legacy/components/product/ConversionFirstBuilder'
// import CustomerSuccessTestimonialsRotator from '@legacy/components/rotators/CustomerSuccessTestimonialsRotator'
import FlexSectionReverse from '@legacy/components/product/FlexSectionReverse'
// import FlexSectionTwoColumnFeatures from '@legacy/components/product/FlexSectionTwoColumnFeatures'
import HeadlineSection from '@legacy/components/layout/HeadlineSection'
import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import PublishingOptionsGrid from '@legacy/components/grids/PublishingOptionsGrid'
import SEO from '@legacy/components/SEO'
import SiteTestimonial from '@legacy/components/product/SiteTestimonial'
import SpacerRow from '@legacy/components/SpacerRow'
// import ToolkitCardsGrid from '@legacy/components/grids/ToolkitCardsGrid'
// images
import heroImage from '@legacy/assets/images/heros/website-builder-hero_657px@2x.png'
import flexImageOne from '@legacy/assets/images/product/website-builder/build-a-business_leadpages_sites-624px@2x.png'
// import flexTwoColumnImage from '@legacy/assets/images/product/website-builder/fast-high-converting-sites_Leadpages-665px@2x.png'
// import siteTestimonialImage1 from '@legacy/assets/images/testimonials/clayton-poland.png'
// import siteTestimonialImage2 from '@legacy/assets/images/testimonials/collin-belt.png'
import circleForestDarkSVG from '@legacy/assets/images/shapes/circle-forest-dark.svg'
import siteTestimonialImage1 from '@legacy/assets/images/testimonials/clayton-poland.png'
import siteTestimonialImage2 from '@legacy/assets/images/testimonials/collin-belt.png'
// import circleForestDarkSVG from '@legacy/assets/images/shapes/circle-forest-dark.svg'
// import wedgeLavenderSVG from '@legacy/assets/images/shapes/wedge-lavender.svg'
import semicircleGraySVG from '@legacy/assets/images/shapes/semicircle-gray.svg'
import wavyLinesHourglassTan from '@legacy/assets/images/shapes/wavy-lines-hourglass-tan.svg'

const WebsiteBuilderProductPage = () => (
  <>
    <SEO
      pathname="/product/website-builder"
      title="Leadpages Website Builder | Create a Website With Ease"
      description="Build high-converting websites in minutes⁠—no coding required. Choose from a collection of templates that keep your online presence professional across devices."
      image="https://static.leadpages.com/images/og/og-sites.jpg"
    />
    <ChildPageHeader
      headingText="Leadpages Site Builder"
      subheadingText="Experience the only online website builder that lets you easily create a high-converting website with code-free customizations."
      outboundCTA={false}
      showCTA
      CTAtext="Visit the template gallery"
      link="/website-templates"
      linkText="Leadpages Sites Template Gallery"
      image={heroImage}
      imageAltText="Capture your audience"
      bgImage={semicircleGraySVG}
      bgImageAltText="Capture your audience background"
    />
    {/* <SpacerRow size="small" />
    <HeadlineSection subtitle="Don’t just build a website. Build a business." /> */}
    <FlexSectionReverse
      image={flexImageOne}
      imageAlt="an image"
      bgImage={circleForestDarkSVG}
      bgImageAlt="background"
      headline="Beautiful websites with the full conversion power of Leadpages"
      caption="Engineered to be the easiest, most effective online website builder, Leadpages sites help you transform web traffic into leads and sales. It’s everything you need to get online and grow."
    />
    <SiteTestimonial
      image={siteTestimonialImage1}
      imageAlt="Clayton Poland"
      header="See What All The Buzz Is About"
      caption="I was able to accomplish in a few hours what took a few weeks in WordPress."
      quote="“For anyone looking to easily convert non-customers to customers, Leadpages is the full toolkit. My site is so easy to set up and manage that it was a no brainer to disconnect my old site.”"
      name="Clayton Poland • Author & Motivational Speaker"
      title="ClaytonPoland.com"
      bgImage={wavyLinesHourglassTan}
      bgImageAlt="tan wavy line background SVG"
    />
    {/* <FlexSectionTwoColumnFeatures
      mainHeading="Create a high-converting website in half the time"
      mainCaption="Forget the time and expense of hiring a web developer—our website creator is the only partner you need."
      feature1Heading="Start with a high-converting template"
      feature1Caption="Get a jump-start to a high-performance website when you start with a professionally designed, mobile-responsive website template."
      feature2Heading="Save time with pre-built web pages"
      feature2Caption="Quickly swap out and add on site pages by using pre-built page templates that seamlessly integrate with any site."
      feature3Heading="Enjoy code-free customizations"
      feature3Caption="Simply drag and drop your content into place and fully customize your site without touching a single line of code—unless, of course, you want to."
      image={getImage(images.flexTwoColumnImage)}
      imageAlt="Publish on WordPress"
      bgImage={wedgeLavenderSVG}
      bgImageAlt="background svg"
    /> */}
    <SiteTestimonial
      image={siteTestimonialImage2}
      imageAlt="Collin Belt"
      caption="Better results with Leadpages sites"
      quote="“The ability to spin up high-converting websites that require zero back-end maintenance means that I can set up sites that deliver better results in a shorter amount of time.”"
      name="Collin Belt"
      title="Founder, BeltCreative"
    />
    <ConversionFirstBuilder />
    <SpacerRow size="small" />
    <HeadlineSection
      supertitle="Customer Success Team"
      title="Real people answering real questions. Imagine that."
      caption="We work hard to build a product that helps your business grow with online marketing, and our support team works even harder to partner with you to generate leads. With custom videos, phone, email, and chat — we’re here when you need us."
    />
    {/* <CustomerSuccessTestimonialsRotator /> */}
    <PublishingOptionsGrid />
    <SpacerRow size="small" backgroundColor="#f7f7f7" />
    <HeadlineSection
      title="Access the complete conversion toolkit"
      caption="Explore more Leadpages tools"
      backgroundColor="#f7f7f7"
    />
    {/* <ToolkitCardsGrid hide={['websites']} /> */}
    <ReadyToGrow headline="Ready for a website that works as hard as you do?" />
  </>
)

export default WebsiteBuilderProductPage
