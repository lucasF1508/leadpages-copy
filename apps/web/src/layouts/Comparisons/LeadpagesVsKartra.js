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
import widgets from '@legacy/assets/images/comparisons/Widgets-815px@2x.png'
import calendlyScheduling from '@legacy/assets/images/comparisons/Calendly-Scheduling-815px@2x.png'
import realTimeAnalytics from '@legacy/assets/images/comparisons/Real-time-Analytics-815px@2x.png'
import fastPageLoadSpeeds from '@legacy/assets/images/comparisons/Fast-Page-Load-Speeds-815px@2x.png'
import templatesAndCustomizability from '@legacy/assets/images/comparisons/templates&customizability-815px@2x.png'
import leadmeter from '@legacy/assets/images/comparisons/Leadmeter-815px@2x.png'
import integrations from '@legacy/assets/images/comparisons/Integrations-815px@2x.png'
import stripeCheckoutForm from '@legacy/assets/images/comparisons/Stripe-Checkout-Form-815px@2x.png'
import openTableRestaurant from '@legacy/assets/images/comparisons/OpenTable-restaurant-Reservations-815px@2x.png'
import customHtmlCss from '@legacy/assets/images/comparisons/CustomHTML-CSS-815px@2x.png'
import conversionTools from '@legacy/assets/images/comparisons/Conversion-Tools-815px@2x.png'
import domains from '@legacy/assets/images/comparisons/Domains-815px@2x.png'
import ABTesting from '@legacy/assets/images/comparisons/A-B-Testing-815px@2x.png'
import countClicks from '@legacy/assets/images/comparisons/count-clicks-and-opt-ins-as-conversions-815px@2x.png'
import subaccounts from '@legacy/assets/images/comparisons/Subaccounts-815px@2x.png'
import kartraSVG from '@legacy/assets/images/comparisons/logos/kartra.svg'
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
    title: 'Leadpages vs. Kartra',
  },
  menu: {
    title_closed: 'Jump to a Section...',
    title_open: 'Jump to a Section...',
  },
}

const breadcrumbs = {
  currentPageName: 'Kartra',
  parentPageName: 'Comparisons',
  parentPageLink: '/comparisons',
}

const checkMarkContent = {
  finalVerdict: {
    leadpages: [
      'You’re an entrepreneur taking on marketing alone, or a small business owner working with a small team.',
      'You are not interested in paying more as your business gains more leads or needs to build more pages.',
      'You want an intuitive, easy-to-use mobile-responsive grid layout to guide your web design.',
      'You want to use customizable pop-ups and alert bars on any web page that you own to collect leads.',
      'You want a high-quality support team who is available to help you tackle any issues.',
    ],
    competitor: [
      'Your business needs a paid membership program for your offering.',
      'You are implementing an affiliate program for your customers within your builder.',
      'You want to extensively edit the mobile version of your site and prefer a drag and drop editor for all previews.',
      'You are a digital marketer or are marketing a business with a larger team and want to use upsells, downsells, and bump offers to build a marketing funnel.',
      'You are a developer who is experienced in implementing custom integrations.',
    ],
  },
}

