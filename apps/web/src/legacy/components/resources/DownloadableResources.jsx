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

const DownloadableResourcesContainer = styled.div`
  padding-top: 128px;
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

const DownloadableResources = () => {
  const images = useStaticQuery(graphql`
    query DownloadableResources {
      download_artisanalMarketingHandbook: file(
        relativePath: {
          eq: "assets/images/resources/downloads/artisanal-marketing-handbook_1216px@2x.jpg"
        }
      ) {
        ...constrained
      }
      download_conversionTacticsGenerator: file(
        relativePath: {
          eq: "assets/images/resources/downloads/conversion-tactic-generator_1216px@2x.jpg"
        }
      ) {
        ...constrained
      }
      download_copyhackersWorkbook: file(
        relativePath: { eq: "assets/images/resources/downloads/copyhackers-workbook_1216px@2x.jpg" }
      ) {
        ...constrained
      }
      download_facebookAdsLookbook: file(
        relativePath: {
          eq: "assets/images/resources/downloads/facebook-ads-lookbook_1216px@2x.jpg"
        }
      ) {
        ...constrained
      }
      download_findClientsEbook: file(
        relativePath: {
          eq: "assets/images/resources/downloads/find-and-book-dream-clients-book_808px@2x.jpg"
        }
      ) {
        ...constrained
      }
      download_gettingBusinessOnlineBook: file(
        relativePath: {
          eq: "assets/images/resources/downloads/getting-your-business-online-book_1216px@2x.jpg"
        }
      ) {
        ...constrained
      }
      download_landingPageLookbook: file(
        relativePath: {
          eq: "assets/images/resources/downloads/landing-page-lookbook_1216px@2x.jpg"
        }
      ) {
        ...constrained
      }
      download_seoChecklist: file(
        relativePath: {
          eq: "assets/images/resources/downloads/seo-checklist-for-small-businesses_808px@2x.jpg"
        }
      ) {
        ...constrained
      }
      download_webDesignHandbook: file(
        relativePath: { eq: "assets/images/resources/downloads/web-design-handbook_808px@2x.jpg" }
      ) {
        ...constrained
      }
      download_websiteGoalSettingWorkbook: file(
        relativePath: {
          eq: "assets/images/resources/downloads/website-goal-setting-workbook_808px@2x.jpg"
        }
      ) {
        ...constrained
      }
    }
  `);
  return (
    <DownloadableResourcesContainer name="downloads">
      <HeadingFlexbox>
        <div>
          <CustomersHeading>Downloadable Resources</CustomersHeading>
          <CustomersSubHeading>
            Get the guides, checklists, and worksheets you need to market like a pro.
          </CustomersSubHeading>
        </div>
      </HeadingFlexbox>
      <ColumnFeatureOverlap
        image={getImage(images.download_conversionTacticsGenerator)}
        imageAlt="Conversion Tactics Generator"
        supertitle="Featured Resource"
        title="Find New Prospects (and Profits) With These Marketing Tips and Tactics"
        text="Looking for more leads and sales but not sure how to find them? Answer a few quick questions to get marketing strategies and tips that are tailored to your business and goals."
        outboundLink="https://lp.leadpages.com/conversion-tactics-generator/"
        linkAlt="Conversion Tactics Generator"
        buttonText="Get My Free Tactics"
      />
      <ThreeColumnOverlap
        column1image={getImage(images.download_seoChecklist)}
        column1imageAlt="SEO Checklist for Small Businesses"
        column1heading="SEO Checklist for Small Businesses"
        column1copy="Need organic traffic but stuck on SEO? Learn what works in SEO today so you can decide what’s right for your business and how to invest your time and resources wisely."
        column1outboundlink="https://lp.leadpages.com/seo-checklist/"
        column1linkAlt="SEO Checklist for Small Businesses"
        column1CTA="Get the Checklist"
        column2image={getImage(images.download_webDesignHandbook)}
        column2imageAlt="The Web Design Handbook for Non-Designers"
        column2heading="The Web Design Handbook for Non-Designers"
        column2copy="Not a designer? That’s not a problem. Use this handbook to create gorgeous, functional websites, landing pages, and pop-ups without breaking a sweat."
        column2outboundlink="https://lp.leadpages.com/web-design-handbook/"
        column2linkAlt="The Web Design Handbook for Non-Designers"
        column2CTA="Get the Handbook"
        column3image={getImage(images.download_findClientsEbook)}
        column3imageAlt="40+ Tips to Help You Find & Book Your Dream Clients"
        column3heading="40+ Tips to Help You Find & Book Your Dream Clients"
        column3copy="Learn from 40+ successful coaches and consultants who share their top tips for finding and booking clients—even if you’re starting from scratch."
        column3outboundlink="https://lp.leadpages.com/get-clients-ebook/"
        column3linkAlt="40+ Tips to Help You Find & Book Your Dream Clients"
        column3CTA="Get the eBook"
        paddingBottom="0"
      />
      <ThreeColumnOverlap
        column1image={getImage(images.download_websiteGoalSettingWorkbook)}
        column1imageAlt="Website Goal Setting Workbook"
        column1heading="Website Goal Setting Workbook"
        column1copy="Discover how to make your website work for your business. In this goal-oriented workbook, you will learn to make the most of your cornerstone content."
        column1outboundlink="https://lp.leadpages.com/website-workbook/"
        column1linkAlt="Website Goal Setting Workbook"
        column1CTA="Get the Workbook"
        column2image={getImage(images.download_landingPageLookbook)}
        column2imageAlt="Landing page lookbook: 50+ examples to inspire you"
        column2heading="Landing page lookbook: 50+ examples to inspire you"
        column2copy="From art & design to how you architect your message—these landing page examples will inspire you to add a touch of 'pizazz' to your next web page."
        column2outboundlink="https://lp.leadpages.com/landing-page-lookbook/"
        column2linkAlt="Landing page lookbook: 50+ examples to inspire you"
        column2CTA="Get the eBook"
        column3image={getImage(images.download_copyhackersWorkbook)}
        column3imageAlt="Copyhackers fill-in-the-blank workbook"
        column3heading="Copyhackers fill-in-the-blank workbook"
        column3copy="Get fool-proof formulas to write high-converting landing pages without breaking a sweat—including 4 essential page templates and a bonus surprise!"
        column3outboundlink="https://lp.leadpages.com/copy-hackers-ebook/"
        column3linkAlt="Copyhackers fill-in-the-blank workbook"
        column3CTA="Get the Workbook"
        paddingBottom="0"
      />
      <ThreeColumnOverlap
        column1image={getImage(images.download_gettingBusinessOnlineBook)}
        column1imageAlt="10 Steps to Getting Your Business Online"
        column1heading="10 Steps to Getting Your Business Online"
        column1copy="Learn how to 'get your business online' the right way: shorten the learning curve, make the most of your resources, and maximize your impact."
        column1outboundlink="https://lp.leadpages.com/smb-website-10-steps/"
        column1linkAlt="10 Steps to Getting Your Business Online"
        column1CTA="Get the eBook"
        column2image={getImage(images.download_artisanalMarketingHandbook)}
        column2imageAlt="Artisanal Marketing Handbook"
        column2heading="Artisanal Marketing Handbook"
        column2copy="Stand out from the crowd by showcasing quality over quantity. Discover our top 10 favorite ways to add your own touch and attract the right customers."
        column2outboundlink="https://lp.leadpages.com/10-tips-artisanal-marketing/"
        column2linkAlt="Artisanal Marketing Handbook"
        column2CTA="Get the Checklist"
        column3image={getImage(images.download_facebookAdsLookbook)}
        column3imageAlt="Facebook Ad Lookbook: 250+ Examples"
        column3heading="Facebook Ad Lookbook: 250+ Examples"
        column3copy="Need a creative kick-start? Inspire your next campaign with 250+ real-world ad examples, showcasing different ad formats from businesses big and small."
        column3outboundlink="https://lp.leadpages.com/facebook-ad-examples/"
        column3linkAlt="Facebook Ad Lookbook: 250+ Examples"
        column3CTA="Get the Lookbook"
        paddingBottom="0"
      />
    </DownloadableResourcesContainer>
  );
};

export default DownloadableResources;
