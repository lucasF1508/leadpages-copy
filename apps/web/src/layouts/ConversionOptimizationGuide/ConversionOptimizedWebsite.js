import React from 'react'
// components
import Animation_ExitIntentPopup from '@legacy/components/animations/Animation_ExitIntentPopup'
import SEO from '@legacy/components/SEO'
import SiloHeader from '@legacy/components/headers/SiloHeader'
import SiloDesktopMenu from '@legacy/components/silos/SiloDesktopMenu'
import SiloMobileMenu from '@legacy/components/silos/SiloMobileMenu'
import SiloNavigationCards from '@legacy/components/silos/SiloNavigationCards'
import SiloSidebar from '@legacy/components/silos/SiloSidebar'
// conversion tools
import TemporaryLeadbox_ExitIntent from '@legacy/components/conversion-tools/LB_DownloadUltimateWebsiteWorkbook'
// styles
import {
  BodyContainer,
  H2,
  H3,
  StyledImageComponent,
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
import image1 from '@legacy/assets/images/silos/conversion-optimization-guide/6-1-cta-652px@2x.jpg'
import image2 from '@legacy/assets/images/silos/conversion-optimization-guide/06-2-multiple-cta-buttons-652px@2x.jpg'

const CreatingConversionOptimizedWebsite = () => (
  <>
    <TemporaryLeadbox_ExitIntent />
    <SEO
      pathname="/conversion-optimization-guide"
      title="Website Conversion Optimization | CRO Guide | Leadpages"
      description="This step by step process for website conversion optimization will transform your page into a marketing machine that churns out leads and customers."
      image="https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg"
      ogtitle="Creating a Conversion-Optimized Website"
    />
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
            <PageSupertitle>Chapter 6</PageSupertitle>
            <PageTitle>
              Creating a Conversion-Optimized Website in 14 Steps
            </PageTitle>
            <ParagraphLarge>
              <i>
                You want your website to be a converting machine: transforming
                traffic to leads and leads to customers and customers to brand
                fans.
              </i>
            </ParagraphLarge>
            <ParagraphSmall>
              In this final chapter, we’ve pulled it all together for you. This
              is your step-by-step action plan to build the marketing optimized
              website your business deserves.
            </ParagraphSmall>
            <SiloNavigationCards
              pageRoutes={pageRoutes}
              showSpecificPage={1}
            ></SiloNavigationCards>
            <br></br>
            <ParagraphSmall>
              We recommend picking out one of your landing pages or website
              pages and going through the process with us. By the end of it,
              you’ll be on your way to the ultimate website conversion
              optimization!
            </ParagraphSmall>
            <H2>What does it mean to optimize your website?</H2>
            <ParagraphSmall>
              <b>“Optimization”</b> essentially means making something the best
              it can be. When you’re looking to create a marketing optimized
              website, you’re making your website the most “profitable” it can
              be. This might mean it’s collecting a lot of email leads, making
              sales, or signing people up for a webinar.
            </ParagraphSmall>
            <ParagraphSmall>
              Website conversion optimization is about creating a website that’s
              pulling people through your sales journey in a systemized way.
              Every aspect of every page is like a magnet, attracting and
              pulling visitors through to the next action (and the next one, and
              the next one after that).
            </ParagraphSmall>
            <H2>1. Know your website conversion optimization goals</H2>
            <ParagraphSmall>
              What action do you want your visitor to take? How do you define a
              conversion action point?
            </ParagraphSmall>
            <ParagraphSmall>
              Some example conversion actions include:
            </ParagraphSmall>
            <UL>
              <ListItem>Subscribe to a newsletter</ListItem>
              <ListItem>Make a purchase</ListItem>
              <ListItem>Fill out a form or survey</ListItem>
              <ListItem>Download free (or paid) content</ListItem>
              <ListItem>Create an appointment</ListItem>
              <ListItem>Sign up for an event</ListItem>
            </UL>
            <ParagraphSmall>
              In most cases, a conversion point moves a person to the next step
              of your campaign. You might transform a new visitor into a warm
              lead by encouraging them to subscribe to your blog, or you might
              be turning a lead into a customer by encouraging them to make a
              purchase.
            </ParagraphSmall>
            <StyledImageComponent
              image={image1}
              alt="Website Conversion Optimization"
            />
            <ParagraphSmall>
              Be specific about what kind of conversion you want. This action
              should be a driver for your business and pull people through your
              sales journal.
            </ParagraphSmall>
            <ParagraphSmall>
              Once you know the action you want the customers to take, create a
              phrase or sentence that will become your CTA. (You might change
              the wording of this later when you do A/B testing. This is just to
              get you started.)
            </ParagraphSmall>
            <H2>2. Pick one CTA per page</H2>
            <ParagraphSmall>
              You don’t want to dilute your page with too many offerings that
              could confuse your visitors. Each page should have one goal, one
              action, and one CTA. This clarity can improve your conversion rate
              by streamlining and simplifying the opt-in or checkout process.
            </ParagraphSmall>
            <ParagraphSmall>
              If you have a few business goals or offerings, create different
              landing pages or website pages for them. It keeps it easy for you
              to track and your customers to follow along with.
            </ParagraphSmall>
            <ParagraphSmall>
              You can have multiple conversions throughout your site, but you
              want to maintain consistency of action per page. The more pages
              you have, the more opportunities for conversion. Plus, you can
              compare these pages to one another in testing to determine and
              emphasize those that see the most success.
            </ParagraphSmall>
            <H3>When to use a landing page versus a website page</H3>
            <ParagraphSmall>
              Landing pages are designed for people to take a specific action.
              They’re designed with a specific CTA or marketing goal in mind.
            </ParagraphSmall>
            <ParagraphSmall>
              Webpages, on the other hand, are more static pages that are used
              to provide information to the visitor. A webpage could have a
              conversion point, like a blog might encourage subscribers, but the
              conversion itself isn’t the primary goal of the webpage.
            </ParagraphSmall>
            <ParagraphSmall>
              For example, you’re offering a downloadable as part of your lead
              generation strategy. Use a landing page where they input their
              info to receive the downloadable.
            </ParagraphSmall>
            <ParagraphSmall>
              Or you’re selling an online course. Send them to a landing page
              where they can learn more about the course and make their
              decision.
            </ParagraphSmall>
            <ParagraphSmall>
              You should almost always be sending traffic to a landing page, not
              a homepage. This is how you get clients, push conversions, and
              track your traffic and conversion metrics. Click to see&nbsp;
              <OutboundLink
                href="https://neilpatel.com/blog/homepages-vs-landing-pages/"
                aria-label="why landing pages are better for paid traffic and conversion."
              >
                why landing pages are better for paid traffic and conversion.
              </OutboundLink>
            </ParagraphSmall>
            <H2>3. Always know your conversion rate</H2>
            <ParagraphSmall>
              You don’t need to check your conversion rate every day, but it’s
              one metric you should keep a consistent eye on. If you are
              spending a lot of money on bringing in traffic, you want to
              leverage that acquisition cost to get a high ROI. The conversion
              rate is like the backbone of your marketing campaign: it tells you
              how successfully you’re able to move people into a deeper
              engagement with your brand.
            </ParagraphSmall>
            <ParagraphSmall>
              If you don’t like where your conversion rate is today, that’s
              okay. There’s almost always room for improvement.
            </ParagraphSmall>
            <ParagraphSmall>
              How do you calculate conversion rate?
            </ParagraphSmall>
            <ParagraphSmall>
              <b>
                Divide the number of actions taken by the total number of unique
                views.
              </b>
            </ParagraphSmall>
            <ParagraphSmall>
              Learn how to calculate conversion rate and what a “good” website
              conversion rate is by clicking in the box below:
            </ParagraphSmall>
            <SiloNavigationCards
              pageRoutes={pageRoutes}
              showSpecificPage={2}
            ></SiloNavigationCards>
            <H2>4. Create a conversion rate goal</H2>
            <ParagraphSmall>
              You know what your page’s current conversion rate is. What would
              happen if you increased that number by 1%... 2%... 5%? How would
              it affect your business?
            </ParagraphSmall>
            <ParagraphSmall>
              Define a reasonable conversion rate goal.
            </ParagraphSmall>
            <ParagraphSmall>
              Don’t just set a goal, though. Like any other business goal, you
              want to go through the process of defining the objective:
            </ParagraphSmall>
            <UL>
              <ListItem>
                How will this goal feel after we’ve achieved it? Why does it
                matter? What will achieving this goal do for my business?
              </ListItem>
              <ListItem>
                What is the timeline? By when do you hope to have this goal
                achieved?
              </ListItem>
              <ListItem>
                Is this goal reasonable? Unreasonable goals kill business
                growth.
              </ListItem>
              <ListItem>
                How can you meet this objective? What steps do you need to take
                to get there? (P.S. The answer to this question is A/B testing
                different features on your page.)
              </ListItem>
            </UL>
            <H2>5. Take traffic numbers into account</H2>
            <ParagraphSmall>
              You could have an awesome conversion rate, but that doesn’t mean
              anything if your traffic isn’t strong also. A 100% conversion rate
              of 2 site visitors isn’t as good as a 5% conversion rate of 10,000
              visitors. So you’ll want to look at these two in relationship to
              one another.
            </ParagraphSmall>
            <ParagraphSmall>
              You want a strong volume of qualified traffic coming in, and then
              you want to convert as much of that traffic as possible.
            </ParagraphSmall>
            <ParagraphSmall>Ask:</ParagraphSmall>
            <OL>
              <ListItem>
                How can I direct more traffic to these landing pages? (PPC ads,
                Adwords, social media campaigns, etc.)
              </ListItem>
              <ListItem>
                What do I need to do to qualify these leads? How do I make sure
                I attract the right traffic?
              </ListItem>
              <ListItem>
                How can I capture more of the traffic that I already get? (This
                is ‘website conversion optimization’.)
              </ListItem>
            </OL>
            <H3>What is conversion rate in SEO?</H3>
            <ParagraphSmall>
              People ask us this question a lot, so we want to give a little
              clarification here.
            </ParagraphSmall>
            <ParagraphSmall>
              Search engine optimization (SEO) isn’t the same thing as
              conversion rate optimization (CRO).
            </ParagraphSmall>
            <ParagraphSmall>
              SEO is about appealing to search engines to get your page higher
              in search results. For example, you might use specific keywords or
              include certain featured snippets to tell Google’s algorithm that
              your page is relevant to a specific search. SEO is also about
              connecting with your audience, but it’s more about attracting
              their initial attention.
            </ParagraphSmall>
            <ParagraphSmall>
              CRO is about engaging your audience on a deeper level once you
              already have some level of interest. Website conversion
              optimization means talking directly to the visitor and what they
              want to get them to take the next step.
            </ParagraphSmall>
            <ParagraphSmall>
              On a very basic level, SEO is about optimizing for an algorithm to
              gain traffic, while CRO is about optimizing for humans to get
              leads or sales.
            </ParagraphSmall>
            <ParagraphSmall>
              Neither is more important than the other; you need both areas to
              be strong to see massive success!
            </ParagraphSmall>
            <ParagraphSmall>
              What do you need to know about landing page SEO to rank on search
              engines? Get the&nbsp;
              <OutboundLink
                href="https://www.leadpages.com/blog/landing-page-seo-rank/"
                aria-label="SEO scoop here"
              >
                SEO scoop here.
              </OutboundLink>
            </ParagraphSmall>
            <H2>6. Define your audience’s needs</H2>
            <ParagraphSmall>
              The goal of your offering is to deliver a solution to a customer’s
              problem, right? If they purchase your product, you hope that the
              product will make their life better. If they’re subscribing to a
              newsletter, you’re looking to deliver value that will educate them
              about the industry.
            </ParagraphSmall>
            <ParagraphSmall>
              You want to have your audience in mind at every step of the
              conversion optimization process. So it doesn’t hurt to create a
              customer persona with everything from demographics and
              psychographics to pain points and desires.
            </ParagraphSmall>
            <ParagraphSmall>
              Creating an outline of your target “converter” helps you better
              craft your page in alignment with what they want.
            </ParagraphSmall>
            <H2>7. Create a list of variables to test</H2>
            <ParagraphSmall>
              Don’t just start trying out “optimization techniques” willy nilly.
            </ParagraphSmall>
            <ParagraphSmall>
              We’ve made this part easy for you. Check out this section for the
              different variables you’ll want to test out:
            </ParagraphSmall>
            <SiloNavigationCards
              pageRoutes={pageRoutes}
              showSpecificPage={4}
            ></SiloNavigationCards>
            <br></br>
            <ParagraphSmall>
              Here’s the condensed list of website conversion optimization
              variables you can test to work on improving your conversion rate:
            </ParagraphSmall>
            <UL>
              <ListItem>Headline</ListItem>
              <ListItem>Page template/layout</ListItem>
              <ListItem>Background image (and other images)</ListItem>
              <ListItem>Form fields</ListItem>
              <ListItem>CTA button</ListItem>
              <ListItem>Density and length</ListItem>
              <ListItem>Numbers</ListItem>
              <ListItem>Testimonials</ListItem>
              <ListItem>Offering</ListItem>
              <ListItem>Progress bar</ListItem>
            </UL>
            <ParagraphSmall>
              Have a video you use in your marketing? Maybe try adding it to the
              landing page. Want to see if a new slogan better resonates with
              your audience? Try it with A/B testing.
            </ParagraphSmall>
            <H2>8. Say it with less</H2>
            <ParagraphSmall>
              Most people share too much. Both in conversation and on their
              landing pages. You want to give all the info needed for your
              visitor to take action without distracting them or losing their
              interest.
            </ParagraphSmall>
            <ParagraphSmall>
              See if you can say the same thing in fewer, more potent words.
            </ParagraphSmall>
            <ParagraphSmall>Which is better:</ParagraphSmall>
            <UL>
              <ListItem>
                Learn how to be a rockstar by playing the guitar or drum with
                our interactive online course, with real teachers.
              </ListItem>
              <ListItem>
                Be a rockstar. Learn drums or guitar from the very best experts.
              </ListItem>
            </UL>
            <ParagraphSmall>
              Still, you don’t want to be too concise. People still want to
              learn about what the offer is before they dive in.&nbsp;
              <OutboundLink
                href="https://www.quicksprout.com/call-to-action-button/"
                aria-label="Neil Patel found"
              >
                Neil Patel found&nbsp;
              </OutboundLink>
              &nbsp; that putting the CTA above the fold decreased conversions
              by 17% because people didn’t yet understand what they were
              supposed to be doing. So, be concise but not at the expense of
              communicating the value proposition.
            </ParagraphSmall>
            <H2>9. Run A/B testing hypotheses</H2>
            <ParagraphSmall>
              You don’t know what’s going to work until you test it. So create a
              theory, run your A/B testing, and then choose the page that has
              the “winning” conversion rate.
            </ParagraphSmall>
            <ParagraphSmall>Don’t guess. Test!</ParagraphSmall>
            <SiloNavigationCards
              pageRoutes={pageRoutes}
              showSpecificPage={5}
            ></SiloNavigationCards>
            <H2>10. Lather, rinse, repeat</H2>
            <ParagraphSmall>
              After you’ve split tested one feature of the page, move on to the
              next one. Keep testing different features, one by one, until
              you’ve achieved (or surpassed) your conversion goal.
            </ParagraphSmall>
            <ParagraphSmall>
              The process requires patience. But it’s the absolute best way to
              get more visitors converting and moving forward in your sales
              journey. When you know exactly what your customers want, you can
              continuously provide them the highest service.
            </ParagraphSmall>
            <H2>11. Load up on CTA buttons</H2>
            <ParagraphSmall>
              Don’t let your call to action (CTA) get lost in the fray. The CTA
              should be the “loudest” part of your page. This means the CTA:
            </ParagraphSmall>
            <UL>
              <ListItem>Uses contrasting colors to attract the eye</ListItem>
              <ListItem>
                Is sprinkled throughout multiple parts of the page
              </ListItem>
              <ListItem>Has enticing copy to encourage a click</ListItem>
            </UL>
            <ParagraphSmall>
              You want just one call to action per page. This CTA reflects the
              conversion goal of that page (like collecting a lead or making a
              sale). Though there’s only one CTA per page, that CTA should be
              prominent and pronounced.
            </ParagraphSmall>
            <ParagraphSmall>
              You only have one action, but you want multiple CTA buttons
              reiterating that action throughout the page. This gives your
              visitor more opportunities to convert, and it has a button ready
              and raring to go the moment they’re ready to take action.
            </ParagraphSmall>
            <H2>12. Use splash screens and exit pop-ups</H2>
            <ParagraphSmall>
              Exit pop-ups are a great way to give one more opportunity for
              conversion. You’ll want to make this pop-up convincing. Remind
              them of the value of the offering, and then give them a little
              more. It’s your last-ditch effort before they click away, so you
              want to focus on engaging them. Like everything on your landing
              page, test your exit pop-ups to see which are working best to grab
              those customers on their way out the door.
            </ParagraphSmall>
            <Animation_ExitIntentPopup siloVariant />
            <ParagraphSmall>
              You can also use a splash screen when they first come to your
              website. This will show your CTA right away with the key benefits
              of conversion, so it starts to pique their interest.
            </ParagraphSmall>
            <ParagraphSmall>
              However, you don’t want to be too pushy in the splash screen
              unless you’ve done a lot of setup before they landed on your page.
              If it’s the first time they’re hearing about this action, they’ll
              probably need a little more info on the full landing page before
              making a decision. Still, you can use the splash screen as a way
              to catch your customer’s eye right away.
            </ParagraphSmall>
            <H2>13. Focus on load speed</H2>
            <ParagraphSmall>
              Page load speed is perhaps the most commonly overlooked aspect of
              conversion rate optimization.
            </ParagraphSmall>
            <ParagraphSmall>
              If your page takes too long to load, customers will click away. If
              a page takes too long to load, the visitor will click “exit” and
              click away to a competitor’s page (that loads at the speed of
              light).
            </ParagraphSmall>
            <ParagraphSmall>
              As you can imagine, slow page performance can kill your conversion
              rate, costing you leads and sales. Additionally, slow load times
              kill your SEO and organic search rankings. If Google sees your
              page takes too long to load and you have a high bounce rate
              (people clicking away from your site quickly), they’ll knock you
              down on the rankings.
            </ParagraphSmall>
            <ParagraphSmall>
              Leadpages loads 2.4 seconds faster and has a performance score 30%
              higher than our competitors. Have the&nbsp;
              <OutboundLink
                href="https://www.leadpages.com/blog/landing-page-speed/"
                aria-label="need for speed?"
              >
                need for speed?&nbsp;
              </OutboundLink>
              &nbsp; Click to learn about Leadpages’ load speed and why it
              matters.
            </ParagraphSmall>
            <H2>14. Leverage the tools at your disposal</H2>
            <ParagraphSmall>
              There are some awesome tools that can help increase website
              conversion for your business in a snap. Google Analytics can help
              you track your conversion rates, while Facebook and Instagram Ads
              and Google Ads can pull in high-quality traffic to your site. Drip
              or Emma create easy opt-in forms for email lists, and MailChimp or
              Klaviyo can help you follow up with leads (and send them to
              conversion-optimized landing pages).
            </ParagraphSmall>
            <ParagraphSmall>
              You don’t have to reinvent the wheel. Leadpages offers&nbsp;
              <OutboundLink
                href="https://www.leadpages.com/integrations"
                aria-label="hundreds of integrations"
              >
                hundreds of integrations&nbsp;
              </OutboundLink>
              &nbsp; to make it easier than ever to create marketing campaigns,
              draw in traffic, and convert them to lifelong, happy customers.
            </ParagraphSmall>
            <H2>Website conversion optimization for the win</H2>
            <ParagraphSmall>
              Website conversion optimization is all about creating a page that
              inspires your visitor to take an action that pulls them through
              the sales journey and drives your business forward.
            </ParagraphSmall>
            <ParagraphSmall>
              Your website conversion rate could always be higher, right? Your
              business could always be pulling in more customers and revenue.
              Higher conversion means greater customer engagement, a bigger
              customer list, and more sales.
            </ParagraphSmall>
            <ParagraphSmall>
              You can (and should) optimize for conversion on your landing pages
              and website. It comes down to testing different features to figure
              out what your audience wants to see, what draws them in, and what
              ultimately convinces them to say, “Yes, take me to the next step!”
            </ParagraphSmall>
            <ParagraphSmall>
              What’s it going to take for you to take the next step in your
              business?
            </ParagraphSmall>
            <ParagraphSmall>
              Start applying the techniques from this guide on your Leadpages
              website and landing pages to increase website conversion, grab
              more customers, and watch your business grow.
            </ParagraphSmall>
            <StyledImageComponent
              image={image2}
              alt="Website Conversion Optimization"
            />

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

export default CreatingConversionOptimizedWebsite
