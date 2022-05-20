import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// components
import ThreeColumn from '../layout/ThreeColumn';
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

const BlogContainer = styled.div`
  padding-top: 107px;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const HeadingLink = styled.a`
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

const BlogSection = () => {
  const images = useStaticQuery(graphql`
    query BlogSectionQuery {
      blogImage1: file(
        relativePath: {
          eq: "assets/images/resources/blog/blog-website-builder-announcement_690px@2x.jpg"
        }
      ) {
        ...constrained
      }
      blogImage2: file(
        relativePath: {
          eq: "assets/images/resources/blog/blog-secrets-of-high-converting-sales-pags_1200px@2x.jpg"
        }
      ) {
        ...constrained
      }
      blogImage3: file(
        relativePath: {
          eq: "assets/images/resources/blog/blog-calendly-and-leadpages_790px@2x.jpg"
        }
      ) {
        ...constrained
      }
    }
  `);
  return (
    <BlogContainer id="blogsection" name="blog">
      <HeadingFlexbox>
        <div>
          <CustomersHeading>Faves from our Blog</CustomersHeading>
          <CustomersSubHeading>
            Stay up-to-date on marketing trends with articles that will teach and inspire. From
            conversion optimization tips, social media marketing tricks, and case studies, to the
            nitty-gritties of copywriting tactics and timing for scheduling posts, it’s everything
            you need to optimize your marketing strategy.
          </CustomersSubHeading>
        </div>
        <HeadingLink href="https://www.leadpages.com/blog" alt="blog">
          <HeadingButton>
            Visit the Blog&nbsp;
            <ArrowContainer>
              <ArrowRight src={rightArrowSVG} alt="right arrow" />
            </ArrowContainer>
          </HeadingButton>
        </HeadingLink>
      </HeadingFlexbox>
      <ThreeColumn
        column1image={getImage(images.blogImage1)}
        column1imageAlt="[Feature Release] Get online and grow with Leadpages Sites"
        column1heading="[Feature Release] Get online and grow with Leadpages Sites"
        column1outboundlink="https://www.leadpages.com/blog/leadpages-website-builder/"
        column1linkAlt="Read More"
        column1CTA="Read More"
        column2image={getImage(images.blogImage2)}
        column2imageAlt="The Secrets of High-Converting, Non-Sleazy Sales Pages"
        column2heading="The Secrets of High-Converting, Non-Sleazy Sales Pages"
        column2outboundlink="https://www.leadpages.com/blog/sales-page/"
        column2linkAlt="Read More"
        column2CTA="Read More"
        column3image={getImage(images.blogImage3)}
        column3imageAlt="Calendly + Leadpages: Book an Appointment Right on Your Landing Page"
        column3heading="Calendly + Leadpages: Book an Appointment Right on Your Landing Page"
        column3outboundlink="https://www.leadpages.com/blog/calendly-widget/"
        column3linkAlt="Read More"
        column3CTA="Read More"
      />
    </BlogContainer>
  );
};

export default BlogSection;
