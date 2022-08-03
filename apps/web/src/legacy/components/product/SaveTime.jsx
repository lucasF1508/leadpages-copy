import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import Link from 'next/link'
// images
import imageOne from '@legacy/assets/images/integrations/leadpages-integrations-product-550px@2x.png'
import rightArrowPurple from '@legacy/assets/images/global/arrow_right_purple.svg'

const STContainer = styled('div', {
  paddingTop: '6rem',
  px: '6rem',
  backgroundColor: '$grayAlt',

  '@>s': {
    paddingTop: '10rem',
  },
})

const FlexRow = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  px: '1%',
})

const FlexRowLeft = styled(FlexRowItem, {
  textAlign: 'left',
  alignSelf: 'center',

  '@media (max-width: 900px)': {
    paddingBottom: '3rem',
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    paddingBottom: '10rem',
    marginBottom: 0,
    flex: '0 0 40.6666%',
    maxWidth: '40.6666%',
  },
})
const HeaderImgLeft = styled('div', {
  width: '100%',
})

const LeftContainer = styled('div', {})

const FlexRowRight = styled(FlexRowItem, {
  alignSelf: 'flex-end',

  '@media (max-width: 900px)': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    flex: '0 0 49%',
    maxWidth: '49%',
  },
})

const LeftMiniHeading = styled('div', {
  opacity: 0.5,
  color: '$black',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  fontFamily: 'Space Mono',
  textTransform: 'uppercase',
  marginBottom: '2rem',
})

const LeftHeading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  lineHeight: '36px',
  letterSpacing: '-0.1px',
  color: '$text',
  marginBottom: '2rem',
})

const LeftSubHeading = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  lineHeight: '28px',
  marginBottom: '2rem',
})

const LeftCTA = styled('div', {
  color: '$primary',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '30px',
  textAlign: 'left',
  fontWeight: 500,
})

const ArrowRightPurple = styled('img', {
  width: '20px',
  height: '10px',
})

const SaveTime = () => (
  <STContainer>
    <FlexRow>
      <FlexRowLeft>
        <LeftContainer>
          <LeftMiniHeading>
            Send Your Leads to the Apps You Love
          </LeftMiniHeading>
          <LeftHeading>Save time with Leadpages integrations</LeftHeading>
          <LeftSubHeading>
            Become a true marketing pro when you use our seamless integrations
            that connect your lead generation tools and marketing automation
            platforms. Create landing pages that capture email addresses inside
            segmented lists, and nurture your new leads with email marketing
            that works for you like a 24/7 sales team.
          </LeftSubHeading>
          <Link href="/integrations">
            <a>
              <LeftCTA>
                Explore all Leadpages integrations&nbsp;
                <ArrowRightPurple
                  src={rightArrowPurple.src}
                  alt="purple right arrow"
                />
              </LeftCTA>
            </a>
          </Link>
        </LeftContainer>
      </FlexRowLeft>
      <FlexRowRight>
        <HeaderImgLeft>
          <Image image={imageOne} alt="Explore all Leadpages integrations" />
        </HeaderImgLeft>
      </FlexRowRight>
    </FlexRow>
  </STContainer>
)

export default SaveTime
