import React from 'react'
// components
import Animation_ExitIntentPopup from '@legacy/components/animations/Animation_ExitIntentPopup'
import Animation_SidebarPopup from '@legacy/components/animations/Animation_SidebarPopup'
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
  IframeWrapper,
  StyledImageComponent,
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
  TemplatePreviewHolder,
  UL,
} from '@legacy/components/silos/SiloGlobalStyles'
// data
import { pageRoutes, verbiage } from '@legacy/data/lead-generation-guide_data'
// images
import image1 from '@legacy/assets/images/silos/lead-generation-guide/6-1-coupon-pop-up-example.jpg'

const LeadGenerationWebsites = () => (
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
            <PageSupertitle>Chapter 4</PageSupertitle>
            <PageTitle>How Do I Create a Lead Generation Website?</PageTitle>
            <ParagraphLarge>
              <i>What does a ‘lead generation website’ do?</i>
            </ParagraphLarge>
            <ParagraphSmall>
              It’s your business’s website. The only difference is that it’s
              optimized and crafted specifically for lead generation.
            </ParagraphSmall>
            <ParagraphSmall>
              It’s similar to your lead generation landing pages, but the
              websites work a little differently.
            </ParagraphSmall>
            <ParagraphSmall>
              A landing page’s primary goal is lead generation and conversion.
            </ParagraphSmall>
            <ParagraphSmall>
              A website’s primary goal is to inform. It provides information to
              the visitor about the brand’s message and offerings.
            </ParagraphSmall>
            <ParagraphSmall>
              But that doesn’t mean your website has to be static! Websites
              inherently offer multiple avenues for you to connect with site
              visitors, capture that traffic, and generate new leads
            </ParagraphSmall>
            <ParagraphSmall>
              One or two well-placed lead capture forms on high-traffic areas of
              your website can be a total game-changer. It’ll stop prospects
              from falling through the cracks and help ensure that anyone who
              comes to your website is “yours” for the long-haul.
            </ParagraphSmall>
            <ParagraphSmall>
              So how do we optimize lead generation website design to grab more
              visitors and boost revenue?
            </ParagraphSmall>
            <H2>Why use a lead generation website?</H2>
            <ParagraphSmall>
              We’re big believers that if you’re spending money and energy on
              something (like a website or bringing traffic to that website),
              you should be leveraging it to get you leads and customers. Don’t
              you agree?
            </ParagraphSmall>
            <ParagraphSmall>
              Your website shouldn’t be static, especially if your site is
              bringing in a lot of traffic. Webpages are a great opportunity to
              capture visitors and generate leads who have already shown an
              interest in your business.
            </ParagraphSmall>
            <ParagraphSmall>
              You can include lead capture forms on your homepage, about page,
              blog, and on main pages with pop-ups or banners. A few well-placed
              capture methods around your website can ensure you don’t lose
              website visitors to the vastness of the world wide web.
            </ParagraphSmall>
            <H2>How to build a lead generation website</H2>
            <ParagraphSmall>
              Remember that your website isn’t designed primarily for lead
              generation. Lead generation should ‘seem’ secondary to your
              reader.
            </ParagraphSmall>
            <ParagraphSmall>
              That means your lead generation techniques should effortlessly and
              seamlessly integrate with what your website already looks like.
            </ParagraphSmall>
            <ParagraphSmall>
              The goal is to take your everyday, ‘average’ website functions and
              turn them into lead generation machines… without your customer
              even realizing it.
            </ParagraphSmall>
            <ParagraphSmall>
              So, before you start, create a website map. What pages do you
              currently have? Some common website pages include:
            </ParagraphSmall>
            <UL>
              <ListItem>Homepage</ListItem>
              <ListItem>About</ListItem>
              <ListItem>Contact</ListItem>
              <ListItem>Blog/resources</ListItem>
              <ListItem>Products page(s)</ListItem>
              <ListItem>Checkout</ListItem>
              <ListItem>404 error</ListItem>
              <ListItem>Coming soon</ListItem>
            </UL>
            <br></br>
            <ParagraphSmall>
              We usually recommend that each page has only one CTA or lead
              generating action. This minimizes confusion and distraction while
              streamlining the lead generation process. Even though you want
              your website to be generating leads, don’t forget that you want to
              add value first and foremost.
            </ParagraphSmall>
            <ParagraphSmall>
              Providing value inherently promotes lead generation. People want
              to connect with brands that add something to their lives.
            </ParagraphSmall>
            <ParagraphSmall>
              Now, we’ll go through and figure out how we can leverage each page
              as an opportunity to generate leads.
            </ParagraphSmall>
            <H2>Homepage: simple but effective CTA</H2>
            <ParagraphSmall>
              Although you shouldn’t be directing your paid traffic to your
              homepage (paid traffic should go to a landing page), organic
              traffic often ends up here. So the homepage is the front of the
              marketing journey and the first impression of your brand.
            </ParagraphSmall>
            <ParagraphSmall>
              That means you want to have a CTA on your website so it catches
              the visitor’s attention. Customers are expecting to see a CTA on
              your home page that’s related to your business. Maybe it’s a “Try
              us free” button for a free trial or an offer to download your new
              ebook.
            </ParagraphSmall>
            <ParagraphSmall>
              The CTA you use should be your “primary” goal of your site. What’s
              your greatest or most popular offering? Put that on the homepage.
            </ParagraphSmall>
            <ParagraphSmall>
              But make sure you don’t bombard the visitor with opt-in
              opportunities if they haven’t yet explored your brand. Keep it
              simple.
            </ParagraphSmall>
            <H2>About: another opportunity for leads</H2>
            <ParagraphSmall>
              The About page isn’t our favorite page for lead generation,
              because you want to focus heavily on educating about your
              business. This is where you include your brand story, message, and
              mission.
            </ParagraphSmall>
            <ParagraphSmall>
              Still, you don’t have to make this page entirely static. The lead
              magnet you use should be directly correlated to the information
              you’re sharing about your business.
            </ParagraphSmall>
            <ParagraphSmall>
              For example, let’s say your brand emphasizes eco-friendly home
              products. The lead magnet might be a guide about the 10 most toxic
              housekeeping products on the market. Or it can be a checklist of
              ways to make your home healthier and safer.
            </ParagraphSmall>
            <ParagraphSmall>
              This isn’t just in alignment with your brand message (that you’re
              sharing on the About page), but it also encourages them to delve
              even deeper into your brand message.
            </ParagraphSmall>
            <ParagraphSmall>
              Have a testimonials section on your about page or as a separate
              web page? Same rules apply.
            </ParagraphSmall>
            <H2>Contact: self-selected leads</H2>
            <ParagraphSmall>
              The “Contact” page lead is arguably the most qualified lead you’ll
              get. Someone is directly contacting your business with a question
              or comment. If they’re not already a customer, they’re telling you
              they’re interested and you’re on their mind.
            </ParagraphSmall>
            <ParagraphSmall>
              Keep your contact page clean. If someone’s on your contact page,
              they’re already interested in reaching out to you for some reason.
              You don’t need to convince them anymore.
            </ParagraphSmall>
            <ParagraphSmall>
              Still, you should address the two obstacles you may face on the
              contact page:
            </ParagraphSmall>
            <UL>
              <ListItem>
                <b>Friction:</b> Require as few form fields as possible. Just
                their email and message could be enough to respond to their
                inquiry (and add them to your email marketing list). This
                minimizes friction to speed up conversion.
              </ListItem>
              <ListItem>
                <b>Privacy:</b> Assure them that you’ll never sell their info or
                spam them. People want to know their information is safe in your
                hands. (And don’t betray that promise.)
              </ListItem>
            </UL>
            <DefinitionHolder>
              <H3>Note: </H3>
              <ParagraphSmall>
                If your website has an FAQ page, you can use contact forms to
                answer additional questions for even more lead generation
                opportunities as well.
              </ParagraphSmall>
            </DefinitionHolder>
            <H2>Blog: the gold mine for subscribers and content upgrades</H2>
            <ParagraphSmall>
              Blogs are arguably the best natural lead generators. A reader is
              already showing interest in your business and industry. They’re
              investing time to read your content, which means they already have
              some sort of relationship with your business. This makes them
              super qualified as a lead.
            </ParagraphSmall>
            <Animation_SidebarPopup siloVariant />
            <ParagraphSmall>
              There are two key sorts of lead generation tools that work well
              with blogs.
            </ParagraphSmall>
            <OL>
              <ListItem>
                “Subscribe to our newsletter/blog” is the most popular lead
                capture form. If the visitor likes what they’re reading, they
                won’t hesitate to subscribe to your blog to get more quality
                content from you.
              </ListItem>
              <ListItem>
                Content upgrades work well if you have a more basic blog or
                guide (that’s packed with great value), and then you offer a
                lead magnet with even more information. This “gated content” is
                a slight upgrade from a blog. It could be a resource guide, case
                study, downloadable, or infographic. This related content
                expands upon what they’re reading about in the blog. If the
                gated content provides even more awesome value, they’ll be
                willing to trade their email address for access.
              </ListItem>
            </OL>
            <br></br>
            <ParagraphSmall>
              Let’s say you own a fair-trade coffee brand. A visitor is reading
              your blog, “Why Coffee Is Good For Brain Health.” You might
              include a content upgrade that’s a recipe book, “11 Unique Coffee
              Recipes To Try At Home” or an industry report, “How Fair Trade
              Coffee Is Saving The Planet.”
            </ParagraphSmall>
            <ParagraphSmall>
              Remember to add value with the blog, then keep adding even more
              value. If you provide legitimate value that people love, they’ll
              be willing to give you their email address in exchange.
            </ParagraphSmall>
            <ParagraphSmall>
              Use a&nbsp;
              <OutboundLink
                href="https://support.leadpages.com/hc/en-us/articles/215635028-How-Leadboxes-Work"
                aria-label="pop-up"
              >
                pop-up
              </OutboundLink>
              &nbsp; screen that appears when they’ve scrolled to a certain part
              of the blog. This can present the content upgrade front and
              center, so they know that there’s more available to learn.
            </ParagraphSmall>
            <H2>Product pages: discounts and offers galore</H2>
            <ParagraphSmall>
              Someone’s exploring your product pages? Sounds like a sale is
              coming, right?
            </ParagraphSmall>
            <ParagraphSmall>
              Not always. Lots of people are just “window shopping” from the
              comfort of their homes. And even if they are interested in your
              products, they might still have some questions or obstacles they
              need to be addressed before they can take the plunge.
            </ParagraphSmall>
            <ParagraphSmall>
              That makes product pages a great place to generate leads. The
              visitor is interested enough to give you their information, but
              they might need a little more convincing to make the sale.
            </ParagraphSmall>
            <ParagraphSmall>
              Offering discounts or deals work the best on product pages. Some
              ideas for offers that you can email to your new leads:
            </ParagraphSmall>
            <UL>
              <ListItem>% off or $x for new customers</ListItem>
              <ListItem>Free gift with purchase</ListItem>
            </UL>
            <br></br>
            <StyledImageComponent
              image={image1}
              alt="coupon pop up example"
              title="coupon pop up example"
            />
            <ParagraphSmall>
              If you have&nbsp;
              <OutboundLink
                href="https://www.shopify.com/retail/hyper-personalization-4-retail-examples"
                aria-label="customized retail marketing tech"
              >
                customized retail marketing tech
              </OutboundLink>
              &nbsp; applied to your website, this is the perfect place to
              deploy it. For example, the AI will track that someone was looking
              at a specific graphic tee shirt. You can offer them a discount on
              that specific shirt if they input their email address. This kind
              of customization instills a sense of exclusivity and urgency that
              can seriously ramp up your product page lead generation.
            </ParagraphSmall>
            <H2>Checkout: keep it frictionless</H2>
            <ParagraphSmall>
              If someone is getting ready to checkout, they’re about to become a
              customer. That is, unless something gets in the way. Abandoned
              carts are the enemy and can cost you both a missed sale and a lost
              lead. (Learn more about how to&nbsp;
              <OutboundLink
                href="https://www.semrush.com/blog/10-ways-to-reduce-cart-abandonment-and-recapture-customers-for-e-commerce-websites/"
                aria-label="reduce cart
                abandonment"
              >
                reduce cart abandonment.)
              </OutboundLink>
            </ParagraphSmall>
            <ParagraphSmall>
              So you want to focus on keeping the checkout page as minimalistic,
              focused, and smooth as possible, minimizing the number of form
              fields a new customer has to fill out.
            </ParagraphSmall>
            <ParagraphSmall>
              Also, give them the option to checkout as a guest. This speeds up
              the buying process. They can then “create an account” after
              they’ve checked out.
            </ParagraphSmall>
            <H2>404 error: whoopsies turned leads</H2>
            <ParagraphSmall>
              Every site has a “404 page” in case a visitor accidentally happens
              upon a page that doesn’t exist. Rather than just tell the visitor
              that they were wrong (which instantly puts up a wall between
              business and visitor), you can use the 404 page as an opportunity
              to engage them further and grab their information.
            </ParagraphSmall>
            <ParagraphSmall>
              Some ways to turn a 404 into a blessing in disguise:
            </ParagraphSmall>
            <UL>
              <ListItem>
                Redirect the visitor to landing pages or pages optimized for
                lead generation. Push them towards your ‘best’ pages.
              </ListItem>
              <ListItem>
                Put the lead magnet right on the page. Add value when they
                expect not to have any.
              </ListItem>
              <ListItem>
                Offer other helpful links that they might be looking for on your
                site.
              </ListItem>
              <ListItem>
                Include a contact form in case they need help finding what
                they’re looking for. (Remember: someone who contacts you is a
                lead)
              </ListItem>
              <ListItem>
                Insert your brand voice, so they feel more connected with you.
                Stay on-brand and use it as a moment to further deepen the
                relationship.
              </ListItem>
              <ListItem>
                Make a sale. Use the page to show off your products.
              </ListItem>
            </UL>
            <ParagraphSmall>
              Check out these ingenious ways to&nbsp;
              <OutboundLink
                href="https://www.leadpages.com/blog/404-page-lead-generation/"
                aria-label="use your 404 pages"
              >
                use your 404 pages&nbsp;
              </OutboundLink>
              to capture your visitors in a fun, engaging way.
            </ParagraphSmall>
            <H2>Coming Soon: grab ‘em before you’re even in business</H2>
            <ParagraphSmall>
              Is your website or product getting ready to launch? You can use
              your website’s “coming soon” page to not only gain traction and
              excitement, but to also capture leads. If they’ve already found
              your website, they’re probably eager and interested to connect
              with your brand. And you don’t want to lose customers who have
              that level of interest. Don’t let them forget about you.
            </ParagraphSmall>
            <TemplatePreviewHolder className="solotemplate">
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
            <ParagraphSmall>
              This is one of the best methods of lead generation because you’ll
              already have a list of prospects you can market to when your
              product or site goes live.
            </ParagraphSmall>
            <ParagraphSmall>
              Encourage the visitor to stay in touch by email. This is an easy
              “in” because you can request their information to alert them when
              your site or product goes live. You’ll also want to consider
              offering some sort of downloadable or ‘early access’ discount, so
              you’re providing value in exchange for their information.
            </ParagraphSmall>
            <ParagraphSmall>
              <OutboundLink
                href="https://www.leadpages.com/blog/coming-soon-landing-page/"
                aria-label="Learn how to use a “coming soon” landing page to generate leads here."
              >
                Learn how to use a “coming soon” landing page to generate leads
                here.
              </OutboundLink>
            </ParagraphSmall>
            <H2>BONUS: Pop up screens</H2>
            <ParagraphSmall>
              You want to grab people when they first come to your site…and when
              they’re about to leave. Do this with pop up screens on your
              website that push your lead magnets a little harder.
            </ParagraphSmall>
            <H3>Splash screens</H3>
            <ParagraphSmall>
              Splash screens are pop-ups that occur right when someone lands on
              your website. The visitor either has to opt-in and give you their
              info or choose to click out before they can see the rest of the
              site.
            </ParagraphSmall>
            <ParagraphSmall>
              They might not opt-in right away, especially if they’ve never been
              to your site before. And that’s okay. At least you got the CTA in
              front of them so they know what kind of stuff you’re offering in
              exchange for their information.
            </ParagraphSmall>
            <ParagraphSmall>
              The best kind of pop-up screens for new visitors: discounts. A lot
              of retail sites will offer a discount for new customers. The
              visitor inputs their email address to get an email with their
              discount code. Now the business has a new lead, and they’re
              already implanting the idea and desire for a purchase down the
              line.
            </ParagraphSmall>
            <H3>Exit pop-ups</H3>
            <ParagraphSmall>
              Exit pop-ups work similarly. When the visitor’s mouse leaves the
              page or screen, a pop up will appear with some sort of offering.
              It’s your last-ditch effort to engage that lead.
            </ParagraphSmall>
            <Animation_ExitIntentPopup siloVariant />
            <ParagraphSmall>
              For example, the exit pop up might say: “Leaving already? Don’t
              leave without your free recipe book, delivered to your inbox in
              seconds!”
            </ParagraphSmall>
            <ParagraphSmall>
              Discounts and upgraded content both work well for exit pop up
              screens.
            </ParagraphSmall>
            <ParagraphSmall>
              Learn how to utilize&nbsp;
              <OutboundLink
                href="https://www.crazyegg.com/blog/convert-bouncing-traffic/"
                aria-label="exit pop-ups to convert bouncing traffic"
              >
                exit pop-ups to convert bouncing traffic
              </OutboundLink>
              &nbsp; with CrazyEgg.
            </ParagraphSmall>
            <H2>What about B2B lead generation websites?</H2>
            <ParagraphSmall>
              Most websites, both B2B and B2C, have similar web pages. You have
              a homepage, about, blog, and contact page (probably). So all of
              the above advice still applies.
            </ParagraphSmall>
            <ParagraphSmall>
              There’s one major difference with B2B lead generation. You’re not
              selling a product as much as you’re selling your brand itself.
            </ParagraphSmall>
            <ParagraphSmall>
              So, lead magnets offering discounts or deals aren’t going to be
              super effective. (In fact, they might even diminish the perceived
              value of your brand.)
            </ParagraphSmall>
            <ParagraphSmall>
              Instead, you want to focus on high-level lead magnets that
              introduce people to your business.
            </ParagraphSmall>
            <ParagraphSmall>
              What kinds of B2B lead generation opportunities work well?
            </ParagraphSmall>
            <UL>
              <ListItem>Ebooks and ultimate guides</ListItem>
              <ListItem>Case studies</ListItem>
              <ListItem>Free trial</ListItem>
              <ListItem>Free consultation </ListItem>
            </UL>
            <br></br>
            <ParagraphSmall>
              If you’re looking for partnerships, make sure you have a lot of
              contact forms sprinkled throughout your website. They should be
              able to contact you with questions or ideas in mere seconds.
            </ParagraphSmall>
            <H2>Lead generation website design</H2>
            <ParagraphSmall>
              Websites can be used to inform, to educate, to sell… and to
              generate leads! Every page of your lead generation site is
              designed to capture traffic, so you can continuously grow your
              customer list at every turn, on every page.
            </ParagraphSmall>
            <ParagraphSmall>
              With lead generation website design, the goal is to piggyback off
              of the content you already have. You don’t need to change your
              entire website. Offer CTAs that allow visitors to further engage
              with your brand.
            </ParagraphSmall>
            <ParagraphSmall>
              Provide value, focus on design, test out different features, and
              make it easy to opt-in, and you’ll see your website’s lead
              generation take off.
            </ParagraphSmall>
            <ParagraphSmall>
              Want some help designing your lead generation website? In the next
              chapter, we give you our ultimate list of tools and resources that
              will streamline and automate lead generation strategies from start
              to finish.
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

export default LeadGenerationWebsites
