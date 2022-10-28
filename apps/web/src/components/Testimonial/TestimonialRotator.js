import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Image from '@components/Image'
import { styled } from '@design'
import { RPImage } from '@legacy/constants/types'
// components
import PaginationDots from '@legacy/components/rotators/PaginationDots'
import ReactSlick from '@legacy/components/rotators/ReactSlick_Base'
import NavigationArrows from '@components/Rotator/NavigationArrows'
// images
import QuotemarkSVG_Gray from '@legacy/assets/images/global/quote-mark_gray_62px@2x.svg'
import QuotemarkSVG_Tan from '@legacy/assets/images/global/quote-mark_tan_62px@2x.svg'

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

const TestimonialRotator = ({ testimonials = [], variant, ...props }) => {
  const [loadSlick, setLoadSlick] = useState(false)
  useEffect(() => setLoadSlick(true), [])

  const settings = {
    appendDots: (dots) => <PaginationDots dots={dots} margin="1rem 0 0 0" />,
    arrows: true,
    autoplay: testimonials.length > 1,
    autoplaySpeed: 10000,
    className: 'item',
    draggable: testimonials.length > 1,
    focusOnSelect: true,
    infinite: testimonials.length > 1,
    lazyload: true,
    pauseOnFocus: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    touchThreshold: 50,
    nextArrow: <NavigationArrows color="white" variant="arrow-right" />,
    prevArrow: <NavigationArrows color="white" variant="arrow-left" />,
  }

  return (
    <OuterContainer variant={variant}>
      <InnerContainer>
        <QuotemarkImage
          variant={variant}
          image={variant === 'gray' ? QuotemarkSVG_Gray : QuotemarkSVG_Tan}
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

TestimonialRotator.defaultProps = {
  variant: 'tan',
}

TestimonialRotator.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      image: RPImage.isRequired,
      clientName: PropTypes.string.isRequired,
      clientTitle: PropTypes.string.isRequired,
    })
  ),
  variant: PropTypes.oneOf(['gray', 'tan']),
}

export default TestimonialRotator
