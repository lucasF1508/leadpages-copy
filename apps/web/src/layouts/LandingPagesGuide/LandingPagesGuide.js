import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// material-ui components
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
// components
import SEO from '@legacy/components/SEO'
import SiloDesktopMenu from '@legacy/components/silos/SiloDesktopMenu'
import SiloHeader from '@legacy/components/headers/SiloHeader'
import SiloMobileMenu from '@legacy/components/silos/SiloMobileMenu'
import SiloPromoBlock from '@legacy/components/silos/SiloPromoBlock'
import SiloSidebar from '@legacy/components/silos/SiloSidebar'
import Link from 'next/link'
// images
import image0_1 from '@legacy/assets/images/silos/landing-pages-guide/0-1-landing-pages-transform-web-traffic-into-leads-816px@2x.jpg'
import image1_1 from '@legacy/assets/images/silos/landing-pages-guide/1-1-landing page examples-816px@2x.jpg'
import image1_2 from '@legacy/assets/images/silos/landing-pages-guide/1-2-landing page characteristics-816px@2x.jpg'
import image1_3 from '@legacy/assets/images/silos/landing-pages-guide/1-3-ad to landing page-816px@2x.jpg'
import image1_4 from '@legacy/assets/images/silos/landing-pages-guide/app-pricing-tiers.jpg'
import image1_5 from '@legacy/assets/images/silos/landing-pages-guide/newsletter-signup-with-bio.jpg'
import builderCreativityStatic from '@legacy/assets/images/product/landing-page-builder/landing-page-builder-creativity-still_340px@2x.png'
import image3_1 from '@legacy/assets/images/silos/landing-pages-guide/3-1-when-to-use-a-landing-page-816px@2x.jpg'
import image4_1 from '@legacy/assets/images/silos/landing-pages-guide/5-1-landing-page-vs-home-page-816px@2x.jpg'
import image4_2 from '@legacy/assets/images/silos/landing-pages-guide/5-2-landing-page-customer-journey-816px@2x.jpg'
import image4_3 from '@legacy/assets/images/silos/landing-pages-guide/5-3-landing-page-template-gallery-sorted-by-conversion-rate-816px@2x.jpg'
import image5_1 from '@legacy/assets/images/silos/landing-pages-guide/4-1-splash-page-welcome-gate-landing-page-example-816px@2x.jpg'
import image5_2 from '@legacy/assets/images/silos/landing-pages-guide/4-2-anatomy-of-a-splash-page-welcome-gate-landing-page-example-816px@2x.jpg'
import image5_3 from '@legacy/assets/images/silos/landing-pages-guide/4-3-anatomy-of-a-squeeze-page-landing-page-example-816px@2x.jpg'
import image5_4 from '@legacy/assets/images/silos/landing-pages-guide/4-4-anatomy-of-a-sales-page-landing-page-example-816px@2x.jpg'
import image6_1 from '@legacy/assets/images/silos/landing-pages-guide/8-1-essential-landing-page-elements-816px@2x.jpg'
import image7_1 from '@legacy/assets/images/silos/landing-pages-guide/10-1-how-much-copy-to-write-on-your-landing-page-816px@2x.jpg'
import image8_1 from '@legacy/assets/images/silos/landing-pages-guide/Landing-pg-design-checklist_Promo-Image@2x.png'
import image9_1 from '@legacy/assets/images/silos/landing-pages-guide/2-2-choose-a-landing-page-template-816px@2x.jpg'
import image9_2 from '@legacy/assets/images/silos/landing-pages-guide/2-4-message-match-landing-page-ad-816px@2x.jpg'
import image10_1 from '@legacy/assets/images/silos/landing-pages-guide/7-1-landing-page-best-practices-816px@2x.jpg'
import image11_1 from '@legacy/assets/images/silos/landing-pages-guide/12-1-ab-test-headlines_652px@2x.jpg'
import image11_2 from '@legacy/assets/images/silos/landing-pages-guide/12-2-ab-test-cta-652px@2x.jpg'
import image11_3 from '@legacy/assets/images/silos/landing-pages-guide/12-3-ab-test-length-652px@2x.jpg'
import image11_4 from '@legacy/assets/images/silos/landing-pages-guide/12-4-ab-test-design-652px@2x.jpg'
import image11_5 from '@legacy/assets/images/silos/landing-pages-guide/12-5-ab-test-price-652px@2x.jpg'
import image12_1 from '@legacy/assets/images/silos/landing-pages-guide/9-1-PPC_Ad-platforms@2x.jpg'
import image12_2 from '@legacy/assets/images/silos/landing-pages-guide/9-2-Social-platforms@2x.jpg'
import image13_1 from '@legacy/assets/images/silos/landing-pages-guide/13-1-how-lead-magnets-work-816px@2x.jpg'
import image13_2 from '@legacy/assets/images/silos/landing-pages-guide/13-2-lead-magnet-format-816px@2x.jpg'
import image13_3 from '@legacy/assets/images/silos/landing-pages-guide/3-must-have-drip-campaigns.png'
import image13_4 from '@legacy/assets/images/silos/landing-pages-guide/13-3-leadpages_sample_lead-magnet-652px@2x.jpg'
import image13_5 from '@legacy/assets/images/silos/landing-pages-guide/13-4-leadpages_sample_lead-magnet-webinar-652px@2x.jpg'
import image13_6 from '@legacy/assets/images/silos/landing-pages-guide/13-5-leadpages_sample_lead-magnet-video_course-652px@2x.jpg'
import image13_7 from '@legacy/assets/images/silos/landing-pages-guide/13-6-leadpages_sample_lead-magnet-checklist-652px@2x.jpg'
import image13_8 from '@legacy/assets/images/silos/landing-pages-guide/13-7-lead-magnet-example-816px@2x.jpg'
import image13_9 from '@legacy/assets/images/silos/landing-pages-guide/13-8-DONT_leadpages_sample_lead-magnet-newsletter-652px@2x.jpg'
import image13_10 from '@legacy/assets/images/silos/landing-pages-guide/13-8-DO_leadpages_sample_lead-magnet-newsletter-652px@2x.jpg'
import image13_11 from '@legacy/assets/images/silos/landing-pages-guide/neil-patel-lead-magnet-example-1.png'
import image13_12 from '@legacy/assets/images/silos/landing-pages-guide/13-9-leadpages_sample_lead-magnet-thank-you-page-upsell-652px@2x.jpg'
import image13_13 from '@legacy/assets/images/silos/landing-pages-guide/free-coupon-lead-magnet-example.png'
import attractPromoImage from '@legacy/assets/images/silos/landing-pages-guide/13-promo-attract@2x.png'
// utilities
import shouldDisplayVideo from '@legacy/utils/should-display-video'
// styles
import {
  BGImage,
  BGImageWrapper,
  BodyContainer,
  Button,
  DesktopVideoHolder,
  DesktopFallbackImage,
  DesktopOnlyVideo,
  Headline,
  H2,
  H3,
  H4,
  HeaderLink,
  StyledImageComponent,
  Image1,
  Image2,
  Image3,
  ImageContainer,
  ImageWithBorder,
  ImageWithBorder2,
  InnerContainer,
  ListItem,
  MainContainer,
  MobileOnlyImage,
  OL,
  OutboundLink,
  OuterContainer,
  PageSupertitle,
  PageTitle,
  ParagraphAccent,
  ParagraphLarge,
  ParagraphSmall,
  SectionContainer,
  SiloScrollLink,
  SmallImage,
  SmallImage2,
  TemplateLink,
  TextContainer,
  Title,
  UL,
} from '@legacy/components/silos/SiloGlobalStyles'
// videos
const builderCreativityWebm =
  'https://static.leadpages.com/mktg/videos/landing-page-builder-creativity.webm'
const builderCreativityMp4 =
  'https://static.leadpages.com/mktg/videos/landing-page-builder-creativity.mp4'

const verbiage = {
  menu: {
    title_closed: 'Guide to Landing Pages',
    title_open: 'Jump to Section...',
  },
}

const pageRoutes = [
  {
    sectionName: 'Introduction',
    sectionCardTitle: 'Introduction',
    sectionPages: [
      {
        pageName: 'Guide to Landing Pages',
        pageUrl: 'introduction_to_landing_pages',
        pageTitle: 'Guide to Landing Pages',
        pageSupertitle: 'Introduction',
      },
    ],
  },
  {
    sectionName: 'Foundational Strategy',
    sectionCardTitle: 'Learn the Basics: Foundational Strategy',
    sectionPages: [
      {
        pageName: 'What is a landing page?',
        pageUrl: 'what_is_a_landing_page',
        pageTitle: 'What is a landing page?',
        pageSupertitle: 'Chapter 01',
      },
      {
        pageName: 'Why do I need landing pages?',
        pageUrl: 'landing_page_purpose',
        pageTitle: 'Why do I need landing pages?',
        pageSupertitle: 'Chapter 02',
      },
      {
        pageName: 'When should I use a landing page?',
        pageUrl: 'when_to_use_landing_pages',
        pageTitle: 'When should I use a landing page?',
        pageSupertitle: 'Chapter 03',
      },
      {
        pageName: 'How do landing pages work?',
        pageUrl: 'how_landing_pages_work',
        pageTitle: 'How do landing pages work?',
        pageSupertitle: 'Chapter 04',
      },
      {
        pageName: 'Types of Landing Pages',
        pageUrl: 'landing_page_types',
        pageTitle: 'Types of Landing Pages',
        pageSupertitle: 'Chapter 05',
      },
    ],
  },
  {
    sectionName: 'Content',
    sectionCardTitle: 'Get Creative: Content',
    sectionPages: [
      {
        pageName: 'Essential landing page elements',
        pageUrl: 'landing_page_elements',
        pageTitle: 'Essential landing page elements',
        pageSupertitle: 'Chapter 06',
      },
      {
        pageName: 'Landing page copywriting',
        pageUrl: 'landing_page_copywriting',
        pageTitle: 'Landing page copywriting',
        pageSupertitle: 'Chapter 07',
      },
      {
        pageName: 'Landing page design',
        pageUrl: 'landing_page_design',
        pageTitle: 'Landing page design',
        pageSupertitle: 'Chapter 08',
      },
      {
        pageName: 'How to create a landing page',
        pageUrl: 'creating_a_landing_page',
        pageTitle: 'How to create a landing page',
        pageSupertitle: 'Chapter 09',
      },
    ],
  },
  {
    sectionName: 'Optimization',
    sectionCardTitle: 'Go Pro: Optimization',
    sectionPages: [
      {
        pageName: 'Landing page best practices',
        pageUrl: 'landing_page_best_practices',
        pageTitle: 'Landing page best practices',
        pageSupertitle: 'Chapter 10',
      },
      {
        pageName: 'What should I test on my landing page?',
        pageUrl: 'landing_page_testing',
        pageTitle: 'What should I test on my landing page?',
        pageSupertitle: 'Chapter 11',
      },
      {
        pageName: 'How do I send traffic to a landing page?',
        pageUrl: 'landing_page_traffic',
        pageTitle: 'How do I send traffic to a landing page?',
        pageSupertitle: 'Chapter 12',
      },
      {
        pageName: 'Lead magnets 101',
        pageUrl: 'lead_magnets',
        pageTitle: 'Lead magnets 101',
        pageSupertitle: 'Chapter 13',
      },
    ],
  },
]

const useStyles = makeStyles(
  () => ({
    root: {
      maxWidth: 816,
      border: '1px solid rgba(15,12,9,0.10)',
    },
    table: {
      minWidth: 500,
    },
    tableHeadCell: {
      fontWeight: 500,
    },
    tableRowFirstCell: {
      fontWeight: 500,
    },
  }),
  { classNamePrefix: 'SiloTable' }
)

