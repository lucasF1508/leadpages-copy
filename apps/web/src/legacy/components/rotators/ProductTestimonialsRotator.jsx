import React from 'react'
import { styled } from '@design'
// components
import Image from '@components/Image'
import PaginationDots from '@legacy/components/rotators/PaginationDots'
import ReactSlick from '@legacy/components/rotators/ReactSlick_Base'
// images
import customer1 from '@legacy/assets/images/testimonials/arlin-godwin.png'
import customer2 from '@legacy/assets/images/testimonials/eddette-steynberg.png'
import customer3 from '@legacy/assets/images/testimonials/jackie-ellis_bw.png'
import customer4 from '@legacy/assets/images/testimonials/ron-collins_close.png'

const TestimonialsContainer = styled('div', {
  paddingTop: '4rem',
  paddingBottom: '3rem',
  px: '6rem',
  background: '$tan',

  '@<s': {
    px: '3rem',
  },
})

const RotatorContainer = styled('div', {
  position: 'relative',
  zIndex: 4,
  maxWidth: '1140px',
  mx: 'auto',
})

const TabSection = styled('div', {
  marginBottom: '10px',
})

const TestimonialsHeader = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '1.875rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '2.25rem',
  marginBottom: '2rem',
  color: '$textHighlight',

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
    textAlign: 'center',
  },
})

const TestimonialsQuote = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '22px',
  lineHeight: '32px',
  marginBottom: '2rem',
  color: '$textAlt',

  '@<s': {
    textAlign: 'center',
  },
})

const TestimonialsName = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  marginBottom: '1rem',
  color: '$text',

  '@<s': {
    textAlign: 'center',
  },
})

const TestimonialsTitle = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '1rem',
  color: '$textAlt',

  '@<s': {
    textAlign: 'center',
  },
})

const FlexRow = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

const FlexRowItem = styled('div', {
  display: 'column',
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  px: '1%',
})

const FlexRowLeft = styled(FlexRowItem, {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',

  '@>s': {
    marginBottom: '2rem',
    flex: '0 0 24%',
    maxWidth: '156px',
    justifyContent: 'flex-end',
  },

  '@>m': {
    marginBottom: 0,
    flex: '0 0 24%',
    maxWidth: '24%',
    textAlign: 'left',
  },
})

const HeaderImgLeft = styled('div', {
  width: '100%',
  maxWidth: '156px',
})

const TestimonialsImageContainer = styled('div', {
  width: '100%',
  maxWidth: '156px',

  '@<s': {
    width: '100%',
    maxWidth: '126px',
  },
})

const FlexRowRight = styled(FlexRowItem, {
  textAlign: 'left',

  '@>s': {
    flex: '0 0 90%',
    maxWidth: '90%',
    marginLeft: 0,
  },

  '@>m': {
    marginBottom: 0,
    flex: '0 0 69%',
    maxWidth: '69%',
    marginLeft: '3%',
  },
})

const StyledImage = styled(Image, {
  width: '100%',
  height: '100%',
  maxWidth: '156px',
  maxHeight: '156px',
})

const SlickRotator = styled(ReactSlick, {
  '.slick-slide > div > div': {
    outline: 'none',
  },
})

const ProductTestimonialsRotator = ({ overrideTestimonialsArray }) => {
  const testimonialsArray =
    overrideTestimonialsArray && overrideTestimonialsArray.length === 1
      ? overrideTestimonialsArray
      : [
          {
            customerImage: customer1,
            customerImageAltText: 'Arlin Godwin',
            testimonialHeader: 'From struggle to success',
            testimonialQuote:
              '“After struggling with other DIY landing page solutions, I found Leadpages. The best part of all is that these pages really convert, I’m getting an unbelievable conversion rate on one of my pages.”',
            testimonialName: 'Arlin Godwin',
            testimonialTitle: 'Artist, Arlin Godwin Music',
          },
          {
            customerImage: customer2,
            customerImageAltText: 'Eddette Steynberg',
            testimonialHeader:
              'Leadpages is the only tool you need to get started',
            testimonialQuote:
              '“Leadpages has completely changed my marketing strategy workflow. No expensive or complicated website, simply a landing page and thank you page to lead clients towards your list.”',
            testimonialName: 'Eddette Steynberg',
            testimonialTitle: 'Content Strategist, Online Marketing Consultant',
          },
          {
            customerImage: customer3,
            customerImageAltText: 'Jackie Ellis',
            testimonialHeader:
              'I tried other platforms, but nothing else compared',
            testimonialQuote:
              '“I absolutely LOVE Leadpages. The simplicity and ease of use is why I recommend it to all my clients and use it exclusively for my own business.”',
            testimonialName: 'Jackie Ellis',
            testimonialTitle: 'Facebook Ads Strategist',
          },
          {
            customerImage: customer4,
            customerImageAltText: 'Ron Collins',
            testimonialHeader: 'Could not be simpler to use',
            testimonialQuote:
              '“I am building incredible quality landing pages in a matter of minutes, even on a tight budget! Leadpages could not be simpler to use.”',
            testimonialName: 'Ron Collins',
            testimonialTitle: 'Digital Marketer, Ron Collins Marketing',
          },
        ]

  const settings = {
    appendDots: (dots) => <PaginationDots dots={dots} margin=".5rem 0 0 0" />,
    arrows: false,
    autoplay: testimonialsArray.length > 1,
    autoplaySpeed: 7500,
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
    <TestimonialsContainer>
      <RotatorContainer>
        {typeof window !== 'undefined' && (
          <SlickRotator {...settings}>
            {testimonialsArray.map(
              (
                {
                  customerImage,
                  customerImageAltText,
                  testimonialHeader,
                  testimonialQuote,
                  testimonialName,
                  testimonialTitle,
                },
                index
              ) => (
                <TabSection key={index}>
                  <FlexRow>
                    <FlexRowLeft>
                      <HeaderImgLeft>
                        <TestimonialsImageContainer>
                          <StyledImage
                            image={customerImage}
                            alt={customerImageAltText}
                          />
                        </TestimonialsImageContainer>
                      </HeaderImgLeft>
                    </FlexRowLeft>
                    <FlexRowRight>
                      <TestimonialsHeader>
                        {testimonialHeader}
                      </TestimonialsHeader>
                      <TestimonialsQuote>{testimonialQuote}</TestimonialsQuote>
                      <TestimonialsName>{testimonialName}</TestimonialsName>
                      <TestimonialsTitle>{testimonialTitle}</TestimonialsTitle>
                    </FlexRowRight>
                  </FlexRow>
                </TabSection>
              )
            )}
          </SlickRotator>
        )}
      </RotatorContainer>
    </TestimonialsContainer>
  )
}

export default ProductTestimonialsRotator
