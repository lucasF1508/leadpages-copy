import React from 'react'
// Components
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
import leadpages1000Integrations from '@legacy/assets/images/comparisons/1000-Integrations-815px@2x.png'
import ABTesting from '@legacy/assets/images/comparisons/A-B-Testing-815px@2x.png'
import domains from '@legacy/assets/images/comparisons/Domains-815px@2x.png'
import seoSettings from '@legacy/assets/images/comparisons/SEO-Settings-815px@2x.png'
import realTimeAnalytics from '@legacy/assets/images/comparisons/Real-time-Analytics-815px@2x.png'
import templatesAndCustomizability from '@legacy/assets/images/comparisons/templates&customizability-815px@2x.png'
import clickfunnelsSVG from '@legacy/assets/images/comparisons/logos/clickfunnels.svg'
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
    title: 'Leadpages vs. ClickFunnels',
  },
  menu: {
    title_closed: 'Jump to a Section...',
    title_open: 'Jump to a Section...',
  },
}

const breadcrumbs = {
  currentPageName: 'ClickFunnels',
  parentPageName: 'Comparisons',
  parentPageLink: '/comparisons',
}

const checkMarkContent = {
  finalVerdict: {
    leadpages: [
      'You’re an entrepreneur or a small business owner looking to build landing pages, an entire website, or both!',
      'You want to effectively and effortlessly collect leads.',
      'You don’t want to pay more for the number of website visitors you have, leads you collect, or pages you publish.',
      'You don’t have design or coding skills but want to make your landing pages and conversion funnel attractive, professional, and stand out from the competition.',
      'You’re looking to collect leads through adding alert bars, pop-ups, or opt-in forms on a page you already own. ',
      'You value having a support team that strives for your success.',
    ],
    competitor: [
      'You’re marketing a business, or are a digital marketer yourself, and want to visualize pages as funnels.',
      'You want a pre-built sales or webinar funnel template ready at your fingertips to create an entire funnel.',
      'You require gated, membership-only content to offer to your customers, and you don’t want to connect to a third-party platform.',
      'You’re looking to create high-converting pages and/or hack funnels.',
      'You want to set up your own affiliate program to incentivize others to promote your product or service.',
      'You want access to a community of template and marketing funnel designers.',
    ],
  },
}

