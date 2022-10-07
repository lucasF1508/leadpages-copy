import React from 'react'
import { styled } from '@design'
import ReactAudioPlayer from 'react-audio-player'
// components
import Image from '@components/Image'
import CustomerFeatureHeader from '@legacy/components/headers/CustomerFeatureHeader'
import CustomerStoriesThumbnailRotator from '@legacy/components/rotators/CustomerStoriesThumbnailRotator'
import FlexRow from '@legacy/components/layout/FlexRow'
import PodcastLeadbox from '@legacy/components/conversion-tools/LB_LikeLearningFromRealPeoplePodcast'
import QuoteComponent from '@legacy/components/customers/QuoteComponent'
import SEO from '@legacy/components/SEO'
import TwoButtonCTA from '@legacy/components/customers/TwoButtonCTA'
// images
import heroImage from '@legacy/assets/images/customers/kailei/Hero-Kailei-Carr_Leadpages_full-width_1440px@2x.jpg'
import imageGroup1 from '@legacy/assets/images/customers/kailei/Kailei-totem_730px@2x.jpg'
import imageGroup2 from '@legacy/assets/images/customers/kailei/Kailei-totem_2_730px@2x.jpg'
import rowImage1 from '@legacy/assets/images/customers/kailei/leadpages-website-builder_815px@2x.jpg'
import rowImage2 from '@legacy/assets/images/customers/kailei/leadpages-landing-pages_635px@2x.jpg'
import rowImage3 from '@legacy/assets/images/customers/kailei/leadpages-sales-pages_665px@2x.jpg'
import rowImage4 from '@legacy/assets/images/customers/kailei/leadpages-templates_736px@2x.jpg'
import podcastImage from '@legacy/assets/images/customers/kailei/Kailei-Carr_TLG Podcast@2x.jpg'
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
  mx: 'auto',
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

const FlexImageMiddle = styled('div', {
  flex: '0 0 70%',
  maxWidth: '70%',

  '@media (max-width: 768px)': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },
})

const FlexImageRight = styled('div', {
  flex: '0 0 70%',
  maxWidth: '70%',

  '@media (max-width: 768px)': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },
})

const FlexQuoteRight = styled('div', {
  flex: '0 0 25%',
  maxWidth: '25%',

  '@media (max-width: 768px)': {
    marginTop: '50px',
    marginBottom: '96px',
    flex: '0 0 100%',
    maxWidth: '100%',
  },
})

