import React, { useState, useEffect } from 'react'
import { styled } from '@design'
import { AnimatePresence, m } from 'framer-motion'
import Image from '@components/Image'
import Media from '@components/Media'
import Link from '@components/Link'
import ContentGroup from '@components/ContentGroup'

// images
import ArrowDownSVG from '@legacy/assets/images/global/arrow_down_small.svg'
import ArrowRightSVG from '@legacy/assets/images/global/arrow_right_purple.svg'

const OuterContainer = styled('div', {
  width: '100%',
})

const InnerContainer = styled('div', {
  maxWidth: '1098px',
  mx: 'auto',
})

const Flexbox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',

  variants: {
    align: {
      left: { flexFlow: 'row nowrap' },
      right: { flexFlow: 'row-reverse nowrap' },
    },
  },
})

const FlexLeft = styled('div', {
  variants: {
    tabWidth: {
      narrow: { flex: '1 0 330px' },
      wide: { flex: '1 0 450px' },
    },
  },
})

const FlexRight = styled('div', {
  display: 'flex',
  alignItems: 'center',
  transition: 'height 0.1s ease',

  variants: {
    tabWidth: {
      narrow: { width: 'calc(100% - 330px)' },
      wide: { width: 'calc(100% - 450px)' },
    },
    align: {
      left: { ml: '$6' },
      right: { mr: '$6' },
    },
  },
})

const FlexRightContent = styled('div', {
  width: '100%',
})

const CardTitle = styled('div', {
  fontWeight: 500,
  lineHeight: '24px',
  typeSizes: 'xl',
  color: '$text',
  transition: 'color 0.3s ease',

  variants: {
    tabWidth: {
      wide: {
        fontSize: '18px',

        '@>m': {
          fontSize: '16px',
        },
      },
    },
  },
})

const CardHeadArrowSVG = styled('img', {
  height: '12px',
  width: '12px',
  position: 'absolute',
  right: 0,
})

const Card = styled(m.div, {
  position: 'relative',
  height: '96px',
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
    height: 'auto',
    boxShadow: `0 6px 12px 0 rgba(15, 12, 9, 0.1),
      0 12px 24px 0 rgba(15, 12, 9, 0.15)`,
  },

  '&.inactivecard': {
    boxShadow: `0 0 2px 0 rgba(15, 12, 9, 0.04),
      0 2px 4px 0 rgba(15, 12, 9, 0.08)`,
    height: '96px',

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
  mx: '0.5rem',
})

const CardHead = styled('div', {
  width: '100%',
  height: '48px',
  marginTop: '24px',
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
  width: '100%',
  marginTop: '1.5rem',
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
  marginTop: '1.5rem',
})

const CardLinkArrowSVG = styled('img', {
  height: '12px',
  width: '12px',
  top: '1px',
  cursor: 'pointer',
})

const CardLink = styled(Link, {
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  color: '$primary',
  position: 'unset',
  gap: '$0_5',

  '&:hover': {
    color: '$indigoDark',

    [`${CardLinkArrowSVG}`]: {
      filter: `brightness(0) saturate(100%) invert(18%) sepia(100%)
        saturate(5178%) hue-rotate(252deg) brightness(83%) contrast(90%)`,
    },
  },
})

const $LinkContainer = styled('div', {
  w: '100%',
  ta: 'center',
  mt: '$4_5',

  '& a': {
    h: 'unset',
    minWidth: 'unset',
    p: '$1_5 $3',
    gcg: '0.625rem',
  },
})

const RevealMedia = styled(Media, {})

const RevealImage = styled(Image, {})

const $AnimatedMedia = styled(m.div, {})

const TabsRevealAlt = ({
  align = 'left',
  autoplay = false,
  animate: animateLeadingText = false,
  tabWidth = 'narrow',
  items,
  heading,
  content,
  link,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [shouldAutoplay, setShouldAutoplay] = useState(autoplay)

  const handleCardClick = (index) => {
    if (activeIndex === index) return
    setShouldAutoplay(false)
    setActiveIndex(index)
  }

  useEffect(() => {
    let rotateCards

    if (!shouldAutoplay) {
      clearInterval(rotateCards)
    } else {
      rotateCards = setInterval(() => {
        setActiveIndex((index) => (index === items.length - 1 ? 0 : index + 1))
      }, 5000)
    }

    return () => clearInterval(rotateCards)
  }, [shouldAutoplay])

  return (
    <OuterContainer>
      <InnerContainer>
        {(heading || content) && (
          <ContentGroup
            heading={heading}
            content={content}
            animate={animateLeadingText}
            css={{
              heading: { fontSize: '2.5rem' },
              content: {
                '&:last-child': { mb: 0 },
                typeSizes: 'xl',
                lineHeight: '1.4em',
              },
              mb: '$6',
            }}
          />
        )}
        <Flexbox align={align}>
          <FlexLeft tabWidth={tabWidth}>
            {items.map(
              (
                { title, content: _content, icon, iconAltText, link: _link },
                index
              ) => (
                <Card
                  key={title}
                  onClick={() => handleCardClick(index)}
                  className={
                    activeIndex === index ? 'activecard' : 'inactivecard'
                  }
                  initial={{
                    height: activeIndex === index ? 'auto' : '96px',
                  }}
                  animate={{
                    height: activeIndex !== index ? '96px' : 'auto',
                    transition: { duration: 0.3 },
                  }}
                >
                  <CardContent>
                    <CardHead>
                      <CardIconSVG image={icon} alt={iconAltText}></CardIconSVG>
                      <CardTitle
                        tabWidth={tabWidth}
                        css={icon ? { ml: '1rem' } : undefined}
                      >
                        {title}
                      </CardTitle>
                      <CardHeadArrowSVG
                        src={ArrowDownSVG.src}
                        alt="arrow icon"
                        css={{
                          transform:
                            activeIndex === index
                              ? 'rotate(180deg)'
                              : 'rotate(0deg)',
                          transition: 'transform 0.3s ease-in-out',
                        }}
                      />
                    </CardHead>
                    <CardBody>
                      <CardText>{_content}</CardText>
                      {_link?.condition && _link.label && (
                        <CardLinkHolder>
                          <CardLink {..._link} aria-label={''}>
                            {`${_link.label} `}
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
          </FlexLeft>
          <FlexRight align={align} tabWidth={tabWidth}>
            <FlexRightContent>
              <AnimatePresence initial={false} mode="wait">
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
            </FlexRightContent>
          </FlexRight>
        </Flexbox>
        {link && (
          <$LinkContainer>
            <Link {...link} />
          </$LinkContainer>
        )}
      </InnerContainer>
    </OuterContainer>
  )
}

export default TabsRevealAlt
