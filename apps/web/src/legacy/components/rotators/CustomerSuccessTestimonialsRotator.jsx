import React from 'react'
import PropTypes from 'prop-types'
import Image from '@components/Image'
import { styled } from '@design'
import { GATSBY_IMAGE } from '@legacy/constants/types'

// Components
import PaginationDots from './PaginationDots'
import ReactSlick from './ReactSlick_Base'

// Images
import archStepLeftRose from '@legacy/assets/images/shapes/arch-stepleft-rose.svg'
import totemImageDefault from '@legacy/assets/images/totems/staci-support-totem.png'
import testimonialThumbnail1 from '@legacy/assets/images/testimonials/caroline-davidson.png'
import testimonialThumbnail2 from '@legacy/assets/images/testimonials/libelula-jewellery.png'
import testimonialThumbnail3 from '@legacy/assets/images/testimonials/jari-roomer.png'
import testimonialThumbnail4 from '@legacy/assets/images/testimonials/anil-argawal.png'

const OuterContainer = styled('div', {
  position: 'relative',
})

const BackgroundImage = styled('img', {
  position: 'absolute',
  zIndex: -1,
  bottom: 0,
  left: 0,
})

const BackgroundImage_Desktop = styled(BackgroundImage, {
  width: '40%',
  maxHeight: '500px',

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

const BackgroundImage_Tablet = styled(BackgroundImage, {
  width: '40%',

  '@media (min-width: 769px)': {
    display: 'none',
  },
})

const InnerContainer = styled('div', {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '0 3rem',

  '@media (max-width: 768px)': {
    padding: 0,
  },
})

const FlexRow = styled('div', {
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignContent: 'flex-end',
})

const TotemImageContainer = styled('div', {
  position: 'relative',
  alignSelf: 'flex-end',

  '@media (min-width: 769px)': {
    width: '40%',
  },

  '@media (max-width: 768px)': {
    width: '100%',
  },
})

const TotemImage = styled(Image, {
  '@media (max-width: 768px)': {
    margin: '0 7rem',
  },

  '@media (max-width: 425px)': {
    margin: '0 3rem',
  },
})

const RotatorContainer = styled('div', {
  justifySelf: 'flex-end',
  background: '$tan',

  '@media (min-width: 769px)': {
    width: '50%',
    padding: '2rem 2rem 1.5rem',
  },

  '@media (max-width: 768px)': {
    boxSizing: 'border-box',
    width: '100%',
    padding: '2rem 1rem',
  },
})

const SlickRotator = styled(ReactSlick, {
  '.slick-track': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  '.slick-slide > div': {
    display: 'flex',
    justifyContent: 'center',
    padding: '0.5rem 2rem 2rem',

    '@media (max-width: 768px)': {
      padding: '0.5rem 4rem 2rem',
    },

    '@media (max-width: 425px)': {
      padding: '0.5rem 0.75rem 2rem',
    },
  },

  '.slick-slide > div > div': {
    outline: 'none',
  },
})

const Testimonial = styled('div', {
  '@media (max-width: 768px)': {
    maxWidth: '90%',
  },
})

const Quote = styled('div', {
  marginBottom: '2rem',
  fontSize: '22px',
  lineHeight: '36px',
  letterSpacing: '-0.12px',
  color: '$textAlt',

  '@media (max-width: 1023px)': {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
  },
})

const AttributionBlock = styled('div', {
  display: 'flex',
})

const ThumbnailImage = styled(Image, {
  width: '100%',
  height: '100%',
  maxWidth: '44px',
  maxHeight: '44px',
})

const AttributionDetailBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '1rem',
})

const Name = styled('div', {
  marginBottom: '0.5rem',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  color: '$text',
})

const Title = styled('div', {
  fontSize: '14px',
  lineHeight: '20px',
  color: '$textAlt',
})

