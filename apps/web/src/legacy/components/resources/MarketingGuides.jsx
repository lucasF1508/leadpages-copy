import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// components
import ColumnFeatureOverlap from '../layout/ColumnFeatureOverlap';
import ThreeColumnOverlap from '../layout/ThreeColumnOverlap';

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

const MarketingGuidesContainer = styled.div`
  padding-top: 160px;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
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

const MarketingGuides = () => {
  const images = useStaticQuery(graphql`
    query MarketingGuidesQuery {
      guidesImage1: file(
        relativePath: { eq: "assets/images/resources/guides/Guide-to-Landing-Pages_808px@2x.png" }
      ) {
        ...constrained
      }
      guidesImage2: file(
        relativePath: { eq: "assets/images/resources/guides/Guide-to-Lead-Generation@2x.png" }
      ) {
        ...constrained
      }
      guidesImage3: file(
        relativePath: {
          eq: "assets/images/resources/guides/Guide-to-Conversion-Rate-Optimization@2x.png"
        }
      ) {
        ...constrained
      }
      featuredGuideImage: file(
        relativePath: { eq: "assets/images/resources/guides/Landing Page Examples_808px@2x.jpg" }
      ) {
        ...constrained
      }
    }
  `);

  return (
    <MarketingGuidesContainer name="guides">
      <HeadingFlexbox>
        <div>
          <CustomersHeading>Marketing Guides</CustomersHeading>
          <CustomersSubHeading>
            Master the essentials of conversion marketing with our in-depth guides.
          </CustomersSubHeading>
        </div>
      </HeadingFlexbox>
      <ColumnFeatureOverlap
        image={getImage(images.featuredGuideImage)}
        imageAlt="Get Inspired with 100+ Landing Page Examples"
        supertitle="Featured"
        title="Get Inspired with 100+ Landing Page Examples"
        text="Need some fresh ideas for an opt-in page, sales page, or to spice up your next split test? Peruse our hand-picked list of top real-world landing pages to take away key lessons and level-up your own marketing efforts."
        link="/landing-page-examples"
        linkAlt="Get Inspired with 100+ Landing Page Examples"
        buttonText="Dive in"
      />
      <ThreeColumnOverlap
        column1image={getImage(images.guidesImage1)}
        column1imageAlt="The Ultimate Guide to Landing Pages"
        column1heading="The Ultimate Guide to Landing Pages"
        column1copy="Deliver the right message to the right audience so that you can get the biggest possible return on your time and money. We’ll start with the very basics and make our way down to the nitty-gritty of effective landing page copywriting and design."
        column1link="/landing-pages-guide/"
        column1linkAlt="The Ultimate Guide to Landing Pages"
        column1CTA="Read the Guide"
        column2image={getImage(images.guidesImage2)}
        column2imageAlt="The Guide to Lead Generation"
        column2heading="The Guide to Lead Generation"
        column2copy="
          Learn how to create a pipeline for attracting web traffic and converting clicks into contacts—it’s the best way to ensure your small business survives and thrives over the long-term."
        column2link="/lead-generation-guide/"
        column2linkAlt="The Guide to Lead Generation"
        column2CTA="Read the Guide"
        column3image={getImage(images.guidesImage3)}
        column3imageAlt="The Guide to Conversion Rate Optimization (CRO)"
        column3heading="The Guide to Conversion Rate Optimization (CRO)"
        column3copy="What makes a great conversion rate and how can you use A/B testing to make the most of every visitor? Become an unofficial conversion rate expert with this hands-on field guide."
        column3link="/conversion-optimization-guide/"
        column3linkAlt="The Guide to Conversion Rate Optimization (CRO)"
        column3CTA="Read the Guide"
        paddingBottom="0"
      />
    </MarketingGuidesContainer>
  );
};

export default MarketingGuides;
