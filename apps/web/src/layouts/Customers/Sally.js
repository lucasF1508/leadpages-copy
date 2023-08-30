import React from 'react'
import { styled } from '@design'
// components
import Image from '@components/Image'
import CustomerFeatureHeader from '@legacy/components/headers/CustomerFeatureHeader'
import CustomerStoriesThumbnailRotator from '@legacy/components/rotators/CustomerStoriesThumbnailRotator'
import FlexRow from '@legacy/components/layout/FlexRow'
import QuoteComponent from '@legacy/components/customers/QuoteComponent'
import TwoButtonCTA from '@legacy/components/customers/TwoButtonCTA'
import Wistia_CustomerFeatureVideo from '@legacy/components/videos/Wistia_CustomerFeatureVideo'
// images
import heroImage from '@legacy/assets/images/customers/sally/Sally_Hero-full-width@2x.jpg'
import imageGroup1 from '@legacy/assets/images/customers/sally/sally-leadpages-totem_730px@2x.jpg'
import rowImage1 from '@legacy/assets/images/customers/sally/drag-and-drop-builder-leadpages_692px@2x.png'
import rowImage2 from '@legacy/assets/images/customers/sally/sell-your-expertise_schedule_online-sales_consultations_leadpages_759px@2x.jpg'
import rowImage3 from '@legacy/assets/images/customers/sally/capture-leads_lead-generation-tool_leadpages_660px@2x.jpg'
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
})

const Title = styled('div', {
  opacity: 0.5,
  color: '$black',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  fontFamily: 'Space Mono',
  textTransform: 'uppercase',
  marginBottom: '51px',

  '@media (max-width: 768px)': {
    paddingTop: '58px',
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.07px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    marginTop: '80px',
  },

  '@media (min-width: 993px)': {
    marginTop: '120px',
  },
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

const SallyCustomerPage = () => (
  <>
    <CustomerFeatureHeader
      image={heroImage}
      imageAlt="Speaker & Coach"
      title="Speaker & Coach"
      caption="Public speaking coach Sally Zimney uses Leadpages to grow her audience."
    />
    <IntroTextContainer>
      <IntroText>
        With a thriving coaching business already established, Sally Zimney is
        turning up the volume and bringing her unique presentation methods to
        the masses. With a wealth of downloadable resources, online courses, and
        a vibrant podcast—she’ll admit—she’s got content galore.
      </IntroText>
      <IntroText>
        When it comes to turning her digital content into customers, Sally looks
        to Leadpages.
      </IntroText>
    </IntroTextContainer>
    <MainTextContainer>
      <Title>From Passion to Profit</Title>
      <Heading>
        <h2>
          “Something I was naturally good at became full-time solo-preneurship”
        </h2>
      </Heading>
      <Body>
        “
        <OutboundLink
          href="https://bemoved.com/"
          target="_blank"
          aria-label="This Moved Me website"
          rel="noreferrer noopener"
        >
          This Moved Me
        </OutboundLink>
        &nbsp;started as something that I was just doing because I loved it and
        it took me a while to realize—nope, this is a for-real thing. I’ve built
        a business. I’m the CEO now. What?!”
      </Body>
    </MainTextContainer>
    <Wistia_CustomerFeatureVideo videoId="j6osvc0xze" />
    <MainTextContainer>
      <Title>Digital Marketing That Delivers Results</Title>
      <Heading>
        <h2>
          “I need help with marketing. I’m doing it all when ‘all’ is not my
          expertise”
        </h2>
      </Heading>
      <Body>
        “I’m turning my approach into an online program. That’s required me to
        take big risks and live with courage. What I LOVE about and depend on
        Leadpages for is the slew of templates and the library of resources that
        make it as easy as possible to go from ‘nothing’ to ‘done’ quickly.”
      </Body>
    </MainTextContainer>
    <Flexbox>
      <FlexMiddle>
        <ImageGroup
          image={imageGroup1}
          alt="Digital Marketing That Delivers Results"
        />
      </FlexMiddle>
      <FlexRight>
        <Quotation src={quotationImage.src} alt="quotation mark" />
        <QuotationText>
          “Right now, I use Leadpages for my pop-ups and landing pages—and for
          someone who has as much content as I do (and is doing it all on my
          own!) I need easy. And this is as easy as it gets!”
        </QuotationText>
        <QuotationAuthor>Sally Zimney • CEO</QuotationAuthor>
        <QuotationTitle>This Moved Me Productions</QuotationTitle>
      </FlexRight>
    </Flexbox>
    <MainTextContainer>
      <Title>Leadpages Brings Her Business to the Next Level</Title>
      <Heading>
        <h2>“I’ve set some really big goals for myself...”</h2>
      </Heading>
      <Body>
        “I have big goals to build my online coaching platform into a thriving
        part of my business this year, but I have to be braver and bolder in my
        approach to online marketing. That’s why I’m using Leadpages to grow my
        courses, my audience, my email list, etc.
      </Body>
      <Body>
        “Now, I am coaching full-time, hosting a podcast, working hard to build
        an audience and an online platform to help more leaders, entrepreneurs,
        and change-makers speak with more authenticity, connection, and
        courage.”
      </Body>
    </MainTextContainer>
    <HeadingContainer>
      <CenteredHeading>
        <h2>How Sally uses Leadpages</h2>
      </CenteredHeading>
    </HeadingContainer>
    <FlexRow
      image={rowImage1}
      imageAlt="Customizable Templates"
      title="Customizable Templates"
      headline="Drag & Drop Builder"
      caption="As a one-woman-show, Sally uses Leadpages to quickly create and publish high-converting landing pages and pop-ups that look professional and perform well."
      ctaArray={[
        {
          text: 'View Templates',
          link: '/templates',
        },
      ]}
    />
    <FlexRow
      flexDirectionReverse
      image={rowImage2}
      imageAlt="Online Course Registration"
      title="Online Course Registration"
      headline="Sell your expertise"
      caption="Registering students for her online courses and workshops has helped Sally scale her business and break free from an 8-5 day full of one-on-one sessions."
      ctaArray={[
        {
          text: 'View Landing Page Templates',
          link: '/templates',
        },
      ]}
    />
    <FlexRow
      image={rowImage3}
      imageAlt="Lead Generation"
      title="Lead Generation"
      headline="Capture new leads"
      caption="With a growing online following, Sally knows that engaging an audience isn’t enough. She uses landing pages, squeeze pages, and opt-in forms to capture qualified leads and add them to her Convertkit email lists."
      ctaArray={[
        {
          text: 'Create high-converting content',
          link: '/product',
        },
      ]}
    />
    <QuoteComponent
      quote="“What I LOVE about and depend on Leadpages for is the slew of templates and the library of resources that make it as easy as possible to go from ‘nothing’ to ‘done’ quickly.”"
      author="Sally Zimney"
    />
    <CustomerStoriesThumbnailRotator />
    <TwoButtonCTA
      headline="Create your own story"
      caption="Join the entrepreneurs who trust Leadpages every day to grow their business online. Already part of the tribe? Share your own story."
    />
  </>
)

export default SallyCustomerPage
