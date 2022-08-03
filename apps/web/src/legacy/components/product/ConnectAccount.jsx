import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import Link from 'next/link'
// images
import imageOne from '@legacy/assets/images/integrations/leadpages-integrations-product-550px@2x.png'
import rightArrowPurple from '@legacy/assets/images/global/arrow_right_purple.svg'

const CAContainer = styled('div', {
  bc: '$grayAlt',
  paddingTop: '4.5rem',
  px: '3rem',

  '@>s': {
    paddingTop: '6rem',
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
  justifyContent: 'space-between',
  textAlign: 'left',
  paddingBottom: '3rem',

  '@<s': {
    flex: '0 0 100%',
    maxWidth: '100%',
    paddingBottom: '2rem',
  },

  '@media (min-width: 577px)': {
    flex: '0 0 40.6666%',
    maxWidth: '40.6666%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const HeaderImgLeft = styled('div', {
  width: '100%',
})

const FlexRowRight = styled(FlexRowItem, {
  textAlign: 'left',
  alignSelf: 'flex-end',

  '@<s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 577px)': {
    flex: '0 0 49%',
    maxWidth: '49%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const LeftHeading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '1.875rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '2.25rem',
  color: '$text',
  marginBottom: '2rem',

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const LeftSubHeading = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '1.125rem',
  lineHeight: '1.75rem',
  marginBottom: '2rem',

  '@<s': {
    fontSize: '1rem',
  },
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

const ConnectAccount = () => (
  <CAContainer>
    <FlexRow>
      <FlexRowLeft>
        <LeftHeading>Connect your account to the tools you love</LeftHeading>
        <LeftSubHeading>
          Automatically send your leads to email subscriber lists, update your
          CRM contacts, register users for webinars, and more—with code-free
          integrations to more than 1000+ apps and tools. After all, technology
          should work for you—not the other way around.
        </LeftSubHeading>
        <Link href="/integrations">
          <a>
            <LeftCTA>
              Explore all Leadpages integrations
              <ArrowRightPurple
                src={rightArrowPurple.src}
                alt="purple right arrow"
              />
            </LeftCTA>
          </a>
        </Link>
      </FlexRowLeft>
      <FlexRowRight>
        <HeaderImgLeft>
          <Image image={imageOne} alt="leadpages integrations" />
        </HeaderImgLeft>
      </FlexRowRight>
    </FlexRow>
  </CAContainer>
)

export default ConnectAccount
