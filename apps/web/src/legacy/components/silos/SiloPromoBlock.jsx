import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { GATSBY_IMAGE } from '../../constants/types';
// Images
import rightArrowSVG from '../../assets/images/global/arrow_right_white.svg';

const FlexContainer = styled.div`
  display: flex;
  background-color: #f7f7f7;
  margin: 1rem 0;
  box-sizing: border-box;

  @media (max-width: 425px) {
    display: block;
  }
`;

const ImageFlexItem = styled.div`
  max-width: 35%;
  flex: 0 0 35%;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  @media (max-width: 425px) {
    max-width: 100%;
    padding-bottom: 0;
  }
`;

const ContentFlexItem = styled.div`
  max-width: 51%;
  margin: 3.75rem 3.75rem 1.25rem 3.5rem;
  flex: 0 0 51%;
  padding-bottom: 2.5rem;

  @media (max-width: 425px) {
    margin: 2.5rem 2.25rem 0 2.25rem;
    max-width: 100%;
  }
`;

const ImageContainer = styled(GatsbyImage)`
  display: block;
  width: 100%;
  max-width: 340px;
`;

const Headline = styled.h2`
  font-size: 30px;
  font-family: Value Serif;
  line-height: 36px;
`;

const MainText = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #575452;
  margin: 1.25rem 0;

  @media (max-width: 425px) {
    margin-bottom: 1.5rem;
  }
`;

const InternalStyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const ExternalStyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Button = styled.button`
  width: auto;
  height: 48px;
  border-radius: 48px;
  border: 3px solid #603eff;
  background-color: #603eff;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0 1rem;

  @media (max-width: 340px) {
    width: 240px;
    font-size: 16px;
    align-self: center;
  }

  @media (min-width: 426px) and (max-width: 768px) {
    font-size: 14px;
    padding: 0;
    width: 100%;
  }

  @media (max-width: 425px) {
    max-width: 100%;
  }

  &:hover {
    background-color: #4d32cc;
    border: 3px solid #4d32cc;
  }
`;
const ArrowRight = styled.img`
  margin-top: auto;
  margin-bottom: auto;
  width: 20px;
  height: 10px;
`;

const SiloPromoBlock = ({ overridePromoContent }) => {
  const image = useStaticQuery(graphql`
    query SiloPromoBlockQuery {
      defaultPromoImage: file(
        relativePath: {
          eq: "assets/images/silos/landing-page-examples/Product-Leadpages_Landing-Pages@2x.png"
        }
      ) {
        ...constrained
      }
    }
  `);

  const defaultPromoContent = {
    promoImage: getImage(image.defaultPromoImage),
    promoImageAlt: 'Landing page builder',
    headlineText: 'Create Unlimited Landing Pages with Leadpages',
    mainText:
      'Confidently grow your business by turning clicks into customers with high-converting landing pages you can easily DIY.',
    link: '/product/landing-page-builder',
    linkAlt: 'Landing page builder',
    externalLink: false,
    buttonText: 'Discover Landing Pages',
  };

  // Use override content or fallback to default promo content
  const {
    promoImage,
    promoImageAlt,
    headlineText,
    mainText,
    link,
    linkAlt,
    externalLink,
    buttonText,
  } = overridePromoContent || defaultPromoContent;

  return (
    <FlexContainer>
      <ImageFlexItem>
        <ImageContainer
          image={promoImage || defaultPromoContent.promoImage}
          alt={promoImageAlt || defaultPromoContent.promoImageAlt}
        />
      </ImageFlexItem>
      <ContentFlexItem>
        <Headline>{headlineText}</Headline>
        <MainText>{mainText}</MainText>
        {externalLink ? (
          <ExternalStyledLink href={link} alt={linkAlt}>
            <Button>
              {buttonText}
              <ArrowRight src={rightArrowSVG} />
            </Button>
          </ExternalStyledLink>
        ) : (
          <InternalStyledLink to={link} alt={linkAlt}>
            <Button>
              {buttonText}
              <ArrowRight src={rightArrowSVG} />
            </Button>
          </InternalStyledLink>
        )}
      </ContentFlexItem>
    </FlexContainer>
  );
};

SiloPromoBlock.defaultProps = {
  overridePromoContent: null,
};

SiloPromoBlock.propTypes = {
  overridePromoContent: PropTypes.shape({
    promoImage: GATSBY_IMAGE.isRequired,
    promoImageAlt: PropTypes.string.isRequired,
    headlineText: PropTypes.string.isRequired,
    mainText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    linkAlt: PropTypes.string.isRequired,
    externalLink: PropTypes.bool.isRequired,
    buttonText: PropTypes.string.isRequired,
  }),
};

export default SiloPromoBlock;