const FlexQuoteLeft = styled('div', {
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

const KaileiCustomerPage = () => (
  <>
    <SEO
      pathname="/customers/kailei"
      title="Kailei | Leadpages Customer | Website & Landing Page Builder"
      description="Kailei uses Leadpages to book clients and sell her consulting services. Leadpages helps small businesses grow: websites, landing pages, and more!"
      ogtitle="Meet Kailei |Small Business Success Story & Leadpages Customer"
    />
    <PodcastLeadbox />
    <CustomerFeatureHeader
      image={heroImage}
      imageAlt="Leadpages Customer Case Studies - Kailei"
      title="Executive Coach & Consultant"
      caption="Kailei uses Leadpages to book clients and sell her consulting services."
    />
    <IntroTextContainer>
      <IntroText>
        Entrepreneur, executive coach, speaker, and podcaster—Kailei Carr uses a
        variety of mediums to bring a powerful message to working women: that
        secret weapons of successful women shouldn’t be kept secret.
      </IntroText>
      <IntroText>
        Kailei uses Leadpages to do it all—market her services, collect client
        leads, and sell her diverse offerings: from one-on-one coaching to
        workshops and retreats.
      </IntroText>
      <Body>
        “Friday was my last day at my job, Monday my mom passed away, and
        Wednesday my husband left his job—so it was like everything changed
        within a week,” Kailei said. But rather than resist the end of an era,
        Kailei set forth to create the next one.
      </Body>
      <Body>
        “Climbing the corporate ladder came kind of naturally to me,” she said,
        “but I knew in my heart that the next phase of my life would be about
        helping other women. I realized that many things hinder women as they
        advanced in their careers—things considered soft skills. Many of which
        are never taught in a classroom or shared in a performance review.”
      </Body>
      <Body>
        In April 2014, Kailei started her own business—with a focus on image
        consulting, personal branding, and digital presence. She tapped into her
        professional network and booked a few local speaking engagements and
        workshops.&nbsp;
      </Body>
    </IntroTextContainer>
    <Flexbox>
      <FlexImageMiddle>
        <ImageGroup image={imageGroup1} alt="Nourish with Kate" />
      </FlexImageMiddle>
      <FlexQuoteRight>
        <Quotation src={quotationImage.src} alt="quotation mark" />
        <QuotationText>
          “Honestly, I wasn’t sure if people would ‘bite,’ but after I launched
          my company it didn’t take long for me to realize that I made the right
          move.”
        </QuotationText>
        <QuotationAuthor>Kailei Carr</QuotationAuthor>
      </FlexQuoteRight>
    </Flexbox>
    <MainTextContainer>
      <Body>
        With her first few sales behind her, Kailei wanted to expand her
        executive coaching services and work with women one-on-one. She had a
        network—that was huge. And a new offering no one had heard about—so how
        could she connect the dots and sell something from scratch? She began by
        offering pro bono personal brand profiles for executives and
        upcoming-executives: mini-consulting sessions to close the gap between
        how a woman hopes to show up in the world and how she is perceived by
        others.&nbsp;
      </Body>
    </MainTextContainer>
    <MainTextContainer>
      <Image
        image={podcastImage}
        alt="Podcast Image"
        css={{ marginBottom: '32px' }}
      />
      <ReactAudioPlayer
        style={{ width: '100%' }}
        src="https://traffic.libsyn.com/conversioncast/TLG030.mp3"
        controls
      />
    </MainTextContainer>
    <MainTextContainer>
      <Body>
        “That went really well, but then I said ‘OK, would you pay for it
        though?’ and they said ‘of course we would!’” Kailei recalled. “So from
        there I started to get consulting clients and began coaching, which
        turned into an online training course—and I started using Leadpages in
        2015 when I launched my first sales page for that course.“
      </Body>
      <Body>
        Today, the majority of Kailei’s clients are female leaders and
        executives in large-scale corporations. Together, they focus on the soft
        skills and subtleties that so often make the difference between
        ‘powerful presence’ and being ‘passed up’ for opportunities. Her
        message: how we “show up” in the world—both online and off—matters. That
        entails everything from designing a professional style, developing a
        branded digital presence, and working on the mental blocks that hold us
        back.
      </Body>
    </MainTextContainer>
    <OrangeHeadingContainer>
      <OrangeCenteredHeading>
        “When I was first starting my business, I had to ask myself: ‘what are
        my strengths, what are my unique gifts, what are the experiences that
        have shaped who I am—and how can I package that into something that can
        be valuable to other people?’”
      </OrangeCenteredHeading>
      <SubHeading>Kailei Carr</SubHeading>
    </OrangeHeadingContainer>
    <MainTextContainer>
      <Body>
        When she’s not coaching clients or speaking at conferences and
        corporations, Kailei can be found hosting her podcast, Beyond the
        Business Suit, where she’s interviewed powerful women in business,
        best-selling authors and industry experts.
      </Body>
    </MainTextContainer>
    <Flexbox>
      <FlexQuoteLeft>
        <Quotation src={quotationImage.src} alt="quotation mark" />
        <QuotationText>
          “I love being able to do work that I feel called to do and the
          flexibility to work in the way that I want.”
        </QuotationText>
        <QuotationAuthor>Kailei Carr</QuotationAuthor>
      </FlexQuoteLeft>
      <FlexImageRight>
        <ImageGroup image={imageGroup2} alt="Nourish with Kate" />
      </FlexImageRight>
    </Flexbox>
    <HeadingContainer>
      <CenteredHeading>How Kailei uses Leadpages</CenteredHeading>
    </HeadingContainer>
    <FlexRow
      image={rowImage1}
      imageAlt="How Kailei uses Leadpages: DIY Website Builder"
      title="Leadpages Sites"
      headline="DIY Website Builder"
      caption="“I’ve built sites to promote my conferences with Leadpages Sites and loved that it was so user-friendly. I was able to start from a template, do what I needed to do, and I’ve received great feedback from my audience—people love it.”"
      ctaArray={[
        {
          text: 'View Site Templates',
          link: '/website-templates',
        },
      ]}
    />
    <FlexRow
      flexDirectionReverse
      image={rowImage2}
      imageAlt="How Kailei uses Leadpages: Generating Qualified Leads"
      padImage
      title="Lead-Generation Landing Pages"
      headline="Generating Qualified Leads"
      caption="Expanding beyond her personal network meant reaching a targeted online audience and nurturing leads from initial curiosity to point of sale. Kailei uses Leadpages to create numerous pages with lead magnets including book lists, guides, cheat sheets and more."
      ctaArray={[
        {
          text: 'Landing Page Builder',
          link: '/templates',
        },
      ]}
    />
    <FlexRow
      image={rowImage3}
      imageAlt="How Kailei uses Leadpages: Sell Services Online"
      title="Sales Pages"
      headline="Sell Services Online"
      caption="From private coaching to group-format workshops, Kailei relies on Leadpages to sell her professional services online."
      ctaArray={[
        {
          text: 'Discover Checkouts',
          link: '/product/checkouts',
        },
      ]}
    />
    <FlexRow
      flexDirectionReverse
      image={rowImage4}
      imageAlt="How Kate uses Leadpages: Ready-to-Go Page Templates"
      padImage
      title="High-Converting Templates"
      headline="Ready-to-Go Page Templates"
      caption="“I wanted something that looked clean, reflected my brand, and was easy to
          do myself,” says Kailei. “The templates are well designed so they feel very professional without using expensive graphic designers.”"
      ctaArray={[
        {
          text: 'View Landing Page Templates',
          link: '/templates',
        },
      ]}
    />
    <QuoteComponent
      quote="“I haven’t seen anything that would meet my needs and sell my online program as well as Leadpages.” "
      author="Kailei Carr"
    />
    <CustomerStoriesThumbnailRotator />
    <TwoButtonCTA
      headline="Create your own story"
      caption="Join 40,000+ businesses that trust Leadpages every day to grow their business online. Already part of the tribe? Share your own story."
    />
  </>
)

export default KaileiCustomerPage
