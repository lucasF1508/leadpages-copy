import React from 'react'
import { styled } from '@design'
// components
import ChildPageHeader from '@legacy/components/product/ChildPageHeader'
// import CustomerSuccessTestimonialsRotator from '@legacy/components/rotators/CustomerSuccessTestimonialsRotator'
import FlexSectionTwoColumnFeatures from '@legacy/components/product/FlexSectionTwoColumnFeatures'
import HeadlineSection from '@legacy/components/layout/HeadlineSection'
import PopUpTogether from '@legacy/components/product/PopUpTogether'
// import ProductFeaturesClickReveal from '@legacy/components/click-reveals/ProductFeaturesClickReveal'
// import ProductFeaturesRotator from '@legacy/components/rotators/ProductFeaturesRotator'
// import ProductTestimonialsRotator from '@legacy/components/rotators/ProductTestimonialsRotator'
// import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import SEO from '@legacy/components/SEO'
import SpacerRow from '@legacy/components/SpacerRow'
// import ToolkitCardsGrid from '@legacy/components/grids/ToolkitCardsGrid'
// animations
// import Animation_ClickTriggeredPopup from '@legacy/components/animations/Animation_ClickTriggeredPopup'
// import Animation_ExitIntentPopup from '@legacy/components/animations/Animation_ExitIntentPopup'
// import Animation_GuestBioPopup from '@legacy/components/animations/Animation_GuestBioPopup'
// import Animation_LandingPagePopup from '@legacy/components/animations/Animation_LandingPagePopup'
// import Animation_SidebarPopup from '@legacy/components/animations/Animation_SidebarPopup'
// import Animation_TimeDelayedPopup from '@legacy/components/animations/Animation_TimeDelayedPopup'
// images
import heroImage from '@legacy/assets/images/heros/pop-up-builder-hero_634px@2x.png'
import flexSectionTwoColumnImage from '@legacy/assets/images/product/pop-up-builder/flexible-publishing-options-702px@2x.png'
// import circleSandSideSVG from '@legacy/assets/images/shapes/circle-sand-side.svg'
import semicircleGraySVG from '@legacy/assets/images/shapes/semicircle-gray.svg'
import wedgeRoseSVG from '@legacy/assets/images/shapes/wedge-rose.svg'

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

