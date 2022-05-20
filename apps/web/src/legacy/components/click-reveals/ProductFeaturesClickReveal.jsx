import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { fadeIn, fadeOut } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { GATSBY_IMAGE } from '../../constants/types';
// images
import ArrowDownSVG from '../../assets/images/global/arrow_down_small.svg';
import ArrowRightSVG from '../../assets/images/global/arrow_right_purple.svg';

const OuterContainer = styled.div`
  width: 100%;
  overflow-x: ${props => (props.imageSide === 'right' ? 'hidden' : 'visible')};
`;

const InnerContainer = styled.div`
  display: flex;
  flex-flow: ${props => (props.imageSide === 'left' ? 'row nowrap' : 'row-reverse nowrap')};
  justify-content: center;
  position: relative;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 6rem;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 560px;
  top: -10%;
  ${props => (props.imageSide === 'left' ? 'left: -20%' : 'right: -20%')};
`;

const FlexSide_Image = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${props => (props.imageSide === 'left' ? 'margin-right: 2rem;' : 'margin-left: 2rem;')};
  @media (min-width: 769px) and (max-width: 1023px) {
    width: 170%;
  }
`;

const ImageContent = styled.div`
  width: 100%;
  max-width: 623px;
  position: relative;
`;

const RevealImageAnimation = keyframes`${fadeIn}`;

const RevealImage = styled(GatsbyImage)`
  width: 100%;
  animation: 0.5s ${RevealImageAnimation};
  overflow: visible;
