import React from 'react'
import { styled } from '@design'
// components
import Image from '@components/Image'
import CustomerFeatureHeader from '@legacy/components/headers/CustomerFeatureHeader'
import CustomerStoriesThumbnailRotator from '@legacy/components/rotators/CustomerStoriesThumbnailRotator'
import FlexRow from '@legacy/components/layout/FlexRow'
import PodcastLeadbox from '@legacy/components/conversion-tools/LB_LikeLearningFromRealPeoplePodcast'
import QuoteComponent from '@legacy/components/customers/QuoteComponent'
import TwoButtonCTA from '@legacy/components/customers/TwoButtonCTA'
import Wistia_CustomerFeatureVideo from '@legacy/components/videos/Wistia_CustomerFeatureVideo'
// images
import heroImage from '@legacy/assets/images/customers/greg/Greg-Benz-Photography_1440px@2x.jpg'
import imageGroup1 from '@legacy/assets/images/customers/greg/Greg-Benz-Photography_Leadpages_730px@2x.jpg'
import rowImage1 from '@legacy/assets/images/customers/greg/showcase-image-gallery_Leadpages_785px@2x.jpg'
import rowImage2 from '@legacy/assets/images/customers/greg/optimized-landing-pages_Leadpages_635px@2x.jpg'
import rowImage3 from '@legacy/assets/images/customers/greg/sales-pages-checkout-forms_Leadpages_666px@2x.jpg'
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
  marginBottom: '6rem',

  '@media (max-width: 767px)': {
    px: '12.5%',
  },
})

const HeadingContainer = styled(TextContainer, {
  px: '12.5%',
  marginTop: '7rem',
  marginBottom: '6rem',
})

const OrangeHeadingContainer = styled('div', {
  maxWidth: '1140px',
  max: 'auto',
  px: '15%',
  textAlign: 'center',
  paddingTop: '6rem',
  paddingBottom: '2rem',
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
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
  },

  '@media (min-width: 993px)': {
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '-0.5px',
  },
})

const CenteredHeading = styled(Heading, {
  textAlign: 'center',
})

const OrangeCenteredHeading = styled(CenteredHeading, {
  color: '$textHighlight',
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

const ImageGroup = styled(Image, {
  maxWidth: '1140px',
  mx: 'auto',
  marginBottom: '75px',
})

const Flexbox = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  px: '7.5%',

  '@media (max-width: 768px)': {
    display: 'block',
    px: '12.5%',
  },
})

