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
// Images
import leadpages1000Integrations from '@legacy/assets/images/comparisons/1000-Integrations-815px@2x.png'
import purchaseTraining from '@legacy/assets/images/comparisons/purchase-training-815px@2x.png'
import conversionSortTemplates from '@legacy/assets/images/comparisons/Templates-Sorted-by-Conversion-Rate-815px@2x.png'
import ABTesting from '@legacy/assets/images/comparisons/A-B-Testing-815px@2x.png'
import domains from '@legacy/assets/images/comparisons/Domains-815px@2x.png'
import fastPageLoads from '@legacy/assets/images/comparisons/Fast-Page-Load-Speeds-815px@2x.png'
import seoSettings from '@legacy/assets/images/comparisons/SEO-Settings-815px@2x.png'
import squarespaceSVG from '@legacy/assets/images/comparisons/logos/squarespace.svg'
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
  PurpleText,
} from '@legacy/components/silos/SiloGlobalStyles'
import {
  SidebarStyled,
  StyledParagraphLarge,
  StyledParagraphSmall,
  StyledParagraphExtraSmall,
  StyledWistia,
  StyledImage,
  SectionWrapper,
  StyledSectionTitleH2,
  StyledH3,
} from '@legacy/components/silos/SiloComparisonGlobalStyles'

const verbiage = {
  main: {
    title: 'Leadpages vs. Squarespace',
  },
  menu: {
    title_closed: 'Jump to a Section...',
    title_open: 'Jump to a Section...',
  },
}

const breadcrumbs = {
  currentPageName: 'Squarespace',
  parentPageName: 'Comparisons',
  parentPageLink: '/comparisons',
}

const checkMarkContent = {
  finalVerdict: {
    leadpages: [
      'You want to create conversion-optimized websites and landing pages all under the same roof. ',
      'You’re a small business owner or entrepreneur without a large marketing budget or team.',
      'High-converting landing pages are an important part of your business.',
      'You want to improve your conversion rate across your marketing funnel.',
      'You want to collect leads by adding pop-ups, alert bars, or opt-in forms on any web page that you own.',
      'You value a high-quality support team to help you tackle any issues.',
    ],
    competitor: [
      'You value design more than conversion optimization. ',
      'You want to give distinct editing permissions to different team members.',
      'You don’t require advanced conversion tools',
      'You don’t see yourself creating a lot of landing pages for your business.',
    ],
  },
}

