import React from 'react'
import { styled } from '@design'
// components
import Image from '@components/Image'
import CustomerFeatureHeader from '@legacy/components/headers/CustomerFeatureHeader'
import CustomerStoriesThumbnailRotator from '@legacy/components/rotators/CustomerStoriesThumbnailRotator'
import FlexRow from '@legacy/components/layout/FlexRow'
import PodcastLeadbox from '@legacy/components/conversion-tools/LB_LikeLearningFromRealPeoplePodcast'
import SEO from '@legacy/components/SEO'
import SocialPosts from '@legacy/components/customers/SocialPosts'
import TwoButtonCTA from '@legacy/components/customers/TwoButtonCTA'
import QuoteComponent from '@legacy/components/customers/QuoteComponent'
// images
import heroImage from '@legacy/assets/images/customers/kate/Hero-Kate-Wilkinson_Leadpages_full-width@2x.jpg'
import imageGroup1 from '@legacy/assets/images/customers/kate/kate-totem_730px@2x.jpg'
import rowImage1 from '@legacy/assets/images/customers/kate/leadpages-sites_815px@2x.jpg'
import rowImage2 from '@legacy/assets/images/customers/kate/pop-ups_landing-pages_583px@2x.png'
import rowImage3 from '@legacy/assets/images/customers/kate/integrations_666px@2x.jpg'
import rowImage4 from '@legacy/assets/images/customers/kate/code-free-publishing_713px@2x.jpg'
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

// note: for twitter, the expected src is the tweet id, and for instagram the expected src is the share link

