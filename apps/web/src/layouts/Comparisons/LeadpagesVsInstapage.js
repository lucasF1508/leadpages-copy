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
import purchaseTraining from '@legacy/assets/images/comparisons/purchase-training-815px@2x.png'
import widgets from '@legacy/assets/images/comparisons/Widgets-815px@2x.png'
import conversionSortTemplates from '@legacy/assets/images/comparisons/Templates-Sorted-by-Conversion-Rate-815px@2x.png'
import ABTesting from '@legacy/assets/images/comparisons/A-B-Testing-815px@2x.png'
import domains from '@legacy/assets/images/comparisons/Domains-815px@2x.png'
import seoSettings from '@legacy/assets/images/comparisons/SEO-Settings-815px@2x.png'
import instapageSVG from '@legacy/assets/images/comparisons/logos/instapage.svg'
import fastPageLoads from '@legacy/assets/images/comparisons/Fast-Page-Load-Speeds-815px@2x.png'
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
    title: 'Leadpages vs. Instapage',
  },
  menu: {
    title_closed: 'Jump to a Section...',
    title_open: 'Jump to a Section...',
  },
}

const breadcrumbs = {
  currentPageName: 'Instapage',
  parentPageName: 'Comparisons',
  parentPageLink: '/comparisons',
}

const checkMarkContent = {
  finalVerdict: {
    leadpages: [
      'You’re looking to build a landing page or an entire website (or both).',
      'You’re an entrepreneur or small business owner (without a large marketing team).',
      'You don’t want to pay more for creating more pages or attracting a large number of visitors.',
      'You’re looking for an intuitive, easy-to-use grid format for your web design.',
      'You’re working alone and don’t need to collaborate on building your page.',
      'You’re looking for an affordable plan.',
      'You want to add pop-ups, alert bars, or opt-in forms on third-party web pages that you own.',
      'You care about a high-quality support team that can help you tackle any issues.',
    ],
    competitor: [
      'You’re only interested in creating landing pages.',
      'You run a lot of paid media campaigns with a high monthly ad spend.',
      'You’re willing to pay more for an enterprise solution.',
      'You’re experienced with design software and feel comfortable using a free form editor.',
      'You’re part of a larger team and want to collaborate in real-time.',
      'You want to incorporate heat maps into your analytics data.',
    ],
  },
}

