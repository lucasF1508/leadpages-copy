import React from 'react'
import PropTypes from 'prop-types'
import Image from '@components/Image'
import styled from 'styled-components'
// components
import PaginationDots from './PaginationDots'
import ReactSlick from './ReactSlick_Base'
// images
import QuotemarkSVG_Gray from '../../assets/images/global/quote-mark_gray_62px@2x.svg'
import QuotemarkSVG_Tan from '../../assets/images/global/quote-mark_tan_62px@2x.svg'

const VARIANTS = {
  gray: {
    backgroundColor: '#f9f9f9',
    quotemarkImage: QuotemarkSVG_Gray,
    opacity: 1,
  },
  tan: {
    backgroundColor: '#fef9f1',
    quotemarkImage: QuotemarkSVG_Tan,
    opacity: 0.3,
  },
}

const OuterContainer = styled.div`
  position: relative;
  z-index: 4;
  background-color: ${(props) => VARIANTS[props.variant].backgroundColor};
  overflow-x: hidden;
`

const InnerContainer = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  padding-top: 3rem;
  padding-bottom: 4rem;
  @media (max-width: 1023px) {
    width: 80%;
  }
`

const QuotemarkImage = styled(Image)`
  width: 64px;
  opacity: ${(props) => VARIANTS[props.variant].opacity};
  margin-left: calc((100% - 64px) / 2);
`

const SlickRotator = styled(ReactSlick)`
  .slick-slide > div {
    margin-bottom: 1rem;
  }
  .slick-slide > div > div {
    outline: none;
  }
`

const RotatorContainer = styled.div``

const Quote = styled.h4`
  width: 90%;
  margin: 2rem auto;
  color: #575452;
  font-size: 22px;
  line-height: 36px;
  text-align: center;
  @media (max-width: 576px) {
    width: 100%;
  }
`

const StyledImage = styled(Image)`
  max-height: 60px;
  max-width: 60px;
  margin: 5px auto;
  margin-left: calc((100% - 60px) / 2);
`

const ClientName = styled.p`
  color: #0f0c09;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`

const ClientTitle = styled.p`
  color: #575452;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`

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
          image={VARIANTS[variant].quotemarkImage}
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
      image: Image.isRequired,
      clientName: PropTypes.string.isRequired,
      clientTitle: PropTypes.string.isRequired,
    })
  ),
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
}

export default QuoteTestimonialsRotator
