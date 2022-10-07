import React, { useState, useEffect } from 'react'
import { styled } from '@design'
// images
import fscThumbnail from '@legacy/assets/images/customers/fsc/FSC_Hero-full-width@2x.jpg'
import gregThumbnail from '@legacy/assets/images/customers/greg/Greg-Benz-Photography_1440px@2x.jpg'
import jodyThumbnail from '@legacy/assets/images/customers/jody/Jody-Hero-full-width@2x.jpg'
import kaileiThumbnail from '@legacy/assets/images/customers/kailei/Hero-Kailei-Carr_Leadpages_full-width_1440px@2x.jpg'
import kateThumbnail from '@legacy/assets/images/customers/kate/Hero-Kate-Wilkinson_Leadpages_full-width@2x.jpg'
import sallyThumbnail from '@legacy/assets/images/customers/sally/Sally_Hero-full-width@2x.jpg'
import sayerThumbnail from '@legacy/assets/images/customers/sayer/Sayer-Hero-full-width@2x.jpg'
import shohawkThumbnail from '@legacy/assets/images/customers/shohawk/ShoHawk-Hero@2x.jpg'
// components
import Image from '@components/Image'
import Link from 'next/link'
import NavigationArrows from './NavigationArrows'
import PaginationDots from './PaginationDots'
import ReactSlick from './ReactSlick_Base'

const OuterContainer = styled('div', {
  paddingTop: '6rem',
  position: 'relative',
  background: '$white',
  width: '100%',
})

const HeadlineContainer = styled('div', {
  marginBottom: '4rem',
  textAlign: 'center',
  maxWidth: '1140px',

  '@media (max-width: 768px)': {
    px: '3rem',
  },

  '@media (min-width: 993px)': {
    mx: 'auto',
  },
})

