import React from 'react'
// Components
import SEO from '@legacy/components/SEO'
import SiloBackAndForthNavCards from '@legacy/components/silos/SiloBackAndForthNavCards'
import SiloCheckMarkList from '@legacy/components/silos/SiloCheckMarkList'
import SiloComparisonDesktopMenu from '@legacy/components/silos/SiloComparisonDesktopMenu'
import SiloComparisonMobileMenu from '@legacy/components/silos/SiloComparisonMobileMenu'
import SiloHeader from '@legacy/components/headers/SiloHeader'
import SiloPromoBlock from '@legacy/components/silos/SiloPromoBlock'
import ReadyToGrow from '@legacy/components/product/ReadyToGrow'
import Link from 'next/link'
// Images
import leadmeterExcellent from '@legacy/assets/images/comparisons/Leadmeter-Excellent-815px@2x.png'
import widgets from '@legacy/assets/images/comparisons/Widgets-815px@2x.png'
import seoSettings from '@legacy/assets/images/comparisons/SEO-Settings-815px@2x.png'
import calendlyScheduling from '@legacy/assets/images/comparisons/Calendly-Scheduling-815px@2x.png'
import publishingOptions from '@legacy/assets/images/comparisons/Publishing-Options-815px@2x.png'
import shareSitesAndPages from '@legacy/assets/images/comparisons/Share-Sites&Pages-815px@2x.png'
import realTimeAnalytics from '@legacy/assets/images/comparisons/Real-time-Analytics-815px@2x.png'
import fastPageLoadSpeeds from '@legacy/assets/images/comparisons/Fast-Page-Load-Speeds-815px@2x.png'
import templatesAndCustomizability from '@legacy/assets/images/comparisons/templates&customizability-815px@2x.png'
import leadmeter from '@legacy/assets/images/comparisons/Leadmeter-815px@2x.png'
import integrations from '@legacy/assets/images/comparisons/Integrations-815px@2x.png'
import stripeCheckoutForm from '@legacy/assets/images/comparisons/Stripe-Checkout-Form-815px@2x.png'
import openTableRestaurant from '@legacy/assets/images/comparisons/OpenTable-restaurant-Reservations-815px@2x.png'
import customHtmlCss from '@legacy/assets/images/comparisons/CustomHTML-CSS-815px@2x.png'
import conversionTools from '@legacy/assets/images/comparisons/Conversion-Tools-815px@2x.png'
import kajabiSVG from '@legacy/assets/images/comparisons/logos/kajabi.svg'
// Data
import {
  bottomNavigationData,
  pageLinks,
  overridePromoContent,
} from '@legacy/data/comparisons_data'
// Styling
import {
  BodyContainer,
  InnerContainer,
  MainContainer,
  OuterContainer,
  UL,
  OL,
  ListItem,
  SmallHeadline,
  OutboundLink,
  ArticleLink,
  PurpleText,
} from '@legacy/components/silos/SiloGlobalStyles'
import {
  SidebarStyled,
  StyledParagraphLarge,
  StyledParagraphSmall,
  StyledWistia,
  StyledImage,
  SectionWrapper,
  StyledSectionTitleH2,
  StyledH3,
  StyledH4,
} from '@legacy/components/silos/SiloComparisonGlobalStyles'

const verbiage = {
  main: {
    title: 'Leadpages vs. Kajabi',
  },
  menu: {
    title_closed: 'Jump to a Section...',
    title_open: 'Jump to a Section...',
  },
}

const breadcrumbs = {
  currentPageName: 'Kajabi',
  parentPageName: 'Comparisons',
  parentPageLink: '/comparisons',
}

