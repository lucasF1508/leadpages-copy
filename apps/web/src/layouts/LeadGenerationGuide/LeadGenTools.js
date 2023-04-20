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
  Image1,
  InnerContainer,
  ImageWithBorder,
  MainContainer,
  OutboundLink,
  OuterContainer,
  PageSupertitle,
  PageTitle,
  ParagraphLarge,
  ParagraphSmall,
  ListItem,
  UL,
} from '@legacy/components/silos/SiloGlobalStyles'
// data
import { pageRoutes, verbiage } from '@legacy/data/lead-generation-guide_data'
// images
import image1 from '@legacy/assets/images/silos/lead-generation-guide/1-1-the-leader-leadpages.jpg'
import image3 from '@legacy/assets/images/silos/lead-generation-guide/3-1-linkedin-sales-navigator.jpg'
import image4 from '@legacy/assets/images/silos/lead-generation-guide/4-1-ga-dashboard.jpg'
import image5 from '@legacy/assets/images/silos/lead-generation-guide/5-1-chat-services.jpg'
import image6 from '@legacy/assets/images/silos/lead-generation-guide/6-1-calendly-scheduler.png'
import image7 from '@legacy/assets/images/silos/lead-generation-guide/7-1-crm-integrations.png'

const LeadGenerationTools = () => (
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
            <PageSupertitle>Chapter 6</PageSupertitle>
            <PageTitle>
              9 Lead Generation Tools That Make Marketing Way, Way Easier
            </PageTitle>
            <ParagraphLarge>
              Lead generation doesn’t happen on its own. You have to pull
              together a slew of resources to warm up your traffic and transform
              them into leads.
            </ParagraphLarge>
            <ParagraphSmall>
              All of the tools we’ll discuss below are compatible with your
              Leadpages account. In fact, Leadpages has hundreds of available
              integrations, so you can completely customize your lead systems.
            </ParagraphSmall>
            <H2>1. High-converting web content</H2>
            <ParagraphSmall>
              As the leader in conversion marketing, Leadpages offers the
              easiest-to-build landing pages, websites, pop-ups and more.
            </ParagraphSmall>
            <ParagraphSmall>
              Leadpages landing pages are also equipped with&nbsp;
              <Link href="/product/leadmeter" passHref>
                <ArticleLink aria-label="Leadmeter">Leadmeter,</ArticleLink>
              </Link>
              &nbsp; built-in technology that instantly analyzes your page's
              content, compares it to tens of thousands of pages in our
              database, rates its ability to convert, and provides step-by-step
              guidance on how to optimize your page as you build it.
            </ParagraphSmall>
            <ImageWithBorder
              image={image1}
              alt="The leader Leadpages"
              title="The leader Leadpages"
            />
            <ParagraphSmall>Conversion starts with content.</ParagraphSmall>
            <H2>2. Google Ads brings you prospects</H2>
            <ParagraphSmall>
              Remember that lead generation starts with bringing in qualified
              traffic who could potentially convert to leads.
            </ParagraphSmall>
            <ParagraphSmall>
              <OutboundLink
                href="https://ads.google.com/home/"
                aria-label="Google Ads"
              >
                Google Ads
              </OutboundLink>
              &nbsp; is one of the most popular online search PPC
              (pay-per-click) campaigns because it has the widest audience and
              most effective algorithm.
            </ParagraphSmall>
            <Image1 image={image4} alt="Google Ads" title="Google Ads" />
            <ParagraphSmall>
              Google Ads will put your advertisements in front of relevant
              searchers who are looking up keywords related to your business.
            </ParagraphSmall>
            <ParagraphSmall>
              Using Google Ads to send traffic to landing pages and web pages
              that are optimized for lead generation can be highly effective.
              Google knows how to bring you the most relevant searchers, and a
              highly optimized post-click page can ensure you’re capturing
              quality prospects.
            </ParagraphSmall>
            <H2>3. Attract traffic (and leads) with social media</H2>
            <ParagraphSmall>
              Google Ads isn’t the only way to pull in traffic to your site.
              Social media is becoming increasingly popular as a means of
              generating both paid and organic traffic.
            </ParagraphSmall>
            <ParagraphSmall>
              Facebook is still one of the greatest lead generation tools
              available. Facebook ads see lots of success, and at a low cost
              (for now, at least). Not only can you create posts and
              advertisements that direct people to your landing pages, but you
              can even publish your landing page right on Facebook as a custom
              tab. So FB visitors don’t even have to leave their social media
              page to get value from you (and to give you their info). This
              makes Facebook a great solution for both attracting traffic and
              generating leads.
            </ParagraphSmall>
            <ParagraphSmall>
              Not sure how to use Facebook advertising to grab leads? Check out
              this&nbsp;
              <OutboundLink
                href="https://www.leadpages.com/blog/facebook-lead-generation/"
                rel="noopener"
                aria-label="Is Facebook Good for Lead Generation? It Can Be with These 9 Expert Dos and Don’ts"
              >
                in-depth article with the do&#39;s and don’ts
              </OutboundLink>
              &nbsp; of Facebook as a lead generation tool.
            </ParagraphSmall>
            <ParagraphSmall>
              Instagram has also started doing the same thing. They offer
              sponsored posts and even paid Stories for businesses. With a click
              or a swipe up, viewers can instantly land on a page to buy a
              product or get a free downloadable. Instagram has become the king
              of social media lead generation. You can reach a broader audience
              and sell to them in as little as two taps on their phone. Get some
              helpful&nbsp;
              <OutboundLink href="" alt="Instagram lead generation tactics">
                Instagram lead generation tactics
              </OutboundLink>
              &nbsp; here.
            </ParagraphSmall>
            <ParagraphSmall>
              On all your social media platforms, your page “bio” is also a
              great place to include a link to your lead generation landing
              page.
            </ParagraphSmall>
            <H2>
              4. LinkedIn Sales Navigator is great for B2B lead generation
            </H2>
            <ParagraphSmall>
              LinkedIn is storing lots of company and client information in its
              database. And they’re willing to share that info with you!
              With&nbsp;
              <OutboundLink
                href="https://business.linkedin.com/sales-solutions/sales-navigator#"
                aria-label="LinkedIn Sales Navigator"
              >
                LinkedIn Sales Navigator
              </OutboundLink>
              , you can have access to advanced lead search and recommendations
              to target highly relevant prospects for your business.
            </ParagraphSmall>
            <Image1
              image={image3}
              alt="LinkedIn Sales Navigator"
              title="LinkedIn Sales Navigator"
            />
            <ParagraphSmall>
              This works especially well for online professionals and small
              businesses looking to establish a strong foothold in their
              industry or generate B2B leads.
            </ParagraphSmall>
            <ParagraphSmall>
              Once you know who to target on LinkedIn, they give you sales tools
              to close the deal. You can even integrate this tool with Leadpages
              to send your LinkedIn leads directly to your landing pages that
              are designed to convert.
            </ParagraphSmall>
            <H2>5. Use any kind of form field you can think of</H2>
            <ParagraphSmall>
              We’ve given you lots of different types of lead magnets and opt-in
              forms you can use on landing pages and websites. But you need to
              have the tech available to use these magnets. So, you want to find
              the right tool for your lead magnet.
            </ParagraphSmall>
            <ParagraphSmall>
              Just a few (of the many) examples include:
            </ParagraphSmall>
            <UL>
              <ListItem>
                Typeform surveys and questionnaires, right on your landing page
              </ListItem>
              <ListItem>
                ClickSend SMS automatically triggers an action when a lead puts
                in their info
              </ListItem>
              <ListItem>
                GoToWebinar fills your email list and webinar seats at the same
                time
              </ListItem>
            </UL>
            <br></br>
            <ParagraphSmall>
              Or you can even integrate Leadpages landing pages, pop-ups, and
              alert bars with other sites on Squarespace, Weebly, Wix, and
              WordPress.
            </ParagraphSmall>
            <ParagraphSmall>
              If you can dream up a lead generation tactic, Leadpages probably
              has an integration option for it. If not, you can always&nbsp;
              <Link href="/contact" passHref>
                <ArticleLink aria-label="contact us" data-gtm="contact-us-link">
                  contact us
                </ArticleLink>
              </Link>
              &nbsp; and we will make it happen for you.
            </ParagraphSmall>
            <H2>6. Interact with live chat</H2>
            <ParagraphSmall>
              Chat boxes are one of the most intimate ways to connect with
              on-site visitors. You can answer questions, direct users to
              relevant pages, or just have a conversation in your brand voice.
            </ParagraphSmall>
            <Image1 image={image5} alt="Chat services" title="Chat services" />
            <ParagraphSmall>
              When people interact with your chat box, they’re already showing
              some level of interest in your brand. They want to talk to you, so
              they won’t mind hearing from you again in the future. Following up
              with a live chat to see how their experience was or offer
              additional resources is a great way to start nurturing a lead.
            </ParagraphSmall>
            <ParagraphSmall>
              <OutboundLink
                href="https://www.livechatinc.com/chat-platform/"
                aria-label="Chat.io"
              >
                Chat.io
              </OutboundLink>
              &nbsp; and&nbsp;
              <OutboundLink
                href="https://www.livechatinc.com/"
                aria-label="Live Chat"
              >
                Live Chat
              </OutboundLink>
              &nbsp; integrate with Leadpages so you can connect with site
              visitors and then use their info for future communications. This
              includes chatting through emails or Facebook messages, so you can
              completely streamline your live chat and customer service.
            </ParagraphSmall>
            <ParagraphSmall>
              Make sure you ask for their email address before they launch the
              chat, so you can contact them later (and keep them as a lead).
              People don’t mind giving their email address before chatting in
              case they get disconnected or need a follow up answer.
            </ParagraphSmall>
            <H2>7. Get them on the books with self-schedulers</H2>
            <ParagraphSmall>
              Online schedulers, such as&nbsp;
              <OutboundLink href="https://calendly.com/" aria-label="Calendly">
                Calendly
              </OutboundLink>
              &nbsp; and&nbsp;
              <OutboundLink
                href="https://acuityscheduling.com/"
                aria-label="Acuity"
              >
                Acuity
              </OutboundLink>
              &nbsp; enable visitors to self-schedule appointments or meetings
              directly on your calendar. They’re an excellent opportunity to
              collect highly-qualified leads and save time by skipping the
              back-and-forth of finding an appointment time that fits both of
              your schedules.
            </ParagraphSmall>
            <Image1
              image={image6}
              alt="Calendly Scheduler"
              title="Calendly Scheduler"
            />
            <ParagraphSmall>
              Use online schedulers to offer one-on-one consultations, chemistry
              calls, screening sessions, or individualized appointments.
            </ParagraphSmall>
            <ParagraphSmall>
              When a visitor schedules something with you, they’re demonstrating
              their strong desire to interact with your business in some way. So
              use them to collect leads, schedule appointments, and trigger
              lead-nurture email sequences so you can follow up.
            </ParagraphSmall>
            <H2>8. Nurture leads with CRM</H2>
            <ParagraphSmall>
              Customer relationship management (CRM) software is a must to make
              sure you don’t collect a bunch of leads that you do nothing with.
              You want to consistently contact and ‘warm up’ those leads, so
              they’re ready to convert to a sale. A CRM system will help manage
              your lead list to keep track of your prospects throughout your
              marketing campaign.
            </ParagraphSmall>
            <ParagraphSmall>
              <OutboundLink
                href="https://www.hubspot.com/products/crm"
                aria-label="Hubspot CRM"
              >
                Hubspot CRM
              </OutboundLink>
              &nbsp; is a free tool to help organize and track your leads once
              you have them. It can even analyze interactions with leads to make
              sure you’re steadily engaging and building relationships.
            </ParagraphSmall>
            <ParagraphSmall>
              <OutboundLink
                href="https://www.salesforce.com/"
                rel="nofollow noopener"
                aria-label="Connect to your customers in a whole new way with the world’s #1 CRM platform"
              >
                Salesforce
              </OutboundLink>
              &nbsp; is another customer management software that helps you
              organize leads, customers, and sales teams. It’s the world’s
              leading CRM because it cohesively streamlines front-house and
              back-house to create an interconnected business.
            </ParagraphSmall>
            <Image1
              image={image7}
              alt="CRM Integrations"
              title="CRM Integrations"
            />
            <H2>9. Convert with email marketing</H2>
            <ParagraphSmall>
              Of course, email marketing is one of the most popular means of
              nurturing your leads once you’ve got ‘em. Setting up an email
              marketing campaign pulls your leads through to the next stage of
              your funnel, so you can keep your business moving forward.
            </ParagraphSmall>
            <ParagraphSmall>
              So whether you’re emailing a discount code, a downloadable guide,
              or a weekly newsletter, your leads are directly connected to your
              email system for fast deliverables.
            </ParagraphSmall>
            <ParagraphSmall>
              There are a lot of email marketing platforms out there, from Gmail
              to&nbsp;
              <OutboundLink href="https://www.klaviyo.com/" aria-label="Gmail">
                Klaviyo
              </OutboundLink>
              &nbsp; to&nbsp;
              <OutboundLink
                href="https://mailchimp.com/"
                aria-label="MailChimp"
              >
                Mailchimp
              </OutboundLink>
              &nbsp; and beyond. Choose the one that works best for your
              business and style, and then integrate it with your lead gen tools
              and pages to make sure your leads are instantly getting emails
              once they opt-in.
            </ParagraphSmall>
            <H2>Better Lead Generation for Your Business</H2>
            <ParagraphSmall>
              Lead generation tools help you attract relevant visitors,
              transform them into qualified leads, and manage your lead list as
              you move towards conversion.
            </ParagraphSmall>
            <ParagraphSmall>
              Use the resources at your disposal. And with Leadpages, all of the
              resources are yours for the taking with our extensive list
              of&nbsp;
              <Link href="/integrations" passHref>
                <ArticleLink aria-label="integrations">
                  integrations.
                </ArticleLink>
              </Link>
            </ParagraphSmall>
            <ParagraphSmall>
              Whether you’re using a lead magnet on a landing page or a
              subscription box on your website’s blog, our tools help you:
            </ParagraphSmall>
            <UL>
              <ListItem>Attract traffic</ListItem>
              <ListItem>
                Design pages that actually encourage leads to give you their
                info
              </ListItem>
              <ListItem>Offer top-notch lead magnets</ListItem>
              <ListItem>
                Connect your lead generation forms to email marketing and
                customer management software
              </ListItem>
              <ListItem>Convert your leads to the next level</ListItem>
            </UL>
            <br></br>
            <ParagraphSmall>
              Lead generation is the lifeblood of your business. Focusing on
              your lead generation tools and strategies will show massive
              results in your customer satisfaction, revenue, and business
              growth.
            </ParagraphSmall>
            <ParagraphSmall>
              If you’ve loved learning about lead generation, check out
              our&nbsp;
              <Link href="/conversion-optimization-guide" passHref>
                <ArticleLink aria-label="conversion rate guide">
                  conversion rate guide.
                </ArticleLink>
              </Link>
              &nbsp; In that digital guide, we teach you how to increase
              conversion rate--including the conversion of visitors to leads.
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

export default LeadGenerationTools
