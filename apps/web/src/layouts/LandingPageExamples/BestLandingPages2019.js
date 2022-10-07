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
import image1 from '@legacy/assets/images/silos/best-of/landing-pages/Webinar-mathematicallyminded-leadpages.jpg'
import image2 from '@legacy/assets/images/silos/best-of/landing-pages/Freebie-Caption-writing-guide_Dirty-boots-messy-hair-leadpages.jpg'
import image3 from "@legacy/assets/images/silos/best-of/landing-pages/Pre-order_page_Al-Shama'il Al-Muhammadiyya-shamail-leadpages.jpg"
import image4 from '@legacy/assets/images/silos/best-of/landing-pages/Webinar-zimmerman-3-part-video-series-evergreen-opt-in_leadpages.jpg'
import image5 from '@legacy/assets/images/silos/best-of/landing-pages/Freebie_pharmacare-leadpages-bioglan-joint-health-ebook-campaign.jpg'
import image6 from '@legacy/assets/images/silos/best-of/landing-pages/Freebie_queenofquinoa-leadpages-master-meal-planning-pdf-optin.jpg'
import image7 from '@legacy/assets/images/silos/best-of/landing-pages/Giveaway-hotormall-leadpages.jpg'
import image8 from '@legacy/assets/images/silos/best-of/landing-pages/Fitness-challenge-jillfit-leadpages-physiqueweek.jpg'
import image9 from '@legacy/assets/images/silos/best-of/landing-pages/Workshop_thinkcreativecollective-lpages-co-one-week-to-clients-design.jpg'
import image10 from '@legacy/assets/images/silos/best-of/landing-pages/Giveaway-andrewsmedia_leadpages.jpg'
import image11 from '@legacy/assets/images/silos/best-of/landing-pages/Webinar-officiallyquigley-leadpages.jpg'

