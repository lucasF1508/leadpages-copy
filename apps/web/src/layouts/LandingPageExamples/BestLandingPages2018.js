import React from 'react'
// components
import BestOfFeature from '@legacy/components/features/BestOfFeature'
import BestOfHeader from '@legacy/components/headers/BestOfHeader'
import SEO from '@legacy/components/SEO'
import SiloDesktopMenu from '@legacy/components/silos/SiloDesktopMenu'
import SiloMobileMenu from '@legacy/components/silos/SiloMobileMenu'
import SiloNavigationCards from '@legacy/components/silos/SiloNavigationCards'
import SiloSidebar from '@legacy/components/silos/SiloSidebar'
import SiloPromoBlock from '@legacy/components/silos/SiloPromoBlock'
// styling
import {
  PageSuperTitle,
  PageTitle,
} from '@legacy/components/silos/BestOfGlobalStyles'
import {
  BodyContainer,
  InnerContainer,
  MainContainer,
  OuterContainer,
} from '@legacy/components/silos/SiloGlobalStyles'
// data
import { pageRoutes, verbiage } from '@legacy/data/landing-page-examples_data'
// images
import image1 from '@legacy/assets/images/silos/best-of/landing-pages/sales-page_young-writers-workshop_leadpages-2018.jpg'
import image2 from '@legacy/assets/images/silos/best-of/landing-pages/sales-page_get-hired-masterclass_leadpages-2018.jpg'
import image3 from '@legacy/assets/images/silos/best-of/landing-pages/free-consultation_maze-digital_leadpages-2018.jpg'
import image4 from '@legacy/assets/images/silos/best-of/landing-pages/sales-page_IB-bootcamp_leadpages-2018.jpg'
import image5 from '@legacy/assets/images/silos/best-of/landing-pages/lead-capture-landing-page-i-heart-umami-leadpages-2018.jpg'
import image6 from '@legacy/assets/images/silos/best-of/landing-pages/thank-you-page_designbetterco-leadpages-2018.jpg'
import image7 from '@legacy/assets/images/silos/best-of/landing-pages/lead-capture_landing-page_jasmine-star_leadpages-2018.jpg'
import image8 from '@legacy/assets/images/silos/best-of/landing-pages/Event landing page-manifestationbabe-leadpages.jpg'
import image9 from '@legacy/assets/images/silos/best-of/landing-pages/freebie-landing-page-yoga-branches_leadpages.jpg'
import image10 from '@legacy/assets/images/silos/best-of/landing-pages/Email Signup-page-Leadpages.jpg'

