import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
// components
import ThreeColumnOverlap from '../layout/ThreeColumnOverlap';
// images
import rightArrowSVG from '../../assets/images/global/arrow_right_purple.svg';

const HeadingFlexbox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 35px;
  border-bottom: 1px solid rgba(15, 12, 9, 0.08);
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 992px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }
  @media (max-width: 992px) {
    display: block;
    text-align: center;
  }
`;

const LeadGenerationContainer = styled.div`
  padding-top: 160px;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media (max-width: 599px) {
    padding-top: 4rem;
  }
`;

const HeadingLink = styled(Link)`
  text-decoration: none;
  color: #603eff;
`;

const ArrowContainer = styled.span``;

const ArrowRight = styled.img`
  margin-top: auto;
  margin-bottom: auto;
  width: 20px;
  height: 10px;
`;

const HeadingButton = styled.button`
  align-self: flex-end;
  padding-left: 2%;
  padding-right: 2%;
  width: 222px;
  height: 48px;
  border-radius: 48px;
  border: 3px solid #d1c6f9;
  background-color: #fff;
  color: #603eff;
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  @media (max-width: 340px) {
    width: 209px;
    font-size: 16px;
    align-self: center;
  }

  &:hover {
    background-color: #603eff;
    color: #ffffff;
    cursor: pointer;
    border: 3px solid #603eff;
  }

  &:hover ${HeadingLink} {
    color: #fff;
  }

  &:hover ${ArrowRight} {
    -webkit-filter: brightness(0) invert(1);
    filter: brightness(0) invert(1);
  }
`;

const CustomersHeading = styled.div`
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.1px;
  line-height: 36px;
  color: #0f0c09;
  @media (max-width: 992px) {
    margin-bottom: 27px;
  }
`;

const CustomersSubHeading = styled.div`
  font-size: 18px;
  line-height: 28px;
  font-family: 'Apercu Pro';
  color: #575452;
  margin-top: 24px;
  @media (max-width: 992px) {
    display: none;
  }
`;

const LeadGeneration = () => {
  const images = useStaticQuery(graphql`
    query LeadGeneration {
      podcastImage1: file(
        relativePath: { eq: "assets/images/resources/podcast/podcast_pat-flynn_1216px@2x.jpg" }
      ) {
        ...constrained
      }
      podcastImage2: file(
        relativePath: { eq: "assets/images/resources/podcast/podcast_chihyu-smith_1216px@2x.jpg" }
      ) {
        ...constrained
      }
      podcastImage3: file(
        relativePath: { eq: "assets/images/resources/podcast/podcast_talia-wolf_1216px@2x.jpg" }
      ) {
        ...constrained
      }
    }
  `);
  return (
    <LeadGenerationContainer name="podcast">
      <HeadingFlexbox>
        <div>
          <CustomersHeading>The Lead Generation Podcast</CustomersHeading>
          <CustomersSubHeading>
            Hear from real-world entrepreneurs who share their most valuable lessons.
          </CustomersSubHeading>
        </div>
        <HeadingButton>
          <HeadingLink to="/podcast" alt="podcast">
            All Episodes&nbsp;
            <ArrowContainer>
              <ArrowRight src={rightArrowSVG} alt="right arrow" />
            </ArrowContainer>
          </HeadingLink>
        </HeadingButton>
      </HeadingFlexbox>
      <ThreeColumnOverlap
        column1image={getImage(images.podcastImage1)}
        column1imageAlt="Pat Flynn"
        column1heading="Fired From His Day Job & Free to Create His Dream Business with Pat Flynn"
        column1copy="Pat shares the entrepreneurial journey he's been on since he was fired from his promising day job, and the frustrations and lessons he's learned along the way."
        column1outboundlink="https://www.leadpages.com/blog/pat-flynn-lead-generation-podcast/"
        column1linkAlt="Pat Flynn"
        column1CTA="Listen in"
        column2image={getImage(images.podcastImage2)}
        column2imageAlt="ChihYu Smith"
        column2heading="Delighting a Hungry Audience with Asian Paleo with ChihYu Smith"
        column2copy="ChihYu Smith shares tips on discovering your niche, how to listen better to your audience, and secrets she’s learned in building up her following."
        column2outboundlink="https://www.leadpages.com/blog/chihyu-smith-lead-generation-podcast/"
        column2linkAlt="ChihYu Smith"
        column2CTA="Listen in"
        column3image={getImage(images.podcastImage3)}
        column3imageAlt="Talia Wolf"
        column3heading="Better Practices for Conversion Rate Optimization with Talia Wolf"
        column3copy="Go beyond landing page “best practices” with a better approach to conversion rate optimization using emotion and psychology."
        column3outboundlink="https://www.leadpages.com/blog/talia-wolf-lead-generation-podcast/"
        column3linkAlt="Talia Wolf"
        column3CTA="Listen in"
        paddingBottom="0"
      />
    </LeadGenerationContainer>
  );
};

export default LeadGeneration;
