import React from 'react'
import { styled } from '@design'
// components
import Image from '@components/Image'
import CustomerFeatureHeader from '@legacy/components/headers/CustomerFeatureHeader'
import CustomerStoriesThumbnailRotator from '@legacy/components/rotators/CustomerStoriesThumbnailRotator'
import FlexRow from '@legacy/components/layout/FlexRow'
import PodcastLeadbox from '@legacy/components/conversion-tools/LB_LikeLearningFromRealPeoplePodcast'
import QuoteComponent from '@legacy/components/customers/QuoteComponent'
import SEO from '@legacy/components/SEO'
import TwoButtonCTA from '@legacy/components/customers/TwoButtonCTA'
import Wistia_CustomerFeatureVideo from '@legacy/components/videos/Wistia_CustomerFeatureVideo'
// images
import heroImage from '@legacy/assets/images/customers/sayer/Sayer-Hero-full-width@2x.jpg'
import imageGroup1 from '@legacy/assets/images/customers/sayer/sayer-mas-distro-leadpages_group_1110px@2x.jpg'
import rowImage1 from '@legacy/assets/images/customers/sayer/sayer-uses-leadpages_grow-audience_750px@2x.jpg'
import rowImage2 from '@legacy/assets/images/customers/sayer/sayer-uses-leadpages_unlimited-publishing_615px@2x.jpg'
import rowImage3 from '@legacy/assets/images/customers/sayer/sayer-uses-leadpages_multimedia-content_660px@2x.jpg'
import quotationImage from '@legacy/assets/images/global/quote-mark_tan_62px@2x.svg'

const TextContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',

  '@media (max-width: 768px)': {
    px: '12.5%',
  },
})

const IntroTextContainer = styled(TextContainer, {
  px: '30%',

  '@media (max-width: 767px)': {
    px: '12.5%',
  },
})

const IntroText = styled('div', {
  color: '$text',
  fontFamily: 'Apercu Pro',
  fontSize: '24px',
  lineHeight: '36px',
  marginBottom: '2rem',

  '@media (max-width: 768px)': {
    fontSize: '18px',
    lineHeight: '28px',
  },
})

const MainTextContainer = styled(TextContainer, {
  px: '30%',

  '@media (max-width: 767px)': {
    px: '12.5%',
  },
})

const HeadingContainer = styled(TextContainer, {
  px: '12.5%',
  marginTop: '7rem',
})

const Heading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '20px',
  lineHeight: '24px',
  letterSpacing: '-0.07px',
  color: '$text',
  marginBottom: '51px',

  '@media (max-width: 768px)': {
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.07px',
    paddingTop: '58px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    marginTop: '80px',
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
  },

  '@media (min-width: 993px)': {
    marginTop: '120px',
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '-0.5px',
  },
})

const CenteredHeading = styled(Heading, {
  textAlign: 'center',
})

const SubHeading = styled('div', {
  color: '$text',
  fontFamily: 'Apercu Pro',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '24px',
  marginBottom: '2rem',
})

const Body = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  lineHeight: '28px',
  marginBottom: '2rem',
})

const Paragraph = styled('p', {
  marginBottom: '0.5rem',
})

const ImageGroup = styled(Image, {
  maxWidth: '1140px',
  mx: 'auto',
  marginBottom: '75px',
})

const Flexbox = styled('div', {
  maxWidth: '1140px',
  marginRight: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: '30%',
  paddingRight: '5%',

  '@media (max-width: 768px)': {
    display: 'block',
    paddingLeft: '12.5%',
    paddingRight: '12.5%',
  },
})

const FlexMiddle = styled('div', {
  flex: '0 0 60%',
  maxWidth: '60%',

  '@media (max-width: 768px)': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },
})

const FlexRight = styled('div', {
  flex: '0 0 25%',
  maxWidth: '25%',

  '@media (max-width: 768px)': {
    marginTop: '50px',
    marginBottom: '96px',
    flex: '0 0 100%',
    maxWidth: '100%',
  },
})