`;

const FlexSide_Cards = styled.div`
  @media (min-width: 1024px) {
    min-width: 400px;
    max-width: 400px;
  }
  @media (min-width: 1200px) {
    min-width: 450px;
    max-width: 450px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const CardContent = styled.div`
  padding: 0 1.5rem;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const CardHead = styled.div`
  width: 100%;
  height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  color: #575452;
  margin-right: 22px;
  transition: all 0.1s ease;
`;

const ArrowDownImg = styled.img`
  height: 12px;
  width: 12px;
  position: absolute;
  right: -8px;
  filter: brightness(0) saturate(100%) invert(33%) sepia(5%) saturate(327%) hue-rotate(341deg)
    brightness(92%) contrast(88%);
  transition: all 0.1s ease;
`;

const ArrowDownImgAnimation = keyframes`${fadeOut}`;

const CardText = styled.div`
  margin-bottom: 1.5rem;
  margin-right: -1rem;
  padding-right: 1rem;
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  letter-spacing: 0;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 12px;
  background-color: #ffffff;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  &.activecard {
    z-index: 1;
    box-shadow: 0 6px 16px 0 rgba(15, 12, 9, 0.08), 0 12px 32px 0 rgba(15, 12, 9, 0.12);
    ${CardTitle} {
      color: #0f0c09;
    }
    ${ArrowDownImg} {
      opacity: 0;
      animation: 0.3s ${ArrowDownImgAnimation};
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
  &:hover {
    ${CardTitle} {
      color: #603eff;
    }
    ${ArrowDownImg} {
      filter: brightness(0) saturate(100%) invert(23%) sepia(88%) saturate(2568%) hue-rotate(243deg)
        brightness(100%) contrast(111%);
    }
  }
`;

const ArrowRightImg = styled.img`
  height: 12px;
  width: 12px;
  margin-left: 8px;
  margin-bottom: -1px;
  transition: all 0.1s ease;
  filter: brightness(0) saturate(100%) invert(23%) sepia(48%) saturate(6317%) hue-rotate(247deg)
    brightness(104%) contrast(105%);
`;

const OutboundLink = styled.a`
  align-self: flex-start;
  font-weight: 500;
  text-align: left;
  color: #603eff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    color: #4d32cc;
    ${ArrowRightImg} {
      filter: brightness(0) saturate(100%) invert(25%) sepia(83%) saturate(2477%) hue-rotate(242deg)
        brightness(77%) contrast(109%);
    }
  }
`;

const ProductFeaturesClickReveal = props => {
  const { animations, backgroundImage, innerContainerMinHeight, instanceId, itemArray } = props;

  const [activeIndex, setActiveIndex] = useState(Math.floor(Math.random() * itemArray.length));
  const [activeCardHeight, setActiveCardHeight] = useState(0);
  const [cardHolderHeight, setCardHolderHeight] = useState(0);
  const [shouldAutoplay, setShouldAutoplay] = useState(true);

  const handleCardClick = index => {
    setShouldAutoplay(false);
    setActiveIndex(index);
  };

  useEffect(() => {
    let rotateCards;
    if (!shouldAutoplay) {
      clearInterval(rotateCards);
    } else {
      rotateCards = setInterval(() => {
        setActiveIndex(activeIndex =>
          activeIndex === itemArray.length - 1 ? (activeIndex = 0) : activeIndex + 1,
        );
      }, 5000);
    }
    return () => clearInterval(rotateCards);
  }, [shouldAutoplay]);

  useEffect(() => {
    // this calculation is needed to make the height transition work because css does not allow transitions on auto-sized elements (https://css-tricks.com/using-css-transitions-auto-dimensions/)

    // get height of largest CardText element
    const cardTextElementsHeightArray = [].slice
      .call(document.getElementsByClassName(`${instanceId}_cardtext`))
      .map(el => el.getBoundingClientRect().height);
    const largestCardTextHeight = Math.max(...cardTextElementsHeightArray);

    // calculate/set min-height of &.active Card
    const cardHeadHeight = 72;
    const cardBodyMargin = 32;
    const calculatedActiveCardHeight = cardHeadHeight + cardBodyMargin + largestCardTextHeight;
    setActiveCardHeight(calculatedActiveCardHeight);

    // calculate/set height of CardHolder
    const numberOfCards = itemArray.length;
    const inactiveCardHeight = 72;
    const cardMargin = 12;
    const calculatedCardHolderHeight =
      cardMargin * numberOfCards +
      inactiveCardHeight * (numberOfCards - 1) +
      calculatedActiveCardHeight;
    setCardHolderHeight(calculatedCardHolderHeight);
  });

  return (
    <OuterContainer {...props}>
      <InnerContainer {...props} style={{ minHeight: `${innerContainerMinHeight}px` }}>
        <BackgroundImage {...props} src={backgroundImage} alt="background shape svg" />
        <FlexSide_Image {...props}>
          <ImageContent>
            {!animations ? (
              <RevealImage
                image={itemArray[activeIndex].image}
                alt={itemArray[activeIndex].title}
                imgStyle={{ objectFit: 'contain' }}
              />
            ) : (
              <div>{itemArray[activeIndex].animation}</div>
            )}
          </ImageContent>
        </FlexSide_Image>
        <FlexSide_Cards>
          <CardHolder style={{ height: `${cardHolderHeight}px` }}>
            {itemArray.map((item, index) => {
              const { title, text, link } = item;
              return (
                <Card
                  key={title}
                  onClick={() => handleCardClick(index)}
                  className={`${activeIndex === index ? 'activecard' : 'inactivecard'} `}
                  style={{ minHeight: activeIndex === index ? `${activeCardHeight}px` : '72px' }}
                >
                  <CardContent>
                    <CardHead>
                      <CardTitle>{title}</CardTitle>
                      <ArrowDownImg src={ArrowDownSVG} alt="down arrow icon" />
                    </CardHead>
                    <CardText className={`${instanceId}_cardtext`}>
                      {text}
                      {link && (
                        <>
                          <br />
                          <br />
                          <OutboundLink href={link.route} alt={link.altText}>
                            {link.text}
                            <ArrowRightImg src={ArrowRightSVG} alt="right arrow icon" />
                          </OutboundLink>
                        </>
                      )}
                    </CardText>
                  </CardContent>
                </Card>
              );
            })}
          </CardHolder>
        </FlexSide_Cards>
      </InnerContainer>
    </OuterContainer>
  );
};

ProductFeaturesClickReveal.defaultProps = {
  animations: false,
  innerContainerMinHeight: 550,
  instanceId: 'first',
};

ProductFeaturesClickReveal.propTypes = {
  animations: PropTypes.bool,
  backgroundImage: PropTypes.string.isRequired,
  imageSide: PropTypes.oneOf(['left', 'right']).isRequired,
  innerContainerMinHeight: PropTypes.number,
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
      }),
    }),
  ).isRequired,
};

export default ProductFeaturesClickReveal;
