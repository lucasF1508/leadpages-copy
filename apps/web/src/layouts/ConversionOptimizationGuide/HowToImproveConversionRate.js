import React from 'react'
// components
import SEO from '@legacy/components/SEO'
import SiloHeader from '@legacy/components/headers/SiloHeader'
import SiloDesktopMenu from '@legacy/components/silos/SiloDesktopMenu'
import SiloMobileMenu from '@legacy/components/silos/SiloMobileMenu'
import SiloNavigationCards from '@legacy/components/silos/SiloNavigationCards'
import SiloSidebar from '@legacy/components/silos/SiloSidebar'
// styles
import {
  BodyContainer,
  DefinitionHolder,
  H2,
  H3,
  InnerContainer,
  StyledImageComponent,
  ListItem,
  MainContainer,
  OL,
  OutboundLink,
  OuterContainer,
  PageSupertitle,
  PageTitle,
  ParagraphLarge,
  ParagraphSmall,
  SiloScrollLink,
  UL,
} from '@legacy/components/silos/SiloGlobalStyles'
// data
import {
  pageRoutes,
  verbiage,
} from '@legacy/data/conversion-optimization-guide_data'
// images
import image1 from '@legacy/assets/images/silos/conversion-optimization-guide/5-4-ab-test-design-652px@2x.jpg'