const BestLandingPages2018 = () => {
  const landingPageFeaturesArray = [
    {
      // 1. The Young Writer’s Workshop Sales Page
      featureType: 'landingpage',
      title: 'The Young Writer’s Workshop Sales Page',
      subtitle: 'Workshop Sales Page',
      useCase: 'Sales Page',
      source: 'Young Writer’s Workshop',
      descriptionText:
        'This long-form landing page is meant to generate high-quality leads who are willing to purchase. A lot of demonstration videos, detailed information, and several testimonials – together they help the landing page succeed.  ',
      image: image1,
      imageAltText: 'best sales page landing page examples 2018',
    },
    {
      // 2. Get Hired Masterplan Sales Page
      featureType: 'landingpage',
      title: 'Get Hired Masterplan Sales Page',
      subtitle: 'Masterclass Sales Page',
      useCase: 'Sales Page',
      source: 'Irina Pichura at Career Manifestations',
      descriptionText:
        'A fantastic landing page that provides engaging copywriting and persuasive argument. It also includes high-quality, real-word visuals, and organizes the copy in a way that looks professional, making it hard for visitors to say no.',
      image: image2,
      imageAltText: 'best sales page landing page examples 2018',
    },
    {
      // 3. Maze Digital Free Consultation Page
      featureType: 'landingpage',
      title: 'Maze Digital Free Consultation Page',
      subtitle: 'Free Consultation Page',
      useCase: 'Free Consultation Page',
      source:
        'Jonathan Mifsud, XERO Developer and Integration Expert at Maze Digital',
      descriptionText:
        'An effective way to get more sales is to create a sales landing page for your product or service. On this page, provide clear information about how you can help prospects, what makes you different, your price, and your offer.',
      image: image3,
      imageAltText: 'best free consutation landing page examples 2018',
    },
    {
      // 4. IB Bootcamp Sales Page
      featureType: 'landingpage',
      title: 'IB Bootcamp Sales Page',
      subtitle: 'Boot Camp Sales Page',
      useCase: 'Sales Page',
      source: 'The Affine Team',
      descriptionText:
        'This landing page features a 4-week live online bootcamp with a lot of benefits, including compelling bonus, a money-back guarantee, a referral offer, transparent pricing & strong price. Consistent illustrations are just the cherry on top.',
      image: image4,
      imageAltText: 'best sales page landing page examples 2018',
    },
    {
      // 5. Asian-Inspired Whole30 Cookbook Lead Generation Landing Page
      featureType: 'landingpage',
      title: 'Asian-Inspired Whole30 Cookbook Lead Generation Landing Page',
      subtitle: 'Lead Generation Landing Page',
      useCase: 'Lead Generation Landing Page',
      source: 'ChihYu Smith, Founder of IHeartUmami.com',
      descriptionText:
        'A clear headline, powerful call to action buttons, well-organized copy, and various reviews from previous customers, these elements are what makes this landing page so successful. If you plan to create a landing page for your next cookbook, remember to include them.  ',
      image: image5,
      imageAltText: 'best lead generation landing page examples 2018',
    },
    {
      // 6. Free Download Thank You Page
      featureType: 'landingpage',
      title: 'Free Download Thank You Page',
      subtitle: 'Thank You Page',
      useCase: 'Thank You Page',
      source: 'Design Better Co.',
      descriptionText:
        'This thank you page lets visitors know where they can find the downloadable file that they opted into to get. It includes a call to action button to recommend visitors to check out the product as well. ',
      image: image6,
      imageAltText: 'best thank you page landing page examples 2018',
    },
    {
      // 7. Branding Bundle Lead Generation Landing Page
      featureType: 'landingpage',
      title: 'Branding Bundle Lead Generation Landing Page',
      subtitle: 'Lead Generation Landing Page',
      useCase: 'Lead Generation Landing Page',
      source: 'Jasmine Star',
      descriptionText:
        'On a landing page, every word counts. Short and sweet copy, direct call to action button, and the background image is relevant to the offer – this is a typical example of a successful lead capture landing page. ',
      image: image7,
      imageAltText: 'best lead generation landing page examples 2018',
    },
    {
      // 8. Bali Retreat Waitlist Signup Event Page
      featureType: 'landingpage',
      title: 'Bali Retreat Waitlist Signup Event Page',
      subtitle: 'Event Landing Page',
      useCase: 'Event Page',
      source: 'Manifestation Babe',
      descriptionText:
        'There are three key things that make this landing page stunning: a benefit-oriented headline, the benefits clearly stated in the form of bullet points and high-quality images that give an inside look at how the retreat at Bali will be. ',
      image: image8,
      imageAltText: 'best event landing page examples 2018',
    },
    {
      // 9. Home Yoga Practice Tips Download Page
      featureType: 'landingpage',
      title: 'Home Yoga Practice Tips Download Page',
      subtitle: 'Lead Generation Landing Page',
      useCase: 'Lead Generation Landing Page',
      source: 'Yoga Branches',
      descriptionText:
        'A landing page tells visitors what they’ll get after taking action and has an irresistible call to action button with the right color and copy. This landing page is simple but powerful enough to convert visitors. ',
      image: image9,
      imageAltText: 'best lead generation landing page examples 2018',
    },
    {
      // 10. New Moon Love Letters Email Signup Page
      featureType: 'landingpage',
      title: 'New Moon Love Letters Email Signup Page',
      subtitle: 'Email Signup Page',
      useCase: 'Lead Generation Landing Page',
      source: 'Pura Prana',
      descriptionText:
        'This landing page includes two call to action buttons, which are placed at the top and at the bottom of the page, as well as reviews to build trust with visitors.',
      image: image10,
      imageAltText: 'best lead generation landing page examples 2018',
    },
  ]

  const activePage = pageRoutes[1].sectionPages[2]

  return (
    <>
      <SEO
        pathname="/best-landing-pages-2018"
        title="Best Landing Pages 2018"
        description="Explore what the top-performing, best landing pages had in common in 2018 — and what timeless strategies you can repurpose today."
        image="https://static.leadpages.com/images/og/og-best-landing-pages-2018.jpg"
      />
      <BestOfHeader
        title={verbiage.main.title}
        supertitle={verbiage.main.supertitle}
      />
      <OuterContainer>
        {/* Desktop Menu Bar */}
        <SiloDesktopMenu pageRoutes={pageRoutes} verbiage={verbiage} />
        {/* Desktop Sidebar Menu */}
        <SiloSidebar pageRoutes={pageRoutes} />
        {/* Mobile Menu */}
        <SiloMobileMenu pageRoutes={pageRoutes} verbiage={verbiage} />
        <InnerContainer>
          {/* Main Page Content */}
          <BodyContainer>
            <MainContainer>
              <PageSuperTitle>{activePage.pageSupertitle}</PageSuperTitle>
              <PageTitle>{activePage.pageTitle}</PageTitle>
              {landingPageFeaturesArray.map((feature, index) =>
                // Throw in a promo block after fifth section
                index === 4 ? (
                  <React.Fragment key={feature.title}>
                    <BestOfFeature props={feature} />
                    <SiloPromoBlock />
                  </React.Fragment>
                ) : (
                  <BestOfFeature key={feature.title} props={feature} />
                )
              )}
              <SiloPromoBlock />
              {/* Navigation Cards Section */}
              <SiloNavigationCards pageRoutes={pageRoutes} onlyShowNextPage />
            </MainContainer>
          </BodyContainer>
        </InnerContainer>
      </OuterContainer>
    </>
  )
}

export default BestLandingPages2018
