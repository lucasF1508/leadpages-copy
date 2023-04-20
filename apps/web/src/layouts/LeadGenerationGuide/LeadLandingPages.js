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
  H2,
  H3,
  StyledImageComponent,
  Image1,
  InnerContainer,
  ListItem,
  ImageWithBorder,
  MainContainer,
  OL,
  OutboundLink,
  OuterContainer,
  PageSupertitle,
  PageTitle,
  ParagraphLarge,
  ParagraphSmall,
  TemplateLink,
  TemplateImage,
  UL,
} from '@legacy/components/silos/SiloGlobalStyles'
// data
import { pageRoutes, verbiage } from '@legacy/data/lead-generation-guide_data'
// images
import image1 from '@legacy/assets/images/silos/lead-generation-guide/1-1-landing-page-for-wedding-photographer-lead-magnet.jpg'
import image2 from '@legacy/assets/images/silos/lead-generation-guide/2-1-landing-page-highlighting-cta-button.jpg'
import image3 from '@legacy/assets/images/silos/lead-generation-guide/Show-dont-tell-652px@2x.jpg'
import image4 from '@legacy/assets/images/silos/landing-pages-guide/4-3-anatomy-of-a-squeeze-page-landing-page-example-816px@2x.jpg'
import image5 from '@legacy/assets/images/silos/lead-generation-guide/3-1-good-vs-bad-lead-form.jpg'

