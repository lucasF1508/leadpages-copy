import React, { useState, useEffect } from 'react';
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
  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 900px) {
    width: 65%;
  }
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
`;

const SlickRotator = styled(ReactSlick)`
  .slick-slide > div {
    margin: 1rem 15px 2.5rem;
    @media (max-width: 599px) {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

const Card = styled.div`
  width: 100%;
  background-color: #ffffff;
  cursor: pointer;
  &.activecard {
    box-shadow: 0 6px 16px 0 rgba(15, 12, 9, 0.08), 0 12px 32px 0 rgba(15, 12, 9, 0.12);
    z-index: 1;
  }
  &.inactivecard {
    box-shadow: 0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08);
    &:hover {
      z-index: 1;
      box-shadow: 0 4px 8px 0 rgba(15, 12, 9, 0.04), 0 10px 20px 0 rgba(15, 12, 9, 0.08);
    }
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
  margin-bottom: 0.5rem;
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
  filter: brightness(0) saturate(100%) invert(23%) sepia(48%) saturate(6317%) hue-rotate(247deg)
    brightness(104%) contrast(105%);
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
  &:hover {
    color: #4d32cc;
    ${CardLinkArrowSVG} {
      filter: brightness(0) saturate(100%) invert(25%) sepia(83%) saturate(2477%) hue-rotate(242deg)
        brightness(77%) contrast(109%);
    }
  }
`;

const CardLinkExternal = styled.a`
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
  &:hover {
    color: #4d32cc;
    ${CardLinkArrowSVG} {
      filter: brightness(0) saturate(100%) invert(25%) sepia(83%) saturate(2477%) hue-rotate(242deg)
        brightness(77%) contrast(109%);
    }
  }
`;

const ProductFeaturesRotator = props => {
  const { animations, instanceId, itemArray } = props;
  const [activeIndex, setActiveIndex] = useState(Math.floor(Math.random() * itemArray.length));
  const [cardContentHeight, setCardContentHeight] = useState(0);

  useEffect(() => {
    // get height of largest CardContent element
    const cardContentElementsHeightArray = [].slice
      .call(document.getElementsByClassName(`${instanceId}_cardcontent`))
      .map(el => el.getBoundingClientRect().height);
    const largestCardContentHeight = Math.max(...cardContentElementsHeightArray);
    setCardContentHeight(largestCardContentHeight);
  });

  const settings = {
    appendDots: dots => <PaginationDots dots={dots} margin="-0.5rem 0 0 0" />,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '32px',
    className: 'center',
    dots: true,
    draggable: true,
    focusOnSelect: true,
    infinite: true,
    lazyload: true,
    pauseOnFocus: true,
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
              {animations ? (
                <div>{itemArray[activeIndex].animation}</div>
              ) : (
                <RevealImage
                  image={itemArray[activeIndex].image}
                  alt={itemArray[activeIndex].title}
                />
              )}
            </FlexTopContent>
          </FlexTop>
        </Flexbox>
      </InnerContainer>
      <RotatorContainer>
        {typeof window !== 'undefined' && (
          <SlickRotator {...settings}>
            {itemArray.map((item, index) => {
              const { title, text, link } = item;
              return (
                <Card key={title} className={activeIndex === index ? 'activecard' : 'inactivecard'}>
                  <CardContent
                    className={`${instanceId}_cardcontent`}
                    style={{ minHeight: `${cardContentHeight}px` }}
                  >
                    <CardHead>
                      <CardTitle>{title}</CardTitle>
                    </CardHead>
                    <CardBody>
                      <CardText>{text}</CardText>
                      {link && (
                        <CardLinkHolder>
                          {link.external ? (
                            <CardLinkExternal to={link.route} alt={link.altText}>
                              <span>{`${link.text}  `}</span>
                              <CardLinkArrowSVG src={ArrowRightSVG} alt="arrow icon" />
                            </CardLinkExternal>
                          ) : (
                            <CardLink to={link.route} alt={link.altText}>
                              <span>{`${link.text}  `}</span>
                              <CardLinkArrowSVG src={ArrowRightSVG} alt="arrow icon" />
                            </CardLink>
                          )}
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

ProductFeaturesRotator.defaultProps = {
  animations: false,
  instanceId: 'first',
};

ProductFeaturesRotator.propTypes = {
  animations: PropTypes.bool,
  instanceId: PropTypes.string,
  itemArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      image: GATSBY_IMAGE,
      animation: PropTypes.node,
      link: PropTypes.shape({
        text: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
        altText: PropTypes.string.isRequired,
        external: PropTypes.bool,
      }),
    }),
  ).isRequired,
};

export default ProductFeaturesRotator;
