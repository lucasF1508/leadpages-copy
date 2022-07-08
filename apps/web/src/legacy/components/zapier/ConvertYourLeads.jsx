import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// images
import rightArrowIcon from '../../assets/images/global/arrow_right_grey.svg';

const OuterContainer = styled.div`
  position: relative;
  background-color: #f7f7f7;
`;

const LPUContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 4rem;
  padding-bottom: 6rem;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 576px) {
    padding-top: 4rem;
    padding-bottom: 6rem;
    padding-right: 3rem;
    padding-left: 3rem;
  }
  @media (min-width: 992px) {
    padding-top: 10rem;
    padding-bottom: 10rem;
    padding-right: 6rem;
    padding-left: 6rem;
  }
  @media (max-width: 400px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

const LPUHeadline = styled.div`
  font-family: 'Value Serif';
  font-size: 1.875rem;
  letter-spacing: -0.03125rem;
  line-height: 2.25rem;
  margin-bottom: 5rem;
  color: #0f0c09;
  @media (max-width: 576px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
  }
`;

const FlexRow = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const FlexRowItem = styled.div`
  min-height: 1px;
  position: relative;
  text-decoration: none;
  width: 100%;
  padding-right: 3%;
  margin: auto;
  @media (max-width: 400px) {
    padding-right: 0;
    padding-left: 3%;
  }
`;

const FlexRow3 = styled(FlexRowItem)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  min-width: 266px;
  @media (max-width: 1083px) {
    max-width: 47%;
  }
  @media (min-width: 1084px) {
    max-width: 30%;
  }
  @media (max-width: 400px) {
    min-width: 290px;
  }
`;

const FlexRow3Container = styled.div``;

const LogosContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  text-align: left;
  min-width: 280px;
  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 0;
  }
`;

const Image = styled(GatsbyImage)`
  height: 100%;
  width: 100%;
  max-width: 48px;
  max-height: 48px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 1rem;
`;

const FlexRow3Heading = styled.div`
  font-family: 'Apercu Pro';
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #0f0c09;
`;

const FlexRow3Copy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 1.25rem;
  color: #575452;
`;

const ArrowIcon = styled.img`
  display: inline-block;
  vertical-align: middle;
  margin-left: -8px;
  margin-right: 8px;
  color: #bfbebd;
  width: 24px;
  height: 24px;
`;

const ConvertYourLeads = () => {
  const images = useStaticQuery(graphql`
    query ConvertYourLeadsQuery {
      autopilotIcon: file(
        relativePath: { eq: "assets/images/integrations/Autopilot-Leadpages-Zapier@2x.png" }
      ) {
        ...fixed
      }
      dripIcon: file(
        relativePath: { eq: "assets/images/integrations/Drip_Leadpages-Zapier@2x.jpg" }
      ) {
        ...fixed
      }
      emailIcon: file(
        relativePath: { eq: "assets/images/integrations/Email_Leadpages_Zapier@2x.jpg" }
      ) {
        ...fixed
      }
      gmailIcon: file(
        relativePath: { eq: "assets/images/integrations/Gmail-Leadpages-Zapier@2x.jpg" }
      ) {
        ...fixed
      }
      hubspotIcon: file(
        relativePath: { eq: "assets/images/integrations/Hubspot-Leadpages-Zapier@2x.jpg" }
      ) {
        ...fixed
      }
      klaviyoIcon: file(
        relativePath: { eq: "assets/images/integrations/Klaviyo-Leadpages-Zapier@2x.jpg" }
      ) {
        ...fixed
      }
      knackIcon: file(
        relativePath: { eq: "assets/images/integrations/Knack-Leadpages-Zapier@2x.jpg" }
      ) {
        ...fixed
      }
      leadpagesIcon: file(
        relativePath: { eq: "assets/images/integrations/Leadpages-Leadpages-Zapier@2x.jpg" }
      ) {
        ...fixed
      }
      mailchimpIcon: file(
        relativePath: { eq: "assets/images/integrations/Mailchimp_Leadpages_Zapier@2x.jpg" }
      ) {
        ...fixed
      }
      mysqlIcon: file(
        relativePath: { eq: "assets/images/integrations/MySQL-Leadpages-Zapier@2x.jpg" }
      ) {
        ...fixed
      }
      pipedriveIcon: file(
        relativePath: { eq: "assets/images/integrations/Pipedrive-Leadpages-Zapier@2x.jpg" }
      ) {
        ...fixed
      }
      salesforceIcon: file(
        relativePath: { eq: "assets/images/integrations/Salesforce-Leadpages-Zapier@2x.jpg" }
      ) {
        ...fixed
      }
      sheetsIcon: file(
        relativePath: { eq: "assets/images/integrations/Sheets_Leadpages_Zapier@2x.jpg" }
      ) {
        ...fixed
      }
      slackIcon: file(
        relativePath: { eq: "assets/images/integrations/Slack-Leadpages-Zapier@2x.jpg" }
      ) {
        ...fixed
      }
      tmIcon: file(relativePath: { eq: "assets/images/integrations/TM_Leadpages_Zapier@2x.jpg" }) {
        ...fixed
      }
      trelloIcon: file(
        relativePath: { eq: "assets/images/integrations/Trello-Leadpages-Zapier@2x.png" }
      ) {
        ...fixed
      }
      twilioIcon: file(
        relativePath: { eq: "assets/images/integrations/Twilio-Leadpages-Zapier@2x.jpg" }
      ) {
        ...fixed
      }
      zendeskIcon: file(
        relativePath: { eq: "assets/images/integrations/Zendesk-Leadpages-Zapier@2x.png" }
      ) {
        ...fixed
      }
    }
  `);
  return (
    <OuterContainer>
      <LPUContainer>
        <LPUHeadline>Convert your leads into (automated) action</LPUHeadline>
        <FlexRow>
          <FlexRow3>
            <FlexRow3Container>
              <LogosContainer>
                <Image image={getImage(images.leadpagesIcon)} alt="Leadpages Icon" />
                <ArrowIcon src={rightArrowIcon} />
                <Image image={getImage(images.dripIcon)} alt="Drip Icon" />
                <Image image={getImage(images.klaviyoIcon)} alt="Klaviyo Icon" />
                <Image image={getImage(images.mailchimpIcon)} alt="Mailchimp Icon" />
              </LogosContainer>
              <FlexRow3Heading>Send leads to email lists</FlexRow3Heading>
              <FlexRow3Copy>
                Capture and collect form subscribers directly inside a segmented email database.
              </FlexRow3Copy>
            </FlexRow3Container>
          </FlexRow3>
          <FlexRow3>
            <FlexRow3Container>
              <LogosContainer>
                <Image image={getImage(images.leadpagesIcon)} alt="Leadpages Icon" />
                <ArrowIcon src={rightArrowIcon} />
                <Image image={getImage(images.twilioIcon)} alt="Twilio Icon" />
                <Image image={getImage(images.tmIcon)} alt="TM Icon" />
              </LogosContainer>
              <FlexRow3Heading>Deliver SMS text messages</FlexRow3Heading>
              <FlexRow3Copy>
                Start a text message conversation with people who submit a form.
              </FlexRow3Copy>
            </FlexRow3Container>
          </FlexRow3>
          <FlexRow3>
            <FlexRow3Container>
              <LogosContainer>
                <Image image={getImage(images.leadpagesIcon)} alt="Leadpages Icon" />
                <ArrowIcon src={rightArrowIcon} />
                <Image image={getImage(images.hubspotIcon)} alt="Hubspot Icon" />
                <Image image={getImage(images.salesforceIcon)} alt="Salesforce Icon" />
                <Image image={getImage(images.pipedriveIcon)} alt="Pipedrive Icon" />
              </LogosContainer>
              <FlexRow3Heading>Update CRM contacts</FlexRow3Heading>
              <FlexRow3Copy>
                Add or update CRM contacts after incoming form submissions.
              </FlexRow3Copy>
            </FlexRow3Container>
          </FlexRow3>
          <FlexRow3>
            <FlexRow3Container>
              <LogosContainer>
                <Image image={getImage(images.leadpagesIcon)} alt="Leadpages Icon" />
                <ArrowIcon src={rightArrowIcon} />
                <Image image={getImage(images.sheetsIcon)} alt="Sheets Icon" />
                <Image image={getImage(images.mysqlIcon)} alt="MySQL Icon" />
                <Image image={getImage(images.knackIcon)} alt="Knack Icon" />
              </LogosContainer>
              <FlexRow3Heading>Log submissions</FlexRow3Heading>
              <FlexRow3Copy>
                Register form submissions in a Google Sheet or MySQL table for future reference.
              </FlexRow3Copy>
            </FlexRow3Container>
          </FlexRow3>
          <FlexRow3>
            <FlexRow3Container>
              <LogosContainer>
                <Image image={getImage(images.leadpagesIcon)} alt="Leadpages Icon" />
                <ArrowIcon src={rightArrowIcon} />
                <Image image={getImage(images.gmailIcon)} alt="Gmail Icon" />
                <Image image={getImage(images.slackIcon)} alt="Slack Icon" />
                <Image image={getImage(images.emailIcon)} alt="Email Icon" />
              </LogosContainer>
              <FlexRow3Heading>Get submission digests</FlexRow3Heading>
              <FlexRow3Copy>
                Provide your team with a daily/weekly/monthly report via email or Slack.
              </FlexRow3Copy>
            </FlexRow3Container>
          </FlexRow3>
          <FlexRow3>
            <FlexRow3Container>
              <LogosContainer>
                <Image image={getImage(images.leadpagesIcon)} alt="Leadpages Icon" />
                <ArrowIcon src={rightArrowIcon} />
                <Image image={getImage(images.zendeskIcon)} alt="Zendesk Icon" />
                <Image image={getImage(images.autopilotIcon)} alt="AutoPilot Icon" />
                <Image image={getImage(images.trelloIcon)} alt="Trello Icon" />
              </LogosContainer>
              <FlexRow3Heading>Build custom workflows</FlexRow3Heading>
              <FlexRow3Copy>
                Set up multi-step integrations to automate your project management and marketing
                stack.
              </FlexRow3Copy>
            </FlexRow3Container>
          </FlexRow3>
        </FlexRow>
      </LPUContainer>
    </OuterContainer>
  );
};

export default ConvertYourLeads;
