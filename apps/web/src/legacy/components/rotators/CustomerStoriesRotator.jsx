import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from '@components/Image'
import { fadeIn } from 'react-animations'
import { styled, keyframes } from '@design'
// components
import NavigationArrows from './NavigationArrows'
import PaginationDots from './PaginationDots'
import ReactSlick from './ReactSlick_Base'
// images
import WavyLineDiagonalGraySVG from '@legacy/assets/images/shapes/wavy-line-diagonal-gray.svg'
import ArrowRightSVG from '@legacy/assets/images/global/arrow_right_purple.svg'

import gregImage from '@legacy/assets/images/customers/greg/Greg-Benz-Photography_1440px@2x.jpg'
import jodyImage from '@legacy/assets/images/customers/jody/Jody-Just-be-balanced_yoga@2x.jpg'
import kaileiImage from '@legacy/assets/images/customers/kailei/Hero-Kailei-Carr_Leadpages_full-width_1440px@2x.jpg'
import kateImage from '@legacy/assets/images/customers/kate/Hero-Kate-Wilkinson_Leadpages_full-width@2x.jpg'
import sayerImage from '@legacy/assets/images/customers/sayer/Sayer-Hero-full-width@2x.jpg'
import shohawkImage from '@legacy/assets/images/customers/shohawk/ShoHawk-Hero@2x.jpg'

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

const Supertitle = styled('div', {
  fontFamily: `'Space Mono'`,
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  textTransform: 'uppercase',
  opacity: 0.5,
  color: '$text',
  marginBottom: '1rem',
})

const Title = styled('div', {
  fontFamily: `'Value Serif'`,
  fontSize: '30px',
  letterSpacing: 0.5,
  lineHeight: '36px',
  marginBottom: '2rem',
  color: '$text',

  '@media (max-width: 1023px)': {
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: 1.12,
    marginBottom: '1rem',
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

const CustomerStoriesRotator = ({ showBackgroundImage }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const customerFeaturettesArray = [
    {
      name: 'Kailei',
      image: kaileiImage,
      quote: {
        title:
          'Kailei uses Leadpages to book her clients and sell her consulting services.',
        supertitle: 'Executive Coach & Consultant',
      },
      link: {
        text: 'Read her story',
        route: '/customers/kailei',
      },
      overlayText: 'Coaches & Consultants',
    },
    {
      name: 'Kate',
      image: kateImage,
      quote: {
        title:
          'Kate uses Leadpages to pinpoint her audience and sell her marketing services.',
        supertitle: 'Consultant',
      },
      link: {
        text: 'Read her story',
        route: '/customers/kate',
      },
      overlayText: 'Consultants',
    },
    {
      name: 'Greg',
      image: gregImage,
      quote: {
        title:
          'Greg uses Leadpages to sell his photography software and educate his audience.',
        supertitle: 'Photographer & Educator',
      },
      link: {
        text: 'Read his story',
        route: '/customers/greg',
      },
      overlayText: 'Artists & Educators',
    },
    {
      name: 'Shohawk',
      image: shohawkImage,
      quote: {
        title:
          'Michael and Chris use Leadpages to promote and sell their videos.',
        supertitle: 'Freelance Filmmakers',
      },
      link: {
        text: 'Read their story',
        route: '/customers/shohawk',
      },
      overlayText: 'Freelancers',
    },
    {
      name: 'Jody',
      image: jodyImage,
      quote: {
        title:
          'Jody uses Leadpages to sign-up stressed professionals for her yoga sessions.',
        supertitle: 'Wellness Advisor & Yoga Instructor',
      },
      link: {
        text: 'Read her story',
        route: '/customers/jody',
      },
      overlayText: 'Health & Fitness',
    },
    {
      name: 'Sayer',
      image: sayerImage,
      quote: {
        title:
          'Sayer Payne uses Leadpages to connect customers with retailers.',
        supertitle: 'Ecommerce Entrepreneur',
      },
      link: {
        text: 'Read his story',
        route: '/customers/sayer',
      },
      overlayText: 'Ecommerce',
    },
  ]

  const rotatorSwiped = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'customerRotatorSwiped',
    })
  }

  const settings = {
    arrows: true,
    centerMode: true,
    centerPadding: '15px',
    draggable: false,
    focusOnSelect: true,
    infinite: true,
    lazyload: true,
    nextArrow: (
      <NavigationArrows
        variant="arrow-right"
        rightOffset="-3rem"
        data-gtm="customer-rotator-nav-arrow"
      />
    ),
    onSwipe: rotatorSwiped,
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
        },
      },
    ],
    afterChange: (index) => {
      setActiveIndex(index)
    },
  }

  return (
    <OuterContainer>
      {showBackgroundImage && (
        <BackgroundSVG
          src={WavyLineDiagonalGraySVG.svg}
          alt="background wavy line"
        />
      )}
      <InnerContainer>
        <DetailContainer>
          <Link
            href={customerFeaturettesArray[activeIndex].link.route}
            passHref
          >
            <StyledLink
              aria-label={customerFeaturettesArray[activeIndex].quote.title}
              data-gtm="customer-story-link"
              data-value={customerFeaturettesArray[activeIndex].name}
            >
              <MainImage
                key={customerFeaturettesArray[activeIndex].quote.title}
                image={customerFeaturettesArray[activeIndex].image}
                alt={customerFeaturettesArray[activeIndex].quote.title}
              />
            </StyledLink>
          </Link>
          <TextContainer>
            <Link
              href={customerFeaturettesArray[activeIndex].link.route}
              passHref
            >
              <StyledLink
                aria-label={customerFeaturettesArray[activeIndex].quote.title}
                data-gtm="customer-story-link"
                data-value={customerFeaturettesArray[activeIndex].name}
              >
                <>
                  <Supertitle>
                    {customerFeaturettesArray[activeIndex].quote.supertitle}
                  </Supertitle>
                  <Title>
                    {customerFeaturettesArray[activeIndex].quote.title}
                  </Title>
                  <span>{`${customerFeaturettesArray[activeIndex].link.text}  `}</span>
                  <LinkArrowSVG src={ArrowRightSVG.src} alt="arrow icon" />
                </>
              </StyledLink>
            </Link>
          </TextContainer>
        </DetailContainer>
        <RotatorContainer>
          {typeof window !== 'undefined' && (
            <SlickRotator {...settings}>
              {customerFeaturettesArray.map((item, index) => {
                const { image, quote, overlayText } = item
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
                          {overlayText}
                        </ThumbnailOverlayText>
                      </ThumbnailOverlayBG>
                      <div id="slide-image">
                        <ThumbnailImage image={image} alt={quote.title} />
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

CustomerStoriesRotator.defaultProps = {
  showBackgroundImage: false,
}

CustomerStoriesRotator.propTypes = {
  showBackgroundImage: PropTypes.bool,
}

export default CustomerStoriesRotator
