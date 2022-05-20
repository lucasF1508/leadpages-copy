import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GATSBY_IMAGE } from '../../constants/types';
import styled from 'styled-components';
// images
import rightArrowPurpleSVG from '../../assets/images/global/arrow_right_purple.svg';

const OuterContainer = styled.div`
  position: relative;
`;

const LPUContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
  padding-bottom: ${props => props.paddingBottom || '6rem'};
  padding-right: ${props => props.paddingRight || '3rem'};
  padding-left: ${props => props.paddingLeft || '3rem'};
  @media (min-width: 992px) {
    padding-right: ${props => props.paddingRightDesktop || '6rem'};
    padding-left: ${props => props.paddingLeftDesktop || '6rem'};
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: block;
  }
`;

const FlexRowItem = styled.div`
  min-height: 1px;
  position: relative;
  text-decoration: none;
  width: 100%;
`;

const FlexRow3 = styled(FlexRowItem)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 29.3333%;
  flex: 0 0 29.3333%;
  max-width: 29.3333%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const FlexRow3Container = styled.div`
  width: 100%;
`;

const ImageContainer = styled(GatsbyImage)`
  display: block;
  width: 100%;
  max-width: 350px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const FlexRow3Heading = styled.div`
  padding-top: 1.5rem;
  font-family: 'Apercu Pro';
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: #0f0c09;
`;

const FlexRow3Copy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 1.25rem;
  color: #575452;
`;

const FlexRow3Webinar = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 1.25rem;
  color: #0f0c09;
`;

const TextContainer = styled.div`
  z-index: 2;
  position: relative;
  background: #fff;
  text-align: left;
  width: 75%;
  padding-right: 10%;
  margin-top: -15%;
  margin-right: auto;
  margin-left: -1px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #603eff;
  cursor: pointer;
  z-index: 4;
`;

const OutboundLink = styled.a`
  text-decoration: none;
  color: #603eff;
  cursor: pointer;
  z-index: 4;
`;

const BigTabImage = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const GalleryContainer = styled.div`
  position: relative;
  z-index: 4;
`;

const ArrowRightPurple = styled.img`
  width: 20px;
  height: 10px;
`;