const Quotation = styled('img', {
  width: '62.05px',
  height: '48.25px',
  marginBottom: '2rem',
})

const QuotationText = styled(IntroText, {})

const QuotationAuthor = styled('div', {
  color: '$text',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  marginBottom: '0.5rem',
})

const QuotationTitle = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
})

const OutboundLink = styled('a', {
  color: '$primary',
  paddingBottom: '3px',
  borderBottom: '2px solid rgb(209, 198, 249)',

  '&:hover': {
    borderBottom: '2px solid $colors$primary',
  },
})

const SayerCustomerPage = () => (
  <>
    <SEO
      pathname="/customers/sayer"
      title="Sayer | Leadpages Customer | Website & Landing Page Builder"
      description="Sayer Payne uses Leadpages to connect customers with retailers. Leadpages helps small businesses grow: websites, landing pages, and more!"
      ogtitle="Meet Sayer |Small Business Success Story & Leadpages Customer"
    />
    <PodcastLeadbox />
    <CustomerFeatureHeader
      image={heroImage}
      imageAlt="Ecommerce Entrepreneur"
      title="Ecommerce Entrepreneur"
      caption="Sayer Payne uses Leadpages to connect customers with retailers."
    />
    <IntroTextContainer>
      <IntroText>
        In many ways, Sayer Payne is the man in the middle: discovering guitar
        pedal manufacturers, developing their brands, and distributing their
        work to a marketplace of musicians. In a hyper-competitive industry in
        which manufacturers, distributors, and retailers share responsibility
        for driving brand awareness—&nbsp;
        <OutboundLink
          href="https://www.masdistro.com/"
          target="_blank"
          aria-label="Mas Distro"
          rel="noreferrer noopener"
        >
          Mas Distro
        </OutboundLink>
        &nbsp; is making waves.
      </IntroText>
      <IntroText>
        See how Sayer uses Leadpages to help guitar pedal brands connect with
        consumers in a way that resonates.
      </IntroText>
    </IntroTextContainer>
    <MainTextContainer>
      <Heading>
        <h2>Q&A with Sayer</h2>
      </Heading>
      <SubHeading>
        You formerly managed a vintage music store, how did you get from there
        to here?
      </SubHeading>
      <Body>
        I’ve been in musical instruments since 2004, managing a store and
        selling guitars for $2,000-10,000. During the ’08 recession I saw our
        customers drop off but I knew that they would still be after something
        to soothe their gear addiction&mdash;just something at a lower price
        point. So I formed my own FX pedal company, which eventually became Mas
        Distro.
      </Body>
    </MainTextContainer>
    <ImageGroup image={imageGroup1} alt="Q&A with Sayer" />
    <Flexbox>
      <FlexMiddle>
        <SubHeading>
          How do you choose which pedal manufacturers (musical tinkerers) to
          work with?
        </SubHeading>
        <Body>
          My rule is that the more normal the person, the less I’m going to like
          the product. The more “normal,” high-school football game-winning guy,
          doesn’t often have the experience that leads to working in the
          basement with electronics for 10 years until you have this type of
          complicated, technical skillset.
        </Body>
        <SubHeading>
          Let’s imagine you wake up on a Tuesday morning...what happens next?
        </SubHeading>
        <Body>
          My personal day operates on a global time table. So when I wake up, I
          am cleaning through correspondences that have come in from Asia. After
          I drop my son off at school I’m working on Europe from 8-10 AM, then
          US guitar stores open at 10 or 11 AM so I am with them until 4-5 PM.
          During that time I would be intermittently communicating with our
          manufacturing partners and our own staff. My day is, by design, sales
          and strategy for every minute I can make it so.
        </Body>
      </FlexMiddle>
      <FlexRight>
        <Quotation src={quotationImage.src} alt="quotation mark" />
        <QuotationText>
          You never win when you don’t put the chips down on yourself at the
          right time.
        </QuotationText>
        <QuotationAuthor>Sayer Payne • CEO</QuotationAuthor>
        <QuotationTitle>Owner, MAS Distro</QuotationTitle>
      </FlexRight>
    </Flexbox>
    <MainTextContainer />
    <MainTextContainer>
      <SubHeading>
        What’s the best piece of advice you’ve ever received?
      </SubHeading>
      <Body>
        <Paragraph>
          I have always sought as much wisdom as I could from people with more
          experience than myself both in and out of industry. The advice that’s
          best served me is that in the end, time is our most treasured resource
          and not to spend such valuable time on things that don’t express who
          you really are and what you really want to be.
        </Paragraph>
        <Paragraph>
          Another thing I try to offer as advice is that business is about
          taking the right risks. You never win when you don’t put the chips
          down on yourself at the right time.
        </Paragraph>
      </Body>
      <SubHeading>
        [Permission to brag] — What’s one thing you absolutely rock at?&nbsp;
      </SubHeading>
      <Body>
        I can quickly assess what is valuable to the person I am working with.
        I’ve spent so much time working on the phone with people that I feel
        like I can hear what their face looks like. I find that every single
        detail of what a person says is key—especially long term—and I pay
        attention to the nuances.
      </Body>
    </MainTextContainer>
    <Wistia_CustomerFeatureVideo videoId="y1tuebxmjk" />
    <MainTextContainer>
      <SubHeading>What’s one thing you’re actively trying to learn?</SubHeading>
      <Body>
        So much of my business is in my head, I’ve been on a path for the last
        couple years to learn how to transmit my vision to others and let them
        both enact and modify it based on their perspective. My team operates
        with great autonomous freedom, which means our candidates have to be
        superstars.
      </Body>
      <Body>
        Learning to recognize the traits that lead to success both in the
        candidates and my own messaging with them is something I work to learn
        every day.
      </Body>
    </MainTextContainer>
    <HeadingContainer>
      <CenteredHeading css={{ color: '$textHighlight' }}>
        “I got tired of not having access to the most important tools that were
        limiting my ability to sell.”
      </CenteredHeading>
      <CenteredHeading>
        <h2>How Sayer uses Leadpages</h2>
      </CenteredHeading>
    </HeadingContainer>
    <FlexRow
      image={rowImage1}
      imageAlt="Mobile Responsive Templates"
      title="Mobile Responsive Templates"
      headline="Grow your audience"
      caption="Representing dozens of brands requires professional-looking landing pages that can quickly be customized to fit each business’ unique vibe. That’s a cinch with more than 200 templates to choose from and the easiest builder around."
      ctaArray={[
        {
          text: 'View templates',
          link: '/templates',
        },
      ]}
    />
    <FlexRow
      flexDirectionReverse
      image={rowImage2}
      imageAlt="Free Leadpages Domain"
      title="Free Leadpages Domain"
      headline="Unlimited publishing"
      caption="With a growing portfolio of brands to represent, unlimited page publishing is critical for Sayer and his team. With Leadpages, he won’t pay more for his success or worry about hitting upper limits on his account."
      ctaArray={[
        {
          text: 'View Leadpages Plans',
          link: '/pricing',
        },
      ]}
    />
    <FlexRow
      image={rowImage3}
      imageAlt="Video Landing Pages"
      title="Video Landing Pages"
      headline="Multimedia Content"
      caption="Showcase the story of your brand and highlight key features with images, videos, and multimedia. Drag and drop your content into position and our mobile-responsive builder will display beautifully on any device size."
      ctaArray={[
        {
          text: 'Explore features',
          link: '/product/feature-index',
        },
      ]}
    />
    <QuoteComponent
      quote="“What we really want is customers to choose retailers that match their culture and their idea of service—not necessarily the retailer that spends the most on marketing or is the most aggressive.”"
      author="Sayer Payne"
    />
    <CustomerStoriesThumbnailRotator />
    <TwoButtonCTA
      headline="Create your own story"
      caption="Join 40,000+ businesses that trust Leadpages every day to grow their business online. Already part of the tribe? Share your own story."
    />
  </>
)

export default SayerCustomerPage
