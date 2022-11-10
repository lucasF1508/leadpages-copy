import React, { useState, useEffect } from 'react'
import Image from '@components/Image'
import { styled } from '@design'
// components
import PaginationDots from '@legacy/components/rotators/PaginationDots'
import ReactSlick from '@legacy/components/rotators/ReactSlick_Base'
import NavigationArrows from '@components/Rotator/NavigationArrows'
// images
import QuotemarkSvgGray from '@legacy/assets/images/global/quote-mark_gray_62px@2x.svg'
import QuotemarkSvgTan from '@legacy/assets/images/global/quote-mark_tan_62px@2x.svg'

const OuterContainer = styled('div', {
  position: 'relative',
  z: 4,
  overflowX: 'hidden',

  variants: {
    variant: {
      gray: {
        bc: '$background',
      },
      tan: {
        bc: '$backgroundAlt',
      },
    },
  },
})

const InnerContainer = styled('div', {
  w: '65%',
  ml: 'auto',
  mr: 'auto',
  mw: '1140px',
  pt: '3rem',
  pb: '4rem',
  position: 'relative',

  '@>s': {
    w: '70%',
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

const RotatorContainer = styled('div', {})

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

const StyledImage = styled(Image, {
  maxHeight: '60px',
  mw: '60px',
  m: '5px auto',
  ml: 'calc((100% - 60px) / 2))',
})

const ClientName = styled('p', {
  c: '$text',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '24px',
  ta: 'center',
  mb: 0,
})

const ClientTitle = styled('p', {
  c: '$textAlt',
  fontSize: '14px',
  lineHeight: '20px',
  ta: 'center',
})

const TestimonialRotator = ({ testimonials = [], variant = 'tan' }) => {
  const [loadSlick, setLoadSlick] = useState(false)
  useEffect(() => setLoadSlick(true), [])

  const hasMultiple = testimonials.length > 1

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
    nextArrow: <NavigationArrows color="white" variant="arrow-right" />,
    prevArrow: <NavigationArrows color="white" variant="arrow-left" />,
    autoplay: hasMultiple,
    draggable: hasMultiple,
    infinite: hasMultiple,
  }

  return (
    <OuterContainer variant={variant}>
      <InnerContainer>
        <QuotemarkImage
          variant={variant}
          image={variant === 'gray' ? QuotemarkSvgGray : QuotemarkSvgTan}
        />
        <RotatorContainer>
          {loadSlick && (
            <SlickRotator {...settings}>
              {testimonials.map((item, index) => {
                const { testimonial, image, authorName, authorTitle } = item
                return (
                  <div key={index}>
                    <Quote as="h6">{testimonial}</Quote>
                    <StyledImage image={image} />
                    <ClientName>{authorName}</ClientName>
                    <ClientTitle>{authorTitle}</ClientTitle>
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