const BestLandingPages2019 = () => {
  const landingPageFeaturesArray = [
    {
      // 1. Math Teacher’s Workshop Landing Page
      featureType: 'landingpage',
      title: 'Math Teacher’s Workshop Landing Page',
      subtitle:
        'Multiple dates make this webinar landing page lightyears ahead of the rest',
      useCase: 'Online Class',
      source: 'Build Math Minds',
      descriptionText:
        'Creating a landing page for webinars becomes popular because it works so well. If you plan to host a webinar, think about designing a landing page for it. Believe or not, this is one of the best ways to get registrations and find potential customers.  ',
      image: image1,
      imageAltText: 'best webinar landing page examples 2019',
    },
    {
      // 2. Photographer’s Caption Writing Guide Landing Page
      featureType: 'landingpage',
      title: 'Photographer’s Caption Writing Guide Landing Page',
      subtitle: 'Start generating leads with a simple guidebook ',
      useCase: 'Lead Magnet',
      source: 'Dirty Boots and Messy Hair',
      descriptionText:
        'A free guide landing page should focus on how the free guide helps visitors deal with their problem. By showing visitors you’re an expert in that issue, you can build trust and create a long-lasting relationship with them.  ',
      image: image2,
      imageAltText: 'best lead generation landing page examples 2019',
    },
    {
      // 3. Book Pre-Order Landing Page
      featureType: 'landingpage',
      title: 'Book Pre-Order Landing Page',
      subtitle: 'Pre-sale landing pages take the risk away from new releases',
      useCase: 'Sales',
      source: 'Mohammed Aslam & Abdul Aziz Suraqah',
      descriptionText:
        'If you’re looking for a way to validate your idea, you should create a pre-sale landing page. This is a practical way when you’re about to launch a book but wonder how prospects will react to it. By creating a pre-order landing page, you can gain early adopters who show interest in your product. ',
      image: image3,
      imageAltText: 'best sales page landing page examples 2019',
    },
    {
      // 4. Mini-Video Course Landing Page
      featureType: 'landingpage',
      title: 'Mini-Video Course Landing Page',
      subtitle: 'Online courses should be served with a side of social proof ',
      useCase: 'Online Class',
      source: 'Zimmerman Events',
      descriptionText:
        'A course landing page allows you to explain how your course benefits visitors, show reviews and testimonials to build trust, include a picture of yourself to establish credibility, and invite prospects to join. It’s a great way to launch an online course.  ',
      image: image4,
      imageAltText: 'best sales page landing page examples 2019',
    },
    {
      // 5. Joint Health eBook Landing Page
      featureType: 'landingpage',
      title: 'Joint Health eBook Landing Page',
      subtitle: 'eBook lead magnets make it easy to opt in',
      useCase: 'Lead Magnet',
      source: 'Bioglan',
      descriptionText:
        'Offering a free gift is an effective way to generate leads and find potential customers. You can create a separate landing page for this offer and design it in a way that helps qualify and direct visitors.  ',
      image: image5,
      imageAltText: 'best lead generation landing page examples 2019',
    },
    {
      // 6. Meal Planning Freebie Landing Page
      featureType: 'landingpage',
      title: 'Meal Planning Freebie Landing Page',
      subtitle:
        'Attract new customers with an interactive freebie downloadable',
      useCase: 'Lead Magnet',
      source: 'Simply Quinoa',
      descriptionText:
        'The most effective place to show an email opt-in form is on a dedicated landing page. This page should be about what visitors will get after they enter their personal information and remove all other distractions which harm their attention.  ',
      image: image6,
      imageAltText: 'best lead generation landing page examples 2019',
    },
    {
      // 7. Vacuum Giveaway Landing Page
      featureType: 'landingpage',
      title: 'Vacuum Giveaway Landing Page',
      subtitle: 'Grow your email list with a giveaway offer',
      useCase: 'Giveaway',
      source: 'HOTOR',
      descriptionText:
        'To boost your sales, you can give away a free product in a limited time. This can be done effectively by using a landing page. On this page, you can showcase the free gift, add a countdown timer, include social proof, and/or display an email opt-in form.  ',
      image: image7,
      imageAltText: 'best lead generation landing page examples 2019',
    },
    {
      // 8. Fitness Challenge Workout Landing Page
      featureType: 'landingpage',
      title: 'Fitness Challenge Workout Landing Page',
      subtitle: 'Build an online community with a collaborative challenge',
      useCase: 'Challenge',
      source: 'Jill Fit',
      descriptionText:
        'The main goals of a giveaway are to collect leads and increase sales. To achieve these, you need to create an epic landing page that is simple to understand, explains important information, contains high-quality images, and provides an easy way to join the contest. ',
      image: image8,
      imageAltText: 'best lead generation landing page examples 2019',
    },
    {
      // 9. Workshop Sales Page to get Design Clients
      featureType: 'landingpage',
      title: 'Workshop Sales Page to get Design Clients',
      subtitle: 'Prove your expertise with a free webinar',
      useCase: 'Online Class',
      source: 'boss project',
      descriptionText:
        'Stuck with getting registrations for your next workshop? Here is the best idea for your situation: creating a landing page. By doing this, you can engage with visitors and turn them into your potential customers.  ',
      image: image9,
      imageAltText: 'best lead generation landing page examples 2019',
    },
    {
      // 10. Microphone Giveaway Landing Page
      featureType: 'landingpage',
      title: 'Microphone Giveaway Landing Page',
      subtitle: 'Grow your email list with a giveaway offer',
      useCase: 'Giveaway',
      source: 'JZ Microphones',
      descriptionText:
        'A giveaway landing page will create a big announcement about your contest. By creating a landing page, you can unlock the hidden power of giveaways and gradually turn potential customers into real customers. ',
      image: image10,
      imageAltText: 'best lead generation landing page examples 2019',
    },

    {
      // 11. Instagram Growth Secrets Training Landing Page
      featureType: 'landingpage',
      title: 'Instagram Growth Secrets Training Landing Page',
      subtitle: 'Give away a secret or two to get a qualified lead',
      useCase: 'Online Class',
      source: 'Officially Quigley',
      descriptionText:
        'Webinar landing pages are a great way to educate your customers, provide insight and collect more registrations. Take advantage of this technique to get more potential customers to register for your next event. ',
      image: image11,
      imageAltText: 'best webinar landing page examples 2019',
    },
  ]

  const activePage = pageRoutes[1].sectionPages[1]
  return (
    <>
      <SEO
        pathname="/best-landing-pages-2019"
        title="Best Landing Pages 2019"
        description="What did the best landing pages in 2019 have in common? Find out what worked, what didn't, and what you can do better in your own conversion marketing."
        image="https://static.leadpages.com/images/og/og-best-landing-pages-2019.jpg"
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

export default BestLandingPages2019
