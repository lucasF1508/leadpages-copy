import React from 'react'
// components
import SiloHeader from '@legacy/components/headers/SiloHeader'
import SiloDesktopMenu from '@legacy/components/silos/SiloDesktopMenu'
import SiloMobileMenu from '@legacy/components/silos/SiloMobileMenu'
import SiloNavigationCards from '@legacy/components/silos/SiloNavigationCards'
import SiloSidebar from '@legacy/components/silos/SiloSidebar'
import Link from 'next/link'
// conversion tools
import TemporaryLeadbox_ExitIntent from '@legacy/components/conversion-tools/LB_DownloadUltimateWebsiteWorkbook'
import TemporaryLeadbox_Timed from '@legacy/components/conversion-tools/LB_GetInspiredWithLandingPageExamples'
// styles
import {
  ArticleLink,
  BodyContainer,
  H2,
  H3,
  IframeWrapper,
  InnerContainer,
  ListItem,
  MainContainer,
  OL,
  OutboundLink,
  OuterContainer,
  PageSupertitle,
  PageTitle,
  ParagraphLarge,
  ParagraphSmall,
  StaticTemplateLink,
  StaticPreviewImage,
  TemplatePreviewHolder,
  UL,
} from '@legacy/components/silos/SiloGlobalStyles'
// data
import { pageRoutes, verbiage } from '@legacy/data/lead-generation-guide_data'

