import React from 'react'
import { styled } from '@design'
// components
import Image from '@components/Image'
import CustomerFeatureHeader from '@legacy/components/headers/CustomerFeatureHeader'
import CustomerStoriesThumbnailRotator from '@legacy/components/rotators/CustomerStoriesThumbnailRotator'
import FlexRow from '@legacy/components/layout/FlexRow'
import PodcastLeadbox from '@legacy/components/conversion-tools/LB_LikeLearningFromRealPeoplePodcast'
import SEO from '@legacy/components/SEO'
import TwoButtonCTA from '@legacy/components/customers/TwoButtonCTA'
import QuoteComponent from '@legacy/components/customers/QuoteComponent'
// images
import heroImage from '@legacy/assets/images/customers/fsc/FSC_Hero-full-width@2x.jpg'
import imageGroup1 from '@legacy/assets/images/customers/fsc/FSC_totem_1110px@2x.jpg'
import imageGroup2 from '@legacy/assets/images/customers/fsc/FSC_totem2_730px@2x.jpg'
import rowImage1 from '@legacy/assets/images/customers/fsc/real-time-analytics_leadpages_809px@2x.jpg'
import rowImage2 from '@legacy/assets/images/customers/fsc/lead-magnet-optins_691px@2x.jpg'
import rowImage3 from '@legacy/assets/images/customers/fsc/code-free-landing-page-customization_leadpages_554px@2x.jpg'
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
  marginBottom: '6rem',

  '@media (max-width: 767px)': {
    px: '12.5%',
  },
})

