import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// images
import bgSVG from '../../assets/images/shapes/wavy-lines-mirror-gray.svg';
import rightArrowSVG from '../../assets/images/global/arrow_right.svg';

const OuterContainer = styled.div`
  position: relative;
  background-color: #f7f7f7;
`;

const InnerContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6rem;
  padding-bottom: 6rem;
  text-align: center;
  @media (max-width: 768px) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    padding-top: 9rem;
    padding-bottom: 9rem;
  }
  @media (min-width: 993px) {
    padding-top: 11rem;
    padding-bottom: 11rem;
  }
`;

const TextContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    width: 80%;
  }
  @media (min-width: 993px) {
    width: 60%;
  }
`;

const BGImage = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const TitleContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  width: 100%;
  height: 100%;
  @media (max-width: 576px) {
    margin-bottom: 0;
  }
`;

const Title = styled.div`
  font-family: 'Value Serif';
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.08px;
  color: #0f0c09;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.08px;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.1px;
  }
  @media (min-width: 993px) {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.5px;
  }
`;

const JobPosition = styled.div`
  font-family: 'Apercu Pro';
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #0f0c09;
  margin-bottom: 8px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
  }
  @media (min-width: 993px) {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0px;
  }
`;

const ArrowRight = styled.img`
  margin-top: auto;
  margin-bottom: auto;
  width: 20px;
  height: 10px;
`;

const Card = styled.div`
  max-width: 825px;
  background-color: #ffffff;
  margin-bottom: 12px;
  box-shadow: 0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08);
  transition: 0.3s ease;
  z-index: 1;
  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(15, 12, 9, 0.04), 0 10px 20px 0 rgba(15, 12, 9, 0.08);
    z-index: 10;
  }
  &:hover ${JobPosition} {
    color: #603eff;
    transition: 0.3s ease;
  }
  &:hover ${ArrowRight} {
    -webkit-filter: invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg) brightness(101%)
      contrast(103%);
    filter: invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg) brightness(101%)
      contrast(103%);
    transition: 0.3s ease;
  }
`;

const JobDepartment = styled.div`
  font-family: 'Apercu Pro';
  font-size: 12px;
  line-height: 18px;
  color: #575452;
  text-align: left;
`;

const Flexbox = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;

const JobTextContainer = styled.div``;

const OutboundLink = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const Link = styled(OutboundLink)`
  color: #603eff;
  padding-bottom: 2px;
  border-bottom: 3px solid #603eff;
  &:hover {
    color: #4d32cc;
    border-bottom: 3px solid #4d32cc;
  }
`;

const Text = styled.div`
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #575452;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
  }
  @media (min-width: 993px) {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0px;
  }
  padding-top: 3rem;
`;

const OpenPositions = ({ openPositionsArray }) => {
  return (
    <OuterContainer name="openpositions">
      <BGImage src={bgSVG} alt="careers page background svg image" />
      <InnerContainer>
        <TextContainer>
          <TitleContainer>
            <Title>Open Positions</Title>
          </TitleContainer>
          {openPositionsArray.length > 0 &&
            openPositionsArray.map(position => {
              const { title, department, postingLink, type } = position;
              return (
                <OutboundLink
                  key={postingLink}
                  href={`${postingLink}${type === 'internal' ? '&source=lp' : ''}`}
                  alt="job description link"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <Card>
                    <Flexbox>
                      <JobTextContainer>
                        <JobPosition>{title}</JobPosition>
                        <JobDepartment>{department}</JobDepartment>
                      </JobTextContainer>
                      <ArrowRight src={rightArrowSVG} alt="right arrow" />
                    </Flexbox>
                  </Card>
                </OutboundLink>
              );
            })}
        </TextContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

OpenPositions.propTypes = {
  openPositionsArray: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
      postingLink: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default OpenPositions;