const LeadGenerationLandingPageExamples = () => (
  <>
    <TemporaryLeadbox_Timed />
    <TemporaryLeadbox_ExitIntent />
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
            <PageSupertitle>Chapter 3</PageSupertitle>
            <PageTitle>
              5 Lead Generation Landing Page Examples To Get You Started
            </PageTitle>
            <ParagraphLarge>
              <i>
                In this chapter, we’re going to take you through some of our
                most popular lead generation landing page examples. Leadpages
                offers pre-designed,&nbsp;
                <Link href="/templates" passHref>
                  <ArticleLink aria-label="mobile-responsive templates">
                    mobile-responsive templates
                  </ArticleLink>
                </Link>
                &nbsp; that you can quickly customize and publish without
                touching a speck of code. With the help of our drag and drop
                editor, every element on the page can be personalized to suit
                your unique business and campaign type. New customers come from
                carefully nurtured leads, which (often) come from lead
                generating landing pages. Lead generation pages are specifically
                designed to collect the contact information of your web traffic.
                This can come in the form of a name and email address, phone
                number, company size, etc.
              </i>
            </ParagraphLarge>
            <ParagraphLarge>
              Just swap out the images, tweak the sales copy, add in a call to
              action, click publish and you’re ready to start generating leads.
            </ParagraphLarge>
            <ParagraphSmall>
              Check out our&nbsp;
              <Link href="/templates" passHref>
                <ArticleLink aria-label="Landing Page Template Library">
                  Landing Page Template Library
                </ArticleLink>
              </Link>
              &nbsp; to explore hundreds of options for your lead generating
              landing pages.
            </ParagraphSmall>
            <H2>Ebook Landing Page Opt-In</H2>
            <TemplatePreviewHolder>
              <IframeWrapper>
                <iframe
                  title="Preview"
                  src="https://api.leadpages.io/template/v2/templates/LotufspwjLfnDgSi67fMsN/preview.html"
                  scrolling="auto"
                  width="100%"
                  height="100%"
                  marginHeight="0"
                  frameBorder="0"
                />
              </IframeWrapper>
            </TemplatePreviewHolder>
            <StaticTemplateLink href="/templates/preview/LotufspwjLfnDgSi67fMsN">
              <StaticPreviewImage src="https://storage.googleapis.com/lp-template-assets-prod/screenshots%2FLotufspwjLfnDgSi67fMsN-552x316.jpg?cb=-3556065429173465727" />
            </StaticTemplateLink>
            <H3>
              <OutboundLink
                href="/templates/preview/LotufspwjLfnDgSi67fMsN"
                alt="Modern Ebook Sales Page"
              >
                Modern Ebook Sales Page
              </OutboundLink>
            </H3>
            <ParagraphSmall>
              Are you a budding author eager to build an email subscriber list
              by giving away an ebook, guide, or chapter? Collecting a lead list
              gives you a set of fans who are interested in what you’re
              offering, whether that’s a full book or a different product (like
              a course or speaking event).
            </ParagraphSmall>
            <ParagraphSmall>
              Even if “writing” isn’t your primary field, ebooks are a great way
              for any individual or brand to share information with your
              audience. Your yoga studio could share an ebook of popular yoga
              poses, or an accounting manager could give an ebook filled with
              tax secrets.
            </ParagraphSmall>
            <ParagraphSmall>
              Competition in the book/ebook marketplace is fierce, though. To
              cut through the noise and get the attention of your audience, you
              have to instill excitement right from the get-go.
            </ParagraphSmall>
            <ParagraphSmall>
              This&nbsp;
              <Link href="/templates/preview/LotufspwjLfnDgSi67fMsN" passHref>
                <ArticleLink aria-label="modern ebook sales landing page">
                  modern ebook sales landing page
                </ArticleLink>
              </Link>
              &nbsp; (which also functions as a “minisite”) helps you put your
              ebook, kindle book, or recent publication on display. You can
              provide a brief synopsis or sales pitch and then invite your
              audience to immediately take action.
            </ParagraphSmall>
            <ParagraphSmall>
              We’ve even made sure that this template gives you the ability to
              give away a free chapter of your book. This both gives you a lead,
              because they give their email in exchange for the free chapter and
              it also hooks the readers to get them more excited about the rest
              of your book.
            </ParagraphSmall>
            <ParagraphSmall>
              Want a shorter form ebook landing page? This&nbsp;
              <Link href="/templates/preview/5WWvnJPVus8RLMqcxT5vYL" passHref>
                <ArticleLink aria-label="'yoga' ebook template">
                  &#39;yoga&#39; ebook template
                </ArticleLink>
              </Link>
              &nbsp; works well to offer a free ebook as your lead magnet. We
              recommend this page for businesses who are pushing an ebook as a
              way to gain leads and build authority and credibility in their
              field, even if you’re not traditionally an “author”.
            </ParagraphSmall>
            <ParagraphSmall>eBook landing page best practices:</ParagraphSmall>
            <OL>
              <ListItem>
                <b>Create a visual mock-up:</b> Even digital products benefit
                from a visual representation. A book ‘front cover’ makes your
                visitor feel like they’re receiving something tangible and
                valuable.
              </ListItem>
              <ListItem>
                <b>Include a synopsis:</b> When someone picks up a book in a
                bookstore, they flip it over to read the back cover to see what
                it’s all about. So, put a brief description on your landing page
                that works like the “back cover” of the book. You can do a short
                paragraph or bullet points. (A/B test to see which type of
                description your customers like most.)
              </ListItem>
              <ListItem>
                <b>Include testimonials:</b> Another aspect of the “back cover”
                is the testimonials from reviewers or other authors. It shows
                that people (especially credible people) have loved reading this
                book. Do this with testimonials or social proof on your landing
                page, whether it’s about the ebook itself or your brand on the
                whole. Social proof sells.
              </ListItem>
              <ListItem>
                <b>Tease them with a few lines:</b> Whether it’s a fiction book
                or nonfiction tips and tricks, give them a little taste of what
                they’re going to read inside. Including a few interesting lines
                from the book is a great way to whet their appetite and make
                them hungry for more.
              </ListItem>
            </OL>
            <H2>Splash page landing template</H2>

            <TemplatePreviewHolder css={{ maxHeight: '675px' }}>
              <IframeWrapper>
                <iframe
                  title="Preview"
                  src="https://api.leadpages.io/template/v2/templates/N2dpddPyVb9Srarv8LBf2N/preview.html"
                  scrolling="auto"
                  width="100%"
                  height="100%"
                  marginHeight="0"
                  frameBorder="0"
                />
              </IframeWrapper>
            </TemplatePreviewHolder>
            <Link href="/templates/preview/N2dpddPyVb9Srarv8LBf2N" passHref>
              <StaticTemplateLink>
                <StaticPreviewImage src="https://storage.googleapis.com/lp-template-assets-prod/screenshots%2FN2dpddPyVb9Srarv8LBf2N-552x316.jpg?cb=-3556065429173465727" />
              </StaticTemplateLink>
            </Link>
            <H3>
              <OutboundLink
                href="/templates/preview/N2dpddPyVb9Srarv8LBf2N"
                aria-label="Site Coming Soon"
              >
                Site Coming Soon
              </OutboundLink>
            </H3>
            <ParagraphSmall>
              Splash pages “pop up” once someone lands on a page. They see it
              before they’ve even gotten to the main content of the landing page
              or website. We have splash pop-ups available as a feature for our
              landing page templates, so you can offer your lead magnet front
              and center as the first impression the visitor gets on your page.
            </ParagraphSmall>
            <ParagraphSmall>
              We love this&nbsp;
              <OutboundLink
                href="/templates/preview/N2dpddPyVb9Srarv8LBf2N"
                aria-label="Site Coming Soon Template"
              >
                ‘site coming soon’ template
              </OutboundLink>
              &nbsp; because it’s so clean, but it’s super optimized for
              generating leads.
            </ParagraphSmall>
            <ParagraphSmall>
              If you’re in the process of creating and launching your website,
              don’t miss out on the traffic you’re already getting. It will only
              take you a few minutes to get this splash page up and running, so
              you can start generating your customer or lead list.
            </ParagraphSmall>
            <ParagraphSmall>Splash page best practices:</ParagraphSmall>
            <OL>
              <ListItem>
                <b>Make it an invitation:</b> Treat everyone who comes to your
                splash page as a ‘first-access member.’ Make them feel a sense
                of exclusivity by inviting them to get early access or get
                early-bird registration. This exclusivity will make them eager
                to give you their email address, and they’re more likely to
                become brand loyalists for life.
              </ListItem>
              <ListItem>
                <b>Minimalist design:</b> If you have stunning images or mockups
                of your product, service, or customers, use them frequently and
                liberally. Keep things simple and let the design do the talking.
                Show a sneak peek into what your brand is doing before the
                launch has even happened.
              </ListItem>
              <ListItem>
                <b>Put the CTA button above the fold:</b> Splash pages, in
                particular, have to achieve the whole pitch in a single screen
                view. They’re fast and furious, so you want to keep your value
                proposition tight and your CTA button above the fold.
              </ListItem>
            </OL>
            <H2>Video course landing page template</H2>
            <TemplatePreviewHolder>
              <IframeWrapper>
                <iframe
                  title="Preview"
                  src="https://api.leadpages.io/template/v2/templates/4yZ7th3Tx78PHEKsKk76ZL/preview.html"
                  scrolling="auto"
                  width="100%"
                  height="100%"
                  marginHeight="0"
                  frameBorder="0"
                />
              </IframeWrapper>
            </TemplatePreviewHolder>
            <Link
              href="https://www.leadpages.com/templates/preview/4yZ7th3Tx78PHEKsKk76ZL"
              passHref
            >
              <StaticTemplateLink>
                <StaticPreviewImage src="https://storage.googleapis.com/lp-template-assets-prod/screenshots%2F4yZ7th3Tx78PHEKsKk76ZL-552x316.jpg?cb=-3556065429173465727" />
              </StaticTemplateLink>
            </Link>
            <H3>
              <OutboundLink
                href="/templates/preview/4yZ7th3Tx78PHEKsKk76ZL"
                aria-label="Video Course Teaser Page"
              >
                Video Course Teaser Page
              </OutboundLink>
            </H3>
            <ParagraphSmall>
              A video course is an awesome (and often underused) lead magnet
              that works wonders for capturing leads.
            </ParagraphSmall>
            <ParagraphSmall>
              This&nbsp;
              <Link href="/templates/preview/4yZ7th3Tx78PHEKsKk76ZL" passHref>
                <ArticleLink aria-label="video teaser page">
                  video teaser page
                </ArticleLink>
              </Link>
              &nbsp; outlines the course with both visuals and descriptions. The
              actionable language to “reserve your spot” pulls people through to
              the next level, so they can get in on the fun. Just plug in your
              information, and you’re ready to work some magic for your video
              course.
            </ParagraphSmall>
            <ParagraphSmall>
              Click here to get some info on&nbsp;
              <OutboundLink
                href="https://foundr.com/create-a-online-course"
                aria-label="creating an online video course"
              >
                creating an online video course
              </OutboundLink>
              &nbsp; as a lead magnet.
            </ParagraphSmall>
            <ParagraphSmall>Video landing page best practices:</ParagraphSmall>
            <OL>
              <ListItem>
                <b>Get on camera:</b> Across multiple channels, video content
                has fabulous engagement rates. Seeing a face humanizes the brand
                while attracting attention. Find a way to communicate your
                message with this medium and you’ll delight your audience.
              </ListItem>
              <ListItem>
                <b>Keep it quick:</b> If you’re using a video on a landing page,
                aim to keep it under 30-60 seconds.
              </ListItem>
              <ListItem>
                <b>Make it urgent and exclusive:</b> The copy on this template
                works well by showing how much the course is worth… and then how
                many people will get the course for free. This demonstrates the
                value of the course while creating a sense of urgency to get the
                course while it’s still free.
              </ListItem>
            </OL>
            <H2>Newsletter landing page template</H2>
            <TemplatePreviewHolder css={{ maxHeight: '580px' }}>
              <IframeWrapper>
                <iframe
                  title="Preview"
                  src="https://api.leadpages.io/template/v2/templates/DWuvg2EYRszYpi2MVajEL3/preview.html"
                  scrolling="auto"
                  width="100%"
                  height="100%"
                  marginHeight="0"
                  frameBorder="0"
                />
              </IframeWrapper>
            </TemplatePreviewHolder>
            <Link
              href="https://www.leadpages.com/templates/preview/DWuvg2EYRszYpi2MVajEL3"
              passHref
            >
              <StaticTemplateLink>
                <StaticPreviewImage src="https://storage.googleapis.com/lp-template-assets-prod/screenshots%2FDWuvg2EYRszYpi2MVajEL3-552x316.jpg?cb=-3556065429173465727" />
              </StaticTemplateLink>
            </Link>
            <H3>
              <OutboundLink
                href="/templates/preview/DWuvg2EYRszYpi2MVajEL3"
                aria-label="Foodie Newsletter"
              >
                Foodie Newsletter
              </OutboundLink>
            </H3>
            <ParagraphSmall>
              Are you using an email newsletter as part of your email marketing
              campaign? Newsletters are hard work, but they’re worth it. They
              keep your leads warm by adding value and staying top of mind.
              Newsletters also work to passively sell your brand or products,
              especially when your leads have been reading (and loving) your
              newsletter for a few weeks.
            </ParagraphSmall>
            <ParagraphSmall>
              If your newsletter is your primary lead magnet, this landing page
              template can show serious results for you. It goes through the
              most important aspects of subscribing to the newsletter with a
              simple CTA. Just tailor it to your business, and you’re ready to
              start collecting subscribers on the spot.
            </ParagraphSmall>
            <ParagraphSmall>
              Newsletter landing page best practices:
            </ParagraphSmall>
            <OL>
              <ListItem>
                <b>Start with the value proposition:</b> What are they going to
                get when they subscribe to your newsletter? What kind of info
                are they going to receive, and how will it change their lives or
                solve their pain points?
              </ListItem>
              <ListItem>
                <b>Use active CTA language:</b> The CTA should reiterate what
                kind of benefits they’ll receive by subscribing. “Sign up” isn’t
                as powerful as “join the community” or “get the good stuff”
                (depending on your brand tone)
              </ListItem>
              <ListItem>
                <b>Promise security:</b> People want to know that you’re not
                going to spam or flood their inbox. Tell them how often they’ll
                receive emails from you, or let them pick their frequency and
                interests. Also, guarantee them that you’ll never sell their
                information. Give them security that you’ll treat their email
                address with respect.
              </ListItem>
              <ListItem>
                <b>Reiterate the benefits of your brand:</b> Who are you, and
                why are you such an expert in this field? Establishing
                credibility and authority tells people that the content they’ll
                get in the newsletter is worth the signup.
              </ListItem>
              <ListItem>
                <b>Offer sample content:</b> Give them a taste from last week’s
                newsletter so they can see what kind of stuff you send out. Let
                them experience the value firsthand.
              </ListItem>
              <ListItem>
                <b>Show social proof:</b> If they’re joining a community, they
                want to see what others in the community are saying. Show off
                your brand’s “vibe” and the people who are involved with your
                business.
              </ListItem>
            </OL>
            <H2>Webinar landing page template</H2>
            <TemplatePreviewHolder css={{ maxHeight: '750px' }}>
              <IframeWrapper>
                <iframe
                  title="Preview"
                  src="https://api.leadpages.io/template/v2/templates/Bj7utMBun2bi9McBaqsxpR/preview.html"
                  scrolling="auto"
                  width="100%"
                  height="100%"
                  marginHeight="0"
                  frameBorder="0"
                />
              </IframeWrapper>
            </TemplatePreviewHolder>
            <Link
              href="https://www.leadpages.com/templates/preview/Bj7utMBun2bi9McBaqsxpR"
              passHref
            >
              <StaticTemplateLink>
                <StaticPreviewImage src="https://storage.googleapis.com/lp-template-assets-prod/screenshots%2FBj7utMBun2bi9McBaqsxpR-552x316.jpg?cb=-3556065429173465727" />
              </StaticTemplateLink>
            </Link>
            <H3>
              <OutboundLink
                href="/templates/preview/Bj7utMBun2bi9McBaqsxpR"
                aria-label="Management Webinar"
              >
                Management Webinar
              </OutboundLink>
            </H3>
            <ParagraphSmall>
              Webinars are effective lead magnets because they’re high-value and
              they open up a conversation between the lead and the brand.
              (Webinars are also a great place to up-sell leads to become
              customers.) See&nbsp;
              <OutboundLink
                href="https://neilpatel.com/blog/successful-lead-generation-webinars/"
                aria-label="guide to running successful lead
                generation webinars"
              >
                the guide to running successful lead generation webinars here.
              </OutboundLink>
            </ParagraphSmall>
            <ParagraphSmall>
              This&nbsp;
              <Link href="/templates/preview/Bj7utMBun2bi9McBaqsxpR" passHref>
                <ArticleLink aria-label="webinar registration page">
                  webinar registration page
                </ArticleLink>
              </Link>
              &nbsp; utilizes conversion design practices to be one of the most
              effective webinar registration landing pages in the
              Leadpages&nbsp;
              <Link href="/templates" passHref>
                <ArticleLink aria-label="library of landing page templates.">
                  library of landing page templates.
                </ArticleLink>
              </Link>
            </ParagraphSmall>
            <ParagraphSmall>Webinar landing page tips:</ParagraphSmall>
            <OL>
              <ListItem>
                <b>Include a countdown:</b> A countdown generates excitement for
                the webinar, while instilling urgency for signup right now.
              </ListItem>
              <ListItem>
                <b>Be action-oriented:</b> Every CTA should get them pumped up
                to register for your webinar. Make it exclusive. Make it
                exciting.
              </ListItem>
              <ListItem>
                <b>Show bite-sized benefits:</b> See how this template lists
                three benefits in bite-sized pieces with a little graphic?
                People want lots of info in a short, succinct way.&nbsp;
              </ListItem>
              <ListItem>
                <b>Talk about the speakers:</b> Who’s going to be talking on the
                webinar? What are they going to be teaching, and how are they
                experts in their field? Prove your credibility and people will
                be eager to sign up to learn from these professionals.
              </ListItem>
            </OL>
            <H2>Landing page templates for everything you need</H2>
            <ParagraphSmall>
              Leadpages has pre-designed, easy-to-use landing page templates for
              any kind of lead magnet or offering you can think of.
            </ParagraphSmall>
            <ParagraphSmall>
              See some more of our fan-favorite landing page design examples:
            </ParagraphSmall>
            <UL>
              <ListItem>
                <Link href="/templates/preview/GD2ZuptcW7YYkY7WhnNGKV" passHref>
                  <ArticleLink aria-label="Product sales page">
                    Product sales page
                  </ArticleLink>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/templates/preview/wszPGCvaqxemzfc6crzA5F" passHref>
                  <ArticleLink aria-label="eBook download page">
                    eBook download page
                  </ArticleLink>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/templates/preview/RAuDp8gisdZnTuNM3YBrMN" passHref>
                  <ArticleLink aria-label="Free consultation page">
                    Free consultation page
                  </ArticleLink>
                </Link>
                &nbsp; (great for coaches!)
              </ListItem>
              <ListItem>
                <Link href="/templates/preview/oYiKzy8jiQdz2hPqccWeAQ" passHref>
                  <ArticleLink aria-label="Giveaway page">
                    Giveaway page
                  </ArticleLink>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/templates/preview/pTJXjktpzhgwqNXPde88DN" passHref>
                  <ArticleLink aria-label="‘Invite a friend’ thank you page">
                    ‘Invite a friend’ thank you page
                  </ArticleLink>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/templates/preview/LApBheviYtgmrVKjnHQyDR" passHref>
                  <ArticleLink aria-label="Thank you page">
                    Thank you page
                  </ArticleLink>
                </Link>
              </ListItem>
            </UL>
            <br></br>
            <ParagraphSmall>
              Check out our full&nbsp;
              <Link href="/templates" passHref>
                <ArticleLink aria-label="Landing Page Library">
                  Landing Page Library
                </ArticleLink>
              </Link>
              &nbsp; to search for the perfect template inspiration for your
              landing page!
            </ParagraphSmall>
            <ParagraphSmall>
              Now, read on to see how you can use these landing pages alongside
              lead generating websites.
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

export default LeadGenerationLandingPageExamples
