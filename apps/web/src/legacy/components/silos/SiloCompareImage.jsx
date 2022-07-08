import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Image
import leadpagesLogoSVG from '../../assets/images/global/leadpages-wordmark_white.svg';

const SidebarSVGImage = styled.img`
  width: 33%;
  max-height: 20px;
`;

const ComparisonImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a236d;
  min-width: 250px;
  max-width: 250px;
  height: 131px;
  margin-bottom: 1rem;
`;

const ComparisonVersusText = styled.span`
  font-weight: 500;
  font-size: 13.9px;
  line-height: 17px;
  text-align: center;
  color: #c3c2c1;
  margin: 0 1.2rem 0 1.2rem;
`;

const SiloCompareImage = ({ competitorImage, className }) => {
  return (
    <ComparisonImageContainer className={className}>
      <SidebarSVGImage src={leadpagesLogoSVG} />
      <ComparisonVersusText>vs.</ComparisonVersusText>
      <SidebarSVGImage src={competitorImage} />
    </ComparisonImageContainer>
  );
};

SiloCompareImage.defaultProps = {
  className: '',
};

SiloCompareImage.propTypes = {
  competitorImage: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SiloCompareImage;
