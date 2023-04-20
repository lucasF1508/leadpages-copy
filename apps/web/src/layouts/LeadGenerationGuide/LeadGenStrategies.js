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
  Image1,
  InnerContainer,
  ListItem,
  MainContainer,
  OL,
  OutboundLink,
  OuterContainer,
  PageSupertitle,
  PageTitle,
  ParagraphSmall,
  ParagraphLarge,
  UL,
} from '@legacy/components/silos/SiloGlobalStyles'
// data
import { pageRoutes, verbiage } from '@legacy/data/lead-generation-guide_data'
// images
import image1 from '@legacy/assets/images/silos/lead-generation-guide/1-1-use-lead-magnets-to-give-people-what-they-want.jpg'
import image3 from '@legacy/assets/images/silos/lead-generation-guide/4-1-lead-magnet-match-content.jpg'

const LeadGenerationStrategies = () => (
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
              How to Design Lead Generation Strategies that Actually Work
            </PageTitle>
            <ParagraphLarge>
              <i>
                Lead generation is how you turn anonymous web traffic into
                business-building potential. Failure to capture a visitor’s
                information means you’re letting potential customers (and
                revenue) slip through the cracks.
              </i>
            </ParagraphLarge>
            <ParagraphSmall>
              That’s where lead generation steps in. Lead generation is the
              process of capturing a visitor's contact info so that you can
              proactively follow-up and market to them in the future. Oh, and so
              you can eventually make a sale.
            </ParagraphSmall>
            <ParagraphSmall>
              But how you generate leads is critical to success. Like any other
              marketing campaign, if you’re not proactively strategizing each
              step of the process, you probably won’t see the results you want.
            </ParagraphSmall>
            <ParagraphSmall>
              This chapter is about the strategy of lead generation. How do you
              attract, qualify, and capture leads?
            </ParagraphSmall>
            <H2>1. Target a specific audience</H2>
            <ParagraphSmall>
              <b>
                Define your ideal customer and your ideal lead for this specific
                campaign.
              </b>
            </ParagraphSmall>
            <ParagraphSmall>
              Your business doesn’t cater to everyone, so your lead magnets
              shouldn’t be “one-size-fits-all” either. Targeted lead generation
              ensures you know who your audience is, what they want, and what
              kinds of lead magnets will get them to convert.
            </ParagraphSmall>
            <ParagraphSmall>
              This kind of targeting helps ensure you attract the right audience
              at the right time, so they’ll be more likely to buy.
            </ParagraphSmall>
            <H3>Is my audience the same as my customer persona?</H3>
            <ParagraphSmall>
              The audience is likely similar to what your brand’s customer
              persona is. However, each lead magnet might have a more specific
              audience.
            </ParagraphSmall>
            <ParagraphSmall>
              For example, your pet store company has one lead magnet targeted
              at dog owners and another lead magnet for cat owners. You might
              even break it down further with one lead magnet for “big” dog
              owners and another for “small” dog owners.
            </ParagraphSmall>
            <ParagraphSmall>
              You want your lead magnet to attract potential customers, so there
              should be a lot of overlap between your customer persona and your
              lead generation persona. But you might delve deeper into a
              specific customer target for each lead gen campaign.
            </ParagraphSmall>
            <H3>How do I run targeted lead generation?</H3>
            <ParagraphSmall>
              Defining the psychographics and demographics about your ideal
              leads is only half the battle. Now, you have to find those
              potential leads and get them to convert!
            </ParagraphSmall>
            <ParagraphSmall>
              Here are some lead generation techniques to help you target your
              ideal leads:
            </ParagraphSmall>
            <OL>
              <ListItem>
                Advertise on platforms where you already find and interact with
                your current customers, like social media or specific groups. Go
                where your ideal customer is hanging out, and you’ll attract
                quality prospects right from the get-go.
              </ListItem>
              <ListItem>
                Segment and personalize your content. Both your lead magnet and
                marketing content should be designed with your ideal customer in
                mind.
              </ListItem>
              <ListItem>
                Match the lead magnet to the interest level of your audience. A
                new, “cold” audience will want bite-size content, like a
                checklist or infographic. A “warm” audience that has already
                shown interest in you will want more involvement, like a webinar
                or ebook.
              </ListItem>
            </OL>
            <H2>2. Figure out where your audience is coming from</H2>
            <ParagraphSmall>
              <b>
                Determine primary traffic sources for qualified incoming
                prospects.
              </b>
            </ParagraphSmall>
            <ParagraphSmall>
              While you’re thinking about your visitors, consider traffic
              sources as well. Where are your site visitors coming from? What
              does this mean about the kinds of traffic and leads you’re
              attracting?
            </ParagraphSmall>
            <ParagraphSmall>
              This is referred to as <b>qualified lead generation.</b> You’re
              “qualifying” the leads that you’re getting by attracting the
              traffic that would be most likely to buy from you.
            </ParagraphSmall>
            <ParagraphSmall>
              Let’s use the above example. You don’t just want people who like
              dogs but don’t own one. You want to target dog owners who are
              actually buying food and toys for their pets.
            </ParagraphSmall>
            <ParagraphSmall>
              Want more traffic? Try out these&nbsp;
              <OutboundLink
                href="https://www.wordstream.com/blog/ws/2014/08/14/increase-traffic-to-my-website"
                aria-label="traffic sources and ideas"
              >
                traffic sources and ideas
              </OutboundLink>
              &nbsp; to figure out where your audience is hanging out.
            </ParagraphSmall>
            <H2>3. Create a rockstar lead magnet</H2>
            <ParagraphSmall>
              <b>
                Outline how you’ll deliver value that your lead cares about.
              </b>
            </ParagraphSmall>
            <ParagraphSmall>
              You know who your ideal audience is for this specific lead
              generation campaign. Now you want to figure out the kind of lead
              magnet that they’d want.
            </ParagraphSmall>
            <Image1
              image={image1}
              alt="use lead magnets to give people what they want"
              title="use lead magnets to give people what they want"
            />
            <DefinitionHolder>
              <H3>Lead Magnet</H3>
              <ParagraphSmall>
                An incentive, usually a free piece of content, that a business
                offers in exchange for a prospect’s email address or contact
                info.
              </ParagraphSmall>
            </DefinitionHolder>

            <ParagraphSmall>
              Always provide value in exchange for their information.
            </ParagraphSmall>
            <ParagraphSmall>
              The best way to add value is to solve your customer’s pain point.
              If you can solve their pain points, you’ll establish credibility
              and expertise while kickstarting a lasting relationship.
            </ParagraphSmall>
            <ParagraphSmall>
              <b>So ask yourself:</b> what’s driving your customer? What
              problems do they need to fix or solve the most right now? How can
              you provide a new and unique solution with your lead magnet?
            </ParagraphSmall>
            <ParagraphSmall>
              Once you’re clear on your customer’s problem and how you’ll
              provide a solution, you can package a lead magnet that seamlessly
              delivers that value.
            </ParagraphSmall>
            <ParagraphSmall>
              For example, your ideal audience may love yoga, but they don’t
              have enough time to practice during the week. Your lead magnet
              could be a series of videos with short 7-minute yoga meditations
              for the “busy yogi.” You’re delivering short and snappy value that
              they actually care about. Now that’s worth an email address, don’t
              you agree?
            </ParagraphSmall>
            <ParagraphSmall>Brainstorm a list of topics that:</ParagraphSmall>
            <UL>
              <ListItem>Your customer cares about (relevant value)</ListItem>
              <ListItem>That hasn’t been done before (uniqueness)</ListItem>
              <ListItem>And that you’re an expert in (expertise)</ListItem>
            </UL>
            <H2>4. Make sure the lead magnet fits their needs</H2>
            <ParagraphSmall>
              <b>Double-check the logistics of the lead magnet.</b>
            </ParagraphSmall>
            <ParagraphSmall>
              You’ve got the audience and the topic. Now how do you turn that
              information into a resource you can offer? What kind of lead
              magnet will best suit this audience and the content you’re looking
              to provide?
            </ParagraphSmall>
            <ParagraphSmall>
              Consider the best way to deliver the information in a way that
              will best speak to your audience. Do they want a checklist or a
              video series? Do they want a printable guide or something they can
              download on their phone?
            </ParagraphSmall>
            <ParagraphSmall>
              Also, consider if you can actually create this awesome lead magnet
              with the resources you currently have. If you don’t have access to
              video creation, you don’t want to create a lead magnet that’s a
              below-average video. Play up your strengths.
            </ParagraphSmall>
            <ParagraphSmall>
              See some&nbsp;
              <OutboundLink
                href="https://blog.hubspot.com/marketing/creating-lead-generation-offers-from-blogs"
                aria-label="tried-and-true lead magnet examples"
              >
                tried-and-true lead magnet examples
              </OutboundLink>
              &nbsp; here to help with your brainstorming.
            </ParagraphSmall>
            <H2>5. Make the lead magnet enticing</H2>
            <ParagraphSmall>
              <b>Make a promise for fast, effective results.</b>
            </ParagraphSmall>
            <ParagraphSmall>
              People enjoy instant gratification. The faster someone sees
              results from your lead magnet, the faster they trust your
              business.
            </ParagraphSmall>
            <ParagraphSmall>
              The most enticing lead magnets promise (and deliver on) instant
              effects.
            </ParagraphSmall>
            <ParagraphSmall>
              One of the most important lead generation techniques to remember
              is that your visitors want the lead magnet now, and they want the
              results that come from that content even faster. This means you’ll
              want to make the magnet downloadable in an instant, and you also
              want the value itself to provide a quick win.
            </ParagraphSmall>
            <ParagraphSmall>
              For example: “Download this free guide <b>right now</b> to lose 5
              lbs&nbsp;
              <b>by the end of the week.</b>”
            </ParagraphSmall>
            <ParagraphSmall>
              As opposed to: “Get this free guide <b>in the mail</b> to lose
              weight&nbsp;
              <b>(...at some point).</b>”
            </ParagraphSmall>
            <Image1
              image={image3}
              alt="Lead magnet match content"
              title="Lead magnet match content"
            />
            <ParagraphSmall>
              Which magnet gets your email address?
            </ParagraphSmall>
            <ParagraphSmall>
              (Be sure you can actually deliver on your promises, though.)
            </ParagraphSmall>
            <ParagraphSmall>
              If you believe in the power of your lead magnet, include a
              guarantee. Guarantees tell the lead that not only is it a low
              barrier to entry (just their email address), but it’s also
              risk-free with only upsides.
            </ParagraphSmall>
            <H2>6. Be generous with opt-in opportunities</H2>
            <ParagraphSmall>
              <b>Figure out where lead magnets belong.</b>
            </ParagraphSmall>
            <ParagraphSmall>
              The more (quality) opportunities you provide for people to opt
              into your email list, the more your list will grow. You might want
              one lead magnet on your website homepage and blog that encourages
              customers to subscribe to your newsletter. You could have another
              generation process on a landing page, where you encourage them to
              input their email to reserve a spot in the webinar.
            </ParagraphSmall>
            <ParagraphSmall>
              Every interaction with a new visitor should include an opportunity
              for that visitor to transform into a lead. This could be on your
              website, landing page, or social media. You want to specify where
              traffic is landing, and what they see when they land there.
            </ParagraphSmall>
            <ParagraphSmall>
              Remember that you should only have one CTA or lead magnet per page
              to minimize distraction and confusion.
            </ParagraphSmall>
            <H2>7. Design the page to optimize lead generation</H2>
            <ParagraphSmall>
              <b>Start playing around with design.</b>
            </ParagraphSmall>
            <ParagraphSmall>
              The design of your page matters a lot. It will either intrigue
              your audience and push them towards conversion… or it will make
              them click away.
            </ParagraphSmall>
            <ParagraphSmall>
              The outfit you wear tells people who you are. Are you in a bright,
              goofy shirt to make people laugh? Are you in a high-quality
              designer suit as a status symbol?
            </ParagraphSmall>
            <ParagraphSmall>
              In the same way, the design of your lead pages and advertisements
              will attract and engage a specific type of lead. Bright colors and
              authentic images are more likely to grab attention in a fun way
              (like for a pet owner), while a dark and sleek might interest a
              luxury customer.
            </ParagraphSmall>
            <ParagraphSmall>
              Design your website and lead generation landing pages as a
              reflection of your brand. This helps you attract and capture the
              right leads that want to partake in the lifestyle you’re
              portraying.
            </ParagraphSmall>
            <ParagraphSmall>
              What do you need to outline? Check out these&nbsp;
              <Link href="/landing-pages-guide/landing-page-elements" passHref>
                <ArticleLink aria-label="essential landing page elements">
                  essential landing page elements
                </ArticleLink>
              </Link>
              &nbsp; that will help you create your lead generation strategies
              and marketing campaigns.
            </ParagraphSmall>
            <H2>8. Test </H2>
            <ParagraphSmall>
              <b>
                Create a list of features on the landing page you’d like to
                test.
              </b>
            </ParagraphSmall>
            <ParagraphSmall>
              You won’t know if your lead generation methods and strategies work
              until you test them, see the data, and get feedback. Tests ensure
              you’re engaging your audience, building a relationship, and
              pushing conversion.
            </ParagraphSmall>
            <ParagraphSmall>
              Don’t get attached to the first landing page you make. Your
              landing page will (and should) change a lot after each test.
            </ParagraphSmall>
            <ParagraphSmall>
              Learn&nbsp;
              <OutboundLink
                href="https://www.leadpages.com/blog/ab-testing-split-testing/"
                aria-label="a/b split testing"
              >
                how to run A/B testing&nbsp;
              </OutboundLink>
              for your landing pages here. It’s super easy with Leadpages. Our
              Pro and Advanced customers can click on “create new split test,”
              choose a control page, change one variable, and start collecting
              data. Then, you keep the ‘winner’ of the test and go on to test
              other features.
            </ParagraphSmall>
            <H2>9. Define how you’ll nurture leads</H2>
            <ParagraphSmall>
              <b>Figure out the next step after lead generation.</b>
            </ParagraphSmall>
            <ParagraphSmall>
              Once you have your leads, what are you going to do with them? How
              are you going to reach out to them to further pull them through to
              the next level of your sales journey?
            </ParagraphSmall>
            <ParagraphSmall>
              Most businesses want to nurture their leads through email
              marketing. That means that when you collect your leads’
              information, you’ll want to ask for their email address. Check out
              these&nbsp;
              <OutboundLink
                href="https://blog.hubspot.com/marketing/lead-nurturing-email-examples"
                aria-label="19 nurturing email marketing examples"
              >
                19 nurturing email marketing examples&nbsp;
              </OutboundLink>
              for some good ideas to get you started.
            </ParagraphSmall>
            <ParagraphSmall>
              If your lead magnet is a free consultation, you might want to
              collect their phone number so you can call them for the consult
              (and then nurture them while on the phone call).
            </ParagraphSmall>
            <ParagraphSmall>
              Know how you’ll nurture leads after you have them, so you can know
              how you’ll need to capture them.
            </ParagraphSmall>
            <H2>Start with lead generation techniques</H2>
            <ParagraphSmall>
              A well-defined strategy will transform ‘strangers’ into warm
              leads, build your prospective customer list, and ramp up your
              marketing ROI. Once you’ve captured the lead, you can pull them
              down a targeted marketing campaign that will start rolling in the
              dough for your business.
            </ParagraphSmall>
            <ParagraphSmall>
              You’ve got your strategy. Now let’s get your landing page up and
              running. Check out the next chapter to learn what a lead
              generation landing page is and how you can use it.
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

export default LeadGenerationStrategies
