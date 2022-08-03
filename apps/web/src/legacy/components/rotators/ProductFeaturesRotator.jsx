import React, { useState, useEffect } from 'react'
import { styled, keyframes } from '@design'
import PropTypes from 'prop-types'
import Image from '@components/Image'
import Link from 'next/link'
import { fadeIn } from 'react-animations'
// components
import PaginationDots from '@legacy/components/rotators/PaginationDots'
import ReactSlick from '@legacy/components/rotators/ReactSlick_Base'
// images
import ArrowRightSVG from '@legacy/assets/images/global/arrow_right_purple.svg'

const OuterContainer = styled('div', {
  width: '100%',
  overflow: 'hidden',
})

const InnerContainer = styled('div', {
  width: '85%',
  maxWidth: '1140px',
  mx: 'auto',
})

const Flexbox = styled('div', {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  width: '100%',
})

const FlexTop = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
})

const FlexTopContent = styled('div', {
  width: '100%',

  '@media (min-width: 768px)': {
    width: '80%',
  },

  '@media (min-width: 900px)': {
    width: '65%',
  },
})

const RevealImageAnimation = keyframes(fadeIn)

const RevealImage = styled(Image, {
  width: '100%',
  animation: `0.5s ${RevealImageAnimation}`,
})

const RotatorContainer = styled('div', {
  width: '100%',
  paddingBottom: '1rem',
})

const CardTitle = styled('div', {
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '24px',
  color: '$text',
})

const SlickRotator = styled(ReactSlick, {
  '.slick-slide > div': {
    margin: '1rem 15px 2.5rem',

    '@media (max-width: 599px)': {
      mx: '10px',
    },
  },
})

const Card = styled('div', {
  width: '100%',
  backgroundColor: '$white',
  cursor: 'pointer',

  '&.activecard': {
    boxShadow:
      '0 6px 16px 0 rgba(15, 12, 9, 0.08), 0 12px 32px 0 rgba(15, 12, 9, 0.12)',
    zIndex: '$content',
  },

  '&.inactivecard': {
    boxShadow:
      '0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08)',

    '&:hover': {
      zIndex: '$content',
      boxShadow:
        '0 4px 8px 0 rgba(15, 12, 9, 0.04), 0 10px 20px 0 rgba(15, 12, 9, 0.08)',
    },
  },
})

const CardContent = styled('div', {
  padding: '0 1rem',
  height: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
})

const CardHead = styled('div', {
  width: '100%',
  height: '30px',
  margin: '21px 0.5rem 0',
  position: 'relative',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

const CardBody = styled('div', {
  width: '100%',
  margin: '1.5rem 0.5rem 1rem',
})

const CardText = styled('div', {
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
  marginBottom: '1.5rem',
})

const CardLinkHolder = styled('div', {
  marginBottom: '0.5rem',
  height: '16px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
})

const CardLinkArrowSVG = styled('img', {
  height: '12px',
  width: '12px',
  position: 'relative',
  marginLeft: '5px',
  cursor: 'pointer',
  filter:
    'brightness(0) saturate(100%) invert(23%) sepia(48%) saturate(6317%) hue-rotate(247deg) brightness(104%) contrast(105%)',
})

const CardLink = styled('a', {
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  width: '100%',
  color: '$primary',
  textDecoration: 'none',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  '&:hover': {
    color: '$indigoDark',

    [`& ${CardLinkArrowSVG}`]: {
      filter:
        'brightness(0) saturate(100%) invert(25%) sepia(83%) saturate(2477%) hue-rotate(242deg) brightness(77%) contrast(109)',
    },
  },
})

const CardLinkExternal = styled('a', {
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  width: '100%',
  color: '$primary',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  '&:hover': {
    color: '$indigoDark',

    [`& ${CardLinkArrowSVG}`]: {
      filter:
        'brightness(0) saturate(100%) invert(25%) sepia(83%) saturate(2477%) hue-rotate(242deg) brightness(77%) contrast(109%)',
    },
  },
})

const ProductFeaturesRotator = ({ animations, instanceId, itemArray }) => {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(Math.random() * itemArray.length)
  )
  const [cardContentHeight, setCardContentHeight] = useState(0)

  useEffect(() => {
    // get height of largest CardContent element
    const cardContentElementsHeightArray = [].slice
      .call(document.getElementsByClassName(`${instanceId}_cardcontent`))
      .map((el) => el.getBoundingClientRect().height)
    const largestCardContentHeight = Math.max(...cardContentElementsHeightArray)
    setCardContentHeight(largestCardContentHeight)
  })

  const settings = {
    appendDots: (dots) => <PaginationDots dots={dots} margin="-0.5rem 0 0 0" />,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '32px',
    className: 'center',
    dots: true,
    draggable: true,
    focusOnSelect: true,
    infinite: true,
    lazyload: true,
    pauseOnFocus: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 300,
    swipeToSlide: true,
    touchThreshold: 50,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          centerPadding: '24px',
        },
      },
    ],
    afterChange: (index) => {
      setActiveIndex(index)
    },
  }

  return (
    <OuterContainer>
      <InnerContainer>
        <Flexbox>
          <FlexTop className={activeIndex === null ? 'nullstate' : ''}>
            <FlexTopContent>
              {animations ? (
                <div>{itemArray[activeIndex].animation}</div>
              ) : (
                <RevealImage
                  key={itemArray[activeIndex].title}
                  image={itemArray[activeIndex].image}
                  alt={itemArray[activeIndex].title}
                />
              )}
            </FlexTopContent>
          </FlexTop>
        </Flexbox>
      </InnerContainer>
      <RotatorContainer>
        {typeof window !== 'undefined' && (
          <SlickRotator {...settings}>
            {itemArray.map(({ title, text, link }, index) => (
              <Card
                key={title}
                className={
                  activeIndex === index ? 'activecard' : 'inactivecard'
                }
              >
                <CardContent
                  className={`${instanceId}_cardcontent`}
                  style={{ minHeight: `${cardContentHeight}px` }}
                >
                  <CardHead>
                    <CardTitle>{title}</CardTitle>
                  </CardHead>
                  <CardBody>
                    <CardText>{text}</CardText>
                    {link && (
                      <CardLinkHolder>
                        {link.external ? (
                          <CardLinkExternal
                            href={link.route}
                            aria-label={link.altText}
                          >
                            <span>{`${link.text}  `}</span>
                            <CardLinkArrowSVG
                              src={ArrowRightSVG.src}
                              alt="arrow icon"
                            />
                          </CardLinkExternal>
                        ) : (
                          <Link href={link.route} passHref>
                            <CardLink aria-label={link.altText}>
                              <span>{`${link.text}  `}</span>
                              <CardLinkArrowSVG
                                src={ArrowRightSVG.src}
                                alt="arrow icon"
                              />
                            </CardLink>
                          </Link>
                        )}
                      </CardLinkHolder>
                    )}
                  </CardBody>
                </CardContent>
              </Card>
            ))}
          </SlickRotator>
        )}
      </RotatorContainer>
    </OuterContainer>
  )
}

ProductFeaturesRotator.defaultProps = {
  animations: false,
  instanceId: 'first',
}

ProductFeaturesRotator.propTypes = {
  animations: PropTypes.bool,
  instanceId: PropTypes.string,
  itemArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: PropTypes.obj,
      animation: PropTypes.node,
      link: PropTypes.shape({
        text: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
        altText: PropTypes.string.isRequired,
        external: PropTypes.bool,
      }),
    })
  ).isRequired,
}

export default ProductFeaturesRotator