const FlexMiddle = styled('div', {
  flex: '0 0 70%',
  maxWidth: '70%',

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

const GregCustomerPage = () => (
  <>
    <PodcastLeadbox />
    <CustomerFeatureHeader
      image={heroImage}
      imageAlt="Leadpages customer case studies - Greg"
      title="Photographer & Educator"
      caption="Greg Benz uses Leadpages to sell his software and educate other photographers."
    />
    <IntroTextContainer>
      <IntroText>
        Engineer turned landscape photographer, Greg’s journey into
        entrepreneurship began as a quest for freedom more than for financial
        gain. After developing tools to retouch his own images, he now sells
        software and training courses designed to help other artists perfect
        their own craft.
      </IntroText>
      <IntroText>
        Greg uses Leadpages to share the vision, sell the tools, and teach the
        technique behind his artwork.
      </IntroText>
      <Body>
        For professional photographers and users of Photoshop,&nbsp;
        <OutboundLink
          href="https://gregbenzphotography.com/lumenzia/"
          target="_blank"
          aria-label="Greg Benz Photography"
          rel="noreferrer noopener"
        >
          Lumenzia
        </OutboundLink>
        &nbsp; is a Photoshop panel that delivers greater ease and control in
        applying luminosity masks. For the rest of us—that means a software
        plugin to help enhance images and create gorgeous and realistic edits.
      </Body>
    </IntroTextContainer>
    <OrangeHeadingContainer>
      <OrangeCenteredHeading>
        “When I started to pursue entrepreneurship, I wanted to focus on meeting
        certain life goals for me, which meant not being tied to a specific
        place or schedule.”
      </OrangeCenteredHeading>
      <SubHeading>Greg Benz</SubHeading>
    </OrangeHeadingContainer>
    <MainTextContainer>
      <Heading>
        <h2>Q&A with Greg</h2>
      </Heading>
      <SubHeading>
        Photography started as your passion project, how did you turn it into a
        business?
      </SubHeading>
      <Body>
        In my own landscape photography, I didn’t have the tools that I needed
        and pretty quickly realized that the things I need for my own work are
        things that other people might value. That’s what got me started in
        software and instruction. I spend so much time perfecting my craft and I
        love helping other people on their own journey.
      </Body>
    </MainTextContainer>
    <Flexbox>
      <FlexMiddle>
        <ImageGroup image={imageGroup1} alt="Q&A with Greg" />
      </FlexMiddle>
      <FlexRight>
        <Quotation src={quotationImage.src} alt="quotation mark" />
        <QuotationText>
          “I’m, at my core, a creator—an engineer more than an artist. But I
          love building—a physical product or a course—anything that other
          people can benefit from.“
        </QuotationText>
        <QuotationAuthor>Greg Benz • Owner</QuotationAuthor>
        <QuotationTitle>Greg Benz Photography</QuotationTitle>
      </FlexRight>
    </Flexbox>
    <MainTextContainer>
      <SubHeading>What does an average week look like?</SubHeading>
      <Body>
        As an entrepreneur, there’s definitely a lot of different things I need
        to do. I’m a software developer, I’m customer support, I’m marketing,
        I’m an instructor, I’m a print maker, I’m an accountant. The hardest
        thing for me with that is trying to think about at what point do I
        offload some of those things to someone else so I can get help where I
        need it.
      </Body>
    </MainTextContainer>
    <HeadingContainer>
      <OrangeCenteredHeading>
        “I’m working harder than I ever have, but I feel like I’m working less
        because every time I’m doing something, it’s something that I choose to
        do.”
      </OrangeCenteredHeading>
      <QuotationAuthor css={{ textAlign: 'center' }}>Greg Benz</QuotationAuthor>
    </HeadingContainer>
    <MainTextContainer>
      <SubHeading>
        What’s the most rewarding part of being your own boss?
      </SubHeading>
      <Body>
        The ability to go and pursue life on my terms—to go out and spend time
        with my family, to shoot when I want, where I want, and to have the
        flexibility to pursue what I want to do.
      </Body>
    </MainTextContainer>
    <Wistia_CustomerFeatureVideo videoId="b4msm8j6oo" />
    <MainTextContainer>
      <SubHeading>
        When you were ready to stop trading your time for money, how did you
        begin building an online audience?
      </SubHeading>
      <Body>
        I started blogging, put out some free software, and developed my content
        marketing to show people the kind of work I’m doing and help them with
        that. First and foremost it’s about being a resource. You then attract
        other like-minded people who are interested in the topic and it just
        kind of snowballs from there.
      </Body>
    </MainTextContainer>
    <HeadingContainer>
      <CenteredHeading>
        <h2>How Greg uses Leadpages</h2>
      </CenteredHeading>
    </HeadingContainer>
    <FlexRow
      image={rowImage1}
      imageAlt="How Greg uses Leadpages"
      title="Customizable Templates"
      headline="Showcase his work"
      caption="With a wealth of high-resolution images and step-by-step video tutorials, Greg quickly customizes his pages with multimedia content."
      ctaArray={[
        {
          text: 'Conversion-Optimized Templates',
          link: '/templates',
        },
      ]}
    />
    <FlexRow
      flexDirectionReverse
      image={rowImage2}
      imageAlt="Unlimited Page Publishing"
      padImage
      title="Unlimited Page Publishing"
      headline="Optimized landing pages"
      caption="By segmenting his topics and publishing tech support documents on landing pages, Greg delivers high-value content, keeps everything up to date, and operates as a one-man show."
      ctaArray={[
        {
          text: 'Landing Page Builder',
          link: '/product/landing-page-builder',
        },
      ]}
    />
    <FlexRow
      image={rowImage3}
      imageAlt="Sales Pages & Checkouts"
      title="Sales Pages & Checkouts"
      headline="Sell his software"
      caption="Sales pages allow Greg to showcase the benefits of his software and persuade his audience to go from content consumers to paying customers."
      ctaArray={[
        {
          text: 'Discover Checkouts',
          link: '/product/checkouts',
        },
      ]}
    />
    <QuoteComponent
      quote="“Leadpages saves me so much time on marketing that I can focus on things like creating my art, creating my software—things that really drive new value in my business.”"
      author="Greg Benz"
    />
    <CustomerStoriesThumbnailRotator />
    <TwoButtonCTA
      headline="Create your own story"
      caption="Join 40,000+ businesses that trust Leadpages every day to grow their business online. Already part of the tribe? Share your own story."
    />
  </>
)

export default GregCustomerPage
