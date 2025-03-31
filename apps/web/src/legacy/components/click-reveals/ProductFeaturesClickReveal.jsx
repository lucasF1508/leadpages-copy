import React, { useState, useEffect } from 'react'
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

  variants: {
    imageSide: {
      right: { overflow: 'hidden' },
    },
  },
})

const InnerContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  maxWidth: '1140px',
  mx: 'auto',
  padding: '0 6rem',

  variants: {
    imageSide: {
      left: {
        flexFlow: 'row nowrap',
      },
      right: {
        flexFlow: 'row-reverse nowrap',
      },
    },
  },
})

const BackgroundImage = styled('img', {
  position: 'absolute',
  width: '560px',
  top: '-10%',

  variants: {
    imageSide: {
      left: {
        left: '-20%',
      },
      right: {
        right: '-20%',
      },
    },
  },
})

const FlexSide_Image = styled('div', {
  width: '60%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  '@media (min-width: 769px) and (max-width: 1023px)': {
    width: '170%',
  },

  variants: {
    imageSide: {
      left: {
        marginRight: '2rem',
      },
      right: {
        marginLeft: '2rem',
      },
    },
  },
})

const ImageContent = styled('div', {
  width: '100%',
  maxWidth: '623px',
  position: 'relative',
})

const RevealImageAnimation = keyframes(fadeIn)

const RevealImage = styled(Image, {
  width: '100%',
  animation: `0.5s ${RevealImageAnimation}`,
  overflow: 'visible',
})

const FlexSide_Cards = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  '@media (min-width: 1024px)': {
    minWidth: '400px',
    maxWidth: '400px',
  },

  '@media (min-width: 1200px)': {
    minWidth: '450px',
    maxWidth: '450px',
  },
})

const CardHolder = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
})

