import React from 'react'
// components
import SiloDesktopMenu from '@legacy/components/silos/SiloDesktopMenu'
import SiloHeader from '@legacy/components/headers/SiloHeader'
import SiloMobileMenu from '@legacy/components/silos/SiloMobileMenu'
import SiloNavigationCards from '@legacy/components/silos/SiloNavigationCards'
import SiloSidebar from '@legacy/components/silos/SiloSidebar'
import Link from 'next/link'
// styles
import {
  ArticleLink,
  BodyContainer,
  H2,
  InnerContainer,
  ListItem,
  MainContainer,
  OL,
  OuterContainer,
  ParagraphSmall,
  PageTitle,
  SiloScrollLink,
  UL,
} from '@legacy/components/silos/SiloGlobalStyles'
// data
import {
  pageRoutes,
  verbiage,
} from '@legacy/data/conversion-optimization-guide_data'

const ConversionRateOptimizationGuide = () => (
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
      />
      {/* Desktop Sidebar Menu */}
      <SiloSidebar pageRoutes={pageRoutes} />
      {/* Mobile Menu */}
      <SiloMobileMenu pageRoutes={pageRoutes} verbiage={verbiage} />
      <InnerContainer>
        {/* Main Page Content */}
        <BodyContainer>
          <MainContainer>
            <PageTitle>
              Getting Started with the Conversion Optimization Guide
            </PageTitle>
            <ParagraphSmall>
              Conversion optimization, or conversion rate optimization (CRO), is
              the tinkering, tweaking, and testing that occurs to make the most
              out of every piece of content you publish and every campaign you
              run. Think of it like a digital marketer’s test kitchen,
              experimenting with different recipes to get the best possible
              result.
            </ParagraphSmall>
            <ParagraphSmall>
              Unlike a ‘set-it-and-forget-it’ approach to marketing, conversion
              rate optimization assumes that, with thoughtful testing, there is
              always room for improvement. After all, getting online is as
              simple as publishing a website, but growing your business involves
              transforming web traffic into leads and sales.
            </ParagraphSmall>
            <ParagraphSmall>
              This is how you take your business growth from good to great, from
              ‘in business’ to a steady (and increasing) income.
            </ParagraphSmall>
            <H2>What is a conversion?</H2>
            <ParagraphSmall>
              A conversion refers to any time a web visitor takes a desired
              action on your website or landing page. Therefore, your conversion
              rate is the number of people who took that action, divided by the
              total number of people who visited the page.
            </ParagraphSmall>
            <ParagraphSmall>
              For example, 20 out of 250 visitors downloaded your ebook. That’s
              an 8% conversion rate. Then, imagine you run an AB split test on
              the page to see if your visitors respond better to an ebook or a
              checklist. You see that the offer of a checklist increases your
              conversion rate to 36%. That’s the difference between 90 leads
              (0.36 ⅹ 250) or 20 leads (0.08 ⅹ 250) on the same amount of
              traffic.
            </ParagraphSmall>
            <ParagraphSmall>
              The goal of conversion rate optimization is to make the most of
              your hard-won web traffic. Website conversion optimization
              involves constantly improving on your success and figuring out
              what you can do to better engage with your audience.
            </ParagraphSmall>
            <ParagraphSmall>
              By testing and paying attention to how well your audience responds
              to different kinds of marketing queues—everything from price to
              the pictures you use on the landing page—you’ll be better able to
              connect with your audience, convince them of your value, and
              convert them to the next stage of their customer journey.
            </ParagraphSmall>
            <ParagraphSmall>
              This guide is designed for the savvy small business owners and DIY
              digital marketers who want to go from 0 to 60 on their conversion
              rate optimization journey. We’ll cover the basics (what is
              conversion rate optimization, what’s a good conversation rate, how
              to find and utilize your data using Leadpages analytics or Google
              Analytics, etc.) and the nitty-gritty tactics that you can use to
              take your web content to the next level.
            </ParagraphSmall>
            <ParagraphSmall>
              Ready to dive in?&nbsp;
              <SiloScrollLink
                to="section1"
                offset={-85}
                spy
                smooth
                duration={500}
              >
                Each chapter of this guide
              </SiloScrollLink>
              &nbsp; explores a key topic to both enhance your website
              optimization knowledge and help you apply this knowledge to your
              own business right away.
            </ParagraphSmall>
            <H2>What is conversion rate optimization?</H2>
            <ParagraphSmall>
              Typically, it’s a four-step process:
            </ParagraphSmall>
            <OL>
              <ListItem>
                <b>Analyze current conversion</b> by looking at all the
                variables that are influencing your CRO.
                <UL css={{ marginBottom: 24 }}>
                  <ListItem>
                    Don’t have a conversion event? Identify it by pinpointing
                    the single most-valuable action a visitor can take on this
                    page.
                  </ListItem>
                </UL>
              </ListItem>
              <ListItem>
                <b>Talk to your audience</b> to understand why your visitors are
                leaving as opposed to converting.
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
                <UL>
                  <ListItem>
                    <b>On any given page, identify one variable to test:</b>{' '}
                    identify one design or content feature you think will
                    influence how your visitors behave (ex. headline text or
                    button color).
                  </ListItem>
                  <ListItem>
                    <b>Publish multiple versions of your content:</b> change
                    that single variable to have two or three versions of the
                    page (with just that one difference).
                  </ListItem>
                  <ListItem>
                    <b>Distribute your web traffic between the versions:</b>{' '}
                    with AB split testing tools that randomly redirect your web
                    traffic to one of the test variations.
                  </ListItem>
                  <ListItem>
                    <b>Determine a ‘winner’:</b> based on the version that has
                    the highest conversion rate (total conversions ÷ total
                    traffic), end your test, and apply what you learned to
                    future content you create.
                  </ListItem>
                </UL>
              </ListItem>
            </OL>
            <ParagraphSmall>
              Step one is about understanding your business and your primary
              points of conversion. How are you getting people to make a
              purchase or click “download” on a piece of content? This means,
              before you even start optimizing your page, you need to understand
              what actions are most important for your business and also what
              single action is most important for a particular piece of content.
            </ParagraphSmall>
            <ParagraphSmall>
              In most cases, the conversion is accompanied by a call-to-action
              (CTA) button, prompting the visitor to act: buy now, sign-up,
              register, etc. Strong CTAs are concise, compelling, and clear.
            </ParagraphSmall>
            <ParagraphSmall>
              You’ll also want to calculate your current conversion rate. This
              will help you understand how your page is currently performing and
              will establish a baseline that you can improve upon.
            </ParagraphSmall>
            <ParagraphSmall>
              Then you’ll take a look at the difference between your conversion
              goal and your actual performance numbers. How well are you
              converting now? What would an increase in your conversion rate do
              for your profits or sales?
            </ParagraphSmall>
            <ParagraphSmall>
              Conversion rate optimization is about making changes to your offer
              and content that close the gap between your goal and real-world
              performance.
            </ParagraphSmall>
            <ParagraphSmall>
              Ask yourself: what on the page might make the conversion rate
              better? It might be the CTA box or the lead magnet or the
              headline. Pick one variable to change and test it against the
              control version.
            </ParagraphSmall>
            <ParagraphSmall>
              Then, you’ll duplicate your page. Each version should look almost
              the same, except for that variable change. For example, one
              version might have a blue CTA button, a second has red, and a
              third has orange.
            </ParagraphSmall>
            <ParagraphSmall>
              Then, divide your traffic as evenly as possible between the
              different pages. This helps you collect data to see which shows
              the best conversion rate.
            </ParagraphSmall>
            <ParagraphSmall>
              Finally, whichever page has the best conversion rate is the
              “winner.” If the blue CTA button has the highest calculated
              conversion rate, keep the blue version.
            </ParagraphSmall>
            <ParagraphSmall>
              Then you can start testing the next variable.
            </ParagraphSmall>
            <SiloNavigationCards pageRoutes={pageRoutes} showSpecificPage={1} />
            <H2>Why is conversion rate optimization important?</H2>
            <ParagraphSmall>
              Your conversion rate is perhaps the strongest measure of success
              on any web page, landing page, or digital marketing campaign. It
              tells you how many web visitors take the action that will help
              achieve your business goals.
            </ParagraphSmall>
            <ParagraphSmall>
              A high conversion rate means more people are taking the desired
              action. A low conversion rate, on the other hand, can signal one
              of three problems: you’re not reaching the right audience, you’re
              not engaging the audience effectively, or you’re not bringing them
              the right offer.
            </ParagraphSmall>
            <ParagraphSmall>
              Conversion rate optimization, then, helps you fine-tune your
              marketing content to be as effective as possible. As your
              conversion rate rises, more people will move through your sales
              funnel (also known as your “conversion funnel”) and your list of
              qualified leads will grow (thus, so will your sales and revenue).
            </ParagraphSmall>
            <ParagraphSmall>
              Some key benefits of conversion rate optimization:
            </ParagraphSmall>
            <UL>
              <ListItem>
                Minimize acquisition cost by making the most of your hard-won
                web traffic
              </ListItem>
              <ListItem>
                More quickly grow your email list with qualified leads
              </ListItem>
              <ListItem>Increase your sales (and repeat sales)</ListItem>
              <ListItem>
                Help you better understand your audience’s expectations (and
                what compels them to act)
              </ListItem>
            </UL>
            <ParagraphSmall>
              Getting web traffic to your site is expensive, whether it’s with
              pay-per-click campaigns, social media posts, or word of mouth.
              Don’t waste all that traffic by allowing visitors to leave without
              engaging with your brand on a deeper level. That means getting
              them to take action when they come to your website or landing
              page.
            </ParagraphSmall>
            <H2>How do you calculate a conversion rate?</H2>
            <ParagraphSmall>
              You can’t improve what you don’t measure, and you can’t guide your
              decisions on gut feel alone. Measuring and tracking a single
              number over time (conversion rate) is critical to understanding
              how your website is performing. Your conversion rate tells you how
              many customers are connecting with your website enough to take a
              step towards purchasing.
            </ParagraphSmall>
            <ParagraphSmall>
              So how do you calculate a conversion rate? Let’s do some simple
              math.
            </ParagraphSmall>
            <ParagraphSmall>
              Take the number of people who took your desired action (aka
              “conversions”) and divide it by the total number of sessions or
              views. How many people saw the CTA versus how many people took the
              action?
            </ParagraphSmall>
            <ParagraphSmall>
              <b>Conversion rate = actions taken divided by unique views.</b>
            </ParagraphSmall>
            <SiloNavigationCards pageRoutes={pageRoutes} showSpecificPage={2} />
            <br></br>
            <ParagraphSmall>
              Not sure if your conversion rate is good or bad?
            </ParagraphSmall>
            <ParagraphSmall>
              Sure, there are industry benchmarks you can use, but it’s usually
              more complicated than a single number. The best indicator is your
              own historical data. How have similar pieces of content performed
              in the past? Is your average conversion rate getting better over
              time?
            </ParagraphSmall>
            <ParagraphSmall>
              Also, think about what a higher conversion rate would do for your
              business. Are you happy with your current influx of traffic, or do
              you need more based on your ROI?
            </ParagraphSmall>
            <SiloNavigationCards pageRoutes={pageRoutes} showSpecificPage={3} />
            <H2>How do you optimize conversion rates?</H2>
            <ParagraphSmall>
              Your website conversion optimization is unique—unique to your
              business, your audience, the type of offer, and even the timing of
              the page launch. What works for a competitor’s site might not work
              for yours. That’s why tracking your conversion rate and trying to
              improve on your historical performance is the best possible way to
              improve your marketing.
            </ParagraphSmall>
            <ParagraphSmall>
              Still, there are a few universal truths that can radically improve
              your conversion optimization.
            </ParagraphSmall>
            <ParagraphSmall>Here are some of our favorites:</ParagraphSmall>
            <UL>
              <ListItem>
                Increasing credibility increases conversions Testimonials,
                reviews, awards, case studies, and references all increase your
                credibility and trustworthiness.
              </ListItem>
              <ListItem>
                Your CTA should be easy, succinct, and clear. Tell your visitors
                what you want them to do in the most direct, understandable way.
              </ListItem>
              <ListItem>
                The CTA should be the most intriguing and attractive part of the
                page. Make the CTA even clearer by changing the color of the
                text or putting it in a separate box.
              </ListItem>
              <ListItem>
                The content should effectively answer the visitor’s objections.
                Proactively address the barriers (friction) that will keep
                visitors from taking the desired action.
              </ListItem>
              <ListItem>
                The page should be minimalistic and easy to follow. Remove any
                unnecessary copy, content, links, or distractions and focus your
                visitor’s attention only on the desired action. For example,
                remove extra navigation (menu items) and social share buttons
                from your landing pages.
              </ListItem>
              <ListItem>
                Make it urgent. People procrastinate, unless they’re given a
                reason not to. Create a scarcity of stock or time, so people are
                more likely to click right now. Don’t give them time to “mull it
                over.”
              </ListItem>
              <ListItem>
                Always test. Run tests and ask your customers for feedback to
                get data on what is and isn’t working on your page. There’s
                always room for improvement.
              </ListItem>
            </UL>
            <H2>The ultimate guide to website conversion optimization</H2>
            <ParagraphSmall>
              In&nbsp;
              <Link
                href="/conversion-optimization-guide/what-is-conversion-optimization"
                passHref
                legacyBehavior
              >
                <ArticleLink aria-label="What Is Conversion Rate Optimization (CRO)?">
                  Chapter One: What is a Conversion Rate
                </ArticleLink>
              </Link>
              &nbsp; you’ll learn that conversion rate optimization constitutes:
            </ParagraphSmall>
            <OL>
              <ListItem>Set a goal and desired action</ListItem>
              <ListItem>
                Count how many visitors are taking that action
              </ListItem>
              <ListItem>
                See how many visitors are not taking that action
              </ListItem>
              <ListItem>
                Find a way to get more visitors to take that action
              </ListItem>
            </OL>
            <ParagraphSmall>
              We’ll also go over what the benefits of optimizing conversion rate
              are, like:
            </ParagraphSmall>
            <UL>
              <ListItem>
                Minimize acquisition cost by making the most of your hard-won
                web traffic
              </ListItem>
              <ListItem>
                Grow your email list with qualified leads (faster)
              </ListItem>
              <ListItem>Increase your sales (and repeat sales) </ListItem>
              <ListItem>
                Help you better understand your audience’s expectations (and
                what compels them to act)
              </ListItem>
              <ListItem>
                Create a better user experience (search engines love optimized
                pages)
              </ListItem>
            </UL>
            <ParagraphSmall>
              In&nbsp;
              <Link
                href="/conversion-optimization-guide/how-to-calculate-cro"
                passHref
                legacyBehavior
              >
                <ArticleLink aria-label="How Do I Calculate My Conversion Rate?">
                  Chapter Two: How Do I Calculate My Conversion Rate
                </ArticleLink>
              </Link>
              &nbsp; we’ll go over the math for calculating your conversion rate
              and what a good conversion rate looks like&nbsp;
              <Link
                href="/conversion-optimization-guide/what-is-a-good-conversion-rate"
                passHref
                legacyBehavior
              >
                <ArticleLink aria-label="What's A Good Conversion Rate?">
                  (Chapter 3: What’s a good Conversion Rate)
                </ArticleLink>
              </Link>
              .
            </ParagraphSmall>
            <ParagraphSmall>
              With the 21 tips and tricks in&nbsp;
              <Link
                href="/conversion-optimization-guide/how-to-improve-conversion-rate"
                passHref
                legacyBehavior
              >
                <ArticleLink aria-label="How Can I Improve Conversion My Rate?">
                  Chapter Four: How Can I Improve My Conversion Rate
                </ArticleLink>
              </Link>
              , you’ll improve your conversion rate by learning how to design an
              optimized page that connects with and engages your audience.
            </ParagraphSmall>
            <ParagraphSmall>
              In&nbsp;
              <Link
                href="/conversion-optimization-guide/what-is-a-b-testing"
                passHref
                legacyBehavior
              >
                <ArticleLink aria-label="A/B Testing?">
                  Chapter Five: A/B Split Testing
                </ArticleLink>
              </Link>
              , we’ll dive down into the nitty-gritty of CRO with A/B testing to
              discuss how one small change on your website can show improvement
              in your conversion rate. We’ll also give you 10 recommended
              variables to test out that tend to show the greatest success.
            </ParagraphSmall>
            <ParagraphSmall>
              Then we lay it all out in&nbsp;
              <Link
                href="/conversion-optimization-guide/conversion-optimized-website"
                passHref
                legacyBehavior
              >
                <ArticleLink aria-label="Creating a Conversion-Optimized Website">
                  Chapter Six: Creating a Conversion-Optimized Website
                </ArticleLink>
              </Link>
              , with the 14 ultimate steps to creating a conversion-optimized
              website that can take your business further, faster.
            </ParagraphSmall>
            <ParagraphSmall>
              This comprehensive guide is designed to condense decades of
              conversion marketing knowledge into no-nonsense steps that you can
              take today. We’ll cover the basics of conversion rate calculation,
              how to know if your conversion rate is “good” or bad, running A/B
              tests, and fine-tuning your optimization tactics every step of the
              way.
            </ParagraphSmall>
            <ParagraphSmall>
              As you work through this guide, we recommend that you pick one of
              your landing pages or a static website page that has a CTA on it.
              Use this page as an example as you move through this guide, so you
              can get first-hand optimization experience and relate the info
              directly to your business. By the end of this, you’ll have a fresh
              page to test out for your new conversion rate.
            </ParagraphSmall>
            <H2 name="section1" />
            {/* Navigation Cards Section */}
            <SiloNavigationCards pageRoutes={pageRoutes} />
          </MainContainer>
        </BodyContainer>
      </InnerContainer>
    </OuterContainer>
  </>
)

export default ConversionRateOptimizationGuide
