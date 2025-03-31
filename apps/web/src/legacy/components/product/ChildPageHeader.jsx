import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Image from '@components/Image'
import Link from 'next/link'
import { RPImage } from '@legacy/constants/types'
// images
import rightArrowPurple from '@legacy/assets/images/global/arrow_right_purple.svg'

const OuterContainer = styled('div', {
  marginTop: '-60px',
  paddingTop: '108px',
  position: 'relative',
})

const HeaderContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  px: '3rem',
  zIndex: '$aboveContent',

  '@media (min-width: 992px)': {
    px: '6rem',
  },
})

const FlexRow = styled('div', {
  paddingTop: '3rem',
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

  '@media (max-width: 575px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 80%',
    flex: '0 0 80%',
    maxWidth: '80%',
  },

  '@>s': {
    flex: '0 0 40.6666%',
    maxWidth: '40.6666%',
  },

  '@>m': {
    marginBottom: '0rem',
    flex: '0 0 45%',
    maxWidth: '45%',
  },
})

const HeaderImgLeft = styled('div', {
  width: '100%',
})

const FlexRowRight = styled(FlexRowItem, {
  textAlign: 'left',
  alignSelf: 'flex-end',

  '@>s': {
    flex: '0 0 45%',
    maxWidth: '45%',
  },

  '@>m': {
    marginBottom: '0rem',
    flex: '0 0 45%',
    maxWidth: '45%',
    textAlign: 'left',
  },
})

const SmallHeading = styled('div', {
  fontFamily: 'Space Mono',
  opacity: 0.5,
  color: '$black',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  textTransform: 'uppercase',
})

const LeftHeading = styled('div', {
  marginTop: '1rem',
  fontFamily: 'Value Serif',
  fontSize: '2.5rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '3rem',
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
  lineHeight: '1.875rem',
  marginBottom: '2rem',

  '@<s': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
})

const LeftCTA = styled('div', {
  color: '$primary',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '30px',
  textAlign: 'left',
  fontWeight: 500,
  marginBottom: '3rem',
})

const BackgroundImage = styled('img', {
  position: 'absolute',
  right: 0,
  bottom: 0,
  overflowX: 'hidden',
  width: '100%',

  '@media (min-width: 992px) and (max-width: 1439px)': {
    width: '90%',
  },

  '@media (min-width: 1440px)': {
    width: '70%',
  },
})

const ArrowRightPurple = styled('img', {
  width: '20px',
  height: '10px',
})

const ChildPageHeader = ({
  bgColor,
  bgImage,
  bgImageAltText,
  smallHeading,
  headingText,
  subheadingText,
  outboundCTA,
  link,
  linkText,
  showCTA,
  CTAtext,
  showLB,
  dataleadboxpopup,
  dataleadboxdomain,
  image,
  imageAltText,
}) => (
  <OuterContainer css={{ bc: bgColor || '$grayAlt' }}>
    <BackgroundImage src={bgImage.src} alt={bgImageAltText} />
    <HeaderContainer>
      <FlexRow>
        <FlexRowLeft>
          <SmallHeading>{smallHeading}</SmallHeading>
          <LeftHeading>
            <h1>{headingText}</h1>
          </LeftHeading>
          <LeftSubHeading>{subheadingText}</LeftSubHeading>
          {outboundCTA === 'true' && (
            <Link
              href={link}
              aria-label={linkText}
              rel="noopener noreferrer"
              target="_blank"
            >
              <LeftCTA>
                {CTAtext}
                <ArrowRightPurple
                  src={rightArrowPurple.src}
                  alt="purple right arrow"
                />
              </LeftCTA>
            </Link>
          )}
          {!!showCTA && (
            <Link href={link} aria-label={linkText}>
              <LeftCTA>
                {CTAtext}
                <ArrowRightPurple
                  src={rightArrowPurple.src}
                  alt="purple right arrow"
                />
              </LeftCTA>
            </Link>
          )}
          {!!showLB && (
            <Link
              href=""
              aria-label={linkText}
              data-leadbox-popup={dataleadboxpopup}
              data-leadbox-domain={dataleadboxdomain}
            >
              <LeftCTA>
                {CTAtext}
                <ArrowRightPurple
                  src={rightArrowPurple.src}
                  alt="purple right arrow"
                />
              </LeftCTA>
            </Link>
          )}
        </FlexRowLeft>
        <FlexRowRight>
          <HeaderImgLeft>
            <Image image={image} alt={imageAltText} />
          </HeaderImgLeft>
        </FlexRowRight>
      </FlexRow>
    </HeaderContainer>
  </OuterContainer>
)

ChildPageHeader.defaultProps = {
  bgColor: '',
  bgImage: '',
  bgImageAltText: '',
  smallHeading: '',
  headingText: '',
  subheadingText: '',
  outboundCTA: false,
  link: '',
  linkText: '',
  showCTA: false,
  CTAtext: '',
  showLB: false,
  dataleadboxpopup: '',
  dataleadboxdomain: '',
}

ChildPageHeader.propTypes = {
  bgColor: PropTypes.string,
  bgImage: PropTypes.node,
  bgImageAltText: PropTypes.string,
  smallHeading: PropTypes.string,
  headingText: PropTypes.string,
  subheadingText: PropTypes.string,
  outboundCTA: PropTypes.bool,
  link: PropTypes.string,
  linkText: PropTypes.string,
  showCTA: PropTypes.bool,
  CTAtext: PropTypes.string,
  showLB: PropTypes.bool,
  dataleadboxpopup: PropTypes.string,
  dataleadboxdomain: PropTypes.string,
  image: RPImage.isRequired,
  imageAltText: PropTypes.string.isRequired,
}

export default ChildPageHeader
