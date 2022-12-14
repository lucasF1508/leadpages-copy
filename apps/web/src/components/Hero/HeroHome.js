import React from 'react'
import Image from 'next/image'
import { styled } from '@design'
import Text from '@components/Text'
import Link from '@components/Link'
import totemLeftSVG from '@legacy/assets/images/totems/homepage-hero-totem-left.svg'
import totemRightSVG from '@legacy/assets/images/totems/homepage-hero-totem-right.svg'
import HeroVideoBrowser from './HeroVideoBrowser'

const OuterContainer = styled('div', {
  position: 'relative',
  minHeight: '600px',
  ox: 'hidden',
  o: 'hidden',

  '@media (max-width: 768px)': {
    h: '100%',
  },
})

const InnerContainer = styled('div', {
  mw: '1140px',
  p: '0 4rem',
  m: '0 auto 52px auto',
  minHeight: '600px',
  position: 'relative',

  '@media (max-width: 768px)': {
    height: '100%',
    minHeight: '1px',
  },

  '@media (min-width: 577px) and (max-width: 768px)': {
    mb: '44px',
  },

  '@media (min-width: 769px)': {
    mb: '36px',
  },
})

const LinksContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
})

const ShapesLeft = styled('div', {
  position: 'absolute',
  top: '-18%',
  left: '-69.85%',
  w: '100%',
  h: '100%',
  z: -1,

  img: {
    width: '70%',
  },

  '@media (min-width: 1066px)': {
    top: '-48%',
    left: '-60.35%',
  },
})

const ShapesRight = styled('div', {
  position: 'absolute',
  top: '-3.75%',
  right: '-61%',
  width: '100%',
  height: '100%',
  z: -1,

  img: {
    width: '110%',
  },

  '@media (min-width: 1066px)': {
    top: '-27.25%',
    right: '-51%',
  },
})

const TextContainer = styled('div', {
  position: 'relative',
  mt: '17px',
  ml: 'auto',
  mr: 'auto',
  ta: 'center',
  width: '100%',

  '@media  (min-width: 577px) and (max-width: 768px)': {
    mt: '55px',
  },

  '@media  (min-width: 769px)': {
    mt: '68px',
    mw: '760px',
  },
})

const $Text = styled(Text, {
  mb: '2rem',
})

const SVG = styled(Image, {})

const VideoBrowserContainer = styled('div', {
  position: 'relative',
  width: '100%',
  mt: '38px',

  '@media  (min-width: 577px) and (max-width: 768px)': {
    mt: '64px',
  },

  '@media  (min-width: 769px)': {
    mt: '86px',
  },
})

const HeroHome = ({ content, links, media, watchVideoLink }) => (
  <OuterContainer>
    <InnerContainer>
      <TextContainer>
        {content && <$Text content={content} />}
        {links && (
          <LinksContainer>
            {links.map(({ _key, ...link }) => (
              <Link key={_key} {...link} />
            ))}
          </LinksContainer>
        )}
      </TextContainer>
      <VideoBrowserContainer>
        <ShapesLeft>
          <div style={{ width: '70%' }}>
            <SVG src={totemLeftSVG} alt="shapes" priority />
          </div>
        </ShapesLeft>
        <ShapesRight>
          <div style={{ width: '110%' }}>
            <SVG src={totemRightSVG} alt="shapes" priority />
          </div>
        </ShapesRight>
        <HeroVideoBrowser media={media} link={watchVideoLink} />
      </VideoBrowserContainer>
    </InnerContainer>
  </OuterContainer>
)

export default HeroHome
