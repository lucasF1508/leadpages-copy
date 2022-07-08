import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// components
import PaginationDots from './PaginationDots';
import ReactSlick from './ReactSlick_Base';

const TestimonialsContainer = styled.div`
  padding-top: 4rem;
  padding-bottom: 3rem;
  padding-right: 6rem;
  padding-left: 6rem;
  background: #fef9f1;
  @media (max-width: 576px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const RotatorContainer = styled.div`
  position: relative;
  z-index: 4;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
`;

const TabSection = styled.div`
  margin-bottom: 10px;
`;

const TestimonialsHeader = styled.div`
  font-family: 'Value Serif';
  font-size: 1.875rem;
  letter-spacing: -0.03125rem;
  line-height: 2.25rem;
  margin-bottom: 2rem;
  color: #e28f44;
  @media (max-width: 576px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
    text-align: center;
  }
`;

const TestimonialsQuote = styled.div`
  font-family: 'Apercu Pro';
  font-size: 22px;
  line-height: 32px;
  margin-bottom: 2rem;
  color: #575452;
  @media (max-width: 576px) {
    text-align: center;
  }
`;

const TestimonialsName = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #0f0c09;
  @media (max-width: 576px) {
    text-align: center;
  }
`;

const TestimonialsTitle = styled.div`
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 1rem;
  color: #575452;
  @media (max-width: 576px) {
    text-align: center;
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const FlexRowItem = styled.div`
  display: column;
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding-left: 1%;
  padding-right: 1%;
`;

const FlexRowLeft = styled(FlexRowItem)`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  @media (min-width: 576px) {
    margin-bottom: 2rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 24%;
    flex: 0 0 24%;
    max-width: 156px;
    justify-content: flex-end;
  }
  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 24%;
    flex: 0 0 24%;
    max-width: 24%;
    text-align: left;
  }
`;

const HeaderImgLeft = styled.div`
  width: 100%;
  max-width: 156px;
`;

const TestimonialsImageContainer = styled.div`
  width: 100%;
  max-width: 156px;
  @media (max-width: 576px) {
    width: 100%;
    max-width: 126px;
  }
`;

const FlexRowRight = styled(FlexRowItem)`
  text-align: left;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 69%;
    flex: 0 0 90%;
    max-width: 90%;
    margin-left: 0%;
  }
  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 69%;
    flex: 0 0 69%;
    max-width: 69%;
    text-align: left;
    margin-left: 3%;
  }
`;

const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  max-width: 156px;
  max-height: 156px;
`;

const SlickRotator = styled(ReactSlick)`
  .slick-slide > div > div {
    outline: none;
  }
`;

const ProductTestimonialsRotator = props => {
  const images = useStaticQuery(graphql`
    query ProductTestimonialsRotatorQuery {
      customer1: file(relativePath: { eq: "assets/images/testimonials/arlin-godwin.png" }) {
        ...fixed
      }
      customer2: file(relativePath: { eq: "assets/images/testimonials/eddette-steynberg.png" }) {
        ...fixed
      }
      customer3: file(relativePath: { eq: "assets/images/testimonials/jackie-ellis_bw.png" }) {
        ...fixed
      }
      customer4: file(relativePath: { eq: "assets/images/testimonials/ron-collins_close.png" }) {
        ...fixed
      }
    }
  `);
  let testimonialsArray =
    props.overrideTestimonialsArray && props.overrideTestimonialsArray.length === 1
      ? props.overrideTestimonialsArray
      : [
          {
            customerImage: getImage(images.customer1),
            customerImageAltText: 'Arlin Godwin',
            testimonialHeader: 'From struggle to success',
            testimonialQuote:
              '“After struggling with other DIY landing page solutions, I found Leadpages. The best part of all is that these pages really convert, I’m getting an unbelievable conversion rate on one of my pages.”',
            testimonialName: 'Arlin Godwin',
            testimonialTitle: 'Artist, Arlin Godwin Music',
          },
          {
            customerImage: getImage(images.customer2),
            customerImageAltText: 'Eddette Steynberg',
            testimonialHeader: 'Leadpages is the only tool you need to get started',
            testimonialQuote:
              '“Leadpages has completely changed my marketing strategy workflow. No expensive or complicated website, simply a landing page and thank you page to lead clients towards your list.”',
            testimonialName: 'Eddette Steynberg',
            testimonialTitle: 'Content Strategist, Online Marketing Consultant',
          },
          {
            customerImage: getImage(images.customer3),
            customerImageAltText: 'Jackie Ellis',
            testimonialHeader: 'I tried other platforms, but nothing else compared',
            testimonialQuote:
              '“I absolutely LOVE Leadpages. The simplicity and ease of use is why I recommend it to all my clients and use it exclusively for my own business.”',
            testimonialName: 'Jackie Ellis',
            testimonialTitle: 'Facebook Ads Strategist',
          },
          {
            customerImage: getImage(images.customer4),
            customerImageAltText: 'Ron Collins',
            testimonialHeader: 'Could not be simpler to use',
            testimonialQuote:
              '“I am building incredible quality landing pages in a matter of minutes, even on a tight budget! Leadpages could not be simpler to use.”',
            testimonialName: 'Ron Collins',
            testimonialTitle: 'Digital Marketer, Ron Collins Marketing',
          },
        ];
  const settings = {
    appendDots: dots => <PaginationDots dots={dots} margin=".5rem 0 0 0" />,
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
  };
  return (
    <TestimonialsContainer>
      <RotatorContainer>
        {typeof window !== 'undefined' && (
          <SlickRotator {...settings}>
            {testimonialsArray.map((item, index) => {
              const {
                customerImage,
                customerImageAltText,
                testimonialHeader,
                testimonialQuote,
                testimonialName,
                testimonialTitle,
              } = item;
              return (
                <TabSection key={index}>
                  <FlexRow>
                    <FlexRowLeft>
                      <HeaderImgLeft>
                        <TestimonialsImageContainer>
                          <Image image={customerImage} alt={customerImageAltText} />
                        </TestimonialsImageContainer>
                      </HeaderImgLeft>
                    </FlexRowLeft>
                    <FlexRowRight>
                      <TestimonialsHeader>{testimonialHeader}</TestimonialsHeader>
                      <TestimonialsQuote>{testimonialQuote}</TestimonialsQuote>
                      <TestimonialsName>{testimonialName}</TestimonialsName>
                      <TestimonialsTitle>{testimonialTitle}</TestimonialsTitle>
                    </FlexRowRight>
                  </FlexRow>
                </TabSection>
              );
            })}
          </SlickRotator>
        )}
      </RotatorContainer>
    </TestimonialsContainer>
  );
};

export default ProductTestimonialsRotator;