const CTA = styled.div`
  color: #603eff;
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 30px;
  text-align: left;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const ThreeColumnOverlap = ({
  column1image,
  column1imageAlt,
  column1heading,
  column1copy,
  column1webinar,
  column1link,
  column1outboundlink,
  column1linkAlt,
  column1CTA,
  column2image,
  column2imageAlt,
  column2heading,
  column2copy,
  column2webinar,
  column2link,
  column2outboundlink,
  column2linkAlt,
  column2CTA,
  column3image,
  column3imageAlt,
  column3heading,
  column3copy,
  column3webinar,
  column3link,
  column3outboundlink,
  column3linkAlt,
  column3CTA,
  paddingBottom,
  paddingLeft,
  paddingLeftDesktop,
  paddingRight,
  paddingRightDesktop,
}) => (
  <OuterContainer>
    <LPUContainer
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingLeftDesktop={paddingLeftDesktop}
      paddingRight={paddingRight}
      paddingRightDesktop={paddingRightDesktop}
    >
      <FlexRow>
        <FlexRow3>
          <FlexRow3Container>
            {column1link && (
              <StyledLink to={column1link} alt={column1linkAlt}>
                <GalleryContainer>
                  <BigTabImage>
                    <ImageContainer image={column1image} alt={column1imageAlt} />
                  </BigTabImage>
                  <TextContainer>
                    <FlexRow3Heading>{column1heading}</FlexRow3Heading>
                    <FlexRow3Copy>{column1copy}</FlexRow3Copy>
                    <FlexRow3Webinar>{column1webinar}</FlexRow3Webinar>

                    <CTA>
                      {column1CTA}
                      &nbsp;
                      <ArrowRightPurple src={rightArrowPurpleSVG} alt="purple right arrow" />
                    </CTA>
                  </TextContainer>
                </GalleryContainer>
              </StyledLink>
            )}
            {column1outboundlink && (
              <OutboundLink href={column1outboundlink} alt={column1linkAlt}>
                <GalleryContainer>
                  <BigTabImage>
                    <ImageContainer image={column1image} alt={column1imageAlt} />
                  </BigTabImage>
                  <TextContainer>
                    <FlexRow3Heading>{column1heading}</FlexRow3Heading>
                    <FlexRow3Copy>{column1copy}</FlexRow3Copy>
                    <FlexRow3Webinar>{column1webinar}</FlexRow3Webinar>
                    <CTA>
                      {column1CTA}
                      &nbsp;
                      <ArrowRightPurple src={rightArrowPurpleSVG} alt="purple right arrow" />
                    </CTA>
                  </TextContainer>
                </GalleryContainer>
              </OutboundLink>
            )}
          </FlexRow3Container>
        </FlexRow3>
        <FlexRow3>
          <FlexRow3Container>
            {column2link && (
              <StyledLink to={column2link} alt={column2linkAlt}>
                <GalleryContainer>
                  <BigTabImage>
                    <ImageContainer image={column2image} alt={column2imageAlt} />
                  </BigTabImage>
                  <TextContainer>
                    <FlexRow3Heading>{column2heading}</FlexRow3Heading>
                    <FlexRow3Copy>{column2copy}</FlexRow3Copy>
                    <FlexRow3Webinar>{column2webinar}</FlexRow3Webinar>

                    <CTA>
                      {column2CTA}
                      &nbsp;
                      <ArrowRightPurple src={rightArrowPurpleSVG} alt="purple right arrow" />
                    </CTA>
                  </TextContainer>
                </GalleryContainer>
              </StyledLink>
            )}
            {column2outboundlink && (
              <OutboundLink href={column2outboundlink} alt={column2linkAlt}>
                <GalleryContainer>
                  <BigTabImage>
                    <ImageContainer image={column2image} alt={column2imageAlt} />
                  </BigTabImage>
                  <TextContainer>
                    <FlexRow3Heading>{column2heading}</FlexRow3Heading>
                    <FlexRow3Copy>{column2copy}</FlexRow3Copy>
                    <FlexRow3Webinar>{column2webinar}</FlexRow3Webinar>
                    <CTA>
                      {column2CTA}
                      &nbsp;
                      <ArrowRightPurple src={rightArrowPurpleSVG} alt="purple right arrow" />
                    </CTA>
                  </TextContainer>
                </GalleryContainer>
              </OutboundLink>
            )}
          </FlexRow3Container>
        </FlexRow3>
        <FlexRow3>
          <FlexRow3Container>
            {column3link && (
              <StyledLink to={column3link} alt={column3linkAlt}>
                <GalleryContainer>
                  <BigTabImage>
                    <ImageContainer image={column3image} alt={column3imageAlt} />
                  </BigTabImage>
                  <TextContainer>
                    <FlexRow3Heading>{column3heading}</FlexRow3Heading>
                    <FlexRow3Copy>{column3copy}</FlexRow3Copy>
                    <FlexRow3Webinar>{column3webinar}</FlexRow3Webinar>

                    <CTA>
                      {column3CTA}
                      &nbsp;
                      <ArrowRightPurple src={rightArrowPurpleSVG} alt="purple right arrow" />
                    </CTA>
                  </TextContainer>
                </GalleryContainer>
              </StyledLink>
            )}
            {column3outboundlink && (
              <OutboundLink href={column3outboundlink} alt={column3linkAlt}>
                <GalleryContainer>
                  <BigTabImage>
                    <ImageContainer image={column3image} alt={column3imageAlt} />
                  </BigTabImage>
                  <TextContainer>
                    <FlexRow3Heading>{column3heading}</FlexRow3Heading>
                    <FlexRow3Copy>{column3copy}</FlexRow3Copy>
                    <FlexRow3Webinar>{column3webinar}</FlexRow3Webinar>
                    <CTA>
                      {column3CTA}
                      &nbsp;
                      <ArrowRightPurple src={rightArrowPurpleSVG} alt="purple right arrow" />
                    </CTA>
                  </TextContainer>
                </GalleryContainer>
              </OutboundLink>
            )}
          </FlexRow3Container>
        </FlexRow3>
      </FlexRow>
    </LPUContainer>
  </OuterContainer>
);

ThreeColumnOverlap.defaultProps = {
  column1imageAlt: '',
  column1heading: '',
  column1copy: '',
  column1webinar: '',
  column1link: '',
  column1outboundlink: '',
  column1linkAlt: '',
  column1CTA: '',
  column2imageAlt: '',
  column2heading: '',
  column2copy: '',
  column2webinar: '',
  column2link: '',
  column2outboundlink: '',
  column2linkAlt: '',
  column2CTA: '',
  column3imageAlt: '',
  column3heading: '',
  column3copy: '',
  column3webinar: '',
  column3link: '',
  column3outboundlink: '',
  column3linkAlt: '',
  column3CTA: '',
  paddingBottom: '6rem',
  paddingLeft: '3rem',
  paddingLeftDesktop: '6rem',
  paddingRight: '3rem',
  paddingRightDesktop: '6rem',
};

ThreeColumnOverlap.propTypes = {
  column1image: GATSBY_IMAGE.isRequired,
  column1imageAlt: PropTypes.string,
  column1heading: PropTypes.string,
  column1copy: PropTypes.string,
  column1webinar: PropTypes.string,
  column1link: PropTypes.string,
  column1outboundlink: PropTypes.string,
  column1linkAlt: PropTypes.string,
  column1CTA: PropTypes.string,
  column2image: GATSBY_IMAGE.isRequired,
  column2imageAlt: PropTypes.string,
  column2heading: PropTypes.string,
  column2copy: PropTypes.string,
  column2webinar: PropTypes.string,
  column2link: PropTypes.string,
  column2outboundlink: PropTypes.string,
  column2linkAlt: PropTypes.string,
  column2CTA: PropTypes.string,
  column3image: GATSBY_IMAGE.isRequired,
  column3imageAlt: PropTypes.string,
  column3heading: PropTypes.string,
  column3copy: PropTypes.string,
  column3webinar: PropTypes.string,
  column3link: PropTypes.string,
  column3outboundlink: PropTypes.string,
  column3linkAlt: PropTypes.string,
  column3CTA: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingLeftDesktop: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingRightDesktop: PropTypes.string,
};

export default ThreeColumnOverlap;
