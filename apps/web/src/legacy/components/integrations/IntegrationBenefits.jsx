import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GATSBY_IMAGE } from '../../constants/types';

const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 1140px;
  padding: 3rem 6rem 8rem 6rem;

  @media (max-width: 768px) {
    padding: 5rem 2.4rem 3.5rem 3.4rem;
  }

  @media (max-width: 425px) {
    display: block;
    padding: 3.8rem 1.8rem 4.5rem 1.8rem;
  }
`;

const ThreeColFlexItem = styled.div`
  flex: 25%;
  margin-right: 3.3rem;
  margin-bottom: 4.2rem;

  &:nth-child(3n) {
    margin-right: 0;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 2.2rem;
    margin-right: 2.2rem;

    &:nth-child(3n) {
      margin-right: 2.2rem;
    }
  }

  @media (max-width: 630px) {
    flex: 1 0 39%;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (max-width: 425px) {
    max-width: 100%;

    margin-right: 0;
    margin-bottom: 2.7rem;

    &:nth-child(3n) {
      margin-right: 0;
      margin-bottom: 2.7rem;
    }
  }
`;

const FourColFlexItem = styled.div`
  flex: 1;
  margin-right: 3.3rem;
  margin-bottom: 4.2rem;

  &:nth-child(4n) {
    margin-right: 0;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 2.2rem;
    margin-right: 2.2rem;
    flex: 0 0 43%;

    &:nth-child(4n) {
      margin-right: 2.2rem;
    }
  }

  @media (max-width: 625px) {
    flex: 1 0 42%;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (max-width: 425px) {
    max-width: 100%;

    margin-right: 0;
    margin-bottom: 2.7rem;

    &:nth-child(4n) {
      margin-right: 0;
      margin-bottom: 2.7rem;
    }
  }
`;

const Headline = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 1rem;

  @media (max-width: 425px) {
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #575452;
`;

const Image = styled(GatsbyImage)`
  margin-bottom: 1rem;
  max-height: 48px;
  max-width: 238px;
`;

const IntegrationBenefits = ({ integrationInfo }) => {
  const columnCount = integrationInfo.length;

  return (
    <OuterContainer>
      <FlexContainer>
        {columnCount % 4 === 0 ? (
          <>
            {integrationInfo.map(info => (
              <FourColFlexItem key={info.headline}>
                {info.image && <Image image={info.image} style={info.additionalStyle} />}
                <Headline>{info.headline}</Headline>
                <Description>{info.description}</Description>
              </FourColFlexItem>
            ))}
          </>
        ) : (
          <>
            {integrationInfo.map(info => (
              <ThreeColFlexItem key={info.headline}>
                {info.image && <Image image={info.image} style={info.additionalStyle} />}
                <Headline>{info.headline}</Headline>
                <Description>{info.description}</Description>
              </ThreeColFlexItem>
            ))}
          </>
        )}
      </FlexContainer>
    </OuterContainer>
  );
};

IntegrationBenefits.propTypes = {
  integrationInfo: PropTypes.arrayOf(
    PropTypes.shape({
      image: GATSBY_IMAGE,
      headline: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      additionalStyle: PropTypes.shape({ maxWidth: PropTypes.string }),
    }),
  ).isRequired,
};

export default IntegrationBenefits;
