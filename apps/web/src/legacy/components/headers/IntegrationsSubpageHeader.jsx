import React from 'react'
import PropTypes from 'prop-types'
import Link from '@components/Link'
import Image from '@components/Image'
import { styled } from '@design'
// images
import ArrowLeftSVG from '@legacy/assets/images/global/arrow_left.svg'
import Tooltip from '@legacy/components/tooltips/Tooltip_GreatWhite'

const OuterContainer = styled('div', {
  backgroundColor: '$grayAlt',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
})

const InnerContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '1140px',
  margin: '4rem 6rem 0',
  paddingBottom: '2.5rem',

  '@media (max-width: 1023px)': {
    margin: '3rem 3rem 0',
  },

  '@media (max-width: 769px)': {
    margin: '1.7rem 5.2rem 0 1.6rem',
  },

  '@media (max-width: 675px)': {
    flexFlow: 'column wrap',
    margin: '1rem 1.8rem 0',
  },
})

const StyledLink = styled(Link, {
  textDecoration: 'none',

  '@media (max-width: 675px)': {
    display: 'none',
  },
})

const BackArrowSVG = styled('img', {
  width: '8px',
  height: '8px',
  filter: `invert(31%) sepia(7%) saturate(217%) hue-rotate(341deg)
    brightness(101%) contrast(91%)`,
  marginRight: '8px',
})

const BackText = styled('p', {
  display: 'inline',
  color: '$black',
  fontSize: '16px',
  fontWeight: 500,
  letterSpacing: 0,
  lineHeight: '24px',
  whiteSpace: 'nowrap',
})

const BackContainer = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  opacity: 0.5,

  '&:hover': {
    opacity: 1,
  },

  [`&:hover ${BackText}`]: {
    color: '$primary',
  },

  [`&:hover ${BackArrowSVG}`]: {
    filter: `brightness(0) saturate(100%) invert(18%) sepia(75%) saturate(2974%)
      hue-rotate(244deg) brightness(123%) contrast(106%)`,
  },
})

const LeftContainer = styled('div', {
  '@media (max-width: 675px)': {
    zIndex: 10,
  },
})

const TextContainer = styled('div', {
  paddingTop: '6rem',
  marginLeft: '1.4rem',

  '@media (max-width: 1023px)': {
    paddingTop: '4rem',
  },

  '@media (max-width: 675px)': {
    paddingTop: 0,
    marginLeft: 0,
  },
})

const Headline = styled('h1', {
  color: '$text',
  fontFamily: 'Value Serif',
  fontSize: '40px',
  letterSpacing: '-0.5px',
  lineHeight: '48px',
  marginBottom: '24px',

  '@media (max-width: 675px)': {
    fontSize: '28px',
    letterSpacing: 0,
    lineHeight: '34px',
    textAlign: 'center',
  },
})

const TooltipText = styled('p', {
  display: 'inline',
  color: '$textAlt',
  fontSize: '12px',
  letterSpacing: 0,
  lineHeight: '18px',
  marginBottom: '24px',
})

const IntegrationTipHover = styled('p', {
  display: 'inline',
  color: '$textAlt',
  fontSize: '12px',
  letterSpacing: 0,
  lineHeight: '18px',
  marginBottom: '24px',

  '@media (max-width: 675px)': {
    textAlign: 'center',
  },

  '&:hover': {
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    cursor: 'pointer !important',
  },
})

const DescriptionText = styled('p', {
  color: '$textAlt',
  fontSize: '18px',
  letterSpacing: 0,
  lineHeight: '28px',
  marginBottom: '24px',
  marginTop: '1.5rem',

  '@media (max-width: 675px)': {
    fontSize: '16px',
    textAlign: 'center',
  },
})

const RightContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
  marginLeft: '2rem',
  maxWidth: '430px',

  '@media (max-width: 675px)': {
    marginLeft: 0,
    marginTop: '-3rem',
  },
})

const CircleHolder = styled('div', {
  minWidth: '430px',
  minHeight: '430px',

  '@media (max-width: 1023px)': {
    minWidth: '300px',
    minHeight: '300px',
  },

  '@media (max-width: 575px)': {
    minWidth: '215px',
    minHeight: '215px',
  },
})

const GrayCircle = styled('div', {
  backgroundColor: '#e7e6e6',
  width: '100%',
  height: '100%',
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const IntegrationsHeroImage = styled(Image, {
  width: '100%',
  maxWidth: 'calc(100% - 50px)',

  '@media (max-width: 1023px)': {
    maxWidth: '250px',
  },

  '@media (max-width: 575px)': {
    maxWidth: '175px',
  },
})

const IntegrationToolTextWrapper = styled('div', {
  '@media (max-width: 675px)': {
    textAlign: 'center',
  },
})

const IntegrationsSubpageHeader = ({ data }) => {
  const {
    headlineText,
    tooltipText,
    tooltipTitle,
    descriptionText,
    heroImage,
  } = data
  return (
    <OuterContainer>
      <InnerContainer>
        <StyledLink url="/integrations">
          <BackContainer>
            <BackArrowSVG src={ArrowLeftSVG.src} alt="left arrow" />
            <BackText>All Integrations</BackText>
          </BackContainer>
        </StyledLink>
        <LeftContainer>
          <TextContainer>
            <Headline>{headlineText}</Headline>
            <IntegrationToolTextWrapper>
              <Tooltip title={tooltipTitle}>
                <IntegrationTipHover tabIndex={0}>
                  Integrated
                </IntegrationTipHover>
              </Tooltip>
              <TooltipText>{tooltipText}</TooltipText>
            </IntegrationToolTextWrapper>
            <DescriptionText>{descriptionText}</DescriptionText>
          </TextContainer>
        </LeftContainer>
        <RightContainer>
          <CircleHolder>
            <GrayCircle>
              <IntegrationsHeroImage image={heroImage} alt={headlineText} />
            </GrayCircle>
          </CircleHolder>
        </RightContainer>
      </InnerContainer>
    </OuterContainer>
  )
}

export default IntegrationsSubpageHeader

IntegrationsSubpageHeader.propTypes = {
  data: PropTypes.shape({
    headlineText: PropTypes.string.isRequired,
    tooltipText: PropTypes.string.isRequired,
    tooltipTitle: PropTypes.string.isRequired,
    descriptionText: PropTypes.string.isRequired,
    heroImage: PropTypes.oneOfType([
      PropTypes.shape({
        uri: PropTypes.string,
        headers: PropTypes.objectOf(PropTypes.string),
      }),
      PropTypes.number,
      PropTypes.arrayOf(
        PropTypes.shape({
          uri: PropTypes.string,
          width: PropTypes.number,
          height: PropTypes.number,
          headers: PropTypes.objectOf(PropTypes.string),
        })
      ),
    ]).isRequired,
  }).isRequired,
}
