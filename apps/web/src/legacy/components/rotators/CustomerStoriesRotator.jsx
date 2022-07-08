import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'
import { fadeIn } from 'react-animations'
import styled, { keyframes } from 'styled-components'
// components
import NavigationArrows from './NavigationArrows'
import PaginationDots from './PaginationDots'
import ReactSlick from './ReactSlick_Base'
// images
import WavyLineDiagnoalGraySVG from '../../assets/images/shapes/wavy-line-diagonal-gray.svg'
import ArrowRightSVG from '../../assets/images/global/arrow_right_purple.svg'

import gregImage from '../../assets/images/customers/greg/Greg-Benz-Photography_1440px@2x.jpg'
import jodyImage from '../../assets/images/customers/jody/Jody-Just-be-balanced_yoga@2x.jpg'
import kaileiImage from '../../assets/images/customers/kailei/Hero-Kailei-Carr_Leadpages_full-width_1440px@2x.jpg'
import kateImage from '../../assets/images/customers/kate/Hero-Kate-Wilkinson_Leadpages_full-width@2x.jpg'
import sayerImage from '../../assets/images/customers/sayer/Sayer-Hero-full-width@2x.jpg'
import shohawkImage from '../../assets/images/customers/shohawk/ShoHawk-Hero@2x.jpg'

const OuterContainer = styled.div`
  position: relative;
  background: #fff;
  width: 100%;
`

const BackgroundSVG = styled(Image)`
  position: absolute;
  z-index: -1;
  top: -75%;
  left: 20%;
  max-width: 1140px;
  @media (max-width: 900px) {
    width: 100%;
    top: -50%;
    left: 0;
  }
  @media (max-width: 600px) {
    top: -75%;
    left: 0;
  }
`

const InnerContainer = styled.div`
  max-width: 1140px;
  margin: auto;
`

const DetailContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  position: relative;
`

const FadeInAnimation = keyframes`${fadeIn}`

const MainImage = styled(Image)`
  width: 75%;
  animation: 0.5s ${FadeInAnimation};
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 10rem;
  }
  @media (max-width: 425px) {
    margin-bottom: 12rem;
  }
`

const TextContainer = styled.div`
  background-color: white;
  position: absolute;
  right: 0;
  width: 35%;
  padding: 4rem;
  padding-right: 1rem;
  margin-right: 4rem;
  box-sizing: content-box;
  @media (min-width: 901px) {
    right: 0;
    top: 15%;
  }
  @media (max-width: 900px) {
    left: 0;
    bottom: -9rem;
    padding: 2rem;
    margin-right: 0;
    width: 65%;
  }
  @media (max-width: 425px) {
    width: 75%;
    bottom: -11rem;
  }
`

const Supertitle = styled.div`
  font-family: 'Space Mono';
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
  opacity: 0.5;
  color: #0f0c09;
  margin-bottom: 1rem;
`

const Title = styled.div`
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: 0.5;
  line-height: 36px;
  margin-bottom: 2rem;
  color: #0f0c09;
  @media (max-width: 1023px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 1.12;
    margin-bottom: 1rem;
  }
`

const LinkArrowSVG = styled(Image)`
  height: 12px;
  width: 12px;
  position: relative;
  margin-left: 5px;
  cursor: pointer;
  filter: brightness(0) saturate(100%) invert(23%) sepia(48%) saturate(6317%)
    hue-rotate(247deg) brightness(104%) contrast(105%);
`

const StyledLink = styled(Link)`
  font-weight: 500;
  text-decoration: none;
  color: #603eff;
  cursor: pointer;
  &:hover {
    color: #4d32cc;
    ${LinkArrowSVG} {
      filter: brightness(0) saturate(100%) invert(25%) sepia(83%)
        saturate(2477%) hue-rotate(242deg) brightness(77%) contrast(109%);
    }
  }
`

const SlickRotator = styled(ReactSlick)`
  margin: 0 -31px;
  @media (max-width: 1200px) {
    margin: 0 4rem;
  }
  @media (max-width: 900px) {
    margin: 0;
  }

  @media (min-width: 1201px) and (max-width: 1350px) {
    width: 90%;
    margin: auto;
  }

  .slick-slide > div {
    margin: 0 1rem;
  }
  .slick-slide > div > div {
    outline: none;
  }
`

const ThumbnailImage = styled(Image)`
  width: 100%;
  height: 100%;
`

const ThumbnailOverlayBG = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(96, 62, 255, 0.9);
`

const ThumbnailSection = styled.div`
  position: relative;
  cursor: pointer;
`

const ThumbnailOverlayText = styled.div`
  margin: 0;
  position: absolute;
  width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  font-family: 'Apercu Pro';
  max-width: 250px;
  @media (min-width: 1201px) {
    font-size: 18px;
    line-height: 30px;
  }
`

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  &:hover ${ThumbnailOverlayBG} {
    display: block;
  }
  &.active-slide ${ThumbnailOverlayBG} {
    display: block;
  }
`

const RotatorContainer = styled.div``

const CustomerStoriesRotator = ({ showBackgroundImage }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = {
    gregImage,
    jodyImage,
    kaileiImage,
    kateImage,
    sayerImage,
    shohawkImage,
  }

  const getImage = (image) => image

  const customerFeaturettesArray = [
    {
      name: 'Kailei',
      image: getImage(images.kaileiImage),
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
      image: getImage(images.kateImage),
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
      image: getImage(images.gregImage),
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
      image: getImage(images.shohawkImage),
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
      image: getImage(images.jodyImage),
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
      image: getImage(images.sayerImage),
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
  console.log(customerFeaturettesArray[activeIndex].image)
  return (
    <OuterContainer>
      {showBackgroundImage && (
        <BackgroundSVG
          src={WavyLineDiagnoalGraySVG}
          alt="background wavy line"
        />
      )}
      <InnerContainer>
        <DetailContainer>
          <StyledLink
            href={customerFeaturettesArray[activeIndex].link.route}
            alt={customerFeaturettesArray[activeIndex].quote.title}
            data-gtm="customer-story-link"
            data-value={customerFeaturettesArray[activeIndex].name}
          >
            <MainImage
              src={customerFeaturettesArray[activeIndex].image}
              alt={customerFeaturettesArray[activeIndex].quote.title}
            />
          </StyledLink>
          <TextContainer>
            <StyledLink
              href={customerFeaturettesArray[activeIndex].link.route}
              alt={customerFeaturettesArray[activeIndex].quote.title}
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
                <LinkArrowSVG src={ArrowRightSVG} alt="arrow icon" />
              </>
            </StyledLink>
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
                        <ThumbnailImage src={image} alt={quote.title} />
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
