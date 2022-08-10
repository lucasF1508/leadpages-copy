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
import heroImage from '@legacy/assets/images/customers/jody/Jody-Hero-full-width@2x.jpg'
import imageGroup1 from '@legacy/assets/images/customers/jody/jody-leadpages-totem_1110px@2x.jpg'
import rowImage1 from '@legacy/assets/images/customers/jody/opt-in-form_registration-followup_leadpages_785px@2x.jpg'
import rowImage2 from '@legacy/assets/images/customers/jody/Countdown-timers_landing-pages_leadpages_635px@2x.jpg'
import rowImage3 from '@legacy/assets/images/customers/jody/capture-leads-marketing-tools_leadpages_684px@2x.jpg'
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

const JodyCustomerPage = () => (
  <>
    <SEO
      pathname="/customers/jody"
      title="Jody | Leadpages Customer | Website & Landing Page Builder"
      description="Jody uses Leadpages to sign up stressed professionals for her yoga sessions. Leadpages helps small businesses grow: websites, landing pages, and more!"
      ogtitle="Meet Jody |Small Business Success Story & Leadpages Customer"
    />
    <PodcastLeadbox />
    <CustomerFeatureHeader
      image={heroImage}
      imageAlt="Yoga Instructor"
      title="Yoga Instructor"
      caption="Jody uses Leadpages to sign up stressed professionals for her yoga sessions."
    />
    <IntroTextContainer>
      <IntroText>
        Having started in corporate America, Jody knew that no one was more in
        need of a little daytime namaste than 9-to-5-ers stuck at the office.
        So, rather than set up shop at a single studio, she became a mobile
        mind-body ambassador. Today, she brings yoga instruction and
        whole-health coaching to office spaces and workplaces and has the
        freedom to take care of her “kiddos” in between.
      </IntroText>
      <IntroText>
        Jody uses Leadpages to grow her email list and stay engaged with
        participants of her corporate yoga clubs.
      </IntroText>
    </IntroTextContainer>
    <MainTextContainer>
      <Heading>
        <h2>Q&A with Jody</h2>
      </Heading>
      <SubHeading>
        How did you go from a corporate job to mobile yogi?
      </SubHeading>
      <Body>
        I started&nbsp;
        <OutboundLink
          href="https://www.justbebalanced.com"
          target="_blank"
          aria-label="Just Be Balanced"
          rel="noreferrer noopener"
        >
          Just Be Balanced
        </OutboundLink>
        &nbsp; after having baby number two when my focus changed to spending
        more time with my littles and getting my mobile yoga company up and
        running. It was a no-brainer choosing corporate yoga as my specialty.
        Stress and overwhelm do not improve company culture or the bottom line.
        Yoga is the perfect remedy for both.
      </Body>
    </MainTextContainer>
    <ImageGroup image={imageGroup1} alt="Just Be Balanced" />
    <Flexbox>
      <FlexMiddle>
        <SubHeading>
          What does it take to turn a conference room into a ‘zen den?’
        </SubHeading>
        <Body>
          A Spotify playlist and a playful challenge, knowing wherever you are
          on the yoga spectrum is a perfect place to be. I give lots of options
          so that everyone feels safe and successful, yet encouraged to grow.
        </Body>
        <SubHeading>What does success look like for you?</SubHeading>
        <Body>
          There are some instructors out there who are happy to teach 10-20
          classes and that’s not my deal. I want 6-8 awesome clients and to be
          able to keep that going. So I hone in on them and their needs and
          develop relationships with each one. I get to know who’s working on
          back stuff, who’s working on their balance, and what the stressors are
          in their lives.
        </Body>
      </FlexMiddle>
      <FlexRight>
        <Quotation src={quotationImage.src} alt="quotation mark" />
        <QuotationText>
          Stress and overwhelm do not improve company culture or the bottom
          line. Yoga is the perfect remedy for both.
        </QuotationText>
        <QuotationAuthor>Jody Illies • Yogi</QuotationAuthor>
        <QuotationTitle>Owner, Just Be Balanced</QuotationTitle>
      </FlexRight>
    </Flexbox>
    <MainTextContainer>
      <SubHeading>How do you organize your work week?</SubHeading>
      <Body>
        I batch my work depending on the day. I bookend the week so Monday and
        Friday are admin days—billing, planning classes, channeling my inner DJ
        for playlists, social media planning, and using Leadpages for marketing
        materials and opt-ins. Tuesday-Thursday, I’m on the move bringing yoga
        to my clients.
      </Body>
    </MainTextContainer>
    <Wistia_CustomerFeatureVideo videoId="c7g9hsfyn9" />
    <MainTextContainer>
      <SubHeading>What’s one thing you absolutely rock at?</SubHeading>
      <Body>
        I’m really good at making people feel comfortable—making connections and
        helping people through this health journey. My goal isn’t to get you
        into an awkward body position. My goal is for you to feel amazing in
        your body and mind so you can show up in the world as your best self.
      </Body>
    </MainTextContainer>
    <MainTextContainer>
      <SubHeading>What’s the best advice you’ve ever received?</SubHeading>
      <Body>
        What I come back to time and time again is: just take the next step.
        It’s not necessarily having to figure out what that big future thing
        is—it’s just what’s the next step that you can take toward it.
      </Body>
    </MainTextContainer>
    <HeadingContainer>
      <OrangeCenteredHeading>
        “What I come back to time and time again is: just take the next step.”
      </OrangeCenteredHeading>
      <CenteredHeading>
        <h2>How Jody uses Leadpages</h2>
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
          text: 'Create high-converting content',
          link: '/product',
        },
      ]}
    />
    <FlexRow
      flexDirectionReverse
      image={rowImage2}
      imageAlt="Opt-In Form Creation"
      padImage
      title="Opt-In Form Creation"
      headline="Seamless registration & follow-up"
      caption="It’s easy for Jody to register students for upcoming classes and send helpful follow-up materials by integrating her opt-in forms with her MailChimp account. She even receives automated notification emails from Leadpages, every time a form is submitted."
      ctaArray={[
        {
          text: 'Connect your tools',
          link: '/integrations',
        },
      ]}
    />
    <FlexRow
      image={rowImage3}
      imageAlt="High-converting landing pages"
      title="High-converting landing pages"
      headline="Countdown timers"
      caption="Reaching and engaging new audiences is easy with opt-in offers and lead magnets that convert cold traffic into qualified leads."
      ctaArray={[
        {
          text: 'Explore Features',
          link: '/product/feature-index',
        },
      ]}
    />
    <QuoteComponent
      quote="“Starting my own business was not something that I’d really thought about. But being able to make money doing what you like&mdash;c’mon&mdash;that’s the best situation.”"
      author="Jody Illies"
    />
    <CustomerStoriesThumbnailRotator />
    <TwoButtonCTA
      headline="Create your own story"
      caption="Join the entrepreneurs who trust Leadpages every day to grow their business online. Already part of the tribe? Share your own story."
    />
  </>
)

export default JodyCustomerPage
