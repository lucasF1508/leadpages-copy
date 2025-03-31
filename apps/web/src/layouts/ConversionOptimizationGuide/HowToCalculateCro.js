import React from 'react'
// components
import SiloHeader from '@legacy/components/headers/SiloHeader'
import SiloDesktopMenu from '@legacy/components/silos/SiloDesktopMenu'
import SiloMobileMenu from '@legacy/components/silos/SiloMobileMenu'
import SiloNavigationCards from '@legacy/components/silos/SiloNavigationCards'
import SiloSidebar from '@legacy/components/silos/SiloSidebar'
import Link from 'next/link'
// styles
import {
  ArticleLink,
  BodyContainer,
  DefinitionHolder,
  H2,
  H3,
  ImageWithBorder,
  InnerContainer,
  MainContainer,
  OutboundLink,
  OuterContainer,
  PageSupertitle,
  PageTitle,
  ParagraphLarge,
  ParagraphSmall,
} from '@legacy/components/silos/SiloGlobalStyles'
// data
import {
  pageRoutes,
  verbiage,
} from '@legacy/data/conversion-optimization-guide_data'
// images
import image1 from '@legacy/assets/images/silos/conversion-optimization-guide/0-3-how-to-calculate-conversion-rate-816px@2x.jpg'

const HowToCalculateCRO = () => (
  <>
    <SiloHeader
      title={verbiage.main.title}
      supertitle={verbiage.main.supertitle}
    />
    <OuterContainer>
      {/* Desktop Menu Bar */}
      <SiloDesktopMenu
        pageRoutes={pageRoutes}
        verbiage={verbiage}
        numberOfColumns={pageRoutes.length}
      ></SiloDesktopMenu>
      {/* Desktop Sidebar Menu */}
      <SiloSidebar pageRoutes={pageRoutes}></SiloSidebar>
      {/* Mobile Menu */}
      <SiloMobileMenu
        pageRoutes={pageRoutes}
        verbiage={verbiage}
      ></SiloMobileMenu>
      <InnerContainer>
        {/* Main Page Content */}
        <BodyContainer>
          <MainContainer>
            <PageSupertitle>Chapter 2</PageSupertitle>
            <PageTitle>How Do I Calculate My Conversion Rate?</PageTitle>
            <ParagraphLarge>
              Your conversion rate measures the performance and effectiveness of
              your landing page or website page. It’s the number that tells you
              how many people are taking a specific action that drives your
              business forward.
            </ParagraphLarge>
            <ParagraphLarge>
              <i>
                So how do you calculate conversion rate? What do these
                calculations do for your conversion rate optimization?
              </i>
            </ParagraphLarge>
            <H2>What is a conversion rate?</H2>
            <ParagraphSmall>
              Your conversion rate tells you how many page visitors are taking
              the desired action.
            </ParagraphSmall>
            <ParagraphSmall>
              For example, you want visitors on your landing page to input their
              email to receive a PDF downloadable. That’s the “action.” When
              someone takes that action, they “convert” from a visitor to a
              lead.
            </ParagraphSmall>
            <ParagraphSmall>
              The number of people who input their email is the number of
              conversions your page has and measures how successful your page is
              at getting those conversions.
            </ParagraphSmall>
            <ParagraphSmall>
              Another example would be making a sale on a&nbsp;
              <Link href="/templates/sales" passHref legacyBehavior>
                <ArticleLink aria-label="Sales Templates">
                  sales page.
                </ArticleLink>
              </Link>
              &nbsp; The lead then “converts” into a customer once they’ve made
              a purchase. How many leads are becoming customers? This tells you
              how successful that sales page is.
            </ParagraphSmall>
            <H2>How to calculate conversion rate</H2>
            <ParagraphSmall>
              Let’s do some math to get your conversion rate. Take the number of
              people who took the “conversion action” and divide it by the total
              number of sessions or views.
            </ParagraphSmall>
            <ParagraphSmall>
              The website conversion rate formula:{' '}
              <b># of conversions ÷ # of views/sessions</b>
            </ParagraphSmall>
            <ImageWithBorder
              image={image1}
              alt="How to calculate conversion rate"
              title="How to calculate conversion rate"
            />
            <ParagraphSmall>
              Let’s look at sales on your sales page as an example. The goal of
              the page is for customers to make a purchase.
            </ParagraphSmall>
            <ParagraphSmall>
              Your sales page gets 500 unique views. These are referred to as
              “sessions.”
            </ParagraphSmall>
            <DefinitionHolder>
              <H3>Note: </H3>
              <ParagraphSmall>
                This can include the same visitor viewing more than once. For
                example, you could have 400 unique visitors with 500 sessions
                (unique views), if some of your viewers visited more than once.
              </ParagraphSmall>
            </DefinitionHolder>
            <ParagraphSmall>
              Now, of those 500 views, you make 25 sales.
            </ParagraphSmall>
            <ParagraphSmall>
              To get your conversion rate, you divide 25 (conversions) by 500
              (sessions) and get 0.05. This means you have a 5% conversion rate
              for that sales page.
            </ParagraphSmall>
            <ParagraphSmall>
              That may sound low, but that’s actually pretty good for a sales
              page rate. We’ll get into what a “good” conversion rate is in a
              little bit.
            </ParagraphSmall>
            <ParagraphSmall>
              Let’s look at another quick example, but with backward math. Let’s
              say the goal of your landing page is to collect emails in exchange
              for a lead magnet. Your landing page is currently converting at a
              rate of 3%. You have 10,000 unique views. How many email addresses
              are you getting? Multiply the number of views (10,000) by the
              conversion percent (0.03), and you’ll get the number of
              conversions you’ll end up with (300). So you’re getting 300
              emails.
            </ParagraphSmall>
            <H2>How to find and analyze conversion rate data</H2>
            <ParagraphSmall>
              You can use your Leadpages analytics dashboard or your&nbsp;
              <OutboundLink
                href="https://marketingplatform.google.com/about/analytics/"
                aria-label="Google Analytics"
              >
                Google Analytics
              </OutboundLink>
              &nbsp; to find this data and see how many visitors are on each
              page and which actions those unique visitors have taken. For a
              complete understanding of how your web visitors behave, easily ad
              tracking code to your website and landing pages (such as your
              Google Analytics tracking code or Facebook Ad pixel) to track
              specific actions, like Facebook ad conversions or blog subscribers
              or landing page purchases.
            </ParagraphSmall>
            <ParagraphSmall>
              You can also manually calculate your conversion rate by seeing how
              many people visited a page versus how many people converted.
            </ParagraphSmall>
            <H3>Calculate conversion rate in Excel</H3>
            <ParagraphSmall>
              If you’re making continuous adjustments to your landing page or
              website content and want to track your conversion rate and content
              changes, keep a running log in Excel.
            </ParagraphSmall>
            <ParagraphSmall>
              For a basic calculation, you just need three columns. Column 1 is
              conversions, column 2 is sessions, and the third column will be
              your calculated conversion rate, then add notes about the content
              changes you’ve made and results of past split tests.
            </ParagraphSmall>
            <ParagraphSmall>
              What’s most important is to use Excel to capture and track all of
              your tests’ learnings. Utilize a new sheet for each variable, and
              keep track of everything you learn. This can help you make
              decisions in the future, not only for that specific page but also
              for other pages moving forward. The more data you keep track of,
              the better (and easier) you’ll be able to optimize engagement and
              conversion.
            </ParagraphSmall>

            <SiloNavigationCards
              pageRoutes={pageRoutes}
              onlyShowNextPage
            ></SiloNavigationCards>
          </MainContainer>
        </BodyContainer>
      </InnerContainer>
    </OuterContainer>
  </>
)

export default HowToCalculateCRO
