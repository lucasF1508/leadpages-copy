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
  StyledImageComponent,
  ImageWithBorder,
  InnerContainer,
  ListItem,
  MainContainer,
  OL,
  OutboundLink,
  OuterContainer,
  PageSupertitle,
  PageTitle,
  ParagraphLarge,
  ParagraphSmall,
  UL,
} from '@legacy/components/silos/SiloGlobalStyles'
// data
import {
  pageRoutes,
  verbiage,
} from '@legacy/data/conversion-optimization-guide_data'
// images
import image1 from '@legacy/assets/images/silos/conversion-optimization-guide/0-1-what is conversion rate optimization-v3_816px@2x.jpg'
import image2 from '@legacy/assets/images/silos/conversion-optimization-guide/0-3-how-to-calculate-conversion-rate-816px@2x.jpg'
import image3 from '@legacy/assets/images/silos/conversion-optimization-guide/4-1-steps-to-improve-your-conversion-rate-816px@2x.jpg'
import image4 from '@legacy/assets/images/silos/conversion-optimization-guide/4-2-Survey-your-audience-816px@2x.jpg'
import image5 from '@legacy/assets/images/silos/conversion-optimization-guide/4-4-ab-test-design-652px@2x.jpg'

const WhatIsConversionOptimization = () => (
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
            <PageSupertitle>Chapter 1</PageSupertitle>
            <PageTitle>
              What is Conversion Rate Optimization (& What are the Benefits)?
            </PageTitle>
            <ParagraphLarge>
              <i>
                Is your site as successful as it could be? Is your landing page
                or website performing at its peak—or are leads and sales
                slipping away?
              </i>
              &nbsp; If your web pages aren’t meeting your objectives, you’re
              likely not focused on optimizing your conversion rate. Conversion
              rate optimization is the process of curating your page in a way
              that gets more people to take a specific action.
            </ParagraphLarge>
            <H2>What is conversion rate optimization?</H2>
            <ParagraphSmall>
              Conversion rate optimization is, in essence, the following 4-step
              process:
            </ParagraphSmall>
            <OL>
              <ListItem>
                <b>Analyze current conversion</b> by looking at all the
                variables that are influencing your CRO.
              </ListItem>
              <ListItem>
                <b>Talk to your audience</b> to understand why your visitors are
                leaving as opposed to converteding.
              </ListItem>
              <ListItem>
                <b>
                  Make changes and focus your efforts on improving things your
                  audience provided feedback on.
                </b>
              </ListItem>
              <ListItem>
                <b>
                  Continuously test your changes to determine what’s working
                  (and what’s not).
                </b>
              </ListItem>
            </OL>
            <ImageWithBorder
              image={image1}
              alt="What Is Conversion Rate Optimization"
              title="What Is Conversion Rate Optimization"
            />
            <ParagraphSmall>
              It’s very common for a website to have multiple conversion goals,
              but a landing page should each have only one. Your homepage, for
              example, is tasked with presenting your brand, defining your value
              proposition, pointing visitors in the right direction, and
              presenting your most important call-to-action. While on a landing
              page, the focus is squarely and exclusively on a single goal, such
              as downloading a resource, purchasing a product, or registering
              for a webinar.
            </ParagraphSmall>
            <H3>What’s a conversion?</H3>
            <ParagraphSmall>
              Step one is to identify the single desired action that you want
              your customers to take, that’s your conversion event.
            </ParagraphSmall>
            <ParagraphSmall>
              Conversion refers to that single, specific desired action:
              subscribe, register, buy-now, download, etc. You’re moving someone
              from one part of your funnel to the other: a visitor becomes a
              subscriber, or a subscriber becomes a customer.
            </ParagraphSmall>
            <ParagraphSmall>
              Some common examples of conversion are:
            </ParagraphSmall>
            <UL>
              <ListItem>Purchasing a product</ListItem>
              <ListItem>Requesting a quote or consultation</ListItem>
              <ListItem>Subscribing to a paid service</ListItem>
              <ListItem>Subscribing to an email list or newsletter</ListItem>
              <ListItem>Creating an account, free or paid</ListItem>
              <ListItem>Adding a product to a cart</ListItem>
            </UL>
            <H3>What’s a conversion rate? </H3>
            <ParagraphSmall>
              The conversion <b>rate</b> refers to the number of people taking
              your desired action, compared to the total number of sessions
              (visits) to your page.
            </ParagraphSmall>
            <ParagraphSmall>
              The easy way to figure out your conversion rate: divide the number
              of total conversions (actions taken) by the number of sessions
              (unique visits to the site).
            </ParagraphSmall>
            <ParagraphSmall>
              For example, the goal of your blog is to get subscribers (which
              gets more people on your customer list). Your blog has 500
              sessions with 100 new subscribers. That means you have a 20%
              conversion rate (100 conversions divided by 500 sessions).
            </ParagraphSmall>
            <ImageWithBorder
              image={image2}
              alt="What Is Conversion Rate Optimization"
              title="What Is Conversion Rate Optimization"
            />
            <H3>So what is conversion rate optimization?</H3>
            <ParagraphSmall>
              You’ve got the conversion: the action you want your visitor to
              take. You’ve got your current conversion rate: the actions taken
              divided by the unique visits. Now, you want to get a higher
              conversion rate, which means more people taking the desired
              action.
            </ParagraphSmall>
            <ParagraphSmall>
              That’s what conversion rate optimization does. It pinpoints
              specific factors that can be improved, changed, or enhanced to get
              more people converting.
            </ParagraphSmall>
            <ParagraphSmall>
              These factors can be as small the color of your CTA box from blue
              to orange, or as significant as completely repackaging the way you
              offer your services.
            </ParagraphSmall>
            <H2>Why is conversion rate optimization important?</H2>
            <ParagraphSmall>
              <i>What are the benefits of optimizing your conversion rate?</i>
            </ParagraphSmall>
            <ParagraphSmall>
              Conversion rate optimization helps you:
            </ParagraphSmall>
            <UL>
              <ListItem>
                Minimize acquisition cost by making the most of your hard-won
                web traffic
              </ListItem>
              <ListItem>
                Grow your email list with qualified leads faster
              </ListItem>
              <ListItem>Increase your sales (and repeat sales)</ListItem>
              <ListItem>
                Help you better understand your audience’s expectations (and
                what compels them to act)
              </ListItem>
            </UL>
            <H3>Better understand your audience’s expectations</H3>
            <ParagraphSmall>
              To convert customers, you need to understand them: how they speak,
              what they want, and what problems they’re trying to solve. Going
              through the process of optimizing your web pages and campaigns is
              essentially the same as performing market research. But sometimes
              it’s even better because you’re asking ultra-specific questions
              about the sort of language, visuals, and message that best
              resonate with your customer.
            </ParagraphSmall>
            <ParagraphSmall>
              To convert more visitors, you likely need to improve the way
              you’re engaging your visitor. This might mean you need to change
              the copy or design, offer a new lead magnet, or make the
              conversion process easier and more streamlined.
            </ParagraphSmall>
            <ParagraphSmall>
              Conversion optimization is an opportunity to create a better user
              experience from start to finish. When the experience is better,
              the user is more likely to convert. If they convert, they’re
              engaging with your brand more. It becomes a positive cycle of
              conversion and growth.
            </ParagraphSmall>
            <H3>Increase your ROI with conversion-rate optimization</H3>
            <ParagraphSmall>
              Boosting your conversion rate automatically improves your KPIs
              (key metrics) without having to go out and find more customers.
              You’ll get more out of your acquisition costs by converting more
              of your traffic into subscribers and buyers.
            </ParagraphSmall>
            <ParagraphSmall>
              Let’s say that you have a paid ad on Google that brings in about
              1,000 viewers to your landing page every day. You want visitors to
              input their email for a free case study downloadable (this is your
              conversion action).
            </ParagraphSmall>
            <ParagraphSmall>
              Your current conversion rate is 2%, meaning you get about 20 new
              email addresses daily. You’re paying for 1,000 clicks on your ad
              and receiving just 20 email addresses.
            </ParagraphSmall>
            <ParagraphSmall>
              But what if you focused on boosting your conversion rate up to 5%?
              Now, of those 1,000 viewers, you’d get 50 new leads every day.
              That’s 210 new leads per week, 840 per month, and 10,080 per year.
              That’s 10,000 leads you’d get for the same paid ad, just by
              improving your conversion rate by 3 percentage points.
            </ParagraphSmall>
            <ParagraphSmall>
              Focusing on conversion optimization is one of the most
              cost-effective ways to get the most value for your marketing
              efforts.
            </ParagraphSmall>
            <H3>Collect more leads and sales</H3>
            <ParagraphSmall>
              With traffic remaining the same, a higher conversion rate means
              more people are moving through your sales process. They’re
              subscribing to your newsletter, becoming members, and making
              purchases (or repeat purchases). These conversions are the
              lifeblood of your business. Collecting email addresses and making
              sales— that’s how your business stays in business.
            </ParagraphSmall>
            <ParagraphSmall>
              Beyond that, having a conversion optimization system is critical
              as your business continues to scale. It helps you streamline the
              conversion process, so you’re not constantly chasing leads. Leads
              are steadily converting, and your conversion rate is steadily
              improving because you’ve already optimized the process.
            </ParagraphSmall>
            <DefinitionHolder>
              <H3>Note: </H3>
              <ParagraphSmall>
                This doesn’t mean you can just “set” your page to convert and
                then let it fly. Optimization is a constant process. It never
                stops. But as you know your audience better and do more tests,
                the easier and faster optimization will be.
              </ParagraphSmall>
            </DefinitionHolder>
            <H3>Better user experience = better SEO</H3>
            <ParagraphSmall>
              Search engines love optimized pages. If your page is optimized for
              conversion, that means it’s:
            </ParagraphSmall>
            <UL>
              <ListItem>User-friendly and easy to use/read</ListItem>
              <ListItem>
                Full of relevant info and content that speaks to your audience{' '}
              </ListItem>
              <ListItem>Attracting more click-throughs on your site</ListItem>
            </UL>
            <ParagraphSmall>
              Google’s algorithm favors each of those factors. When someone is
              spending more time on your site, they’re taking actions on your
              site. And when your site is easy to use and chock full of good
              info, it signals to Google that your website is high quality and
              worthy of a high ranking.
            </ParagraphSmall>
            <ParagraphSmall>
              Keep in mind, however, that search engine optimization is{' '}
              <b>not</b> the same as conversion optimization. The goal is to
              build in both features that are great for SEO and features that
              are great for conversion.
            </ParagraphSmall>
            <H2>How would you design a website to optimize for conversions?</H2>
            <ParagraphSmall>
              In chapter four of this guide&nbsp;
              <Link
                href="/conversion-optimization-guide/how-to-improve-conversion-rate"
                passHref
              >
                <ArticleLink aria-label="How Can I Improve My Conversion Rate?">
                  (How Can I Improve Conversion Rate On My Page?)
                </ArticleLink>
              </Link>
              &nbsp; , we’ll go in-depth with specific tips and tricks that can
              bump up your page’s conversion optimization. For now, let’s give
              you the basics of how you can improve your conversion optimization
              on a macro level.
            </ParagraphSmall>
            <ParagraphSmall>
              At its core, this is the conversion rate optimization process:
            </ParagraphSmall>
            <OL>
              <ListItem>
                <b>Analyze current conversion</b> by looking at all the
                variables that are influencing your CRO.
              </ListItem>
              <ListItem>
                <b>Talk to your audience</b> to understand why your visitors are
                leaving as opposed to converting.
              </ListItem>
              <ListItem>
                <b>Make changes</b> and focus your efforts on improving things
                your audience provided feedback on.
              </ListItem>
              <ListItem>
                <b>Continuously test your changes</b> to determine what’s
                working (and what’s not).
              </ListItem>
            </OL>
            <ImageWithBorder
              image={image3}
              alt="What Is Conversion Rate Optimization"
              title="What Is Conversion Rate Optimization"
            />
            <H2>1. Track and measure what matters most </H2>
            <ParagraphSmall>
              A conversion rate isn’t a standalone number. You want to look at
              all of the variables that could influence your conversion rate.
              Here are some metrics to keep track of:
            </ParagraphSmall>
            <UL>
              <ListItem>
                <b>Where/how are people first entering your site?</b> You want a
                visitor to land on a conversion-optimized webpage. For example,
                if your audience tends to find your blogs first, you want to
                make sure those blogs have a CTA to sign up for a newsletter or
                get upgraded content.
              </ListItem>
              <ListItem>
                <b>Where is your traffic coming from?</b> You want to emphasize
                those traffic avenues that bring in the largest amount of
                qualified prospects (people who would actually be interested in
                converting).
              </ListItem>
              <ListItem>
                <b>Which pages and features do visitors most engage with?</b>{' '}
                Try to understand where you’re already seeing the greatest (and
                the least) success on your site. Take note of similarities
                between the pages that currently convert the best.
              </ListItem>
              <ListItem>
                <b>
                  Which devices are they using to find you (mobile vs desktop)?
                </b>{' '}
                This helps ensure you’re compatible and streamlining the opt-in
                or checkout process.
              </ListItem>
              <ListItem>
                <b>What are your visitors’ demographics and interests?</b> You
                want your visitors to look like your ideal customer. If the
                traffic coming in doesn’t match your customer audience, your
                conversion rate will suffer.
              </ListItem>
              <ListItem>
                <b>At what point do users abandon your conversion funnel?</b>{' '}
                Determine the moment when people are most likely to click away
                as opposed to make the conversion.
              </ListItem>
            </UL>
            <ParagraphSmall>
              How do you find these metrics? Start by checking out&nbsp;
              <OutboundLink
                href="https://marketingplatform.google.com/about/analytics/"
                aria-label="Analytics Tools & Solutions for Your Business - Google Analytics"
              >
                Google Analytics.
              </OutboundLink>
              &nbsp; If you use Leadpages, we also have&nbsp;
              <OutboundLink
                href="https://www.leadpages.com/product"
                aria-label="What is Leadpages? Website Tools for More Conversions"
              >
                advanced tracking and analysis
              </OutboundLink>
              &nbsp; to help you understand where your conversion rate is coming
              from.
            </ParagraphSmall>
            <H2>2. Ask your audience for qualitative feedback</H2>
            <ParagraphSmall>
              You have the quantitative data, but now you need the insights and
              understandings behind the behavioral data. You want to know why
              some visitors are leaving as opposed to converting. For that,
              you’ll want to go right to the source.
            </ParagraphSmall>
            <ParagraphSmall>
              Ask some of the following questions to get a better idea of how
              your visitor is interacting with the page:
            </ParagraphSmall>
            <UL>
              <ListItem>
                What about this page or offer appealed to you?
              </ListItem>
              <ListItem>Why did you decide to visit our site or page?</ListItem>
              <ListItem>How would you describe our offerings? </ListItem>
              <ListItem>
                Why did you choose not to opt-in/make the purchase?
              </ListItem>
            </UL>
            <ParagraphSmall>
              Don’t ask questions that you already know the answer to through
              quantitative data, like <i>“where were you directed from?”</i> if
              you already know that traffic is coming through Google AdWords.
              You can look directly at your Adwords conversion rate to get this
              number, so don’t waste the question.
            </ParagraphSmall>
            <ParagraphSmall>
              How do you get this information? User testing and satisfaction
              surveys are the simplest way. If a visitor is about to click away,
              you can have a survey pop up to ask them about their experience.
              If you notice a lead didn’t convert, you can send a follow-up
              email inquiring why.
            </ParagraphSmall>
            <StyledImageComponent
              image={image4}
              alt="What Is Conversion Rate Optimization"
              title="What Is Conversion Rate Optimization"
            />
            <ParagraphSmall>
              Don’t be afraid to ask where you’re falling short of your
              customers’ expectations. More often than not, customers want to
              give you their input, so you can provide them with an improved
              experience in the future.
            </ParagraphSmall>
            <H2>3. Answer their demands and make changes</H2>
            <ParagraphSmall>
              You’ve got the data about what’s going wrong—now make the
              necessary changes. You’ve also got the data with what’s going
              right, so emphasize these areas.
            </ParagraphSmall>
            <ParagraphSmall>
              For example, your metrics show that a lot of your visitors land on
              your blog content, but they leave right after reading your blog.
              The qualitative data from surveys say that these visitors like
              your content, but they didn’t notice any other way to engage with
              the brand.
            </ParagraphSmall>
            <ParagraphSmall>
              You can conclude that your call to action (that asks visitors to
              subscribe to your blog) is too subtle. You might want to try
              placing more “subscribe” moments throughout the blog or
              redesigning the button to be bigger and bolder.
            </ParagraphSmall>
            <H2>4. Run A/B tests and split tests</H2>
            <ParagraphSmall>
              To transform an average conversion rate into an incredible one,
              you need to test and experiment. You won’t know how to boost your
              conversion rate until you make a change and try something new.
              Keep in mind, if the change doesn’t work, you can always switch it
              back.
            </ParagraphSmall>
            <ParagraphSmall>
              Change one small variable at a time. You might swap the color of
              your CTA button or rewrite the headline or add in a picture of
              your product or offer. Make one change, and then see how it
              impacts your conversion rate. If your conversion goes up, stick
              with the new variable. If it’s not moving or goes down, it’s time
              to run a different test.
            </ParagraphSmall>
            <ParagraphSmall>
              <Link
                href="/conversion-optimization-guide/what-is-a-b-testing"
                passHref
              >
                <ArticleLink aria-label="What Is Conversion Rate Optimization (CRO)?">
                  Learn about A/B testing in chapter five.
                </ArticleLink>
              </Link>
            </ParagraphSmall>
            <StyledImageComponent
              image={image5}
              alt="What Is Conversion Rate Optimization"
              title="What Is Conversion Rate Optimization"
            />
            <ParagraphSmall>
              You don’t want to guess what your customer wants. That won’t get
              you anywhere. You want to consider the full picture of
              quantitative and qualitative data in order to run different tests.
            </ParagraphSmall>
            <DefinitionHolder>
              <H3>
                Want to easily run AB tests and split tests without getting
                caught up in code?
              </H3>
              <ParagraphSmall>
                Leadpages offers unlimited AB tests that you can set up in a
                matter of minutes.
              </ParagraphSmall>
            </DefinitionHolder>
            <H3>Conversion rate optimization is a strategy</H3>
            <ParagraphSmall>
              Conversion rate optimization is a process and a strategy. It’s
              about figuring out what your customers want and then designing
              content that will engage them and compel them to act.
            </ParagraphSmall>
            <ParagraphSmall>
              We’ve given you the basic steps and benefits of conversion rate
              optimization and where to start. Now let’s really dig into it.
              Time to calculate your baseline conversion rate and define your
              goals, so you can take your pages to the next level.
            </ParagraphSmall>
            <SiloNavigationCards
              pageRoutes={pageRoutes}
              showSpecificPage={2}
            ></SiloNavigationCards>
          </MainContainer>
        </BodyContainer>
      </InnerContainer>
    </OuterContainer>
  </>
)

export default WhatIsConversionOptimization
