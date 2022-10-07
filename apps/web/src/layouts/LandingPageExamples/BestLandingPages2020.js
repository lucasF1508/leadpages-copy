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
import image1 from '@legacy/assets/images/silos/best-of/landing-pages/sales-page_joyouscookbook_leadpages-2020.jpg'
import image2 from '@legacy/assets/images/silos/best-of/landing-pages/Webinar_Cynz-Cakes-leadpages_2020.jpg'
import image3 from '@legacy/assets/images/silos/best-of/landing-pages/contest-page_YKTR_leadpages-2020.jpg'
import image4 from '@legacy/assets/images/silos/best-of/landing-pages/lead-generation_email-template-download-page_jennakutcher_leadpages-2020.jpg'
import image5 from '@legacy/assets/images/silos/best-of/landing-pages/sales-page_brand-design-workbooks_leadpages-2020.jpg'
import image6 from '@legacy/assets/images/silos/best-of/landing-pages/course-landing-page_the-budget-blueprint_leadpages-2020.jpg'
import image7 from '@legacy/assets/images/silos/best-of/landing-pages/giveaway-landing-page_quite-remarkable_leadpages-2020.jpg'
import image8 from '@legacy/assets/images/silos/best-of/landing-pages/masterclass-page_mariah-coz_course-launch_leadpages-2020.jpg'
import image9 from '@legacy/assets/images/silos/best-of/landing-pages/lead-generation-page-auburn-game-day-collection-leadpages-2020.jpg'
import image10 from '@legacy/assets/images/silos/best-of/landing-pages/lead-generation-landing-page_download_leadpages-2020.jpg'
import image11 from '@legacy/assets/images/silos/best-of/landing-pages/lead-generation_blacksmith-tool-guide-download_leadpages-2020.jpg'
import image12 from '@legacy/assets/images/silos/best-of/landing-pages/online-course-leadpages-2020.jpg'
import image13 from '@legacy/assets/images/silos/best-of/landing-pages/lead-generation_Instagram-editing-apps_download-leadpages-2020.jpg'
import image14 from '@legacy/assets/images/silos/best-of/landing-pages/sales-page_yoga-notes_leadpages-2020.jpg'

