import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from '@components/Image'
import Text from '@components/Text'
import { fadeIn } from 'react-animations'
import { styled, keyframes } from '@design'
import ReactSlick from '@legacy/components/rotators/ReactSlick_Base'
import PaginationDots from '@legacy/components/rotators/PaginationDots'
import NavigationArrows from '@legacy/components/rotators/NavigationArrows'
// Images
import WavyLineDiagonalGraySVG from '@legacy/assets/images/shapes/wavy-line-diagonal-gray.svg'
import ArrowRightSVG from '@legacy/assets/images/global/arrow_right_purple.svg'

const OuterContainer = styled('div', {
  position: 'relative',
  background: '$white',
  width: '100%',
})

const BackgroundSVG = styled('img', {
  position: 'absolute',
  zIndex: -1,
  top: '-75%',
  left: '20%',
  maxWidth: '1140px',

  '@media (max-width: 900px)': {
    width: '100%',
    top: '-50%',
    left: 0,
  },

  '@media (max-width: 600px)': {
    top: '-75%',
    left: 0,
  },
})

const InnerContainer = styled('div', {
  maxWidth: '1140px',
  margin: 'auto',
})

const DetailContainer = styled('div', {
  width: '100%',
  marginBottom: '2rem',
  position: 'relative',
})

const FadeInAnimation = keyframes(fadeIn)

const MainImage = styled(Image, {
  width: '75%',
  animation: `0.5s ${FadeInAnimation}`,

  '@media (max-width: 900px)': {
    width: '100%',
    marginBottom: '10rem',
  },

  '@media (max-width: 425px)': {
    marginBottom: '12rem',
  },
})

const TextContainer = styled('div', {
  backgroundColor: 'white',
  position: 'absolute',
  right: 0,
  width: '35%',
  padding: '4rem',
  paddingRight: '1rem',
  marginRight: '4rem',
  boxSizing: 'content-box',

  '@media (min-width: 901px)': {
    right: 0,
    top: '15%',
  },

  '@media (max-width: 900px)': {
    left: 0,
    bottom: '-9rem',
    padding: '2rem',
    marginRight: 0,
    width: '65%',
  },

  '@media (max-width: 425px)': {
    width: '75%',
    bottom: '-11rem',
  },
})

const LinkArrowSVG = styled('img', {
  height: '12px',
  width: '12px',
  position: 'relative',
  marginLeft: '5px',
  cursor: 'pointer',
  filter: `brightness(0) saturate(100%) invert(23%) sepia(48%) saturate(6317%)
    hue-rotate(247deg) brightness(104%) contrast(105%)`,
})

const StyledLink = styled('a', {
  fontWeight: 500,
  textDecoration: 'none',
  color: '$primary',
  cursor: 'pointer',

  '&:hover': {
    color: '$indigoDark',
    [`${LinkArrowSVG}`]: {
      filter: `brightness(0) saturate(100%) invert(25%) sepia(83%)
        saturate(2477%) hue-rotate(242deg) brightness(77%) contrast(109%)`,
    },
  },
})

const SlickRotator = styled(ReactSlick, {
  margin: '0 -31px',

  '@media (max-width: 1200px)': {
    margin: '0 4rem',
  },

  '@media (max-width: 900px)': {
    margin: 0,
  },

  '@media (min-width: 1201px) and (max-width: 1350px)': {
    width: '90%',
    margin: 'auto',
  },

  '.slick-slide > div': {
    margin: '0 1rem',
  },

  '.slick-slide > div > div': {
    outline: 'none',
  },
})

const ThumbnailImage = styled(Image, {
  width: '100%',
  height: '100%',
})

const ThumbnailOverlayBG = styled('div', {
  display: 'none',
  position: 'absolute',
  zIndex: 1,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(96, 62, 255, 0.9)',
})

const ThumbnailSection = styled('div', {
  position: 'relative',
  cursor: 'pointer',
})

const ThumbnailOverlayText = styled('div', {
  margin: 0,
  position: 'absolute',
  width: '75%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '$white',
  textAlign: 'center',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  fontFamily: `'Apercu Pro'`,
  maxWidth: '250px',

  '@media (min-width: 1201px)': {
    fontSize: '18px',
    lineHeight: '30px',
  },
})

const ImageContainer = styled('div', {
  position: 'relative',
  cursor: 'pointer',
  width: '100%',
  height: '100%',

  [`&:hover ${ThumbnailOverlayBG}`]: {
    display: 'block',
  },

  [`&.active-slide ${ThumbnailOverlayBG}`]: {
    display: 'block',
  },
})