const CustomerSuccessTestimonialsRotator = (props) => {
  const backgroundSVG = props.overrideBackgroundSVG || archStepLeftRose
  const totemImage = props.overrideTotemImage || totemImageDefault
  const testimonialsArray = props.overrideTestimonialsArray || [
    {
      name: 'Caroline Davidson',
      title: 'Greatness Relations Specialist, Greatness Magnified',
      quote:
        '“Leadpages is a prime example of customer service greatness! The support team stayed right with us and even created custom, step-by-step videos for our unique situation. We felt supported, cared about, and valued as a customer. The support team went the extra mile.”',
      image: testimonialThumbnail1,
      imageAltText: 'Caroline Davidson headshot',
    },
    {
      name: 'Jari Roomer',
      title: 'Founder, Personal Growth Lab',
      quote:
        '“The customer support team helped me quickly and thoroughly in solving my problem. They even went as far as making a 2-minute video specially for me! This is how you create superfans, Leadpages!”',
      image: testimonialThumbnail3,
      imageAltText: 'Jari Roomer headshot',
    },
    {
      name: 'Christina Slasor',
      title: 'Owner & Designer, Libelula Jewelry and Gifts',
      quote:
        '“Amazingly fast response, comprehensive problem solving and follow-up emails to check that I got sorted. That feeling of support and backup is invaluable.”',
      image: testimonialThumbnail2,
      imageAltText: 'Christina Slasor headshot',
    },
    {
      name: 'Anil Argawal',
      title: 'Marketing Automation Consultant',
      quote:
        '“My experience with Leadpages Customer Support has been a total breeze and very helpful. It’s a pleasure to chat with them on LIVE chat support whenever I get a chance. They even send me screencasts to explain things either while on the chat or later on as the case may be.”',
      image: testimonialThumbnail4,
      imageAltText: 'Anil Argawal headshot',
    },
  ]

  const settings = {
    appendDots: (dots) => <PaginationDots dots={dots} />,
    arrows: false,
    autoplay: testimonialsArray.length > 1,
    autoplaySpeed: 5000,
    dots: testimonialsArray.length > 1,
    draggable: testimonialsArray.length > 1,
    focusOnSelect: true,
    infinite: testimonialsArray.length > 1,
    lazyload: true,
    pauseOnFocus: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    touchThreshold: 50,
  }

  return (
    <OuterContainer>
      <BackgroundImage_Desktop src={backgroundSVG.src} alt="background svg" />
      <InnerContainer>
        <FlexRow>
          <TotemImageContainer>
            <BackgroundImage_Tablet
              src={backgroundSVG.src}
              alt="background svg"
            />
            <TotemImage
              image={totemImage}
              alt="Real people answering real questions"
            />
          </TotemImageContainer>
          <RotatorContainer>
            {typeof window !== 'undefined' && (
              <SlickRotator {...settings}>
                {testimonialsArray.map((item, index) => {
                  const { quote, image, imageAltText, name, title } = item
                  return (
                    <Testimonial key={index}>
                      <Quote>{quote}</Quote>
                      <AttributionBlock>
                        <ThumbnailImage image={image} alt={imageAltText} />
                        <AttributionDetailBlock>
                          <Name>{name}</Name>
                          <Title>{title}</Title>
                        </AttributionDetailBlock>
                      </AttributionBlock>
                    </Testimonial>
                  )
                })}
              </SlickRotator>
            )}
          </RotatorContainer>
        </FlexRow>
      </InnerContainer>
    </OuterContainer>
  )
}

CustomerSuccessTestimonialsRotator.defaultProps = {
  overrideBackgroundSVG: null,
  overrideTotemImage: null,
  overrideTestimonialsArray: null,
}

CustomerSuccessTestimonialsRotator.propTypes = {
  overrideBackgroundSVG: PropTypes.node,
  overrideTotemImage: GATSBY_IMAGE,
  overrideTestimonialsArray: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      quote: PropTypes.string,
      image: GATSBY_IMAGE,
      imageAltText: PropTypes.string,
    })
  ),
}

export default CustomerSuccessTestimonialsRotator
