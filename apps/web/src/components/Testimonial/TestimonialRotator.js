import React, { useState, useEffect } from 'react'
import Image from '@components/Image'
import { styled } from '@design'
import { m as motion } from 'framer-motion'
import {
  group,
  viewport,
  item as framerItem,
  transition,
} from '@design/tokens/framerTokens'
// components
import PaginationDots from '@legacy/components/rotators/PaginationDots'
import ReactSlick from '@legacy/components/rotators/ReactSlick_Base'
import NavigationArrows from '@components/Rotator/NavigationArrows'
// images
import QuotemarkSvgGray from '@legacy/assets/images/global/quote-mark_gray_62px@2x.svg'
import QuotemarkSvgTan from '@legacy/assets/images/global/quote-mark_tan_62px@2x.svg'
import QuotemarkLavender from '@legacy/assets/images/global/quote-mark_lavender_light.svg'
import Quotes from './Quotes'
import Ratings from './Ratings'

const OuterContainer = styled('div', {
  position: 'relative',
  z: 4,
  overflowX: 'hidden',

  variants: {
    variant: {
      white: {
        bc: '$white',
      },
      gray: {
        bc: '$background',
      },
      tan: {
        bc: '$backgroundAlt',
      },
    },
  },
})

const InnerContainer = styled(motion.div, {
  ml: 'auto',
  mr: 'auto',
  mw: '1140px',
  pt: '3rem',
  pb: '4rem',
  position: 'relative',

  '@>s': {
    w: '70%',
  },

  variants: {
    includeRating: {
      true: {
        mw: '100%',
        mx: '$4_5',

        '@>s': {
          w: '70%',
          mx: 'auto',
          mw: '1140px',
        },
      },
      false: {
        w: '65%',
      },
    },
  },
})

const QuotemarkImage = styled(Image, {
  w: '64px',
  ml: 'calc((100% - 64px) / 2)',

  variants: {
    variant: {
      gray: {
        opacity: 1,
      },
      tan: {
        opacity: 0.3,
      },
    },
  },
})

const SlickRotator = styled(ReactSlick, {
  position: 'static !important',

  '& .slick-slide > div': {
    mb: '1rem',
  },

  '& .slick-slide > div > div': {
    outline: 'none',
  },
})

const RotatorContainer = styled(motion.div, {})

const $Ratings = styled(motion.div, {})

const Quote = styled('h4', {
  w: '90%',
  m: '2rem auto',
  c: '$textAlt',
  lineHeight: '36px',
  ta: 'center',
  fontFamily: '$base',
  fontWeight: '$normal',

  '@<s': {
    w: '100%',
    lineHeight: '$l',
  },
})

const $Quote = styled(motion.div, {})

const StyledImage = styled(Image, {
  maxHeight: '60px',
  mw: '60px',
  m: '5px auto',
  ml: 'calc((100% - 60px) / 2))',
})

const $Image = styled(motion.div, {})

const ClientName = styled(motion.p, {
  c: '$text',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '24px',
  ta: 'center',
  mb: 0,
})

const ClientTitle = styled(motion.p, {
  c: '$textAlt',
  fontSize: '14px',
  lineHeight: '20px',
  ta: 'center',
})

const $SlideContent = styled(motion.div, {
  variants: {
    includeRating: {
      true: {
        maxWidth: '54.5rem',
        mx: 'auto',

        [`${Quote}`]: {
          mx: 0,
          width: '100%',
          my: '$3',
          lineHeight: '1.6',
        },

        [`${StyledImage}`]: {
          my: '$3',
        },

        [`${ClientName}`]: {
          my: '0.375rem',
          typeSizes: 'buttonSm',
          fontWeight: '400',
          lineHeight: '1.5',
        },

        [`${ClientTitle}`]: {
          typeSizes: 'xs',
          textTransform: 'none',
          letterSpacing: 'unset',
          lineHeight: '1.5',
        },
      },
    },
  },
})

const TestimonialRotator = ({
  testimonials = [],
  variant: background = 'white',
  includeRating = false,
  animate = false,
  quoteColor,
}) => {
  const [loadSlick, setLoadSlick] = useState(false)
  useEffect(() => setLoadSlick(true), [])

  const hasMultiple = testimonials.length > 1

  const quote = Quotes[quoteColor]
  const quoteImage =
    quote ||
    {
      gray: QuotemarkSvgGray,
      tan: QuotemarkSvgTan,
      white: QuotemarkLavender,
    }[background]

  const settings = {
    appendDots: (dots) => <PaginationDots dots={dots} margin="1rem 0 0 0" />,
    arrows: true,
    autoplaySpeed: 10000,
    className: 'item',
    focusOnSelect: true,
    lazyload: true,
    pauseOnFocus: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    touchThreshold: 50,
    nextArrow: (
      <NavigationArrows
        color="white"
        variant="arrow-right"
        css={includeRating && { mr: '$4', '@>s': { m: 0 } }}
      />
    ),
    prevArrow: (
      <NavigationArrows
        color="white"
        variant="arrow-left"
        css={includeRating && { ml: '$4', '@>s': { m: 0 } }}
      />
    ),
    autoplay: hasMultiple,
    draggable: hasMultiple,
    infinite: hasMultiple,
  }

  return (
    <OuterContainer variant={background}>
      <InnerContainer includeRating={includeRating}>
        {!includeRating && (
          <QuotemarkImage variant={quoteImage} image={quoteImage} />
        )}
        <RotatorContainer>
          {loadSlick && (
            <SlickRotator {...settings}>
              {testimonials.map((item, index) => {
                const { testimonial, image, authorName, authorTitle, rating } =
                  item
                return (
                  <div key={index}>
                    <$SlideContent
                      includeRating={includeRating}
                      variants={animate && group}
                      initial={animate && 'hidden'}
                      whileInView={animate && 'visible'}
                      viewport={animate && viewport}
                    >
                      {includeRating && rating && (
                        <$Ratings variants={framerItem} transition={transition}>
                          <Ratings rating={rating} />
                        </$Ratings>
                      )}
                      <$Quote variants={framerItem} transition={transition}>
                        <Quote as="h6">{testimonial}</Quote>
                      </$Quote>
                      <$Image variants={framerItem} transition={transition}>
                        <StyledImage image={image} />
                      </$Image>
                      <ClientName variants={framerItem} transition={transition}>
                        {authorName}
                      </ClientName>
                      <ClientTitle
                        variants={framerItem}
                        transition={transition}
                      >
                        {authorTitle}
                      </ClientTitle>
                    </$SlideContent>
                  </div>
                )
              })}
            </SlickRotator>
          )}
        </RotatorContainer>
      </InnerContainer>
    </OuterContainer>
  )
}

export default TestimonialRotator