const LeadpagesVsInstapage = () => (
  <>
    <SiloHeader title={verbiage.main.title} breadcrumbs={breadcrumbs} />
    <OuterContainer>
      {/* Desktop Menu Bar */}
      <SiloComparisonDesktopMenu
        pageRoutes={pageLinks}
        verbiage={verbiage}
        competitorImage={instapageSVG}
      />
      {/* Desktop Sidebar Menu */}
      <SidebarStyled
        pageRoutes={pageLinks}
        competitorImage={instapageSVG}
        useScrollLink
      />
      {/* Mobile Menu */}
      <SiloComparisonMobileMenu pageRoutes={pageLinks} verbiage={verbiage} />
      <InnerContainer>
        {/* Main Page Content */}
        <BodyContainer>
          <MainContainer>
            <SectionWrapper name="overview">
              <StyledParagraphLarge>
                When it comes to landing page and website builders, you have a
                lot of options. And to make matters more confusing, it’s rarely
                a matter of which is best—it’s about which is best{' '}
                <em>for you and your business</em>. Because when you stack them
                up against each other, different tools do different things well.
              </StyledParagraphLarge>
              <StyledParagraphSmall>
                Our company’s mission is to help you and your small business
                succeed, even if it means Leadpages isn’t the right tool for
                you.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                So—Leadpages vs. Instapage. What’s the difference?
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                We’ll break it down for you using a few different categories
                that include ease of use, functionality/features, look and feel,
                conversion tools, publishing options, and of course, value.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Ultimately, both tools are designed to help you build, publish,
                and optimize landing pages. However, the biggest difference
                right off the bat is that Leadpages is designed for small
                businesses and entrepreneurs, while Instapage caters to medium
                and enterprise-sized businesses.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                But it’s not as simple as that. Let’s dive a little deeper and
                see what these tools have to offer.
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
              <StyledSectionTitleH2>
                1 - Ease of Use: <br />
                The building experience
              </StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                Leadpages is one of the simplest tools to use on the market,
                with no coding or web design experience necessary. Once you log
                in, simply choose one of the professionally-designed templates,
                edit the text and images, move a few things around (if you
                want), and you’re ready to go live.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                The number one thing that makes Leadpages such a user-friendly
                platform is the{' '}
                <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/217415887-Build-a-landing-page">
                  Drag & Drop Builder
                </OutboundLink>
                . It lets you click, drag, and drop page elements where you want
                them, so it’s easy to get things looking exactly how you want
                them to. Leadpages’ grid system of sections, rows, and columns
                mean that page elements snap into place right where they should
                be—perfect for non-designers.
              </StyledParagraphSmall>
              <StyledWistia videoId="ago55021i9" />

              <StyledParagraphSmall>
                The platform gives you a shortcut to expanding the existing
                templates with section templates. Organized into categories like
                Hero, FAQ, and About, they make it easy to bring more
                customization to any page.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Want to use your own fonts when publishing your page? You can
                upload up to 10 custom font families to Leadpages. This expands
                on the existing library of 40+ fonts.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Furthermore, the built-in Leadmeter tool gives you real-time
                recommendations on how to improve your conversion rate. It’s
                based on data gleaned from over a million pages created by
                customers, so you can drastically improve your chances of
                creating a high-converting landing page, even if you’ve never
                built one before.
              </StyledParagraphSmall>
              <StyledImage image={leadmeterExcellent} />
              <StyledParagraphSmall>
                In addition to offering landing pages, Leadpages includes a full
                website builder as well. The same ease and flexibility of the
                landing page builder is extended to a mobile-responsive site
                builder.
              </StyledParagraphSmall>
              <StyledH3>Instapage:</StyledH3>

              <StyledParagraphSmall>
                Instapage offers an intuitive grid-free, drag-and-drop interface
                that provides you with a lot of flexibility. Most noticeably,
                you’ll have more ways to build, edit, and design your page.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Instapage also includes Instablocks and Global blocks. The
                former allows you to save your own section templates. The latter
                gives you the ability to update all instances of a published
                global block from one place. However, this feature is only
                available on higher-priced custom plans.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Like with Leadpages, you can add custom fonts to Instapage, but
                not on their first-tier level.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                For those with experience using website and landing page
                builders—or those with significant design knowledge—these
                additional options may be useful. However, if you’ve never built
                landing pages before you might find the platform a little
                overwhelming at first.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Instapage currently doesn’t offer a website builder.
              </StyledParagraphSmall>

              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                We’re going to call this one a tie.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Leadpages makes it easy to drag and drop elements into a smart
                grid layout, which is ideal for those with less web design
                knowledge. Additionally, the Leadmeter provides valuable
                insights that help you create high-converting pages right out of
                the box.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Instapage’s grid-free drag-and-drop builder may be more
                appealing to experienced web designers who are familiar with
                advanced design software and need more flexibility in the way
                they build pages. Instablocks and global blocks are also quite
                useful for those with design experience.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Functionality */}
            <SectionWrapper name="functionality">
              <StyledSectionTitleH2>
                2 - Functionality: features, widgets & integrations
              </StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                Leadpages integrates natively with 90 online marketing tools
                (and counting)—including all major email service providers
                (ESPs), customer relationship management tools (CRMs), webinar
                platforms, and social networks. That’s in addition to the 2,000+
                integrations available through Zapier.
              </StyledParagraphSmall>
              <StyledImage image={leadpages1000Integrations} />
              <StyledParagraphSmall>
                Leadpages also offers 18 widgets that allow you to add features
                like progress bars, countdown timers, social like buttons,
                icons, and more to your page. Perhaps most importantly,
                Leadpages has integrated checkout pages and payment via Stripe,
                so you can easily sell your services online.
              </StyledParagraphSmall>
              <StyledImage image={widgets} />
              <StyledParagraphSmall>
                As an added bonus, Leadpages stores data from your integrations
                and resends it if the app is down. This helps ensure you stay up
                and running, even if one of your tools is having technical
                issues.
              </StyledParagraphSmall>

              <StyledH3>Instapage:</StyledH3>
              <StyledParagraphSmall>
                Instapage also has a strong integration library, with more than
                100 tools on the roster that can be connected to your page. This
                includes integrations for marketing automation, ESPs, CRMs,
                ecommerce, analytics, advertising, call tracking, pop-ups, and
                live chat.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Some integrations are native, while others are made possible
                through third-party platforms. Instapage also works with Zapier,
                which greatly expands the number of integrations available to
                you.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                One cool feature is their unique dynamic text replacement, which
                allows you to use real-time editing to tailor an ad to a landing
                page—ideal for those who do a lot of PPC advertising.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Instapage offers 13 widgets within their builder with many of
                the same functions as Leadpages. But they do lack certain key
                widgets including progress bars, Calendly, OpenTable, and
                Checkouts (although you can add these features through
                third-party integrations).
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Again, this depends on your needs.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Both platforms offer a wide range of useful (and similar)
                integrations—with Instapage beating out Leadpages in terms of
                the number of integrations. Although the fact that both
                platforms work with Zapier means virtually any app or tool can
                be connected to both.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Leadpages does offer a few more widgets, which allow you to add
                features like Calendly booking and payments through Stripe
                without having to go through the integration process.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Look & feel */}
            <SectionWrapper name="look-and-feel">
              <StyledSectionTitleH2>
                3 - Look & feel: templates & customizability
              </StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                Leadpages has over 220 landing page templates to choose from.
                Not only that, but they offer landing pages designed for
                specific industries and applications. Are you an author looking
                to promote your new book? There are landing pages for that. Need
                a landing page for your next event? There are landing pages for
                that too.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Not only can you filter templates by industry, page type, color,
                and style, but you can also sort them by conversion rate. This
                means you can find a template that both fits your business and
                helps you generate leads and sales.
              </StyledParagraphSmall>
              <StyledImage image={conversionSortTemplates} />

              <StyledParagraphSmall>
                All of Leadpages’ landing page and website templates are mobile
                responsive and fully customizable. Change colors, add and remove
                sections, and more to create your ideal landing page.
              </StyledParagraphSmall>
              <StyledWistia videoId="7urnhosr4y" />
              <StyledH3>Instapage:</StyledH3>
              <StyledParagraphSmall>
                Instapage has a similarly impressive library, with over 200
                templates. You also have the ability to purchase premium themes
                through Envato. Templates are sorted into a number of different
                categories, including app download, demo request, event
                registration, product sales, thank you, and more. This makes it
                easy to quickly identify the templates that fit your needs.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                That being said, the designs don’t offer much variety. Many
                templates look very similar, with sections simply rearranged or
                adjusted. This could lead to your page looking like a lot of
                other Instapage landing pages. So, when using Instapage
                templates you might want to add a little more customization to
                set yourself apart.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                This one is close, but Leadpages has the edge here. With more
                unique templates, and the ability to sort by conversion rate,
                it’s a lot easier to find a unique high-converting theme with
                Leadpages.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Conversion tools: collect leads and close sales */}
            <SectionWrapper name="conversion-tools">
              <StyledSectionTitleH2>4 - Conversion tools</StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                As the name implies, Leadpages’ goal is to help you find leads
                and customers for your business. In fact, the whole platform was
                developed with conversions in mind. All Leadpages plans include
                a wide range of tools that simplify the lead generation process.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                These features include:
              </StyledParagraphSmall>
              <UL>
                <ListItem>
                  <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/360019181932-Leadmeter">
                    <strong>Leadmeter</strong>
                  </OutboundLink>
                  , which provides real-time conversion tips as you build your
                  page.
                </ListItem>
                <ListItem>
                  <Link href="/product/alert-bars" passHref legacyBehavior>
                    <ArticleLink>
                      <strong>Alert bars</strong>
                    </ArticleLink>
                  </Link>{' '}
                  that are publishable on any website or landing page—perfect
                  for events, downloads, lead magnets, or anything else you want
                  to promote.
                </ListItem>
                <ListItem>
                  <Link href="/product/pop-up-builder" passHref legacyBehavior>
                    <ArticleLink>
                      <strong>Pop-ups</strong>
                    </ArticleLink>
                  </Link>
                  , that prompt signups and turn traffic into leads—even as
                  visitors leave.
                </ListItem>
                <ListItem>
                  <Link href="/product/pop-up-builder" passHref legacyBehavior>
                    <ArticleLink>
                      <strong>Checkouts</strong>
                    </ArticleLink>
                  </Link>
                  , that allow you to sell your services online and accept
                  recurring payments.
                </ListItem>
              </UL>
              <StyledImage image={purchaseTraining} />
              <StyledParagraphSmall>
                In addition to these tools, Leadpages offers unlimited A/B
                testing on the Pro plan, so you can test different variations of
                your page to find out which version converts best. And once you
                capture leads they’re conveniently stored in the Leads Library
                for you to review.
              </StyledParagraphSmall>
              <StyledImage image={ABTesting} />
              <StyledParagraphSmall>
                Plus, any customer of Leadpages can use the lead magnet delivery
                feature to send an initial welcome email with a lead magnet to
                new leads and customers.
              </StyledParagraphSmall>
              <StyledH3>Instapage:</StyledH3>
              <StyledParagraphSmall>
                Instapage offers solid analytics and A/B testing. To create
                pop-ups or alert bars, you would need to embed code from
                third-party tools like OptinMonster or OptiMonk, as they’re not
                part of Instapage natively. It also has an option to integrate
                landing pages directly with Google Ads—which is great if you
                want to leverage PPC advertising.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                If you opt for one of their advanced plans you’ll have access to
                the heat map tool, which allows you to see where visitors are
                spending their time on your page, and the ability to download
                your leads.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Instapage allows you to upload lead magnet files and link to
                them from your thank you pages or in a third-party email.
                However, Instapage is not able to send out a lead magnet
                delivery email like Leadpages.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Leadpages takes this category, especially if you’re a small
                business without a lot of lead generation experience.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                While some of the same features exist in each platform,
                Leadpages offers more native conversion tools, downloadable CSV
                files of leads at all plan levels, and lead magnet delivery. The
                Leadmeter guides you through the process of creating a
                high-converting landing page, and the Leads Library stores all
                your leads in one place.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                For enterprise-level marketers, the tighter integration with
                Google Ads and heat mapping is definitely a plus.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Publishing options */}
            <SectionWrapper name="publishing-options">
              <StyledSectionTitleH2>
                5 - Publishing options
              </StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                Leadpages gives you lots of different ways to publish your
                pages. If you don’t already have your own domain you can publish
                on a free Leadpages subdomain (https://your-domain.lpages.co).
                Or if you have a domain, Leadpages lets you connect it to your
                account and will host your page. Both of these options are free.
              </StyledParagraphSmall>
              <StyledImage image={domains} />
              <StyledParagraphSmall>
                If you don’t own your own custom domain you can get a{' '}
                <OutboundLink href="https://support.leadpages.com/hc/en-us/articles/360029210551-Free-custom-domain-offer">
                  free domain (powered by Hover)
                </OutboundLink>{' '}
                when you sign up for an annual Leadpages subscription.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Want to publish your page to WordPress? Use the Leadpages plugin
                to publish your landing pages, pop-ups, and alert bars on your
                WordPress site in less than four clicks. You can even publish
                them as a dynamic HTML page on non-WordPress websites. This
                option automatically updates when you make changes in the
                Leadpages builder.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Finally, Leadpages makes it easy to share a landing page or
                website template with your team or clients who use Leadpages at
                no additional cost.
              </StyledParagraphSmall>
              <StyledH3>Instapage:</StyledH3>
              <StyledParagraphSmall>
                Like Leadpages, Instapage lets you publish your landing page to
                your own custom domain or WordPress. It also gives you the
                ability to publish your page to a Drupal site.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                If you wish to test your landing page before it goes live, you
                can do so through their page demo feature. This lets you publish
                it to an Instapage subdomain. However, keep in mind that these
                pages have a limit of 30 requests per minute per IP and they’ll
                be unpublished after 72 hours during the free trial stage of
                your subscription.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                If you want to share your page as you’re working on it you can
                set multi-user permissions of the viewer, editor, and manager to
                make collaboration easier.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                We’ll call this a tie. Both services can host your landing page
                for you, and offer an option to publish via a WordPress plugin,
                or connect to a third-party site in a very similar process. They
                both have multi-device preview and domain mapping. However,
                Instapage includes multi-user permissions for collaborating with
                large teams or agencies.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Get traffic */}
            <SectionWrapper name="traffic-and-advertising">
              <StyledSectionTitleH2>
                6 - Traffic & advertising
              </StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                There’s more to building a landing page than just hitting
                publish and sending it into the wild. You need to track and
                optimize your efforts to ensure what you’re doing is actually
                working.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Luckily, Leadpages offers a streamlined analytics dashboard and
                real-time data, so you always know exactly how your pages are
                performing.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                A big part of SEO is page load speed, and this is one area where
                Leadpages really excels. The platform has{' '}
                <Link href="/blog/landing-page-speed/" passHref legacyBehavior>
                  <ArticleLink>lightning-fast page load speeds</ArticleLink>
                </Link>{' '}
                of 2.4 seconds faster than average, so you’ll never lose leads
                while they wait for your page to load.
              </StyledParagraphSmall>
              <StyledImage image={fastPageLoads} />
              <StyledParagraphSmall>
                Leadpages also offers{' '}
                <OutboundLink href="https://www.leadpages.com/blog/landing-page-seo-rank/">
                  search engine optimization
                </OutboundLink>{' '}
                tools. Use the SEO settings and previews to set the meta title,
                keywords, and description of any page to increase the likelihood
                of prospects finding you through search.
              </StyledParagraphSmall>
              <StyledImage image={seoSettings} />
              <StyledH3>Instapage:</StyledH3>
              <StyledParagraphSmall>
                Instapage offers an analytics dashboard that displays visitors,
                conversions, and conversion rates. Plus, their heat map feature
                provides some valuable insights that help you further optimize
                your page. Instapage also integrates with Google Ads and AMP,
                which is great for media buyers.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                In an effort to increase their page load speed, Instapage has
                developed their proprietary Thor Render Engine. This back-end
                technology ensures your landing pages will always load as
                quickly as possible.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Just like Leadpages, you can easily edit your metadata to
                optimize it for search engines.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                This is another category that’s too close to call. Both tools
                offer a real-time analytics dashboard (displaying traffic and
                conversion rates) and integration with Google Analytics or other
                third-party services.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                But there are features that outweigh one another, depending on
                your goals. For instance, Leadpages’ best-in-class page load
                speeds are a huge draw, while Instapage offers native
                integrations with Google Ads and AMP templates that may be more
                important to your business goals.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Bang for your buck */}
            <SectionWrapper name="value">
              <StyledSectionTitleH2>7 - Value</StyledSectionTitleH2>
              <StyledH3>Leadpages:</StyledH3>
              <StyledParagraphSmall>
                Leadpages’ Standard plan starts at $37/month (paid annually),
                while the Pro plan is $74/month (paid annually).{' '}
                <OutboundLink href="https://www.leadpages.com/pricing">
                  Every plan
                </OutboundLink>{' '}
                includes unlimited traffic, leads, and landing page publishing.
                Customer support is available through email, chat, and priority
                phone, based on plan level. Weekly marketing and conversion
                coaching is available for all.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                It’s also worth noting that Leadpages features a website builder
                in addition to the landing page builder, meaning you only need
                one subscription for both your website and your landing pages.
              </StyledParagraphSmall>
              <StyledH3>Instapage:</StyledH3>
              <StyledParagraphSmall>
                Instapage’s Building Plan is $299/month (with an annual discount
                available). This plan is capped at 30 published landing pages
                and 30,000 visitors. They also offer custom packages that
                include additional features and team members at higher metered
                rates.
              </StyledParagraphSmall>
              <StyledH3>Verdict:</StyledH3>
              <StyledParagraphSmall>
                Leadpages is more affordable for most small businesses, but
                agencies and larger teams will appreciate the multi-user
                collaboration features (even at a much higher cost) with
                Instapage.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Instapage offers a few extra features, namely their integration
                with Google Ads and AMP. However, you pay a premium for this.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                If you’re looking for a cost-effective solution that includes
                everything you need to run your business (unlimited leads and
                traffic, website builder, conversion tools, etc.) then Leadpages
                is probably the right choice for you.
              </StyledParagraphSmall>
            </SectionWrapper>
            {/* Final verdict */}
            <SectionWrapper id="last-section" name="final-verdict">
              <StyledSectionTitleH2>
                So who wins—Leadpages or Instapage?
              </StyledSectionTitleH2>
              <StyledParagraphSmall>
                There are a lot of similarities between the two platforms.
                Ultimately, they’re both a great choice for creating
                high-converting landing pages. That being said, there are
                differences in the features that might make one better suited
                for your business than the other.
              </StyledParagraphSmall>
              <StyledParagraphSmall>
                Here’s a quick recap to help you decide which platform is right
                for you.
              </StyledParagraphSmall>
              <SmallHeadline>
                Use <PurpleText>Leadpages</PurpleText> if:
              </SmallHeadline>
              <SiloCheckMarkList
                checkList={checkMarkContent.finalVerdict.leadpages}
              />
              <SmallHeadline>Use Instapage if:</SmallHeadline>
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
              nextUrl={bottomNavigationData.instapage.nextUrl}
              nextTitle={bottomNavigationData.instapage.nextTitle}
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

export default LeadpagesVsInstapage
