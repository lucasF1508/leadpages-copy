import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// components
import ColumnFeatureOverlap from '../layout/ColumnFeatureOverlap';
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

const WebinarsMainContainer = styled.div`
  padding-top: 160px;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  @media (max-width: 599px) {
    padding-top: 4rem;
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

const ArrowContainer = styled.span``;

const ArrowRight = styled.img`
  margin-top: auto;
  margin-bottom: auto;
  width: 20px;
  height: 10px;
`;

const HeadingLink = styled(Link)`
  text-decoration: none;
  color: #603eff;
`;

const OutboundHeadingLink = styled.a`
  text-decoration: none;
  color: #603eff;
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

const WebinarsContainer = () => {
  const images = useStaticQuery(graphql`
    query WebinarsContainerQuery {
      webinarsImage1: file(
        relativePath: { eq: "assets/images/resources/webinars/Brings-Business@2x.jpg" }
      ) {
        ...constrained
      }
      webinarsImage2: file(
        relativePath: { eq: "assets/images/resources/webinars/Webinar-Essentials@2x.jpg" }
      ) {
        ...constrained
      }
      webinarsImage3: file(
        relativePath: { eq: "assets/images/resources/webinars/Coaching-Conversion@2x.jpg" }
      ) {
        ...constrained
      }
      webinarsFeaturedTrainingImage: file(
        relativePath: { eq: "assets/images/resources/webinars/List-Building-Webinar@2x.jpg" }
      ) {
        ...constrained
      }
    }
  `);
  return (
    <WebinarsMainContainer name="webinars">
      <HeadingFlexbox>
        <div>
          <CustomersHeading>Free Webinars & Marketing Training</CustomersHeading>
          <CustomersSubHeading>
            Take each and every stage of your business growth further with expert training.
          </CustomersSubHeading>
        </div>
        <OutboundHeadingLink href="/webinars" alt="all webinars">
          <HeadingButton>
            All Webinars&nbsp;
            <ArrowContainer>
              <ArrowRight src={rightArrowSVG} alt="right arrow" />
            </ArrowContainer>
          </HeadingButton>
        </OutboundHeadingLink>
      </HeadingFlexbox>
      <ColumnFeatureOverlap
        image={getImage(images.webinarsFeaturedTrainingImage)}
        imageAlt="Attract Better Clients as You Build Your Email List Faster"
        supertitle="Featured Training"
        title="Attract Better Clients as You Build Your Email List Faster"
        text="Discover how to create the right type of lead magnets for your business, get more qualified leads (quickly), and turn leads into customers within 6 days."
        outboundLink="https://lp.leadpages.com/build-your-email-list/"
        linkAlt="Attract Better Clients as You Build Your Email List Faster"
        buttonText="Webinar Details"
      />
      <ThreeColumnOverlap
        column1image={getImage(images.webinarsImage1)}
        column1imageAlt="Build a Website That (Actually) Brings You Business"
        column1heading="Build a Website That (Actually) Brings You Business"
        column1copy="Learn how to create a DIY website that works for you 24/7: collecting leads and closing sales."
        column1webinar="Free Training (Instant Access)"
        column1outboundlink="/webinars/website-brings-you-business"
        column1linkAlt="Webinar Details"
        column1CTA="Webinar Details"
        column2image={getImage(images.webinarsImage2)}
        column2imageAlt="Leadpages Essentials"
        column2heading="Leadpages Essentials: How to master Leadpages faster"
        column2copy="This workshop is designed to guide you through the basics of the Leadpages platform."
        column2webinar="Free Training (Instant Access)"
        column2outboundlink="/webinars/essentials"
        column2linkAlt="Webinar Details"
        column2CTA="Webinar Details"
        column3image={getImage(images.webinarsImage3)}
        column3imageAlt="Conversion Coaching"
        column3heading="Conversion Coaching: Our best conversion advice"
        column3copy="Access cutting-edge business strategy for today's digital marketer."
        column3webinar="Wednesdays at 2 PM Central"
        column3outboundlink="/webinars/conversion-coaching"
        column3linkAlt="Webinar Details"
        column3CTA="Webinar Details"
        paddingBottom="0"
      />
    </WebinarsMainContainer>
  );
};

export default WebinarsContainer;
