import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import Link from '@components/Link'

const BannerContainer = styled('div', {
  maxWidth: '$extended',
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
  background: '$grayAlt',

  '@<s': {
    paddingRight: '3rem',
    paddingLeft: '3rem',
  },
})

const FlexRow = styled('div', {
  maxWidth: '$extended',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexWrap: 'wrap',

  '@<s': {
    flexDirection: 'column-reverse',
  },
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
})

const FlexRowLeft = styled(FlexRowItem, {
  alignSelf: 'flex-end',
  textAlign: 'left',
  paddingRight: '1%',

  '@<s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>s': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 23%',
    flex: '0 0 23%',
    maxWidth: '23%',
  },

  '@>m': {
    marginBottom: '0rem',
    WebkitBoxFlex: 0,
    MsFlex: '0 0 23%',
    flex: '0 0 23%',
    maxWidth: '23%',
  },
})
const HeaderImgLeft = styled('div', {
  width: '100%',
})

const FlexRowRight = styled(FlexRowItem, {
  textAlign: 'center',
  alignSelf: 'center',
  paddingLeft: '1%',
  paddingRight: '1%',

  '@<s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>s': {
    flex: '0 0 64.6%',
    maxWidth: '64.6%',
  },

  '@>m': {
    marginBottom: '0rem',
    flex: '0 0 64.6%',
    maxWidth: '64.6%',
    textAlign: 'left',
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

const SubFlexRow = styled('div', {
  '@media (min-width: 769px)': {
    display: 'flex',
  },

  '@<s': {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
})

const SubFlexRowLeft = styled('div', {
  marginTop: '66px',
  alignSelf: 'center',
  marginRight: '24px',
  textAlign: 'left',

  '@<s': {
    textAlign: 'center',
  },
})

const SubFlexRowRight = styled('div', {
  alignSelf: 'center',
  textAlign: 'left',

  '@<s': {
    textAlign: 'center',
  },

  '@media (max-width: 768px)': {
    marginBottom: '2rem',
  },
})

const Banner = ({ heading, subheading, image, link }) => (
  <BannerContainer>
    <FlexRow>
      {image && (
        <FlexRowLeft>
          <HeaderImgLeft>
            <Image image={image} alt={image?.altText} />
          </HeaderImgLeft>
        </FlexRowLeft>
      )}
      <FlexRowRight>
        <SubFlexRow>
          <SubFlexRowLeft>
            {heading && <LeftHeading>{heading}</LeftHeading>}
            {subheading && <LeftSubHeading>{subheading}</LeftSubHeading>}
          </SubFlexRowLeft>
          {link && (
            <SubFlexRowRight>
              <Link
                {...link}
                css={
                  link.linkStyle === 'button'
                    ? {
                        width: '192px',
                        px: 0,
                      }
                    : undefined
                }
              />
            </SubFlexRowRight>
          )}
        </SubFlexRow>
      </FlexRowRight>
    </FlexRow>
  </BannerContainer>
)

export default Banner
