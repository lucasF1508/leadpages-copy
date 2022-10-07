import React from 'react'
// components
import SEO from '@legacy/components/SEO'
import SiloDesktopMenu from '@legacy/components/silos/SiloDesktopMenu'
import SiloHeader from '@legacy/components/headers/SiloHeader'
import SiloMobileMenu from '@legacy/components/silos/SiloMobileMenu'
import SiloNavigationCards from '@legacy/components/silos/SiloNavigationCards'
import SiloSidebar from '@legacy/components/silos/SiloSidebar'
// styles
import {
  BodyContainer,
  H2,
  H3,
  ImageWithBorder,
  InnerContainer,
  ListItem,
  MainContainer,
  OL,
  OutboundLink,
  OuterContainer,
  PageSupertitle,
  PageTitle,
  ParagraphSmall,
  UL,
} from '@legacy/components/silos/SiloGlobalStyles'
// data
import { pageRoutes, verbiage } from '@legacy/data/lead-generation-guide_data'
// images
import image1 from '@legacy/assets/images/silos/lead-generation-guide/0-1-what-is-lead-generation-816px@2x.jpg'

const LeadGenerationGuide = () => (
  <>
    <SEO
      pathname="/lead-generation-guide"
      title="What is Lead Generation | Lead Generation Guide | Leadpages"
      description="Every business requires a steady stream of high-quality leads. We’ve compiled insights from hundreds of thousands of companies into this Guide to Lead Generation."
      image="https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg"
      ogtitle="What is Lead Generation?"
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
      />
      {/* Desktop Sidebar Menu */}
      <SiloSidebar pageRoutes={pageRoutes} />
      {/* Mobile Menu */}
      <SiloMobileMenu pageRoutes={pageRoutes} verbiage={verbiage} />
      <InnerContainer>
        {/* Main Page Content */}
        <BodyContainer>
          <MainContainer>
            <PageSupertitle>Introduction</PageSupertitle>
            <PageTitle>What is Lead Generation?</PageTitle>
            <ParagraphSmall>
              Lead generation is the process or pipeline for converting
              anonymous web traffic into contacts, so you or your marketing team
              can continue to proactively market to those contacts in the
              future. For small businesses selling services, collecting
              qualified leads and building an email list ensures a steady stream
              of future customers for you or your sales team.
            </ParagraphSmall>
            <ParagraphSmall>
              But you’re not just collecting a visitor’s contact information.
              You’re connecting with your target audience and providing them
              with something of value in exchange for their information. Once
              visitors have shown interest and requested to join your email
              list, you’re in a position to actively nurture those leads until
              they’re ready to buy.
            </ParagraphSmall>
            <ParagraphSmall>
              As the leader in conversion marketing, Leadpages has long been at
              the forefront of helping small businesses succeed online. We
              created this guide as a compilation of proven strategies and
              tactics, gathered from tens of thousands of businesses over the
              past several years.
            </ParagraphSmall>
            <ParagraphSmall>
              Whether you’re looking to learn the basics of generating leads, or
              need some new and creative ideas, we’ll cover it all in this
              guide.
            </ParagraphSmall>
            <H2>What is lead generation?</H2>
            <ParagraphSmall>
              Lead generation means something different depending on the type of
              business you run and the industry that you’re in. Where they come
              from, how they’re collected, and what they’re ‘worth’ changes from
              one business to the next. That being said, the principles are
              largely the same.
            </ParagraphSmall>
            <ImageWithBorder
              image={image1}
              alt="What is lead generation?"
              title="What is lead generation?"
            />
            <H3>What are leads?</H3>
            <ParagraphSmall>
              A <b>&#39;lead&#39;</b> is someone who:
            </ParagraphSmall>
            <OL>
              <ListItem>
                Has shown interest in your business or offering
              </ListItem>
              <ListItem>Gives you their contact information</ListItem>
            </OL>
            <ParagraphSmall>
              A lot of marketers define a lead just by the first part of that
              definition. But they’re not really a lead unless you have their
              contact information to follow up with them.
            </ParagraphSmall>
            <ParagraphSmall>
              For example, an online retailer offers new customers the
              opportunity to enter an email address and receive a 10-percent off
              discount for their first purchase, all in an effort to boost the
              conversion rate.
            </ParagraphSmall>
            <ParagraphSmall>
              Whether or not the visitors use the coupon, they are now
              subscribed to the retailer’s email list. This allows the business
              owner to keep in touch until the lead is ready to buy. Generating
              leads involves collecting the contact information of potential
              customers so that you can nurture those leads until they’re ready
              to buy.
            </ParagraphSmall>
            <H3>Definition: </H3>
            <ParagraphSmall>
              Lead generation is the process for qualifying and capturing the
              contact information of people who show interest in your business
              and the products or services it offers.
            </ParagraphSmall>
            <ParagraphSmall>
              But it’s more than just collecting a prospect’s information—it’s
              about building a relationship with the person who shows interest.
              You want to turn them from a stranger or “cold” prospect into a
              warm lead (someone who could potentially buy in the near future).
            </ParagraphSmall>
            <ParagraphSmall>
              There are a lot of different methods of lead generation. A lead
              could come through your online marketing (like paid or social
              ads), through in-person conversations (with a salesperson at a
              pop-up shop), or even through referrals and word of mouth (from
              your former clients). In this guide, we’re going to focus on the
              role your landing pages and website play in your online lead
              generation.
            </ParagraphSmall>
            <H2>What is a lead magnet?</H2>
            <ParagraphSmall>
              A lead magnet is a piece of free content that you offer in
              exchange for a visitor’s contact information. Like a magnet, it
              pulls people in to pique their interest and encourages them to
              give you their email address.
            </ParagraphSmall>
            <ParagraphSmall>
              Why use a lead magnet? Because nothing comes for free. Most people
              won’t just give you their email address for nothing. They’ll give
              you their information in exchange for some sort of value that they
              want. This could be a downloadable guide, a free webinar, or a
              special discount code, for example.
            </ParagraphSmall>
            <H2>What is the purpose of lead generation? </H2>
            <ParagraphSmall>
              Where is lead generation in the marketing journey?
            </ParagraphSmall>
            <ParagraphSmall>
              It’s often the second stage of ‘inbound’ marketing. It happens
              after you’ve pulled traffic to your page and before you convert
              them into a viable potential customer.
            </ParagraphSmall>
            <ParagraphSmall>
              It’s the process of turning traffic into interested prospects.
            </ParagraphSmall>
            <ParagraphSmall>
              Here’s what the typical process looks like:
            </ParagraphSmall>
            <OL>
              <ListItem>
                A web user sees one of your marketing materials, like a paid
                advertisement, social media page, or blog.
              </ListItem>
              <ListItem>
                On that ad, they see a CTA (call to action) that will encourage
                them to take some sort of non-committal action. (“Learn more,”
                “keep reading,” or “get this offer” are pretty common CTA
                examples.)
              </ListItem>
              <ListItem>
                The CTA brings them to a landing page. This landing page is
                designed and optimized for lead generation by offering some sort
                of lead magnet.
              </ListItem>
              <ListItem>
                On the landing page, the visitor fills out a form in exchange
                for the offered lead magnet.
              </ListItem>
              <ListItem>Now they’re a lead!</ListItem>
            </OL>
            <ParagraphSmall>
              Landing pages are the most common and effective means of digital
              lead generation, but you can also do a similar process with
              website pages. We’ll talk about both landing pages and website
              pages in this guide.
            </ParagraphSmall>
            <H2>Why is lead generation so important?</H2>
            <ParagraphSmall>
              Strangers seldom become customers after one visit or interaction
              with a brand. They need multiple impressions from your brand to
              make a purchasing decision.
            </ParagraphSmall>
            <ParagraphSmall>
              If you don’t have your visitor’s information, you lose all control
              over these impressions. You have to just cross your fingers and
              hope that they’ll find their way back to your website or social
              media page (which is rare).
            </ParagraphSmall>
            <ParagraphSmall>
              But if you grab the visitor’s information, you control their
              future impressions of your business, both in quality and quantity.
              You can send them more offers, remind them how great your brand
              is, and pull them further through your sales funnel.
            </ParagraphSmall>
            <ParagraphSmall>
              What are the benefits of lead generation?
            </ParagraphSmall>
            <UL>
              <ListItem>
                It gives you a higher ROI on the resources you’ve invested in
                attracting traffic.
              </ListItem>
              <ListItem>
                You can target interested buyers (sales qualified leads) more
                effectively than cold calling strangers.
              </ListItem>
              <ListItem>
                You grow your list of leads and customers. Leads are yours to
                keep. Your contact list is highly valuable, and it’s sometimes
                even part of the valuation of your business.
              </ListItem>
              <ListItem>
                You can collect key information about prospects that helps you
                better tailor your marketing campaigns, sales tactics, and even
                your products/services to them.
              </ListItem>
            </UL>
            <H2>What does it mean to “qualify” a lead?</H2>
            <ParagraphSmall>
              A sales qualified lead is someone who has actively shown potential
              to buy from you, as opposed to any old name and email address.
            </ParagraphSmall>
            <ParagraphSmall>
              Why does this matter? Because you’re not wasting time or money or
              resources contacting people who have no interest in buying. You’re
              only marketing to those people who could potentially buy.
              Qualified leads make sure you’re spending your marketing budget on
              people who could and would move to the next step of your sales
              journey.
            </ParagraphSmall>
            <ParagraphSmall>
              Qualifying a lead is a big part of what lead generation is. In
              most cases, “qualifying” means that the visitor is proving their
              interest by not only joining your email list but staying actively
              engaged.
            </ParagraphSmall>
            <H2>Why can’t I just buy leads?</H2>
            <ParagraphSmall>
              If leads are so important, can’t I just buy them from companies
              that sell lead lists and save myself the trouble? There are a lot
              of services out there that will sell you a list of email addresses
              or phone numbers.
            </ParagraphSmall>
            <ParagraphSmall>But those leads are not qualified.</ParagraphSmall>
            <ParagraphSmall>
              If you reach out to those “leads,” you’re essentially cold calling
              a stranger who’s probably never heard of you before.
            </ParagraphSmall>
            <ParagraphSmall>
              You’re spending money to buy leads who have no idea who you are,
              who may not be interested in what you’re selling, and who may even
              get mad that you “bought” their information.
            </ParagraphSmall>
            <H2>How do you nurture a lead?</H2>
            <ParagraphSmall>
              After you’ve generated a lead, you’ll want to “nurture” them.
              Nurturing a lead is the process of reaching out to leads after
              they’ve given you their information. You’re basically keeping the
              lead “warm” until they’re ready to purchase.
            </ParagraphSmall>
            <ParagraphSmall>
              In most cases, the next step in the journey is email marketing. An
              email address isn’t a huge barrier to entry, especially in
              exchange for some sort of offer like the lead magnet. Since it’s
              not too hard to grab their email address, it makes sense to reach
              out to them (and nurture them) by email.
            </ParagraphSmall>
            <ParagraphSmall>
              Implementing a lead scoring program into your business strategy is
              another great way to nurture a lead and gauge someone’s level of
              interest in your products or services. Lead scoring lets you rank
              prospects on a scale (usually by assigning numerical values to
              certain online behaviors) to help reveal which leads your sales
              team should reach out to and which leads need to be nurtured more.
            </ParagraphSmall>
            <ParagraphSmall>
              Get more info about email marketing and the&nbsp;
              <OutboundLink
                href="https://www.leadpages.com/blog/best-email-marketing-platform/"
                aria-label="best email marketing platform"
              >
                best email marketing platform
              </OutboundLink>
              &nbsp; to nurture your leads with just a click on the link.
            </ParagraphSmall>
            <H2>What is B2B lead generation?</H2>
            <ParagraphSmall>
              B2C and B2B lead generation pretty much work the same way. You
              might just need to alter the information you grab and the lead
              magnets you offer.
            </ParagraphSmall>
            <ParagraphSmall>
              For B2C (business to consumer) lead generation, you’re likely
              focused on selling some sort of product or service. So this lead
              is a potential customer. That means you’ll want to tailor your
              marketing towards sales.
            </ParagraphSmall>
            <ParagraphSmall>
              B2B (business to business) lead generation can also be about
              making a sale, but not always. Sometimes, you’re looking for
              business partners or connections. Also, B2B marketing, in general,
              can be a little more nuanced than B2C, because you have to adjust
              your traffic sources and lead magnets to find relevant
              decision-makers at qualified businesses.
            </ParagraphSmall>
            <ParagraphSmall>
              Either way, in terms of marketing strategy, there are many
              similarities for both B2B and B2C, as long as you know who your
              leads are and what they want. Then you can design your campaign
              accordingly! We’ll get more in-depth about strategies in the next
              chapter.
            </ParagraphSmall>
            {/* Navigation Card Section */}
            <SiloNavigationCards pageRoutes={pageRoutes} showSpecificPage={1} />
            <H2>What is lead generation in SEO?</H2>
            <ParagraphSmall>
              SEO (search engine optimization) is about bringing more traffic to
              your page or site. You’re crafting the page in a way that Google
              likes, so its algorithm can acknowledge the authority,
              credibility, and relevance of your site.
            </ParagraphSmall>
            <ParagraphSmall>
              SEO boosts the page’s ranking for certain keywords or phrases, so
              you appear higher up in search results. This gives you more
              visibility and reach, which brings more people to your page.
            </ParagraphSmall>
            <ParagraphSmall>
              More organic traffic on your page means more potential leads and
              leads come at a lower cost than paid traffic since it’s happening
              organically.
            </ParagraphSmall>
            <ParagraphSmall>
              That means SEO helps make lead generation possible by bringing
              people to your site. But it’s its own ball game entirely.
            </ParagraphSmall>
            <ParagraphSmall>
              Check out our&nbsp;
              <OutboundLink
                href="https://www.leadpages.com/blog/landing-page-seo-rank/"
                aria-label="Landing Page SEO resource"
              >
                Landing Page SEO resource
              </OutboundLink>
              &nbsp; to learn everything you need to know about crafting pages
              that convert and rank on search engines.
            </ParagraphSmall>
            <H2>What will I learn in this lead generation guide?</H2>
            <ParagraphSmall>
              On the left side of this guide, you can toggle through the
              chapters to find the information that you’re interested in. Or you
              can follow each chapter one at a time, and we’ll guide you through
              to the next section at the end of the page.
            </ParagraphSmall>
            <ParagraphSmall>In this guide you’ll learn about:</ParagraphSmall>
            <UL>
              <ListItem>
                <b>Lead generation strategies:</b> How to design strategies that
                actually work including how to attract, qualify and capture
                leads, and how to successfully design your lead generation
                campaign from start to finish.
              </ListItem>
              <ListItem>
                <b>The ins and outs of landing pages:</b> What a lead generation
                landing page is, how you can use it, and a few of our TOP SECRET
                industry tips and tricks to optimize your landing pages.
              </ListItem>
              <ListItem>
                <b>Landing page examples:</b> Check out our most popular
                pre-designed, mobile responsive templates that you can easily
                personalize (all without having to touch a speck of code).
              </ListItem>
              <ListItem>
                <b>How to create a lead-generating website:</b> Boost revenue
                and steal the spotlight from your competitors by learning how to
                build and design a website that grabs leads.
              </ListItem>
              <ListItem>
                <b>Lead generation ideas:</b> Creative tips, fun tricks, and
                unique lead magnets that will make your leads eager to hand over
                their information.
              </ListItem>
              <ListItem>
                <b>Tools that make your job easier:</b> All the tools you
                need—lead generation software, Google Ads, online schedulers,
                and a whole lot more—to make marketing way, way easier.
              </ListItem>
            </UL>
            <ParagraphSmall>
              The rest of this guide is chock full of awesome tips and tricks
              that will make lead generation easy for your landing pages and
              websites. So grab a cup of joe, nestle down into a comfy reading
              spot, and dive into the world of how to land future customers.
            </ParagraphSmall>
            {/* Navigation Cards Section */}
            <SiloNavigationCards pageRoutes={pageRoutes} onlyShowNextPage />
          </MainContainer>
        </BodyContainer>
      </InnerContainer>
    </OuterContainer>
  </>
)

export default LeadGenerationGuide
