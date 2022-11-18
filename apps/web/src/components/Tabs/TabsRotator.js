import React, { useState, useEffect } from 'react'
import { styled, keyframes } from '@design'
import PropTypes from 'prop-types'
import { fadeIn } from 'react-animations'
import { RPImage } from '@legacy/constants/types'
// components
import Image from '@components/Image'
import Link from '@components/Link'
import PaginationDots from '@legacy/components/rotators/PaginationDots'
import ReactSlick from '@legacy/components/rotators/ReactSlick_Base'
// images
import ArrowRightSVG from '@legacy/assets/images/global/arrow_right_purple.svg'

const OuterContainer = styled('div', {
  width: '100%',
  overflow: 'visible',
})

const InnerContainer = styled('div', {
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
})

const RevealImageAnimation = keyframes(fadeIn)

const RevealImage = styled(Image, {
  width: '100%',
  animation: `0.5s ${RevealImageAnimation}`,
})

const RotatorContainer = styled('div', {
  width: 'auto',
  paddingBottom: '1rem',
  mx: -24,
})

const CardTitle = styled('div', {
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '24px',
  color: '$text',
  marginLeft: '1rem',
})

const SlickRotator = styled(ReactSlick, {
  '.slick-slide > div': {
    margin: '1rem 15px 2.5rem',
  },

  '@media (max-width: 599px)': {
    '.slick-slide > div': {
      margin: '1rem 10px 2.5rem',
    },
  },
})

const Card = styled('div', {
  width: '100%',
  minHeight: '219px',
  backgroundColor: '$white',
  cursor: 'pointer',

  '&.activecard': {
    boxShadow: `0 6px 16px 0 rgba(15, 12, 9, 0.08),
      0 12px 32px 0 rgba(15, 12, 9, 0.12)`,
    zIndex: '$content',
  },

  '&.inactivecard': {
    boxShadow: `0 6px 16px 0 rgba(15, 12, 9, 0.08),
      0 12px 32px 0 rgba(15, 12, 9, 0.12)`,

    '&:hover': {
      zIndex: '$content',
      boxShadow: `0 4px 8px 0 rgba(15, 12, 9, 0.04),
        0 10px 20px 0 rgba(15, 12, 9, 0.08)`,
    },
  },

  '@media (min-width: 521px)': {
    minHeight: '219px',
  },

  '@media (max-width: 520px)': {
    minHeight: '243px',
  },

  '@media (max-width: 401px)': {
    minHeight: '267px',
  },

  '@media (max-width: 355px)': {
    minHeight: '291px',
  },

  '@media (max-width: 330px)': {
    minHeight: '315px',
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

const CardIconSVG = styled(Image, {
  maxHeight: '30px',
  maxWidth: '24px',
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
  marginBottom: '1rem',
  height: '16px',
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
})

const CardLinkArrowSVG = styled('img', {
  height: '12px',
  width: '12px',
  position: 'relative',
  marginLeft: '5px',
  cursor: 'pointer',
})

const CardLink = styled(Link, {
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  width: '100%',
  color: '$primary',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

const ProductToolkitRotator = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const [loadSlick, setLoadSlick] = useState(false)
  useEffect(() => setLoadSlick(true), [])

  const settings = {
    appendDots: (dots) => <PaginationDots dots={dots} margin="-0.5rem 0 0 0" />,
    arrows: false,
    centerMode: true,
    centerPadding: '24px',
    className: 'center',
    dots: true,
    draggable: true,
    focusOnSelect: true,
    infinite: false,
    lazyload: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 300,
    swipeToSlide: true,
    touchThreshold: 50,
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
              <RevealImage
                key={items[activeIndex].image?.asset?._id}
                image={items[activeIndex].image}
                alt={items[activeIndex].revealImageAltText}
              />
            </FlexTopContent>
          </FlexTop>
        </Flexbox>
      </InnerContainer>
      <RotatorContainer>
        {loadSlick && (
          <SlickRotator {...settings}>
            {items.map(({ title, content, icon, iconAltText, link }, index) => (
              <Card
                key={title}
                className={
                  activeIndex === index ? 'activecard' : 'inactivecard'
                }
              >
                <CardContent>
                  <CardHead>
                    <CardIconSVG image={icon} alt={iconAltText}></CardIconSVG>
                    <CardTitle>{title}</CardTitle>
                  </CardHead>
                  <CardBody>
                    <CardText>{content}</CardText>
                    {link && (
                      <CardLinkHolder>
                        <CardLink {...link} aria-label={''}>
                          <span>{`${link.label}  `}</span>
                          <CardLinkArrowSVG
                            src={ArrowRightSVG.src}
                            alt="arrow icon"
                          />
                        </CardLink>
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

ProductToolkitRotator.propTypes = {
  itemArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      iconAltText: PropTypes.string.isRequired,
      linkText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      linkRoute: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      linkAltText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      revealImage: RPImage.isRequired,
      revealImageAltText: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ProductToolkitRotator