const BestLandingPages2020 = () => {
  const landingPageFeaturesArray = [
    {
      // 1. Joyous Cookbook Pre-Order & Lead Generation Landing Page
      featureType: 'landingpage',
      title: 'Joyous Cookbook Pre-Order & Lead Generation Landing Page',
      subtitle: 'Generate leads even before your product launches',
      useCase: 'Lead Magnet',
      source: 'Joyous Health',
      descriptionText:
        'Have a hardcover book, an ebook, a product, a website or an app that’s coming soon? Consider creating a dedicated landing page to promote your offering, build excitement prior to your launch, and build a targeted list for early adopters interested in your product.  ',
      image: image1,
      imageAltText: 'best lead generation landing page examples 2020',
    },
    {
      // 2. Cynz Cakes Webinar Landing Page
      featureType: 'landingpage',
      title: 'Cynz Cakes Webinar Landing Page',
      subtitle: 'Collect registrations and pre-qualify your prospects',
      useCase: 'Online Class',
      source: 'Cynz Cakes',
      descriptionText:
        'A webinar landing page tells visitors what they’ll learn, how they can join, and who is the host. It’s a good way to connect with potential customers and get more qualified leads for your products/services. ',
      image: image2,
      imageAltText: 'best webinar landing page examples 2020',
    },
    {
      // 3. YKTR Shoe Giveaway Landing Page
      featureType: 'landingpage',
      title: 'YKTR Shoe Giveaway Landing Page',
      subtitle: 'Reach new audiences with an irresistible giveaway',
      useCase: 'Giveaway',
      source: 'YKTR',
      descriptionText:
        'By creating a landing page for your contest, you give visitors a good way to tweet, share, or pin it, which can help your contest go viral. This way, you can attract more contest entries and collect potential customers who are willing to purchase from you. ',
      image: image3,
      imageAltText: 'best giveaway landing page examples 2020',
    },
    {
      // 4. Email Template Freebie Landing Page
      featureType: 'landingpage',
      title: 'Email Template Freebie Landing Page',
      subtitle:
        'Generate leads with a downloadable resource that gets right to the (pain) point',
      useCase: 'Lead Magnet',
      source: 'Jenna Kutcher',
      descriptionText:
        'Not everyone knows how to write a good email, especially when it comes to email marketing. It’s time to create a landing page and give away your collection of email templates. You’ll get more potential customers for your products. ',
      image: image4,
      imageAltText: 'best lead generation landing page examples 2020',
    },
    {
      // 5. Brand Design Workbook Sales Landing Page
      featureType: 'landingpage',
      title: 'Brand Design Workbook Sales Landing Page',
      subtitle: 'Explore a sales page that pulls out all the stops',
      useCase: 'Sales',
      source: 'Delightfully Designing',
      descriptionText:
        'Working on launching a workbook but don’t know how to sell it? Think about creating a landing page where you explain the benefits of your workbook, showcase testimonials/reviews, and set a countdown timer to limit the deal. This is a great way to get your workbook noticed. ',
      image: image5,
      imageAltText: 'best sales page landing page examples 2020',
    },
    {
      // 6. Budget Blueprint Email Course Landing Page
      featureType: 'landingpage',
      title: 'Budget Blueprint Email Course Landing Page',
      subtitle: 'Capture customers for your online course',
      useCase: 'Online Class',
      source: 'The Budget Mom',
      descriptionText:
        'No doubt that creating a landing page is an effective way to sell an online course. Visitors need detailed information about the course, especially what they’ll learn and how it helps them solve their problem. A landing page will allow you to provide prospects whatever they want to know.  ',
      image: image6,
      imageAltText: 'best ecourse landing page examples 2020',
    },
    {
      // 7. iPad Giveaway Contest Landing Page
      featureType: 'landingpage',
      title: 'iPad Giveaway Contest Landing Page',
      subtitle:
        'Contestants can’t help but click on this high-converting offer',
      useCase: 'Giveaway',
      source: 'Quite Remarkable',
      descriptionText:
        'Think about running a giveaway but don’t know how to promote it? The solution is simple: create a dedicated landing page for your giveaway. By doing this, you can easily engage with existing customers, attract more followers/subscribers, and gradually turn them into real customers.  ',
      image: image7,
      imageAltText: 'best giveaway landing page examples 2020',
    },
    {
      // 8. Course Launch Framework Masterclass Page
      featureType: 'landingpage',
      title: 'Course Launch Framework Masterclass Page',
      subtitle: 'A masterful masterclass landing page',
      useCase: 'Online Class',
      source: 'Mariah Coz',
      descriptionText:
        'Think of a course landing page as a way to explain how your course stands out from the crowd. What makes it different from other online courses? Visitors want to know this, and once you tell them the why, they’ll join. Try to make use of a landing page to showcase your offer.  ',
      image: image8,
      imageAltText: 'best course landing page examples 2020',
    },
    {
      // 9. Auburn Gameday Collection Download Page
      featureType: 'landingpage',
      title: 'Auburn Gameday Collection Download Page',
      subtitle: 'Sometimes a simple landing page is all you need',
      useCase: 'Lead Magnet',
      source: 'Scarlet & Gold',
      descriptionText:
        'A landing page isn’t only a lead generation tool but also a technique to unlock a flood of sales for your product and maximize your conversion. In the case of this collection launch, it can’t be more effective than using a landing page.  ',
      image: image9,
      imageAltText: 'best lead generation landing page examples 2020',
    },
    {
      // 10. Workshop Landing Page
      featureType: 'landingpage',
      title: 'Workshop Landing Page',
      subtitle: 'Offering a workshop can do wonders for your lead generation',
      useCase: 'Workshop',
      source: 'Classy Career Girl',
      descriptionText:
        'How do you convince your visitors to join your workshop? The answer is to create a dedicated landing page for it. This page will give you room to explain how your workshop benefits visitors and build a relationship with them.  ',
      image: image10,
      imageAltText: 'best course landing page examples 2020',
    },
    {
      // 11. Blacksmith Tool Guide Download Page
      featureType: 'landingpage',
      title: 'Blacksmith Tool Guide Download Page',
      subtitle: 'Offer a compelling lead magnet to build your list',
      useCase: 'Lead Magnet',
      source: 'Essential Craftsman',
      descriptionText:
        'A killer lead generation landing page works like a charm. It will bring you a lot of qualified leads and possibly more sales that you can’t get if you use any other marketing technique. It’s time to create a landing page for your next offer.  ',
      image: image11,
      imageAltText: 'best lead generation landing page examples 2020',
    },
    {
      // 12. Online Course Landing Page
      featureType: 'landingpage',
      title: 'Online Course Landing Page',
      subtitle: 'Showcase your online course and collect registrants',
      useCase: 'Online Class',
      source: 'PUCRS Online',
      descriptionText:
        'A fantastic landing page improves your email list, conversion rates, and drive your business. No matter what you’re creating, an online course landing page or a sales landing page, you’re in the right track.  ',
      image: image12,
      imageAltText: 'best course landing page examples 2020',
    },
    {
      // 13. Free Guide Landing Page
      featureType: 'landingpage',
      title: 'Free Guide Landing Page',
      subtitle: 'Guide your prospective customers to a gated offer',
      useCase: 'Lead Magnet',
      source: 'Beth Kirby',
      descriptionText:
        'You can create a landing page for your free guide to share it with the world, get more emails, and increase your conversion rate. Even if your offer is not big, if you know how to make it fantastic by using a landing page, you have more chances to succeed. ',
      image: image13,
      imageAltText: 'best lead generation landing page examples 2020',
    },
    {
      // 14. Yoga Sequence Book Sales Page with Free Chapter
      featureType: 'landingpage',
      title: 'Yoga Sequence Book Sales Page with Free Chapter ',
      subtitle: 'Showcase your product with samples and powerful sales page',
      useCase: 'Lead Magnet',
      source: 'Eva Lotta Lamm',
      descriptionText:
        'You’re an expert in something and want to share your knowledge with the world? Create a landing page to do that. This is an effective way to impress visitors, make them want to come back to you for more, and boost your conversions. ',
      image: image14,
      imageAltText: 'best book sales landing page examples 2020',
    },
  ]

  const activePage = pageRoutes[1].sectionPages[0]

  return (
    <>
      <SEO
        pathname="/best-landing-pages-2020"
        title="Best Landing Pages 2020"
        description="What do the best landing pages in 2020 have in common? Find out what works, what doesn't, and what you can do better in your own conversion marketing."
        image="https://static.leadpages.com/images/og/og-best-landing-pages-2020.jpg"
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
                //  Throw in a promo block after fifth section
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

export default BestLandingPages2020