const LeadpagesVsSquarespace = () => (
  <>
    <SEO
      pathname="/comparisons/leadpages-vs-Squarespace"
      title="Leadpages vs. Squarespace | Marketing Platform Comparisons"
      description="Wonder which platform is a better fit for your business? In this no-nonsense comparison of Leadpages vs. Squarespace, you’ll find out!"
      image="https://static.leadpages.com/images/og/og-Leadpages-vs-Squarespace.jpg"
    />
    <SiloHeader title={verbiage.main.title} breadcrumbs={breadcrumbs} />
    <OuterContainer>
      {/* Desktop Menu Bar */}
      <SiloComparisonDesktopMenu
        pageRoutes={pageLinks}
        verbiage={verbiage}
        competitorImage={squarespaceSVG}
      />
      {/* Desktop Sidebar Menu */}
      <SidebarStyled
        pageRoutes={pageLinks}
        competitorImage={squarespaceSVG}
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
                So, you need a website for your business. But which website
                builder should you choose? In this side-by-side comparison,
                we’ll review two of the most popular website builders, Leadpages
                and Squarespace, to help you decide which builder is right for
                you.
              </StyledParagraphLarge>
              <StyledParagraphSmall>
                Both platforms help you create code-free websites, but while one
                is more focused on design, the other offers built-in tools to
                ensure you grow your customer list.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                In this review, we’ll look at seven important criteria that
                should be considered when choosing your next marketing platform.
                This will allow you to make the best decision for your goals and
                business.
              </StyledParagraphSmall>
              <StyledParagraphSmall>Let’s dig in...</StyledParagraphSmall>
              <StyledParagraphExtraSmall>
                <i>
                  Note: Comparisons presented on this page were last updated in
                  February 2022
                </i>
              </StyledParagraphExtraSmall>
            </SectionWrapper>
            {/* Ease of use */}
            <SectionWrapper name="ease-of-use">
              <StyledSectionTitleH2>1 - Ease of Use</StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                It’s easy to hit the ground running with Leadpages because the
                platform is built with the busy entrepreneur in mind. The
                builder keeps things simple and straightforward, allowing you to
                create your online presence in as few clicks as possible.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Here are some features that make Leadpages so user-friendly:
              </StyledParagraphSmall>
              <UL>
                <ListItem>
                  <StyledParagraphSmall>
                    <b>Drag-and-drop builder:</b> Create a website in hours
                    instead of days with Leadpages’{' '}
                    <OutboundLink href="https://www.leadpages.com/product/website-builder">
                      Drag & Drop Builder
                    </OutboundLink>
                    . Best of all, you don’t need to know any code to build
                    something you can be proud of. Start with a professionally
                    designed template, drag and drop elements into place, add
                    and remove sections, edit text and images, and more. Built
                    on a system of sections, rows, and columns, items snap into
                    place right where they should.
                  </StyledParagraphSmall>
                </ListItem>
                <StyledWistia videoId="ago55021i9" />
                <ListItem>
                  <StyledParagraphSmall>
                    <b>Section Templates:</b> Leadpages features pre-designed
                    section templates that can be easily placed on any page. Add
                    an about section, FAQ section, features section, and more.
                  </StyledParagraphSmall>
                </ListItem>
                <ListItem>
                  <StyledParagraphSmall>
                    <b>HTML widget:</b> No matter your level of coding
                    expertise, we’ve got your back. There’s no code required
                    with Leadpages. But if you’re familiar with coding you can
                    make use of the HTML widget and CSS customizations to enjoy
                    further control.
                  </StyledParagraphSmall>
                </ListItem>
              </UL>
              <StyledH3>Squarespace:</StyledH3>
              <StyledParagraphSmall>
                Similarly, Squarespace also champions ease of use and is built
                with the average user in mind.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Here’s what you need to know about Squarespace:
              </StyledParagraphSmall>
              <UL>
                <ListItem>
                  <b>Drag and drop builder:</b> Squarespace also utilizes a drag
                  and drop interface, so even if you don’t know anything about
                  coding you’ll feel right at home. Like Leadpages, it uses
                  columns and rows to make sure all your elements are organized
                  and placed correctly.
                </ListItem>
                <ListItem>
                  <b>Design Tools: </b>
                  You’ll have access to custom color palettes, a background art
                  creation tool, video and background banners, and more.
                </ListItem>
                <ListItem>
                  <b>Custom CSS: </b> Experienced coders can use the CSS editor
                  to further customize their websites.
                </ListItem>
              </UL>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                This is essentially a tie. Both platforms offer
                beginner-friendly drag and drop interfaces that make building a
                website accessible for everyone. Whether you choose Leadpages or
                Squarespace, you’ll have no problem customizing your template
                and making your site your own.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Plus, both builders offer HTML and CSS customization for more
                experienced coders.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Functionality */}
            <SectionWrapper name="functionality">
              <StyledSectionTitleH2>2 - Functionality</StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                Leadpages integrates natively with 90+ online marketing tools
                (and counting). This includes all major email service providers
                (ESPs), customer relationship management tools (CRMs), webinar
                platforms, and social networks. That’s in addition to the 2,000+
                additional integrations available via Zapier.
              </StyledParagraphSmall>
              <StyledImage image={leadpages1000Integrations} />
              <StyledParagraphSmall>
                This means no matter what marketing tools you’re using for your
                business they’ll integrate seamlessly with your Leadpages site.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Leadpages does not include a CMS for blogging, but small
                business owners can create up to 100 pages for their website,
                which can include articles to showcase their content.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Pro and Advanced members can take payments directly on their
                website with the Stripe integration. All members can receive
                payments by embedding third-party checkouts like Paypal,
                Gumroad, and Shopify.
              </StyledParagraphSmall>
              <StyledImage image={purchaseTraining} />
              <StyledParagraphSmall>
                Leadpages also offers integrated sales and checkout pages via
                Stripe, so you can easily sell online products and services. And
                with 18 widgets including buttons, forms, social likes,
                Calendly, and countdown timers you’ll have everything you need
                to create a high-converting business website.
              </StyledParagraphSmall>
              <StyledH3>Squarespace:</StyledH3>
              <StyledParagraphSmall>
                Squarespace has 56 native integrations. They also offer
                extensions, which give you the ability to integrate apps with
                your website with the help of third-party tools.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                One advantage Squarespace has over Leadpages is that they
                integrate directly with multiple payment processing tools,
                including Apple Pay, PayPal, Square, and Stripe. Plus, they have
                a blogging feature, along with a number of different blogging
                integrations.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                This one really depends on your business needs. If you have a
                lot of apps that you’ll need to connect with your website, and
                you don’t want to use a third-party tool to get everything to
                work, Leadpages is probably your best bet.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                However, if having access to multiple payment processors or
                blogging is important to you then you might want to go with
                Squarespace.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Look & feel */}
            <SectionWrapper name="look-and-feel">
              <StyledSectionTitleH2>3 - Look & feel</StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                Leadpages’ has over 270 landing pages and website templates to
                choose from. Not only are these templates created with the
                latest design best practices in mind, but they’ve also been
                optimized for conversions.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Leadpages templates can be sorted by page type, industry, style
                and color. You can also search for templates based on historical
                conversion rates of other customers. This allows you to quickly
                find a template that both suits your brand and generates new
                leads.
              </StyledParagraphSmall>
              <StyledImage image={conversionSortTemplates} />
              <StyledParagraphSmall>
                All of Leadpages’ templates are mobile responsive and display
                optimally on desktops, tablets, and mobile devices. Within the
                Drag & Drop Builder you can see exactly what your site will look
                like on any device. There are also device-specific display
                settings, which allow you to design specific sections to be
                shown or hidden on different screen sizes.
              </StyledParagraphSmall>
              <StyledWistia videoId="7urnhosr4y" />
              <StyledH3>Squarespace:</StyledH3>
              <StyledParagraphSmall>
                Squarespace has a robust library of 113 website templates. They
                also offer a small selection of Cover Pages that can be used as
                landing pages, under construction pages, and 404 pages.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                When searching for a template you can sort them by type and
                industry. Unfortunately, sorting options like color and
                conversion rate aren’t available.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                All Squarespace templates are mobile-responsive and a
                multi-device preview is automatically generated for desktops,
                tablets, and smartphones.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Both platforms have a wide variety of attractive templates, but
                Leadpages has a slight edge due to the total number of templates
                they offer and their focus on conversions.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                The ability to sort templates by conversion rate allows you to
                judge templates both on how they look and their ability to
                generate leads. Leadpages also offers landing pages for a wide
                range of applications, including squeeze pages, sales pages,
                event pages, 404 pages, and more.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Squarespace does offer Cover Pages, but these are short pages
                mostly intended more for newsletter sign-ups and under
                construction pages. If you need to create a longer sales page
                Squarespace might not be the right choice.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                However, it’s worth noting that Squarespace currently offers
                more website templates than Leadpages.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Conversion tools: collect leads and close sales */}
            <SectionWrapper name="conversion-tools">
              <StyledSectionTitleH2>4 - Conversion tools</StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                As the name suggests, Leadpages is designed to help you get
                leads for your business. So, as you’d expect, they offer a large
                number of conversion tools to help you achieve this.
              </StyledParagraphSmall>
              <UL>
                <ListItem>
                  <OutboundLink href="https://www.leadpages.net/product/alert-bars">
                    <b>Alert bars:</b>
                  </OutboundLink>{' '}
                  sticking to the top or bottom of your website, these text bars
                  are perfect for promoting lead magnets, special offers,
                  events, and more.
                </ListItem>
                <ListItem>
                  <OutboundLink href="https://www.leadpages.com/product/pop-up-builder?lp_ck=_scid=YTMzOGEwYWEtNTRlZC00YzY5LTliOTgtZGMzZDE3YTAwOTE2;_fbp=ZmIuMS4xNjI2OTAzNzk2NzYyLjg4ODE1NjI0;__zlcmid=MTVCa0NGcHlQRFdTdXNL;_gcl_au=MS4xLjM1Njc3NjkxNi4xNjM2MzkyODM2;_sctr=MXwxNjM3MTM2MDAwMDAw;_ga_9J0988HL3V=R1MxLjEuMTYzNzI3MDQ3OC4zLjAuMTYzNzI3MDQ3OC4w;_ga=R0ExLjIuMTc2NDQ4NTA4NC4xNjI2OTAzNDEz;_uetvid=YTgwYzZjOTBlYTZjMTFlYmE4MzViYmExNjExZGZlYzU=">
                    <b>Pop-ups:</b>
                  </OutboundLink>{' '}
                  get the attention of your visitors as soon as they arrive on
                  your site, or as they’re about to leave. They can also be
                  triggered when a user clicks an image, button, or text link.
                </ListItem>
                <ListItem>
                  <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/360019181932">
                    <b>Leadmeter:</b>
                  </OutboundLink>{' '}
                  get real-time advice on how to optimize your page for
                  conversions (currently available when creating landing pages).
                </ListItem>
              </UL>
              <StyledParagraphSmall>
                As you generate leads you can review them in your Leads Library.
                Here you’ll find the contact information of everyone who’s opted
                into your email list, all in one place. Leadpages also offers
                analytics and A/B testing so you can fine-tune your pages and
                make changes based on the behavior of your website visitors.
              </StyledParagraphSmall>
              <StyledImage image={ABTesting} />
              <StyledParagraphSmall>
                Plus, you can use the lead magnet delivery feature to send an
                initial welcome email with a lead magnet to new leads and
                customers.
              </StyledParagraphSmall>
              <StyledH3>Squarespace:</StyledH3>
              <StyledParagraphSmall>
                While not as focused on conversions as Leadpages, Squarespace
                still offers a fair number of tools to help you turn visitors
                into customers.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                These include:
                <UL>
                  <ListItem>Alert bars</ListItem>
                  <ListItem>Pop-ups</ListItem>
                  <ListItem>Real-time analytics</ListItem>
                </UL>
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Squarespace doesn’t have an equivalent to the Leadmeter and they
                don’t support lead magnet delivery without the help of
                third-party tools. A/B testing can be done on the platform, but
                you’ll need a third-party app for this as well.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                When it comes to conversion-optimization, Leadpages enjoys
                another narrow victory. With optimized landing page templates,
                the Leadmeter, and a whole host of conversion tools it’s hard
                not to choose Leadpages here.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                While Squarespace supports A/B testing and lead magnet delivery,
                they require third-party tools. Since Leadpages offers these
                functionalities natively it makes the process a lot simpler.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                That being said, when it comes to analytics, it’s a tie. Both
                platforms offer real-time analytics dashboards and integrations
                with Google Analytics and other third-party tools.
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
                account comes with free hosting on a custom Leadpages subdomain
                (https://your-domain.lpages.co). You can also publish on a
                domain that you already own, a sub-domain of an existing
                website, or purchase a Leadpages annual subscription and receive
                a{' '}
                <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/360029210551-Free-custom-domain-offer">
                  free domain for one year (powered by Hover)
                </OutboundLink>
                .
              </StyledParagraphSmall>
              <StyledImage image={domains} />
              <StyledParagraphSmall>
                In addition, every Leadpages account includes a plugin you can
                use to install your landing pages, pop-ups, and alert bars on
                any WordPress site you own. You can even publish your page as a
                dynamic HTML page, which automatically updates when edits are
                published in Leadpages.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Leadpages also makes it easy to share completed landing pages or
                websites with your team or clients (at no additional cost) for
                their own Leadpages account.
              </StyledParagraphSmall>
              <StyledH3>Squarespace:</StyledH3>
              <StyledParagraphSmall>
                Squarespace has a few different publishing options, but they’re
                a little more restrictive than Leadpages.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                All annual Squarespace plans include a free custom domain for
                one year. If you already own a domain you can transfer it to
                Squarespace and publish your site there. Unfortunately, there
                isn’t an option to publish to a free subdomain, or to a
                WordPress site.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Squarespace charges between $20-$70 per year for each additional
                year or domain.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                One advantage Squarespace has is that users can set and share
                permissions of the site manager, administrator, content editor,
                billing, or store manager—whereas Leadpages accounts are managed
                by a single login.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                It depends on your needs.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Leadpages offers more publishing options. If you don’t want to
                pay for a custom domain you can publish your site to a free
                Leadpages subdomain. You can also use the Leadpages plugin to
                publish your landing pages, pop-ups, and alert bars to a
                WordPress site. So, if you’re looking for more flexibility when
                it comes to publishing, Leadpages is better for you.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                However, Squarespace offers multi user permissions within a
                single account, which is useful if you’re working in a large
                team and you don’t want to rely on a single login.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Get traffic */}
            <SectionWrapper name="traffic-and-advertising">
              <StyledSectionTitleH2>
                6 - Traffic & advertising
              </StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                After you build your website you’ll need to drive traffic to
                your pages. With Leadpages, you can harness the power of a
                streamlined analytics dashboard and real-time data to track your
                traffic and make changes accordingly. You’ll also get unlimited
                traffic and leads so you don’t need to worry about paying more
                as your site grows.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Leadpages makes{' '}
                <OutboundLink href="https://www.leadpages.net/blog/landing-page-seo-rank/">
                  search engine optimization
                </OutboundLink>{' '}
                easy. Use the SEO settings and previews to set the meta title,
                keywords, and description of any page to help with all-important
                Google rankings. Adding H1, H2, H3, and alt-text tags to your
                content is intuitive.
              </StyledParagraphSmall>
              <StyledImage image={seoSettings} />
              <StyledParagraphSmall>
                Plus, Leadpages features{' '}
                <OutboundLink href="https://www.leadpages.com/blog/landing-page-speed/">
                  industry-leading page load speeds
                </OutboundLink>{' '}
                (faster by 2.4 seconds on average). Not only does this boost
                your SEO, but it also lowers your bounce rate and increases
                conversions.
              </StyledParagraphSmall>
              <StyledImage image={fastPageLoads} />
              <StyledH3>Squarespace:</StyledH3>
              <StyledParagraphSmall>
                Squarespace’s analytics give you plenty of data that you can use
                to track your traffic and results. Similar to Leadpages, you’ll
                also enjoy unlimited traffic and leads on this platform.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Optimizing your pages for SEO is easy, as you can edit your meta
                titles, keywords, and descriptions within the builder.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                When it comes to page load speed, Squarespace has Accelerated
                Mobile Pages (AMP pages) to help mobile web and landing pages
                load faster.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                It’s a tie! Neither of the platforms has a limit on leads and
                traffic, which is great news for a growing business.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Both have similar analytics tools and integrate with Google
                Analytics and other third-party services, so after you hit
                “publish” you can see in real-time who’s coming to your page,
                from where, and how long they’re staying.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Google-friendliness is key if you want to be successful online,
                and both offer behind-the-scenes SEO tools such as site mapping,
                SSL certificates, automatic tagging, and built-in meta tags to
                make organic growth easier. Engineers at both platforms have
                made their page load speeds very fast.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Value */}
            <SectionWrapper name="value">
              <StyledSectionTitleH2>7 - Value</StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                Determining value isn’t as simple as seeing who offers the
                cheaper price. It’s about what you get for that price. And
                Leadpages certainly offers a lot.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                With Leadpages, you get a landing page and website builder,
                access to over 270 templates, a long list of conversion tools,
                analytics, and more.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                There are three plans to choose from:
                <UL>
                  <ListItem>
                    The Standard plan starts at $37/month (when paid annually)
                    and offers everything mentioned above plus one website,
                    unlimited landing pages, free hosting, and all basic
                    features.
                  </ListItem>
                  <ListItem>
                    The Pro plan costs $74/month (when paid annually) and offers
                    everything mentioned above plus three websites, unlimited
                    A/B testing, and online sales and payments with Stripe.
                  </ListItem>
                  <ListItem>
                    Enterprise customers looking for even more features can
                    contact Leadpages about the Advanced plan. This includes
                    extra websites, advanced integrations, five sub-accounts,
                    and top-tier customer support.
                  </ListItem>
                  <ListItem>
                    Customers save 25% on average when they choose an annual
                    plan.
                  </ListItem>
                </UL>
              </StyledParagraphSmall>
              <StyledH3>Squarespace:</StyledH3>
              <StyledParagraphSmall>
                Squarespace offers four different plans for you to choose from:
                <UL>
                  <ListItem>
                    The Personal Plan is $14/month (when paid annually) and
                    includes a free domain, unlimited bandwidth, basic website
                    metrics, and Squarespace extensions.
                  </ListItem>
                  <ListItem>
                    The Business Plan is $23/month (when paid annually) and
                    offers everything mentioned above plus premium integrations,
                    advanced website analytics, ecommerce tools, alert bars, and
                    pop-ups.
                  </ListItem>
                  <ListItem>
                    The Basic Commerce Plan is $27/month (when paid annually)
                    and offers everything mentioned above plus ecommerce
                    analytics, point of sale, and merchandising tools.
                  </ListItem>
                  <ListItem>
                    The Advanced Commerce Plan is $49/month (when paid annually)
                    and offers everything mentioned above plus abandoned cart
                    recovery and advanced shipping and discounts.
                  </ListItem>
                </UL>
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Squarespace’s plans are more affordable for the most part.
                However, they lack some key features that Leadpages offers.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                With a dedicated landing page builder and more conversion tools,
                Leadpages is the right choice if you’re looking to collect
                leads, grow your email list, and find new customers. A higher
                conversion rate means more sales, which over time will make up
                the difference in price.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Still, if you’re looking for an inexpensive way to get your
                business online Squarespace is a solid choice.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Final verdict */}
            <SectionWrapper id="last-section" name="final-verdict">
              <StyledSectionTitleH2>The Final Verdict</StyledSectionTitleH2>
              <StyledParagraphSmall>
                Choosing between Leadpages and Squarespace is really dependent
                on your audience, goals, and type of business.
              </StyledParagraphSmall>
              <SmallHeadline>
                Use <PurpleText>Leadpages</PurpleText> if:
              </SmallHeadline>
              <SiloCheckMarkList
                checkList={checkMarkContent.finalVerdict.leadpages}
              />
              <SmallHeadline>Use Squarespace if:</SmallHeadline>
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
              nextUrl={bottomNavigationData.squarespace.nextUrl}
              nextTitle={bottomNavigationData.squarespace.nextTitle}
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

export default LeadpagesVsSquarespace