const LandingPagesGuide = () => {
  const classes = useStyles()
  const displayVideo = shouldDisplayVideo()
  const overridePromoContent = {
    promoImage: attractPromoImage,
    promoImageAlt:
      'Attract.io lead magnet example for top five pet food resources',
    headlineText: 'Create Unlimited Lead Magnets With Attract.io',
    mainText:
      'Sick of fumbling with freelancers or formatting PDFs and PowerPoints? Attract.io is a powerful lead magnet builder - 100% free.',
    link: 'https://attract.io/?utm_source=leadpages&utm_medium=Blog&utm_content=bryan-harris-lead-generation-podcast/',
    linkAlt: 'Try Attract',
    externalLink: true,
    buttonText: 'Try Attract Today',
  }
  return (
    <>
      <SEO
        pathname="/landing-pages-guide"
        title="Landing Pages: The Ultimate Guide 2021 | Leadpages"
        description="Ready to level-up your lead generation and sales funnels? Learn landing page best practices, optimization tactics, and more in this landing pages guide."
        image="https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg"
        publishDate="2021-03-30T00:00:00+0000"
        modifyDate="2021-03-30T00:00:00+0000"
      />
      <SiloHeader title="Landing Pages: The Ultimate Guide 2021" />
      <OuterContainer>
        {/* Desktop Menu Bar */}
        <SiloDesktopMenu
          pageRoutes={pageRoutes}
          verbiage={verbiage}
          numberOfColumns={pageRoutes.length}
          useScrollLink
        />
        {/* Desktop Sidebar Menu */}
        <SiloSidebar pageRoutes={pageRoutes} useScrollLink />
        {/* Mobile Menu */}
        <SiloMobileMenu
          pageRoutes={pageRoutes}
          verbiage={verbiage}
          useScrollLink
        />
        <InnerContainer>
          {/* Main Page Content */}
          <BodyContainer>
            <MainContainer>
              <SectionContainer
                id="introduction_to_landing_pages"
                className="first"
              >
                <PageSupertitle>Introduction</PageSupertitle>
                <PageTitle>The Guide to Landing Pages</PageTitle>
                <ParagraphLarge>
                  Ready to level-up your lead generation and sales funnels?
                  Learn landing page best practices, optimization tips, and more
                  in this landing pages guide.
                </ParagraphLarge>
                <ParagraphSmall>
                  Whether you’re branching out into new audiences or engaging
                  with your existing customers, landing pages make it possible
                  for you to deliver the right targeted message to the right
                  audience at the right time so that you can get the biggest
                  possible return on your time and money.
                </ParagraphSmall>
                <ParagraphAccent>
                  Focused on a single-mission and customized to your audience,
                  landing pages transform your web traffic into qualified leads
                  and loyal (happy-to-recommend-you) customers.
                </ParagraphAccent>
                <ImageWithBorder
                  image={image0_1}
                  alt="landing pages transform web traffic into leads"
                  title="landing pages transform web traffic into leads"
                />
                <H2 css={{ marginBottom: 42 }}>
                  <Link
                    href="/landing-pages-guide/what-is-a-landing-page"
                    passHref
                  >
                    <HeaderLink aria-label="What is a landing page?">
                      What is a landing page?
                    </HeaderLink>
                  </Link>
                </H2>
                <ParagraphSmall>
                  In the world of web pages, think of a landing page as being a
                  single, lone ranger: a standalone web page where a visitor
                  lands after they click on a link.
                </ParagraphSmall>
                <ParagraphSmall>
                  A landing page is different from other web pages because it
                  serves one very specific purpose: to convert visitors into
                  leads or sales. Each page typically contains a form that asks
                  visitors for their contact information—such as their email
                  address—in exchange for something of value (a.k.a. an offer).
                </ParagraphSmall>
                <ParagraphSmall>
                  Whether you’re running an ad on social media or announcing a
                  promo on your website, we want you to be more strategic about
                  which landing pages you create and how you create them.
                </ParagraphSmall>
                <H2>What is the purpose of a landing page?</H2>
                <ParagraphSmall>
                  A landing page’s number one goal is to transform targeted web
                  traffic into email subscribers and customers. Wherever your
                  web traffic comes from—a social media post, a paid Facebook
                  ad, a blog article, etc.—when people “land” on your landing
                  page, they’re met with just the right amount of persuasive and
                  educational information to click and convert.
                </ParagraphSmall>
                <ParagraphSmall>
                  Landing pages are unique to a specific audience segment and
                  are focused on compelling that audience to take a single
                  action or to make a specific decision. The decision can be
                  practically anything: make a purchase, download a free e-book,
                  sign up for an e-newsletter, register for an upcoming
                  event—the options are limitless.
                </ParagraphSmall>
                <ParagraphSmall>
                  To sum things up, landing pages are stand-alone web pages that
                  are used to convert web traffic into leads (potential
                  customers) and sales—and then, finally, into raving fans of
                  your brand!
                </ParagraphSmall>
                <H2>Why are landing pages important?</H2>
                <ParagraphSmall>
                  The expression “my customers will find me” should have died
                  out with MC Hammer pants and shoelace hair clips.
                  Unfortunately, some online businesses are still operating like
                  it’s the 1990s. In today’s fast-paced digital world, it no
                  longer pays to bank on the idea that people will simply
                  stumble upon your business and discover the amazing products
                  and services you offer. There are too many distractions and
                  the competition is too fierce.
                </ParagraphSmall>
                <ParagraphSmall>
                  To set yourself apart from your competitors, you need to
                  appeal to the right audience and craft an enticing and
                  memorable journey for customers—and this is exactly when
                  landing pages find their time to shine.&nbsp;
                </ParagraphSmall>
                <ParagraphSmall>
                  We mentioned earlier that landing pages are designed to
                  convert. Because of this, one of their key advantages lies in
                  their ability to guide traffic to the next stage of a
                  business’ sales funnel. No other webpage has this kind of
                  targeted approach.&nbsp;
                </ParagraphSmall>
                <ParagraphSmall>
                  A few additional key advantages to incorporating landing pages
                  in your online marketing strategy include:
                </ParagraphSmall>
                <UL>
                  <ListItem>
                    <b>They help your business reach its goals.</b> Do you need
                    to reach a certain sales target? No sweat! Simply use a
                    sales page to close the deal. Are you looking to generate a
                    specific number of new customers within a designated time
                    frame? No worries—use a landing page with a focus on email
                    collection as your point of conversion. The beauty is that a
                    landing page can be dedicated to a specific conversion
                    goal—especially if it has a laser-focused call to action
                    (CTA).
                  </ListItem>
                  <ListItem>
                    <b>You get more bang for your buck.</b> You put a lot of
                    time and money into marketing your online business, so isn’t
                    it about time you get the greatest possible return for all
                    of that hard work? Landing pages have the ultimate power to
                    persuade because they unite a targeted audience with a
                    personalized offer and message. Because they’re designed to
                    convert, landing pages are an efficient and effective use of
                    your paid traffic.
                  </ListItem>
                  <ListItem>
                    <b>Personalized content wins the hearts of customers.</b>{' '}
                    Remember that special feeling you get when your favorite
                    online shop hooks you up with a personalized coupon? When it
                    comes to winning over the hearts of customers,
                    personalization is the name of the game. Landing pages are
                    versatile and can be used at touchpoints all along a
                    customer’s journey. What makes them even more stellar is
                    their capability to be personalized and customized to a
                    specific target audience with a relevant offer. It’s all
                    about deeper, more meaningful communication.&nbsp;
                  </ListItem>
                </UL>
                <H2>Homepage versus landing page: what is the difference?</H2>
                <ParagraphSmall>
                  Unlike a homepage or a primary business website, a landing
                  page is tasked with one unique and important mission: to
                  convince a visitor to take a single, specific action (such as
                  purchase, sign up, download, etc.).
                </ParagraphSmall>
                <ParagraphSmall>
                  Both pages serve different purposes and operate in unique
                  ways. Here are a few of the notable differences:
                </ParagraphSmall>
                <TableContainer className={classes.root}>
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell className={classes.tableHeadCell}>
                          Key areas
                        </TableCell>
                        <TableCell className={classes.tableHeadCell}>
                          Homepage
                        </TableCell>
                        <TableCell className={classes.tableHeadCell}>
                          Landing page
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell className={classes.tableRowFirstCell}>
                          Objective
                        </TableCell>
                        <TableCell>
                          Highlights a broad range of content to offer an
                          overall perspective. Multiple objectives.
                        </TableCell>
                        <TableCell>
                          Focuses on one single objective—to deliver
                          specifically requested content.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.tableRowFirstCell}>
                          Distractions
                        </TableCell>
                        <TableCell>
                          Many. Full range of navigable options. A web design
                          that includes links, images, navigation bars, etc.
                        </TableCell>
                        <TableCell>
                          Very few. Clean-cut. Call to action, image, text.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className={classes.tableRowFirstCell}>
                          Desired action
                        </TableCell>
                        <TableCell>
                          Entice visitors to dive deeper into the website.
                        </TableCell>
                        <TableCell>
                          One single call to action that captures leads and
                          drives sales.
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                <H2>Landing page and website: what is the difference?</H2>
                <ParagraphSmall>
                  Landing pages are the lone rangers that do the heavy lifting
                  without linking to other pages or platforms. They’re typically
                  not connected to other parts of your website but are
                  oftentimes situated between an ad and a thank-you page. They
                  are built and designed to drive traffic for a very specific
                  marketing campaign goal.
                </ParagraphSmall>
                <ParagraphSmall>
                  A website is like a grand buffet platter for your business.
                  It’s a set of interconnected pages that explain what your
                  business is, what it sells, the services it offers, and more.
                </ParagraphSmall>
                <H2 css={{ marginBottom: 42 }}>
                  <Link
                    href="/landing-pages-guide/when-to-use-landing-pages"
                    passHref
                  >
                    <HeaderLink aria-label="When should a landing page be used?">
                      When should a landing page be used?
                    </HeaderLink>
                  </Link>
                </H2>
                <ParagraphSmall>
                  Whenever you’re encouraging a specific action that pulls your
                  customer through the marketing funnel. When you can pinpoint
                  the exact specific action you want your audience to take—such
                  as download this e-book, subscribe to this e-newsletter, sign
                  up for this coupon code—you should use a landing page.
                </ParagraphSmall>
                <ParagraphSmall>
                  When it comes to incorporating a landing page into your
                  marketing campaign, if you’re trying to move people along
                  their journey and into the next stage of your sales funnel, a
                  landing page should be your tool of choice. Or when you’re
                  looking to:&nbsp;
                </ParagraphSmall>
                <UL>
                  <ListItem>
                    <b>Generate leads:</b> Offer a free e-book; sign up for a
                    free consultation; enroll customers in an e-newsletter.
                  </ListItem>
                  <ListItem>
                    <b>Encourage a purchase:</b> Promote a product launch; share
                    a sale or promotion; offer a printable coupon.
                  </ListItem>
                  <ListItem>
                    <b>Nurture a relationship:</b> Encourage signups for a live
                    or digital event; book an appointment; contact your business
                    via phone or chat.
                  </ListItem>
                </UL>
                <H2 css={{ marginBottom: 42 }}>
                  <Link
                    href="/landing-pages-guide/how-do-landing-pages-work"
                    passHref
                  >
                    <HeaderLink aria-label="Do landing pages actually work?">
                      Do landing pages actually work?
                    </HeaderLink>
                  </Link>
                </H2>
                <ParagraphSmall>
                  Yes, they do! As a general rule across the board, landing
                  pages have conversion rates that are 2 to 10 times higher than
                  the average webpage. And get this: small businesses with more
                  than 10 are able to grow their email lists twice as fast. How
                  is this possible? Because these pages have a single goal:
                  receive web traffic and compel visitors to take a single,
                  specific action.
                </ParagraphSmall>
                <ParagraphSmall>
                  Unlike other web pages or websites, landing pages are unique
                  tailors and narrowly focused on a specific action such as
                  signing up for an e-newsletter, downloading a resource, making
                  a purchase, or registering for an event. By having a single
                  focus (and goal action) it’s possible for a landing page to
                  deliver the right message to the right audience rather than
                  talking about ‘all the things’ to ‘all the people’ and failing
                  to persuade anyone.
                </ParagraphSmall>
                <H2 css={{ marginBottom: 42 }}>
                  <Link
                    href="/landing-pages-guide/landing-page-elements"
                    passHref
                  >
                    <HeaderLink aria-label="What should be included in a landing page?">
                      What should be included in a landing page?
                    </HeaderLink>
                  </Link>
                </H2>
                <ParagraphSmall>
                  Think about it this way: it’s not what you include, it’s what
                  you don’t include. Landing pages should be ultra-focused on
                  one single point of conversion. Forget the extra lingo,
                  jargon, and overabundance of flashy images. Instead, when it
                  comes to creating an effective page, know that less is
                  more.&nbsp;
                </ParagraphSmall>
                <ParagraphSmall>
                  At Leadpages, our professionally-designed templates take the
                  guesswork out of effective marketing, so be sure to check out
                  our landing pages. It’s also important for you to keep in mind
                  these 5 essential elements:
                </ParagraphSmall>
                <OL>
                  <ListItem>
                    <b>Unique Selling Proposition (USP):</b> Your USP should be
                    evident throughout your page, but it should make its primary
                    debut in the headline and supporting headline. The headline
                    tells a visitor why they’re on the page and gives them the
                    extra nudge they need to keep reading. You’re looking to
                    pique their curiosity and make them desire whatever you’re
                    offering.
                  </ListItem>
                  <ListItem>
                    <b>Your offer—make it too good to pass up.</b> The details
                    of your offer should (ideally) combine both features and
                    benefits such as a benefit statement, bulleted lists, and/or
                    descriptive summaries. Successful offers are easy to
                    understand, tailored to a unique audience, and can be
                    expressed in both features and benefits.
                  </ListItem>
                  <ListItem>
                    <b>Visuals (imagery and graphics):</b> From the hero image
                    that headlines the page to videos and iconography, any
                    multimedia you include should provide context and compel a
                    visitor to take action. Resist the urge to clutter or
                    introduce too much variety and instead focus on minimalism
                    and a clean design.
                  </ListItem>
                  <ListItem>
                    <b>Call to action (CTA):</b> Your call to action is
                    typically in the form of a button placed (at least once) on
                    the page, guiding visitors towards an opt-in form. It’s
                    important to be specific with your language, be concise
                    (it’s a button, not a novella), and include a high-contrast
                    color to ensure your CTA button stands out.
                  </ListItem>
                  <ListItem>
                    <b>Supporting evidence (social proof):</b> Increase your
                    trust factor and further persuade your audience by including
                    testimonials, reviews, social signals, trust seals, and
                    awards. You want to reassure the visitor that what you’re
                    selling is worth the opt-in or purchase.
                  </ListItem>
                </OL>
                <H2>How much do landing pages cost?</H2>
                <ParagraphSmall>
                  The cost varies, depending on how you create them and the
                  tools and type of builder that you choose. Unlike other
                  digital marketing platforms, Leadpages doesn’t limit the
                  amount of landing pages you create or charge you more based on
                  how much traffic you receive or how many leads you collect.
                </ParagraphSmall>
                <H2>What will I learn in The Guide to Landing Pages?</H2>
                <ParagraphSmall>
                  Whether you’re running an ad on social media or announcing a
                  promo on your website, it’s important to be strategic about
                  which pages you create and how you create them.
                </ParagraphSmall>
                <ParagraphSmall>
                  This guide is designed to cover the ‘must-know’ fundamentals
                  of landing pages as well as the most important tips and savvy
                  strategies that have proven to work across hundreds of
                  thousands of businesses. We’ll start with the very basics and
                  make our way down to the nitty-gritty elements of effective
                  copywriting and design.
                </ParagraphSmall>
                <H3>We’ll cover topics such as: </H3>
                <ParagraphSmall>
                  <b>The basics:</b> What a landing page is (and what a landing
                  page is not), why it’s essential for your business to have
                  landing pages, when they should be used, how they work, and
                  we’ll explore the different types of pages.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Creative content:</b> Essential elements and why they
                  matter in your marketing campaigns, copywriting tips, design,
                  and how to create a landing page.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Optimization:</b> Best practices, tests to run to ensure
                  your page is performing to its full potential, how to promote
                  your page so that it increases conversions for your business,
                  and a 101 guide to lead magnets.&nbsp;
                </ParagraphSmall>
              </SectionContainer>
              <SectionContainer id="what_is_a_landing_page">
                <PageSupertitle>Chapter 01</PageSupertitle>
                <PageTitle>What is a Landing Page?</PageTitle>
                <ParagraphLarge>
                  Landing pages are standalone webpages with one mission: to
                  prompt visitors to take a single ‘next action.’ Here’s how
                  they fit into your digital marketing.
                </ParagraphLarge>
                <ParagraphSmall>
                  Landing pages work systematically to transform cold traffic
                  into leads, leads into customers, and customers into raving
                  fans. How? By inviting visitors to make a decision: click (and
                  convert) or hit the road.
                </ParagraphSmall>
                <ParagraphSmall>
                  That single decision can be practically anything: sign up for
                  an email newsletter, register for an upcoming event, make a
                  purchase, or download freebie content (or lead magnet). This
                  point of decision is the point of conversion. As a result,
                  your landing pages’ ability to convert can either catapult
                  your business to the next level or hinder your hustle in a big
                  way.
                </ParagraphSmall>
                <StyledImageComponent
                  image={image1_1}
                  alt="landing page examples"
                  title="landing page examples"
                />
                <H2>What’s the purpose of a landing page?</H2>
                <ParagraphSmall>
                  Wherever your web traffic comes from—whether a paid Facebook
                  ad, social media post, blog article, or email—when people
                  ‘land’ on your landing page, they should be met with enough
                  persuasive and educational information to compel them to click
                  and convert.
                </ParagraphSmall>
                <H2>
                  What is the difference between a landing page and a website?
                </H2>
                <ParagraphSmall>
                  Unlike static webpages or regularly published blog articles,
                  landing pages are the lone rangers of your digital sales
                  force: they do all the heavy lifting without linking to other
                  pages or platforms.
                </ParagraphSmall>
                <ParagraphSmall>
                  Landing pages are typically not connected to other parts of
                  your website or listed on your primary navigation menu (though
                  there are exceptions). Instead, they are often sandwiched
                  between an ad and a thank-you page as part of a digital
                  marketing campaign.
                </ParagraphSmall>
                <ImageWithBorder
                  image={image1_2}
                  alt="landing page characteristics"
                  title="landing page characteristics"
                />
                <H2>Anatomy of a Landing Page</H2>
                <UL>
                  <ListItem>
                    <b>Headline</b> that matches what was clicked and supporting
                    copy providing additional information
                  </ListItem>
                  <ListItem>
                    <b>Logo</b> for brand recognition
                  </ListItem>
                  <ListItem>
                    <b>Image or videor</b> to show what you’re offering
                  </ListItem>
                  <ListItem>
                    <b>Call-to-action and a lead capture form</b> (either
                    directly on your landing page or within a pop-up)
                  </ListItem>
                  <ListItem>
                    <b>Benefit statements </b> that address ‘what’s in it for
                    your audience’?
                  </ListItem>
                  <ListItem>
                    <b>Description of your features</b>
                  </ListItem>
                  <ListItem>
                    <b>Social proof</b> in the form of customer testimonials,
                    reviews, and customer images or logos
                  </ListItem>
                  <ListItem>
                    Reinforcing closing argument and repeated call-to-action
                  </ListItem>
                </UL>
                <ParagraphSmall>
                  In most cases, landing pages have one strong call to action
                  that converts new prospects to “warm” leads (by collecting
                  email addresses), or closing sales and collecting payments.
                </ParagraphSmall>
                <ParagraphSmall>
                  In either case, your landing page’s conversion rate is the
                  percentage of visitors that make it over the finish line and
                  take the ‘next action’ that you hoped they’d take (people that
                  took the action divided by the total number of people who saw
                  the page).
                </ParagraphSmall>
                <ParagraphSmall>
                  So, all in all, if you’re wondering, “what is a landing page
                  used for?” – it’s used to convert web traffic. (It really is
                  that simple).
                </ParagraphSmall>
                <ParagraphSmall>
                  Is a landing page right for your campaign? Find out&nbsp;
                  <SiloScrollLink
                    to="landing_page_purpose"
                    aria-label="Why do I need landing pages?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    why you need landing pages
                  </SiloScrollLink>
                  &nbsp;for the best lead generation and customer conversion.
                </ParagraphSmall>
                <H2>What are landing pages used for?</H2>
                <ParagraphSmall>
                  Landing pages can be used for thousands of things—but only one
                  thing at a time.
                </ParagraphSmall>
                <ParagraphSmall>
                  The one and only goal of a landing page is to convert. How you
                  define that point of conversion is up to you. When determining
                  how to use landing pages to meet your needs, there’s only one
                  thing to remember. Each landing page needs a clear goal and
                  single call to action.
                </ParagraphSmall>
                <ParagraphSmall>
                  The two most common landing page goals are:
                </ParagraphSmall>
                <OL>
                  <ListItem>
                    Collect qualified leads (typically via email address)
                  </ListItem>
                  <ListItem>
                    Sell products/services to prospects and existing customers
                  </ListItem>
                </OL>
                <H2>What are some landing page examples?</H2>
                <H3>1) Lead generation Landing pages</H3>
                <ParagraphSmall>
                  Driving anonymous web traffic to your webpage is just the
                  first part of the equation. By capturing the name and email
                  address of your prospective customer, you’re able to
                  proactively reach out and nurture your new lead until he or
                  she is ready to buy.
                </ParagraphSmall>
                <ParagraphSmall>
                  By building your email list and collecting qualified leads,
                  landing pages enable you to feed your marketing funnel and
                  grow your business.
                </ParagraphSmall>
                <Link
                  href="https://www.leadpages.com/templates/preview/3USYNTFrf3sS6CdWNru2JL"
                  passHref
                >
                  <TemplateLink aria-label="newsletter signup" target="_blank">
                    <SmallImage
                      image={image1_5}
                      alt="_____landing page example"
                      title="_____landing page example"
                    />
                  </TemplateLink>
                </Link>
                <H3>2) Sales pages</H3>
                <ParagraphSmall>
                  Sales pages are a particular kind of landing page that are
                  solely dedicated to selling a product or service and
                  collecting revenue. Ideally, sales pages are used to transform
                  warm leads into customers and customers into repeat buyers.
                </ParagraphSmall>
                <ParagraphSmall>
                  The length of your sales page is typically determined by the
                  price point, your audience’s familiarity with your offer, and
                  the complexity of the offer itself. The more familiar your
                  audience is with your offer and the lower the barriers to
                  purchase, the shorter your sales page can be.
                </ParagraphSmall>
                <Link
                  href="https://www.leadpages.com/templates/preview/5WWvnJPVus8RLMqcxT5vYL"
                  passHref
                >
                  <TemplateLink aria-label="app pricing tiers" target="_blank">
                    <SmallImage2
                      image={image1_4}
                      alt="app pricing tiers"
                      title="app pricing tiers"
                    />
                  </TemplateLink>
                </Link>
                <ParagraphSmall>
                  Learn more about&nbsp;
                  <SiloScrollLink
                    to="landing_page_types"
                    aria-label="Types of Landing Pages"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    the types of landing pages and their objectives here.
                  </SiloScrollLink>
                </ParagraphSmall>
                <H2>When it’s time for action, use a call to action</H2>
                <ParagraphSmall>
                  The purpose of a landing page is to generate leads and nurture
                  your audience throughout their customer journey. Those landing
                  pages that convert most consistently are ones that use a
                  clear, compelling call to action.
                </ParagraphSmall>
                <H3>Common landing page calls to action include:</H3>
                <UL>
                  <ListItem>
                    <b>Subscribe</b> to a newsletter, blog, or email list
                  </ListItem>
                  <ListItem>
                    <b>Download</b> a piece of content, ebook, comprehensive
                    guide, or white pages report
                  </ListItem>
                  <ListItem>
                    <b>Register</b> for live or digital events, such as a
                    webinar or conference
                  </ListItem>
                  <ListItem>
                    <b>Purchase</b> a product or service
                  </ListItem>
                </UL>
                <ParagraphSmall>
                  The call to action on your landing page depends on the end
                  result you want from the funnel. Click to find out&nbsp;
                  <SiloScrollLink
                    to="when_to_use_landing_pages"
                    aria-label="When should I use a landing page?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    when to use a landing page
                  </SiloScrollLink>
                  &nbsp; in your marketing campaigns to reach your key business
                  objectives.
                </ParagraphSmall>
                <H2>Are you wondering: how can I create a landing page?</H2>
                <ParagraphSmall>
                  Create a high-converting landing page in a few simple steps!
                </ParagraphSmall>
                <OL>
                  <ListItem>
                    Start with an expert-designed landing page template
                  </ListItem>
                  <ListItem>Name your landing page</ListItem>
                  <ListItem>
                    Customize your page with your unique branding and content
                  </ListItem>
                  <ListItem>Include a powerful call-to-action</ListItem>
                  <ListItem>
                    Preview your page for multiple device sizes
                  </ListItem>
                  <ListItem>
                    Prepare your page with SEO setttings (meta description and
                    title) as well as social open graph.
                  </ListItem>
                  <ListItem>Publish your page</ListItem>
                  <ListItem>Watch the leads roll in!</ListItem>
                </OL>
                <H2>Make landing pages work for you</H2>
                <ParagraphSmall>
                  Let’s look at a basic example of how to use landing pages to
                  generate leads.
                </ParagraphSmall>
                <ParagraphSmall>
                  Most small businesses begin by attracting web traffic through
                  a social media campaign, a paid advertisement, or even a link
                  on a guest blog post—all of which point to a landing page.
                  Visitors click through an advertisement and land on your page,
                  where they are then invited to take a next action. If you’ve
                  done your job right and used effective landing page software,
                  the copy and design of your page will convince them of the
                  value of your offer and compel them to click and convert.
                </ParagraphSmall>
                <ImageWithBorder
                  image={image1_3}
                  alt="ad to landing page"
                  title="ad to landing page"
                />
                <H2>Landing Pages Along the Customer Journey</H2>
                <ParagraphSmall>
                  In the case of a lead generating landing page, a visitor might
                  opt in to receive a free PDF or register for a webinar. In
                  exchange for your free content, you get a name and email
                  address to add to your database so you can follow-up with
                  future marketing offers.
                </ParagraphSmall>
                <ParagraphSmall>
                  See an in-depth depiction of&nbsp;
                  <SiloScrollLink
                    to="how_landing_pages_work"
                    aria-label="How do landing pages work?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    how landing pages work
                  </SiloScrollLink>
                  &nbsp; here.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Bottom line:</b> No more wondering, “What is a landing
                  page?” or “what are landing pages used for?” In essence,
                  landing pages are simply the most effective marketing tool to
                  turn traffic into leads and leads into customers.
                </ParagraphSmall>
              </SectionContainer>
              <SectionContainer id="landing_page_purpose">
                <PageSupertitle>Chapter 02</PageSupertitle>
                <PageTitle>Why do I need landing pages?</PageTitle>
                <ParagraphLarge>
                  A website is simply not enough. You need landing pages to
                  engage the right audience and compel them to a defined call to
                  action: click, sign-up, buy now!
                </ParagraphLarge>
                <ParagraphSmall>
                  Sending your hard-won web traffic to an under-optimized,
                  generic, static page is one of the best ways to waste your
                  time and money. That’s where an optimized landing page comes
                  in.
                </ParagraphSmall>
                <H2>Why do you need landing pages for your marketing?</H2>
                <ParagraphSmall>
                  Because&nbsp;
                  <SiloScrollLink
                    to="what_is_a_landing_page"
                    aria-label="What is a landing page?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    landing pages are designed to convert
                  </SiloScrollLink>
                  , one of the key advantages of landing pages is their ability
                  to bring traffic to the next stage of the sales funnel. No
                  other webpage has this kind of targeted approach, which means
                  landing pages can truly be your digital marketing lifesaver.
                </ParagraphSmall>
                <H2>
                  What are the advantages of using landing pages in your
                  marketing strategy?
                </H2>
                <H3>1. Use landing pages to reach your goals</H3>
                <ParagraphSmall>
                  As a business owner, you likely have specific goals that
                  you’re trying to achieve with certain measurements (metrics)
                  that indicate whether or not you’re on track. Perhaps you need
                  to generate a certain number of new customers in the next
                  month, or launch a new product and reach your sales targets.
                </ParagraphSmall>
                <ParagraphSmall>
                  By&nbsp;
                  <SiloScrollLink
                    to="landing_page_types"
                    aria-label="Types of Landing Pages"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    dedicating a landing page to a specific conversion goal
                  </SiloScrollLink>
                  &nbsp; with a laser-focused call to action, you’re able to
                  easily concentrate your efforts, channel your traffic, and
                  track your conversion rate.
                </ParagraphSmall>
                <ParagraphSmall>
                  Because landing pages are designed to convert, one of the key
                  advantages of landing pages is their ability to bring traffic
                  to the next stage of the sales funnel. No other webpage has
                  this kind of targeted approach, which means landing pages can
                  truly be your digital marketing lifesaver.
                </ParagraphSmall>
                <ParagraphSmall>
                  Need to generate more qualified leads? Your landing page will
                  focus on email collection as your point of conversion. Selling
                  a product or service online? Use a sales page to close the
                  deal.
                </ParagraphSmall>
                <ParagraphSmall>
                  The landing page meaning and objective should directly align
                  with your business’s goals to help you achieve the business
                  growth you deserve.
                </ParagraphSmall>
                <H3>2. Get more bang for your paid ad buck</H3>
                <ParagraphSmall>
                  Because landing pages strategically pair a targeted audience
                  with a customized offer and message, they pack a persuasive
                  punch that pays off in a big way. One of the key advantages of
                  landing pages is that you’re employing paid-for traffic in the
                  most impactful way.
                </ParagraphSmall>
                <ParagraphSmall>
                  Whether you’re spending 5 hours a day on content marketing,
                  $15 a day on Facebook ads, or $500 a day on Google
                  advertising, you’re making an investment in your small
                  business marketing—and you deserve the greatest possible
                  return.
                </ParagraphSmall>
                <ParagraphSmall>
                  Directing your inbound web traffic to a static webpage is like
                  putting on a blindfold and throwing darts at a wall, hoping
                  that one will find its way to the bullseye. You’re throwing
                  the darts in the right direction, but you’re not utilizing all
                  of your resources to get the best possible result.
                </ParagraphSmall>
                <ParagraphSmall>
                  Landing pages—especially those that stem from
                  professionally-architected landing page templates—are designed
                  to convert, which means they’ll be a much more efficient and
                  effective use of your paid traffic.
                </ParagraphSmall>
                <H3>
                  3. Personalizing and progressing your customer relationships
                </H3>
                <ParagraphSmall>
                  Because landing pages are versatile enough to be used at
                  various touchpoints along a customer journey—from offering an
                  initial lead magnet to selling your highest priced service
                  package—they are essential elements of your marketing and
                  sales strategy. But they work even better when they’re
                  personalized. The purpose of a landing page is to connect with
                  your audience on a deeper level and customized landing pages
                  do a stellar job building this connection.
                </ParagraphSmall>
                <ParagraphSmall>
                  When properly customized to a specific target audience and
                  relevant offer (which is one of the most important&nbsp;
                  <SiloScrollLink
                    to="landing_page_best_practices"
                    aria-label="Landing page best practices"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    landing pages best practices
                  </SiloScrollLink>
                  ), landing pages meet a visitor wherever he or she is within
                  your customer journey. With the help of customized&nbsp;
                  <SiloScrollLink
                    to="landing_page_design"
                    aria-label="Landing page design"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    landing page design
                  </SiloScrollLink>
                  &nbsp; and&nbsp;
                  <SiloScrollLink
                    to="landing_page_best_practices"
                    aria-label="Landing page best practices"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    copywriting
                  </SiloScrollLink>
                  , you can progress your customer relationships effectively and
                  at scale.
                </ParagraphSmall>
                <DesktopVideoHolder>
                  {!displayVideo && (
                    <DesktopFallbackImage
                      image={builderCreativityStatic}
                      alt="customize a landing page template"
                    />
                  )}
                  {displayVideo && (
                    <DesktopOnlyVideo autoPlay playsinline muted loop>
                      <source src={builderCreativityWebm} type="video/webm" />
                      <source src={builderCreativityMp4} type="video/mp4" />
                    </DesktopOnlyVideo>
                  )}
                </DesktopVideoHolder>
                <MobileOnlyImage
                  image={builderCreativityStatic}
                  alt="customize a landing page template"
                />
                <ParagraphSmall>
                  Not to mention that they’re also excellent at positioning and
                  building your brand equity. A well-crafted landing page with
                  consistent art and copy exhibits professionalism. Include a
                  little social proof in the form of testimonials and reviews,
                  and you begin to build credibility in the eyes of your
                  community.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Bottom line:</b> The purpose of a landing page is to
                  transform traffic into leads and leads into customers.
                  Consider using a landing page builder like Leadpages to get
                  the most out of your paid advertising and advance your
                  audience along their customer journey.
                </ParagraphSmall>
              </SectionContainer>
              <SectionContainer id="when_to_use_landing_pages">
                <PageSupertitle>Chapter 03</PageSupertitle>
                <PageTitle>When should I use a landing page?</PageTitle>
                <H2>What is the purpose of a landing page?</H2>
                <ParagraphLarge>
                  Whether you’re sending emails, posting on social media,
                  blogging, or buying ads, landing pages have limitless
                  possibilities for growing your business.
                </ParagraphLarge>
                <ParagraphSmall>
                  Whether you’re sending emails, posting on social media,
                  blogging, or buying ads, landing pages have limitless
                  possibilities for growing your business.
                </ParagraphSmall>
                <ParagraphSmall>
                  A well-optimized landing page is the single best way to get
                  the greatest possible return from any inbound marketing
                  campaign.
                </ParagraphSmall>
                <ParagraphSmall>
                  Because landing pages are carefully tailored to a specific
                  target audience and are unique to each offer, they deliver
                  value in a way your website simply can’t. Static websites
                  simply aren’t equipped to deliver different messages to
                  different audience segments. That’s why a landing page is
                  important for your marketing: it emphasizes action where other
                  webpages don’t.
                </ParagraphSmall>
                <ParagraphSmall>
                  Nothing is more persuasive than a personalized experience,
                  which is why we often recommend marketers&nbsp;
                  <SiloScrollLink
                    to="creating_a_landing_page"
                    aria-label="How to create a landing page"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    create a landing page
                  </SiloScrollLink>
                  &nbsp; for every launch, product, event, signup, or piece of
                  content that they create.
                </ParagraphSmall>
                <StyledImageComponent
                  image={image3_1}
                  alt="when to use a landing page"
                  title="when to use a landing page"
                />
                <H2>10 Landing page examples and uses:</H2>
                <OL>
                  <ListItem>
                    To increase your return on digital advertising or PPC
                    campaigns
                  </ListItem>
                  <ListItem>
                    To tailor your messaging to a variety of unique digital
                    campaigns
                  </ListItem>
                  <ListItem>
                    To encourage people to sign up or pre-register for events
                    (both online and off)
                  </ListItem>
                  <ListItem>
                    To collect subscribers to your email newsletter
                  </ListItem>
                  <ListItem>
                    To promote a product or the sale of a unique service
                  </ListItem>
                  <ListItem>
                    To offer a discount coupon or promo code in exchange for an
                    email address
                  </ListItem>
                  <ListItem>
                    To offer more detailed information on a long-form sales page
                  </ListItem>
                  <ListItem>
                    To personalize your social media profile links with a
                    special offer
                  </ListItem>
                  <ListItem>
                    To invite visitors to download a free digital resource or
                    unlock free digital content
                  </ListItem>
                  <ListItem>
                    To link to from a guest blog post (author bio box){' '}
                  </ListItem>
                </OL>

                <H2>
                  When should you use a landing page in your marketing
                  campaigns?
                </H2>
                <ParagraphSmall>
                  Whether you’re driving traffic from a pay-per-click (PPC) ad,
                  email, social media, or organic content, if you’re trying to
                  move people to the next stage in your sales funnel—a landing
                  page is likely the best tool to do the job. A good rule of
                  thumb when to use landing pages: if you can measure the action
                  your customers are taking, you’ll likely want a landing page
                  to compel that action.
                </ParagraphSmall>
                <ParagraphSmall>
                  Think about&nbsp;
                  <SiloScrollLink
                    to="landing_page_purpose"
                    aria-label="Why do I need landing pages?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    the goal of your marketing campaign.
                  </SiloScrollLink>
                  &nbsp; Boil it down to a single objective or call to action.
                  That exact moment—the moment of action—is where your landing
                  page should come in. The strong capacity to convert for a
                  single action is why a landing page is important for your
                  overall marketing strategy.
                </ParagraphSmall>
                <ParagraphSmall>
                  Examples of when to use landing pages:
                </ParagraphSmall>
                <UL>
                  <ListItem>Generate leads</ListItem>
                  <UL>
                    <ListItem>
                      Offer a free ebook or other downloadable content
                    </ListItem>
                    <ListItem>Sign up for a free consultation</ListItem>
                    <ListItem>Enroll people in an email newsletter</ListItem>
                  </UL>
                  <ListItem>Encourage a purchase</ListItem>
                  <UL>
                    <ListItem>Promote a new product launch</ListItem>
                    <ListItem>
                      Share a sale or promotion for a product/service/bundle
                    </ListItem>
                    <ListItem>
                      Give a printable coupon or pass for in-person
                      storefront/event
                    </ListItem>
                  </UL>
                  <ListItem>Nurture a relationship</ListItem>
                  <UL>
                    <ListItem>Reserve a table or book an appointment</ListItem>
                    <ListItem>Contact you via phone or chat</ListItem>
                    <ListItem>
                      Encourage signups for a live or digital event
                    </ListItem>
                  </UL>
                </UL>
                <ParagraphSmall>
                  Learn&nbsp;
                  <SiloScrollLink
                    to="creating_a_landing_page"
                    aria-label="How to create a landing page"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    how to create a landing page
                  </SiloScrollLink>
                  &nbsp; (and see awesome landing page examples) that fits each
                  of these key objectives.
                </ParagraphSmall>
                <ParagraphSmall>
                  You’ll know when to use landing pages for the right audience
                  based on your offer (lead magnet) and initial source of
                  traffic:
                </ParagraphSmall>
                <UL>
                  <ListItem>
                    <b>By offer type:</b>
                    &nbsp;Every offer won’t be right for everyone. Treat your
                    prospects and leads to content that’s suited to their early
                    stage of the funnel, while inviting your customers to engage
                    in content or promotions that are exclusive to your
                    inner-most community.
                  </ListItem>
                  <ListItem>
                    <b>
                      By&nbsp;
                      <SiloScrollLink
                        to="landing_page_traffic"
                        aria-label="How do I send traffic to a landing page?"
                        spy
                        smooth
                        duration={300}
                        offset={-150}
                      >
                        traffic source:
                      </SiloScrollLink>
                    </b>
                    &nbsp; Each digital channel is distinct and the traffic you
                    drive from your Facebook page will behave differently than
                    the traffic you get from a Google ad. Easily tailor your
                    message (match it to your ad) and track your return by
                    creating a unique page for each channel source.
                  </ListItem>
                </UL>
                <H2>
                  Even landing pages have their limits: when not to use them
                </H2>
                <ParagraphSmall>
                  By now you know that&nbsp;
                  <SiloScrollLink
                    to="what_is_a_landing_page"
                    aria-label="What is a landing page?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    landing pages
                  </SiloScrollLink>
                  &nbsp; are designed with a singular call to action in mind—but
                  what about when you have several different audience groups and
                  several different actions? In these cases, you’ll still want
                  to optimize your page but won’t necessarily rely on a landing
                  page to get the job done.
                </ParagraphSmall>
                <ParagraphSmall>
                  Consider your ‘About’ page or ‘Contact Me’ page, for example.
                  Rather than compelling a visitor to take action, these pages
                  are meant to inform or educate. Your About page exists
                  primarily to emphasize your brand’s history, mission, and
                  team. Even if you include a call to action on these pages, the
                  main point is the information, not the action.
                </ParagraphSmall>
                <ParagraphSmall>
                  Rather than turning every page into a landing page, turn the
                  informational webpages into&nbsp;
                  <SiloScrollLink
                    to="landing_page_traffic"
                    aria-label="How do I send traffic to a landing page?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    traffic sources.
                  </SiloScrollLink>
                  &nbsp; These sources can then direct visitors to key landing
                  page websites that do promote a specific call to action and
                  pull the visitor to the next step of your funnel.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Bottom line:</b>
                  &nbsp;You’ll know when to use a landing page whenever you are
                  encouraging a specific action that pulls your customer through
                  the marketing funnel.
                </ParagraphSmall>
                <H2>
                  What is the difference between a home page and a landing page?
                </H2>
                <ParagraphSmall>
                  Unlike a home page or a primary business website, landing
                  pages are tasked with a highly unique (and uniquely important
                  mission): to convince a visitor to take action (to sign up,
                  download, buy, etc.).
                </ParagraphSmall>
                <H2>Are landing pages necessary?</H2>
                <ParagraphSmall>
                  If you’re encouraging a specific audience to take a specific
                  action that advances them through your customer journey —
                  that’s when to use a landing page.
                </ParagraphSmall>
              </SectionContainer>
              <SectionContainer id="how_landing_pages_work">
                <PageSupertitle>Chapter 04</PageSupertitle>
                <PageTitle>How do landing pages work?</PageTitle>
                <ParagraphLarge>
                  Landing pages have one goal only: to convert web traffic. That
                  means every element on the page has to pull visitors towards a
                  single call to action.
                </ParagraphLarge>
                <ParagraphSmall>
                  The mechanics of a landing page are simple: creating a
                  cohesive journey from click to conversion. How do landing
                  pages work? Here’s what you need to know.
                </ParagraphSmall>
                <ParagraphSmall>
                  Because&nbsp;
                  <SiloScrollLink
                    to="what_is_a_landing_page"
                    aria-label="What is a landing page?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    landing pages
                  </SiloScrollLink>
                  &nbsp; have one goal and one goal only—to convert web
                  traffic—every element on the page has to pull visitors towards
                  a single call to action.
                </ParagraphSmall>
                <ParagraphSmall>
                  Landing pages that convert best do so because of the
                  combination of layout, headlines and supporting text, and
                  related images.
                </ParagraphSmall>
                <ParagraphSmall>
                  Before you dive into crafting a page, it’s important to
                  understand your landing pages as a game of give and
                  take—particularly in the primary case of lead generation. In
                  order to collect a visitor’s email address, you’ll have to
                  earn it by offering value in exchange.&nbsp;
                  <SiloScrollLink
                    to="landing_page_types"
                    aria-label="Types of Landing Pages"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    Sales pages
                  </SiloScrollLink>
                  —a special category of landing pages—are focused on closing
                  the deal, but the formula is similar in order to drive
                  revenue.
                </ParagraphSmall>
                <ParagraphSmall>
                  If your offer is enticing enough, visitor’s will willingly
                  exchange their email address (or their money) for access.
                </ParagraphSmall>
                <H2>Why are landing pages effective?</H2>
                <ParagraphSmall>
                  A landing page works significantly better for lead generation
                  than a website does because landing pages are specifically
                  made to get visitors to take action.
                </ParagraphSmall>
                <ParagraphSmall>
                  When comparing the use of a landing page vs. homepage, you’ll
                  see that landing pages focus on conversion (taking action)
                  while webpages focus on providing information.
                </ParagraphSmall>
                <ParagraphSmall>
                  Whereas a website tries to address all the questions of all
                  the different audiences that could possibly visit the site,
                  the best landing pages that convert do so because they only
                  contain content that relates to a narrow topic for a narrow
                  segment of the larger audience.
                </ParagraphSmall>
                <ParagraphSmall>
                  This results in the individual visitor to a landing page
                  feeling closely connected to what they see on the landing
                  page, instead of having difficulty seeing how the information
                  of a website is relevant to them.
                </ParagraphSmall>
                <ImageWithBorder
                  image={image4_1}
                  alt="landing page vs home page"
                  title="landing page vs home page"
                />
                <ParagraphSmall>
                  <i>
                    So how do landing pages work? What does a landing page
                    actually do from start to finish?
                  </i>
                </ParagraphSmall>
                <H2>
                  The Mechanics of Conversion: how does a landing page work?
                </H2>
                <ParagraphSmall>
                  The best way to understand the power of a landing page is to
                  put yourself in the position of the people you hope to convert
                  into prospects and clients.
                </ParagraphSmall>
                <ParagraphSmall>
                  Let’s imagine you need to generate leads and in exchange for
                  an email address, you’re giving away a free online training
                  course.
                </ParagraphSmall>
                <ParagraphSmall>
                  Here’s what this part of your customer journey might look
                  like:
                </ParagraphSmall>
                <OL>
                  <ListItem>
                    An advertisement catches your prospect’s attention.
                  </ListItem>
                  <ListItem>She clicks the ad.</ListItem>
                  <ListItem>She lands on your page.</ListItem>
                  <ListItem>
                    She reads your benefit-driven headline and wants more.
                  </ListItem>
                  <ListItem>
                    She finds your offer to be simply irresistible.
                  </ListItem>
                  <ListItem>She clicks your call-to-action button.</ListItem>
                  <ListItem>She fills out your opt-in form.</ListItem>
                  <ListItem>
                    She’s on your email list as a qualified lead.
                  </ListItem>
                </OL>
                <br></br>
                <ParagraphSmall>
                  The email opt-in form captures the contact information you
                  need to then meaningfully follow-up with your new lead and
                  nurture the relationship until she’s ready to make a purchase.
                </ParagraphSmall>
                <ImageWithBorder
                  image={image4_2}
                  alt="customer journey and landing page best practices"
                  title="customer journey and landing page best practices"
                />
                <ParagraphSmall>
                  That’s it! Landing pages really are that simple! With the
                  right software and landing page builder, you just need
                  to&nbsp;
                  <SiloScrollLink
                    to="landing_page_design"
                    aria-label="Landing page design"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    customize the design of your landing page
                  </SiloScrollLink>
                  ,&nbsp;
                  <SiloScrollLink
                    to="landing_page_copywriting"
                    aria-label="Landing page copywriting"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    write compelling copy
                  </SiloScrollLink>
                  , and let the high-converting template do the rest to gather
                  and store the information. See our&nbsp;
                  <SiloScrollLink
                    to="landing_page_best_practices"
                    aria-label="Landing page best practices"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    landing page best practices
                  </SiloScrollLink>
                  &nbsp; to get the scoop on creating high quality landing pages
                  that convert.
                </ParagraphSmall>
                <H2>
                  Use conversion-tested landing page templates to get a head
                  start
                </H2>
                <ParagraphSmall>
                  Because our landing page templates are engineered to be
                  high-converting, and they’re pre-sorted by conversion rate,
                  you can have the confidence that not only does your landing
                  page look good, but it’s also going to turn visitors into
                  qualified leads and customers.
                </ParagraphSmall>
                <StyledImageComponent
                  image={image4_3}
                  alt="landing page template gallery sorted by conversion rate"
                  title="landing page template gallery sorted by conversion rate"
                />
                <H2>How many landing pages should a website have?</H2>
                <ParagraphSmall>
                  Your website should have as many landing pages as needed for
                  the currently active marketing campaigns you’re running. For
                  some businesses, this will mean one to three landing pages
                  will be enough. For others, hundreds of pages that address
                  different marketing objectives for specific audience segments
                  may be needed.
                </ParagraphSmall>
                <ParagraphSmall>
                  How many landing pages a website should have is simply a
                  factor of time and opportunity. But at a minimum, every
                  business should have at least one landing page focused on
                  converting traffic into qualified leads with a compelling
                  message that matches the needs of the target audience.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Bottom line:</b> How do landing pages work? By building an
                  exchange of value between your visitor and your business. They
                  are customized to each audience&nbsp;
                  <SiloScrollLink
                    to="landing_page_traffic"
                    aria-label="How do I send traffic to a landing page?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    (traffic source)
                  </SiloScrollLink>
                  &nbsp; and marketing campaign, which makes them far more
                  compelling and high-converting than a static webpage. And they
                  contain the mechanisms (call-to-action buttons and/or lead
                  collection forms) to turn visitors into email subscribers.
                </ParagraphSmall>
              </SectionContainer>
              <SectionContainer id="landing_page_types">
                <PageSupertitle>Chapter 05</PageSupertitle>
                <PageTitle>Types of Landing Pages</PageTitle>
                <ParagraphLarge>
                  Landing pages typically fall into three main categories, each
                  with its own unique strengths and strategies: splash pages,
                  squeeze pages, and sales pages. A single marketing campaign
                  may include one or multiple types of landing pages, depending
                  on the calls to action that move a visitor forward.
                </ParagraphLarge>
                <ParagraphSmall>
                  Let’s go through a few landing page examples to debunk how and
                  when you should be using these types of landing page templates
                  for your marketing.
                </ParagraphSmall>
                <ParagraphSmall>
                  That single decision can be practically anything: sign up for
                  an email newsletter, register for an upcoming event, make a
                  purchase, or download freebie content (or lead magnet). This
                  point of decision is the point of conversion. As a result,
                  your landing pages’ ability to convert can either catapult
                  your business to the next level or hinder your hustle in a big
                  way.
                </ParagraphSmall>
                <H2>Make a splash (page)</H2>
                <ParagraphSmall>
                  A splash page is an introductory page that customers typically
                  see before diving into the primary content of your website.
                  Also called splash screens or welcome gates, these pages
                  ‘welcome’ the visitor immediately upon arrival. They can
                  appear as standalone pages or full-screen pop-ups when a
                  visitor is about to land on your website (homepage, blog,
                  etc).
                </ParagraphSmall>
                <StyledImageComponent
                  image={image5_1}
                  alt="splash page welcome gate landing page example"
                  title="splash page welcome gate landing page example"
                />
                <ParagraphSmall>
                  Splash pages are extremely popular and effective in capturing
                  a visitor’s attention and generating leads at key touchpoints.
                  They’re popular landing page examples because they do the
                  heavy lifting to attract your prospect before they even hit
                  the main page.
                </ParagraphSmall>
                <ParagraphSmall>
                  Splash pages are often the first or second impression someone
                  has with your brand, so you may include a low-cost ‘ask’ with
                  a high reward. For example, first-time visitors are more
                  likely to give their email addresses in exchange for a free
                  ebook, but less likely to opt into a $200 training program
                  without prior experience of your brand.
                </ParagraphSmall>
                <H3>The right way to use a splash page</H3>
                <ParagraphSmall>
                  The objective of a splash page is (typically) to collect
                  leads. It usually does this by providing initial information
                  about the brand paired with a direct, low-barrier call to
                  action.
                </ParagraphSmall>
                <ParagraphSmall>
                  Splash pages usually have three parts: engaging header, call
                  to action, and exit button.
                </ParagraphSmall>
                <ImageWithBorder
                  image={image5_2}
                  alt="anatomy of a splash page welcome gate landing page example"
                  title="anatomy of a splash page welcome gate landing page example"
                />
                <ParagraphSmall>
                  Let’s take some landing page inspiration with an example.
                  Let’s imagine that a visitor found your yoga-related blog on
                  Google. They click on it, and they’re about to land on that
                  blog post when the splash screen pops up first. The splash
                  screen is offering a free downloadable ebook “The Ultimate
                  Guide to Your At-Home Yoga Practice.”
                </ParagraphSmall>
                <ParagraphSmall>
                  You can assume that your visitors are already interested in
                  yoga because they clicked on the blog, so you know that this
                  free content would also be relevant to them. This
                  pre-qualified interest means the visitor is more likely to
                  input their email address to receive the free ebook, even
                  though it’s one of their first touchpoints with your brand.
                </ParagraphSmall>
                <ParagraphSmall>
                  If they’re not interested, though, they might click on the
                  button on the bottom that reads, “No, I’m not interested in
                  being stronger and healthier…” and continue on their way—no
                  worse for wear. They’ll still have access to the blog post
                  (where you’ll then have more opportunities to convert them
                  into a lead).
                </ParagraphSmall>
                <H2>The scoop on squeeze pages</H2>
                <ParagraphSmall>
                  Squeeze pages, sometimes called a lead capture page, are the
                  most common types of landing pages. They’re designed to
                  “squeeze” information out of the visitor such as a first name
                  and email address.
                </ParagraphSmall>
                <H3>How to craft a squeeze page</H3>
                <ParagraphSmall>
                  Squeeze pages vary in content, length, and design depending on
                  the page’s objective and call to action. They will also differ
                  based on where the visitor is within their customer journey.
                  Most often, a squeeze page will include the following
                  components:
                </ParagraphSmall>
                <UL>
                  <ListItem>Powerhouse headline</ListItem>
                  <ListItem>Descriptive offer</ListItem>
                  <ListItem>Compelling call to action</ListItem>
                  <ListItem>Opt-in form</ListItem>
                  <ListItem>Testimonials and social proof</ListItem>
                  <ListItem>Supportive imagery/videos</ListItem>
                </UL>
                <ImageWithBorder
                  image={image5_3}
                  alt="anatomy of a squeeze page landing page example"
                  title="anatomy of a squeeze page landing page example"
                />
                <ParagraphSmall>
                  Learn the&nbsp;
                  <SiloScrollLink
                    to="creating_a_landing_page"
                    aria-label="How to create a landing page"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    essentials for creating a successful landing page here.
                  </SiloScrollLink>
                </ParagraphSmall>
                <H2>Close the sales (page)</H2>
                <ParagraphSmall>
                  While splash and squeeze pages are designed to generate leads
                  and collect emails, sales pages focus on making sales
                  (cha-ching!). This means that while splash pages and squeeze
                  pages are typically directed at new prospects, cold traffic,
                  or visitors, sales pages usually target warm leads that have
                  already engaged with your brand to some degree.
                </ParagraphSmall>
                <H3>How to use a sales page</H3>
                <ParagraphSmall>
                  Because the objective is to make a sale, the&nbsp;
                  <SiloScrollLink
                    to="landing_page_copywriting"
                    aria-label="Landing page copywriting"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    page’s persuasive copywriting
                  </SiloScrollLink>
                  &nbsp; and content should focus on the benefits of the product
                  or service, the lifestyle of the brand, and the offer or
                  discount.
                </ParagraphSmall>
                <ImageWithBorder
                  image={image5_4}
                  alt="anatomy of a sales page landing page example"
                  title="anatomy of a sales page landing page example"
                />
                <ParagraphSmall>
                  Although you’ll usually use sales pages with people you’ve
                  already built a relationship with, you can still use sales
                  pages with new visitors if designed appropriately. Because
                  sales pages are high-stakes revenue-generators,&nbsp;
                  <SiloScrollLink
                    to="landing_page_testing"
                    aria-label="What should I test on my landing page?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    don’t be afraid to test different headers, offers, and CTAs
                  </SiloScrollLink>
                  &nbsp; until you see the conversion rate you want. Find
                  other&nbsp;
                  <SiloScrollLink
                    to="landing_page_best_practices"
                    aria-label="Landing page best practices"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    landing page best practices
                  </SiloScrollLink>
                  &nbsp; here.
                </ParagraphSmall>
                <ParagraphSmall>
                  Bottom line: Splash pages collect emails before a new visitor
                  lands on your website. Squeeze pages generate new leads with a
                  strong offer or benefit. Sales pages encourage sales and a
                  deeper relationship with the customer. It’s time to use these
                  landing page examples to launch your own effective marketing
                  campaign.
                </ParagraphSmall>
              </SectionContainer>
              <SectionContainer id="landing_page_elements">
                <PageSupertitle>Chapter 06</PageSupertitle>
                <PageTitle>Essential landing page elements</PageTitle>
                <ParagraphLarge>
                  What should you put on your landing page? Keep your content
                  laser-focused on a single point of conversion and strip
                  everything else away.
                </ParagraphLarge>
                <ParagraphSmall>
                  If you find you’re trying to include too much, that could be a
                  tell-tale sign that your audience and offer may not be an
                  ideal match. Make landing pages that convert by understanding
                  and including the essential elements. Get the free Guide to
                  Landing Pages by Leadpages and start building.
                </ParagraphSmall>
                <ParagraphSmall>
                  You know&nbsp;
                  <SiloScrollLink
                    to="what_is_a_landing_page"
                    aria-label="What is a landing page?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    what a landing page is
                  </SiloScrollLink>
                  &nbsp; and you know&nbsp;
                  <SiloScrollLink
                    to="landing_page_purpose"
                    aria-label="Why do I need landing pages?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    why they matter within your marketing campaigns
                  </SiloScrollLink>
                  … but what should you actually put on your landing page? What
                  does an optimized landing page look like?
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>It’s not what you include—it’s what you don’t include.</b>{' '}
                  For best results, keep your landing page laser-focused on a
                  single point of conversion and strip everything else away. If
                  you find you’re trying to include too much, that could be a
                  tell-tale sign that your audience and offer may not be an
                  ideal match.
                </ParagraphSmall>
                <ParagraphSmall>
                  Two landing pages rarely ever look the same, but they’re often
                  made of the same set of basic ingredients. Here’s what to
                  include on a landing page if you want to see the success your
                  business deserves:
                </ParagraphSmall>
                <ImageWithBorder
                  image={image6_1}
                  alt="landing page best practices"
                  title="landing page best practices"
                />
                <UL>
                  <ListItem>
                    <b>Unique Selling Proposition (USP)</b>
                    <br />
                    Your USP should be evident throughout your page, but makes
                    its primary debut in the headline and supporting headline.
                  </ListItem>
                  <ListItem>
                    <b>Your offer</b>
                    <br />
                    The details of your offer should (ideally) combine both
                    features and benefits such as a benefit statement, bulleted
                    lists, and/or descriptive summaries.
                  </ListItem>
                  <ListItem>
                    <b>Visuals (imagery & graphics)</b>
                    <br />
                    From the hero image that headlines the page to videos and
                    iconography, any multimedia you include should provide
                    context and compel a visitor to take action.
                  </ListItem>
                  <ListItem>
                    <b>Call to action (CTA)</b>
                    <br />
                    Your call to action is typically in the form of a button
                    placed (at least once) on the page, guiding visitors towards
                    an opt-in form.
                  </ListItem>
                  <ListItem>
                    <b>Supporting evidence (social proof)</b>
                    <br />
                    Increase your trust factor and further persuade your
                    audience by including testimonials, reviews, social signals,
                    trust seals, awards, etc.
                  </ListItem>
                </UL>
                <ParagraphSmall>
                  Once you master these basic elements and understand the
                  strategy behind each of them, you can confidently construct
                  the perfect landing pages for any and every campaign. So let’s
                  get into what to include on a landing page to start making
                  crazy conversions!
                </ParagraphSmall>
                <H2>1. Your USP: Putting the benefit in big bold letters</H2>
                <ParagraphSmall>
                  The headline is the first impression customers will have with
                  your landing page, so make it a good one. Your landing page
                  headline tells visitors why they’re on the page and gives them
                  a reason to keep reading. It invites them to learn more about
                  what you have to offer. And this invitation can make or break
                  your ability to convert.
                </ParagraphSmall>
                <ParagraphSmall>
                  Your headline should work in two ways: 1) pique the curiosity
                  of the visitor so they’ll be engaged and interested, and 2)
                  make them instantly want what you’re offering.
                </ParagraphSmall>
                <ParagraphSmall>
                  You want to do this by stimulating an emotional response with
                  your headline. In most cases, the best way to spur emotion on
                  your landing pages is by describing the customer’s pain point
                  or pointing them towards a positive future vision.
                </ParagraphSmall>
                <ParagraphSmall>
                  For example, let’s imagine that you sell yoga clothes made
                  from bamboo and your audience loves eco-friendly workout
                  clothes. The headline should then emphasize this key benefit
                  while also engaging them.
                </ParagraphSmall>
                <ParagraphSmall>
                  Here are some not-so-great examples:
                </ParagraphSmall>
                <UL>
                  <ListItem>Bamboo Leggings Made For You</ListItem>
                  <ListItem>Eco-Friendly Workout Clothes</ListItem>
                </UL>
                <ParagraphSmall>Here’s a better example:</ParagraphSmall>
                <UL>
                  <ListItem>
                    Bamboo Leggings that Will Save Your Wardrobe, Wallet, and
                    World
                  </ListItem>
                </UL>
                <ParagraphSmall>
                  The second example demonstrates the product’s top selling
                  points in a meaningful, concise way that is customer-centric
                  (not product-centric).
                </ParagraphSmall>
                <ParagraphSmall>
                  Learn how to create an engaging headline and write more&nbsp;
                  <SiloScrollLink
                    to="landing_page_copywriting"
                    aria-label="Landing page copywriting"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    compelling landing page copy
                  </SiloScrollLink>
                  &nbsp; here.
                </ParagraphSmall>
                <H2>2. Your Offer: Make it too good to pass up</H2>
                <ParagraphSmall>
                  <SiloScrollLink
                    to="landing_page_types"
                    aria-label="Types of Landing Pages"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    Landing pages are generally used to generate leads or sales.
                  </SiloScrollLink>
                  &nbsp; In both cases, the success of the page rides on the
                  irresistibility of the offer.
                </ParagraphSmall>
                <ParagraphSmall>
                  Successful offers are those that:
                </ParagraphSmall>
                <UL>
                  <ListItem>Are easy to understand</ListItem>
                  <ListItem>Are tailored to a unique audience</ListItem>
                  <ListItem>
                    Can be expressed in both features and benefits
                  </ListItem>
                </UL>
                <ParagraphSmall>
                  In the case of lead generation landing pages, most businesses
                  offer a piece of freebie content, known as a “
                  <SiloScrollLink
                    to="lead_magnets"
                    aria-label="Lead magnets 101"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    lead magnet
                  </SiloScrollLink>
                  ” because it attracts (and magnetizes) potential leads. This
                  strategy is one of the best ways to generate leads because you
                  offer some sort of value in exchange for the customer’s
                  contact info.
                </ParagraphSmall>
                <ParagraphSmall>
                  Before sending your lead magnet out into the wild, try
                  infusing it with these three elements:
                </ParagraphSmall>
                <UL>
                  <ListItem>
                    <b>Unexpectedly High Value:</b> Because your lead magnet is
                    often your first interaction with a new prospect, you have
                    to over-deliver in value. Give more than your visitors
                    expect to receive for free—and they won’t be able to resist
                    clicking and converting.
                  </ListItem>
                  <ListItem>
                    <b>Specificity:</b> Be as clear and specific as possible. If
                    your visitors aren’t able to quickly understand (1) what
                    you’re offering and (2) why it matters to them, they won’t
                    take action.
                  </ListItem>
                  <ListItem>
                    <b>Urgency:</b> Few things are as compelling as the fear of
                    missing out. Layer in a sense of urgency or scarcity to
                    encourage visitors to take action now, rather than waiting.
                  </ListItem>
                </UL>
                <H2>3. Your Visuals: Setting the scene</H2>
                <ParagraphSmall>
                  <SiloScrollLink
                    to="landing_page_design"
                    aria-label="Landing page design"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    Landing page design
                  </SiloScrollLink>
                  &nbsp; is equal parts art and science. You want to both
                  visually engage your audience while also creating a cohesive
                  experience that carries them through the first click on an ad
                  to the final close of a thank-you page.
                </ParagraphSmall>
                <ParagraphSmall>
                  Incorporating multimedia into your landing page—with video,
                  graphics, icons, photography, and more—is an excellent way to
                  support your offer and provide additional context or details.
                  Some multimedia landing pages examples you can include:
                </ParagraphSmall>
                <UL>
                  <ListItem>
                    <b>The hero shot</b> should visually engage your audience
                    and show context of use for your product or service (pulling
                    back the curtain on the lifestyle of your brand).
                  </ListItem>
                  <ListItem>
                    <b>Iconography</b> should be intuitive and meaningful.
                  </ListItem>
                  <ListItem>
                    <b>Photography/Imagery</b> should enhance your visitor’s
                    understanding of your offer and illustrate the primary
                    benefit.
                  </ListItem>
                  <ListItem>
                    <b>Fonts</b> should be consistent across your brand and
                    should be kept to a minimum on landing pages (aim for no
                    more than 2-3).
                  </ListItem>
                </UL>
                <ParagraphSmall>
                  Creating a compelling visual experience requires that you
                  resist the urge to clutter or introduce too much variety. Use
                  a landing page creator that emphasizes minimalism and clean
                  design.
                </ParagraphSmall>
                <ParagraphSmall>
                  Learn the specifics of creating beautiful&nbsp;
                  <SiloScrollLink
                    to="landing_page_design"
                    aria-label="Landing page design"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    landing page design
                  </SiloScrollLink>
                  &nbsp; here.
                </ParagraphSmall>
                <H2>
                  4. Your Conversion Goal: Bring it home with a powerhouse CTA
                </H2>
                <ParagraphSmall>
                  The goal of a landing page is to get your customer to take
                  action: give an email, download an ebook, complete a purchase.
                  This means you need a strong call to action that compels them
                  to take this action. Visitors won’t know what to do next
                  unless you make it clear.
                </ParagraphSmall>
                <ParagraphSmall>
                  A call to action (CTA) is usually a button where the visitor
                  is directed to take that action.
                </ParagraphSmall>
                <ParagraphSmall>
                  Feel free to get creative with the language you use, but never
                  at the expense of clarity.
                </ParagraphSmall>
                <ParagraphSmall>
                  For example, if you are offering a free guide in exchange for
                  an email address, your CTA button might read: Yes, Send me the
                  guide!
                </ParagraphSmall>
                <ParagraphSmall>
                  How to make a strong CTA button:
                </ParagraphSmall>
                <UL>
                  <ListItem>
                    <b>Be specific</b> Avoid generic CTA text such as ‘buy now’
                    or ‘submit.’ Instead, increase your conversion rate by
                    speaking directly to your audience’s next action: ‘Start
                    Learning French Today,’ for example.
                  </ListItem>
                  <ListItem>
                    <b>Be concise</b> Keep it short and sweet. It’s a button.
                    Not a paragraph.
                  </ListItem>
                  <ListItem>
                    <b>Include high-contrast</b> The CTA button should be a bold
                    color that contrasts the background so it will stand out.
                    You might also consider making the CTA button bigger than
                    the text around it.
                  </ListItem>
                </UL>
                <ParagraphSmall>
                  Remember that the CTA button is where you officially making
                  the conversion. Here, your visitors click and you collect.
                  Optimizing the call to action button is critical to your
                  landing page success. That’s why we highly recommend you
                  perform&nbsp;
                  <SiloScrollLink
                    to="landing_page_testing"
                    aria-label="What should I test on my landing page?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    A/B testing
                  </SiloScrollLink>
                  &nbsp; to ensure your CTA button is attracting clicks.
                </ParagraphSmall>
                <H2>5. Your Supporting Evidence: Prove your worth</H2>
                <ParagraphSmall>
                  The best landing pages also include testimonials or reviews
                  from former clients or users. These testimonials provide
                  social proof that helps convince and convert your visitor.
                  They reassure the visitor that what your selling is worth the
                  opt-in or purchase. Including a section of real-life client
                  reviews is the best way to make your landing page soar.
                </ParagraphSmall>
                <ParagraphSmall>
                  The perfect landing page isn’t just your business talking
                  about how great it is-- it has real life customers and clients
                  praising your value.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Bottom line:</b> Don’t get bogged down when thinking about
                  what to include on a landing page for your campaign. Focus on
                  the following elements to see major success: an engaging
                  headline, compelling offer, supportive imagery, powerhouse
                  call to action, and reassuring testimonials.
                </ParagraphSmall>
              </SectionContainer>
              <SectionContainer id="landing_page_copywriting">
                <PageSupertitle>Chapter 07</PageSupertitle>
                <PageTitle>Landing page copywriting</PageTitle>
                <ParagraphLarge>
                  Copywriting for landing pages is equal parts art and science.
                  Every word counts: from your headline, call-to-action button,
                  to bulleted lists & more!
                </ParagraphLarge>
                <ParagraphSmall>
                  But how do you go about copywriting for landing pages?
                </ParagraphSmall>
                <ParagraphSmall>
                  The best place to begin is to choose the right message you
                  want to share. Then break that message into the different
                  written components that you’ll include on your page. We break
                  this down step by step below to help you create the most
                  effective content for landing pages on your site.
                </ParagraphSmall>
                <H2>Choose the right message</H2>
                <ParagraphSmall>
                  In order to choose the right message, copywriters rely on
                  identifying their target audience’s stage of awareness,
                  identified as:
                </ParagraphSmall>
                <UL>
                  <ListItem>
                    <b>Very Aware:</b> Knows about your company and your
                    offerings
                  </ListItem>
                  <ListItem>
                    <b>Product Aware:</b> Knows solutions exist and they know
                    your product is one of those solutions
                  </ListItem>
                  <ListItem>
                    <b>Solution Aware:</b> Knows solutions to their problem
                    exist
                  </ListItem>
                  <ListItem>
                    <b>Pain Aware:</b> Know they have a problem but aren’t aware
                    of solutions
                  </ListItem>
                  <ListItem>
                    <b>Unaware:</b> Little sense of pain and no idea of solution
                  </ListItem>
                </UL>
                <ParagraphSmall>
                  The length of your landing page will largely be determined by
                  the reader’s state of awareness. Generally, the less aware the
                  prospect, the more copy you write and vice versa.
                </ParagraphSmall>
                <ImageWithBorder
                  image={image7_1}
                  alt="how much copy to write on your landing page"
                  title="how much copy to write on your landing page"
                />
                <ParagraphSmall>
                  Consider that people make decisions for emotional reasons, but
                  justify them with logic. You need—every time—to supply them
                  with both.
                </ParagraphSmall>
                <ParagraphSmall>
                  Therefore, it stands to reason that the readers who know
                  less—and are lower on the “awareness scale” —need more
                  information to make a decision. Just think of it as catching
                  them up to knowing as much as the Product Aware and Most Aware
                  folks.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>How will you know what stage your reader is in?</b>
                </ParagraphSmall>
                <ParagraphSmall>
                  Start by looking at what drove a person to your landing page
                  and which&nbsp;
                  <SiloScrollLink
                    to="landing_page_traffic"
                    aria-label="How do I send traffic to a landing page?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    traffic source
                  </SiloScrollLink>
                  &nbsp;brought them to you.
                </ParagraphSmall>
                <ParagraphSmall>
                  Was it a Google ad for a branded keyword phrase? The reader is
                  probably Product Aware or Most Aware. Was it an email for a
                  new subscriber? The reader is probably not Product Aware or
                  Most Aware. Was it a Facebook ad promising a webinar to solve
                  a problem? The reader is probably Problem Aware or in the
                  earliest stage of being Solution Aware.
                </ParagraphSmall>
                <H2>
                  Make your message evident across the page (in 3 simple steps)
                </H2>
                <ParagraphSmall>
                  Once you’ve clarified your audience’s stage of awareness and
                  the message that’s most suited to that stage, you can use the
                  following 3 simple steps to content for landing page that
                  enhance their awareness start to finish.
                </ParagraphSmall>
                <OL>
                  <ListItem>
                    <b>Entice with the headline</b>
                  </ListItem>
                  <ListItem>
                    <b>Close with the CTA</b>
                  </ListItem>
                  <ListItem>
                    <b>Sell with the rest</b>
                  </ListItem>
                </OL>
                <H3>1. Entice with the headline</H3>
                <ParagraphSmall>
                  Your headline is one of the most important&nbsp;
                  <SiloScrollLink
                    to="landing_page_elements"
                    aria-label="Essential landing page elements"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    elements of your landing page
                  </SiloScrollLink>
                  . An engaging headline entices your customer to click through
                  to your landing page, tells them what the page is about, and
                  encourages them to keep reading.
                </ParagraphSmall>
                <ParagraphSmall>
                  So how do you create a captivating headline?
                </ParagraphSmall>
                <ParagraphSmall>
                  Here are 5 headline strategies that will help you engage your
                  audience.
                </ParagraphSmall>
                <H4>1. Ask My Question</H4>
                <ParagraphSmall>
                  Questions arouse curiosity, which innately draws your audience
                  into the page. Ask the question that your customers are
                  already wondering, or ask a question that they didn’t even
                  know they needed to ask. Your&nbsp;
                  <SiloScrollLink
                    to="lead_magnets"
                    aria-label="Lead magnets 101"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    lead magnet
                  </SiloScrollLink>
                  &nbsp;should be the answer to that question.
                  <br />
                  <i>Example:</i> Will You Lose 20 Pounds In 10 Weeks?
                </ParagraphSmall>
                <H4>2. Tell Me How</H4>
                <ParagraphSmall>
                  The classic “how to” headline tells your audience that your
                  lead magnet is going to provide a solution to a problem
                  they’re having. This promises them some sort of value, which
                  will make them want to keep reading to gain that value.
                </ParagraphSmall>
                <ParagraphSmall>
                  The “guide” formula is similar to this. You’re promising a
                  solution to their problem by providing a guidebook or roadmap.
                </ParagraphSmall>
                <ParagraphSmall>
                  <i>Example:</i> Learn How to Lose 20 Pounds In 10 Weeks / The
                  Ultimate Guide to Losing 20 Pounds In 10 Weeks
                </ParagraphSmall>
                <H4>3. Show Me the Best</H4>
                <ParagraphSmall>
                  Consumers have choice. And it’s that choice that you’re going
                  up against. They have to pick your product over your
                  competitors’. So point out the difference and then show them
                  why your lead magnet or product is the best solution.
                </ParagraphSmall>
                <ParagraphSmall>
                  <i>Example:</i> Why HIIT Is Better Than Cardio to Lose 20
                  Pounds
                </ParagraphSmall>
                <H4>4. Make Me Feel</H4>
                <ParagraphSmall>
                  Emotions have power. In some cases, you’ll want to lead your
                  audience to a rational conclusion. But when you want to compel
                  your audience to take action—you’ll need to evoke an emotion.
                </ParagraphSmall>
                <ParagraphSmall>
                  Whether you opt for a fear-based headline or something a
                  little more aspirational, the choice is yours. The strategy is
                  to invite your visitor to <i>feel</i> the benefit of your
                  solution before they ever click or convert.
                </ParagraphSmall>
                <ParagraphSmall>
                  <i>Example:</i> Don’t Be Scared to Step on the Scale Anymore
                </ParagraphSmall>
                <H4>5. Give Me the Value</H4>
                <ParagraphSmall>
                  Regardless of the price point of your offer, your headline
                  should emphasize the value (benefit) and reiterate in what
                  format that value will be delivered.
                </ParagraphSmall>
                <ParagraphSmall>
                  <i>Example:</i> Get Your Free At-Home Weight Loss Ebook Right
                  Now
                </ParagraphSmall>
                <H3>2. Close with the CTA</H3>
                <ParagraphSmall>
                  You’ve opened the page with a strong headline that pulls your
                  visitor into the offer. Now you want to bookend the landing
                  page with strong calls to action that encourage your customer
                  to take action.
                </ParagraphSmall>
                <ParagraphSmall>
                  The call to action should, of course, reflect the key&nbsp;
                  <SiloScrollLink
                    to="landing_page_purpose"
                    aria-label="Why do I need landing pages?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    purpose of your landing page.
                  </SiloScrollLink>
                  &nbsp;
                </ParagraphSmall>
                <ParagraphSmall>
                  Here are some examples of call to action formulas that have
                  seen success:
                </ParagraphSmall>
                <UL>
                  <ListItem>
                    <i>Try (product/service) free for (period of time):</i> good
                    for free trials
                  </ListItem>
                  <ListItem>
                    <i>Start your free trial now:</i> another free trial option
                  </ListItem>
                  <ListItem>
                    <i>Download your free guide/ebook now:</i> promoting
                    downloadables
                  </ListItem>
                  <ListItem>
                    <i>Get started now:</i> short, sweet, and versatile
                  </ListItem>
                  <ListItem>
                    <i>Order your (product) now:</i> encouraging an urgent sale
                  </ListItem>
                  <ListItem>
                    <i>Send me (product/service) now:</i> uses first-person to
                    connect with the visitor
                  </ListItem>
                  <ListItem>
                    <i>Learn more:</i> when providing more information in
                    multi-step funnel
                  </ListItem>
                  <ListItem>
                    <i>Get (benefit of service) right now:</i> reminds visitors
                    why they want to take action
                  </ListItem>
                  <ListItem>
                    <i>Get your free (xyz):</i> everyone loves something free;
                    this works especially well for a consultation
                  </ListItem>
                  <ListItem>
                    <i>Subscribe now:</i> short and effective to gain
                    subscribers
                  </ListItem>
                  <ListItem>
                    <i>Talk to us:</i> asking a visitor to reach out
                  </ListItem>
                  <ListItem>
                    <i>Get this discount while supplies last:</i> promotes
                    exclusivity and urgency
                  </ListItem>
                </UL>
                <ParagraphSmall>
                  Ultimately, you want your call to action button to be a clear,
                  specific phrase with bold words that directs your customer to
                  the next action of your sales funnel. Remember that
                  copywriting for landing pages starts and ends with the main
                  action or objective of the page.
                </ParagraphSmall>
                <H3>3. Sell with the rest</H3>
                <ParagraphSmall>
                  You have the headline, which invites the customer to the
                  offer, and the call to action, which finalizes their decision.
                  But now you need to use the rest of the page to sell them on
                  that offer.
                </ParagraphSmall>
                <ParagraphSmall>
                  All of your landing page copywriting should emphasize the
                  benefits of your&nbsp;
                  <SiloScrollLink
                    to="lead_magnets"
                    aria-label="Lead magnets 101"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    lead magnet
                  </SiloScrollLink>
                  . What will they get from you? You want to present your
                  customer’s problem and emphasize how your offering{' '}
                  <i>solves</i> that problem. You also want to highlight how
                  your product or service solves that problem <i>better</i> than
                  your competitors do.
                </ParagraphSmall>
                <ParagraphSmall>
                  Your landing page should focus on answering the question: what
                  is our unique selling proposition (USP)? You may want to
                  create a phrase or two that addresses this question and
                  reiterate it throughout the landing page. Consistency and
                  uniformity of messaging is key to conversion.
                </ParagraphSmall>
                <ParagraphSmall>
                  Here are a few essentials for writing high-performing copy:
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Clarity:</b> You want to cut out the fluff and focus on
                  precise language that enhances your offering. Web users are in
                  a hurry so you need to be clear and concise in order to keep
                  them engaged.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Urgency & scarcity:</b> Instill a sense of urgency so that
                  your page visitors feel compelled to take action now for fear
                  of missing out later.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Relatable language:</b> Rather than ‘trying to sound
                  professional,’ simply write like your audience speaks in their
                  everyday lives. Use the words and phrases they use and you’ll
                  communicate that you understand where they’re coming from.
                </ParagraphSmall>
                <ParagraphSmall>
                  Using your audience’s own words and reflecting their speech
                  patterns back to them is an excellent way to create a
                  relationship with your reader and illustrate your ability to
                  empathize with their situation.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Address objections:</b> Do your best to anticipate any
                  objections your customer may have to your offering and
                  overcome them one by one.
                </ParagraphSmall>
                <ParagraphSmall>
                  Every single word should contribute to your landing page’s
                  ultimate goal. If it isn’t convincing your customer to take
                  the next step, you create unnecessary friction that could
                  potentially lose that visitor.
                </ParagraphSmall>
                <ParagraphSmall>
                  Once you’ve sketched out what written content you’ll include
                  on your page, it’s time to consider how you can best&nbsp;
                  <SiloScrollLink
                    to="landing_page_design"
                    aria-label="Landing page design"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    design your landing page
                  </SiloScrollLink>
                  &nbsp;to support the key messages.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Bottom line:</b> When copywriting for landing pages,
                  remember the ‘next action’ you want your customers to take.
                  Where are they in awareness now, and where do you want them to
                  be? Every word of your landing page should bring them to that
                  main CTA and actionable goal.
                </ParagraphSmall>
              </SectionContainer>
              <SectionContainer id="landing_page_design">
                <PageSupertitle>Chapter 08</PageSupertitle>
                <PageTitle>Landing page design</PageTitle>
                <ParagraphLarge>
                  From the hero image you choose to the color of your opt-in
                  button, your landing page design can make or break your
                  campaign.
                </ParagraphLarge>
                <ParagraphSmall>
                  From the hero image you choose to the color of your opt-in
                  button, your landing page design can make or break your
                  campaign.
                </ParagraphSmall>
                <ParagraphSmall>
                  Once you’ve established your&nbsp;
                  <SiloScrollLink
                    to="landing_page_purpose"
                    aria-label="Why do I need landing pages?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    landing page’s purpose
                  </SiloScrollLink>
                  &nbsp;and have outlined the overall message and&nbsp;
                  <SiloScrollLink
                    to="landing_page_copywriting"
                    aria-label="Landing page copywriting"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    copywriting
                  </SiloScrollLink>
                  &nbsp;that you’ll include, it’s time to consider how you’ll
                  structure your content and design a cohesive, compelling
                  experience.
                </ParagraphSmall>
                <ParagraphSmall>
                  Landing page design is equal parts art and science. Landing
                  pages are designed to connect with an audience and create a
                  seamless, frictionless path to conversion. Whether you’re
                  offering a free ebook or a $5,000 coaching package, the
                  structure of your page and the multimedia you include has a
                  massive impact.
                </ParagraphSmall>
                <ParagraphSmall>
                  A well-dressed, well-polished page has the power to persuade
                  an audience, professionally position your brand, build
                  credibility, and convert. On the other hand, if your design is
                  an afterthought, your visitors will very likely sense that
                  something is off, and click away.
                </ParagraphSmall>
                <ParagraphSmall>
                  A lot of marketers ask, “But how long does it take you to
                  design a landing page? Am I focusing too much or too little
                  here?” Design shouldn’t take long. It should flow with your
                  brand.
                </ParagraphSmall>
                <ParagraphSmall>
                  So what do you need to focus on when crafting your landing
                  page design to make sure it pulls people in?
                </ParagraphSmall>
                <ParagraphSmall>
                  Here are the top landing page design tips to keep in your back
                  pocket:
                </ParagraphSmall>
                <UL>
                  <ListItem>
                    <b>Verify the visual hierarchy</b>
                    <br />
                    <i>Does the sequence make sense?</i>
                    <br />
                    Think of your landing page as a short conversation. Do you
                    supply the most critical information in the most logical
                    (compelling) order? Is the most important information up
                    front? Does it flow well?
                  </ListItem>
                  <ListItem>
                    <b>Keep your design simple</b>
                    <br />
                    <i>Can you simplify? Where?</i>
                    <br />
                    When in doubt, leave it out. Every design element should
                    work to drive visitors toward conversion (to take a single
                    call to action). You want to design landing pages that
                    elevate key content that needs to be communicated. Support
                    the copy, as opposed to distracting from it.
                  </ListItem>
                  <ListItem>
                    <b>Use design to tell a story.</b>
                    <br />
                    <i>Does your design evoke an emotional response?</i>
                    <br />
                    Your graphics and images should spark the emotion you want
                    visitors to feel while also clearly communicating what your
                    offering is.
                  </ListItem>
                  <ListItem>
                    <b>Choose fonts that speak your language.</b>
                    <br />
                    <i>Is your text tantalizing or terrifying?</i>
                    <br />
                    Saying something serious? Use a serif font. Want to send a
                    playful message? Try a handwritten script font for your
                    headline. You want your fonts to amplify the message you’re
                    trying to send. Stick to no more than 2-3 fonts per page,
                    and most importantly, keep it legible and easy to read.
                  </ListItem>
                  <ListItem>
                    <b>Select a color palette and stick to it.</b>
                    <br />
                    <i>Is your color palette aligned with your brand?</i>
                    <br />
                    Choose up to 3-4 colors that work well together & align with
                    the colors you use to represent your brand.
                  </ListItem>
                  <ListItem>
                    <b>Optimize your page as part of a larger journey.</b>
                    <br />
                    <i>Have you considered the visitor’s full experience?</i>
                    <br />
                    Where are visitors coming from and going to? Your landing
                    page is just a single step in someone’s journey across many
                    touchpoints with you. Be sure to plan out the content that
                    leads visitors to your page, as well as what will be
                    delivered after they take action—at the same time. Designing
                    it concurrently will ensure your messages match and your
                    creative is cohesive.
                  </ListItem>
                  <ListItem>
                    <b>Remember: feedback is your friend.</b>
                    <br />
                    <i>Is your design data-driven and/or customer tested?</i>
                    <br />
                    Before sharing your page with the world, why not forward
                    your design to a colleague, friend, or (even better) current
                    customer? Ask for constructive feedback, check to ensure
                    your key message is conveyed, and do some final polishing
                    before promoting. You can even request feedback or work with
                    landing page designers to get the most professional end
                    result.
                  </ListItem>
                  <ListItem>
                    <b>Seek hard-working, fast-loading images.</b>
                    <br />
                    <i>Are my images fast-loading?</i>
                    <br />
                    Size images so they load quickly but still look great on
                    every device. As a rule of thumb, consider the largest
                    device your image will display on, and crop it to that
                    width.
                  </ListItem>
                  <ListItem>
                    <b>Contrast is key.</b>
                    <br />
                    <i>Is you eye called to the call to action?</i>
                    <br />
                    When it comes to highlighting your primary call-to action,
                    be sure to choose a color that stands out from the rest of
                    your page. Additionally, make sure there’s enough contrast
                    between your text and background to ensure readability.
                  </ListItem>
                  <ListItem>
                    <b>Design with a mobile-first mindset.</b>
                    <br />
                    <i>Is every element mobile-responsive?</i>
                    <br />
                    <i>
                      Because more than 60% of all web traffic occurs on a
                      mobile device, it’s crucial to ensure these users can view
                      your landing pages and fully interact with your content.
                    </i>
                  </ListItem>
                  <ListItem>
                    <b>Include your logo.</b>
                    <br />
                    <i>Is your business professionally represented?</i>
                    <br />
                    Visitors want to know they’re seeing content from a trusted
                    source. By positioning your logo strategically near the top
                    of your page, people will know where they are right away.
                  </ListItem>
                  <ListItem>
                    <b>Add social proof.</b>
                    <br />
                    <i>Do you convey credibility?</i>
                    <br />
                    When it’s appropriate, include testimonials or reviews that
                    entice visitors to take action. Use customer photos to help
                    build credibility. One of the best&nbsp;
                    <SiloScrollLink
                      to="landing_page_best_practices"
                      aria-label="Landing page best practices"
                      spy
                      smooth
                      duration={300}
                      offset={-150}
                    >
                      landing page best practices
                    </SiloScrollLink>
                    &nbsp;is seamlessly blending social proof with design for an
                    integrated, conversion-worthy page.
                  </ListItem>
                </UL>
                <ImageContainer>
                  <TextContainer>
                    <Title>Free Download: Landing Page Design Checklist</Title>
                    <Headline>Design any page in no time.</Headline>
                    <Button href="">Get the Checklist &gt;</Button>
                  </TextContainer>
                  <BGImageWrapper>
                    <BGImage
                      image={image8_1}
                      alt="landing page design checklist promo image"
                      title="landing page design checklist promo image"
                    />
                  </BGImageWrapper>
                </ImageContainer>
                <ParagraphSmall>
                  <b>Bottom line:</b> Your landing page design should be clear
                  and simple with contrasting colors, supportive imagery, and
                  consistent branding. By focusing on how to design landing
                  pages, you’ll start to see a major increase in the
                  effectiveness of your landing page conversion.
                </ParagraphSmall>
              </SectionContainer>
              <SectionContainer id="creating_a_landing_page">
                <PageSupertitle>Chapter 09</PageSupertitle>
                <PageTitle>How to create a landing page</PageTitle>
                <ParagraphLarge>
                  You know why you need sales pages and opt-ins, but now it’s
                  time to get to the nitty-gritty to learn how to create a
                  high-performing landing page.
                </ParagraphLarge>
                <H2>What is a landing page and how does it work?</H2>
                <ParagraphSmall>
                  Landing pages are equal parts art and science, but even the
                  creative process is—just that—a process, with steps that get
                  you from square one to sky-high success.
                </ParagraphSmall>
                <ParagraphSmall>
                  In case you forgot, a landing page is a stand-alone webpage
                  that <b>(1)</b> is designed for a specific target audience and{' '}
                  <b>(2)</b> aims to compel that audience to take a specific
                  action.
                </ParagraphSmall>
                <ParagraphSmall>
                  Creating a landing page can be surprisingly simple—when you
                  start with a clear process. Like any project, the more thought
                  you put into it before you begin, the better the result you’ll
                  wind up with.
                </ParagraphSmall>
                <ParagraphSmall>
                  Here are five easy steps that will make you the ultimate
                  landing page builder and marketer in no time.
                </ParagraphSmall>
                <H2>1. Set a clear goal</H2>
                <ParagraphSmall>
                  Why do you even need a landing page? What’s the purpose? What
                  are you going to do with it?
                </ParagraphSmall>
                <ParagraphSmall>
                  Figuring out what you want from a landing page and defining
                  your goal upfront will guide your decision making, from what
                  images to include to what information to collect on your form.
                  This can help you create a landing page that brings you to a
                  better result.
                </ParagraphSmall>
                <ParagraphSmall>
                  Some potential landing page goals:
                </ParagraphSmall>
                <UL>
                  <ListItem>Generate more leads</ListItem>
                  <ListItem>Boost sales of a product/service</ListItem>
                  <ListItem>
                    Generate event registrations or webinar signups
                  </ListItem>
                  <ListItem>
                    Engage with existing customers or reactivate lapsed
                    customers
                  </ListItem>
                  <ListItem>Recruit new hires</ListItem>
                </UL>
                <ParagraphSmall>
                  Every landing page needs a single, specific purpose and should
                  be tied back to a business or marketing outcome. Until you can
                  quickly articulate what a page’s goal is, you shouldn’t go on
                  to the next step.
                </ParagraphSmall>
                <H2>2. Choose your template</H2>
                <ParagraphSmall>
                  Making a landing page doesn’t necessarily mean starting from
                  scratch. Even though you can customize your landing page
                  template (or build it from scratch if you choose to do so),
                  you’ll find that starting with the right template will
                  streamline your building process and set you up for higher
                  conversions and greater success.
                </ParagraphSmall>
                <ParagraphSmall>
                  Within Leadpages’ landing page template gallery, you’ll find
                  more than 150 pre-designed, carefully optimized, mobile
                  responsive landing page templates that can be tailored to
                  match your business, industry, audience, and goals.
                </ParagraphSmall>
                <StyledImageComponent
                  image={image9_1}
                  alt="choose a landing page template"
                  title="choose a landing page template"
                />
                <ParagraphSmall>
                  There are three main types of templates: squeeze pages, splash
                  pages, and sales pages. Learn more about&nbsp;
                  <SiloScrollLink
                    to="landing_page_types"
                    aria-label="Types of Landing Pages"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    the types of landing pages
                  </SiloScrollLink>
                  &nbsp;you might want to try out at different points of your
                  funnel.
                </ParagraphSmall>
                <ParagraphSmall>
                  You can select any template that works with your objective.
                  You’ll have access to everything from a&nbsp;
                  <OutboundLink
                    href="https://my.leadpages.net/marketplace/template/6531395465904128/ParagraphSmallreview"
                    rel="noopener"
                    aria-label="Fitness Studio Recruitment Landing Page"
                  >
                    fitness studio recruitment page
                  </OutboundLink>
                  &nbsp;to bring more personal trainers onboard to an&nbsp;
                  <OutboundLink
                    href="https://my.leadpages.net/marketplace/template/5210155065671680/ParagraphSmallreview"
                    rel="noopener"
                    aria-label="Instagram Example Landing Page"
                  >
                    Instagram webinar opt-in page
                  </OutboundLink>
                  &nbsp;to generate event signup leads. You have so many options
                  at your fingertips, you’re bound to find the one that
                  seamlessly fits your needs.
                </ParagraphSmall>
                <ParagraphSmall>
                  <i>Pro tip:</i> Responsive landing pages are those that
                  automatically adjust and rearrange content to provide an
                  optimum experience across different device sizes. By ensuring
                  that your landing page displays well wherever (whenever)
                  people visit that URL, you can ensure the best possible
                  results. But don’t worry—all templates within the Leadpages
                  website and landing page builder are expertly engineered to be
                  mobile responsive.
                </ParagraphSmall>
                <H2>3. Customize your content</H2>
                <ParagraphSmall>
                  Once you have a template, you can customize it to suit your
                  needs and showcase your brand. Easily add your logo, choose
                  the images, tweak the design, and include your own copy. The
                  purpose of customization is to create a consistent brand
                  experience that engages your audience and pushes them towards
                  your call to action.
                </ParagraphSmall>
                <DesktopVideoHolder>
                  {!displayVideo && (
                    <DesktopFallbackImage
                      image={builderCreativityStatic}
                      alt="customize a landing page template"
                    />
                  )}
                  {displayVideo && (
                    <DesktopOnlyVideo autoPlay playsinline muted loop>
                      <source src={builderCreativityWebm} type="video/webm" />
                      <source src={builderCreativityMp4} type="video/mp4" />
                    </DesktopOnlyVideo>
                  )}
                </DesktopVideoHolder>
                <MobileOnlyImage
                  image={builderCreativityStatic}
                  alt="customize a landing page template"
                />
                <ParagraphSmall>
                  Of course, the content you choose is one of the biggest
                  factors in determining how your audience will respond and how
                  your page will convert. When we consult on how to create a
                  landing page, we emphasize the importance of customized and
                  branded design, copy, and content.
                </ParagraphSmall>
                <ParagraphSmall>
                  Need help customizing your landing page? Here are some
                  resources to get you started:
                </ParagraphSmall>
                <UL>
                  <ListItem>
                    &nbsp;
                    <SiloScrollLink
                      to="landing_page_elements"
                      aria-label="Essential landing page elements"
                      spy
                      smooth
                      duration={300}
                      offset={-150}
                    >
                      5 Essential landing page elements
                    </SiloScrollLink>
                    &nbsp;
                  </ListItem>
                  <ListItem>
                    &nbsp;
                    <SiloScrollLink
                      to="landing_page_copywriting"
                      aria-label="Landing page copywriting"
                      spy
                      smooth
                      duration={300}
                      offset={-150}
                    >
                      Landing page copywriting tips
                    </SiloScrollLink>
                    &nbsp;
                  </ListItem>
                  <ListItem>
                    &nbsp;
                    <SiloScrollLink
                      to="landing_page_design"
                      aria-label="Landing page design"
                      spy
                      smooth
                      duration={300}
                      offset={-150}
                    >
                      Landing page design tips
                    </SiloScrollLink>
                    &nbsp;
                  </ListItem>
                </UL>
                <H2>4. Pull it all together.</H2>
                <ParagraphSmall>
                  The content you choose and how you arrange it on the page
                  should push your visitors toward a single point of conversion
                  (aka the offer). This means you want to create a landing page
                  centered around a single call to action (CTA).
                </ParagraphSmall>
                <ParagraphSmall>
                  Looking to generate leads with your landing page? Offer a lead
                  magnet in exchange for an email address. Want to increase
                  revenue and sell your product or service? Include a checkout
                  right on your landing page or within your Leadbox (pop-up
                  form).
                </ParagraphSmall>
                <ParagraphSmall>
                  Keep in mind that your&nbsp;
                  <SiloScrollLink
                    to="landing_page_traffic"
                    aria-label="How do I send traffic to a landing page?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    landing page and traffic source
                  </SiloScrollLink>
                  &nbsp;need to be carefully aligned and consistent in order to
                  reassure visitors that they’re on the right path. This is
                  known as the post-click experience. A cohesive, consistent
                  campaign conveys that your brand is credible and trustworthy.
                  Each touchpoint along that campaign journey is ultimately
                  leading up to the conversion that takes place on your landing
                  page.
                </ParagraphSmall>
                <Image3
                  image={image9_2}
                  alt="message match landing page ad"
                  title="message match landing page ad"
                />
                <H2>5. Let’s get going.</H2>
                <ParagraphSmall>
                  Now it’s time to publish! After you publish, it’s up to you to
                  share that landing page link through your marketing channels,
                  such as social media or pay-per-click (PPC) ads.
                </ParagraphSmall>
                <ParagraphSmall>
                  You might want to consider building two versions of your
                  landing page to run A/B testing. This allows you to try out
                  different design and copy to see which resonates best with
                  your audience and promotes the highest number of conversions.
                  Learn how to&nbsp;
                  <SiloScrollLink
                    to="landing_page_testing"
                    aria-label="What should I test on my landing page?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    properly test your landing pages
                  </SiloScrollLink>
                  &nbsp;here.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Can you create a landing page without a website?</b>
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>How much does it cost to build a landing page?</b>
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Bottom line:</b> It can be simple to create a landing page
                  by breaking it down: choose an objective, customize a
                  template, ignite the web traffic, and test multiple landing
                  pages.
                </ParagraphSmall>
              </SectionContainer>
              <SectionContainer id="landing_page_best_practices">
                <PageSupertitle>Chapter 10</PageSupertitle>
                <PageTitle>Top 10 Landing Page Best Practices</PageTitle>
                <ParagraphLarge>
                  Here are 10 landing page best practices that you can apply
                  your own landing pages: from architecting your page like an
                  argument, to CTA buttons, and more!
                </ParagraphLarge>
                <ParagraphSmall>
                  Creating a landing page is easy. Creating landing pages that
                  convert takes a bit more effort. Since 2012, Leadpages has
                  been a leader in the landing page universe, so we’ve seen what
                  makes the most successful landing pages convert the best, and
                  what elements sabotage results.
                </ParagraphSmall>
                <ParagraphSmall>
                  Lucky for you, we’ve compiled some of our best practices for
                  landing pages to ensure you’re turning the most web visitors
                  into qualified leads. By utilizing the most effective landing
                  page design, content, and conversion tools, you can improve
                  your conversion rates with landing pages, too.
                </ParagraphSmall>
                <ParagraphSmall>
                  Since different landing pages have different objectives, each
                  page is unique. But the most successful landing pages are set
                  up with a similar strategy. After publishing over a million
                  pages for thousands of businesses, we’ve noticed some key
                  patterns that you can put to use on your own pages (and we’re
                  sharing all of our best secrets here with you).
                </ParagraphSmall>
                <ParagraphSmall>
                  Here are 10 landing page best practices that you can apply to
                  your own landing pages:
                </ParagraphSmall>
                <ImageWithBorder
                  image={image10_1}
                  alt="Top 10 Landing Page Best Practices"
                  title="landing page best practices"
                />
                <OL>
                  <ListItem>
                    <b>One page = one purpose</b>
                    <br />
                    When landing pages try to do more than one thing at once,
                    they tend to under-perform. Stay focused on a single message
                    and single next step (point of conversion). If your landing
                    page copywriting or page length is dragging on, you may be
                    trying to accomplish too much.
                  </ListItem>
                  <ListItem>
                    <b>Craft your landing page like an argument</b>
                    <br />
                    Consider your visitor’s perspective and where they are
                    within your customer journey: what do they most need to know
                    and feel in order to take that next step? What content
                    format is most suitable for delivering that information? How
                    will your landing page design craft an argument and provide
                    additional persuasion as a visitor scrolls down?
                  </ListItem>
                  <ListItem>
                    <b>
                      Put your call-to-action (CTA) button above the fold—and
                      always within reach
                    </b>
                    <br />
                    Your CTA button should be immediately within view when a
                    visitor lands on the page. It should never be more than two
                    scrolls away. One of the most important landing page design
                    best practices is “CTA prevalence,” meaning your call to
                    action is the most frequently used aspect on the page.
                  </ListItem>
                  <ListItem>
                    <b>Give before you get</b>
                    <br />
                    The most successful lead generation landing pages offer
                    visitors something valuable in exchange for a name and email
                    address. These freebie content offers (lead magnets)
                    typically take the form of a downloadable file, webinar
                    registration, or online consultation. When you need landing
                    page inspiration, consider how you’ll build your page
                    surrounding your lead magnet.
                  </ListItem>
                  <ListItem>
                    <b>Keep it consistent</b>
                    <br />
                    Your landing page is often part of a larger campaign. Keep
                    your page’s message, mood & tone (imagery) consistent with
                    the ad that visitors first clicked on and carry over that
                    same look onto the thank you page.
                  </ListItem>
                  <ListItem>
                    <b>Be concise</b>
                    <br />
                    Wondering what to include on a landing page? Aim to use the
                    minimum amount of words, imagery, and multimedia necessary
                    to compel your audience to convert. Streamline the
                    experience of your page and edit out all possible
                    distractions and disruptions. Remember this landing page
                    tip: when it comes to content, simple is often more
                    successful.
                  </ListItem>
                  <ListItem>
                    <b>Reduce or remove risk to overcome objections</b>
                    <br />
                    While you construct your page, consider what barriers could
                    possibly block your visitors from converting. Then, include
                    content that combats the primary objections.
                    <UL>
                      <ListItem>
                        <b>Guarantees</b> such as satisfaction or money-back
                        guarantees can be used when price is a barrier.
                      </ListItem>
                      <ListItem>
                        <b>Social proof</b> is an excellent way to gain the
                        confidence of first-time subscribers from cold traffic.
                      </ListItem>
                      <ListItem>
                        <b>Simplified opt-in forms</b> that only request first
                        name and email increase conversion rates and reduce
                        friction.
                      </ListItem>
                    </UL>
                  </ListItem>
                  <ListItem>
                    <b>Include social proof</b>
                    <br />
                    People will naturally conform to other peoples’ behavior and
                    naturally gravitate toward what their peers say and do.
                    Social proof is a powerful persuasive device and can take
                    the form of testimonials and reviews.
                  </ListItem>
                  <ListItem>
                    <b>Segment your audience by traffic source</b>
                    <br />
                    Landing pages are powerful tools because of their ability to
                    deliver a unique message to a narrowly defined audience.
                    Leverage this strength by sending your pay-per-click (PPC),
                    social media, email, and organic traffic to separate,
                    targeted landing pages that are message-matched just for
                    them. Even consider creating different landing pages for
                    desktop vs. mobile visitors.
                  </ListItem>
                  <ListItem>
                    <b>
                      Set up an A/B test or split test to find what truly works
                    </b>
                    <br />
                    The best marketers are also mad scientists – constantly
                    testing out new content, design, messages, etc., to find
                    what their audience responds to best. After publishing your
                    landing page, consider what you’d most like to learn from a
                    landing page split test and what your testing strategy will
                    be.
                  </ListItem>
                </OL>
                <br></br>
                <H3>Get real-time landing page guidance with Leadmeter</H3>
                <ParagraphSmall>
                  Leadpages is the only platform that automatically analyzes
                  your landing page and provides recommendations so that you can
                  better predict how your page will perform before you publish.
                  Powered by proprietary AI technology, the Leadmeter combines
                  the power of big data with landing page best practices.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Bottom line:</b> Use these top 10 best practices for
                  landing pages to create clean, succinct, value-driven pages.
                  You’ll attract and engage more customers if you make it easy
                  for them to understand what they’re getting from you, and you
                  pay attention to what works for different segments of your
                  audience.
                </ParagraphSmall>
              </SectionContainer>
              <SectionContainer id="landing_page_testing">
                <PageSupertitle>Chapter 11</PageSupertitle>
                <PageTitle>What should I test on my landing page?</PageTitle>
                <ParagraphLarge>
                  Creating a simple landing page test plan helps you boost
                  conversion rates by crafting your content around what compells
                  your audience to take action.
                </ParagraphLarge>
                <ParagraphSmall>
                  The best way to make the most of every possible page visitor
                  is to run (rigorous) A/B testing landing pages so that you can
                  hone in on what makes one page outperform another.
                </ParagraphSmall>
                <ParagraphSmall>
                  From images and copy to landing page design – you can run an
                  infinite number of landing page tests to optimize your
                  conversion rate, but we want you to focus first on the
                  high-impact areas that will give you the highest possible
                  return right away.
                </ParagraphSmall>
                <ParagraphSmall>
                  Here are the top 5 landing page tests to see the greatest
                  success fast.
                </ParagraphSmall>
                <H2>
                  <b>1. Variations of your headline</b>
                </H2>
                <ParagraphSmall>
                  Your&nbsp;
                  <SiloScrollLink
                    to="landing_page_copywriting"
                    aria-label="Landing page copywriting"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    landing page copywriting
                  </SiloScrollLink>
                  &nbsp;is a huge factor in persuading your audience to take
                  action and it all begins with the headline. Test out different
                  lengths, sentiments, and tones.
                </ParagraphSmall>
                <ParagraphSmall>
                  For example: which headline is more compelling?
                </ParagraphSmall>
                <UL>
                  <ListItem>
                    Save $200 on your next photography session!
                  </ListItem>
                  <ListItem>Get 40% off when you book today!</ListItem>
                </UL>
                <Image1
                  image={image11_1}
                  alt="a b test headlines"
                  title="a b test headlines"
                />
                <ParagraphSmall>
                  Both headlines present the same offer (a sales discount) and
                  use unique language. But which is better? You just don’t know
                  until you test it!
                </ParagraphSmall>
                <H2>2. Your call-to-action copy</H2>
                <ParagraphSmall>
                  Your call to action (CTA) button is where all of the
                  conversion takes place and should be (1) clear and (2)
                  compelling, with a touch of creativity if you can squeeze it
                  in.
                </ParagraphSmall>
                <ParagraphSmall>
                  Don’t settle for run-of-the-mill language like ‘submit’ or
                  ‘download.’ The words you choose for your call to action
                  should describe what the visitor is doing when they take the
                  next step but should also be enticing.
                </ParagraphSmall>
                <Image2
                  image={image11_2}
                  alt="a b test cta"
                  title="a b test cta"
                />
                <H2>3. Length of the page</H2>
                <ParagraphSmall>
                  This is the Goldilocks question: is your landing page too
                  short? too long? or just right? Because the length of your
                  landing page actually plays a huge role in your conversion.
                </ParagraphSmall>
                <StyledImageComponent
                  image={image11_3}
                  alt="a b test length"
                  title="a b test length"
                />
                <ParagraphSmall>
                  You can make some educated assumptions about how long your
                  page needs to be (the more familiar your audience is and the
                  fewer the barriers to conversion, the shorter the page).
                  However, you simply don’t know until you test.
                </ParagraphSmall>
                <ParagraphSmall>
                  Test out different page lengths or hide whole sections of
                  content to see how your content impacts your conversion rate.
                </ParagraphSmall>
                <H2>4. Your page design & aesthetics</H2>
                <ParagraphSmall>
                  Test out the design of your page by testing different hero
                  images, CTA button colors, font stylings, or layout.
                </ParagraphSmall>
                <ParagraphSmall>
                  Isolate one single&nbsp;
                  <SiloScrollLink
                    to="landing_page_design"
                    aria-label="Landing page design"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    landing page design
                  </SiloScrollLink>
                  &nbsp;element that you’re interested in learning about and see
                  what appeals most to your audience.
                </ParagraphSmall>
                <StyledImageComponent
                  image={image11_4}
                  alt="a b test design"
                  title="a b test design"
                />
                <ParagraphSmall>
                  Consider testing even the seemingly-smallest elements of
                  design. For example, should you include a navigation bar at
                  the top of the page or not? Should you use client testimonials
                  with or without a picture? Does red look better than orange?
                </ParagraphSmall>
                <ParagraphSmall>
                  Landing page testing tools, like Leadpages integrated tester,
                  make design comparison a breeze.
                </ParagraphSmall>
                <H2>5. Your offer (or price point)</H2>
                <ParagraphSmall>
                  You can even test the offer itself. Perhaps one topic will
                  resonate more than another, or checklists will outperform
                  ebooks (as we discovered at Leadpages!). You might even try
                  testing out different price points to see how much your
                  audience is willing to spend.
                </ParagraphSmall>
                <StyledImageComponent
                  image={image11_5}
                  alt="a b test price"
                  title="a b test price"
                />
                <ParagraphSmall>
                  Will they pay $4 but not $5 for an eBook? Surprisingly, some
                  people won’t convert for a free downloadable, but they’d pay
                  $1.99 for the same downloadable because they perceive more
                  value in it. Free is not always the answer (although it
                  usually is).
                </ParagraphSmall>
                <ParagraphSmall>
                  The nature of your offer is the foundation of your landing
                  page. Make sure it’s something your audience truly wants.
                </ParagraphSmall>
                <H2>How should a landing test page look?</H2>
                <ParagraphSmall>
                  You want your landing page test to look like any other landing
                  page. You don’t want your customers to even realize they’re
                  looking at a test page. Your landing page should be completely
                  formed with well-written copy and design, so you can fully see
                  which variables are and are not working. Follow our&nbsp;
                  <SiloScrollLink
                    to="landing_page_best_practices"
                    aria-label="Landing page best practices"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    landing page best practices
                  </SiloScrollLink>
                  &nbsp;to start creating beautiful test landing pages.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Bottom line:</b> Make no assumptions and try not to let
                  your personal preference influence your digital marketing.
                  Experiment and spend time on landing page tests to ensure you
                  optimize for the highest possible conversion rate.
                </ParagraphSmall>
              </SectionContainer>
              <SectionContainer id="landing_page_traffic">
                <PageSupertitle>Chapter 12</PageSupertitle>
                <PageTitle>How do I send traffic to a landing page?</PageTitle>
                <ParagraphLarge>
                  Need web traffic without all the expense? Learn proven tactics
                  to take your web page from published to popular to profitable
                  on the web.
                </ParagraphLarge>
                <ParagraphSmall>
                  After you’ve published a page, it’s time to promote it and get
                  it into the hands of your target audience. But where do your
                  visitors come from before they ‘land’ on your landing page and
                  how can you drive more traffic to your most important pages?
                </ParagraphSmall>
                <ParagraphSmall>
                  The most common landing page traffic sources (or digital
                  marketing channels) include pay-per-click (PPC) ads, organic
                  search, social media, and email marketing. Some traffic
                  sources require that you spend some of your marketing budget,
                  while others can are free for the marketer willing to make the
                  best effort.
                </ParagraphSmall>
                <ParagraphSmall>
                  In any case, your goal, as a marketer, is to meaningfully
                  engage with visitors on a third-party channel (such as a
                  social media site) and direct that traffic to your
                  dedicated&nbsp;
                  <SiloScrollLink
                    to="what_is_a_landing_page"
                    aria-label="What is a landing page?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    landing page
                  </SiloScrollLink>
                  &nbsp;where visitors can learn more, buy now, and
                  convert.&nbsp;
                  <SiloScrollLink
                    to="when_to_use_landing_pages"
                    aria-label="When should I use a landing page?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    How you use landing pages in your marketing
                  </SiloScrollLink>
                  &nbsp;depends on what you’re offering, to whom, and where your
                  audience is coming from.
                </ParagraphSmall>
                <ParagraphSmall>
                  Most of the time, that can be done with a few simple
                  strategies for driving traffic. Let’s look at how to promote
                  your landing page by attracting and engaging the right
                  visitors from the source.
                </ParagraphSmall>
                <H2>Start at the (traffic) source</H2>
                <ParagraphSmall>
                  Even if you have the best landing page builder and your
                  landing page is converting 80% of the traffic you send it, it
                  could still be unsuccessful. Why? Unless that traffic
                  represents your target audience, your landing page is winning
                  a battle but losing the war.
                </ParagraphSmall>
                <ParagraphSmall>
                  It doesn’t matter how much money you spend (or don’t spend) on
                  digital advertising, all web traffic is not created equal. It
                  comes down to a strong focus on what criteria you’re using to
                  target people, where they’re coming from, and whether your
                  landing page delivers on its initial promise.
                </ParagraphSmall>
                <ParagraphSmall>
                  Your traffic sources are the foundation of your marketing
                  funnel and will ultimately determine both the quality and
                  quantity of your inbound leads (and customers).
                </ParagraphSmall>
                <H3>How web traffic works within your marketing funnel</H3>
                <ParagraphSmall>
                  Wondering how much traffic you need or how many leads you
                  should generate each month? Your landing page traffic acts as
                  your denominator and determines how many people will
                  ultimately trickle through the rest of your sales and
                  marketing funnel.
                </ParagraphSmall>
                <ParagraphSmall>
                  For example, let’s say your Facebook ad reaches 100,000 unique
                  users, and 1% of those users click through to see your landing
                  page. That means that 10,000 people reach your page, which has
                  a 50% conversion rate—leaving you with 1,000 new leads.
                </ParagraphSmall>
                <ParagraphSmall>
                  By considering how many leads you convert into paying
                  customers and working your way backwards up the funnel, you
                  can ultimately calculate how much web traffic you need to
                  drive to your landing page every month in order to reach your
                  goals.
                </ParagraphSmall>
                <ParagraphSmall>
                  However—getting to those goals require you to get into the
                  granular detail of how and whom you’re targeting. This all
                  comes back to the initial traffic source. Where and how you
                  find traffic will determine how you promote your landing page
                  and the quality of the leads you’re attracting.
                </ParagraphSmall>
                <ParagraphSmall>
                  For example, let’s say that you sell coaching services for
                  retirees. Your target audience is between the ages of 50 and
                  70. You decide to run an Instagram paid advertisement.
                  Although 5% of Instagram users are over age 55, the majority
                  are between ages 18 and 35.
                </ParagraphSmall>
                <ParagraphSmall>
                  This means you’re not only wasting your money targeting your
                  ads at the wrong people but also anyone who clicks through is
                  not likely to become a customer. You’d likely do better with a
                  Facebook or Google paid ad.
                </ParagraphSmall>
                <ParagraphSmall>
                  You want your traffic source to attract the <i>right</i> kind
                  of traffic, so you’re more likely to engage and convert those
                  visitors into leads.
                </ParagraphSmall>
                <H2>Where can I find traffic?</H2>
                <ParagraphSmall>
                  Alright, let’s find great landing page traffic with the right
                  sources!
                </ParagraphSmall>
                <H3>1. Pay-Per-Click (PPC) Ads</H3>
                <ParagraphSmall>
                  Pay-per-click ads come in all kinds of shapes and sizes: from
                  paid ads on social media platforms to display ads and search
                  engine marketing (SEM).
                </ParagraphSmall>
                <StyledImageComponent
                  image={image12_1}
                  alt="PPC Ad platforms"
                  title="PPC Ad platforms"
                />
                <ParagraphSmall>
                  Depending on the platform you use—whether it’s Google Ads or
                  Facebook ads or a third-party—you have a limited ability to
                  (1) capture people’s attention (2) deliver a message and (3)
                  compel people to click to the next step.
                </ParagraphSmall>
                <ParagraphSmall>
                  That’s where landing pages enable you to own your post-click
                  experience and deliver content that’s tailor-made for that
                  unique audience and traffic source. Unlike a standard webpage,
                  Leadpages landing page software affords you the flexibility
                  and agility you need to integrate with your paid
                  advertisements and make a high return on ad spend.
                </ParagraphSmall>
                <ParagraphSmall>
                  <i>
                    Pro Tip: Consistently run&nbsp;
                    <SiloScrollLink
                      to="landing_page_testing"
                      aria-label="What should I test on my landing page?"
                      spy
                      smooth
                      duration={300}
                      offset={-150}
                    >
                      A/B and split tests on your PPC landing pages
                    </SiloScrollLink>
                    &nbsp;to scientifically squeeze the most value out of every
                    dollar you spend on digital advertising.
                  </i>
                </ParagraphSmall>
                <H3>2. Social Media</H3>
                <ParagraphSmall>
                  There are nearly 2.7 billion social media users worldwide, and
                  an estimated 77% of the U.S. population has at least one
                  social media profile. Therefore, social networking sites are
                  one of the most powerful ways to spread your message to a
                  large, captive audience.
                </ParagraphSmall>
                <StyledImageComponent
                  image={image12_2}
                  alt="social platforms"
                  title="social platforms"
                />
                <ParagraphSmall>
                  Social media works well because you can use attractive visuals
                  and enhanced copy to create a community of followers that will
                  naturally engage with and advocate on behalf of your brand.
                  It’s also is a great way to pique visitors’ interest and
                  encourage them to click through to your landing page to learn
                  more or complete a purchase.
                </ParagraphSmall>
                <ParagraphSmall>
                  <i>Pro Tip:</i>
                  &nbsp;Don’t just think about how to promote your landing page
                  on Facebook, because you hear other businesses doing it.
                  Rather than chasing the next top-trending platform, focus on
                  the social media sites where you have the largest and most
                  engaged following.
                </ParagraphSmall>
                <H3>3. Content Marketing</H3>
                <ParagraphSmall>
                  Content marketing involves strategically delivering content
                  throughout your customer journey in order to convert traffic
                  to leads, leads to customers, and customers to raving fans.
                  The most successful content marketing involves a multi- or
                  omnichannel approach and remains highly targeted toward a
                  narrowly defined audience.
                </ParagraphSmall>
                <ParagraphSmall>
                  Depending on your audience’s needs at various stages, you
                  might educate, entertain, or inspire through your content with
                  the understanding that if people find value in your content,
                  they’re more likely to consider your brand when they’re ready
                  to make a purchase.
                </ParagraphSmall>
                <ParagraphSmall>
                  Here are some traffic-driving content marketing tactics to
                  consider for your business:
                </ParagraphSmall>
                <UL>
                  <ListItem>
                    Embed content upgrades (&nbsp;
                    <SiloScrollLink
                      to="lead_magnets"
                      aria-label="Lead magnets 101"
                      spy
                      smooth
                      duration={300}
                      offset={-150}
                    >
                      lead magnets
                    </SiloScrollLink>
                    &nbsp;) in your blog posts
                  </ListItem>
                  <ListItem>
                    Guest blog for third-party websites and include a link to
                    your primary landing page.
                  </ListItem>
                  <ListItem>
                    Publish press releases online and with local news
                    organizations and include a link to your landing pages (if
                    permitted).
                  </ListItem>
                  <ListItem>
                    Appear as a guest on a podcast and direct people to your
                    landing page on-air and in the show notes.
                  </ListItem>
                  <ListItem>
                    Submit inquiries to HARO (&nbsp;
                    <OutboundLink
                      href="https://www.helpareporter.com/"
                      rel="nofollow noopener"
                      aria-label="Help a Report Out"
                    >
                      Help A Reporter Out
                    </OutboundLink>
                    &nbsp;). Usually, you will provide a short interview answer
                    and a backlink to your site or landing page that comes from
                    a reputable source.
                  </ListItem>
                </UL>
                <ParagraphSmall>
                  <i>Pro Tip:</i>
                  &nbsp;Wherever and whenever you publish, always ask if you can
                  include a link. The more links to your landing page, the more
                  likely you’ll attract a click.
                </ParagraphSmall>
                <H3>4. Email Marketing</H3>
                <ParagraphSmall>
                  Your email list is one of the business’s biggest assets, but
                  only if you’re constantly nurturing those leads and providing
                  them with new opportunities to convert.
                </ParagraphSmall>
                <ParagraphSmall>
                  That requires that you produce content and engagement
                  opportunities for your existing leads and customers as well as
                  prospective audiences.
                </ParagraphSmall>
                <ParagraphSmall>
                  These warmer, more engaged audiences are more likely to be
                  ready to make a purchase (or higher-ticket purchase) if only
                  you’d provide an opportunity. Use your landing pages to invite
                  these individuals to join a webinar, make a purchase, or take
                  advantage of a promotion.
                </ParagraphSmall>
                <ParagraphSmall>
                  <i>Pro tip:</i> Email marketing is the best traffic source for
                  a sales page since you are pulling on pre-qualified leads to
                  make the sale.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Bottom line:</b> Where and how you get your landing page
                  traffic is critical to the success of your marketing funnel.
                  Focus on traffic sources that provide a high volume of
                  visitors that are relevant to your lead magnet and business.
                </ParagraphSmall>
              </SectionContainer>
              <SectionContainer id="lead_magnets">
                <PageSupertitle>Chapter 13</PageSupertitle>
                <PageTitle>Lead magnets 101</PageTitle>
                <ParagraphLarge>
                  Here’s (almost) everything you need to know about lead magnets
                  and content upgrades to build your email list and turn
                  strangers into subscribers.
                </ParagraphLarge>
                <ParagraphSmall>
                  Growing businesses hungry for more customers all face the same
                  challenge: transforming web traffic into leads. Sure, it’s
                  great to see that people are landing on your site, but unless
                  you can actively market to those individuals – well, you’re
                  pretty much stuck on the sidelines. Lead magnets are the #1
                  way to generate leads and grow your business online.
                </ParagraphSmall>
                <ParagraphAccent>
                  What are lead magnets? - A lead magnet is anything you give
                  away in exchange for someone’s email address/ contact
                  information.
                </ParagraphAccent>
                <ParagraphSmall>
                  They come in all shapes and sizes and are utilized by
                  world-renowned brands as well as small businesses just
                  starting out with digital marketing.
                </ParagraphSmall>
                <ParagraphSmall>
                  Having web traffic on your site is great – but it’s not the
                  end goal. In order to build your business (and actively market
                  your product/ services) you need to transform traffic into
                  leads by collecting email address.
                </ParagraphSmall>
                <ParagraphSmall>
                  But…when was the last time you gave out your contact
                  information for free? …how about, never?
                </ParagraphSmall>
                <ParagraphSmall>
                  Your audience isn’t going to give it away for free either.
                  You’ll need to offer an incentive – and that’s what a lead
                  magnet is all about.
                </ParagraphSmall>
                <ParagraphSmall>
                  Getting someone’s contact information is what converts
                  anonymous web traffic into prospects or leads, because (1) you
                  can be reasonably sure they’re interested in your offer and
                  (2) you have an (active) way of staying in touch.
                </ParagraphSmall>
                <ParagraphSmall>
                  Typically, lead magnets take the form of downloadable content
                  (ebooks, PDF guides, worksheets, etc.), instructional video,
                  free consultations, webinars, etc. But we’ll get into this
                  later.
                </ParagraphSmall>
                <H2>How do lead magnets work?</H2>
                <ParagraphSmall>
                  The mechanics of how a lead magnet works is really quite
                  simple: you have to give something away to get something in
                  return. In this case, high-quality free content in exchange
                  for an email address.
                </ParagraphSmall>
                <ParagraphSmall>
                  A lead magnet most often works like this:
                </ParagraphSmall>
                <ImageWithBorder
                  image={image13_1}
                  alt="How a lead magnet works"
                  title="How a lead magnet works"
                />
                <ParagraphSmall>
                  Your lead magnet could be offered in a banner ad, pop-up form,
                  or landing page – depending on where you want to host your
                  offer and how much space you need to explain its value.
                </ParagraphSmall>
                <ParagraphSmall>
                  Most small businesses use landing pages to introduce their
                  lead magnet. In that case, people who visit your landing page
                  enter their email address in order to access the lead magnet.
                  When they submit their email address, they automatically
                  receive an email containing the lead magnet. You now can
                  contact them with (appropriate, non-overwhelming) future
                  offers and information.
                </ParagraphSmall>
                <H2>Why use lead magnets?</H2>
                <ParagraphSmall>
                  Your email list/ database of leads is your #1 resource for
                  marketing your product or service. You need high-quality
                  (relevant) leads and subscribers that you can reach out to
                  with (non-overwhelming) content whenever you want to. Lead
                  magnets are how you grow your email list and fill your
                  marketing/ sales funnel with people who want to receive what
                  you have to offer.
                </ParagraphSmall>
                <H2>What are common types of lead magnets?</H2>
                <ParagraphSmall>
                  From free video courses to a downloadable checklist or eBook,
                  there are a near-infinite number of lead magnets that you
                  could create for your lead generation campaign.
                </ParagraphSmall>
                <ParagraphSmall>
                  Here are a few common lead magnet examples to keep in mind:
                </ParagraphSmall>
                <UL>
                  <ListItem>Ebooks</ListItem>
                  <ListItem>
                    Checklists/ cheat sheets/ resource guides/ tip sheets/ FAQ
                    sheets
                  </ListItem>
                  <ListItem>Worksheets/ workbooks</ListItem>
                  <ListItem>Email courses</ListItem>
                  <ListItem>Swipe files/ templates</ListItem>
                  <ListItem>Webinars/ webinar replays</ListItem>
                  <ListItem>Calendars/ action plans</ListItem>
                  <ListItem>Industry reports</ListItem>
                  <ListItem>White papers/ case studies</ListItem>
                  <ListItem>Live demos/ tutorials</ListItem>
                  <ListItem>On-demand video trainings/ courses</ListItem>
                  <ListItem>Contests</ListItem>
                  <ListItem>Quizzes</ListItem>
                  <ListItem>Product samples/ free trials</ListItem>
                  <ListItem>Consultations/ 1:1 calls</ListItem>
                </UL>
                <H2>Which lead magnet is right for your audience?</H2>
                <ParagraphSmall>
                  Sure, the sky’s the limit when it comes to what lead magnets
                  you can create. But which type of lead magnet is right for
                  your audience and for your specific lead generation campaign?
                  How will you make sure your&nbsp;
                  <SiloScrollLink
                    to="landing_page_traffic"
                    aria-label="How do I send traffic to a landing page?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    landing page’s traffic sources
                  </SiloScrollLink>
                  &nbsp;are effectively targeted in order to attract visitors
                  that will engage with your lead magnet?
                </ParagraphSmall>
                <ParagraphSmall>
                  The most successful lead magnets are those that are
                  thoughtfully tailored to attract a very specific audience and
                  meet a very specific need at a particular point in that
                  audience’s experience with your business.
                </ParagraphSmall>
                <ParagraphSmall>
                  There are a handful of variables you’ll want to consider:
                </ParagraphSmall>
                <ParagraphSmall>
                  Before you decide what format your lead magnet should take,
                  first consider:
                </ParagraphSmall>
                <OL>
                  <ListItem>
                    Who is your <b>audience</b>? <b>How engaged</b> are they
                    with your business? How hard are they willing to work to get
                    value from your offer?
                  </ListItem>
                  <ListItem>
                    What <b>(specific) problem</b> are you trying to solve for
                    your audience? What
                    <b>solution</b> do you propose?
                  </ListItem>
                  <ListItem>
                    What’s the ideal <b>content format</b> to deliver that
                    solution?
                  </ListItem>
                  <ListItem>
                    What do you have the ability to create? (text, video, audio,
                    graphics, etc.)
                  </ListItem>
                </OL>
                <ImageWithBorder2
                  image={image13_2}
                  alt="lead magnet format"
                  title="lead magnet format"
                />
                <H2>
                  Which lead magnets are right for your marketing channels?
                </H2>
                <ParagraphSmall>
                  When creating your lead magnets, it’s important to tailor them
                  to each marketing channel—but even more important that they
                  suit the type of audience you’re reaching out to. For example,
                  the colder or less familiar an audience, the easier the lead
                  magnet should be to consume: checklist vs. a long ebook.
                </ParagraphSmall>
                <H2>How do you make a lead magnet on Facebook?</H2>
                <ParagraphSmall>
                  We often hear people asking about which lead magnet is right
                  for Facebook – we recommend matching the audience type to its’
                  needs rather than the channels. This way you’re able to focus
                  on what your audience truly needs and not get lost chasing
                  what your competition is creating
                </ParagraphSmall>
                <H2>How do you make a lead magnet?</H2>
                <ParagraphSmall>
                  If you’re not a professional writer or designer, making your
                  own lead magnet can feel daunting but it doesn’t have to be.
                  Here’s how to get started:
                </ParagraphSmall>
                <OL>
                  <ListItem>
                    Hone in on a single problem that your audience cares about
                  </ListItem>
                  <ListItem>
                    Create content that addresses that single problem
                  </ListItem>
                  <ListItem>
                    Commit to a format that suits your topic and type of
                    audience
                  </ListItem>
                  <ListItem>Include an opportunity to upsell</ListItem>
                  <ListItem>
                    Create ads and landing pages that help you bring your lead
                    magnet to the world
                  </ListItem>
                </OL>
                <H2>
                  10 Tips to Get Started with Your First Lead Magnet + Lead
                  Magnet Examples
                </H2>
                <ParagraphSmall>
                  New to lead magnets (maybe still even confused as to what are
                  lead magnets) and not sure how to get your lead generation off
                  the ground? Not to worry. You’ve likely seen opt-in offers all
                  over the internet and now that you’re tuned into this
                  marketing technique, you’ll spot even more!
                </ParagraphSmall>
                <ParagraphSmall>
                  Keep your eyes open to learn from other businesses and to
                  inspire what’s possible for your business. But in the
                  meantime, here’s our lead magnet checklist to get you started.
                </ParagraphSmall>
                <H3>#1 – Hone in on a single problem</H3>
                <ParagraphSmall>
                  Don’t try to ‘boil the ocean’ or solve every problem with a
                  single, downloadable worksheet – you’ll drive yourself nuts!
                  Keep it specific.
                </ParagraphSmall>
                <StyledImageComponent
                  image={image13_3}
                  alt="3 Must-Have Drip Campaigns in 1 PDF"
                  title="3 Must-Have Drip Campaigns in 1 PDF"
                />
                <ParagraphSmall>
                  <i>
                    In this lead magnet example by Bold and Zesty, they keep
                    their offer highly specific: 3 must-have drip email
                    campaigns in 1 PDF.
                  </i>
                </ParagraphSmall>
                <H3>#2 – Connect the dots</H3>
                <ParagraphSmall>
                  Ideally, your lead magnet ties back to your primary service/
                  offer. Think of this as the first-step in your product
                  pyramid. You can (subtly) mention your products or services,
                  but definitely, don’t try to use your lead magnet as an
                  advertisement.
                </ParagraphSmall>
                <ParagraphSmall>
                  At Leadpages, we build this strategy into everything we do.
                  Here’s one example:
                </ParagraphSmall>
                <StyledImageComponent
                  image={image13_4}
                  alt="Leadpages Lead Magnet Example Offer"
                  title="Leadpages Lead Magnet Example Offer"
                />
                <ParagraphSmall>
                  <i>
                    We used to offer lots of free landing page templates to
                    download and follow-up with invitations to put those
                    templates to good use inside a free 14-day trial of
                    Leadpages.
                  </i>
                </ParagraphSmall>
                <H3>#3 – Say it Straight</H3>
                <ParagraphSmall>
                  In most cases, you won’t have a lot of space to wax poetic
                  about what your lead magnet is and why people should download
                  it. You’ll need to get straight to the point and answer 3 key
                  questions in as few words as possible:
                </ParagraphSmall>
                <OL>
                  <ListItem>Why should your audience care?</ListItem>
                  <ListItem>What are you offering?</ListItem>
                  <ListItem>What action should they take next?</ListItem>
                </OL>
                <StyledImageComponent
                  image={image13_5}
                  alt="Free Live Webinar Lead Magnet Example"
                  title="Free Live Webinar Lead Magnet Example"
                />
                <ParagraphSmall>
                  <i>
                    In this lead magnet example, all 3 key questions are
                    addressed: why your audience should care (How to 3x site
                    traffic in 6 months), what it is (free live webinar), and
                    what action you’re asking them to take.
                  </i>
                </ParagraphSmall>
                <H3>#4 – Don’t get greedy: ask for the minimum</H3>
                <ParagraphSmall>
                  The more information you ask for in exchange for your lead
                  magnet, the less likely your target audience is to take
                  action. Keep your form fields down to a minimum. If possible,
                  stick with just first name and email address.
                </ParagraphSmall>
                <StyledImageComponent
                  image={image13_6}
                  alt="Authority SEO Lead Magnet Example"
                  title="Authority SEO Lead Magnet Example"
                />
                <ParagraphSmall>
                  <i>
                    This lead magnet opt-in form from AuthorityHacker.com is a
                    great example of keeping required fields down to a bare
                    minimum.
                  </i>
                </ParagraphSmall>
                <H3>#5 – Make it bite-sized</H3>
                <ParagraphSmall>
                  If you’re in the market to generate new leads from total
                  strangers, you’ll need to make it super easy to say ‘yes’ to
                  your offer. Cold traffic (those unfamiliar with your business)
                  won’t be willing to work all that hard to get to know you.
                  That means you should keep your offer short, sweet, and
                  simple.
                </ParagraphSmall>
                <StyledImageComponent
                  image={image13_7}
                  alt="Dexma Checklist Lead Magnet Example"
                  title="Dexma Checklist Lead Magnet Example"
                />
                <ParagraphSmall>
                  <i>
                    In this lead magnet example by Dexma, a simple 1-page
                    checklist is all it takes to deliver value.
                  </i>
                </ParagraphSmall>
                <H3>#6 – Tie it with a bow</H3>
                <ParagraphSmall>
                  Product packaging is everything and lead magnet design
                  matters. Make an attractive mock-up of your product or create
                  an eye-catching header image that will carry through your ads,
                  landing pages, and email delivery.
                </ParagraphSmall>
                <StyledImageComponent
                  image={image13_8}
                  alt="Diabetes Strong Lead Magnet Example"
                  title="Diabetes Strong Lead Magnet Example"
                />
                <ParagraphSmall>
                  <i>
                    This lead magnet example from Diabetes Strong showcases
                    exactly what’s up for grabs in a very visually appealing
                    way.
                  </i>
                </ParagraphSmall>
                <H3>
                  #7 – Remember: A Newsletter is not magnetic. (And ‘updates’
                  aren’t sexy)
                </H3>
                <ParagraphSmall>
                  Most businesses think their ‘regular newsletter’ qualifies as
                  a lead magnet – but oooh no, that’s not so. Unless you’ve done
                  the legwork to sell your email newsletter as a valuable
                  information product in its own right, when you add opt-in
                  points like these to your site, your visitors are likely to
                  look at them and see: free sales pitches. As if people would
                  generally pay for the privilege of receiving marketing emails.
                  Instead, offer a bonus that gets people excited to subscribe,
                  then immediately delivers info they’ll devour.
                </ParagraphSmall>
                <StyledImageComponent
                  image={image13_9}
                  alt="Free Newsletter Lead Magnet Example"
                  title="Free Newsletter Lead Magnet Example"
                />
                <ParagraphSmall>
                  <i>
                    A better way to promote your free newsletter would be to
                    focus in on values and benefits rather than offering free
                    email updates. Source: themodernentrepreneur.com
                  </i>
                </ParagraphSmall>
                <StyledImageComponent
                  image={image13_10}
                  alt="Content Marketing Institute Lead Magnet Example"
                  title="Content Marketing Institute Lead Magnet Example"
                />
                <ParagraphSmall>
                  <i>
                    This opt-in offer from Content Marketing Institute is
                    brilliant because it focuses on the value, gives a free
                    download, and adds a pinch of social proof: ‘join 40,000 of
                    your peers!’
                  </i>
                </ParagraphSmall>
                <H3>#8 – Use thought Leadership to capture leads</H3>
                <ParagraphSmall>
                  A lead magnet strategy can often help establish you as an
                  authority in your industry (or even a just a place to turn for
                  cool stuff). Be benevolent and generous with your expertise,
                  don’t hold back! As soon as your audience trusts your
                  credibility, they’ll be ready to pay for a greater value and
                  increased access.
                </ParagraphSmall>
                <StyledImageComponent
                  image={image13_11}
                  alt="Neil Patel Expertise Lead Magnet Example"
                  title="Neil Patel Expertise Lead Magnet Example"
                />
                <ParagraphSmall>
                  <i>
                    This lead magnet example from Neilpatel.com puts his
                    expertise right there in the headline. Thanks to powerful
                    copywriting, you simply can’t help but trust him and want
                    him as a mentor.
                  </i>
                </ParagraphSmall>
                <H3>#9 – Deliver on your promise</H3>
                <ParagraphSmall>
                  Double, triple, and quadruple check that your lead generation
                  tool is integrated with your email service provider (ESP) so
                  that you can instantly deliver your free content. Don’t leave
                  a single lead hanging!
                </ParagraphSmall>
                <StyledImageComponent
                  image={image13_12}
                  alt="Leadpages Sample Lead Magnet Thank You Page Upsell"
                  title="Leadpages Sample Lead Magnet Thank You Page Upsell"
                />
                <ParagraphSmall>
                  <i>
                    In this lead magnet example, the free guide is delivered
                    right inside the thank-you page and an up-sell invitation is
                    made.
                  </i>
                </ParagraphSmall>
                <H3>
                  #10 – Back it up with some love: don’t neglect your nurture
                  sequence
                </H3>
                <ParagraphSmall>
                  Think of your newly captured lead as a new acquaintance. Don’t
                  kick off this fresh friendship by neglecting to follow-up for
                  months. Take immediate action by (1) delivering what you
                  promised and (2) offering next steps. You might suggest that
                  they check out a blog post related to the topic, send over
                  another free offer that takes the topic one-step further or
                  invites them to share their feedback with you.
                </ParagraphSmall>
                <H2>
                  What’s the Best (and Easiest) Way to Create a Lead Magnet?
                </H2>
                <ParagraphSmall>
                  There’s no single easy lead magnet format that works best for
                  everyone, but many entrepreneurs find success offering a lead
                  magnet PDF download of highly useful content, such as an
                  e-book or a single-sheet resource guide. You can also start
                  with a lead magnet template and quickly plug in your own copy
                  and content.
                </ParagraphSmall>
                <SiloPromoBlock overridePromoContent={overridePromoContent} />
                <H2>How Should I Deliver My Lead Magnet?</H2>
                <ParagraphSmall>
                  You want to be able to promise instant gratification when you
                  offer a lead magnet, so you need to make sure it’s delivered
                  automatically when someone opts in.
                </ParagraphSmall>
                <ParagraphSmall>
                  If you use Leadpages, our lead magnet creator system is
                  incredibly easy. You can use our built-in Lead Magnet Delivery
                  system to upload your lead magnet files and link them to your
                  Leadbox opt-in forms. Then, when someone opts in, they’ll get
                  what you promised right away.
                </ParagraphSmall>
                <ParagraphSmall>
                  If you don’t use Leadpages, you’ll want to set up an
                  autoresponder email in your email service provider. Have the
                  first email that goes out when someone submits the proper form
                  in your email service contain a link to or attachment of your
                  lead magnet file.
                </ParagraphSmall>
                <ParagraphSmall>
                  Either way, of course, you’ll also want to make sure the
                  opt-in form is connected to an email follow-up sequence of
                  your choosing.
                </ParagraphSmall>
                <H2>Does a Lead Magnet Have to Be a Digital Product?</H2>
                <ParagraphSmall>
                  No, not necessarily! If you’re a retailer or a
                  brick-and-mortar business, you can have great success giving
                  away a coupon, free pass, or discount code in exchange for
                  someone’s email address.
                </ParagraphSmall>
                <ParagraphSmall>Here’s a great example:</ParagraphSmall>
                <StyledImageComponent
                  image={image13_13}
                  alt="Free Coupon Lead Magnet Example"
                  title="Free Coupon Lead Magnet Example"
                />
                <ParagraphSmall>
                  <i>
                    In this lead magnet example, a free coupon is used as a
                    freebie giveaway.
                  </i>
                </ParagraphSmall>
                <H2>What’s a content upgrade?</H2>
                <ParagraphSmall>
                  A content upgrade is a specific kind of lead magnet designed
                  especially to offer on one particular blog post. You can think
                  of it as the milk to your blog post’s cookie, or the wine
                  flight designed to pair with a good meal. It enhances the
                  information you’ve learned in the post and perhaps makes it
                  easier for you to implement in your life.
                </ParagraphSmall>
                <H2>What are the different types of leads?</H2>
                <ParagraphSmall>
                  Most small business owners offer more than one product or
                  service—which means their lead generation will focus on
                  acquiring a few different kinds of leads.
                </ParagraphSmall>
                <ParagraphSmall>
                  Therefore your lead magnets should be tailored to your
                  audience and the types of leads you need for your marketing/
                  sales funnel. This can be done by identifying who they are,
                  what their primary pain points are, and how you can deliver
                  value via free content. From there you can begin to brainstorm
                  which content/ style of lead magnets your audience would
                  benefit from and begin your lead magnet creation process.
                </ParagraphSmall>
                <H2>
                  How do I know if my lead magnet or content upgrade is good
                  enough?
                </H2>
                <ParagraphSmall>
                  Of course, the surest way to know what kind of lead magnet
                  will get downloaded is to put it out there and watch what
                  happens.
                </ParagraphSmall>
                <ParagraphSmall>
                  If you’re wondering what a strong lead magnet conversion rate
                  looks like, the best place to look is at your historical
                  performance and what’s worked in the past for your particular
                  audience.
                </ParagraphSmall>
                <ParagraphSmall>
                  Then again, if you’ve got a certain number of leads or sales
                  you need to make this month or this quarter, your risk
                  tolerance might be a little low for that.
                </ParagraphSmall>
                <ParagraphSmall>
                  So you might want to test-drive your lead magnet idea first.
                  You could:
                </ParagraphSmall>
                <UL>
                  <ListItem>
                    Send it out to a small group of trusted customers
                  </ListItem>
                  <ListItem>
                    Broadcast your opt-in page to a very limited audience with a
                    low-budget Facebook ads campaign
                  </ListItem>
                  <ListItem>
                    Ask a few friends in (or outside) your industry to give you
                    their thoughts
                  </ListItem>
                  <ListItem>
                    Post in forums asking whether users would find value in the
                    resource you’re considering creating
                  </ListItem>
                  <ListItem>
                    If you’re a Leadpages customer, post it in the&nbsp;
                    <OutboundLink
                      href="https://www.facebook.com/groups/leadpages"
                      rel="nofollow noopener"
                      aria-label="Leadpages Facebook Community"
                    >
                      landing page’s traffic sources
                    </OutboundLink>
                    &nbsp;are effectively targeted in order to attract visitors
                    that will engage with your lead magnet?
                  </ListItem>
                </UL>
                <ParagraphSmall>
                  Want to know if your lead magnets are working? Test them!
                  Utilize A/B testing to determine which types of lead magnets
                  are more successful than others. You can also test which calls
                  to action, headlines, and copy best “sell” your lead magnet.
                  Learn how to&nbsp;
                  <SiloScrollLink
                    to="landing_page_testing"
                    aria-label="What should I test on my landing page?"
                    spy
                    smooth
                    duration={300}
                    offset={-150}
                  >
                    test your landing pages
                  </SiloScrollLink>
                  &nbsp;here.
                </ParagraphSmall>
                <ParagraphSmall>
                  <b>Bottom line:</b>
                  &nbsp;Lead magnets are the backbone to your landing page.
                  Focus on creating a high-value lead magnet that will attract,
                  engage, and convert your visitors.
                </ParagraphSmall>
              </SectionContainer>
            </MainContainer>
          </BodyContainer>
        </InnerContainer>
      </OuterContainer>
    </>
  )
}

export default LandingPagesGuide