const PopUpBuilderProductPage = () => {
  // const productFeaturesArray1 = [
  //   {
  //     title: 'Trigger events',
  //     text: 'Trigger your pop-up to appear whenever a visitor clicks on an image, button, or hyperlink text.',
  //     animation: <Animation_ClickTriggeredPopup active duration={86400000} />,
  //   },
  //   {
  //     title: 'Time delays',
  //     text: 'Trigger your pop-up to appear after a certain amount of time has passed or a certain number of page views have occurred.',
  //     animation: <Animation_TimeDelayedPopup active duration={86400000} />,
  //   },
  //   {
  //     title: 'Exit intent pop-ups',
  //     text: 'Trigger an exit pop-up to appear when visitors move their mouse in a way that indicates an intent to leave the page.',
  //     animation: <Animation_ExitIntentPopup active duration={86400000} />,
  //   },
  // ]

  // const productFeaturesArray2 = [
  //   {
  //     title: 'Landing page pop-up',
  //     text: 'Simplify your landing page design and focus your audience on the opt-in form by including a pop-up that appears on the click of a button.',
  //     animation: <Animation_LandingPagePopup active duration={86400000} />,
  //   },
  //   {
  //     title: 'Blog sidebar button',
  //     text: 'Invite your blog visitors to subscribe to your email newsletter or blog feed by including a sidebar image that triggers a pop-up opt-in form to appear.',
  //     animation: <Animation_SidebarPopup active duration={86400000} />,
  //   },
  //   {
  //     title: 'Guest blog link',
  //     text: 'Reach new audiences and collect opt-ins for your email list by including a pop-up link within your guest blog post’s bio box.',
  //     animation: <Animation_GuestBioPopup active duration={86400000} />,
  //   },
  // ]

  return (
    <>
      <SEO
        pathname="/product/pop-up-builder"
        title="Add Pop-ups to Any Landing Page or Website in Minutes | Leadpages"
        description="Easily build and add pop-ups to any website or landing page with Leadpages Pop-up Builder. Collect more leads and scale quickly. Try for free for 14 days."
        image="https://static.leadpages.com/images/og/og-pop-ups.jpg"
      />
      <ChildPageHeader
        headingText="Pop-Ups"
        subheadingText="Capture your audience at the peak of their interest with the Leadpages pop-up builder.  Easily add pop-ups to any landing page, web page, or website with just a few clicks. "
        showLB
        CTAtext="See a pop-up in action "
        dataleadboxpopup="JyF9xQ5pQvPfSBw675N93n"
        dataleadboxdomain="lps.leadpages.net"
        linkText="Capture your audience"
        image={heroImage}
        imageAltText="Capture your audience"
        bgImage={semicircleGraySVG}
        bgImageAltText="Capture your audience background"
      />
      <SpacerRow size="small" />
      <HeadlineSection
        title="Target your audience at just the right time"
        caption="Find the right moment for your message by choosing from behavior and time-triggered pop-up
        settings."
      />
      {/* this section uses a click-reveal on desktop and a rotator on mobile */}
      {/* <ClickRevealSection_Desktop>
        <ProductFeaturesClickReveal
          animations
          backgroundImage={circleSandSideSVG}
          imageSide="left"
          innerContainerMinHeight={450}
          instanceId="first"
          itemArray={productFeaturesArray1}
        />
      </ClickRevealSection_Desktop>
      <RotatorSection_Mobile>
        <ProductFeaturesRotator animations itemArray={productFeaturesArray1} />
      </RotatorSection_Mobile>
      <SpacerRow size="small" /> */}
      <FlexSectionTwoColumnFeatures
        mainHeading="Flexible publishing options"
        mainCaption="Easily publish your pop-up on a web page, landing page, or third-party website without hiring a developer."
        feature1Heading="Publish on a landing page"
        feature1Caption="Most landing page templates come pre-loaded with on-page pop-ups ready for you to edit, or easily add one to any page you’re working on."
        feature2Heading="Publish on a website"
        feature2Caption="Easily put your pop-up on any platform or website that allows for the use of HTML and JavaScript, such as WordPress or Squarespace."
        feature3Heading="Publish on WordPress"
        feature3Caption="With the Leadpages pop-up WordPress plugin, it’s easy to publish directly on your WordPress website or blog."
        image={flexSectionTwoColumnImage}
        imageAlt="Publish on WordPress"
        bgImage={wedgeRoseSVG}
        bgImageAlt="background svg"
      />
      <PopUpTogether />
      <SpacerRow size="small" />
      <HeadlineSection
        title="Get inspired"
        caption="With Leadpages pop-up builder, the possibilities are endless."
      />
      {/* this section uses a click-reveal on desktop and a rotator on mobile */}
      {/* <ClickRevealSection_Desktop>
        <ProductFeaturesClickReveal
          animations
          backgroundImage={circleSandSideSVG}
          imageSide="right"
          innerContainerMinHeight={450}
          instanceId="second"
          itemArray={productFeaturesArray2}
        />
      </ClickRevealSection_Desktop>
      <RotatorSection_Mobile>
        <ProductFeaturesRotator animations itemArray={productFeaturesArray2} />
      </RotatorSection_Mobile>
      <SpacerRow size="medium" />
      <ProductTestimonialsRotator />
      <SpacerRow size="small" />
      <HeadlineSection
        supertitle="Customer Success Team"
        title="Real people answering real questions. Imagine that."
        caption="We work hard to build a product that helps your business grow with online marketing, and our support team works even harder to partner with you to generate leads. With custom videos, phone, email, and chat — we’re here when you need us."
      />
      <CustomerSuccessTestimonialsRotator />
      <SpacerRow size="small" backgroundColor="$grayAlt" />
      <HeadlineSection
        title="Access the complete conversion toolkit"
        caption="Explore more Leadpages tools"
        backgroundColor="$grayAlt"
      ></HeadlineSection>
      <ToolkitCardsGrid hide={['popups']} />
      <ReadyToGrow headline="Don't let your web traffic slip through the cracks." /> */}
    </>
  )
}

export default PopUpBuilderProductPage
