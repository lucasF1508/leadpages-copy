import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import styled from 'styled-components'
import { GATSBY_IMAGE } from '../../constants/types'
// components
import PaginationDots from './PaginationDots'
import ReactSlick from './ReactSlick_Base'
// images
import archStepLeftRose from '../../assets/images/shapes/arch-stepleft-rose.svg'

const OuterContainer = styled.div`
  position: relative;
`

const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
`

const BackgroundImage_Desktop = styled(BackgroundImage)`
  width: 40%;
  max-height: 500px;
  @media (max-width: 768px) {
    display: none;
  }
`

const BackgroundImage_Tablet = styled(BackgroundImage)`
  width: 40%;
  @media (min-width: 769px) {
    display: none;
  }
`

const InnerContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 3rem;
  @media (max-width: 768px) {
    padding: 0;
  }
`

const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-end;
`

const TotemImageContainer = styled.div`
  position: relative;
  align-self: flex-end;
  @media (min-width: 769px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

const TotemImage = styled(Image)`
  @media (max-width: 768px) {
    margin: 0 7rem;
  }
  @media (max-width: 425px) {
    margin: 0 3rem;
  }
`

const RotatorContainer = styled.div`
  justify-self: flex-end;
  background: #fef9f1;
  @media (min-width: 769px) {
    width: 50%;
    padding: 2rem 2rem 1.5rem;
  }
  @media (max-width: 768px) {
    box-sizing: border-box;
    width: 100%;
    padding: 2rem 1rem;
  }
`

const SlickRotator = styled(ReactSlick)`
  .slick-track {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-slide > div {
    display: flex;
    justify-content: center;
    padding: 0.5rem 2rem 2rem;
    @media (max-width: 768px) {
      padding: 0.5rem 4rem 2rem;
    }
    @media (max-width: 425px) {
      padding: 0.5rem 0.75rem 2rem;
    }
  }
  .slick-slide > div > div {
    outline: none;
  }
`

const Testimonial = styled.div`
  @media (max-width: 768px) {
    max-width: 90%;
  }
`

const Quote = styled.div`
  margin-bottom: 2rem;
  font-size: 22px;
  line-height: 36px;
  letter-spacing: -0.12px;
  color: #575452;
  @media (max-width: 1023px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
  }
`

const AttributionBlock = styled.div`
  display: flex;
`

const ThumbnailImage = styled(Image)`
  width: 100%;
  height: 100%;
  max-width: 44px;
  max-height: 44px;
`

const AttributionDetailBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`

const Name = styled.div`
  margin-bottom: 0.5rem;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #0f0c09;
`

const Title = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #575452;
`

const CustomerSuccessTestimonialsRotator = (props) => {
  const images = []
  const backgroundSVG = props.overrideBackgroundSVG || archStepLeftRose
  const totemImage = props.overrideTotemImage || null //getImage(images.totemImage)
  const testimonialsArray = props.overrideTestimonialsArray || [
    {
      name: 'Caroline Davidson',
      title: 'Greatness Relations Specialist, Greatness Magnified',
      quote:
        '“Leadpages is a prime example of customer service greatness! The support team stayed right with us and even created custom, step-by-step videos for our unique situation. We felt supported, cared about, and valued as a customer. The support team went the extra mile.”',
      // image: getImage(images.testimonialThumbnail1),
      imageAltText: 'Caroline Davidson headshot',
    },
    {
      name: 'Jari Roomer',
      title: 'Founder, Personal Growth Lab',
      quote:
        '“The customer support team helped me quickly and thoroughly in solving my problem. They even went as far as making a 2-minute video specially for me! This is how you create superfans, Leadpages!”',
      // image: getImage(images.testimonialThumbnail3),
      imageAltText: 'Jari Roomer headshot',
    },
    {
      name: 'Christina Slasor',
      title: 'Owner & Designer, Libelula Jewelry and Gifts',
      quote:
        '“Amazingly fast response, comprehensive problem solving and follow-up emails to check that I got sorted. That feeling of support and backup is invaluable.”',
      // image: getImage(images.testimonialThumbnail2),
      imageAltText: 'Christina Slasor headshot',
    },
    {
      name: 'Anil Argawal',
      title: 'Marketing Automation Consultant',
      quote:
        '“My experience with Leadpages Customer Support has been a total breeze and very helpful. It’s a pleasure to chat with them on LIVE chat support whenever I get a chance. They even send me screencasts to explain things either while on the chat or later on as the case may be.”',
      // image: getImage(images.testimonialThumbnail4),
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
      <BackgroundImage_Desktop src={backgroundSVG} alt="background svg" />
      <InnerContainer>
        <FlexRow>
          <TotemImageContainer>
            <BackgroundImage_Tablet src={backgroundSVG} alt="background svg" />
            {/* <TotemImage
              image={totemImage}
              alt="Real people answering real questions"
            /> */}
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
                        {/* <ThumbnailImage image={image} alt={imageAltText} /> */}
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
