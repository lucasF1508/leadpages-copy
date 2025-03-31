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
import calendlyScheduling from '@legacy/assets/images/comparisons/Calendly-Scheduling-815px@2x.png'
import realTimeAnalytics from '@legacy/assets/images/comparisons/Real-time-Analytics-815px@2x.png'
import fastPageLoadSpeeds from '@legacy/assets/images/comparisons/Fast-Page-Load-Speeds-815px@2x.png'
import customHtmlCss from '@legacy/assets/images/comparisons/CustomHTML-CSS-815px@2x.png'
import leadmeterExcellent from '@legacy/assets/images/comparisons/Leadmeter-Excellent-815px@2x.png'
import leadpages1000Integrations from '@legacy/assets/images/comparisons/1000-Integrations-815px@2x.png'
import purchaseTraining from '@legacy/assets/images/comparisons/purchase-training-815px@2x.png'
import publishingOptions from '@legacy/assets/images/comparisons/Publishing-Options-815px@2x.png'
import shareSitesAndPages from '@legacy/assets/images/comparisons/Share-Sites&Pages-815px@2x.png'
import seoSettings from '@legacy/assets/images/comparisons/SEO-Settings-815px@2x.png'
import unbounceSVG from '@legacy/assets/images/comparisons/logos/unbounce.svg'
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
} from '@legacy/components/silos/SiloComparisonGlobalStyles'

const verbiage = {
  main: {
    title: 'Leadpages vs. Unbounce',
  },
  menu: {
    title_closed: 'Jump to a Section...',
    title_open: 'Jump to a Section...',
  },
}

const breadcrumbs = {
  currentPageName: 'Unbounce',
  parentPageName: 'Comparisons',
  parentPageLink: '/comparisons',
}

const checkMarkContent = {
  finalVerdict: {
    leadpages: [
      'You want the option to build a landing page and an entire website under one roof.',
      "You're a small business owner or entrepreneur without a large marketing budget or team.",
      'You want a truly DIY-friendly web publishing solution.',
      'You don’t want to be limited as to the number of web visitors, leads, or landing pages.',
      'You want to sell your products and services online and value a built-in checkout solution. ',
      'You want a painless, intuitive grid layout to easily design your page with.',
      'You value having a support team that goes above and beyond, and weekly conversion coaching to help you grow.',
    ],
    competitor: [
      'You are only interested in building landing pages and supporting lead forms, not websites.',
      'You’re comfortable with a free-form editor and want the freedom that greater customization options offer.',
      'You value AMP landing pages for mobile and don’t mind paying a premium for them.',
      'You work with a large team and need a different set of permissions for each member.',
      'You don’t mind paying for more features or increased traffic and publishing as you grow.',
    ],
  },
}

