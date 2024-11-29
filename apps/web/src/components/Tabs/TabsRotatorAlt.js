import React, { useState, useEffect } from 'react'
import { styled, keyframes } from '@design'
import { fadeIn } from 'react-animations'
// components
import Media from '@components/Media'
import Image from '@components/Image'
import Link from '@components/Link'
import PaginationDots from '@legacy/components/rotators/PaginationDots'
import ReactSlick from '@legacy/components/rotators/ReactSlick_Base'
// images
import ArrowRightSVG from '@legacy/assets/images/global/arrow_right_purple.svg'
import { AnimatePresence, m } from 'framer-motion'
import TabsContentGroup from './TabsContentGroup'

const OuterContainer = styled('div', {
  width: '100%',
  overflow: 'visible',
})

const InnerContainer = styled('div', {
  maxWidth: '1098px',
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
  marginBottom: '2.25rem',
})

const FlexTopContent = styled('div', {
  width: '100%',
})

const RevealImageAnimation = keyframes(fadeIn)

const RevealMedia = styled(Media, {
  width: '100%',
  animation: `0.5s ${RevealImageAnimation}`,
})

const RevealImage = styled(Image, {
  width: '100%',
  animation: `0.5s ${RevealImageAnimation}`,
})

const RotatorContainer = styled('div', {
  width: 'auto',
  mx: -24,
})

const CardTitle = styled('div', {
  typeSizes: 'xl',
  fontWeight: 500,
  lineHeight: '24px',
  color: '$text',
})

const SlickRotator = styled(ReactSlick, {
  '.slick-list': {
    overflow: 'visible',
  },

  '.slick-slide > div': {
    margin: '0 6px 2.25rem',
  },
})

const Card = styled('div', {
  width: '100%',
  backgroundColor: '$white',
  cursor: 'pointer',
  py: '$3',

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
})

const CardContent = styled('div', {
  px: '$3',
  height: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  grg: '$3',
})

const CardHead = styled('div', {
  width: '100%',
  height: '48px',
  position: 'relative',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

const CardIconSVG = styled(Image, {
  maxHeight: '48px',
  maxWidth: '48px',
})

const CardBody = styled('div', {
  typeSizes: 'base',
  width: '100%',
  fontWeight: 400,
  lineHeight: '1.5em',
})

const CardText = styled('div', {
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
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

const $AnimatedMedia = styled(m.div, {})

const TabsRotatorAlt = ({
  items,
  autoplay = false,
  loop = false,
  heading,
  content,
  animate: animateLeadingText = false,
  link: _link,
  links,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardContentHeight, setCardContentHeight] = useState(0)
  const link = links?.[0] || _link

  const [loadSlick, setLoadSlick] = useState(false)
  useEffect(() => setLoadSlick(true), [])

  useEffect(() => {
    // get height of largest CardContent element
    const cardContentElementsHeightArray = [].slice
      .call(document.getElementsByClassName('cardcontent'))
      .map((el) => el.getBoundingClientRect().height)
    const largestCardContentHeight = Math.max(...cardContentElementsHeightArray)
    setCardContentHeight(largestCardContentHeight)
  })

  const settings = {
    appendDots: (dots) => <PaginationDots dots={dots} margin="-0.5rem 0 0 0" />,
    arrows: false,
    autoplay: autoplay && true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '24px',
    className: 'center',
    dots: true,
    draggable: true,
    focusOnSelect: true,
    infinite: loop && true,
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
        <TabsContentGroup
          heading={heading}
          content={content}
          animate={animateLeadingText}
          link={link}
          css={{
            heading: { typeSizes: '4xl' },
            content: {
              '&:last-child': { mb: 0 },
              typeSizes: 'lg',
              lineHeight: '1.6em',
            },
          }}
        />
        <Flexbox>
          <FlexTop className={activeIndex === null ? 'nullstate' : ''}>
            <FlexTopContent>
              <AnimatePresence mode="wait" initial={false}>
                {items[activeIndex].media ? (
                  <$AnimatedMedia
                    key={`cardMedia-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                    exit={{ opacity: 0 }}
                  >
                    <RevealMedia
                      key={items[activeIndex].media?._key}
                      media={{ ...items[activeIndex].media }}
                    />
                  </$AnimatedMedia>
                ) : (
                  <$AnimatedMedia
                    key={`cardMedia-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                    exit={{ opacity: 0 }}
                  >
                    <RevealImage
                      key={items[activeIndex].image?.asset?._id}
                      image={{ ...items[activeIndex].image }}
                    />
                  </$AnimatedMedia>
                )}
              </AnimatePresence>
            </FlexTopContent>
          </FlexTop>
        </Flexbox>
      </InnerContainer>
      <RotatorContainer>
        {loadSlick && (
          <SlickRotator {...settings}>
            {items.map(
              (
                { title, content: _content, icon, iconAltText, link: itemLink },
                index
              ) => (
                <Card
                  key={title}
                  className={
                    activeIndex === index ? 'activecard' : 'inactivecard'
                  }
                >
                  <CardContent
                    className="cardcontent"
                    style={{ minHeight: `${cardContentHeight}px` }}
                  >
                    <CardHead>
                      <CardIconSVG image={icon} alt={iconAltText}></CardIconSVG>
                      <CardTitle css={icon ? { ml: '$1_5' } : undefined}>
                        {title}
                      </CardTitle>
                    </CardHead>
                    <CardBody>
                      <CardText>{_content}</CardText>
                      {itemLink?.condition && itemLink.label && (
                        <CardLinkHolder>
                          <CardLink {...itemLink} aria-label={''}>
                            <span>{`${itemLink.label}  `}</span>
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
              )
            )}
          </SlickRotator>
        )}
      </RotatorContainer>
    </OuterContainer>
  )
}

export default TabsRotatorAlt
