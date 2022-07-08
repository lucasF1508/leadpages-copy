import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GATSBY_IMAGE } from '../../constants/types';
import styled, { keyframes } from 'styled-components';
import { fadeIn, fadeOut } from 'react-animations';
// images
import ArrowDownSVG from '../../assets/images/global/arrow_down_small.svg';
import ArrowRightSVG from '../../assets/images/global/arrow_right_purple.svg';

const OuterContainer = styled.div`
  width: 100%;
`;

const InnerContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 3rem;
`;

const Flexbox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
`;

const FlexLeft = styled.div`
  margin-top: 48px;
  width: 345px;
`;

const FlexRight = styled.div`
  width: calc(100% - 345px);
  height: 590px;
  margin-left: 3rem;
  display: flex;
  align-items: center;
  &.nullstate {
    height: 410px;
  }
  transition: height 0.1s ease;
`;

const FlexRightContent = styled.div`
  width: 100%;
`;

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: #0f0c09;
  margin-left: 1rem;
`;

const CardHeadArrowSVG = styled.img`
  height: 12px;
  width: 12px;
  position: absolute;
  right: 0;
`;

const CardHeadArrowSVGAnimation = keyframes`${fadeOut}`;

const Card = styled.div`
  transition: all 0.3s ease;
  position: relative;
  height: 72px;
  max-width: 100%;
  margin-bottom: 12px;
  background-color: #ffffff;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    ${CardTitle} {
      color: #603eff;
    }
    ${CardHeadArrowSVG} {
      filter: brightness(0) saturate(100%) invert(23%) sepia(88%) saturate(2568%) hue-rotate(243deg)
        brightness(100%) contrast(111%);
    }
  }
  &.activecard {
    z-index: 1;
    height: 240px;
    box-shadow: 0 6px 12px 0 rgba(15, 12, 9, 0.3), 0 12px 24px 0 rgba(15, 12, 9, 0.15);
    ${CardHeadArrowSVG} {
      opacity: 0;
      animation: 0.3s ${CardHeadArrowSVGAnimation};
    }
  }
  &.inactivecard {
    box-shadow: 0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08);
    height: 72px;
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
  margin-left: 0.5rem;
`;

const CardHead = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 22px;
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
  margin-top: 1.5rem;
  margin-bottom: 1rem;
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
  position: absolute;
  top: 1px;
  margin-left: 3px;
  cursor: pointer;
`;

const CardLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #603eff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #4d32cc;
    ${CardLinkArrowSVG} {
      filter: brightness(0) saturate(100%) invert(18%) sepia(100%) saturate(5178%)
        hue-rotate(252deg) brightness(83%) contrast(90%);
    }
  }
`;

const RevealImageAnimation = keyframes`${fadeIn}`;

const RevealImage = styled(GatsbyImage)`
  width: 100%;
  animation: 0.5s ${RevealImageAnimation};
`;

const ProductToolkitClickReveal = props => {
  const { itemArray } = props;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = index => {
    if (activeIndex === index) {
      return;
    } else setActiveIndex(index);
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <Flexbox>
          <FlexLeft>
            {itemArray.map((item, index) => {
              const { title, text, icon, iconAltText, linkText, linkRoute, linkAltText } = item;
              return (
                <Card
                  key={title}
                  onClick={() => handleCardClick(index)}
                  className={activeIndex === index ? 'activecard' : 'inactivecard'}
                >
                  <CardContent>
                    <CardHead>
                      <CardIconSVG src={icon} alt={iconAltText}></CardIconSVG>
                      <CardTitle>{title}</CardTitle>
                      <CardHeadArrowSVG src={ArrowDownSVG} alt="arrow icon"></CardHeadArrowSVG>
                    </CardHead>
                    <CardBody>
                      <CardText>{text}</CardText>
                      {linkRoute && (
                        <CardLinkHolder>
                          <CardLink to={linkRoute} alt={linkAltText}>
                            {`${linkText}  `}
                            <CardLinkArrowSVG src={ArrowRightSVG} alt="arrow icon" />
                          </CardLink>
                        </CardLinkHolder>
                      )}
                    </CardBody>
                  </CardContent>
                </Card>
              );
            })}
          </FlexLeft>
          <FlexRight className={activeIndex === null ? 'nullstate' : ''}>
            <FlexRightContent>
              <RevealImage
                image={itemArray[activeIndex].revealImage}
                alt={itemArray[activeIndex].revealImageAltText}
              ></RevealImage>
            </FlexRightContent>
          </FlexRight>
        </Flexbox>
      </InnerContainer>
    </OuterContainer>
  );
};

ProductToolkitClickReveal.propTypes = {
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

export default ProductToolkitClickReveal;