const IntroText = styled('div', {
  color: '4text',
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

const OrangeHeadingContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  px: '15%',
  textAlign: 'center',
  paddingBottom: '2rem',
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
  marginBottom: '70px',
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

const FSCCustomerPage = () => (
  <>
    <SEO
      pathname="/customers/fsc"
      title="FSC | Leadpages Customer | Website & Landing Page Builder"
      description="The Forest Stewardship Council uses Leadpages to move audiences to take meaningful action. See how Leadpages helps small businesses grow!"
      ogtitle="Meet FSC |Small Business Success Story & Leadpages Customer"
    />
    <PodcastLeadbox />
    <CustomerFeatureHeader
      image={heroImage}
      imageAlt="Forest Stewardship Council"
      title="Non-Profit Organization"
      caption="The Forest Stewardship Council uses Leadpages to move audiences to take meaningful action."
    />
    <IntroTextContainer>
      <IntroText>
        Chris McLaren and Karina Carlson don’t just work for a paycheck—they
        work to preserve the world’s forests and establish a more eco-friendly
        economy. As the sole US marketing force behind the Forest Stewardship
        Council (FSC), a global non-profit organization, they have to
        communicate to dozens of different audiences, transform awareness into
        action, and demonstrate ROI on every dollar they spend.
      </IntroText>
      <IntroText>
        That’s a tall order, but Chris says two things help them get the job
        done: the office espresso machine and Leadpages.
      </IntroText>
    </IntroTextContainer>
    <MainTextContainer>
      <Body>
        The Forest Stewardship Council (FSC) is a global non-profit organization
        that uses the power of the marketplace to safeguard the world’s forests.
        By setting eco-friendly certification standards and labeling products
        that meet their criteria, the FSC is harnessing buying power to better
        serve our planet and future generations.&nbsp;
        <OutboundLink
          href="https://us.fsc.org/en-us"
          target="_blank"
          aria-label="Forest Stewardship Council"
          rel="noreferrer noopener"
        >
          Visit Forest Stewardship Council
        </OutboundLink>
      </Body>
    </MainTextContainer>
    <OrangeHeadingContainer>
      <OrangeCenteredHeading>
        “Our tagline is ‘Forests For All, Forever’. When people buy
        FSC-certified products, they send a direct message to industry: ‘I want
        you to protect our forests.’”
      </OrangeCenteredHeading>
      <SubHeading>Chris McLaren</SubHeading>
    </OrangeHeadingContainer>
    <MainTextContainer>
      <Title>Flexibility to quickly create & update custom web pages</Title>
      <Heading>
        <h2>“We’re trying to be as guerilla as we possibly can”</h2>
      </Heading>
      <Body>
        As a global organization, FSC has a primary website, but the team needed
        additional flexibility to create custom web destinations to support
        different initiatives and campaigns. Because Leadpages doesn’t require a
        lot of web experience in order to design and publish pages, it’s easy to
        create dynamic visual content that’s both easy to update and easy to
        change.
      </Body>
    </MainTextContainer>
    <ImageGroup
      image={imageGroup1}
      alt="Flexibility to quickly create & update custom web pages"
    />
    <MainTextContainer>
      <Title>Track conversions & demonstrate ROI</Title>
      <Heading>
        <h2>“We have to be super lean and demonstrate results”</h2>
      </Heading>
      <Body>
        As a non-profit, the FSC team is both budget-conscious and required to
        demonstrate direct results from their digital marketing efforts. By
        tracking conversion events and lead generation, they’re able to not only
        make a difference but also encourage additional funding in the future.
      </Body>
    </MainTextContainer>
    <OrangeHeadingContainer>
      <OrangeCenteredHeading>
        “In order to test & learn how our content is resonating with people and
        how we can improve upon that, Leadpages is the best option.”
      </OrangeCenteredHeading>
      <SubHeading>Karina Carlson</SubHeading>
    </OrangeHeadingContainer>
    <MainTextContainer>
      <Title>Segment & target diverse audiences</Title>
      <Heading>
        <h2>
          “Leadpages allows us to communicate to specific groups about what
          matters most to them”
        </h2>
      </Heading>
      <Body>
        Marketing to everyone from big-name brands to everyday consumers
        requires a highly segmented approach. By creating unique campaigns,
        tracking their individual audiences, and following up with each group,
        FSC is able to garner support from dozens of stakeholder groups.
      </Body>
    </MainTextContainer>
    <Flexbox>
      <FlexMiddle>
        <ImageGroup image={imageGroup2} alt="customer totem 2" />
      </FlexMiddle>
      <FlexRight>
        <Quotation src={quotationImage.src} alt="quotation mark" />
        <QuotationText>
          “The mission is massive. We picked up Leadpages fairly quickly because
          we saw it as a good tool to use to quickly build web destinations that
          can speak to our different audiences and to their needs.”
        </QuotationText>
        <QuotationAuthor>Chris McLaren • CMO</QuotationAuthor>
        <QuotationTitle>Forestry Stewardship Council</QuotationTitle>
      </FlexRight>
    </Flexbox>
    <MainTextContainer>
      <Title>Easy Integrations</Title>
      <Heading>
        <h2>“We’ve streamlined how we collect and follow up with our leads”</h2>
      </Heading>
      <Body>
        Newly connected leads are stored in FSC’s Drip account and nurtured with
        automatic follow-up emails, targeted campaigns, and broadcasts every
        time a new FSC-certified product is added to their database.
      </Body>
    </MainTextContainer>
    <HeadingContainer>
      <CenteredHeading>
        <h2>How FSC uses Leadpages</h2>
      </CenteredHeading>
    </HeadingContainer>
    <FlexRow
      image={rowImage1}
      imageAlt="Track and Optimize"
      title="Track and Optimize"
      headline="Real-time analytics"
      caption="As a non-profit, FSC has to be transparent with how their marketing budget is spent and what outcomes they’re driving. With real-time analytics it’s easy to show the results of each page and campaign."
      ctaArray={[
        {
          text: 'Explore Features',
          link: '/product/feature-index',
        },
      ]}
    />
    <FlexRow
      flexDirectionReverse
      image={rowImage2}
      imageAlt="Lead Generation"
      title="Lead Generation"
      headline="Lead magnet opt-ins"
      caption="Prior to Leadpages, FSC depended on inbound phone calls and newsletter subscribers. Now, by offering downloadable resources to their audience with the help of pop-ups on dedicated landing pages, FSC has grown their email list and built an inbound marketing operation from the ground up."
      ctaArray={[
        {
          text: 'Explore Features',
          link: '/product/feature-index',
        },
      ]}
    />
    <FlexRow
      image={rowImage3}
      imageAlt="Drag and Drop Builder"
      padImage
      title="Drag and Drop Builder"
      headline="Code-free customizations"
      caption="With little to no web experience, it’s easy to create, publish, and update custom web destinations that are conversion-optimized and mobile friendly. No need to hire a designer or developer."
      ctaArray={[
        {
          text: 'Create high-converting content',
          link: '/product',
        },
      ]}
    />
    <QuoteComponent
      quote="“Everything about creating a page in Leadpages was very fast and easy. It’s really streamlined—moving columns, adding photos—it’s easy to update and already mobile friendly.”"
      author="Karina Carlson"
    />
    <CustomerStoriesThumbnailRotator />
    <TwoButtonCTA
      headline="Create your own story"
      caption="Join 40,000+ businesses that trust Leadpages every day to grow their business online. Already part of the tribe? Share your own story."
    />
  </>
)

export default FSCCustomerPage