const checkMarkContent = {
  finalVerdict: {
    leadpages: [
      'You’re an entrepreneur or a small business owner scaling your business alone or with a small team.',
      'You don’t want a limit on the number of leads you can collect or sites you can build.',
      'You want an intuitive, easy-to-use drag and drop grid layout to guide your web design.',
      'You are looking for access to built-in integrations and plug-ins.',
      'You want your page to be high-converting and ultra-easy to customize.',
      'You want to use customizable pop-ups and alert bars to collect leads on any web page that you own.',
      'You value a high-quality support team who is available to help you tackle any issues.',
    ],
    competitor: [
      'You are an expert in a subject, an entrepreneur, or an influencer looking to set up your online business selling courses.',
      'You want to set up a membership or affiliate site within your builder for paying customers.',
      'You prefer using an all-in-one tool rather than connecting to the marketing apps and tools you already use.',
    ],
  },
}

const LeadpagesVsKajabi = () => (
  <>
    <SEO
      pathname="/comparisons/leadpages-vs-kajabi"
      title="Leadpages vs. Kajabi: What's the difference?"
      description="See why more than 2x more small businesses choose Leadpages over Kajabi and unlock all the features you need with none of the overwhelm."
      image="https://static.leadpages.com/images/og/og-Leadpages-vs-Kajabi.jpg"
    />
    <SiloHeader title={verbiage.main.title} breadcrumbs={breadcrumbs} />
    <OuterContainer>
      {/* Desktop Menu Bar */}
      <SiloComparisonDesktopMenu
        pageRoutes={pageLinks}
        verbiage={verbiage}
        competitorImage={kajabiSVG}
      />
      {/* Desktop Sidebar Menu */}
      <SidebarStyled
        pageRoutes={pageLinks}
        competitorImage={kajabiSVG}
        useScrollLink
      />
      {/* Mobile Menu */}
      <SiloComparisonMobileMenu
        pageRoutes={pageLinks}
        verbiage={verbiage}
        useScrollLink
      />
      <InnerContainer>
        {/* Main Page Content */}
        <BodyContainer>
          <MainContainer>
            <SectionWrapper name="overview">
              <StyledParagraphLarge>
                Are you pondering creating a landing page to generate more
                leads, spread the news about an upcoming event, or start a sales
                funnel? Leadpages and Kajabi are two notable options to review.
              </StyledParagraphLarge>
              <StyledParagraphLarge>
                But how do you decide? How does{' '}
                <Link href="/" passHref>
                  <ArticleLink>Leadpages</ArticleLink>
                </Link>{' '}
                stack up against Kajabi? As two major movers and shakers in the
                conversion marketing platform industry, this comparison gives a
                no-holds-barred look at both platforms.
              </StyledParagraphLarge>
              <StyledParagraphSmall>
                This comparison gives you an unbiased and detailed look at each
                platform so you can select the best option for your business. We
                want you to succeed… Even if that means picking a platform other
                than ourselves.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                As we compare Leadpages and Kajabi, we’ll take into account{' '}
                <Link href="/comparisons" passHref>
                  <ArticleLink>seven major criteria</ArticleLink>
                </Link>{' '}
                we believe are the most important to you when deciding between
                conversion marketing platforms.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                While we’ll dive into a deep comparison of Kajabi vs. Leadpages,
                know that with both platforms, you can intuitively design and
                optimize landing pages. Yet, they are designed for two different
                “animals”. Kajabi narrows in on course creation and membership
                website tools, whereas Leadpages is focussed on building high
                converting landing pages and websites.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Sure, you get many of the same features and tools across both
                services, but let’s dive into which one is best suited for your
                needs. Dig in!
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Ease of use */}
            <SectionWrapper name="ease-of-use">
              <StyledSectionTitleH2>
                1 - Ease of Use: <br />
                The building experience
              </StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                Leadpages is designed for people of all web abilities to be able
                to easily publish a page on day one in very few steps, thanks to
                the user-intuitive tools within our platform.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                In fact, Leadpages was created for the busy entrepreneur in
                mind:someone who wants to create an impactful online presence
                and create a sales funnel in as few clicks as possible.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Here are a few features that help users, like you, flourish with
                minimal effort:
              </StyledParagraphSmall>
              <StyledH4>Our drag-and-drop builder:</StyledH4>
              <StyledParagraphSmall>
                The <OutboundLink href="">drag-and-drop editor</OutboundLink> is
                constructed by rows and columns, which is intuitive,
                straight-forward, and ideal for non-web designers.
              </StyledParagraphSmall>
              <StyledWistia videoId="l2c84h4wlk" />
              <StyledH4>The Leadmeter:</StyledH4>
              <StyledParagraphSmall>
                Especially handy for users new to conversion tools, our
                (exclusive){' '}
                <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/360019181932-Leadmeter">
                  Leadmeter
                </OutboundLink>{' '}
                predicts how well your landing page will perform before you
                publish it. Then, it offers suggestions on what to tweak. This
                means better optimization of every element, from text and images
                to page layout and opt-in forms, in order to maximize customer
                actions on your page.
              </StyledParagraphSmall>
              <StyledImage image={leadmeter} />
              <StyledH4>HTML widget:</StyledH4>
              <StyledParagraphSmall>
                Want a little more design freedom? While you don’t technically
                need to touch a line of code, more experienced designers can
                customize their page using our HTML widget and CSS
                customizations.
              </StyledParagraphSmall>
              <StyledImage image={customHtmlCss} />
              <StyledH4>Copy/paste sections:</StyledH4>
              <StyledParagraphSmall>
                Avoid any hassle by copying and pasting sections. This feature
                ensures a cohesive design, all while saving time (and your
                work).
              </StyledParagraphSmall>
              <StyledH4>Automatic saving:</StyledH4>
              <StyledParagraphSmall>
                Never fret that you’ll lose work without saving.
              </StyledParagraphSmall>
              <StyledWistia videoId="r4pfqj1prs" />
              <StyledH3>Kajabi:</StyledH3>
              <StyledParagraphSmall>
                Now, onto Kajabi’s user experience… Do you want to know how
                Kajabi stacks up to Leadpages in terms of ease of use?
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Like Leadpages, Kajabi offers a drag-and-drop building
                experience. Kajabi’s drag-and-drop builder, available from its
                sidebar, ensures a simple ease of use for any type of user. So,
                users don’t have to rely on code… Just its handy drag-and-drop
                tool. But given its wider range of focuses (courses, membership
                sites, etc.) it’s somewhat less streamlined and the building
                experience slightly less intuitive for the small biz owner just
                starting out.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Kajabi’s drag-and-drop editor is more limited, as it only lets
                you drag and reorder the sections on the side of its editor,
                rather by clicking the actual elements itself. Frankly, this
                system is a lot less intuitive and takes some time to get used
                to.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                We win in this category. Our drag-and-drop, grid-based builder
                is ultra-intuitive and easy to use; all while maintaining your
                ability to be creative. We aid your design process by showing
                you where your widgets can go on your page, if you are craving
                extra guidance.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Kajabi’s drag-and-drop editor’s limitations with reordering and
                intuitiveness are also a downfall.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                The{' '}
                <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/360019181932-Leadmeter">
                  Leadmeter
                </OutboundLink>{' '}
                is also a crucial benefit to maximizing conversions and ensuring
                your page is optimally designed from the get-go, which saves you
                a ton of time and guesswork.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Where Leadpages and Kajabi line up is here… Both builders
                display a “what you see is what you get” layout. (Yet, the
                flexibility of our editor provides a more seamless experience
                with resizing and placement.) Also, code is not required for
                either service, but HTML and CSS customization is supported for
                those wanting more control over their page.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Functionality */}
            <SectionWrapper name="functionality">
              <StyledSectionTitleH2>
                2 - Functionality: features, widgets & integrations
              </StyledSectionTitleH2>
              <StyledH3>Us:</StyledH3>
              <StyledParagraphSmall>
                Leadpages flawlessly integrates with more than 90 online
                marketing tools (and counting) to help fuel your business’s
                success in a range of areas.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Here’s a quick rundown of our features, widgets, and
                integrations:
              </StyledParagraphSmall>
              <StyledH4>Integrations:</StyledH4>
              <StyledParagraphSmall>
                We play well with all major email service providers (ESPs),
                customer relationship management tools (CRMs), webinar
                platforms, and social networks. Here’s how our integrations
                break down:
              </StyledParagraphSmall>
              <UL>
                <ListItem>Native: 21</ListItem>
                <ListItem>Compatible: 36</ListItem>
                <ListItem>Third-party: 33</ListItem>
                <ListItem>2000+ integrations available via Zapier</ListItem>
                <ListItem>
                  (SalesForce, HubSpot and Marketo integrations only available
                  in advanced plans.)
                </ListItem>
              </UL>
              <StyledImage image={integrations} />
              <StyledH4>Option for CSS (customization):</StyledH4>
              <StyledParagraphSmall>
                If you’re looking to personalize your page’s integrations, look
                no further than Leadpages. Developers can customize via CSS.
              </StyledParagraphSmall>
              <StyledH4>Capture sales:</StyledH4>
              <StyledParagraphSmall>
                We offer integrated sales and checkout pages and payment via{' '}
                <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/115007085728-Checkouts-overview">
                  Stripe
                </OutboundLink>
                , so you can easily sell online products and services.
              </StyledParagraphSmall>
              <StyledImage image={stripeCheckoutForm} />
              <StyledH4>Widget availability:</StyledH4>
              <StyledParagraphSmall>
                Leadpages has 18 available widgets.
              </StyledParagraphSmall>
              <StyledImage image={widgets} />
              <StyledH4>Email tagging:</StyledH4>
              <StyledParagraphSmall>
                Easily manage your email list with email tagging through AWeber,
                so you avoid the hassle of a disorganized list.
              </StyledParagraphSmall>
              <StyledH4>Self-scheduling via Calendly: </StyledH4>
              <StyledParagraphSmall>
                We make it easy to add your schedule to any page or pop-up using
                the natively integrated tool, Calendly. Let users easily snatch
                up open meeting times or appointments!
              </StyledParagraphSmall>
              <StyledImage image={calendlyScheduling} />
              <StyledH4>Online reservations via OpenTable: </StyledH4>
              <StyledParagraphSmall>
                Is your business a restaurant or bar? Our native integration
                with OpenTable allows your customers to search available
                reservation times and book a table right from your landing page
                or website.
              </StyledParagraphSmall>
              <StyledImage image={openTableRestaurant} />
              <StyledH3>Kajabi:</StyledH3>
              <StyledParagraphSmall>
                Kajabi allows you to set up payment directly through Stripe or
                Paypal, so you can easily capture sales directly from your
                landing page. It also offers multiple integrations through
                Zapier. Its 43 widgets are divided into sections such as:
              </StyledParagraphSmall>
              <UL>
                <ListItem>Basic content</ListItem>
                <ListItem>Hero</ListItem>
                <ListItem>Features</ListItem>
                <ListItem>Marketing and events</ListItem>
                <ListItem>Images</ListItem>
                <ListItem>Videos</ListItem>
                <ListItem>Offers and pricing</ListItem>
                <ListItem>FAQS</ListItem>
                <ListItem>Testimonials</ListItem>
                <ListItem>Social</ListItem>
                <ListItem>Custom</ListItem>
              </UL>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                In this category, it’s a tie… And the winner really is specific
                to your unique use case.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                For instance, Kajabi offers their own email, campaign
                automation, social community, and lead tracking services. That
                being said, if you want to integrate with popular ESPs, CRMs,
                webinar platforms, or more than what Kajabi offers, then you
                must work through Zapier.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Where we flourish is our larger selection of built-in
                integrations with the apps you already know and trust, so you
                never have to work through a third party to get them or work
                with a custom solution that binds you to a single platform.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                However, as far as widgets go, both Leadpages and Kajabi offer a
                large selection of elements you can add to your page, as well as
                supporting HTML customization.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Look & feel */}
            <SectionWrapper name="look-and-feel">
              <StyledSectionTitleH2>
                3 - Look & feel: templates & customizability
              </StyledSectionTitleH2>
              <StyledH3>Us:</StyledH3>
              <StyledParagraphSmall>
                Your design experience with Leadpages is easy. Create the look
                and feel that suits your industry and business, with little
                effort on your end. Here’s what we mean:
              </StyledParagraphSmall>
              <OL>
                <ListItem>
                  <b>Ease of use is our M.O.:</b> Your page design can be as
                  simple or as complex as your heart desires.
                </ListItem>
                <ListItem>
                  <b>A polished and pro-looking page:</b> Fool your visitors
                  with our highly professional pages. In fact, they won’t even
                  be able to tell the difference between Leadpages-designed
                  pages and agency-designed pages with a price tag of $20,000+.
                </ListItem>
                <ListItem>
                  <b>Conversions in mind:</b> We’re the experts in conversion
                  marketing so you don’t have to be. We take care in polishing
                  our templates and designs to make sure they convert for your
                  business. In fact, we conversion-optimize each element to make
                  sure you’ve got the highest conversion rate possible.
                </ListItem>
              </OL>
              <StyledParagraphSmall>
                Our templates are built to convert. With an{' '}
                <Link href="/templates" passHref>
                  <ArticleLink>abundance of template choices</ArticleLink>
                </Link>
                , you can feel confident in your page design, even if you have
                little to no experience.
              </StyledParagraphSmall>
              <StyledImage image={templatesAndCustomizability} />
              <StyledParagraphSmall>
                Our users benefit from:
              </StyledParagraphSmall>
              <StyledH4>Template availability and sorting:</StyledH4>
              <StyledParagraphSmall>
                Our gallery is sorted by conversion rate and clearly named to
                convey their value to users from the get-go. With over 200 free
                versatile and unique landing page templates and additional
                website templates, you can search from an abundance of options
                by industry or goal.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Additionally, each template is scientifically optimized for high
                conversion with clean, simple design; a single call-to-action
                above the fold; and a pop-up opt-in form. It allows users to
                better understand the features of each template.
              </StyledParagraphSmall>
              <StyledH4>Mobile responsive (right out of the box):</StyledH4>
              <StyledParagraphSmall>
                All content is mobile responsive, and displays optimally on
                devices of different sizes, be it a desktop, tablet, or mobile
                device. In fact, our multi-device preview is automatically
                generated, so no additional steps are necessary to ensure you’re
                hitting every type of device with the same impactful design. For
                even more customizability, there’s also device-specific display
                settings, which allows users to design specific sections as well
                as shows (or hides) them on certain devices.
              </StyledParagraphSmall>
              <StyledWistia videoId="7urnhosr4y" />
              <StyledH3>Kajabi:</StyledH3>
              <StyledParagraphSmall>
                Kajabi lets you narrow down your objective by the following
                options:
              </StyledParagraphSmall>
              <UL>
                <ListItem>Creating an online course</ListItem>
                <ListItem>Growing your email list</ListItem>
                <ListItem>Creating a site for your business</ListItem>
                <ListItem>Hosting a community or membership group</ListItem>
              </UL>
              <StyledParagraphSmall>
                The platform includes six Premier Framework website themes and
                eight legacy website themes, making your templates choices
                slightly limited as a user. There are also 22-page designs with
                options to customize your page based on the type of page.
                (Think: sales, video opt-in, home, coming soon)
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                As far as template searching goes, with Kajabi you’re unable to
                do a keyword search for templates. Additionally, you can’t
                search templates by keyword or industry, which could be quite
                frustrating and make it difficult to find a relevant theme.
                (Contrary to Leadpages, you can’t sort templates by conversion
                rate, either.)
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Looking for mobile responsive templates? Kajabi lets you change
                the mobile version using a designated mobile or desktop section
                within the editor that appears on every template.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Given Leadpages’ sheer number of templates and advanced search
                options, we’re the clear winner.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                The theme layout of Kajabi allows you to choose between six
                layout presets and customize elements from there. This aspect
                makes building a cohesive website a bit easier than within
                Leadpages, which, although website templates are available, is
                more targeted towards landing page design. Both platforms
                provide templates for entire websites as well as for landing
                pages, but Kajabi specializes in course templates. So, if you’re
                selling online courses or providing education online, Kajabi
                shines in this category.{' '}
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                We offer much more variety and quantity, as well as advanced
                search functions and categorization. And, as a bonus, our
                templates are already sorted by the highest conversion rate, so
                you don’t have to spend hours scouring all of your template
                options. Overall, our template dashboard is more intuitive to
                navigate and offers a greater variety of professional-looking
                landing page templates.{' '}
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Conversion tools: collect leads and close sales */}
            <SectionWrapper name="conversion-tools">
              <StyledSectionTitleH2>
                4 - Conversion tools: collect leads and close sales
              </StyledSectionTitleH2>
              <StyledH3>Us:</StyledH3>
              <StyledParagraphSmall>
                Your ability to convert customers is our top priority, which is
                why we created our exclusive conversion toolkit. This toolkit
                helps you convert your hard-earned website traffic through:
              </StyledParagraphSmall>
              <UL>
                <ListItem>
                  The{' '}
                  <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/360019181932-Leadmeter">
                    Leadmeter,
                  </OutboundLink>{' '}
                  our nifty (and built-in) tool predicts how well your page will
                  perform and tells you what to tweak before you publish it (as
                  we mentioned above)
                  <StyledImage image={leadmeterExcellent} />
                </ListItem>
                <ListItem>
                  <Link href="/product/alert-bars" passHref>
                    <ArticleLink>Alert bars</ArticleLink>
                  </Link>
                  , which prompt user action, are publishable on any website or
                  landing page
                </ListItem>
                <ListItem>
                  <Link href="/product/pop-up-builder" passHref>
                    <ArticleLink>Intuitive pop-up forms</ArticleLink>
                  </Link>
                  , captures the attention of visitors on any page to increase
                  registrations, opt-ins, and even sales
                </ListItem>
              </UL>
              <StyledImage image={conversionTools} />
              <StyledParagraphSmall>
                We also help move customers along in their journeys through
                count clicks and opt-ins as conversions, easy payment, shopping
                cart integrations through Stripe, and intuitive A/B testing.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                We also help move customers along in their journeys through
                conversion tracking, intuitive A/B testing (available on Pro and
                Advanced plans), and easy payment{' '}
                <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/115007085728-Checkouts-overview">
                  integration through Stripe
                </OutboundLink>
                . This payment integration is super slick as it allows you to
                connect a (free) Stripe account to your Leadpages dashboard.
                Then, you can easily pull in the products and services you’d
                like to sell—all without touching a lick of code!
              </StyledParagraphSmall>
              <StyledH3>Kajabi:</StyledH3>
              <StyledParagraphSmall>
                Where Kajabi shines is its email builder. This is a unique
                feature, as it allows users to integrate email to their
                campaigns with ease. Kajabi also has campaign automation with
                custom triggers as well as the ability to tag customers based on
                behavior, so users can create unique use-cases for each consumer
                action. This platforms’ users can rest assured the top open
                rates for their email, as it has built-in email A/B testing to
                find the best email element combinations.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Beyond this, Kajabi offers a marketing pipeline builder to
                ensure its users are building a steady stream of clients.
                Similar to Leadpages, the platform hosts the ability for users
                to create exit pop-ups and two step opt-ins built into page
                layouts.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                It’s a tie! Both have top-notch conversion abilities, and users
                can create pop-ups and deliver lead magnets through either
                service. Each shines in different ways...
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Kajabi has built-in email funnel functions that are unmatched
                from many other conversion marketing platforms. Kajabi’s email
                marketing tools include pipeline builders that help users fill
                their customer sales pipeline with ease.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Where Leadpages shines is in our A/B testing for landing pages
                whereas Kajabi uses A/B testing for just email campaigns.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Publishing options */}
            <SectionWrapper name="publishing-options">
              <StyledSectionTitleH2>
                5 - Publishing options: flexibility & ease of publishing
                finished content
              </StyledSectionTitleH2>
              <StyledH3>Us:</StyledH3>
              <StyledParagraphSmall>
                We offer a plethora of publishing options. In fact, each
                Leadpages account comes with free hosting on a custom subdomain
                (https://your-domain.lpages.co), so you can easily differentiate
                your pages from a crowd.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Our platform’s benefit is getting online quickly and easily
                without worrying about purchasing or configuring a domain, or
                hosting capabilities. In fact, users can also publish on a
                third-party domain you already own or opt to buy a Leadpages
                annual subscription and receive a free domain for one year
                (through Hover). Plus, every Leadpages account includes a plugin
                you can use to install your landing pages, pop-ups, and alert
                bars through Wordpress. In doing this, we make it easy for users
                because you can publish your page in dynamic HTML, which
                automatically updates when edits are published in Leadpages.
              </StyledParagraphSmall>
              <StyledImage image={publishingOptions} />
              <StyledParagraphSmall>
                With our platform, you can also share landing page or website
                templates with your team or clients (at no additional cost) to
                maximize team visibility.
              </StyledParagraphSmall>
              <StyledImage image={shareSitesAndPages} />
              <StyledH3>Kajabi:</StyledH3>
              <StyledParagraphSmall>
                Point blank, Kajabi is pretty similar to Leadpages in this
                category. Publishing is as easy as 1,2,3 with Kajabi. Why? The
                platform gives each user a free domain, or the option of
                connecting a custom domain. Users can also publish pages
                directly through Kajabi with a free domain or with your existing
                domain.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>It’s a tie!</StyledParagraphSmall>
              <StyledParagraphSmall>
                You can publish your site or landing pages easily with both of
                these platforms. With both platforms, you are offered a free
                domain as well as the ability to connect a custom domain.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Get traffic */}
            <SectionWrapper name="traffic-and-advertising">
              <StyledSectionTitleH2>
                6 - Get traffic: promote content after it&apos;s published
              </StyledSectionTitleH2>
              <StyledH3>Us:</StyledH3>
              <StyledParagraphSmall>
                After you build your page, attracting web traffic requires
                promotion. Thus, it’s extra-important to choose a platform that
                helps you after you publish your landing or web page. Very few
                businesses “make it” without maintaining a healthy flow of
                traffic, leads, and sales. But, Leadpages is here to help.
              </StyledParagraphSmall>
              <StyledImage image={realTimeAnalytics} />
              <StyledParagraphSmall>
                In fact, gaining and monitoring traffic is a cinch with
                Leadpages.{' '}
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Why? First and foremost, you can leverage our streamlined
                analytics dashboard, real-time analytics, and zero limits on
                traffic and lead volume, meaning you’ll never hit ceilings or
                pay more for the traffic and leads you collect. Users have
                visibility into their earnings. In fact, you can see them in
                real-time using our checkout widget. In addition, our{' '}
                <OutboundLink href="https://www.leadpages.com/blog/landing-page-speed/">
                  lightning-fast page load speeds
                </OutboundLink>{' '}
                of 2.4 seconds faster than average to make sure traffic is not
                bouncing away from your site and is ranking on Google.
              </StyledParagraphSmall>
              <StyledImage image={fastPageLoadSpeeds} />
              <StyledParagraphSmall>
                Another enticing feature is our{' '}
                <OutboundLink href="https://www.leadpages.com/blog/landing-page-seo-rank/">
                  Search engine optimization
                </OutboundLink>{' '}
                aid. Any Leadpages plan can use our SEO settings and previews.
                With this feature, users can set the meta-title, keywords, and
                meta-description of any page to up the chances of Google
                indexing your site at the top of search results.
              </StyledParagraphSmall>
              <StyledImage image={seoSettings} />
              <StyledH3>Kajabi:</StyledH3>
              <StyledParagraphSmall>
                Kajabi offers a real-time analytics dashboard to track every
                visitor’s action. It’s especially targeted for selling online
                courses, as it outlines net revenue, subscription metrics,
                opt-ins, offers sold. As well as lead profiles, which lets users
                customize information on each lead.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Again, in terms of offerings, it’s a tie.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Kajabi’s analytics dashboard is geared towards delivering online
                courses on a subscription basis. Leadpages gives a full picture
                of your page or web site’s analytics, insight into the views,
                unique views, conversions, and conversion rates.{' '}
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Both platforms build SEO settings right into their homepage
                settings and integrate with third-party analytics, but only
                Leadpages guarantees unlimited leads and traffic.{' '}
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Long story short, if you’re expecting it to rain leads, go with
                Leadpages as the platform doesn’t cap the number of leads. If
                you’re selling a subscription-based online course, however, you
                may want to choose Kajabi.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Bang for your buck */}
            <SectionWrapper name="value">
              <StyledSectionTitleH2>
                7 - Bang for your buck: value for money
              </StyledSectionTitleH2>
              <StyledH3>Us:</StyledH3>
              <StyledParagraphSmall>
                So, what’s the investment in Leadpages look like? There are
                tiers to suit every budget. We offer standard, pro, and advanced
                plans; available for purchase by month or year. And no matter
                what plan you’re on—you get unlimited traffic, leads, and
                landing page publishing.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Looking for an extra helping hand? Our customer support team can
                be there for you via email, chat, and priority phone, and based
                on your plan level. The same goes for our exclusive marketing
                education training.
              </StyledParagraphSmall>
              <StyledH3>Kajabi:</StyledH3>
              <StyledParagraphSmall>
                Kajabi has a similar pricing model, charging its users per month
                or year. Here is a breakdown of its cost per month, based on
                plan tier. Kajabi is roughly three to four times more expensive
                than Leadpages.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                With each plan, Kajabi University courses are available, as well
                as 24/7 chat support. Membership and affiliate programs are
                supported, too, making this a draw for those selling online
                courses.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                In terms of the number of websites you can build, you will find
                much more room for growth with Leadpages. On Kajabi’s highest
                tiered plan you can only build 3 websites, whereas Leadpages
                allows for up to 50.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Kajabi has a higher price tag than most of Leadpages plans,
                which can be justified by their specialization in online course
                building and marketing pipeline features. They support you
                through creating your own education software essentially, which
                is great for educators or experts. Leadpages on the other hand
                drives home the conversion aspect, as they have a wider variety
                of built-in integrations, as well as Leadmeter, a built-in
                conversion optimizer, so you can find what works best for your
                business.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Final verdict */}
            <SectionWrapper id="last-section" name="final-verdict">
              <StyledSectionTitleH2>The final verdict</StyledSectionTitleH2>
              <StyledParagraphSmall>
                So, is the final winner Leadpages or Kajabi? The answer is, of
                course, depends on what you’re looking for:
              </StyledParagraphSmall>
              <SmallHeadline>
                <PurpleText>Leadpages</PurpleText> is what you are looking for
                if:
              </SmallHeadline>
              <SiloCheckMarkList
                checkList={checkMarkContent.finalVerdict.leadpages}
              />
              <SmallHeadline>Kajabi will get the job done if:</SmallHeadline>
              <SiloCheckMarkList
                checkList={checkMarkContent.finalVerdict.competitor}
                competitor
              />
            </SectionWrapper>
            <SiloPromoBlock overridePromoContent={overridePromoContent} />

            {/* Navigation Cards Section */}
            <SiloBackAndForthNavCards
              heading={bottomNavigationData.heading}
              backToUrl={bottomNavigationData.backToUrl}
              backToTitle={bottomNavigationData.backToTitle}
              backToSuperTitle={bottomNavigationData.backToSuperTitle}
              nextUrl={bottomNavigationData.kajabi.nextUrl}
              nextTitle={bottomNavigationData.kajabi.nextTitle}
              nextSuperTitle={bottomNavigationData.nextSuperTitle}
            />
          </MainContainer>
        </BodyContainer>
      </InnerContainer>
      <ReadyToGrow
        headline="Experience Leadpages for Yourself"
        caption="Start your risk-free trial and find out if leadpages is the right fit for you and your business"
      />
    </OuterContainer>
  </>
)

export default LeadpagesVsKajabi
