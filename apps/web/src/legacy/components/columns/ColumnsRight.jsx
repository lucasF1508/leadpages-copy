import React, { useState, useEffect } from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Image from '@components/Image'
import Link from 'next/link'
// utilities
import shouldDisplayVideo from '@legacy/utils/should-display-video'
// images
import builderCreativityStatic from '@legacy/assets/images/product/landing-page-builder/landing-page-builder-creativity-still_340px@2x.png'
import rightArrowPurple from '@legacy/assets/images/global/arrow_right_purple.svg'
// videos
const builderCreativityWebm =
  'https://static.leadpages.com/mktg/videos/landing-page-builder-creativity.webm'
const builderCreativityMp4 =
  'https://static.leadpages.com/mktg/videos/landing-page-builder-creativity.mp4'

const OuterContainer = styled('div', {
  display: 'flex',
  position: 'relative',
  flexWrap: 'wrap',
})

const InnerContainer = styled('div', {
  display: 'flex',
  position: 'relative',
  flexFlow: 'row wrap',
  marginLeft: '10%',
  width: '100%',

  '@media (max-width: 1023px)': {
    flexFlow: 'column wrap',
    alignItems: 'center',
    mx: 'auto',
  },
})

const ImageContainer = styled('div', {
  position: 'relative',
  marginBottom: 0,
  marginRight: '4vw',
  width: '50vw',
  maxWidth: '661px',
  minWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',

  '@media (max-width: 1023px)': {
    marginBottom: '1rem',
  },

  '@<s': {
    mx: 0,
    width: '90%',
    minWidth: 'auto',
  },
})

const BuilderVideoHolder = styled('div', {
  width: '100%',
  maxWidth: '661px',
  left: 0,
  right: 0,
  mx: 'auto',
})

const DesktopFallbackImage = styled(Image, {
  width: '100%',

  '@<s': {
    display: 'none',
  },
})

const DesktopVideo = styled('video', {
  width: '100%',

  '@<s': {
    display: 'none',
  },
})

const StaticMobileImage = styled(Image, {
  width: '100%',

  '@>s': {
    display: 'none !important',
  },
})

const ColumnsContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  flexFlow: 'column wrap',
  maxHeight: '400px',

  '@media (max-width: 1023px)': {
    maxHeight: 'none',
    maxWidth: '100%',
    flexDirection: 'row',
    marginBottom: '0rem',
  },

  '@<s': {
    flexDirection: 'column',
  },
})

const ColumnItem = styled('div', {
  position: 'relative',
  width: '244px',
  marginTop: '1rem',
  mx: '1rem',
  marginBottom: 0,
  textAlign: 'left',

  '@media (max-width: 1023px)': {
    marginTop: '2rem',
  },
})

const ItemHeader = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '1rem',
})

const ItemText = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '1rem',
})

const CTA = styled('div', {
  color: '$primary',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'left',
  fontWeight: 500,
  marginBottom: '1rem',
})

const ArrowRightPurple = styled('img', {
  width: '20px',
  height: '10px',
})

const ColumnsRight = ({ columnItems }) => {
  const [displayVideo, setDisplayVideo] = useState(false)
  useEffect(() => setDisplayVideo(shouldDisplayVideo()), [])

  return (
    <OuterContainer>
      <InnerContainer>
        <ImageContainer>
          <BuilderVideoHolder>
            {!displayVideo && (
              <DesktopFallbackImage
                image={builderCreativityStatic}
                alt="customize a landing page template"
              />
            )}
            {displayVideo && (
              <DesktopVideo autoPlay playsinline muted loop>
                <source src={builderCreativityWebm} type="video/webm" />
                <source src={builderCreativityMp4} type="video/mp4" />
              </DesktopVideo>
            )}
          </BuilderVideoHolder>
          <StaticMobileImage
            image={builderCreativityStatic}
            alt="using landing page builder"
          />
        </ImageContainer>
        <ColumnsContainer>
          {columnItems.map(({ header, text, internalLink: link }, index) => (
            <ColumnItem key={index}>
              <ItemHeader>{header}</ItemHeader>
              <ItemText>{text}</ItemText>
              {link && (
                <Link href={link.route}>
                  <a aria-label={link.altText}>
                    <CTA>
                      {`${link.text}`}
                      <ArrowRightPurple
                        src={rightArrowPurple.src}
                        alt="purple right arrow"
                      />
                    </CTA>
                  </a>
                </Link>
              )}
            </ColumnItem>
          ))}
        </ColumnsContainer>
      </InnerContainer>
    </OuterContainer>
  )
}

ColumnsRight.propTypes = {
  columnItems: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      internalLink: PropTypes.shape({
        route: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        altText: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
}

export default ColumnsRight
