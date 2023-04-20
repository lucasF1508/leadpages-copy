import React from 'react'
// components
import SiloHeader from '@legacy/components/headers/SiloHeader'
import SiloDesktopMenu from '@legacy/components/silos/SiloDesktopMenu'
import SiloMobileMenu from '@legacy/components/silos/SiloMobileMenu'
import SiloNavigationCards from '@legacy/components/silos/SiloNavigationCards'
import SiloSidebar from '@legacy/components/silos/SiloSidebar'
// styles
import {
  BodyContainer,
  H2,
  H3,
  InnerContainer,
  MainContainer,
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

const WhatIsAGoodConversionRate = () => (
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
            <PageSupertitle>Chapter 3</PageSupertitle>
            <PageTitle>What’s a Good Conversion Rate?</PageTitle>
            <ParagraphLarge>
              <i>
                How do you know if your conversion rate is working for you? Does
                your conversion rate demonstrate that you’re connecting with
                visitors successfully... or does it mean you’re losing traffic
                and missing out on potential revenue?
              </i>
            </ParagraphLarge>
            <ParagraphSmall>
              We know you’re results-oriented, so you love metrics and numbers.
              You want a specific goal to hit. You want to see which conversion
              rates are good, which are great, and which need improvement.
            </ParagraphSmall>
            <ParagraphSmall>
              We can give you some numbers, but the numbers alone don’t say
              enough.
            </ParagraphSmall>
            <H3>A “good” conversion rate</H3>
            <ParagraphSmall>
              Broadly speaking, a common conversion rate for an email opt-in
              landing page is between 5% and 15%. The companies with the most
              success tend to convert at around 20-25%. And the very cream of
              the crop achieves conversion rates of 30% or higher.
            </ParagraphSmall>
            <ParagraphSmall>
              But, in a lot of respects, these numbers are arbitrary. You’ll get
              a lot of “expert advice” on the number that will show success or
              not. These numbers are, for the most part, too general to be
              helpful.
            </ParagraphSmall>
            <ParagraphSmall>
              All in all, it’s up to you to decide the right conversion rate for
              your website.
            </ParagraphSmall>
            <H3>Make your own “good” conversion rate</H3>
            <ParagraphSmall>
              We think that the “best conversion rate” is any number higher than
              what you’re currently doing. Even a one percent bump in conversion
              will take your business to the next level.
            </ParagraphSmall>
            <ParagraphSmall>
              Start with a baseline number. What is your current conversion rate
              for a specific page or action? What does this conversion rate mean
              for your business right now?&nbsp;
            </ParagraphSmall>
            <ParagraphSmall>
              Then, consider what your ideal conversion rate would be for that
              action. 100% is everyone’s ideal, but keep it reasonable. What
              conversion rate percentage could completely change the way your
              business is currently run? How would your sales journey change if
              your conversion rate was bumped up?
            </ParagraphSmall>
            <ParagraphSmall>
              For example, you currently have a 1% conversion rate of site
              visitors to leads. Of 100,000 viewers, you get 1,000 leads. Of
              those leads, 2% convert to sales later in the sales process.
              That’s 20 sales. Of 100,000 visitors, you get 20 sales.
            </ParagraphSmall>
            <ParagraphSmall>
              But what if you brought your traffic-to-lead conversion rate up to
              even 4%? Now, of 100,000 viewers, you have 4,000 leads. With a 2%
              sales conversion, you get 80 sales. That’s 60 more sales than you
              otherwise would’ve gotten.
            </ParagraphSmall>
            <ParagraphSmall>
              Then if you also boost your sales conversion to 4%, you’d have 160
              total sales.
            </ParagraphSmall>
            <ParagraphSmall>
              Small adjustments in your conversion rate optimization can start
              to show exponential growth.
            </ParagraphSmall>
            <ParagraphSmall>
              You don’t need to overwhelm yourself. If your current conversion
              rate is 2%, you likely can’t get to 15% overnight. But with a few
              changes and an emphasis on optimization, you can improve your
              conversion rate and get more people to take the desired action.
            </ParagraphSmall>
            <H3>Don’t forget the traffic</H3>
            <ParagraphSmall>
              Let’s also take one more thing into account. Conversion rate
              doesn’t work on its own. It has a direct connection to the quality
              and quantity of your web traffic as well.
            </ParagraphSmall>
            <ParagraphSmall>
              For example, let’s say you had a conversion rate of 100%. That may
              sound fantastic, but it may also signal very few website visitors.
              Two conversions from two visitors won’t take you very far. But a
              conversion rate of 5% with 10,000 viewers will give you 500
              conversions.
            </ParagraphSmall>
            <ParagraphSmall>
              Never look at the conversion rate in isolation. You want to
              evaluate your rate alongside traffic and total conversions.
            </ParagraphSmall>
            <H2>Changing your conversion rate calculation</H2>
            <ParagraphSmall>
              If you want to get more out of your sales page, then you’ll want a
              higher conversion rate. In the landing page example above, you’re
              only getting 300 emails for every 10,000 people that see your
              page. That’s not a huge return, and you may not be getting the
              biggest bang for your buck on the acquisition costs of pulling
              those 10,000 people in the door.
            </ParagraphSmall>
            <ParagraphSmall>
              The higher the conversion rate, the more people are interacting
              with your business and taking those actions that bring your
              business to the next level. Plus, you’re getting a higher return
              on investment by converting more of the traffic that you’ve
              already attracted.
            </ParagraphSmall>
            <ParagraphSmall>
              So it never hurts to work on boosting your conversion rate.
              Whether you’re at 1% or 10%, conversion optimization is about
              encouraging even more conversions, even more leads, and even more
              sales.
            </ParagraphSmall>
            <ParagraphSmall>
              Calculating your baseline conversion rate helps you understand
              where you are versus where you want to be.
            </ParagraphSmall>
            <ParagraphSmall>
              Now it’s time to make the changes to your page that will start to
              convert more. Click to the next chapter to learn how to improve
              your conversion rate.
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

export default WhatIsAGoodConversionRate
