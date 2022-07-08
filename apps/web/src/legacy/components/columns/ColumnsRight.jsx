import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// utilities
import shouldDisplayVideo from '../../utils/should-display-video';
// images
import rightArrowPurple from '../../assets/images/global/arrow_right_purple.svg';
// videos
const builderCreativityWebm =
  'https://static.leadpages.com/mktg/videos/landing-page-builder-creativity.webm';
const builderCreativityMp4 =
  'https://static.leadpages.com/mktg/videos/landing-page-builder-creativity.mp4';

const OuterContainer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
`;

const InnerContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  flex-flow: row wrap;
  margin-left: 10%;
  @media (max-width: 1023px) {
    flex-flow: column wrap;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 0;
  margin-right: 4vw;
  width: 50vw;
  max-width: 661px;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 1023px) {
    margin-bottom: 1rem;
  }
  @media (max-width: 576px) {
    margin-left: 0;
    margin-right: 0;
    width: 90%;
    min-width: auto;
  }
`;

const BuilderVideoHolder = styled.div`
  width: 100%;
  max-width: 661px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const DesktopFallbackImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  @media (max-width: 576px) {
    display: none;
  }
`;

const DesktopVideo = styled.video`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  @media (max-width: 576px) {
    display: none;
  }
`;

const StaticMobileImage = styled(GatsbyImage)`
  width: 100%;
  @media (min-width: 577px) {
    display: none !important;
  }
`;

const ColumnsContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  max-height: 400px;
  @media (max-width: 1023px) {
    max-height: none;
    max-width: 100%;
    flex-direction: row;
    margin-bottom: 0rem;
  }
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ColumnItem = styled.div`
  position: relative;
  width: 244px;
  margin: 1rem;
  margin-bottom: 0;
  text-align: left;
  @media (max-width: 1023px) {
    margin-top: 2rem;
  }
`;

const ItemHeader = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 1rem;
`;

const ItemText = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 1rem;
`;

const CTA = styled.div`
  color: #603eff;
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const ArrowRightPurple = styled.img`
  width: 20px;
  height: 10px;
`;

const ColumnsRight = ({ columnItems }) => {
  const displayVideo = shouldDisplayVideo();
  const images = useStaticQuery(graphql`
    query ColumnsRightQuery {
      builderCreativityStatic: file(
        relativePath: {
          eq: "assets/images/product/landing-page-builder/landing-page-builder-creativity-still_340px@2x.png"
        }
      ) {
        ...constrained
      }
    }
  `);
  return (
    <OuterContainer>
      <InnerContainer>
        <ImageContainer>
          <BuilderVideoHolder>
            {!displayVideo && (
              <DesktopFallbackImage
                image={getImage(images.builderCreativityStatic)}
                alt="customize a landing page template"
              />
            )}
            {displayVideo && (
              <DesktopVideo autoPlay playsinline muted loop>
                <source src={builderCreativityWebm} type="video/webm" />
                <source src={builderCreativityMp4} type="video/mp4" />
              </DesktopVideo>
            )}
          </BuilderVideoHolder>
          <StaticMobileImage
            image={getImage(images.builderCreativityStatic)}
            alt="using landing page builder"
          />
        </ImageContainer>
        <ColumnsContainer>
          {columnItems.map((item, index) => {
            const { header, text, internalLink: link } = item;
            return (
              <ColumnItem key={index}>
                <ItemHeader>{header}</ItemHeader>
                <ItemText>{text}</ItemText>
                {link && (
                  <StyledLink to={link.route} alt={link.altText}>
                    <CTA>
                      {`${link.text}`}
                      <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
                    </CTA>
                  </StyledLink>
                )}
              </ColumnItem>
            );
          })}
        </ColumnsContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

ColumnsRight.propTypes = {
  columnItems: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      internalLink: PropTypes.shape({
        route: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        altText: PropTypes.string.isRequired,
      }),
    }),
  ).isRequired,
};

export default ColumnsRight;
