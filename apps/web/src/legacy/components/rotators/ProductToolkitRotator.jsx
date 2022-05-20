import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GATSBY_IMAGE } from '../../constants/types';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
// components
import PaginationDots from './PaginationDots';
import ReactSlick from './ReactSlick_Base';
// images
import ArrowRightSVG from '../../assets/images/global/arrow_right_purple.svg';

const OuterContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const InnerContainer = styled.div`
  width: 85%;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
`;

const Flexbox = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`;

const FlexTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const FlexTopContent = styled.div`
  width: 100%;
`;

const RevealImageAnimation = keyframes`${fadeIn}`;

const RevealImage = styled(GatsbyImage)`
  width: 100%;
  animation: 0.5s ${RevealImageAnimation};
`;

const RotatorContainer = styled.div`
  width: 100%;
  padding-bottom: 1rem;
`;

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: #0f0c09;
  margin-left: 1rem;
`;

const SlickRotator = styled(ReactSlick)`
  .slick-slide > div {
    margin: 1rem 15px 2.5rem;
  }
  @media (max-width: 599px) {
    .slick-slide > div {
      margin: 1rem 10px 2.5rem;
    }
  }
`;

const Card = styled.div`
  width: 100%;
  min-height: 219px;
  background-color: #ffffff;
  cursor: pointer;
  &.activecard {
    box-shadow: 0 6px 16px 0 rgba(15, 12, 9, 0.08), 0 12px 32px 0 rgba(15, 12, 9, 0.12);
    z-index: 1;
  }
  &.inactivecard {
    box-shadow: 0 6px 16px 0 rgba(15, 12, 9, 0.08), 0 12px 32px 0 rgba(15, 12, 9, 0.12);
    &:hover {
      z-index: 1;
      box-shadow: 0 4px 8px 0 rgba(15, 12, 9, 0.04), 0 10px 20px 0 rgba(15, 12, 9, 0.08);
    }
  }
  @media (min-width: 521px) {
    min-height: 219px;
  }
  @media (max-width: 520px) {
    min-height: 243px;
  }
  @media (max-width: 401px) {
    min-height: 267px;
  }
  @media (max-width: 355px) {
    min-height: 291px;
  }
  @media (max-width: 330px) {
    min-height: 315px;
  }
`;

const CardContent = styled.div`
  padding: 0 1rem;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

const CardHead = styled.div`
  width: 100%;
  height: 30px;
  margin: 21px 0.5rem 0;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const CardIconSVG = styled.img`
  max-height: 30px;
  max-width: 24px;
`;

const CardBody = styled.div`
  width: 100%;
  margin: 1.5rem 0.5rem 1rem;
`;

const CardText = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  margin-bottom: 1.5rem;
`;

const CardLinkHolder = styled.div`
  margin-bottom: 1rem;
  height: 16px;
  position: relative;
  display: flex;
  align-items: center;
`;

const CardLinkArrowSVG = styled.img`
  height: 12px;
  width: 12px;
  position: relative;
  margin-left: 5px;
  cursor: pointer;
`;

const CardLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  width: 100%;
  color: #603eff;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProductToolkitRotator = props => {
  const { itemArray } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    appendDots: dots => <PaginationDots dots={dots} margin="-0.5rem 0 0 0" />,
    arrows: false,
    centerMode: true,
    centerPadding: '32px',
    className: 'center',
    dots: true,
    draggable: true,
    focusOnSelect: true,
    infinite: false,
    lazyload: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 300,
    swipeToSlide: true,
    touchThreshold: 50,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          centerPadding: '24px',
        },
      },
    ],
    afterChange: index => {
      setActiveIndex(index);
    },
  };
  return (
    <OuterContainer>
      <InnerContainer>
        <Flexbox>
          <FlexTop className={activeIndex === null ? 'nullstate' : ''}>
            <FlexTopContent>
              <RevealImage
                image={itemArray[activeIndex].revealImage}
                alt={itemArray[activeIndex].revealImageAltText}
              ></RevealImage>
            </FlexTopContent>
          </FlexTop>
        </Flexbox>
      </InnerContainer>
      <RotatorContainer>
        {typeof window !== 'undefined' && (
          <SlickRotator {...settings}>
            {itemArray.map((item, index) => {
              const { title, text, icon, iconAltText, linkText, linkRoute, linkAltText } = item;
              return (
                <Card key={title} className={activeIndex === index ? 'activecard' : 'inactivecard'}>
                  <CardContent>
                    <CardHead>
                      <CardIconSVG src={icon} alt={iconAltText}></CardIconSVG>
                      <CardTitle>{title}</CardTitle>
                    </CardHead>
                    <CardBody>
                      <CardText>{text}</CardText>
                      {linkRoute && (
                        <CardLinkHolder>
                          <CardLink to={linkRoute} alt={linkAltText}>
                            <span>{`${linkText}  `}</span>
                            <CardLinkArrowSVG src={ArrowRightSVG} alt="arrow icon" />
                          </CardLink>
                        </CardLinkHolder>
                      )}
                    </CardBody>
                  </CardContent>
                </Card>
              );
            })}
          </SlickRotator>
        )}
      </RotatorContainer>
    </OuterContainer>
  );
};

ProductToolkitRotator.propTypes = {
  itemArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      iconAltText: PropTypes.string.isRequired,
      linkText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      linkRoute: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      linkAltText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      revealImage: GATSBY_IMAGE.isRequired,
      revealImageAltText: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProductToolkitRotator;
