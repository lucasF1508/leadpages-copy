import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// styling
import { ParagraphSmall, H5, H6, ParagraphHeader } from '../silos/BestOfGlobalStyles';

const FeatureContainer = styled.div`
  max-width: 816px;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const FeatureImageHolder = styled.div`
  min-width: 200px;
  max-height: 400px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.25), 0 8px 10px 0 rgba(0, 0, 0, 0.25);
  overflow: scroll;
  margin: 2rem 0;
`;

const FeatureImage = styled(GatsbyImage)`
  width: 100%;
`;

const BestOfFeature = ({ props }) => {
  const {
    featureType,
    title,
    subtitle,
    useCase,
    source,
    descriptionText,
    image,
    imageAltText,
    wellDoneText,
    evenBetterText,
  } = props;
  return (
    <FeatureContainer featureType={featureType}>
      <H5>{title}</H5>
      <H6>{subtitle}</H6>
      <ParagraphSmall>{descriptionText}</ParagraphSmall>
      <FeatureImageHolder>
        <FeatureImage image={image} alt={imageAltText}></FeatureImage>
      </FeatureImageHolder>

      {wellDoneText && (
        <>
          <ParagraphHeader>Here’s what this page does well:</ParagraphHeader>
          <ParagraphSmall dangerouslySetInnerHTML={{ __html: wellDoneText }}></ParagraphSmall>
        </>
      )}
      {evenBetterText && (
        <>
          <ParagraphHeader>How we’d make it even better:</ParagraphHeader>
          <ParagraphSmall dangerouslySetInnerHTML={{ __html: evenBetterText }}></ParagraphSmall>
        </>
      )}
    </FeatureContainer>
  );
};

export default BestOfFeature;