const LeadpagesVsKartra = () => (
  <>
    <SiloHeader title={verbiage.main.title} breadcrumbs={breadcrumbs} />
    <OuterContainer>
      {/* Desktop Menu Bar */}
      <SiloComparisonDesktopMenu
        pageRoutes={pageLinks}
        verbiage={verbiage}
        competitorImage={kartraSVG}
      />
      {/* Desktop Sidebar Menu */}
      <SidebarStyled
        pageRoutes={pageLinks}
        competitorImage={kartraSVG}
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
              <StyledParagraphSmall>
                Looking to capture more leads, promote an upcoming event, and
                fill up your sales pipeline? If so, there are many conversion
                marketing platforms to consider, Leadpages and Kartra are two
                top-notch options.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                If you’re questioning the difference between Leadpages and
                Kartra, look no further. This assessment shows how{' '}
                <Link href="/" passHref legacyBehavior>
                  <ArticleLink>Leadpages</ArticleLink>
                </Link>{' '}
                stacks up to Kartra. As two major players in the conversion
                marketing platform industry, we’ll give an honest look at the
                two platforms.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                We want you to pick the tool that will help you sell more, even
                if it’s not us. As we compare Leadpages and Kartra, we’ll take
                into account{' '}
                <Link href="/comparisons" passHref legacyBehavior>
                  <ArticleLink>seven major criteria</ArticleLink>
                </Link>{' '}
                that are the most important to you when deciding between
                conversion marketing platforms.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                With both options, you will be able to create landing pages, as
                well as entire websites. But we will go deeper into why you
                should use each software and when. Read on, and we’ll explore
                them head to head!
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Ease of use */}
            <SectionWrapper name="ease-of-use">
              <StyledSectionTitleH2>
                1 - Ease of Use: <br />
                The building experience
              </StyledSectionTitleH2>
              <StyledH3>Us:</StyledH3>
              <StyledParagraphSmall>
                Leadpages is designed so anyone can easily publish a page with
                little to no web design experience. Our platform makes it
                possible to create a riveting online presence and build a sales
                funnel in as few clicks as possible. Here are some of our
                features that make our platform simple to operate for any user:
              </StyledParagraphSmall>
              <StyledH4>Our drag-and-drop builder:</StyledH4>
              <StyledParagraphSmall>
                The <OutboundLink href="">drag-and-drop editor</OutboundLink> is
                fashioned with a system rows and columns, which is ideal for
                non-web designers. Best of all, with our drag-and-drop builder,
                no coding knowledge is required.
              </StyledParagraphSmall>
              <StyledWistia videoId="l2c84h4wlk" />
              <StyledH4>The Leadmeter:</StyledH4>
              <StyledParagraphSmall>
                If you’re new to conversion tools, our proprietary tool, the{' '}
                <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/360019181932-Leadmeter">
                  Leadmeter
                </OutboundLink>
                , is your ticket to success. It predicts how well your page will
                perform and tells you what to tweak before you publish it, so
                you don’t have to guess and check every element on your page and
                maximize customer actions.
              </StyledParagraphSmall>
              <StyledImage image={leadmeter} />
              <StyledH4>HTML widget:</StyledH4>
              <StyledParagraphSmall>
                While beginners don’t need to worry about knowing HTML code,
                more experienced coders can personalize page designs using our
                HTML widget and CSS customizations.
              </StyledParagraphSmall>
              <StyledImage image={customHtmlCss} />
              <StyledH4>Copy/paste sections:</StyledH4>
              <StyledParagraphSmall>
                Avoid any hassle by copying and pasting sections. This feature
                ensures a cohesive design, all while saving time.
              </StyledParagraphSmall>
              <StyledWistia videoId="r4pfqj1prs" />
              <StyledH4>Instant saving:</StyledH4>
              <StyledParagraphSmall>
                Our platform saves instantly, so you never have to worry about
                losing work.
              </StyledParagraphSmall>
              <StyledH3>Kartra:</StyledH3>
              <StyledParagraphSmall>
                Similar to Leadpages, Kartra has a drag-and-drop builder (with
                the option of using a grid layout) that ensures easy editing for
                its users. No coding knowledge is needed for Kartra, either,
                making it a slick option for designer newbies. Users can simply
                drag-and-drop the elements they want on a page, drag them onto
                the editing canvas, and change the components at will.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Both builders offer a drag-and-drop experience, but we provide a
                little bit more flexibility in the placement and resizing of
                elements, which automatically updates the WYSIWYG editor with
                every change. (In Kartra, you have to apply every small change.)
                Kartra, however, lets you toggle on or off its grid feature,
                which may be preferred by some users who prefer a free-form
                experience. There is no code required for either service, but
                HTML and CSS customization is supported for users wanting more
                control over their page on Leadpages.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                We also want to make sure you’re on the right path to maximize
                your success. This is why we created the Leadmeter, a feature
                that educates our users on the effectiveness of their design by
                analyzing each element in real-time and predicting the page’s
                performance prior to being published. This feature is essential
                to maximizing conversions and making sure your page is optimally
                designed from the get-go, which saves you a ton of time. For
                users who are new to conversion tools, frankly, it’s a
                lifesaver.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Functionality */}
            <SectionWrapper name="functionality">
              <StyledSectionTitleH2>
                2 - Functionality: features, widgets & integrations
              </StyledSectionTitleH2>
              <StyledH3>Us:</StyledH3>
              <StyledParagraphSmall>
                Integrated features, widgets, and integrations all play a hand
                in page functionality. We seamlessly integrate with more than 90
                online marketing tools (and counting). Across every marketing
                channel, these powerful widgets and integrations can help fuel
                your business’s success.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Here are our unparalleled integrations in a snapshot:
              </StyledParagraphSmall>
              <StyledH4>A suite of integrations:</StyledH4>
              <StyledParagraphSmall>
                We integrate with all major social networks, email service
                providers (ESPs), webinar platforms, and customer relationship
                management tools (CRMs), encompassing:
              </StyledParagraphSmall>
              <UL>
                <ListItem>Native integrations: 21</ListItem>
                <ListItem>Compatible integrations: 36</ListItem>
                <ListItem>Third-party integrations: 33</ListItem>
                <ListItem>2000+ integrations available via Zapier</ListItem>
                <ListItem>
                  (SalesForce, HubSpot and Marketo integrations only available
                  in advanced plans.)
                </ListItem>
              </UL>
              <StyledImage image={integrations} />
              <StyledH4>Option for CSS (customization):</StyledH4>
              <StyledParagraphSmall>
                Seeking to customize integrations? Look no further than our
                platform. Experienced designers can customize combinations via
                CSS.
              </StyledParagraphSmall>
              <StyledH4>Capture sales:</StyledH4>
              <StyledParagraphSmall>
                We offer integrated sales and checkout pages and payment via
                Stripe, so you can quickly and efficiently sell your products
                and services directly from your landing pages and website.
              </StyledParagraphSmall>
              <StyledImage image={stripeCheckoutForm} />
              <StyledH4>Widget availability:</StyledH4>
              <StyledParagraphSmall>
                Leadpages has{' '}
                <OutboundLink href="https://support.leadpages.com/hc/en-us/sections/360001514091-Using-widgets">
                  18 available widgets
                </OutboundLink>
                . These widgets span from video, social, countdown widgets and
                more.
              </StyledParagraphSmall>
              <StyledImage image={widgets} />
              <StyledH4>Email tagging:</StyledH4>
              <StyledParagraphSmall>
                Manage your email list with email tagging through AWeber. This
                way, you can organize and segment your email contacts to
                personalize your marketing efforts.
              </StyledParagraphSmall>
              <StyledH4>Self-scheduling via Calendly: </StyledH4>
              <StyledParagraphSmall>
                Natively integrated with Calendly, we make it easy to add your
                Calendly schedule to any page or pop-up. With this integration,
                you empower site visitors to schedule a free consultation or
                time to chat at any time!
              </StyledParagraphSmall>
              <StyledImage image={calendlyScheduling} />
              <StyledH4>Online reservations via OpenTable: </StyledH4>
              <StyledParagraphSmall>
                Restaurants, bars, and food trucks listen up! You can take
                online reservations through OpenTable with our platform.
                Natively integrated with OpenTable, Leadpages allows your
                customers to search available reservation times and book a table
                right from your landing page.
              </StyledParagraphSmall>
              <StyledImage image={openTableRestaurant} />
              <StyledH3>Kartra:</StyledH3>
              <StyledParagraphSmall>
                While Kartra doesn’t have the number of integrations available
                as Leadpages, it still has a large amount for users to choose
                from. With 20 integrations (available on all plan levels), it
                integrates with most ESPs, membership services, communication
                platforms, as well as Google calendar and Zapier. (Karta API,
                IPN, and Custom App system can also support custom
                integrations.) And the way they break down categories makes it
                easier for Kartra users to search for them.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Similar to Leadpages, Kartra has some beneficial integrations
                that work in favor of your business. For instance, its online
                store widget lets you add a store to your website and set up
                payment directly through Stripe, Paypal, Braintree, or
                Authorize.net. Also, the integrations are categorized into
                sections, like:
              </StyledParagraphSmall>
              <UL>
                <ListItem>Content</ListItem>
                <ListItem>Opt-in form</ListItem>
                <ListItem>Call-to-action (CTA) </ListItem>
                <ListItem>Checkout form</ListItem>
                <ListItem>
                  Components (images, carousels, icons, lists, videos, Google
                  Maps, and more)
                </ListItem>
              </UL>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>It’s a tie!</StyledParagraphSmall>
              <StyledParagraphSmall>
                While Leadpages offers a wider selection of built-in
                integrations, with Kartra, users have four options of native
                payment gateways: Stripe, Authorize.net, PayPal, and Braintree.
                (With our platform, you only have Stripe.) So, if you’re already
                tied to a payment gateway other than Stripe, Kartra may be for
                you.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                As far as widgets go, both Leadpages and Kartra offer a large
                selection of elements you can add to your page, as well as
                supporting custom integrations and HTML customization within
                your page.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                On the other hand, Karta is missing many of the CRM and webinar
                platforms that Leadpages integrates with. So, for people who
                already have a CRM provider or webinar platform, you may want to
                go with Leadpages.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Look & feel */}
            <SectionWrapper name="look-and-feel">
              <StyledSectionTitleH2>
                3 - Look & feel: templates & customizability
              </StyledSectionTitleH2>
              <StyledH3>Us:</StyledH3>
              <StyledParagraphSmall>
                Good design can take your business from good to great. For this
                reason, our Leadpages platform gives you flexible options to
                create the look and feel that’s right for your customers.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Here are some templates and customizability features worth
                noting:
              </StyledParagraphSmall>
              <OL>
                <ListItem>
                  <b>Ease of use is our M.O.:</b> Your page design can be as
                  basic or inventive as your heart desires.
                </ListItem>
                <ListItem>
                  <b>A polished and pro-looking page:</b> Your visitors won’t
                  even be able to tell the difference between Leadpages-designed
                  pages and agency-designed pages with a $20,000+ price tag. We
                  designed our templates to look professional right out of the
                  box.
                </ListItem>
                <ListItem>
                  <b>Conversion-optimized templates:</b> We polish our templates
                  and designs to be high-converting. Each element is conversion
                  optimized to make sure your business can benefit from the
                  highest conversion rate possible.
                </ListItem>
              </OL>
              <StyledParagraphSmall>
                Our templates are beautiful and built to convert. With an{' '}
                <Link href="/templates" passHref legacyBehavior>
                  <ArticleLink>abundance of template choices</ArticleLink>
                </Link>
                , you can feel confident in your page design, even if you have
                little to no experience.
              </StyledParagraphSmall>
              <StyledImage image={templatesAndCustomizability} />
              <StyledParagraphSmall>Our users can enjoy:</StyledParagraphSmall>
              <StyledH4>Template availability and sorting:</StyledH4>
              <StyledParagraphSmall>
                Our template gallery is categorized by conversion rate and
                clearly listed to convey their value to users from the start.
                With over 130 free versatile and unique landing page templates
                and additional website templates, you can search from a heap of
                choices by industry.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Each template is scientifically optimized for high conversion
                with clean and clutter-free design; a single call-to-action
                above the fold (so visitors are sure to see your calls to
                action); and a pop-up opt-in form. It allows users to understand
                the features of each template better.
              </StyledParagraphSmall>
              <StyledH4>Mobile responsive (right out of the box):</StyledH4>
              <StyledParagraphSmall>
                All content is mobile responsive and displays well on devices of
                different sizes: on desktop, tablet, or mobile. Our multi-device
                preview is automatic, so no additional steps are required to
                ensure you’re hitting every device with the same, showstopping
                design.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                For more customizability and personalization, there’s also
                device-specific display settings, which allows users to design
                specific sections as well as shows (or hides) them on specific
                devices.
              </StyledParagraphSmall>
              <StyledWistia videoId="7urnhosr4y" />
              <StyledH3>Kartra:</StyledH3>
              <StyledParagraphSmall>
                With around 125 landing page templates, Unbounce has a vast
                library of options categorized into landing page templates,
                sticky bar templates, pop-up templates, or AMP specific designs.
                The one downfall: this platform doesn’t have a website builder
                or web templates.
              </StyledParagraphSmall>
              <UL>
                <ListItem>Squeeze pages</ListItem>
                <ListItem>Video sales</ListItem>
                <ListItem>Thank you page</ListItem>
                <ListItem>Product launch</ListItem>
                <ListItem>Webinar registration</ListItem>
                <ListItem>Checkout</ListItem>
                <ListItem>Upsell</ListItem>
                <ListItem>Affiliate</ListItem>
                <ListItem>Membership</ListItem>
                <ListItem>Blog posts</ListItem>
              </UL>
              <StyledParagraphSmall>
                (...Or start from scratch!)
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Its downfall? You can’t search templates by keyword, conversion
                rate, or industry, which could be quite frustrating.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Another added value is that users can choose pre-built marketing
                campaigns and funnels, so they don’t need to start from scratch.
                So, you can easily build the ideal sales funnel for your
                business.{' '}
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                With both abundance and flexibility, it’s hard to pick a winner
                in this category.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                But with Leadpages offering two-times the amount of templates,
                they may be the winner.
              </StyledParagraphSmall>
              <StyledH4>Where they differ:</StyledH4>
              <StyledParagraphSmall>
                Leadpages dashboard is a bit more intuitive to navigate. You
                have more professional-looking templates, with better
                navigation, to help you find precisely what you’re looking for.{' '}
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Both options have landing page-specific templates, as well as
                templates for entire websites, but only Kartra offers
                pre-designed campaigns and funnels. Kartra is set up in sections
                in which you can add block templates such as content, opt-in
                forms, checkout forms, calls to action, and more. Yet, there is
                no search function and many templates offered don’t complement
                the page template chosen.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Kartra lets you use their drag-and-drop editor on the mobile
                preview, whereas in Leadpages sections cannot be edited while in
                preview mode. Leadpages is fully mobile-responsive and offers
                device-specific display, but Kartra’s mobile editor allows for
                maximum flexibility.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                All templates are desktop, tablet, and mobile responsive on both
                platforms.{' '}
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Conversion tools: collect leads and close sales */}
            <SectionWrapper name="conversion-tools">
              <StyledSectionTitleH2>
                4 - Conversion tools: collect leads and close sales
              </StyledSectionTitleH2>
              <StyledH3>Us:</StyledH3>
              <StyledParagraphSmall>
                Since 2013, we’ve been dedicated to the success of businesses to
                help enterprises of all sizes to convert customers.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                And we introduced our conversion toolkit to convert your
                hard-earned website traffic through:
              </StyledParagraphSmall>
              <UL>
                <ListItem>
                  Our{' '}
                  <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/360019181932-Leadmeter">
                    Leadmeter
                  </OutboundLink>
                  , which anticipates and predicts how well your page will
                  perform, then offers suggestions before you publish it (as we
                  mentioned above)
                </ListItem>
                <ListItem>
                  <Link href="/product/alert-bars" passHref legacyBehavior>
                    <ArticleLink>Alert bars</ArticleLink>
                  </Link>
                  , which are publishable on any website or landing page to
                  prompt user actions (get those sign-ups)
                </ListItem>
                <ListItem>
                  <Link href="/product/pop-up-builder" passHref legacyBehavior>
                    <ArticleLink>Intuitive pop-up forms</ArticleLink>
                  </Link>
                  , which diverts the attention of visitors on any page to
                  essential calls to action
                </ListItem>
              </UL>
              <StyledImage image={conversionTools} />
              <StyledParagraphSmall>
                We also help move customers along through the sales funnel by
                conversion tracking, intuitive A/B testing (through Pro and
                Advanced plans), and secure payment{' '}
                <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/115007085728-Checkouts-overview">
                  integration through Stripe
                </OutboundLink>
                . (This integration is convenient for users because it allows
                them to connect a (free) Stripe account to Leadpages and easily
                pull in the products and services they’d like to sell—all
                foregoing the need to hard-code difficult HTML elements!)
              </StyledParagraphSmall>
              <UL>
                <ListItem>
                  Option to count clicks and opt-ins as conversions.
                  <StyledImage image={countClicks} />
                </ListItem>
                <ListItem>
                  Built in intuitive and unlimited A/B testing on Pro and
                  Advanced plans.
                  <StyledImage image={ABTesting} />
                </ListItem>
              </UL>
              <StyledH3>Kartra:</StyledH3>
              <StyledParagraphSmall>
                Kartra also taps into the power of conversions. Here are a few
                ways they do so:
              </StyledParagraphSmall>
              <UL>
                <ListItem>
                  Landing and exit pop-ups can be chosen to display on every
                  visit or only on the first visit with Kartra.
                </ListItem>
                <ListItem>
                  Similar to Leadpages, if you want to test the success of
                  multiple elements, do it in a breeze with Kartra’s built-in
                  unlimited A/B testing.
                </ListItem>
                <ListItem>
                  The platform automatically assigns lead scores to each lead,
                  along with a customer value dollar amount using data gathered
                  from your site. So, you know exactly what customers you should
                  be prioritizing. In addition, you can easily cater and
                  customize messages based on these lead scores.
                </ListItem>
              </UL>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Building a conversion marketing platform built with conversions
                in mind is paramount for both platforms. In fact, both Leadpages
                and Kartra allow A/B testing directly on the platform’s
                dashboard, which is intuitive and easy to navigate.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Where Leadpages has an edge is its ability to let users create
                pop-ups and alert bars from their builder to use across any
                page. You can also deliver lead magnets through either service.
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
                Leadpages offers a number of flexible publishing options. Every
                account comes with free hosting on a custom Leadpages subdomain
                (https://your-domain.lpages.co). You can also publish on a
                third-party domain that you already own, or purchase a Leadpages
                annual subscription and receive a free domain for one year
                (powered by Hover). In addition, every Leadpages account
                includes a plugin you can use to install your landing pages,
                pop-ups, and alert bars on your WordPress site. You can even
                publish your page as a dynamic HTML page, which automatically
                updates when edits are published in Leadpages.
              </StyledParagraphSmall>
              <StyledImage image={domains} />
              <StyledParagraphSmall>
                Leadpages also makes it easy to share a landing page or website
                template with your team or clients (at no additional cost).
              </StyledParagraphSmall>
              <StyledImage image={subaccounts} />
              <StyledH3>Kartra:</StyledH3>
              <StyledParagraphSmall>
                Kartra includes a free domain for one year. Kartra users also
                have the ability to publish directly through Kartra with a free
                domain or through your own server with your existing domain.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                The winner is Leadpages. Leadpages supports more publishing
                options, such as a WordPress plugin, whereas Kartra requires you
                to publish via HTML or embedded code.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Yet with both, you are given a free domain for one year with
                both of these services and have the option to publish with an
                existing domain.{' '}
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Get traffic */}
            <SectionWrapper name="traffic-and-advertising">
              <StyledSectionTitleH2>
                6 - Get traffic: promote content after it&apos;s published
              </StyledSectionTitleH2>
              <StyledH3>Us:</StyledH3>
              <StyledParagraphSmall>
                Attracting traffic requires a tool that takes things a step
                further after publishing. In fact, publishing your page, it’s
                really just the first step.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Look for a platform with built-on promotional features that
                helps you promote content after you publish your page. This
                function is key to maintaining a steady traffic and sales
                stream.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                With Leadpages, there are several things you can do to get
                traffic. Every user has access to a streamlined analytics
                dashboard, real-time analytics, and can enjoy zero limits on the
                quantity of traffic and leads. You also can also see actual
                earnings and revenue right on your dashboard. In addition, we
                have{' '}
                <OutboundLink href="https://www.leadpages.com/blog/landing-page-speed/">
                  lightning-fast page load speeds
                </OutboundLink>{' '}
                of 2.4 seconds faster than average to make sure traffic is not
                bouncing away from your site, and Google ranks your page highly
                on its search engine results pages.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Another enticing feature is our{' '}
                <OutboundLink href="https://www.leadpages.com/blog/landing-page-seo-rank/">
                  Search engine optimization
                </OutboundLink>{' '}
                guidance. In fact, any plan has access to SEO settings and
                previews, where you set the title, keywords, and description of
                any page.
              </StyledParagraphSmall>
              <StyledImage image={realTimeAnalytics} />
              <StyledImage image={fastPageLoadSpeeds} />
              <StyledH3>Kartra:</StyledH3>
              <StyledParagraphSmall>
                Kartra has a slick real-time analytics dashboard. The platform
                promotes itself on the ability to “easily improve what you can
                measure,” which is a promising motto for all businesses. The
                site also claims it “integrates the data from its complete set
                of tools to bring you the most comprehensive marketing analytics
                you&apos;ve ever seen — all at a glance.” The platform breaks
                down the following analytics, which is a cool feature:
              </StyledParagraphSmall>
              <UL>
                <ListItem>Help desk</ListItem>
                <ListItem>Affiliates</ListItem>
                <ListItem>Page</ListItem>
                <ListItem>Split testing</ListItem>
                <ListItem>Broadcasts</ListItem>
                <ListItem>Split testing</ListItem>
                <ListItem>Sequences</ListItem>
              </UL>
              <StyledParagraphSmall>
                As stated above, Kartra also has lead profiles. You can view
                visitors’ entire profile and history with them, including
                customer value, score, and join date.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Kartra’s lead profiles analyze which target segment list is your
                best customer, provides you with a lead directory with an
                assigned customer score, as well as performance metrics on your
                helpdesk or membership features. Their analytics is slightly
                more involved as they track each step of customer data, whereas
                Leadpages gives you analytics based on the page conversions,
                views, unique views, or conversion rate. They both have built-in
                SEO settings, analytics dashboards, and unlimited traffic on
                advanced plans. However, only Leadpages guarantees unlimited
                leads.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Leadpages and Kartra have very similar analytics tools as well
                as integration with third-party analytics services.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Bang for your buck */}
            <SectionWrapper name="value">
              <StyledSectionTitleH2>
                7 - Bang for your buck: value for money
              </StyledSectionTitleH2>
              <StyledH3>Us:</StyledH3>
              <StyledParagraphSmall>
                Are you wondering about the value of Leadpages? Let’s break it
                down. There are different{' '}
                <Link href="/pricing" passHref legacyBehavior>
                  <ArticleLink>pricing tiers</ArticleLink>
                </Link>{' '}
                to suit every budget. We have standard, pro, and advanced
                accounts; available for purchase by month or year. And no matter
                what plan you’re on—you get unlimited traffic, leads, and
                landing page publishing.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Are you looking for extra guidance? Our unmatched customer
                support is available through email, chat, and priority phone,
                and based on your plan level. For an extra layer of education,
                we have exclusive marketing education training so you can
                maximize the value of your plan.
              </StyledParagraphSmall>
              <StyledH3>Kartra:</StyledH3>
              <StyledParagraphSmall>
                Kartra adheres to a similar pricing model, where users pay per
                month or year. Yet, the platform is more expensive and has lead
                limits. The lowest tier starts at around $80, and the most
                robust tier hovers around $380 per month.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                As you can see, leads and bandwidth cap, as follows:
              </StyledParagraphSmall>
              <UL>
                <ListItem>Starter: (50 GB bandwidth, 2500 leads)</ListItem>
                <ListItem>Silver: (unlimited bandwidth, 12500 leads)</ListItem>
                <ListItem>Gold: (unlimited bandwidth, 25000 leads)</ListItem>
                <ListItem>
                  Platinum: (unlimited bandwidth, 50,000 leads)
                </ListItem>
              </UL>
              <StyledParagraphSmall>
                The plans include access to royalty-free images, email support,
                membership and affiliate programs, and training resources from
                top-level marketers. Additionally, Kartra’s agency program
                allows you to own and lease accounts to clients.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                It depends on what you’re going for.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                The majority of Leadpages plans are more affordable than Kartra.
                We focus on conversion, core marketing performance, ease of use,
                and exceptional service. We also have more integration variety
                action or timing pop-ups that can be used on any page,
                regardless of if it was created on our platform or not.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Kartra has additional features to validate the steep price, such
                as help desk implementation, and affiliate and membership
                features within their builder. This results in a more
                comprehensive analytics dashboard due to the greater amount of
                information gathered. If that’s what you need, Kartra may be for
                you.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Final verdict */}
            <SectionWrapper id="last-section" name="final-verdict">
              <StyledSectionTitleH2>The final verdict</StyledSectionTitleH2>
              <StyledParagraphSmall>
                So, is the final winner Leadpages or Kartra? The answer is, of
                course, depends on what you’re looking for:
              </StyledParagraphSmall>
              <SmallHeadline>
                <PurpleText>Leadpages</PurpleText> has everything you need if:
              </SmallHeadline>
              <SiloCheckMarkList
                checkList={checkMarkContent.finalVerdict.leadpages}
              />
              <SmallHeadline>You may prefer Kartra if:</SmallHeadline>
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
              nextUrl={bottomNavigationData.wordpress.nextUrl}
              nextTitle={bottomNavigationData.wordpress.nextTitle}
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

export default LeadpagesVsKartra
