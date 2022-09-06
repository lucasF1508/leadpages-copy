import React from 'react'
import PropTypes from 'prop-types'
import Image from '@components/Image'
import { styled } from '@design'
import { RPImage } from '@legacy/constants/types'
// components
import PaginationDots from './PaginationDots'
import ReactSlick from './ReactSlick_Base'
// images
import QuotemarkSVG_Gray from '../../assets/images/global/quote-mark_gray_62px@2x.svg'
import QuotemarkSVG_Tan from '../../assets/images/global/quote-mark_tan_62px@2x.svg'

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
  w: '70%',
  ml: 'auto',
  mr: 'auto',
  mw: '1140px',
  pt: '3rem',
  pb: '4rem',

  '@media (max-width: 1023px)': {
    w: '80%',
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
  fontSize: '22px',
  lineHeight: '36px',
  ta: 'center',

  '@<s': {
    w: '100%',
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

const QuoteTestimonialsRotator = ({ testimonialsArray, variant }) => {
  const settings = {
    appendDots: (dots) => <PaginationDots dots={dots} margin="1rem 0 0 0" />,
    arrows: false,
    autoplay: testimonialsArray.length > 1,
    autoplaySpeed: 10000,
    className: 'item',
    dots: testimonialsArray.length > 1,
    draggable: testimonialsArray.length > 1,
    focusOnSelect: true,
    infinite: testimonialsArray.length > 1,
    lazyload: true,
    pauseOnFocus: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    touchThreshold: 50,
  }
  return (
    <OuterContainer variant={variant}>
      <InnerContainer>
        <QuotemarkImage
          variant={variant}
          image={variant === 'gray' ? QuotemarkSVG_Gray : QuotemarkSVG_Tan}
        />
        <RotatorContainer>
          {typeof window !== 'undefined' && (
            <SlickRotator {...settings}>
              {testimonialsArray.map((item, index) => {
                const { quote, image, clientName, clientTitle } = item
                return (
                  <div key={index}>
                    <Quote>{quote}</Quote>
                    <StyledImage image={image} />
                    <ClientName>{clientName}</ClientName>
                    <ClientTitle>{clientTitle}</ClientTitle>
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

QuoteTestimonialsRotator.defaultProps = {
  variant: 'tan',
}

QuoteTestimonialsRotator.propTypes = {
  testimonialsArray: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      image: RPImage.isRequired,
      clientName: PropTypes.string.isRequired,
      clientTitle: PropTypes.string.isRequired,
    })
  ),
  variant: PropTypes.oneOf(['gray', 'tan']),
}

export default QuoteTestimonialsRotator