const LeadGenerationLandingPages = () => (
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
            <PageTitle>
              What’s a Lead Generation Landing Page and How Does it Work?
            </PageTitle>
            <ParagraphLarge>
              <i>
                Do you want to generate high-quality leads around the clock and
                make the most of your marketing budget? (Umm...of course you
                do!)
              </i>
            </ParagraphLarge>
            <ParagraphLarge>
              This chapter will go over what a lead generation landing page is,
              how you can use it, and some of our (top-secret) industry tips and
              tricks to optimizing your landing pages to capture leads.
            </ParagraphLarge>
            <H2>What is a lead generation landing page?</H2>
            <ParagraphSmall>
              A landing page is a standalone web page that’s designed to present
              a single marketing promotion or campaign. Inbound traffic from
              paid or organic ads “land” on this page, and then they have the
              opportunity to engage deeper with the business.
            </ParagraphSmall>
            <ParagraphSmall>
              Unlike a website, a landing page doesn’t direct visitors to
              different pages to learn about your brand. A landing page presents
              one specific offering, and it gives them a point of conversion
              right then and there for that offer.
            </ParagraphSmall>
            <ParagraphSmall>
              Squeeze pages (a unique type of landing pages geared at lead
              generation) are designed to squeeze information out of your
              website visitors, specifically a name and email address. These
              pages use a lead magnet to capture and qualify leads and store
              them in your email database.
            </ParagraphSmall>
            <ImageWithBorder
              image={image4}
              alt="anatomy of a squeeze page"
              title="anatomy of a squeeze page"
            />
            <ParagraphSmall>
              Here’s how it looks, broken down into steps.
            </ParagraphSmall>
            <UL>
              <ListItem>You’re offering a free webinar.</ListItem>
              <ListItem>
                You put out advertisements and posts on Google and social media
                about your webinar.
              </ListItem>
              <ListItem>
                Some people who are interested will click on the ad, and they’re
                brought to your webinar’s landing page.
              </ListItem>
              <ListItem>
                On that squeeze page, they’ll decide whether or not they want to
                participate in the webinar, based on the content you provide to
                convince them how awesome the webinar is.
              </ListItem>
              <ListItem>
                They’ll give you their basic information, like their email
                address, to “reserve their seat” for the webinar.
              </ListItem>
              <ListItem>
                Now you have a new attendee for your webinar, and a new lead in
                your email list!
              </ListItem>
            </UL>
            <ParagraphSmall>
              That landing page was entirely designed to convert traffic into
              webinar leads. There weren’t any other CTAs or information that
              wasn’t relevant to the webinar.
            </ParagraphSmall>
            <ParagraphSmall>
              So how do you create a landing page for lead generation?
            </ParagraphSmall>
            <H2>What should be included on a landing page?</H2>
            <OL>
              <ListItem>
                A lead magnet (that your audience actually wants)
              </ListItem>
              <ListItem>Form to capture information</ListItem>
              <ListItem>Stellar headline</ListItem>
              <ListItem>Brief description of the offering</ListItem>
              <ListItem>At least one image or video</ListItem>
              <ListItem>
                Testimonials or logos that provide credibility
              </ListItem>
            </OL>
            <H2>1. Magnetize with the main event</H2>
            <ParagraphSmall>
              Lead magnets are the main attraction of your landing page. Before
              you can even make a landing page, you want to create a high-value
              lead magnet that’s targeted directly at your audience. It’s this
              lead magnet that’s the backbone for the rest of the page.
            </ParagraphSmall>
            <H3>What is a lead magnet?</H3>
            <ParagraphSmall>
              A lead magnet is an offer that attracts leads to give you their
              information.
            </ParagraphSmall>
            <ParagraphSmall>
              The vast majority of people are not ready to make a purchase when
              they first interact with your brand. But freebie content like a
              lead magnet can pique their interest and delve deeper with you.
              Once you have their contact information, you can nurture them and
              stay top of mind, so they come to you when they are ready to buy.
            </ParagraphSmall>
            <H3>How to create a lead magnet</H3>
            <ParagraphSmall>
              The lead magnet should have three goals:
            </ParagraphSmall>
            <OL>
              <ListItem>Solve the visitor’s pain point</ListItem>
              <ListItem>Be unique, different, and valuable </ListItem>
              <ListItem>Deliver immediate results</ListItem>
            </OL>
            <ParagraphSmall>
              Create a lead magnet that customers want to download. It should
              solve a problem they’re facing, and that solution should be unique
              and immediate.
            </ParagraphSmall>
            <ParagraphSmall>
              The more unique it is, the more likely they’ll want to give you
              their information in exchange for it. If they could Google that
              topic and get that same sort of resource without handing over
              their email address, they’ll just go elsewhere.
            </ParagraphSmall>
            <ParagraphSmall>
              You also want the lead magnet to be immediate. People seek instant
              gratification. It makes them feel good about your brand. The
              faster your audience can use your lead magnet (and see results
              from it), the faster they’ll associate your brand to that value.
            </ParagraphSmall>
            <H3>Lead magnet example</H3>
            <ParagraphSmall>
              Let’s say that you’re a wedding photographer. You create the lead
              magnet: Ultimate Checklist To Make Your Wedding Gorgeously
              Photographable.
            </ParagraphSmall>
            <Image1
              image={image1}
              alt="landing page for wedding photographer lead magnet"
              title="landing page for wedding photographer lead magnet"
            />

            <ParagraphSmall>
              It’s related to the wedding industry, and it also leaves a lot of
              room to talk about your services in the checklist or guide.
            </ParagraphSmall>
            <ParagraphSmall>
              But it’s also specific and unique. It’s not just how to plan for a
              wedding. It’s how to design a wedding that will look great in
              photographs.
            </ParagraphSmall>
            <ParagraphSmall>
              People will read this checklist today, and they can start
              implementing the items from this checklist during their wedding
              planning. It’s there for immediate use, which provides instant
              gratification.
            </ParagraphSmall>
            <ParagraphSmall>
              Once they see that your checklist is useful, they’re more likely
              to come back to you as a viable candidate for their wedding
              photographer. They’ll love the advice you’ve given them, and
              they’ll trust you know what you’re doing.
            </ParagraphSmall>
            <H3>One page = one action</H3>
            <ParagraphSmall>
              Each landing page should have one action and one action only.
              Don’t dilute your page with lots of offers or gimmicks. Leonardo
              Da Vinci said, “Simplicity is the ultimate sophistication.” And
              this definitely applies to landing pages. Focused minimalism tends
              to generate the most and the highest quality leads.
            </ParagraphSmall>
            <ParagraphSmall>
              A strong CTA correlates with the current <b>engagement level</b>{' '}
              of your visitors. In the above example with the wedding
              photographer, most of that traffic is probably “cold” if they came
              in from Pinterest advertisements, for example. So the lead magnet
              focuses on grabbing their email with a simple, high-value magnet,
              like a checklist or infographic. It’s a low barrier to entry but
              with a large reward.
            </ParagraphSmall>
            <Image1
              image={image2}
              alt="landing page hiding cta button"
              title="landing page hiding cta button"
            />
            <ParagraphSmall>
              But let’s imagine you’re marketing to a list of “warm” leads. Your
              landing page might seek to create a deeper engagement so the leads
              are more likely to book their wedding with you. The CTA instead
              might be to sign up for a free wedding videography webinar or a
              free venue shoot consultation. This creates a stronger connection
              between lead and business while still providing value to your
              leads.
            </ParagraphSmall>
            <ParagraphSmall>
              Consider the goal you’re trying to reach and create the lead
              magnet based on that objective.
            </ParagraphSmall>
            <H2>2. Minimize friction on the form</H2>
            <ParagraphSmall>
              The opt-in form is where you actually collect leads. It’s the
              “net” of your lead capture landing page.
            </ParagraphSmall>
            <ParagraphSmall>
              People will give up on even the best lead magnets if the form is
              too complicated or time-consuming. So try to use as few form
              fields as possible, and keep the required information simple.
              First name and email address are usually enough to do it!&nbsp;
            </ParagraphSmall>
            <StyledImageComponent
              image={image5}
              alt="good vs bad lead form"
              title="good vs bad lead form"
            />
            <ParagraphSmall>
              They’ll also give up if the form feels insecure. So, make sure you
              promise not to spam them and show some sort of security logo if
              relevant. This tells people that you’re not going to use their
              info willy nilly. It demonstrates credibility and respect for the
              consumer that’s critical to getting them to convert.
            </ParagraphSmall>
            <H2>3. The headline is the value proposition</H2>
            <ParagraphSmall>
              Now that you’ve created the perfect lead magnet that will engage
              your audience, you want to architect the landing page in a way
              that will promote that lead magnet.
            </ParagraphSmall>
            <ParagraphSmall>
              The first rule of thumb: Put the value proposition front and
              center.
            </ParagraphSmall>
            <ParagraphSmall>
              Did you know? Your visitors have an average attention span of
              about 8 seconds. That means they’ll likely read the headline and
              see the design before deciding whether or not they want to
              consider your offer or click away. So your headline needs to tell
              them exactly what they’re getting and why they need to engage.
            </ParagraphSmall>
            <ParagraphSmall>
              For example, a strong headline might be:&nbsp;
              <i>Lose 5lbs this week with our free No-Gluten Diet plan!</i>
            </ParagraphSmall>
            <ParagraphSmall>
              A weaker headline might be: <i>Get the Gluten-Free Diet plan.</i>
            </ParagraphSmall>
            <ParagraphSmall>
              The second headline describes the <b>‘what’</b> but not the{' '}
              <b>‘why’</b>. And it doesn’t create an emotional response or
              compel the reader to take action. The first headline is more
              powerful because it tells them what the offer is, what their
              results will be, when they’ll see those results, and how they’ll
              get those results (by downloading your lead magnet).
            </ParagraphSmall>
            <ParagraphSmall>
              Give them as much as you can in the headline to explain what the
              end results of this lead magnet will be. (But try not to be too
              wordy.)
            </ParagraphSmall>
            <H2>4. Point everything in the direction of the lead magnet</H2>
            <ParagraphSmall>
              Everything on your landing page should be about your lead magnet.
              Every word and visual is there to provide information about the
              benefits of the lead magnet.
            </ParagraphSmall>
            <ParagraphSmall>
              That doesn’t mean you want to just list the benefits, though. You
              need to create an emotional response. You want to&nbsp;
              <OutboundLink
                href="https://www.leadpages.com/blog/write-sales-copy-storytelling/"
                aria-label="tell a story"
              >
                tell a story.&nbsp;
              </OutboundLink>
              Share a vision about what this offering can (and will) do to
              improve their life.
            </ParagraphSmall>
            <ParagraphSmall>
              This applies to testimonials and customer reviews as well. You
              don’t want just overall testimonials about an irrelevant product.
              Keep the testimonials about this specific lead magnet or your
              overall brand.
            </ParagraphSmall>
            <ParagraphSmall>
              Not sure how to tailor your landing page to promote your lead
              magnet? Check out these awesome resources:
            </ParagraphSmall>
            <UL>
              <ListItem>
                <OutboundLink
                  href="https://www.leadpages.com/blog/landing-page-design/"
                  aria-label="The 6 Big Rules of Landing Page Design (Straight from Highly Successful Web Designers)"
                >
                  The 6 Big Rules of Landing Page Design (Straight from Highly
                  Successful Web Designers)
                </OutboundLink>
              </ListItem>
            </UL>
            <UL>
              <ListItem>
                <OutboundLink
                  href="https://www.leadpages.com/blog/write-landing-page-copy/"
                  aria-label="7 Landing Page Copy Hacks (That The Pros Know By Heart)"
                >
                  7 Landing Page Copy Hacks (That The Pros Know By Heart)
                </OutboundLink>
              </ListItem>
            </UL>
            <br></br>
            <ParagraphSmall>
              There’s a lot that goes into making a landing page super optimized
              for conversion. We have an entire guide just about how to improve
              your conversion rate by designing and optimizing your landing
              page. Check out the&nbsp;
              <Link href="/conversion-optimization-guide" passHref>
                <ArticleLink aria-label="conversion optimization guide here.">
                  conversion optimization guide here.
                </ArticleLink>
              </Link>
            </ParagraphSmall>
            <ParagraphSmall>
              Some quick tips to help you get started:
            </ParagraphSmall>
            <UL>
              <ListItem>
                Pick a color palette and stick to it. Put the CTA in a
                different, bolder color. Contrast is the key to getting your
                visitor’s attention.
              </ListItem>
              <ListItem>
                Use a simple, easy to follow layout. Minimalism looks and feels
                “cleaner.”
              </ListItem>
              <ListItem>
                Use design to tell a story and evoke an emotional response. How
                you present the page tells people how to feel about the offer
                and your brand.
              </ListItem>
              <ListItem>
                Repeat keywords and phrases. This drives home the main point
                while optimizing for search engines.
              </ListItem>
              <ListItem>
                Make your copy easy to scan. Skimmability means faster decision
                making.
              </ListItem>
              <ListItem>
                Reiterate the messaging and offer you used in your initial ad or
                post (the one that brought the traffic to this landing page).
              </ListItem>
              <ListItem>
                Use lines and arrows to direct people’s attention where you want
                it to go.
              </ListItem>
              <ListItem>
                Reword your CTA button to make sure it has actionable language.
                “Start now” isn’t as powerful as “Get my free book.”
              </ListItem>
              <ListItem>
                Focus on the benefits and how it will impact your lead’s life.
                What sort of results will they experience after they use your
                lead magnet?
              </ListItem>
              <ListItem>
                Create limited-time offers that increase the urgency and
                exclusivity of the offer.
              </ListItem>
              <ListItem>
                Remove all distractions. Stay focused on the one, ultimate goal
                and push all design and content that way.
              </ListItem>
              <ListItem>
                Don’t forget your logo. (But you don’t need it more than once.)
              </ListItem>
              <ListItem>
                Make sure your landing page is mobile optimized.
              </ListItem>
              <ListItem>
                Run A/B testing to make sure each feature is optimized for
                conversion.
              </ListItem>
            </UL>
            <br></br>
            <ParagraphSmall>
              Keep in mind that users spend&nbsp;
              <OutboundLink
                href="https://www.comscore.com/Insights/Presentations-and-Whitepapers/2017/2017-US-Cross-Platform-Future-in-Focus?"
                aria-label="69% of their media time"
              >
                69% of their media time
              </OutboundLink>
              &nbsp; on their smartphones. If someone finds you while they’re on
              the move, chances are they’ll forget about you by the time they
              get home. Your website and landing pages need to be
              mobile-friendly to grab those on-the-go mobile customers.
            </ParagraphSmall>
            <H2>5. Make it visual</H2>
            <ParagraphSmall>
              Landing pages with images and videos perform better than plain
              text. You want your customers to see what they’re getting and
              understand how their life will be better with this lead magnet.
            </ParagraphSmall>
            <Link
              href="https://www.leadpages.com/templates/preview/KdUWPeeU3gTG49WLGEqnqQ"
              passHref
            >
              <TemplateLink aria-label="app pricing tiers" target="_blank">
                <TemplateImage
                  image={image3}
                  alt="fitness freebie opt-in page"
                  title="fitness freebie opt-in page"
                />
              </TemplateLink>
            </Link>

            <ParagraphSmall>
              That doesn’t mean you need to spend a lot of time and money to
              create images and videos specifically for your lead magnet
              (although, if you have the resources available, it might be worth
              it). Videos about your brand or images of your products or
              customers work well to attract attention, too.
            </ParagraphSmall>
            <ParagraphSmall>
              A video itself can be the lead magnet. If you have a unique how-to
              video or short video class that solves a pain point for your
              audience, you can gate it with an email address.
            </ParagraphSmall>
            <H2>Integrate your landing page</H2>
            <ParagraphSmall>
              Leads are just the beginning. Typically, when someone inputs their
              email address in exchange for a lead magnet, they’re hoping to
              receive their offer right away.
            </ParagraphSmall>
            <ParagraphSmall>
              This means you’ll probably need integrated software on your
              landing page that lets them have instant access or instant
              downloadability.
            </ParagraphSmall>
            <ParagraphSmall>
              Or, you’ll want to make sure that inputting their information into
              the form triggers an action that sends them an email with the
              appropriate offer.
            </ParagraphSmall>
            <ParagraphSmall>
              Check out&nbsp;
              <Link href="/integrations" passHref>
                <ArticleLink aria-label="Leadpages integrations">
                  Leadpages integrations
                </ArticleLink>
              </Link>
              &nbsp; to unlock the unlimited possibilities of your landing page.
            </ParagraphSmall>
            <H2>Landing page for lead generation</H2>
            <ParagraphSmall>
              Landing pages are made for lead generation. (In fact, landing
              pages are also called lead pages for that reason.)
            </ParagraphSmall>
            <ParagraphSmall>
              So we usually recommend that clients create one unique landing
              page per call to action and lead magnet. The more specific and
              directed your landing page is, the more likely it will convert the
              leads you’re looking for.
            </ParagraphSmall>
            <ParagraphSmall>
              Landing pages are made to turn visitors into leads and leads into
              customers. Lead generation landing pages are one of the most
              effective ways to capture traffic, so you can have a warm list of
              leads excited to hear from you in your marketing campaign.
            </ParagraphSmall>
            <ParagraphSmall>
              Get specific landing page lead generation examples in the next
              chapter...
            </ParagraphSmall>
            {/* Navigation Cards Section */}
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

export default LeadGenerationLandingPages
