import React, { useState } from 'react'
import { styled, keyframes } from '@design'
import PropTypes from 'prop-types'
import Image from '@components/Image'
import Link from 'next/link'
import { fadeIn, fadeOut } from 'react-animations'
// images
import ArrowDownSVG from '@legacy/assets/images/global/arrow_down_small.svg'
import ArrowRightSVG from '@legacy/assets/images/global/arrow_right_purple.svg'

const OuterContainer = styled('div', {
  width: '100%',
})

const InnerContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  padding: '0 3rem',
})

const Flexbox = styled('div', {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  width: '100%',
})

const FlexLeft = styled('div', {
  marginTop: '48px',
  width: '345px',
})

const FlexRight = styled('div', {
  width: 'calc(100% - 345px)',
  height: '590px',
  marginLeft: '3rem',
  display: 'flex',
  alignItems: 'center',

  '&.nullstate': {
    height: '410px',
  },

  transition: 'height 0.1s ease',
})

const FlexRightContent = styled('div', {
  width: '100%',
})

const CardTitle = styled('div', {
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '24px',
  color: '$text',
  marginLeft: '1rem',
})

const CardHeadArrowSVG = styled('img', {
  height: '12px',
  width: '12px',
  position: 'absolute',
  right: 0,
})

const CardHeadArrowSVGAnimation = keyframes(fadeOut)

const Card = styled('div', {
  transition: 'all 0.3s ease',
  position: 'relative',
  height: '72px',
  maxWidth: '100%',
  marginBottom: '12px',
  backgroundColor: '$white',
  cursor: 'pointer',
  overflow: 'hidden',

  '&:hover': {
    [`${CardTitle}`]: {
      color: '$primary',
    },

    [`${CardHeadArrowSVG}`]: {
      filter: `brightness(0) saturate(100%) invert(23%) sepia(88%)
        saturate(2568%) hue-rotate(243deg) brightness(100%) contrast(111%)`,
    },
  },

  '&.activecard': {
    zIndex: 1,
    height: '240px',
    boxShadow: `0 6px 12px 0 rgba(15, 12, 9, 0.3),
      0 12px 24px 0 rgba(15, 12, 9, 0.15)`,

    [`${CardHeadArrowSVG}`]: {
      opacity: 0,
      animation: `0.3s ${CardHeadArrowSVGAnimation}`,
    },
  },

  '&.inactivecard': {
    boxShadow: `0 0 2px 0 rgba(15, 12, 9, 0.04),
      0 2px 4px 0 rgba(15, 12, 9, 0.08)`,
    height: '72px',

    '&:hover': {
      zIndex: 1,
      boxShadow: `0 4px 8px 0 rgba(15, 12, 9, 0.04),
        0 10px 20px 0 rgba(15, 12, 9, 0.08)`,
    },
  },
})

const CardContent = styled('div', {
  padding: '0 1rem',
  height: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  marginLeft: '0.5rem',
})

const CardHead = styled('div', {
  width: '100%',
  height: '30px',
  marginTop: '22px',
  position: 'relative',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

const CardIconSVG = styled('img', {
  maxHeight: '30px',
  maxWidth: '24px',
})

const CardBody = styled('div', {
  width: '100%',
  marginTop: '1.5rem',
  marginBottom: '1rem',
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
  alignItems: 'center',
})

const CardLinkArrowSVG = styled('img', {
  height: '12px',
  width: '12px',
  position: 'absolute',
  top: '1px',
  marginLeft: '3px',
  cursor: 'pointer',
})

const CardLink = styled('a', {
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  color: '$primary',
  position: 'unset',

  '&:hover': {
    color: '$indigoDark',

    [`${CardLinkArrowSVG}`]: {
      filter: `brightness(0) saturate(100%) invert(18%) sepia(100%)
        saturate(5178%) hue-rotate(252deg) brightness(83%) contrast(90%)`,
    },
  },
})

const RevealImageAnimation = keyframes(fadeIn)

const RevealImage = styled(Image, {
  width: '100%',
  animation: `0.5s ${RevealImageAnimation}`,
})

const ProductToolkitClickReveal = ({ itemArray }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleCardClick = (index) => {
    if (activeIndex === index) return

    setActiveIndex(index)
  }

  return (
    <OuterContainer>
      <InnerContainer>
        <Flexbox>
          <FlexLeft>
            {itemArray.map(
              (
                {
                  title,
                  text,
                  icon,
                  iconAltText,
                  linkText,
                  linkRoute,
                  linkAltText,
                },
                index
              ) => (
                <Card
                  key={title}
                  onClick={() => handleCardClick(index)}
                  className={
                    activeIndex === index ? 'activecard' : 'inactivecard'
                  }
                >
                  <CardContent>
                    <CardHead>
                      <CardIconSVG
                        src={icon.src}
                        alt={iconAltText}
                      ></CardIconSVG>
                      <CardTitle>{title}</CardTitle>
                      <CardHeadArrowSVG
                        src={ArrowDownSVG.src}
                        alt="arrow icon"
                      ></CardHeadArrowSVG>
                    </CardHead>
                    <CardBody>
                      <CardText>{text}</CardText>
                      {linkRoute && (
                        <CardLinkHolder>
                          <Link href={linkRoute} passHref>
                            <CardLink aria-label={linkAltText}>
                              {`${linkText}  `}
                              <CardLinkArrowSVG
                                src={ArrowRightSVG.src}
                                alt="arrow icon"
                              />
                            </CardLink>
                          </Link>
                        </CardLinkHolder>
                      )}
                    </CardBody>
                  </CardContent>
                </Card>
              )
            )}
          </FlexLeft>
          <FlexRight className={activeIndex === null ? 'nullstate' : ''}>
            <FlexRightContent>
              <RevealImage
                key={itemArray[activeIndex].revealImageAltText}
                image={itemArray[activeIndex].revealImage}
                alt={itemArray[activeIndex].revealImageAltText}
              ></RevealImage>
            </FlexRightContent>
          </FlexRight>
        </Flexbox>
      </InnerContainer>
    </OuterContainer>
  )
}

ProductToolkitClickReveal.propTypes = {
  itemArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      iconAltText: PropTypes.string.isRequired,
      linkText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      linkRoute: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      linkAltText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      revealImage: Image.isRequired,
      revealImageAltText: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ProductToolkitClickReveal
