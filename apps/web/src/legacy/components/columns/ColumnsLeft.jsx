import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// images
import rightArrowPurple from '../../assets/images/global/arrow_right_purple.svg';

const OuterContainer = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
`;

const InnerContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  flex-flow: row wrap;
  width: 100%;
  @media (max-width: 1023px) {
    margin-bottom: 3rem;
  }
  @media (max-width: 576px) {
    flex-flow: column-reverse wrap;
  }
`;

const ColumnsContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  max-height: 400px;
  margin-top: 2rem;
  margin-right: 15vw;
  @media (max-width: 1023px) {
    max-height: none;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 576px) {
    max-width: 100%;
  }
  @media (min-width: 992px) {
    margin-bottom: 0rem;
    max-width: 50%;
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

const ImageContainer = styled.div`
  position: relative;
  right: 0;
  margin-bottom: 0;
  width: 50vw;
  max-width: 661px;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 1023px) {
    align-self: center;
    max-width: 70%;
    min-width: auto;
  }
  @media (max-width: 576px) {
    align-self: flex-end;
    width: 100%;
    max-width: 100%;
    min-width: auto;
  }
`;

const CustomImage = styled(GatsbyImage)`
  width: 100%;
  max-width: 661px;
  @media (max-width: 576px) {
    max-width: 95%;
    align-self: flex-end;
  }
`;

const ColumnsLeft = props => {
  const images = useStaticQuery(graphql`
    query ColumnsLeftQuery {
      foregroundImage: file(
        relativePath: {
          eq: "assets/images/product/a-b-testing/a-b-testing_leadmeter_analytics-820px@2x.png"
        }
      ) {
        ...constrained
      }
    }
  `);
  return (
    <OuterContainer>
      <InnerContainer>
        <ColumnsContainer>
          {props.columnItems.map((item, index) => {
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
        <ImageContainer>
          <CustomImage
            image={getImage(images.foregroundImage)}
            alt="leadmeter with a/b testing and analytics"
          />
        </ImageContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

export default ColumnsLeft;
