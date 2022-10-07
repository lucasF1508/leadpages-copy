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
import Wistia_CustomerFeatureVideo from '@legacy/components/videos/Wistia_CustomerFeatureVideo'
// images
import heroImage from '@legacy/assets/images/customers/shohawk/ShoHawk-Hero@2x.jpg'
import imageGroup1 from '@legacy/assets/images/customers/shohawk/ShoHawk-Leadpages-Totem@2x.png'
import rowImage1 from '@legacy/assets/images/customers/shohawk/Leadpages-in-Use-1@2x.png'
import rowImage2 from '@legacy/assets/images/customers/shohawk/Leadpages-in-Use-2@2x.png'
import rowImage3 from '@legacy/assets/images/customers/shohawk/Leadpages-in-Use-3@2x.png'
import podcastImage from '@legacy/assets/images/customers/shohawk/ShoHawk_TLG_Podcast@2x.jpg'
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
  paddingBottom: '174px',
})

const Heading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '20px',
  lineHeight: '24px',
  letterSpacing: '-0.07px',
  color: '$text',
  marginBottom: '51px',

  '@media (max-width: 424px)': {
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.07px',
  },

  '@media (min-width: 425px) and (max-width: 992px)': {
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
  marginBottom: '112px',
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

const ShohawkCustomerPage = () => (
  <>
    <SEO
      pathname="/customers/shohawk"
      title="ShoHawk | Leadpages Customer Website & Landing Page Builder"
      description="Michael and Chris use Leadpages to promote and sell their videos. Leadpages helps small businesses grow: websites, landing pages, and more!"
      ogtitle="Meet ShoHawk |Small Business Success Story & Leadpages Customer"
    />
    <PodcastLeadbox />
    <CustomerFeatureHeader
      image={heroImage}
      imageAlt="Leadpages customer case studies - Greg"
      title="Freelance Filmmakers"
      caption="Michael and Chris use Leadpages to promote and sell their videos."
    />
    <IntroTextContainer>
      <IntroText>
        Lifelong friends and filmmakers, Michael and Chris, share a side-hustle:
        ShoHawk Media. Equal parts production company and education hub, ShoHawk
        serves as the launch pad for the duo's latest documentary,&nbsp;
        <OutboundLink
          href="https://genfreedom.com/"
          target="_blank"
          aria-label="Generation Freedom"
          rel="noreferrer noopener"
        >
          Generation Freedom:
        </OutboundLink>
        &nbsp; How the Internet Killed the Day Job.
      </IntroText>
      <Body>
        With two full-time day jobs of their own and big plans for the future,
        Michael and Chris use Leadpages to build their passive income and engage
        with digital entrepreneurs along the way.
      </Body>
    </IntroTextContainer>
    <Wistia_CustomerFeatureVideo videoId="vam7bqdia5" />
    <MainTextContainer>
      <Heading>
        <h2>Q&A with ShoHawk</h2>
      </Heading>
      <SubHeading>
        The two of you met back in elementary school&mdash;was this what you had
        in mind on career day?
      </SubHeading>
      <Body>
        <b>Chris:</b> Well, Mike and I began in fifth grade when we started
        shooting short films with his dad’s big VHS camera. We made a bunch of
        short films throughout high school—including a few epic homework
        projects—and that led us to this day.
      </Body>
    </MainTextContainer>
    <MainTextContainer>
      <SubHeading>
        At one point, you both hit some turbulence in your more traditional
        career paths—how did that motivate you to make it on your own?
      </SubHeading>
      <Body>
        <b>Michael:</b> Right out of college, I got a job working with a big
        network TV show and I saw a huge disconnect between the amount of time I
        was putting into those projects and what I was getting paid out.
      </Body>
      <Body>
        <b>Chris:</b> I dropped out of college to take a production job at a
        startup and within 8 months that company caved. That was a huge lesson
        to me: that we have to take ownership of our careers wholistically—the
        financial component, the business component. We have to build a brand
        for ourselves that’s sustainable for the long term so we’re less
        dependent on other people to make our artistic dreams and ultimately our
        careers come true.
      </Body>
    </MainTextContainer>
    <Flexbox>
      <FlexMiddle>
        <ImageGroup
          image={imageGroup1}
          alt="ShoHawk Media Leadpages Customer Case Study"
        />
      </FlexMiddle>
      <FlexRight>
        <Quotation src={quotationImage.src} alt="quotation mark" />
        <QuotationText>
          “I came back to the idea of not exchanging time for money and started
          to approach passive income streams like a mad scientist.“
        </QuotationText>
        <QuotationAuthor>Michael Hall • Producer</QuotationAuthor>
        <QuotationTitle>ShoHawk Media</QuotationTitle>
      </FlexRight>
    </Flexbox>
    <MainTextContainer>
      <SubHeading>
        What was the inspiration behind your latest documentary film, Generation
        Freedom?
      </SubHeading>
      <Body>
        <OutboundLink
          href="https://genfreedom.com/"
          target="_blank"
          aria-label="Generation Freedom"
          rel="noreferrer noopener"
        >
          Generation Freedom
        </OutboundLink>
        &nbsp; is a documentary film that brings together top thought leaders
        who reveal the tips, tricks, and stories that brought them
        entrepreneurship and freedom.
      </Body>
      <Body>
        <b>Michael:</b> The thesis for the film really stemmed out from our own
        struggles in trying to start and grow our own online company. I’d
        approached learning about passive income streams like a mad scientist:
        listening to podcasts, reading all the blogs, and I turned to Chris and
        said—where’s the movie for this? Once we had the idea, we went to sites
        like Reddit and Twitter to let the community tell what they’d like to
        see in the documentary.
      </Body>
    </MainTextContainer>
    <MainTextContainer>
      <SubHeading>
        As ‘unknowns’ how did you break into the entrepreneurial scene and land
        some of your bigger-name interviewees?
      </SubHeading>
      <Body>
        <b>Michael:</b> No one in this community had ever heard of us before, so
        getting interviews was a challenge. We created a 5-min. in-depth pitch
        video in which we explained the concept and introduced ourselves, which
        really boosted our credibility. Then, we got really lucky with a few
        local interviews, added a short compilation of those conversations, and
        sent that out with the pitch video as well. That’s how we got the bigger
        names, like Pat Flynn.
      </Body>
    </MainTextContainer>
    <OrangeHeadingContainer>
      <CenteredHeading css={{ color: '$textHighlight' }}>
        “The people we met and interviewed were inspiring. They completely
        changed the way we saw the world, our time, money, and how you can live
        your life.”
      </CenteredHeading>
      <SubHeading>Michael Hall</SubHeading>
    </OrangeHeadingContainer>
    <MainTextContainer>
      <SubHeading>
        Creating art is one thing and making a living off of it is another. How
        have you connected those dots?
      </SubHeading>
      <Body>
        <b>Chris:</b> It’s been a long learning process in ‘trying to make a go
        of it’ with our own production company as well as a filmmaking podcast
        and blog. On ShoHawk.com, our filmmaking website, we are building an
        audience of aspiring filmmakers who want to get their foot in the door
        with freelancing.
      </Body>
      <Body>
        <b>Michael:</b> In the spirit of bootstrapping, we’re distributing and
        selling the film ourselves. We wanted to do everything end-to-end:
        create the concept, interview everyone, edit it, and then market and put
        it out there.
      </Body>
    </MainTextContainer>

    <MainTextContainer>
      <Image
        image={podcastImage}
        css={{ marginBottom: '32px' }}
        alt="Podcast Image"
      />
      <ReactAudioPlayer
        style={{ width: '100%' }}
        src="https://traffic.libsyn.com/conversioncast/TLG021.mp3"
        controls
      />
    </MainTextContainer>
    <HeadingContainer>
      <CenteredHeading>
        <h2>How ShoHawk uses Leadpages</h2>
      </CenteredHeading>
    </HeadingContainer>
    <FlexRow
      image={rowImage1}
      imageAlt="How ShoHawk uses Leadpages"
      title="Leadpages Sites"
      headline="High-conversion website builder"
      caption="With no coding experience and no time to waste, the two created a professional-looking website on Leadpages to showcase their documentary, sell the film (with Gumroad), and collect email opt-ins."
      ctaArray={[
        {
          text: 'Discover Leadpages Sites',
          link: '/product/website-builder"',
        },
      ]}
    />
    <FlexRow
      flexDirectionReverse
      image={rowImage2}
      imageAlt="Unlimited Landing Pages"
      title="Unlimited Landing Pages"
      headline="Landing pages & sales pages"
      caption="By publishing a series of landing pages to promote the film, releasing video snippets for opt-ins, and sales pages to sell the film—Leadpages lets the duo bootstrap their entire business model without hiring a team."
      ctaArray={[
        {
          text: 'Create high-converting content',
          link: '/product',
        },
      ]}
    />
    <FlexRow
      image={rowImage3}
      imageAlt="Drag and Drop Builder"
      title="Drag and Drop Builder"
      headline="Mobile-responsive page templates"
      caption="“We would not have been able to do it so seamlessly without the drag and drop templates. Everyone asks me how I created all this and I tell them: Leadpages.” —Michael"
      ctaArray={[
        {
          text: 'Conversion-Optimized Templates',
          link: '/templates',
        },
      ]}
    />
    <QuoteComponent
      quote="“Leadpages has been the center of our business. I love how easy it is to create amazing webpages. I recommend it to everyone I can.”"
      author="Michael Hall"
    />
    <CustomerStoriesThumbnailRotator />
    <TwoButtonCTA
      headline="Create your own story"
      caption="Join 40,000+ businesses that trust Leadpages every day to grow their business online. Already part of the tribe? Share your own story."
    />
  </>
)

export default ShohawkCustomerPage
