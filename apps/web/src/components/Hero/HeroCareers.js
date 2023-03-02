import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import Media from '@components/Media'
import Text from '@components/Text'
import { scrollToHash } from '@hooks/useScrollToHash'
import { link as linkTokens } from '@design/tokens/link'

const OuterContainer = styled('div', {
  position: 'relative',
})

const HeroContainer = styled('div', {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '4rem',

  '@media (min-width: 576px) and (max-width: 992px)': {
    paddingTop: '6rem',
  },

  '@media (min-width: 993px)': {
    paddingTop: '10rem',
  },
})

const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '730px',
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',

  '@media (max-width: 768px)': {
    width: '80%',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    maxWidth: '576px',
    width: '75%',
  },

  '@media (min-width: 993px)': {
    maxWidth: '730px',
    width: '65%',
  },
})

const $Text = styled(Text, {
  ta: 'center',

  h1: {
    type: 'heroCareers',
  },
})

const ImageFlexbox = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',

  '@media (min-width: 1050px)': {
    box: { property: 'mt', multiplier: -1 },
  },
})

const LeftImageContainer = styled('div', {
  zIndex: -1,
  flex: '0 0 40%',

  '@<s': {
    display: 'none',
  },

  '@media (min-width: 1050px)': {
    flex: '0 0 30%',
  },
})

const RightImageContainer = styled('div', {
  zIndex: -1,
  flex: '0 0 40%',

  '@<s': {
    marginLeft: 'auto',
    flex: '0 0 80%',
    paddingTop: '2rem',
    marginRight: '10%',
  },

  '@media (min-width: 1050px)': {
    flex: '0 0 30%',
  },
})

const LeftMedia = styled(Media, {
  width: '100%',
  zIndex: -1,

  '@<s': {
    display: 'none',
  },
})

const RightMedia = styled(Media, {
  width: '100%',
  zIndex: -1,
})

const BGLeftContainer = styled('div', {
  position: 'absolute',
  left: 0,
  bottom: 0,
  zIndex: -1,
  width: '40%',

  '@<s': {
    display: 'none',
  },

  '@media (min-width: 1050px)': {
    width: '30%',
  },
})

const BGRightContainer = styled('div', {
  position: 'absolute',
  right: 0,
  bottom: 0,
  zIndex: -1,
  overflowX: 'hidden',
  width: '40%',

  '@<s': {
    display: 'none',
  },

  '@media (min-width: 1050px)': {
    width: '30%',
  },
})

const $Button = styled('button', linkTokens)

const HeroCareers = ({
  mediaLeft,
  mediaRight,
  backgroundImageLeft,
  backgroundImageRight,
  content,
  label = 'See Open Positions',
}) => (
  <OuterContainer>
    <HeroContainer>
      <TextContainer>
        {content && <$Text content={content} />}
        <$Button
          type="button"
          linkStyle="button"
          onClick={() => scrollToHash('link-list')}
        >
          {label}
        </$Button>
      </TextContainer>
    </HeroContainer>
    <ImageFlexbox>
      <LeftImageContainer>
        {backgroundImageLeft && (
          <BGLeftContainer>
            <Image image={backgroundImageLeft} alt="background svg" />
          </BGLeftContainer>
        )}
        {mediaLeft && <LeftMedia media={mediaLeft} alt="See Open Positions" />}
      </LeftImageContainer>
      <RightImageContainer>
        {backgroundImageRight && (
          <BGRightContainer>
            <Image image={backgroundImageRight} alt="background svg" />
          </BGRightContainer>
        )}
        {mediaRight && (
          <RightMedia media={mediaRight} alt="See Open Positions" />
        )}
      </RightImageContainer>
    </ImageFlexbox>
  </OuterContainer>
)
export default HeroCareers
