import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
// components
import NavigationArrows from './NavigationArrows'
import PaginationDots from './PaginationDots'
import ReactSlick from './ReactSlick_Base'

const OuterContainer = styled.div`
  padding-top: 6rem;
  position: relative;
  background: #fff;
  width: 100%;
`

const HeadlineContainer = styled.div`
  margin-bottom: 4rem;
  text-align: center;
  max-width: 1140px;
  @media (max-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  @media (min-width: 993px) {
    margin-left: auto;
    margin-right: auto;
  }
`

const Headline = styled.h2`
  font-family: 'Value Serif';
  font-size: 2.5rem;
  letter-spacing: -0.03125rem;
  line-height: 3rem;
  margin-bottom: 2rem;
  color: #0f0c09;
  @media (max-width: 576px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
  }
`

const SlickRotator = styled(ReactSlick)`
  position: relative;
  margin: 0 6rem;
  @media (max-width: 900px) {
    margin: 0;
  }
  .slick-slide > div {
    margin: 0 1rem;
  }
  .slick-slide > div > div {
    outline: none;
  }
`

const ThumbnailImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #603eff;
  cursor: pointer;
`

const ThumbnailOverlayBG = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  @media (max-width: 480px) {
    max-width: 100%;
  }
  background-color: rgba(96, 62, 255, 0.9);
`

const ThumbnailOverlayText = styled.div`
  margin: 0;
  position: absolute;
  width: 95%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 18px;
  font-weight: 500;
  max-width: 250px;
  @media (max-width: 480px) {
    max-width: 104px;
  }
  @media (min-width: 769px) {
    font-size: 18px;
    line-height: 30px;
  }
`

const ThumbnailSection = styled.div`
  position: relative;
  cursor: pointer;
`

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  &:hover ${ThumbnailOverlayBG} {
    display: block;
  }
  * {
    pointer-events: none;
  }
`

const RotatorContainer = styled.div``

const ButtonContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;
  @media (max-width: 340px) {
    padding: 0;
  }
`

const Button = styled.button`
  width: 278px;
  height: 48px;
  border-radius: 48px;
  color: #603eff;
  background-color: #fff;
  border: 3px solid #d1c5f9;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  transition: all 0.3s ease;
  @media (max-width: 340px) {
    width: 240px;
    font-size: 16px;
    align-self: center;
  }
  &:hover {
    border: 3px solid #603eff;
    background-color: #603eff;
    color: #fff;
    cursor: pointer;
  }
`

const ThumbnailTitle = styled.div`
  color: #0f0c09;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 0.5rem;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (max-width: 425px) {
    display: none;
  }
`

const CustomerStoriesThumbnailRotator = () => {
  const images = useStaticQuery(graphql`
    query CustomerStoriesThumbnailRotatorQuery {
      fscThumbnail: file(
        relativePath: {
          eq: "assets/images/customers/fsc/FSC_Hero-full-width@2x.jpg"
        }
      ) {
        ...constrained
      }
      gregThumbnail: file(
        relativePath: {
          eq: "assets/images/customers/greg/Greg-Benz-Photography_1440px@2x.jpg"
        }
      ) {
        ...constrained
      }
      jodyThumbnail: file(
        relativePath: {
          eq: "assets/images/customers/jody/Jody-Hero-full-width@2x.jpg"
        }
      ) {
        ...constrained
      }
      kaileiThumbnail: file(
        relativePath: {
          eq: "assets/images/customers/kailei/Hero-Kailei-Carr_Leadpages_full-width_1440px@2x.jpg"
        }
      ) {
        ...constrained
      }
      kateThumbnail: file(
        relativePath: {
          eq: "assets/images/customers/kate/Hero-Kate-Wilkinson_Leadpages_full-width@2x.jpg"
        }
      ) {
        ...constrained
      }
      sallyThumbnail: file(
        relativePath: {
          eq: "assets/images/customers/sally/Sally_Hero-full-width@2x.jpg"
        }
      ) {
        ...constrained
      }
      sayerThumbnail: file(
        relativePath: {
          eq: "assets/images/customers/sayer/Sayer-Hero-full-width@2x.jpg"
        }
      ) {
        ...constrained
      }
      shohawkThumbnail: file(
        relativePath: {
          eq: "assets/images/customers/shohawk/ShoHawk-Hero@2x.jpg"
        }
      ) {
        ...constrained
      }
    }
  `)
  const storiesArray = [
    {
      id: 'greg',
      name: 'Greg',
      title: 'Greg’s Story',
      overlayText: 'Artists & Educators',
      link: '/customers/greg',
      imageSrc: getImage(images.gregThumbnail),
      imageAltText: 'Greg - Artist & Educator',
    },
    {
      id: 'kate',
      name: 'Kate',
      title: 'Kate’s Story',
      overlayText: 'Consultants',
      link: '/customers/kate',
      imageSrc: getImage(images.kateThumbnail),
      imageAltText: 'Kate - Consultants',
    },
    {
      id: 'fsc',
      name: 'FSC',
      title: 'FSC’s Story',
      overlayText: 'Teams & Non-Profits',
      link: '/customers/fsc',
      imageSrc: getImage(images.fscThumbnail),
      imageAltText: 'FSC - Teams & Non-Profits',
    },
    {
      id: 'kailei',
      name: 'Kailei',
      title: 'Kailei’s Story',
      overlayText: 'Consultants & Coaches',
      link: '/customers/kailei',
      imageSrc: getImage(images.kaileiThumbnail),
      imageAltText: 'Kailei - Consultants & Coaches',
    },
    {
      id: 'sayer',
      name: 'Sayer',
      title: 'Sayer’s Story',
      overlayText: 'Ecommerce',
      link: '/customers/sayer',
      imageSrc: getImage(images.sayerThumbnail),
      imageAltText: 'Sayer - Ecommerce',
    },
    {
      id: 'sally',
      name: 'Sally',
      title: 'Sally’s Story',
      overlayText: 'Speakers & Coaches',
      link: '/customers/sally',
      imageSrc: getImage(images.sallyThumbnail),
      imageAltText: 'Sally - Speakers & Coaches',
    },
    {
      id: 'jody',
      name: 'Jody',
      title: 'Jody’s Story',
      overlayText: 'Health & Fitness',
      link: '/customers/jody',
      imageSrc: getImage(images.jodyThumbnail),
      imageAltText: 'Jody - Health & Fitness',
    },
    {
      id: 'shohawk',
      name: 'Shohawk',
      title: 'Shohawk’s Story',
      overlayText: 'Film',
      link: '/customers/shohawk',
      imageSrc: getImage(images.shohawkThumbnail),
      imageAltText: 'Shohawk - Film',
    },
  ]
  const rotatorSwiped = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'customerRotatorSwiped',
    })
  }
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
  return (
    <OuterContainer>
      <HeadlineContainer>
        <Headline>Read more Stories</Headline>
      </HeadlineContainer>
      <RotatorContainer>
        {typeof window !== 'undefined' && (
          <SlickRotator {...settings}>
            {storiesArray.map((item, index) => {
              const { name, title, overlayText, link, imageSrc, imageAltText } =
                item
              return (
                <ThumbnailSection key={index}>
                  <StyledLink href={link} alt={imageAltText}>
                    <>
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
                    </>
                  </StyledLink>
                </ThumbnailSection>
              )
            })}
          </SlickRotator>
        )}
      </RotatorContainer>
      <ButtonContainer>
        <StyledLink to="/customers">
          <Button>Back to all Stories</Button>
        </StyledLink>
      </ButtonContainer>
    </OuterContainer>
  )
}

export default CustomerStoriesThumbnailRotator
