import React from 'react'
// components
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
  MainContainer,
  OL,
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

const LeadGenerationIdeas = () => (
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
            <PageSupertitle>Chapter 5</PageSupertitle>
            <PageTitle>
              Creative Lead Generation Ideas That Have Massive Impact
            </PageTitle>
            <ParagraphLarge>
              <i>
                Where does lead generation fit into your marketing campaign? How
                do you generate more, better quality leads within the marketing
                strategies you already use for your business?
              </i>
            </ParagraphLarge>
            <ParagraphLarge>
              The purpose of lead generation is to build your email list with
              relevant, strong leads. You can then use this list to transform
              leads into paying customers who will keep coming back to you.
            </ParagraphLarge>
            <ParagraphSmall>
              You’re not waiting for customers to show up at your doorstep for a
              party. You’re collecting their information so you can actively
              invite them to your house so they can join in on the fun.
            </ParagraphSmall>
            <ParagraphSmall>
              In this chapter, we’re going to give you creative and fun tips
              that will take your lead generation to the next level. We’ll start
              by going over some of the best lead magnets you’ll want to
              consider offering, then we’ll give you some unique tips that will
              help incite more engagement and excitement from your leads.
            </ParagraphSmall>
            <H2>Best lead generation magnets</H2>
            <ParagraphSmall>
              The type of lead magnets you use will depend on your business,
              what your audience wants, and the resources you have to make it
              happen.
            </ParagraphSmall>
            <ParagraphSmall>
              But there are some basic rules for all good lead magnets:
            </ParagraphSmall>
            <OL>
              <ListItem>
                <b>Value:</b> It solves a problem that your customers want to be
                solved. It gives them way more than they were expecting to get,
                or it provides value they can’t find anywhere else.
              </ListItem>
              <ListItem>
                <b>Instant gratification:</b> It offers a fast solution. Make it
                easy for them to achieve something (that solves or addresses
                their pain points) thanks to your offering.
              </ListItem>
              <ListItem>
                <b>Specificity:</b> The best lead magnets are super specific.
                People can Google the basics. Give them tips they can’t find
                anywhere else.
              </ListItem>
              <ListItem>
                <b>Simplicity:</b> Make it easy to digest. It doesn’t have to be
                long to be high-value. Write in a tone that your audience wants
                to read, and keep it as succinct as possible.
              </ListItem>
              <ListItem>
                <b>Expert advice:</b> The lead magnet should show how you’re an
                expert in this field. Demonstrating your credibility paves the
                way to selling.
              </ListItem>
            </OL>
            <br></br>
            <ParagraphSmall>Some lead magnet ideas to try out:</ParagraphSmall>
            <UL>
              <ListItem>Checklist</ListItem>
              <ListItem>Cheatsheet</ListItem>
              <ListItem>Template</ListItem>
              <ListItem>Script</ListItem>
              <ListItem>Ultimate guide</ListItem>
              <ListItem>Case studies</ListItem>
              <ListItem>Toolkit</ListItem>
              <ListItem>Web or phone app</ListItem>
              <ListItem>Resource list</ListItem>
              <ListItem>Planner/schedule</ListItem>
              <ListItem>Worksheet</ListItem>
              <ListItem>Calculator (specific to industry)</ListItem>
              <ListItem>Generator (like a headline generator)</ListItem>
              <ListItem>Spreadsheets (with pre-programmed formulas)</ListItem>
              <ListItem>Recipes</ListItem>
              <ListItem>Tutorials and demos</ListItem>
              <ListItem>eBook</ListItem>
              <ListItem>Sample chapter of book</ListItem>
              <ListItem>Sample of your service/video/audio</ListItem>
              <ListItem>Industry reports (stats)</ListItem>
              <ListItem>Infographics</ListItem>
              <ListItem>Webinar access</ListItem>
              <ListItem>Event tickets</ListItem>
              <ListItem>Slideshow/presentation/SlideShare</ListItem>
              <ListItem>Online class (video or audio)</ListItem>
              <ListItem>Email course</ListItem>
              <ListItem>Free initial consultation or quote</ListItem>
              <ListItem>
                Free coaching session (this is awesome for engagement and
                upselling)
              </ListItem>
              <ListItem>Newsletter subscription</ListItem>
              <ListItem>Quiz or survey</ListItem>
              <ListItem>Giveaways and sweepstakes</ListItem>
              <ListItem>Quotes or images</ListItem>
              <ListItem>Game</ListItem>
              <ListItem>Join a community or challenge</ListItem>
              <ListItem>Become a member</ListItem>
              <ListItem>Join a Facebook group</ListItem>
              <ListItem>Free trial</ListItem>
              <ListItem>Coupon or discount</ListItem>
              <ListItem>Join waiting list</ListItem>
            </UL>
            <br></br>
            <ParagraphSmall>
              Remember that lead magnets are usually free. You’re providing a
              lot of value first, proving that you’re worthy of their business,
              and then selling them later.
            </ParagraphSmall>
            <H2>Lead generation best practices</H2>
            <H3>Add value first</H3>
            <ParagraphSmall>
              The first and only rule of lead generation: add value… and then
              add more value.
            </ParagraphSmall>
            <ParagraphSmall>
              If you provide stellar content that your viewers are dying to
              read, they’ll gladly hand over their email address in exchange for
              more content.
            </ParagraphSmall>
            <ParagraphSmall>
              That means your landing page, your blogs, and your free content
              has to be incredible. Don’t be stingy. The more you provide
              upfront, the more they’ll be dying to get access to all the other
              great info you’ve got behind the scenes.
            </ParagraphSmall>
            <H3>A lead magnet is usually an upgrade</H3>
            <ParagraphSmall>
              So you’ve given them value already. Now, you want to offer them
              that “upgrade,” aka access to the back room of the store.
            </ParagraphSmall>
            <ParagraphSmall>
              For example, you’ve got a blog or video that goes over the basic
              info of “How To Take The LSAT Test.” On the side, you offer them a
              downloadable PDF with specific tricks to improve their test-taking
              even more: “50 Easy Hacks To Improve Your LSAT Score By 20
              Points.” They want more awesome tips from you, so they’re willing
              to input their email in exchange for that in-depth content.
            </ParagraphSmall>
            <ParagraphSmall>
              This kind of “gated content” works especially well as an upgrade
              for other content, like with your blog or informational pages.
              You’ve already piqued their interest, and now they’re more willing
              to give you their info in exchange for that value.
            </ParagraphSmall>
            <H3>Minimize friction and distractions</H3>
            <ParagraphSmall>
              The less you have surrounding your lead magnet, the better you’ll
              see conversions. People get distracted easily. So, streamline the
              process of generating leads by continuously directing them to the
              action you want.
            </ParagraphSmall>
            <ParagraphSmall>
              <b>Length:</b> Your landing page should only be as long as it
              needs to be—and not a word more. You want to be as concise as
              possible while thoroughly explaining your offering. (Don’t be
              afraid to use pictures in place of words to keep it neat and tidy
              while providing top-notch visual information.)
            </ParagraphSmall>
            <ParagraphSmall>
              <b>Form fields:</b> This means you should also minimize the form
              fields needed to signup. Don’t ask visitors for their name, email,
              phone, SSN, best friend’s birthday, favorite book, eating habits…
              The less you ask for, the faster they can sign up. Minimizing
              friction improves your conversion rate.
            </ParagraphSmall>
            <H2>Focus on urgency and exclusivity</H2>
            <ParagraphSmall>
              You want your lead to sign up right now. Don’t let them think
              about it. The two ways to encourage fast opt-ins are urgency and
              exclusivity.
            </ParagraphSmall>
            <ParagraphSmall>
              Make them feel like the offer is going to leave or you only have a
              few spots left for your event. If they feel some sort of time
              crunch, they’ll take action right now.
            </ParagraphSmall>
            <ParagraphSmall>
              Find out how to&nbsp;
              <OutboundLink
                href="https://www.impactbnd.com/blog/how-to-use-exclusivity-to-convert-more-leads"
                aria-label="use exclusivity to win leads"
              >
                use exclusivity to win leads
              </OutboundLink>
              &nbsp; here.
            </ParagraphSmall>
            <H2>Keep it a low barrier to entry</H2>
            <ParagraphSmall>
              We usually recommend collecting leads’ email addresses, because
              this is such a low barrier to entry. People are more hesitant
              about giving out their phone number or home address because
              there’s “more at stake.” An email address is non-commital, and
              they know they can unsubscribe if they need to.
            </ParagraphSmall>
            <ParagraphSmall>
              You don’t want to ask for an arm and a leg when you’re trying to
              get a lead. Just get enough to be able to reach out to them again.
              You can always ask for more info from them at a later point in the
              sales journey. Right now, all we want is to be able to control how
              we hit them with touchpoints moving forward.
            </ParagraphSmall>
            <DefinitionHolder>
              <H3>Note: </H3>
              <ParagraphSmall>
                Text marketing has become a hot trend in B2C campaigns. However,
                most consumers still aren’t on-board with text message marketing
                unless they’ve actively chosen to opt-in. For example, Gary
                Vaynerchuk is collecting phone numbers by asking you to text
                him, and he’ll respond to a few texts every day. This gives his
                business your phone number, so he has a more direct line with
                you. But it only works because Gary Vee has a cult-like
                following. So, you can give people the option of giving their
                phone number if you’re curious about text marketing, but
                definitely don’t require it.
              </ParagraphSmall>
            </DefinitionHolder>
            <H2>Cool lead generation ideas</H2>
            <H3>Grab video viewers</H3>
            <ParagraphSmall>
              Video is the future of digital content, both for individuals and
              businesses alike. Marketers have started implementing more and
              more videos into their campaigns to attract clicks, engage
              viewers, and create a strong impression.
            </ParagraphSmall>
            <ParagraphSmall>
              If you’ve started using video for your marketing campaigns (which
              you should, if you haven’t already), then you already have awesome
              content you can use on your landing pages.
            </ParagraphSmall>
            <ParagraphSmall>
              There are two ways to do this. First, put your videos on landing
              pages when relevant. A video is a great way to share relevant
              information without boring or distracting your reader. Not to
              mention that using videos on your lead generation landing pages
              can increase conversions by 86%.
            </ParagraphSmall>
            <ParagraphSmall>
              Second, you can use an embedded capture form in the video to grab
              leads while they’re in the heart of the action. Most video
              platforms let you copy and paste your lead generation code, so it
              will pop up in the video frame to grab leads while they’re still
              deeply engrossed and engaged with the video.
            </ParagraphSmall>
            <H3>Create a personality quiz</H3>
            <ParagraphSmall>
              Quizzes can be a highly effective, (fun) lead magnet. Even the
              most serious folks out there can’t help but click to find out
              which Harry Potter house they’re in or which dessert they are. For
              example, if you sell coffee, your leads would probably love a
              quiz, “What kind of coffee are you?” or “what coffee drink should
              you try out?”
            </ParagraphSmall>
            <ParagraphSmall>
              Bring visitors through the entire quiz or survey, and then ask for
              their email address to get their results. They’ve already invested
              their time filling out the quiz, so they’re dying to know what
              kind of coffee they are. This curiosity and investment mean they
              will likely input their email address to get their immediate
              results.
            </ParagraphSmall>
            <ParagraphSmall>
              (Make sure you include a privacy policy to promise you won’t spam
              their email. You don’t want people to feel “jipped” when their
              results aren’t immediate.)
            </ParagraphSmall>
            <H3>Create a digital mockup of your product</H3>
            <ParagraphSmall>
              People like to see the product that they’re getting. Create a
              mockup of the product you’re offering. Mockup a 3-D book jacket
              for your eBook or include a thumbnail of the first page of your
              downloadable checklist.
            </ParagraphSmall>
            <ParagraphSmall>
              This creates a visual element that makes your prospects feel
              they’re receiving legitimate, tangible value. The lead generation
              landing pages that see the greatest success generally use
              supportive imagery and magnet mockups to emphasize the quality and
              features of the offering.
            </ParagraphSmall>
            <ParagraphSmall>
              Just because it’s digital doesn’t mean it’s not a real product.
              The more it feels like a product, the higher the perceived value
              it will be.
            </ParagraphSmall>
            <ParagraphSmall>
              Another good tip? Make it printable. Something that prints out
              well feels more concrete and is more usable for some people. Then
              it really does become tangible value!
            </ParagraphSmall>
            <H3>Make them look in a mirror</H3>
            <ParagraphSmall>
              Another great way to visually demonstrate the worth of your
              offering? Show pictures or videos from clients giving a
              testimonial. This offers a level of credibility and
              trustworthiness that negates any fears your visitor may have. They
              can see themselves reflected in the person giving the testimonial,
              so they’re more likely to click through so they can see the same
              results.
            </ParagraphSmall>
            <ParagraphSmall>
              Ultimately, you want the visitor to envision an improved lifestyle
              after they’ve downloaded your lead magnet.
            </ParagraphSmall>
            <ParagraphSmall>
              Ultimately, you want the visitor to envision an improved lifestyle
              after they’ve downloaded your lead magnet.
            </ParagraphSmall>
            <H3>Use community as a magnet</H3>
            <ParagraphSmall>
              One of the most underrated lead magnets is access to a community
              that you’ve established.
            </ParagraphSmall>
            <ParagraphSmall>
              Let’s say you run an active Facebook group for clients in your
              industry. Open up the group to new leads to get a glimpse into
              what your coaching community is like.
            </ParagraphSmall>
            <ParagraphSmall>
              Or create a new community with just your leads. Encourage people
              to start a “challenge” to eat healthier or to bike more (or
              whatever it is that’s relevant to your industry). Then create a
              space for those leads to compete or chat with each other
              throughout the process.
            </ParagraphSmall>
            <ParagraphSmall>
              We’ve seen this work wonders for a lot of coaches. Part of
              coaching is the support system, so using a lead magnet that offers
              this kind of support is a great way to not only grab emails but
              also to give a glimpse into what your coaching experience is
              really like.
            </ParagraphSmall>
            <H3>Ask for referrals </H3>
            <ParagraphSmall>
              Use your current leads and customers to get even more leads.&nbsp;
              <OutboundLink
                href="https://www.nielsen.com/us/en/insights/article/2013/a-multi-mix-media-approach-drives-new-product-awareness/"
                aria-label="77% of consumers"
              >
                77% of consumers
              </OutboundLink>
              &nbsp; are more likely to buy a new product after hearing about it
              from friends or family. So it doesn’t hurt to use this kind of
              social proof to capture qualified leads and close more sales.
            </ParagraphSmall>
            <ParagraphSmall>
              Referral programs work well because you’re tapping into an engaged
              market (your leads and customers) that already believe in your
              brand. They’ve already shown an interest, so they know which of
              their friends and family might also be interested.
            </ParagraphSmall>
            <ParagraphSmall>
              This narrows the pool to highly-relevant leads, while also
              encouraging your existing customers to advocate for your brand.
              This kind of engagement leads to repeat purchases and loyal brand
              fans.
            </ParagraphSmall>
            <ParagraphSmall>
              After you’ve delighted your leads or customers, give them an
              incentive to send you referrals. For example, they get a free
              product if they share your content on social media. Or give them a
              link to share, and if someone uses that link, both the refer-er
              and their friend get 10% off their orders.
            </ParagraphSmall>
            <ParagraphSmall>
              It never hurts to ask, and this sort of relationship-building can
              open up a strong avenue of lead generation and loyal brand fans.
            </ParagraphSmall>
            <H2>What doesn’t work?</H2>
            <ParagraphSmall>
              Want a lead generation idea that does not show success? Buying
              leads.
            </ParagraphSmall>
            <ParagraphSmall>
              Some businesses think buying their leads is a great solution.
              They’ll just buy lists of customer info because now they have
              people to market to.
            </ParagraphSmall>
            <ParagraphSmall>
              But most of the time, those leads aren’t even interested in your
              business. No business, not even a brand selling toilet paper, is
              made for everyone. So you can’t buy a lead list and hope that it
              will stick. You end up just blasting out emails to these customers
              who may have never even heard of their business before, or who
              have no reason to buy your product.
            </ParagraphSmall>
            <ParagraphSmall>
              This is bound to fail. These “leads” aren’t leads at all. They’re
              strangers. They likely don’t know your business, and they haven’t
              shown any interest in you.
            </ParagraphSmall>
            <ParagraphSmall>
              This isn’t just a waste of resources. It can make them think of
              your brand as dishonorable and not credible!
            </ParagraphSmall>
            <ParagraphSmall>
              You want your lead list to be qualified and earned. Because then
              you’re targeting an attentive audience who may actually buy from
              you. A country singer would rather perform to an audience of
              country music fans rather than rock enthusiasts.
            </ParagraphSmall>
            <ParagraphSmall>
              In addition, if you email your purchased ‘leads’ out of the blue,
              they’ll likely feel that putt-off. They’ll wonder how you got
              their email information, and they’ll likely block you or put you
              in spam. So you end up alienating even those prospects who could
              have been interested leads.
            </ParagraphSmall>
            <ParagraphSmall>
              Don’t buy leads. Generate genuine leads with landing pages,
              websites, videos, upgrades, and referrals. This gives you a list
              of interested prospects who want to hear more from you in the
              future.
            </ParagraphSmall>
            <H2>Best lead generation</H2>
            <ParagraphSmall>
              Our ultimate tip for lead generation? Establish rapport with your
              visitor as fast as you can. Add value, prove your expertise, and
              make your lead magnet so interesting and unique that it’s
              impossible to pass up.
            </ParagraphSmall>
            <ParagraphSmall>
              It sounds like the ultimate challenge, we know. But I guarantee
              that you know something or do something unique that no one else is
              doing in the industry. Or at least that no one else is talking
              about.
            </ParagraphSmall>
            <ParagraphSmall>
              Maybe you’re a life coach who sends pictures of puppies every
              morning to help your clients wake up. An awesome lead magnet would
              be all the pictures and text messages you sent last month that got
              people amped up. That’s super unique, and it’s not that hard to
              put together since you’re already doing that.
            </ParagraphSmall>
            <ParagraphSmall>
              Every brand has a value proposition. Pick out yours and then craft
              your lead generation around what makes you unique!
            </ParagraphSmall>
            <ParagraphSmall>
              In the next chapter, we’ll make your lead generation even easier
              with a list of all the tools and resources to get you moving and
              grooving with leads for your business.
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

export default LeadGenerationIdeas