const RotatorContainer = styled('div', {})

const CustomerRotator = ({ showBackgroundImage, customers }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [loadSlick, setLoadSlick] = useState(false)
  useEffect(() => setLoadSlick(true), [])

  const settings = {
    arrows: true,
    centerMode: true,
    centerPadding: '15px',
    draggable: false,
    focusOnSelect: true,
    infinite: customers.length > 4,
    lazyload: true,
    nextArrow: (
      <NavigationArrows
        variant="arrow-right"
        rightOffset="-3rem"
        data-gtm="customer-rotator-nav-arrow"
      />
    ),
    onSwipe: () => {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'customerRotatorSwiped',
      })
    },
    pauseOnFocus: true,
    pauseOnHover: true,
    prevArrow: (
      <NavigationArrows
        variant="arrow-left"
        leftOffset="-3rem"
        data-gtm="customer-rotator-nav-arrow"
      />
    ),
    slidesToScroll: 1,
    slidesToShow: 5,
    speed: 300,
    swipeToSlide: true,
    touchThreshold: 50,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          infinite: customers.length > 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          appendDots: (dots) => (
            <PaginationDots dots={dots} margin="2rem auto 0" />
          ),
          arrows: false,
          centerPadding: '35px',
          dots: true,
          nextArrow: null,
          prevArrow: null,
          slidesToShow: 3,
          infinite: customers.length > 3,
        },
      },
      {
        breakpoint: 425,
        settings: {
          appendDots: (dots) => (
            <PaginationDots dots={dots} margin="2rem auto 0" />
          ),
          arrows: false,
          centerPadding: '75px',
          dots: true,
          nextArrow: null,
          prevArrow: null,
          slidesToShow: 1,
          infinite: customers.length > 2,
        },
      },
    ],
  }

  return (
    <OuterContainer>
      {showBackgroundImage && (
        <BackgroundSVG
          src={WavyLineDiagonalGraySVG.src}
          alt="background wavy line"
        />
      )}
      <InnerContainer>
        <DetailContainer>
          <Link href={customers[activeIndex].path} passHref>
            <StyledLink
              // aria-label={customers[activeIndex].quote.title}
              data-gtm="customer-story-link"
              data-value={customers[activeIndex].name}
            >
              <MainImage
                key={customers[activeIndex].image?.asset?._id}
                image={customers[activeIndex].excerpt.image}
              />
            </StyledLink>
          </Link>
          <TextContainer>
            <Link href={customers[activeIndex].path} passHref>
              <StyledLink
                // aria-label={customers[activeIndex].quote.title}
                data-gtm="customer-story-link"
                data-value={customers[activeIndex].name}
                css={{
                  fontSize: '1rem',
                }}
              >
                <>
                  <Text
                    styleMap={{ h1: 'h3' }}
                    content={customers[activeIndex].excerpt.content}
                  />
                  <span>{`${
                    customers[activeIndex].excerpt.linkText || 'Read the story'
                  }  `}</span>
                  <LinkArrowSVG src={ArrowRightSVG.src} alt="arrow icon" />
                </>
              </StyledLink>
            </Link>
          </TextContainer>
        </DetailContainer>
        <RotatorContainer>
          {customers.length > 1 && loadSlick && (
            <SlickRotator
              afterChange={(index) => {
                setActiveIndex(index)
              }}
              {...settings}
            >
              {customers.map(({ excerpt }, index) => {
                const { image, hoverTitle, content } = excerpt

                if (!image || !content) return null

                return (
                  <ThumbnailSection
                    key={index}
                    data-gtm="customer-rotator-nav-slide"
                  >
                    <ImageContainer
                      className={
                        index === activeIndex
                          ? 'active-slide'
                          : 'inactive-slide'
                      }
                    >
                      <ThumbnailOverlayBG>
                        <ThumbnailOverlayText>
                          {hoverTitle}
                        </ThumbnailOverlayText>
                      </ThumbnailOverlayBG>
                      <div id="slide-image">
                        <ThumbnailImage image={image} />
                      </div>
                    </ImageContainer>
                  </ThumbnailSection>
                )
              })}
            </SlickRotator>
          )}
        </RotatorContainer>
      </InnerContainer>
    </OuterContainer>
  )
}

CustomerRotator.defaultProps = {
  showBackgroundImage: false,
}

CustomerRotator.propTypes = {
  showBackgroundImage: PropTypes.bool,
}

export default CustomerRotator