const HowToImproveConversionRate = () => {
  const scrollLinkProps = {
    offset: -85,
    spy: true,
    smooth: true,
    duration: 500,
  }

  return (
    <>
      <SEO
        pathname="/conversion-optimization-guide"
        title="How to Improve Conversion Rate | CRO Guide | Leadpages"
        description="You want more out of your webpages. Improve conversion rate with these tips + tricks to create a page your visitors will be inspired by (and take action!)."
        image="https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg"
        ogtitle="How Can I Improve My Conversion Rate?"
        ogdescription=""
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
              <PageSupertitle>Chapter 4</PageSupertitle>
              <PageTitle>
                How Can I Improve Conversion Rate On My Page?
              </PageTitle>
              <ParagraphLarge>
                This is going to be your favorite chapter of this guide because
                we’re giving you access to classified, top-secret tools that
                will make a huge difference in your conversion. With these tips
                and tricks, you’ll improve your conversion rate by learning how
                to design an optimized page that connects with and engages your
                audience.
              </ParagraphLarge>
              <ParagraphSmall>
                No matter your current conversion rate, there’s almost always a
                way to make it better. You can go from nothing to something or
                from great to exceptional. All it takes is a little curiosity,
                testing, and discovery to see what works (and doesn’t work) for
                your audience.
              </ParagraphSmall>
              <ParagraphSmall>
                In essence, <b>“conversion”</b> is just a measure of how well
                you can convince your users to take a specific action. Are you
                convincing them to input their information for your lead magnet?
                Have you closed the sale and encouraged them to make the
                purchase?
              </ParagraphSmall>
              <ParagraphSmall>
                The following 21 tricks will improve the conversion rate for
                your landing page or website. Here’s what we’ll cover in this
                article:
              </ParagraphSmall>
              <OL>
                <ListItem>
                  <SiloScrollLink to="section1" {...scrollLinkProps}>
                    Make your CTA button the boldest thing on the page
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section2" {...scrollLinkProps}>
                    Use action words
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section3" {...scrollLinkProps}>
                    Put your CTA button everywhere
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section4" {...scrollLinkProps}>
                    Leverage social proof
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section5" {...scrollLinkProps}>
                    Try out multimedia
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section6" {...scrollLinkProps}>
                    Have as few form fields as possible
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section7" {...scrollLinkProps}>
                    Add a guarantee
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section8" {...scrollLinkProps}>
                    Show how the product/service solves the pain point in the
                    headline
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section9" {...scrollLinkProps}>
                    Direct Adwords traffic to a landing page
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section10" {...scrollLinkProps}>
                    Get rid of the noise on the page
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section11" {...scrollLinkProps}>
                    Keep it succinct
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section12" {...scrollLinkProps}>
                    Be specific about what they’ll get (and what they won’t)
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section13" {...scrollLinkProps}>
                    Make them feel safe
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section14" {...scrollLinkProps}>
                    Try out different colors, fonts, and designs
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section15" {...scrollLinkProps}>
                    Focus on your copy
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section16" {...scrollLinkProps}>
                    Use pictures to demonstrate the benefits of the offering
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section17" {...scrollLinkProps}>
                    Offer an online chat tool
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section18" {...scrollLinkProps}>
                    Surprise them with a discount or offer
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section19" {...scrollLinkProps}>
                    Instill urgency
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section20" {...scrollLinkProps}>
                    Change up the offer
                  </SiloScrollLink>
                </ListItem>
                <ListItem>
                  <SiloScrollLink to="section21" {...scrollLinkProps}>
                    Test everything
                  </SiloScrollLink>
                </ListItem>
              </OL>
              <H2 name="section1">
                1. Make your CTA button the boldest thing on the page
              </H2>
              <ParagraphSmall>
                There are few “absolutes” when it comes to conversion
                optimization. But a bold colored CTA button almost always
                performs better than a bland or minimalistic one.
              </ParagraphSmall>
              <ParagraphSmall>
                Also, buttons work better than links. Separate the CTA from the
                rest of the text by changing the color of the box.
              </ParagraphSmall>
              <ParagraphSmall>
                The primary goal should be for the conversion action to draw the
                eye of the visitor. If they keep looking at the CTA, they’re
                more likely to click on it.
              </ParagraphSmall>
              <H2 name="section2">2. Use action words</H2>
              <ParagraphSmall>
                You want to tell your audience exactly what to do in the CTA.
                “Get started” always feels like a good call to action because
                you’re telling them to take the first step… But it almost always
                falls short.&nbsp;
              </ParagraphSmall>
              <ParagraphSmall>
                Instead, be more specific and actionable with the language you
                use. Some examples of actionable CTAs:
              </ParagraphSmall>
              <UL>
                <ListItem>Get your free gift</ListItem>
                <ListItem>Reserve your seat</ListItem>
                <ListItem>Start your free trial</ListItem>
                <ListItem>Grab yours now</ListItem>
                <ListItem>Join our community</ListItem>
              </UL>
              <ParagraphSmall>
                Check out these&nbsp;
                <OutboundLink
                  href="https://blog.hubspot.com/marketing/call-to-action-examples"
                  aria-label="31 CTA examples"
                >
                  31 CTA examples
                </OutboundLink>
                &nbsp; for more inspiration.
              </ParagraphSmall>
              <H2 name="section3">3. Put your CTA button everywhere</H2>
              <ParagraphSmall>
                No matter where they are on the page, they should be able to see
                your CTA and take action when the time is right for them.
              </ParagraphSmall>
              <ParagraphSmall>
                You don’t want to overdo it and put a million CTA on a single
                page because that will come off as sales-y and unprofessional.
                Instead, we recommend one CTA per “scroll” so visitors can see a
                CTA button no matter where they are on the page, but they won’t
                feel overwhelmed by it.
              </ParagraphSmall>
              <H2 name="section4">4. Leverage social proof</H2>
              <ParagraphSmall>
                The best way to show the legitimacy and value of your business
                or offer is with social proof. This builds trust and credibility
                that helps push the visitor to take action.
              </ParagraphSmall>
              <ParagraphSmall>
                Social proof includes testimonials, reviews, and links to social
                accounts (if you have a strong presence and following). We
                recommend curating key testimonials from your happiest clients,
                but it also doesn’t hurt to show real reviews from consumers
                who’ve left Amazon, Google, or website reviews about your
                product or service.
              </ParagraphSmall>
              <ParagraphSmall>
                Not every review is going to be stellar, but it shows that you
                are a real business with legitimate customers. Answer those
                negative reviews with solutions to the reviewer’s problem, and
                you’ll actually gain followers by demonstrating your awesome
                customer service.
              </ParagraphSmall>
              <H2 name="section5">5. Try out multimedia</H2>
              <ParagraphSmall>
                Video is the future of marketing, including for videos on
                landing pages and websites. Using a&nbsp;
                <OutboundLink
                  href="https://www.wordstream.com/blog/ws/2017/08/02/conversion-rate-statistics"
                  aria-label="33 CRO & Landing Page Optimization Stats to Fuel Your Strategy"
                >
                  video on your landing page
                </OutboundLink>
                &nbsp; may increase the conversion rate by 86%.
              </ParagraphSmall>
              <ParagraphSmall>
                What types of videos work well to help convert on your landing
                page?
              </ParagraphSmall>
              <UL>
                <ListItem>
                  <b>Product explainer videos:</b> How does the product work?
                </ListItem>
                <ListItem>
                  <b>Product benefits:</b> What’s different about this product
                  compared to competitors?
                </ListItem>
                <ListItem>
                  <b>Brand message/history:</b> What’s unique about your brand?
                </ListItem>
                <ListItem>
                  <b>How to:</b> Show the product in use, in the customer’s
                  lifestyle
                </ListItem>
                <ListItem>
                  <b>Testimonial:</b> Present case studies or show customers
                  talking about the product
                </ListItem>
                <ListItem>
                  <b>Story:</b> Create a story around the product or service
                  that will relate to your viewer’s lifestyle or experience
                </ListItem>
              </UL>
              <ParagraphSmall>
                We encourage our clients to try out our easy-to-use&nbsp;
                <OutboundLink
                  href="https://support.leadpages.com/hc/en-us/articles/216961588"
                  aria-label="video widget"
                >
                  video widget
                </OutboundLink>
                &nbsp; to share their videos on landing pages to improve
                conversion rates even more
              </ParagraphSmall>
              <ParagraphSmall>
                Learn how to leverage video and&nbsp;
                <OutboundLink
                  href="https://blog.hubspot.com/marketing/video-marketing"
                  aria-label="video marketing"
                >
                  video marketing
                </OutboundLink>
                &nbsp; for your business.
              </ParagraphSmall>
              <H2 name="section6">6. Have as few form fields as possible</H2>
              <ParagraphSmall>
                You want to make it as easy and fast to sign-up or purchase as
                possible. Don’t make them sign their life away with lots of info
                or surveys. The smoother the conversion process, the more likely
                they’ll convert.
              </ParagraphSmall>
              <ParagraphSmall>
                So, minimize the number of fields you require. Keep the fields
                simple and optional when possible. You can always ask for more
                information later after they’ve taken the action and invested in
                you.
              </ParagraphSmall>
              <H2 name="section7">7. Add a guarantee</H2>
              <ParagraphSmall>
                Customers don’t like taking risks. If they’re not sure about
                something, they won’t click “subscribe” or “download.”
              </ParagraphSmall>
              <ParagraphSmall>
                Guarantees help remove this fear and minimize objections, so
                they can feel free to take the next step. Money-back guarantees
                or no-questions-asked return policy work well to encourage your
                customer to purchase without the hesitation of taking a risk.
              </ParagraphSmall>
              <H2 name="section8">
                8. Show how the product/service solves the pain point in the
                headline
              </H2>
              <ParagraphSmall>
                The headline is the most important part of your page. It’s the
                first impression that will either intrigue the audience to keep
                reading or make them click away (never to return).
              </ParagraphSmall>
              <ParagraphSmall>
                We often recommend trying out your value proposition as your
                headline. What is the number one thing that your offering will
                do for the customer? Turn that into a headline.
              </ParagraphSmall>
              <ParagraphSmall>Some examples:</ParagraphSmall>
              <UL>
                <ListItem>
                  Learn how to turn your Pinterest followers into high-paying
                  customers
                </ListItem>
                <ListItem>
                  Say farewell to fight/flight with this mindfulness meditation
                </ListItem>
                <ListItem>
                  Stop making the 5 most common small business mistakes when you
                  join our mastermind group
                </ListItem>
              </UL>
              <ParagraphSmall>
                The headline will often mimic your CTA while describing the key
                benefit(s) they’ll get from taking the desired action.
              </ParagraphSmall>
              <H2 name="section9">
                9. Direct Adwords traffic to a landing page
              </H2>
              <ParagraphSmall>
                If you use AdWords or PPC campaigns, you want to send that
                traffic directly to a conversion-optimized landing page. Don’t
                send them to a homepage that’s not optimized to grab those
                interested prospects.
              </ParagraphSmall>
              <ParagraphSmall>
                You can curate the landing page to reflect the offering and
                language of a PPC. If your ad campaign shows off kettlebell
                weights, the landing page can be specifically designed to sell
                your specialty kettlebells. This sort of consistency streamlines
                the path of conversion. It also helps you better track where
                your traffic is coming from and the kinds of actions they take
                (or don’t take) when they land on your site.
              </ParagraphSmall>
              <DefinitionHolder>
                <H3>Note: </H3>
                <ParagraphSmall>
                  Your AdWords conversion rate is different from your landing
                  page conversion rate. Adwords conversion rate refers to the
                  traffic: the number of people who view your ad and then click
                  through to your site.
                </ParagraphSmall>
              </DefinitionHolder>
              <H2 name="section10">10. Get rid of the noise on the page</H2>
              <ParagraphSmall>
                You want to put your CTA front and center… And get rid of
                everything else that’s detracting from that CTA. Give the
                visitor tunnel vision so all they can see is conversion. For
                example, that might mean removing the navigation bar on a
                landing page or shortening your copy to only the most important
                points.
              </ParagraphSmall>
              <ParagraphSmall>
                Also, give them only one action to take. One CTA per page helps
                push conversion and track your conversion rate.
              </ParagraphSmall>
              <H2 name="section11">11. Keep it succinct</H2>
              <ParagraphSmall>
                Similarly, you don’t want to bore or confuse the visitor. Too
                much mumbo jumbo is the fastest way to lose a lead.
              </ParagraphSmall>
              <ParagraphSmall>
                So keep the language simple and to the point. Don’t be too
                sales-y. Just give them all the info they need to determine if
                this is the right product for them.
              </ParagraphSmall>
              <ParagraphSmall>
                This doesn’t necessarily mean you want a short-form landing
                page. If you have a more complicated offering or your customers
                might have a lot of objections, you’ll need a longer page to
                present them with all the necessary information. But even
                long-form pages should use direct, clear language.
              </ParagraphSmall>
              <ParagraphSmall>
                Learn more about the benefits of short form and long form with
                our&nbsp;
                <OutboundLink
                  href="https://www.leadpages.com/blog/sales-page/"
                  aria-label="sales pages resource"
                >
                  sales pages resource
                </OutboundLink>
              </ParagraphSmall>
              <H2 name="section12">
                12. Be specific about what they’ll get (and what they won’t)
              </H2>
              <ParagraphSmall>
                Customers want to know what they’re getting in exchange for
                their info or purchase. Paint a picture of who your
                product/service is for, and what it will do to meet their needs.
              </ParagraphSmall>
              <UL>
                <ListItem>What are the benefits and features?</ListItem>
                <ListItem>What are its uses? </ListItem>
                <ListItem>Who will benefit from this?</ListItem>
                <ListItem>What makes it unique?</ListItem>
              </UL>
              <ParagraphSmall>
                This applies to products and services as well as other types of
                conversion actions. For example, if someone is subscribing to a
                newsletter, tell them all the benefits of subscribing, such as
                getting exclusive offers and early access to sales.
              </ParagraphSmall>
              <ParagraphSmall>
                Paint a picture. Show them what life will look like after
                they’ve taken the action.
              </ParagraphSmall>
              <ParagraphSmall>
                If they’re subscribing to a newsletter, tell them what kinds of
                content they’ll receive. How is this content unlike anything
                they can Google or find elsewhere?
              </ParagraphSmall>
              <ParagraphSmall>
                If they’re reserving a seat for an event, tell them how life
                will be different after they’ve left the experience.
              </ParagraphSmall>
              <ParagraphSmall>
                If they’re making a purchase, show them how the product will
                make their life easier, better, or more fun.
              </ParagraphSmall>
              <H2 name="section13">13. Make them feel safe</H2>
              <ParagraphSmall>
                As we said, customers don’t want to take risks. You want to show
                them that you’re not just a legitimate business, but also that
                you’re going to treat their information with the utmost respect.
                So include security badges and privacy policies, and promise not
                to sell their info or spam them.
              </ParagraphSmall>
              <ParagraphSmall>
                Don’t get crazy (or it will make them feel the opposite of what
                you intend). Just give them the promise that you’ll protect
                their email address and credit card info, so they don’t feel
                insecure about taking the next action.
              </ParagraphSmall>
              <H2 name="section14">
                14. Try out different colors, fonts, and design
              </H2>
              <ParagraphSmall>
                Design matters a lot more than people think. The way a page
                looks, feels, and flows will define how customers experience the
                page. It will determine whether or not customers engage with the
                brand and want to follow through with the CTA.
              </ParagraphSmall>
              <StyledImageComponent
                image={image1}
                alt="How To Improve Conversion Rate"
                title="How To Improve Conversion Rate"
              />
              <ParagraphSmall>
                Check out our 6 rules for awesome&nbsp;
                <OutboundLink
                  href="https://www.leadpages.com/blog/landing-page-design/"
                  aria-label="landing page design"
                >
                  landing page design&nbsp;
                </OutboundLink>
                to start changing up the way your page feels when your audience
                lands on it.
              </ParagraphSmall>
              <H2 name="section15">15. Focus on your copy</H2>
              <ParagraphSmall>
                Your copy is what sells. It’s what convinces people of the
                benefits of your product and brand. When creating
                conversion-worthy copy, focus on two key points: length and
                language.
              </ParagraphSmall>
              <ParagraphSmall>
                Is this the right length for my audience? Do I provide enough
                information in the clearest, simplest way possible?
              </ParagraphSmall>
              <ParagraphSmall>
                Does the language match the tone of my brand? Does it sound like
                my audience?
              </ParagraphSmall>
              <ParagraphSmall>
                Check out these must-have tips for&nbsp;
                <OutboundLink
                  href="https://blog.hubspot.com/marketing/landing-page-writing-tips"
                  aria-label="writing landing page copy that converts."
                >
                  writing landing page copy that converts.
                </OutboundLink>
              </ParagraphSmall>
              <H2 name="section16">
                16. Use pictures to demonstrate the benefits of the offering
              </H2>
              <ParagraphSmall>
                Whenever possible, aim to show happy, smiling customers enjoying
                the benefits of your service. Demonstrate people using your
                product in their lifestyle. Present your employees or founders
                to put a face on your brand.
              </ParagraphSmall>
              <ParagraphSmall>
                Pictures humanize your business, which allows customers to
                better relate to your message.
              </ParagraphSmall>
              <H2 name="section17">17. Offer an online chat tool</H2>
              <ParagraphSmall>
                A live, customer service chat can help answer questions,
                alleviate concerns, and negate objections that your audience
                might be experiencing before making a purchase.
              </ParagraphSmall>
              <ParagraphSmall>
                The goal is always to minimize friction to take the action, and
                a chat tool allows the visitor to ensure this is the right
                product or service for them.
              </ParagraphSmall>
              <H2 name="section18">
                18. Surprise them with a discount or offer
              </H2>
              <ParagraphSmall>
                If someone is about to make a purchase, you can ‘seal the deal’
                by surprising them with free shipping, 10% off, or a gift with
                purchase.
              </ParagraphSmall>
              <ParagraphSmall>
                We’ve found that offering a discount sometimes works better
                after they’ve already decided they might want the product, like
                after they’ve clicked on a PPC campaign or added the item to
                their cart. Then, when they see the surprise discount, it pushes
                them to make that final decision.
              </ParagraphSmall>
              <ParagraphSmall>
                Psst… If you present this offer with limited time or stock,
                they’re more likely to make the decision right now.
              </ParagraphSmall>
              <H2 name="section19">
                19. Instill urgency (to increase your conversion rate)
              </H2>
              <ParagraphSmall>
                Speaking of limited time, make sure to use language that
                instills a sense of urgency. Make your visitors feel like right
                now is the best time ever to buy. For example, maybe it’s the
                lowest price, best discount, or you’re running out of stock.
              </ParagraphSmall>
              <ParagraphSmall>
                You want them to decide to convert right now. They’ll talk
                themselves out of it if they wait too long, or they’ll forget
                about the offer altogether.
              </ParagraphSmall>
              <ParagraphSmall>
                Plus, urgency also begets exclusivity. People want to feel like
                they’re getting a “deal” on something unique and special.
              </ParagraphSmall>
              <ParagraphSmall>
                Search Engine Journal has a great resource about how to
                instill&nbsp;
                <OutboundLink
                  href="https://www.searchenginejournal.com/create-urgency-conversions-sales/249643/"
                  aria-label="urgency in sales."
                >
                  urgency in sales.
                </OutboundLink>
              </ParagraphSmall>
              <H2 name="section20">20. Change up the offer</H2>
              <ParagraphSmall>
                Sometimes, it’s the actual offer that’s not converting. Maybe
                people don’t want what you’re offering, and they might prefer
                something else.
              </ParagraphSmall>
              <ParagraphSmall>
                Make sure you reach out to visitors for feedback to understand
                what they do or don’t like about your offer, and learn what you
                can change to make this point of action more enticing.
              </ParagraphSmall>
              <H2 name="section21">21. Test everything</H2>
              <ParagraphSmall>
                Make one change at a time, and then test it. This helps you see
                what changes connect with your audience and improve the
                conversion rate. If you change too many variables at once, it’s
                hard to figure out what’s doing well and pushing conversion.
              </ParagraphSmall>
              <ParagraphSmall>
                Testing is a slow process but it’s worth it in the long-haul to
                take your conversion to the next level.
              </ParagraphSmall>
              <ParagraphSmall>
                We’ll talk more about A/B testing your page to increase
                conversion rate in the next chapter.
              </ParagraphSmall>
              <H2>Improve conversion rate one step at a time</H2>
              <ParagraphSmall>
                There are a lot of moving parts when it comes to page conversion
                and we know it can feel like a lot to handle.
              </ParagraphSmall>
              <ParagraphSmall>
                So take it step-by-step. Start with one change, then test it for
                the results. When you find a change that increases your
                conversion rate, stick with it and move to the next item on your
                agenda.
              </ParagraphSmall>
              <ParagraphSmall>
                Even a few small changes can show a massive transformation in
                your conversion rate.
              </ParagraphSmall>
              <ParagraphSmall>
                In the next section, we’ll give you more tips about how to test
                your landing page to figure out the highest conversion features
                to optimize your page.
              </ParagraphSmall>
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
}

export default HowToImproveConversionRate