const KateCustomerPage = () => {
  const socialPostsObject = {
    leftColumn: [
      {
        type: 'twitter',
        src: '989723739251093505',
        shouldHideOnMobile: false,
      },
      {
        type: 'instagram',
        src: 'https://www.instagram.com/p/Bym-OMVgqET/?utm_source=ig_web_copy_link',
        shouldHideOnMobile: false,
      },
    ],
    rightColumn: [
      {
        type: 'instagram',
        src: 'https://www.instagram.com/p/ByPsLUBJg-1/?utm_source=ig_web_copy_link',
        shouldHideOnMobile: true,
      },
      {
        type: 'twitter',
        src: '1016693493811458050',
        shouldHideOnMobile: false,
      },
    ],
  }

  return (
    <>
      <SEO
        pathname="/customers/kate"
        title="Kate | Leadpages Customer | Website & Landing Page Builder"
        description="Kate uses Leadpages to pinpoint her audience and sell her marketing services. Leadpages helps small businesses grow: websites, landing pages, and more!"
        ogtitle="Meet Kate |Small Business Success Story & Leadpages Customer"
      />
      <PodcastLeadbox />
      <CustomerFeatureHeader
        image={heroImage}
        imageAlt="Leadpages customer case studies - Kate"
        title="Pinterest Marketing Consultant"
        caption="Kate uses Leadpages to pinpoint her audience and sell her marketing services."
      />
      <IntroTextContainer>
        <IntroText>
          Wherever smoothie bowls and strong wifi can be found, so can Kate
          Wilkinson—a Pinterest marketing consultant with a strong dose of
          wanderlust and a deep desire to help female entrepreneurs amplify
          their impact both online and off.
        </IntroText>
        <IntroText>
          Kate uses Leadpages to get clients online, sell her service packages,
          and help others optimize business blogs to generate leads.
        </IntroText>
        <Body>
          In her former life, Kate navigated the quick-paced process-driven
          culture of digital agencies. While she prefers her wanderlust
          workplace to the more traditional track she left behind, she also
          relies on many of the skills she picked up along the way.
        </Body>
        <Body>
          “There’s so much to be learned from the structure of a big,
          professional corporate business about setting up systems, handling
          tricky client interactions, and problem solving,” says Kate.
        </Body>
      </IntroTextContainer>
      <OrangeHeadingContainer>
        <OrangeCenteredHeading>
          “Ultimately I knew that corporate life really wasn’t for me.”
        </OrangeCenteredHeading>
        <SubHeading>Kate Wilkinson</SubHeading>
      </OrangeHeadingContainer>
      <MainTextContainer>
        <Body>
          But she did know what she wanted to focus on as she dove into the
          uncharted world of entrepreneurship: “I always knew that I wanted to
          work with women, and service-based businesses,” said Kate. “My
          business isn’t exactly what I thought it would be, but I have the best
          clients you could imagine—creative, clever women.”
        </Body>
        <Body>
          Kate describes her ideal customers as heart-led, ambitious women,
          eager to grow their sidehustles into sustainable businesses. Today,
          the majority of her clients are coaches and consultants in the
          personal and professional development industry. Many of whom find that
          their target audience abounds on Pinterest.
        </Body>
        <Body>
          Unique from other social networks, the Pinterest playbook relies on
          the same principles of search engine optimization—aligning content to
          an audience, acing discoverability, standing out from the crowd, and
          optimizing for conversion.
        </Body>
      </MainTextContainer>
      <SocialPosts socialPostsObject={socialPostsObject} />
      <MainTextContainer>
        <Body>
          Her services include account management, audience targeting, search
          engine optimization, brand identity, graphic design, and more. While
          focusing primarily on the strategy, visual approach, and tactical
          implementation of Pinterest marketing, Kate also carves out time to
          tackle the bigger barriers that keep entrepreneurs stuck in the mud:
          their mindset.
        </Body>
        <Body>
          Isolated in a home office, tackling ‘all the things,’ fearful about
          finances, Kate knows first-hand that wellness and balance are equally
          (if not more) important to a small business’s bottom line than a
          properly optimized web presence.
        </Body>
      </MainTextContainer>
      <Flexbox>
        <FlexMiddle>
          <ImageGroup image={imageGroup1} alt="Nourish with Kate" />
        </FlexMiddle>
        <FlexRight>
          <Quotation src={quotationImage.src} alt="quotation mark" />
          <QuotationText>
            “I've learned the hard way that you can't pour from an empty cup,
            which is why I'm constantly tweaking my routine, systems, and
            business structure so I don't fall victim to burnout.“
          </QuotationText>
          <QuotationAuthor>Kate Wilkinson</QuotationAuthor>
          <QuotationTitle>Kate Wilkinson Creative</QuotationTitle>
        </FlexRight>
      </Flexbox>
      <MainTextContainer>
        <Body>
          Her unique approach to sustaining both passion and profit? It’s
          simple: She’s pro systems. Pro automation. And anti hustle.
        </Body>
        <Body>
          That’s why Kate’s business model is built both to meet her client’s
          needs and to provide passive income streams that will preserve her
          freedom and flexibility.
        </Body>
        <Body>
          Kate offers for-sale resource packs, monthly Pinterest management, as
          well as an intensive online masterclass as a series of recorded video
          trainings.
        </Body>
      </MainTextContainer>
      <HeadingContainer>
        <OrangeCenteredHeading>
          “For me, success is a lifestyle—creating a business that I love that
          doesn’t zap all my energy, working with a handful of dream clients,
          making passive income, and seeing great results for my clients.”
        </OrangeCenteredHeading>
        <QuotationAuthor css={{ textAlign: 'center' }}>
          Kate Wilkinson
        </QuotationAuthor>
      </HeadingContainer>
      <HeadingContainer>
        <CenteredHeading>How Kate uses Leadpages</CenteredHeading>
      </HeadingContainer>
      <FlexRow
        image={rowImage1}
        imageAlt="How Kate uses Leadpages: Leadpages Sites"
        title="Getting Online"
        headline="Leadpages Sites"
        caption="Showcasing her services, displaying their features, and optimizing for the sale is what Kate loves most about Leadpages Sites. "
        ctaArray={[
          {
            text: 'Discover Leadpages Sites',
            link: '/product/website-builder',
          },
        ]}
      />
      <FlexRow
        flexDirectionReverse
        image={rowImage2}
        imageAlt="How Kate uses Leadpages: Pop-Ups and Landing Pages"
        title="Generating Qualified Leads"
        headline="Pop-ups and Landing Pages"
        caption="For both her own business and her clients, Kate relies on Leadpages’ many conversion tools. She most often directs traffic from a Pinterest Pin to a blog post, to a content upgrade offer on a pop-up or landing page. "
        padImage
        ctaArray={[
          {
            text: 'Create high-converting content',
            link: '/product',
          },
        ]}
      />
      <FlexRow
        image={rowImage3}
        imageAlt="How Kate uses Leadpages: Integrations"
        title="Creating a System"
        headline="Integrations"
        caption="By connecting her Leadpages account to her email service provider and payment processor, and teachable account, Kate effectively automates her online revenue stream. "
        ctaArray={[
          {
            text: 'Check out Leadpages Integrations',
            link: '/integrations',
          },
        ]}
      />
      <FlexRow
        flexDirectionReverse
        image={rowImage4}
        imageAlt="How Kate uses Leadpages: Code-free Page Pubishing"
        title="DIY Digital Marketing"
        headline="Code-free Page Publishing"
        caption="Having worked in the digital space for nearly a decade, Kate knew she needed an efficient way to publish and update web pages without having to learn coding. "
        padImage
        ctaArray={[
          {
            text: 'Start your free trial',
            link: '/free-trial',
            outbound: true,
          },
        ]}
      />
      <QuoteComponent
        quote="“My business isn’t exactly what I thought it would be, but I have the best clients you could imagine—creative, clever women.”"
        author="Kate Wilkinson"
      />
      <CustomerStoriesThumbnailRotator />
      <TwoButtonCTA
        headline="Create your own story"
        caption="Join 40,000+ businesses that trust Leadpages every day to grow their business online. Already part of the tribe? Share your own story."
      />
    </>
  )
}
export default KateCustomerPage