const LeadpagesVsClickfunnels = () => (
  <>
    <SiloHeader title={verbiage.main.title} breadcrumbs={breadcrumbs} />
    <OuterContainer>
      {/* Desktop Menu Bar */}
      <SiloComparisonDesktopMenu
        pageRoutes={pageLinks}
        verbiage={verbiage}
        competitorImage={clickfunnelsSVG}
      />
      {/* Desktop Sidebar Menu */}
      <SidebarStyled
        pageRoutes={pageLinks}
        competitorImage={clickfunnelsSVG}
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
                Ever wonder how{' '}
                <Link href="/" passHref legacyBehavior>
                  <ArticleLink>Leadpages</ArticleLink>
                </Link>{' '}
                stacks up against ClickFunnels? As two major players in the
                conversion marketing platform industry, we wanted to see how
                they compare to one another.
              </StyledParagraphLarge>
              <StyledParagraphSmall>
                We won’t add fluff to this comparison, fill the page with clunky
                jargon, or stack the deck in our favor.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                After all, we want the same thing you do—success for your online
                business, so you can fulfill your dream of being a
                self-sustained, thriving entrepreneur. This means helping you
                pick the tool that allows you to sell more, even if it’s not
                ours.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Read on and we’ll compare seven elements we believe are the most
                important to consider when choosing a conversion marketing
                platform.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                <em>
                  Note: comparisons in this article were last updated in January
                  2022.
                </em>
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Ease of use */}
            <SectionWrapper name="ease-of-use">
              <StyledSectionTitleH2>1 - Ease of Use</StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                Leadpages’ primary mission is to make it easy to build landing
                pages and websites. So the tools were engineered in a way that
                someone with little-to-no design experience can create and
                publish a page in one day.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                The{' '}
                <OutboundLink href="https://support.leadpages.net/hc/en-us/articles/217415887-Build-a-landing-page">
                  Drag & Drop Builder
                </OutboundLink>{' '}
                allows you to do in just a few minutes what used to take hours.
                The platform doesn’t require any design or coding knowledge,
                making it the ideal choice for non-designers looking for a
                struggle-free experience. Built on a system of sections, rows,
                and columns, it’s easy to customize your template and move
                various elements into place.
              </StyledParagraphSmall>
              <StyledWistia videoId="ago55021i9" />
              <StyledParagraphSmall>
                As you build your landing pages, Leadpages’ built-in Leadmeter
                tells you how likely your page is to convert traffic into leads,
                while also providing tips to help you optimize your conversion
                rate.
              </StyledParagraphSmall>
              <StyledH4>ClickFunnels:</StyledH4>
              <StyledParagraphSmall>
                ClickFunnels also offers a simple building experience with a
                similarly swift and intuitive process. It utilizes drag-and-drop
                editing based on rows and columns, along with pre-designed
                funnel templates. Those of you who don’t have design or code
                skills will definitely appreciate the user experience
                ClickFunnels offers when building landing pages and funnels for
                your business.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                You don’t need to know anything about code with either of these
                services—what you see is what your page will look like. Both
                Leadpages and ClickFunnels are great options for beginners with
                limited knowledge of web design, coding, or conversion tools.
                They also operate with a similar drag-and-drop editor and a
                system of columns and rows. And for those of you who need more
                control over your design, you can use CSS or HTML features in
                either platform.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                But, there’s one important difference that gives Leadpages an
                edge: Leadmeter. Because it predicts the performance of your
                page and provides customized tips to maximize conversions, it
                goes a long way in eliminating the guesswork.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Functionality */}
            <SectionWrapper name="functionality">
              <StyledSectionTitleH2>2 - Functionality</StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                While Leadpages positions itself as a simple solution for
                entrepreneurs and small business owners, it’s actually quite a
                robust platform that’s more capable than many “simplified”
                software solutions.
              </StyledParagraphSmall>

              <StyledParagraphSmall>
                Leadpages integrates with 90 different tools and
                platforms—including all major email service providers (ESPs),
                customer relationship management tools (CRMs), webinar
                platforms, social networks, and checkouts via Stripe. That’s in
                addition to the more than 2,000 integrations available through
                Zapier. You can also customize your integrations with CSS.
              </StyledParagraphSmall>
              <StyledImage image={leadpages1000Integrations} />
              <StyledParagraphSmall>
                As an added bonus, Leadpages stores data from your integrations
                and resends it if the app is down. This helps ensure you stay up
                and running, even if one of your tools is having technical
                issues.
              </StyledParagraphSmall>
              <StyledH3>ClickFunnels:</StyledH3>
              <StyledParagraphSmall>
                ClickFunnels has a strong library of integrations that includes
                popular ESPs, CRMs, webinar platforms, social networks, and many
                third-party options. ClickFunnels also has broader payment
                integration options, including Stripe, Paypal, and more.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Like Leadpages, you have access to many more integrations
                through Zapier.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Both Leadpages and ClickFunnels offer integrations with the most
                popular digital marketing tools. While Leadpages has a few more
                native integrations, the fact that both platforms work with
                Zapier levels the playing field. No matter which option you
                choose you’ll have no problem integrating it with your favorite
                apps.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Look & feel */}
            <SectionWrapper name="look-and-feel">
              <StyledSectionTitleH2>3 - Look & feel</StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                Leadpages’ design experience is based on the user’s comfort
                level. A page design can be either simple and template-driven,
                or as sprawling and sophisticated as it needs to be.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Leadpages’{' '}
                <Link href="/templates" passHref legacyBehavior>
                  <ArticleLink>large number of template choices</ArticleLink>
                </Link>{' '}
                provides a lot of polished options that can accomodate most
                business types—ensuring you end up with a design that works with
                your brand and business.
              </StyledParagraphSmall>
              <StyledImage image={templatesAndCustomizability} />
              <StyledParagraphSmall>
                Templates can be sorted by newest, conversion rate, and
                popularity. You can also toggle between different page types,
                industry types, and colors. Each template is scientifically
                optimized for conversions with clean and simple designs.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                All content is mobile responsive, and displays optimally on
                desktops, tablets, and phones. A multi-device preview is
                automatically generated, so no additional steps are necessary to
                ensure that your site or page works on different screen sizes.
                There’s also device-specific display settings, allowing you to
                show or hide certain sections on different devices.
              </StyledParagraphSmall>
              <StyledWistia videoId="7urnhosr4y" />
              <StyledParagraphSmall>
                In addition to page templates, Leadpages includes section
                templates that can be added to any existing page. This greatly
                reduces the time it takes to add more content, while keeping a
                consistent look with the rest of the page.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                When creating a full marketing funnel, Leadpages allows page
                duplication and easy page-to-page connection inside the form and
                link settings. This lets you create simple and complex funnels
                (including upsell and downsell offers).
              </StyledParagraphSmall>

              <StyledH3>ClickFunnels:</StyledH3>
              <StyledParagraphSmall>
                ClickFunnels features hundreds of templates sorted by
                single-page or whole funnels. From there, they break the
                templates into categories like sales, opt-in, membership,
                product launch, and more.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                The big difference is that, instead of sorting by template or
                page type, ClickFunnels approaches these as funnel types which
                include product launch, video sales letter, squeeze page,
                two-step tripwire, webinar, and auto-webinar.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                With their funnel templates, ClickFunnels makes it easier to
                create and “see” the pathway of your marketing funnel.
              </StyledParagraphSmall>

              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                It’s essentially a tie when it comes to the look and feel of
                Leadpages and ClickFunnels. They both have a large variety of
                templates (or funnels) to choose from, with top-notch
                sortability. Mobile-friendliness is great with both tools. All
                templates within these platforms are automatically optimized for
                mobile, tablet, and desktop versions of your page.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Where ClickFunnels has an edge:
              </StyledParagraphSmall>
              <UL>
                <ListItem>
                  Their polished suite of sales funnel templates to streamline
                  every aspect of a marketing funnel into one, sleek template.
                </ListItem>
                <ListItem>
                  They make it easier for marketers with more complex funnels to
                  see the various steps.
                </ListItem>
              </UL>
              <StyledParagraphSmall>
                Where Leadpages has an edge:
              </StyledParagraphSmall>
              <UL>
                <ListItem>
                  The selection is better suited for modern and unique templates
                  beyond the internet marketing space.
                </ListItem>
                <ListItem>
                  Defaulted to sort by conversion rate to make your choice of
                  template easier.
                </ListItem>
              </UL>
            </SectionWrapper>
            {/* Conversion tools: collect leads and close sales */}
            <SectionWrapper name="conversion-tools">
              <StyledSectionTitleH2>4 - Conversion tools</StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                Leadpages uses a “conversion toolkit” that makes it easy to turn
                web traffic into leads and sales, even if you have no coding,
                design, or conversion optimization experience. These tools
                include:
              </StyledParagraphSmall>
              <UL>
                <ListItem>
                  <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/360019181932-Leadmeter">
                    <strong>Leadmeter:</strong>
                  </OutboundLink>{' '}
                  predicts how well your page will perform and tells you what to
                  tweak before you publish it.
                  <StyledImage image={leadmeterExcellent} />
                </ListItem>
                <ListItem>
                  <Link href="/product/alert-bars" passHref legacyBehavior>
                    <ArticleLink>
                      <strong>Alert bars:</strong>
                    </ArticleLink>
                  </Link>{' '}
                  promote lead magnets, webinars, special events, and more with
                  top-of-page text bars.
                </ListItem>
                <ListItem>
                  <Link href="/product/pop-up-builder" passHref legacyBehavior>
                    <ArticleLink>
                      <strong>Pop-up forms:</strong>
                    </ArticleLink>
                  </Link>{' '}
                  capture the attention of visitors on any page and prompt them
                  to opt in to your email list or offer.
                </ListItem>
              </UL>
              <StyledParagraphSmall>
                Leadpages also tracks your conversions, provides shopping cart
                integrations through Stripe, offers unlimited A/B testing (with
                the Pro plan) and includes a lead magnet delivery feature.
              </StyledParagraphSmall>
              <StyledImage image={ABTesting} />
              <StyledH3>Clickfunnels:</StyledH3>
              <StyledParagraphSmall>
                ClickFunnels is designed to help you create effective funnels
                that result in leads and sales. So as you’d expect, they offer a
                fair number of conversion tools. They provide many of the same
                features Leadpages does, including:
              </StyledParagraphSmall>
              <UL>
                <ListItem>Pop-ups</ListItem>
                <ListItem>A/B testing</ListItem>
                <ListItem>Analytics</ListItem>
                <ListItem>Order bumps</ListItem>
                <ListItem>Lead magnet delivery</ListItem>
              </UL>
              <StyledParagraphSmall>
                While ClickFunnels doesn’t offer alert bars or an equivalent to
                the Leadmeter, they do support many different payment processors
                including Stripe, PayPal, and credit card. ClickFunnels also
                offers one-click upsells.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Here are the similarities:
              </StyledParagraphSmall>
              <UL>
                <ListItem>
                  You can create a conversion funnel, a series of pages targeted
                  at converting customers.
                </ListItem>
                <ListItem>
                  A/B split testing is available, which allows you to test the
                  effectiveness of your page as well as certain elements such as
                  buttons or headlines.
                </ListItem>
                <ListItem>
                  Both support lead magnet delivery and payment gateway
                  integrations.
                </ListItem>
              </UL>
              <StyledParagraphSmall>
                For most small business owners, Leadpages has a slight edge in
                advanced conversion tools such as alert bars and the Leadmeter.
                However, ClickFunnels’ wide range of e-commerce options provides
                increased flexibility for those with more complicated businesses
                .
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Publishing options */}
            <SectionWrapper name="publishing-options">
              <StyledSectionTitleH2>
                5 - Publishing options
              </StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                Leadpages offers a number of flexible publishing options. Every
                account comes with free hosting on a custom leadpages subdomain
                (such as: https://your-domain.lpages.co). You can also publish
                on a third-party domain that you already own, or purchase a
                Leadpages annual subscription and receive a{' '}
                <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/360029210551-Free-custom-domain-offer">
                  free domain for one year (powered by Hover)
                </OutboundLink>
                .
              </StyledParagraphSmall>
              <StyledImage image={domains} />
              <StyledParagraphSmall>
                In addition, every Leadpages account includes a plugin you can
                use to install your landing pages, pop-ups, and alert bars on
                your WordPress sites. You can even publish your page as a
                dynamic HTML page (which automatically updates when edits are
                published in Leadpages).
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Leadpages also makes it easy to share a landing page or website
                template with your team or clients at no additional cost.
              </StyledParagraphSmall>
              <StyledH3>ClickFunnels:</StyledH3>
              <StyledParagraphSmall>
                With ClickFunnels, you can host your page directly through the
                platform, add your own domain, use a WordPress plugin, or
                register a new domain using your ClickFunnels account.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Want to let multiple users in on your project? ClickFunnels
                offers multi-user permissions such as global account settings,
                follow-up funnels, contacts, sales, or Backpack.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                It’s another tie! Leadpages and ClickFunnels are able to host
                your landing page or funnel for you, or you can use your own
                domain or a third party. If you need to purchase a domain you
                can do so directly through ClickFunnels or sign up for an annual
                Leadpages plan and get it for free. With ClickFunnels you can
                also add people to your account under seven different
                permissions.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Get traffic */}
            <SectionWrapper name="traffic-and-advertising">
              <StyledSectionTitleH2>
                6 - Traffic & advertising
              </StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                Measuring your traffic after you publish your page is critical
                to maintaining a healthy flow of leads.
              </StyledParagraphSmall>
              <StyledImage image={realTimeAnalytics} />
              <StyledParagraphSmall>
                Leadpages’ streamlined dashboard and real-time analytics allows
                you to keep a close eye on the performance of your page. You can
                also see actual earnings through the checkout widget with Pro
                and Advanced plans.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Another great feature is{' '}
                <OutboundLink href="https://www.leadpages.net/blog/landing-page-seo-rank/">
                  search engine optimization
                </OutboundLink>{' '}
                guidance. Every plan provides access to SEO settings and
                previews, in which you can set the title, keywords, and
                description of any page to increase the chances of Google
                indexing your site on its first page. Setting H1, H2, and H3
                tags is intuitive with any text widget, and adding image
                alt-text is also easy within image editor.
              </StyledParagraphSmall>
              <StyledImage image={seoSettings} />
              <StyledH3>ClickFunnels:</StyledH3>
              <StyledParagraphSmall>
                ClickFunnels has a slick stats page with performance updates
                such as traffic, conversions, and earnings per click. The
                platform also walks you through its analytics features with
                informative videos to help you better understand how to take
                advantage of all the data.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Like Leadpages, ClickFunnels gives you tools to edit your
                metadata and text hierarchy, allowing you to better optimize
                your pages for Google searches.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Both Leadpages and ClickFunnels offer real-time analytics and a
                dashboard that clearly shows traffic, conversion rates, and
                earnings per click. The SEO options are also virtually
                identical, making this too close to call.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Bang for your buck */}
            <SectionWrapper name="value">
              <StyledSectionTitleH2>7 - Value</StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                Leadpages has different pricing tiers to suit every budget. A
                Standard plan comes in at $37 per month and Pro accounts are $74
                per month (billed annually). No matter which plan you’re on, you
                get unlimited traffic, leads, and landing page publishing.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Looking for some extra help? Customer support via email, chat,
                and priority phone is available based on plan level. Leadpages
                support teams are based in Minneapolis and Victoria, Canada.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Customers can attend weekly marketing education training for
                group conversion coaching—all included with any plan. Most
                training provided by Leadpages is available free for all
                customers.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Reliability is a key area to consider when comparing the value
                of your marketing tools. A look through the history of{' '}
                <OutboundLink href="https://status.leadpages.com/">
                  Leadpages status update page
                </OutboundLink>{' '}
                shows rare and quickly resolved issues. Leadpages runs on Google
                Cloud, which makes it extremely dependable.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                If an integrated app fails (such as an email service provider),
                in most cases Leadpages successfully re-submits lead data to the
                restored app.
              </StyledParagraphSmall>
              <StyledH3>ClickFunnels:</StyledH3>
              <StyledParagraphSmall>
                On the flip side, ClickFunnel’s Basic pricing is $97 per month
                (with a limit of 20 funnels, 100 pages, 20,000 visitors) and
                their Platinum plan is $297 per month (unlimited funnels and
                pages).
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                ClickFunnels support is provided via email and live chat,
                depending on the subscription level.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Additional training, such as their One Funnel Away Challenge is
                offered periodically for an additional fee.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Some other features worth mentioning in the Platinum plan are:
              </StyledParagraphSmall>
              <UL>
                <ListItem>
                  Actionetics, a communication system that supports email
                  triggers or action funnels.
                </ListItem>
                <ListItem>
                  Backpack, ClickFunnels’ built-in affiliate program available
                  for you to incentivize others to promote your product or
                  service
                </ListItem>
                <ListItem>Ability to lock membership content</ListItem>
                <ListItem>
                  ClickFunnels Marketplace where users within the community
                  share their page designs for extra payment.
                </ListItem>
              </UL>
              <StyledParagraphSmall>
                To evaluate ClickFunnels’ reliability, visit their status update
                page{' '}
                <OutboundLink href="https://status.clickfunnels.com/">
                  {' '}
                  here
                </OutboundLink>
                . Incidents happen more frequently than on Leadpages, and are
                typically resolved in a few hours. ClickFunnels is built on
                Amazon Web Services and Cloudflare.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                ClickFunnels is more costly than Leadpages, but it comes with
                additional options that may be relevant to your business model.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                ClickFunnels does the work of combining several aspects of a
                sales funnel into pre-designed templates. A bonus feature of
                ClickFunnels is the built-in affiliate program, which allows you
                to incentivize others to promote your product or service, as
                well as their template marketplace where you can gain access to
                community designs.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                You can also create a membership-only site directly within
                ClickFunnels. However, this is easily achieved with Leadpages
                integrations with Teachable, Thinkific, and other course
                platforms via Zapier.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Despite being the more affordable option, Leadpages offers a
                number of features that ClickFunnels doesn’t, including the
                Leadmeter, alert bars, and unlimited traffic and leads across
                all plans. Pretty much anything you can do with ClickFunnels you
                can do with Leadpages, either natively or with the help of one
                of their many integrations, at a lower price.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                And if support and reliability are key deciding factors for you,
                then Leadpages tips the scales.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Final verdict */}
            <SectionWrapper id="last-section" name="final-verdict">
              <StyledSectionTitleH2>The final verdict</StyledSectionTitleH2>
              <StyledParagraphSmall>
                So, is the final winner Leadpages or ClickFunnels? The answer
                depends on your needs and your business.
              </StyledParagraphSmall>
              <SmallHeadline>
                Use <PurpleText>Leadpages</PurpleText> if:
              </SmallHeadline>
              <SiloCheckMarkList
                checkList={checkMarkContent.finalVerdict.leadpages}
              />
              <SmallHeadline>Use ClickFunnels if:</SmallHeadline>
              <SiloCheckMarkList
                checkList={checkMarkContent.finalVerdict.competitor}
                competitor
              />
              <StyledParagraphSmall>
                Thinking about giving Leadpages a try?{' '}
                <OutboundLink href="https://lp.leadpages.com/free-trial/">
                  Sign up for a 14-day free trial
                </OutboundLink>{' '}
                to see if Leadpages is the right fit for your business.
              </StyledParagraphSmall>
            </SectionWrapper>
            <SiloPromoBlock overridePromoContent={overridePromoContent} />

            {/* Navigation Cards Section */}
            <SiloBackAndForthNavCards
              heading={bottomNavigationData.heading}
              backToUrl={bottomNavigationData.backToUrl}
              backToTitle={bottomNavigationData.backToTitle}
              backToSuperTitle={bottomNavigationData.backToSuperTitle}
              nextUrl={bottomNavigationData.godaddy.nextUrl}
              nextTitle={bottomNavigationData.godaddy.nextTitle}
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

export default LeadpagesVsClickfunnels