const LeadpagesVsUnbounce = () => (
  <>
    <SiloHeader title={verbiage.main.title} breadcrumbs={breadcrumbs} />
    <OuterContainer>
      {/* Desktop Menu Bar */}
      <SiloComparisonDesktopMenu
        pageRoutes={pageLinks}
        verbiage={verbiage}
        competitorImage={unbounceSVG}
      />
      {/* Desktop Sidebar Menu */}
      <SidebarStyled
        pageRoutes={pageLinks}
        competitorImage={unbounceSVG}
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
                Whether you need landing pages to drive more email signups,
                promote an upcoming event, or get more leads into your funnel,
                Leadpages and Unbounce are two worthy options to consider.
              </StyledParagraphLarge>
              <StyledParagraphLarge>
                But, how do Leadpages and Unbounce stack up against each other?
              </StyledParagraphLarge>
              <StyledParagraphSmall>
                We’ve put these two conversion-focused landing page builders
                head to head to see which one is right for your needs and
                budget. We’ll take into account seven major criteria that are
                most important to small businesses when evaluating conversion
                marketing platforms.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Right out of the gate, both Leadpages and Unbounce are solid
                platforms. They each offer the ability to build landing pages
                that are designed to convert traffic into leads and sales.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                They’ve also both stood the test of time as leaders in this
                space. Unbounce launched their builder in 2010, Leadpages in
                early 2013.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                But while they’re both excellent at what they do, there are key
                differences that need to be considered. So, let’s take a closer
                look at these two platforms to see what they have to offer.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                <em>
                  Note: Comparisons presented on this page were last updated in
                  January 2022, and feature Leadpages vs. Classic Unbounce.
                </em>
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Ease of use */}
            <SectionWrapper name="ease-of-use">
              <StyledSectionTitleH2>1 - Ease of Use</StyledSectionTitleH2>
              <StyledH3>Leadpages</StyledH3>

              <StyledParagraphSmall>
                Literally anyone can use Leadpages to build and publish a
                landing page in one day or less. No design experience needed. No
                coding chops required. If you can use a mouse and keyboard you
                can use Leadpages.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Leadpages’{' '}
                <OutboundLink href="https://support.leadpages.net/hc/en-us/articles/217415887-Build-a-landing-page">
                  Drag-&-Drop Builder
                </OutboundLink>{' '}
                makes it easy to move content around, add page elements, and
                make edits quickly. So instead of taking days to build a landing
                page, you can do it in a few hours.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                And because it’s built on a system of sections, rows, and
                columns, content snaps into place and looks professionally made.
                The tool is very intuitive, straightforward, and ideal for
                non-web designers.
              </StyledParagraphSmall>
              <StyledWistia videoId="l2c84h4wlk" />
              <StyledParagraphSmall>
                All of Leadpages’ templates are built for conversion. But the{' '}
                <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/360019181932-Leadmeter">
                  Leadmeter
                </OutboundLink>{' '}
                takes it one step further by predicting how well your page will
                convert as you build it. It provides you with guidelines and
                step-by-step recommendations for your images, copy, and layout
                that are based on best practices—so you know what to tweak as
                you go. This allows you to create a high-converting landing
                page, regardless of your conversion optimization experience.
              </StyledParagraphSmall>
              <StyledImage image={leadmeterExcellent} />
              <StyledParagraphSmall>
                Want a little more customization? While beginners don’t need to
                touch a line of code, experienced coders can customize designs
                using the HTML widget and CSS customizations if they wish. You
                can also upload custom fonts to get the exact vibe you want.
              </StyledParagraphSmall>
              <StyledImage image={customHtmlCss} />
              <StyledH3>Unbounce</StyledH3>
              <StyledParagraphSmall>
                Unbounce is a powerful and flexible landing page builder for
                desktop and mobile devices. While it offers a drag and drop
                interface for newer users, it also allows for deeper
                customization thanks to its JavaScript and CSS capabilities.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                The drag and drop editor is grid-free, which can provide users
                with more flexibility in building pages and placing elements.
                However, more skill and care is required when dropping elements
                into place.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                It’s also worth noting that Unbounce doesn’t offer a comparable
                feature to Leadpages’ Leadmeter. So if you don’t have any
                experience with conversion rate optimization you may need to do
                some additional research before building your first page.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Both platforms do different things well, so it really depends on
                your unique needs.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Leadpages is more suited for those with less web design
                experience. The user-friendly builder and Leadmeter make it
                simple to build an effective landing page in just a few hours,
                even if you’re a complete beginner.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Unbounce’s builder, on the other hand, provides more flexibility
                and customization. If you’re a web design pro this might be more
                to your liking.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Functionality */}
            <SectionWrapper name="integrations">
              <StyledSectionTitleH2>2 - Functionality</StyledSectionTitleH2>
              <StyledH3>Leadpages</StyledH3>
              <StyledParagraphSmall>
                Currently, Leadpages integrates with more than 90 popular online
                marketing tools—that’s in addition to over 2,000 additional
                integrations available via Zapier. This ensures that no matter
                what tools and apps you use for your business, they’ll work
                seamlessly with your Leadpages landing page.
              </StyledParagraphSmall>
              <StyledImage image={leadpages1000Integrations} />
              <StyledParagraphSmall>
                Some of the more popular Leadpages integrations include Stripe
                for payments, Calendly for consultation scheduling, MailChimp
                and AWeber for email marketing, and OpenTable for restaurant
                reservations.
              </StyledParagraphSmall>
              <StyledImage image={calendlyScheduling} />

              {/* Unbounce */}
              <StyledH3>Unbounce</StyledH3>
              <StyledParagraphSmall>
                Unbounce has built up a hefty integration portfolio. With 116
                integrations, including all major ESPs, CRMs, webinar platforms,
                and social networks, this impressive line-up covers virtually
                all of the most popular business and marketing tools available.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Like Leadpages, you can connect additional tools with Zapier,
                providing even more options when it comes to integrations.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Both platforms offer a variety of powerful integrations.
                Ultimately, Unbounce offers more native integrations, but since
                Zapier can be used with both this is essentially a tie.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Look & feel */}
            <SectionWrapper name="look-and-feel">
              <StyledSectionTitleH2>3 - Look & feel</StyledSectionTitleH2>
              <StyledH3>Leadpages</StyledH3>
              <StyledParagraphSmall>
                One of the big advantages of using Leadpages is the vast
                template library. The platform offers over{' '}
                <OutboundLink href="https://www.leadpages.com/templates">
                  220 professionally designed landing page templates
                </OutboundLink>{' '}
                (plus over 50 website templates) to choose from.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                All the templates have been created with conversions in mind, so
                you know whichever one you choose will deliver the results
                you’re looking for. Leadpages also makes finding the right
                template easy, with the ability to sort them by industry, style,
                and color. Or if you’re solely focused on getting leads you can
                even sort them by conversion rate to find the templates that
                convert the best.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Every template is mobile responsive, so pages look the way
                they’re supposed to on every device. Plus, you can add or hide
                sections depending on which device they’re being viewed on.
              </StyledParagraphSmall>
              <StyledWistia videoId="7urnhosr4y" />
              <StyledH3>Unbounce</StyledH3>
              <StyledParagraphSmall>
                With more than 151 landing page templates, Unbounce gives you
                plenty of options. Their library is categorized into landing
                page templates, sticky bar templates, pop-up templates, or
                AMP-specific designs.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                While you’re not able to sort templates by conversion rate, you
                can filter them by industry, campaign type, name, recent, and
                popular. This makes it easy to find something that aligns with
                your brand, campaign, or promotion.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Page preview is available on desktop and mobile. Some elements
                may need to be edited for mobile directly, unlike Leadpages’
                automatic mobile optimization. However, Unbounce’s mobile
                editing is very intuitive.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                If we’re just looking at the total number of templates,
                Leadpages wins here. They also offer the ability to sort by
                conversion rate, which makes finding the right template a lot
                easier.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                However, there’s more to consider than just the total number of
                templates. Design is a matter of taste, and it’s quite possible
                that you prefer the look and feel of one platform’s designs over
                the other.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                So, we recommend you review both platforms’ template galleries
                to see which one you prefer.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Conversion tools: collect leads and close sales */}
            <SectionWrapper name="conversion-tools">
              <StyledSectionTitleH2>4 - Conversion tools</StyledSectionTitleH2>
              <StyledH3>Leadpages</StyledH3>
              <StyledParagraphSmall>
                Leadpages is, through-and-through, a conversion platform. All of
                its features and products have one single end goal: turning your
                traffic into leads and sales. This is achieved by offering a
                wide range of effective conversion tools:
              </StyledParagraphSmall>
              <UL>
                <ListItem>
                  <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/360019181932-Leadmeter">
                    <strong>Leadmeter:</strong>
                  </OutboundLink>{' '}
                  predicts how well your page will perform and tells you what to
                  tweak before you publish it.
                </ListItem>
                <ListItem>
                  <Link href="/product/alert-bars" passHref legacyBehavior>
                    <ArticleLink>
                      <strong>Alert bars:</strong>
                    </ArticleLink>
                  </Link>{' '}
                  top-of-page text bars you can use to promote lead magnets,
                  special offers, events, and more.
                </ListItem>
                <ListItem>
                  <Link href="/product/pop-up-builder" passHref legacyBehavior>
                    <ArticleLink>
                      <strong>Pop-ups:</strong>
                    </ArticleLink>
                  </Link>{' '}
                  capture the attention of potential customers as they arrive on
                  your site, or as they’re about to leave.
                </ListItem>
              </UL>
              <StyledParagraphSmall>
                Leadpages also offers conversion tracking, unlimited A/B
                testing, and easy payment{' '}
                <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/115007085728-Checkouts-overview">
                  integration through Stripe
                </OutboundLink>
                . And all of that is in addition to hundreds of templates that
                were designed to maximize conversions.
              </StyledParagraphSmall>
              <StyledImage image={purchaseTraining} />
              <StyledParagraphSmall>
                Plus, any customer of Leadpages can use the lead magnet delivery
                feature to send an initial welcome email with a lead magnet to
                new leads and customers.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Finally, Leadpages’ Lead Library allows you to store and find
                lead information quickly and easily, right inside the
                platform—no need to export them (unless you want to).
              </StyledParagraphSmall>
              <StyledH3>Unbounce</StyledH3>
              <StyledParagraphSmall>
                Unbounce—as its name implies—is also all about reducing bounces
                and turning traffic into leads. Their templates are designed to
                convert, so right away you’re set up for success. Unbounce
                offers sticky bars and pop-ups that make it easy to promote
                offers or content downloads. And, A/B testing is available on
                all plan types.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Once you have your leads, Unbounce makes it easy to send that
                information to CRMs and marketing automation tools, such as
                Salesforce, Zoho, HubSpot, Mailchimp, and more.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                As far as conversion tools go, lead magnet delivery, A/B split
                testing, and downloadable .CSV files of opt-in data are
                available on both services. So they’re pretty much on par with
                their lead capture capabilities, although Unbounce does allow
                you more flexibility to customize pop-ups with their free form
                editor.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                The one area that gives Leadpages a slight edge is the
                Leadmeter. By providing real-time tips as you build, this
                Leadpages-specific technology can drastically improve the
                likelihood of your landing page converting.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Publishing options */}
            <SectionWrapper name="publishing-options">
              <StyledSectionTitleH2>
                5 - Publishing options
              </StyledSectionTitleH2>
              <StyledH3>Leadpages</StyledH3>

              <StyledParagraphSmall>
                Leadpages offers many different publishing options. Every
                account comes with free hosting on a custom Leadpages subdomain
                (https://your-domain.lpages.co). You can also publish on a
                third-party domain that you already own, or purchase a Leadpages
                annual subscription and{' '}
                <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/360029210551-Free-custom-domain-offer">
                  receive a free domain for one year (powered by Hover)
                </OutboundLink>
                .
              </StyledParagraphSmall>
              <StyledImage image={publishingOptions} />
              <StyledParagraphSmall>
                Plus, every Leadpages account includes a plugin you can use to
                publish your landing pages, pop-ups, and alert bars on your
                WordPress site. You can even publish your page as a dynamic HTML
                page, which automatically updates when you make changes in
                Leadpages.
              </StyledParagraphSmall>
              <StyledImage image={shareSitesAndPages} />
              <StyledParagraphSmall>
                Want to show your page to other team members? Leadpages makes it
                easy to share a landing page or website template with your team
                or clients (at no additional cost).
              </StyledParagraphSmall>
              <StyledH3>Unbounce</StyledH3>
              <StyledParagraphSmall>
                Similar to Leadpages, with Unbounce you can publish your page to
                a free subdomain, custom domain, or a WordPress site. One unique
                feature is scheduled publishing, which allows you to schedule a
                page to go live at a specific date and time.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Unbounce also makes sharing your page easy with multi-user
                permissions such as admin, author, or viewer. However, the
                lowest plan tier limits the number of users to two.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Side-by-side, the offerings are virtually identical, so we’ll
                call this one a tie. Unbounce has a bit of an advantage with
                scheduled publishing and multi-user permissions. But the fact
                that you can get a free custom domain with Leadpages is a plus.
                It’s also important to note that all Leadpages customers can
                build an entire website within any plan, not just landing pages.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Get traffic */}
            <SectionWrapper name="traffic-and-advertising">
              <StyledSectionTitleH2>
                6 - Traffic & advertising
              </StyledSectionTitleH2>
              <StyledH3>Leadpages</StyledH3>
              <StyledParagraphSmall>
                Leadpages offers an easy-to-understand analytics dashboard with
                real-time data that includes visitors, conversions, and
                conversion rate. So there are a lot of ways to track how well
                your page is performing.
              </StyledParagraphSmall>
              <StyledImage image={realTimeAnalytics} />
              <StyledParagraphSmall>
                Leadpages also gives you tools to improve your{' '}
                <OutboundLink href="https://www.leadpages.com/blog/landing-page-seo-rank/">
                  search engine optimization
                </OutboundLink>
                . Use the SEO settings and previews to edit your meta title,
                keywords, and description to ensure your page is optimized for
                all the most important search terms.
              </StyledParagraphSmall>
              <StyledImage image={seoSettings} />
              <StyledParagraphSmall>
                Another big plus for Leadpages is their{' '}
                <OutboundLink href="https://www.leadpages.com/blog/landing-page-speed/">
                  industry-leading page load speed
                </OutboundLink>{' '}
                (faster by 2.4 seconds on average). Not only does this help with
                SEO, but it lowers your bounce rate and increases conversions.
              </StyledParagraphSmall>
              <StyledImage image={fastPageLoadSpeeds} />

              <StyledH3>Unbounce</StyledH3>
              <StyledParagraphSmall>
                Unbounce has a feature called AMP landing pages, which tells
                Google your page is ultra-fast. So fast, in fact, that it’s
                designated with a gray lightning-bolt logo beside your page in
                Google on mobile devices.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Like Leadpages, Unbounce allows you to easily edit your
                metadata. Simply click “Page Properties” in the builder to
                customize your meta title, keywords, and description.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Finally, Unbounce offers real-time performance analytics that
                includes more in-depth data than the basic information provided
                by Google Analytics.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Both platforms have merits in this department. Real-time
                analytics and a dashboard that clearly shows traffic and
                conversion rates are available for both services.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                However, Unbounce’s AMP templates may help you stand out as they
                ensure top load speeds on mobile. Keep in mind though, that AMP
                is only available on their high end plans which can get quite
                pricey.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                So, if your budget is big and AMP landing pages matter, Unbounce
                is a good choice. But for anyone that’s looking to lower their
                expenses, Leadpages’ page load speeds are excellent.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Bang for your buck */}
            <SectionWrapper name="value">
              <StyledSectionTitleH2>7 - Value</StyledSectionTitleH2>
              <StyledH3>Leadpages</StyledH3>
              <StyledParagraphSmall>
                Value is about more than just who has the lowest price. It’s
                about what you get for that price. So, let’s break it down.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Leadpages has{' '}
                <OutboundLink href="https://www.leadpages.com/pricing">
                  different pricing tiers
                </OutboundLink>{' '}
                to suit every budget. You can purchase a Standard, Pro, or
                Advanced plan on either a monthly or yearly basis. One way
                Leadpages provides a lot of value is that you get unlimited
                traffic, leads, and landing page publishing across all plans.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                You’ll also get a website builder, something Unbounce doesn’t
                offer.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Here’s a breakdown of Leadpages’ plans:
              </StyledParagraphSmall>
              <UL>
                <ListItem>
                  The Standard plan starts at $37/month (when paid annually) and
                  offers everything mentioned above plus a website, free
                  hosting, and all basic features.
                </ListItem>
                <ListItem>
                  The Pro plan costs $74/month (when paid annually) and offers
                  everything mentioned above plus three websites, unlimited A/B
                  testing, and online sales and payments.
                </ListItem>
                <ListItem>
                  Enterprise customers looking for even more features can
                  contact Leadpages about the Advanced plan. This includes
                  unlimited websites, advanced integrations, five sub-accounts,
                  and top-tier customer support.
                </ListItem>
                <ListItem>
                  Customers save 25% on average when they switch to an annual
                  plan.
                </ListItem>
              </UL>
              <StyledH3>Unbounce</StyledH3>
              <StyledParagraphSmall>
                Unbounce offers a similar pricing model with several tiers which
                you can subscribe to on a monthly or annual basis.
              </StyledParagraphSmall>
              <UL>
                <ListItem>
                  Launch plans start at $90/month with a limit of 500
                  conversions, 20,000 unique visitors, and unlimited landing
                  pages/pop-ups/sticky bars.
                </ListItem>
                <ListItem>
                  Optimize plans start at $135/month with a limit of 1000
                  conversions, 30,000 unique visitors, unlimited landing
                  pages/pop-ups/sticky bars, and A/B testing.
                </ListItem>
                <ListItem>
                  Accelerate plans start at $225/month with a limit of 2000
                  conversions, 40,000 unique visitors, unlimited landing
                  pages/pop-ups/sticky bars, A/B testing, and Google AMP pages.
                </ListItem>
                <ListItem>
                  Customers save 10% when they switch to an annual plan.
                </ListItem>
              </UL>
              <StyledParagraphSmall>
                Each platform offers more features than are listed here. We’ve
                simply highlighted the most important ones for the sake of
                comparison. But we encourage you to visit each platform’s
                feature comparison page for the most up-to-date and accurate
                information.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                When looking strictly at prices, Leadpages is the most
                affordable option. It also offers unlimited traffic across all
                plans, something Unbounce doesn’t do. When you add this to
                unique features like the Leadmeter and a website builder,
                Leadpages is a great choice.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                That being said, Unbounce does have a few options that Leadpages
                doesn’t. This includes multi-user permissions and AMP landing
                pages. If you’re a medium to large business, Unbounce may
                provide the premium features you’re looking for. Its Smart
                Builder (currently in Beta) may also be something to consider if
                it’s a fit for your business needs.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Final verdict */}
            <SectionWrapper id="last-section" name="final-verdict">
              <StyledSectionTitleH2>The final verdict</StyledSectionTitleH2>
              <StyledParagraphSmall>
                So, is the final winner Leadpages or Unbounce? The answer
                depends on what you’re looking for.
              </StyledParagraphSmall>
              <SmallHeadline>
                Use <PurpleText>Leadpages</PurpleText> if:
              </SmallHeadline>
              <SiloCheckMarkList
                checkList={checkMarkContent.finalVerdict.leadpages}
              />
              <SmallHeadline>Go with Unbounce if:</SmallHeadline>
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
              nextUrl={bottomNavigationData.unbounce.nextUrl}
              nextTitle={bottomNavigationData.unbounce.nextTitle}
              nextSuperTitle={bottomNavigationData.nextSuperTitle}
            />
          </MainContainer>
        </BodyContainer>
      </InnerContainer>
      <ReadyToGrow
        headline="Ready to get online and grow?"
        caption="If you're ready to try Leadpages and see how close you can get to your customers, let's get started."
      />
    </OuterContainer>
  </>
)

export default LeadpagesVsUnbounce
