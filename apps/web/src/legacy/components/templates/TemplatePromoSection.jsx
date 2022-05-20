import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
// Constants
import { TemplateState, TemplateActions } from '../../constants/templates';
// Images
import backgroundSVG from '../../assets/images/shapes/wave-corner-lavender.svg';

const OuterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 525px;
  color: white;
  padding-bottom: 6rem;
  overflow: hidden;
  @media (min-width: 1025px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    margin-left: 24px;
    margin-right: 24px;
  }
  @media (max-width: 1024px) {
    height: 575px;
    padding-bottom: 4rem;
  }
  @media (max-width: 450px) {
    height: 600px;
  }
`;

const BackgroundContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  background-color: #603eff;
  overflow: visible;
  border-radius: 3px;
`;

const ShapeMaskContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  border-top-right-radius: 3px;
`;

const TextContainer = styled.div`
  position: absolute;
  z-index: 1;
  margin-top: 78px;
  margin-left: 90px;
  max-width: 500px;
  @media (max-width: 1199px) {
    max-width: 450px;
    margin-left: 60px;
  }
  @media (max-width: 1024px) {
    margin-top: 36px;
    margin-left: 48px;
    margin-right: 24px;
  }
  @media (max-width: 450px) {
    margin-top: 37px;
    margin-left: 33px;
    margin-right: 24px;
    max-width: 265px;
  }
`;

const PromoHeadline = styled.h2`
  font-family: 'Value Serif';
  font-size: 40px;
  letter-spacing: -0.5px;
  line-height: 48px;
  @media (max-width: 450px) {
    font-size: 24px;
    letter-spacing: 0.5px;
    line-height: 28px;
  }
`;

const PromoText = styled.p`
  margin-top: 30px;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 28px;
  @media (max-width: 450px) {
    margin-top: 16px;
    font-size: 16px;
    letter-spacing: 0px;
    line-height: 22px;
  }
`;

const PromoCTA = styled.button`
  width: 236px;
  height: 48px;
  margin-top: 29px;
  background-color: white;
  color: #603eff;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 28px;
  text-align: center;
  border-radius: 24px;
  border: 3px solid rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    border-radius: 24px;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.26), 0 14px 28px 0 rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 450px) {
    width: 200px;
    height: 42px;
    font-size: 14px;
  }
`;

const PromoSubCTA = styled.p`
  margin-top: 29px;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 20px;
  @media (max-width: 1199px) {
    max-width: 200px;
  }
  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

const PromoSubCTALink = styled.a`
  padding-bottom: 2px;
  border-bottom: 3px solid #d1c6f9;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    border-bottom: 3px solid white;
  }
`;

const SVGContainer = styled.img`
  position: absolute;
  bottom: -95px;
  right: -20px;
  width: 825px;
  @media (max-width: 1199px) {
    max-width: 800px;
    bottom: -95px;
    right: -25px;
  }
  @media (max-width: 1024px) {
    width: 78%;
  }
  @media (max-width: 450px) {
    bottom: -140px;
    right: -10px;
    width: 120%;
  }
`;

const PromoHeroImage = styled(GatsbyImage)`
  position: absolute;
  right: -105px;
  bottom: -110px;
  width: 100%;
  max-width: 850px;
  @media (max-width: 1199px) {
    max-width: 800px;
    bottom: -85px;
  }
  @media (max-width: 1024px) {
    width: 68%;
    right: -30px;
    bottom: -75px;
  }
  @media (max-width: 768px) {
    width: 68%;
  }
  @media (max-width: 450px) {
    width: 112%;
    right: -20px;
    bottom: -55px;
  }
`;

const TemplatePromoSection = ({ state, actions }) => {
  const images = useStaticQuery(graphql`
    query TemplatePromoSectionQuery {
      promoHeroImage: file(
        relativePath: { eq: "assets/images/heros/template-gallery-promo-hero_926px@2x.png" }
      ) {
        ...constrained
      }
    }
  `);

  const selectHolidayCategory = () => {
    if (Object.keys(state?.taxons)?.length) {
      const [holidayTaxon] = state.taxons.filter(e => e.value === 'holiday');
      actions.onUpdateCategory(holidayTaxon);
    }
  };

  return (
    <OuterContainer>
      <BackgroundContainer>
        <ShapeMaskContainer>
          <TextContainer>
            <PromoHeadline>New Templates to Kickstart Your Holiday Campaign</PromoHeadline>
            <PromoText>
              From Black Friday to New Years, these brand new landing page templates are designed to
              help your small business end the year with a bang!
            </PromoText>
            <ScrollLink to="tab-toolbar" offset={-70} spy smooth duration={300}>
              <PromoCTA onClick={selectHolidayCategory}>View Holiday Templates</PromoCTA>
            </ScrollLink>
            <PromoSubCTA>
              Access more{' '}
              <PromoSubCTALink
                href="https://lp.leadpages.com/holidayhustle21"
                alt="More Leadpages holiday campaign planning resources"
              >
                holiday campaign planning resources
              </PromoSubCTALink>
            </PromoSubCTA>
          </TextContainer>
          <SVGContainer src={backgroundSVG} alt="background svg" />
        </ShapeMaskContainer>
        <PromoHeroImage image={getImage(images.promoHeroImage)} alt="hero image" />
      </BackgroundContainer>
    </OuterContainer>
  );
};

TemplatePromoSection.propTypes = {
  state: TemplateState.isRequired,
  actions: TemplateActions.isRequired,
};

export default TemplatePromoSection;