const Headline = styled('h2', {
  fontFamily: 'Value Serif',
  fontSize: '2.5rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '3rem',
  marginBottom: '2rem',
  color: '$text',

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const SlickRotator = styled(ReactSlick, {
  position: 'relative',
  margin: '0 6rem',

  '@media (max-width: 900px)': {
    margin: 0,
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

const StyledLink = styled('a', {
  color: '$primary',
})

const ThumbnailOverlayBG = styled('div', {
  display: 'none',
  position: 'absolute',
  zIndex: 1,
  width: '100%',
  height: '100%',

  '@media (max-width: 480px)': {
    maxWidth: '100%',
  },

  backgroundColor: 'rgba(96, 62, 255, 0.9)',
})

const ThumbnailOverlayText = styled('div', {
  margin: 0,
  position: 'absolute',
  width: '95%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '$white',
  textAlign: 'center',
  fontSize: '16px',
  lineHeight: '18px',
  fontWeight: 500,
  maxWidth: '250px',

  '@media (max-width: 480px)': {
    maxWidth: '104px',
  },

  '@media (min-width: 769px)': {
    fontSize: '18px',
    lineHeight: '30px',
  },
})

const ThumbnailSection = styled('div', {
  position: 'relative',
  cursor: 'pointer',
})

const ImageContainer = styled('div', {
  position: 'relative',
  cursor: 'pointer',
  width: '100%',
  height: '100%',

  [`&:hover ${ThumbnailOverlayBG}`]: {
    display: 'block',
  },

  '*': {
    pointerEvents: 'none',
  },
})

const RotatorContainer = styled('div', {})

const ButtonContainer = styled('div', {
  my: '4rem',
  textAlign: 'center',

  '@media (max-width: 340px)': {
    padding: 0,
  },
})

const Button = styled('button', {
  width: '278px',
  height: '48px',
  borderRadius: '48px',
  color: '$primary',
  backgroundColor: '$white',
  border: '3px solid $colors$purpleLight',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '30px',
  textAlign: 'center',
  transition: 'all 0.3s ease',

  '@<xs': {
    width: '240px',
    fontSize: '16px',
    alignSelf: 'center',
  },

  '&:hover': {
    border: '3px solid $colors$primary',
    backgroundColor: '$primary',
    color: '$white',
    cursor: 'pointer',
  },
})

const ThumbnailTitle = styled('div', {
  color: '$text',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '24px',
  marginTop: '0.5rem',
  textAlign: 'center',

  '@media (max-width: 600px)': {
    fontSize: '14px',
  },

  '@media (max-width: 425px)': {
    display: 'none',
  },
})

const storiesArray = [
  {
    id: 'greg',
    name: 'Greg',
    title: 'Greg’s Story',
    overlayText: 'Artists & Educators',
    link: '/customers/greg',
    imageSrc: gregThumbnail,
    imageAltText: 'Greg - Artist & Educator',
  },
  {
    id: 'kate',
    name: 'Kate',
    title: 'Kate’s Story',
    overlayText: 'Consultants',
    link: '/customers/kate',
    imageSrc: kateThumbnail,
    imageAltText: 'Kate - Consultants',
  },
  {
    id: 'fsc',
    name: 'FSC',
    title: 'FSC’s Story',
    overlayText: 'Teams & Non-Profits',
    link: '/customers/fsc',
    imageSrc: fscThumbnail,
    imageAltText: 'FSC - Teams & Non-Profits',
  },
  {
    id: 'kailei',
    name: 'Kailei',
    title: 'Kailei’s Story',
    overlayText: 'Consultants & Coaches',
    link: '/customers/kailei',
    imageSrc: kaileiThumbnail,
    imageAltText: 'Kailei - Consultants & Coaches',
  },
  {
    id: 'sayer',
    name: 'Sayer',
    title: 'Sayer’s Story',
    overlayText: 'Ecommerce',
    link: '/customers/sayer',
    imageSrc: sayerThumbnail,
    imageAltText: 'Sayer - Ecommerce',
  },
  {
    id: 'sally',
    name: 'Sally',
    title: 'Sally’s Story',
    overlayText: 'Speakers & Coaches',
    link: '/customers/sally',
    imageSrc: sallyThumbnail,
    imageAltText: 'Sally - Speakers & Coaches',
  },
  {
    id: 'jody',
    name: 'Jody',
    title: 'Jody’s Story',
    overlayText: 'Health & Fitness',
    link: '/customers/jody',
    imageSrc: jodyThumbnail,
    imageAltText: 'Jody - Health & Fitness',
  },
  {
    id: 'shohawk',
    name: 'Shohawk',
    title: 'Shohawk’s Story',
    overlayText: 'Film',
    link: '/customers/shohawk',
    imageSrc: shohawkThumbnail,
    imageAltText: 'Shohawk - Film',
  },
]

const settings = {
  autoplay: true,
  autoplaySpeed: 4000,
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
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        appendDots: (dots) => (
          <PaginationDots dots={dots} margin="2rem auto 0" />
        ),
        arrows: false,
        centerPadding: '30px',
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
        centerPadding: '35px',
        dots: true,
        nextArrow: null,
        prevArrow: null,
        slidesToShow: 1,
      },
    },
  ],
}

const CustomerStoriesThumbnailRotator = () => {
  const [loadSlick, setLoadSlick] = useState(false)
  useEffect(() => setLoadSlick(true), [])

  return (
    <OuterContainer>
      <HeadlineContainer>
        <Headline>Read more Stories</Headline>
      </HeadlineContainer>
      <RotatorContainer>
        {loadSlick && (
          <SlickRotator {...settings}>
            {storiesArray.map(
              (
                { name, title, overlayText, link, imageSrc, imageAltText },
                index
              ) => (
                <ThumbnailSection key={index}>
                  <Link href={link} passHref>
                    <StyledLink aria-label={imageAltText}>
                      <ImageContainer
                        data-gtm="customer-story-link"
                        data-value={name}
                      >
                        <ThumbnailOverlayBG>
                          <ThumbnailOverlayText>
                            {overlayText}
                          </ThumbnailOverlayText>
                        </ThumbnailOverlayBG>
                        <div id="slide-image">
                          <ThumbnailImage image={imageSrc} alt={imageAltText} />
                        </div>
                      </ImageContainer>
                      <ThumbnailTitle>{title}</ThumbnailTitle>
                    </StyledLink>
                  </Link>
                </ThumbnailSection>
              )
            )}
          </SlickRotator>
        )}
      </RotatorContainer>
      <ButtonContainer>
        <StyledLink href="/customers">
          <Button>Back to all Stories</Button>
        </StyledLink>
      </ButtonContainer>
    </OuterContainer>
  )
}

export default CustomerStoriesThumbnailRotator