const CardContent = styled('div', {
  padding: '0 1.5rem',
  height: '100%',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

const CardHead = styled('div', {
  width: '100%',
  height: '1.5rem',
  my: '1.5rem',
  position: 'relative',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

const CardTitle = styled('div', {
  fontSize: '16px',
  fontWeight: 500,
  letterSpacing: 0,
  lineHeight: '24px',
  color: '$textAlt',
  marginRight: '22px',
  transition: 'all 0.1s ease',
})

const ArrowDownImg = styled('img', {
  height: '12px',
  width: '12px',
  position: 'absolute',
  right: '-8px',
  filter: `brightness(0) saturate(100%) invert(33%) sepia(5%) saturate(327%)
    hue-rotate(341deg) brightness(92%) contrast(88%)`,
  transition: 'all 0.1s ease',
})

const ArrowDownImgAnimation = keyframes(fadeOut)

const CardText = styled('div', {
  marginBottom: '1.5rem',
  marginRight: '-1rem',
  paddingRight: '1rem',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
  letterSpacing: 0,
})

const Card = styled('div', {
  position: 'relative',
  width: '100%',
  marginBottom: '12px',
  backgroundColor: '$white',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  '&.activecard': {
    zIndex: 1,
    boxShadow: `0 6px 16px 0 rgba(15, 12, 9, 0.08),
      0 12px 32px 0 rgba(15, 12, 9, 0.12)`,

    [`${CardTitle}`]: {
      color: '$text',
    },

    [`${ArrowDownImg}`]: {
      opacity: 0,
      animation: `0.3s ${ArrowDownImgAnimation}`,
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

  '&:hover': {
    [`${CardTitle}`]: {
      color: '$primary',
    },

    [`${ArrowDownImg}`]: {
      filter: `brightness(0) saturate(100%) invert(23%) sepia(88%)
        saturate(2568%) hue-rotate(243deg) brightness(100%) contrast(111%)`,
    },
  },
})

const ArrowRightImg = styled('img', {
  height: '12px',
  width: '12px',
  marginLeft: '8px',
  marginBottom: '-1px',
  transition: 'all 0.1s ease',
  filter: `brightness(0) saturate(100%) invert(23%) sepia(48%) saturate(6317%)
    hue-rotate(247deg) brightness(104%) contrast(105%)`,
})

const OutboundLink = styled('a', {
  alignSelf: 'flex-start',
  fontWeight: 500,
  textAlign: 'left',
  color: '$primary',
  transition: 'all 0.1s ease',

  '&:hover': {
    color: '$indigoDark',

    [`${ArrowRightImg}`]: {
      filter: `brightness(0) saturate(100%) invert(25%) sepia(83%)
        saturate(2477%) hue-rotate(242deg) brightness(77%) contrast(109%)`,
    },
  },
})

const ProductFeaturesClickReveal = ({
  animations,
  backgroundImage,
  innerContainerMinHeight,
  instanceId,
  itemArray,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeCardHeight, setActiveCardHeight] = useState(0)
  const [cardHolderHeight, setCardHolderHeight] = useState(0)
  const [shouldAutoplay, setShouldAutoplay] = useState(true)
  const [activeItem, setActiveItem] = useState(itemArray[0])

  const handleCardClick = (index) => {
    setShouldAutoplay(false)
    setActiveIndex(index)
  }

  useEffect(() => {
    let rotateCards

    if (!shouldAutoplay) {
      clearInterval(rotateCards)
    } else {
      rotateCards = setInterval(() => {
        setActiveIndex((activeIndex) =>
          activeIndex === itemArray.length - 1
            ? (activeIndex = 0)
            : activeIndex + 1
        )
      }, 5000)
    }

    return () => clearInterval(rotateCards)
  }, [shouldAutoplay])

  useEffect(() => {
    // this calculation is needed to make the height transition work because css does not allow transitions on auto-sized elements (https://css-tricks.com/using-css-transitions-auto-dimensions/)

    // get height of largest CardText element
    const cardTextElementsHeightArray = [].slice
      .call(document.getElementsByClassName(`${instanceId}_cardtext`))
      .map((el) => el.getBoundingClientRect().height)
    const largestCardTextHeight = Math.max(...cardTextElementsHeightArray)

    // calculate/set min-height of &.active Card
    const cardHeadHeight = 72
    const cardBodyMargin = 32
    const calculatedActiveCardHeight =
      cardHeadHeight + cardBodyMargin + largestCardTextHeight
    setActiveCardHeight(calculatedActiveCardHeight)

    // calculate/set height of CardHolder
    const numberOfCards = itemArray.length
    const inactiveCardHeight = 72
    const cardMargin = 12
    const calculatedCardHolderHeight =
      cardMargin * numberOfCards +
      inactiveCardHeight * (numberOfCards - 1) +
      calculatedActiveCardHeight
    setCardHolderHeight(calculatedCardHolderHeight)
  }, [])

  useEffect(() => setActiveItem(itemArray[activeIndex]), [activeIndex])

  const innerContainerMinHeightValue = `${innerContainerMinHeight}px`
  const cardHolderHeightValue = `${cardHolderHeight}px`
  const activeCardHeightValue = `${activeCardHeight}px`

  return (
    <OuterContainer {...props}>
      <InnerContainer
        {...props}
        css={{ minHeight: innerContainerMinHeightValue }}
      >
        <BackgroundImage
          {...props}
          src={backgroundImage.src}
          alt="background shape svg"
        />
        <FlexSide_Image {...props}>
          <ImageContent>
            {!animations ? (
              <RevealImage
                key={activeItem.title}
                image={activeItem.image}
                alt={activeItem.title}
                imgStyle={{ objectFit: 'contain' }}
              />
            ) : (
              <div>{activeItem.animation}</div>
            )}
          </ImageContent>
        </FlexSide_Image>
        <FlexSide_Cards>
          <CardHolder css={{ height: cardHolderHeightValue }}>
            {itemArray.map(({ title, text, link }, index) => (
              <Card
                key={title}
                onClick={() => handleCardClick(index)}
                className={`${
                  activeIndex === index ? 'activecard' : 'inactivecard'
                } `}
                css={
                  activeIndex === index
                    ? { minHeight: activeCardHeightValue }
                    : { minHeight: '72px' }
                }
              >
                <CardContent>
                  <CardHead>
                    <CardTitle>{title}</CardTitle>
                    <ArrowDownImg
                      src={ArrowDownSVG.src}
                      alt="down arrow icon"
                    />
                  </CardHead>
                  <CardText className={`${instanceId}_cardtext`}>
                    {text}
                    {link && (
                      <>
                        <br />
                        <br />
                        <Link href={link.route} passHref legacyBehavior>
                          <OutboundLink aria-label={link.altText}>
                            {link.text}
                            <ArrowRightImg
                              src={ArrowRightSVG.src}
                              alt="right arrow icon"
                            />
                          </OutboundLink>
                        </Link>
                      </>
                    )}
                  </CardText>
                </CardContent>
              </Card>
            ))}
          </CardHolder>
        </FlexSide_Cards>
      </InnerContainer>
    </OuterContainer>
  )
}

ProductFeaturesClickReveal.defaultProps = {
  animations: false,
  innerContainerMinHeight: 550,
  instanceId: 'first',
}

ProductFeaturesClickReveal.propTypes = {
  animations: PropTypes.bool,
  backgroundImage: PropTypes.string.isRequired,
  imageSide: PropTypes.oneOf(['left', 'right']).isRequired,
  innerContainerMinHeight: PropTypes.number,
  instanceId: PropTypes.string,
  itemArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: Image,
      animation: PropTypes.node,
      link: PropTypes.shape({
        text: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
        altText: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
}

export default ProductFeaturesClickReveal
