import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import autopilotIcon from '@legacy/assets/images/integrations/Autopilot-Leadpages-Zapier@2x.png'
import dripIcon from '@legacy/assets/images/integrations/Drip_Leadpages-Zapier@2x.jpg'
import emailIcon from '@legacy/assets/images/integrations/Email_Leadpages_Zapier@2x.jpg'
import gmailIcon from '@legacy/assets/images/integrations/Gmail-Leadpages-Zapier@2x.jpg'
import hubspotIcon from '@legacy/assets/images/integrations/Hubspot-Leadpages-Zapier@2x.jpg'
import klaviyoIcon from '@legacy/assets/images/integrations/Klaviyo-Leadpages-Zapier@2x.jpg'
import knackIcon from '@legacy/assets/images/integrations/Knack-Leadpages-Zapier@2x.jpg'
import leadpagesIcon from '@legacy/assets/images/integrations/Leadpages-Leadpages-Zapier@2x.jpg'
import mailchimpIcon from '@legacy/assets/images/integrations/Mailchimp_Leadpages_Zapier@2x.jpg'
import mysqlIcon from '@legacy/assets/images/integrations/MySQL-Leadpages-Zapier@2x.jpg'
import pipedriveIcon from '@legacy/assets/images/integrations/Pipedrive-Leadpages-Zapier@2x.jpg'
import salesforceIcon from '@legacy/assets/images/integrations/Salesforce-Leadpages-Zapier@2x.jpg'
import sheetsIcon from '@legacy/assets/images/integrations/Sheets_Leadpages_Zapier@2x.jpg'
import slackIcon from '@legacy/assets/images/integrations/Slack-Leadpages-Zapier@2x.jpg'
import tmIcon from '@legacy/assets/images/integrations/TM_Leadpages_Zapier@2x.jpg'
import trelloIcon from '@legacy/assets/images/integrations/Trello-Leadpages-Zapier@2x.png'
import twilioIcon from '@legacy/assets/images/integrations/Twilio-Leadpages-Zapier@2x.jpg'
import zendeskIcon from '@legacy/assets/images/integrations/Zendesk-Leadpages-Zapier@2x.png'
import rightArrowIcon from '@legacy/assets/images/global/arrow_right_grey.svg'

const OuterContainer = styled('div', {
  position: 'relative',
  backgroundColor: '$grayAlt',
})

const LPUContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  paddingTop: '4rem',
  paddingBottom: '6rem',
  px: '3rem',

  '@>m': {
    py: '10rem',
    px: '6rem',
  },

  '@media (max-width: 400px)': {
    px: '1rem',
  },
})

const LPUHeadline = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '1.875rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '2.25rem',
  marginBottom: '5rem',
  color: '$text',

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const FlexRow = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
  paddingRight: '3%',
  margin: 'auto',

  '@media (max-width: 400px)': {
    paddingRight: 0,
    paddingLeft: '3%',
  },
})

const FlexRow3 = styled(FlexRowItem, {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2rem',
  minWidth: '266px',

  '@media (max-width: 1083px)': {
    maxWidth: '47%',
  },

  '@media (min-width: 1084px)': {
    maxWidth: '30%',
  },

  '@media (max-width: 400px)': {
    minWidth: '290px',
  },
})

const FlexRow3Container = styled('div', {})

const LogosContainer = styled('div', {
  width: '100%',
  marginBottom: '2rem',
  textAlign: 'left',
  minWidth: '280px',

  '&::before': {
    content: `''`,
    display: 'inline-block',
    verticalAlign: 'middle',
    height: 0,
  },
})

const StyledImage = styled(Image, {
  height: '100%',
  width: '100%',
  maxWidth: '48px',
  maxHeight: '48px',
  display: 'inline-block',
  verticalAlign: 'middle',
  marginRight: '1rem',
})

const FlexRow3Heading = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  lineHeight: '28px',
  fontWeight: 500,
  marginBottom: '2rem',
  color: '$text',
})

const FlexRow3Copy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  marginBottom: '1.25rem',
  color: '$textAlt',
})

const ArrowIcon = styled('img', {
  display: 'inline-block',
  verticalAlign: 'middle',
  marginLeft: '-8px',
  marginRight: '8px',
  color: '$darkGray',
  width: '24px',
  height: '24px',
})

const ConvertYourLeads = () => (
  <OuterContainer>
    <LPUContainer>
      <LPUHeadline>Convert your leads into (automated) action</LPUHeadline>
      <FlexRow>
        <FlexRow3>
          <FlexRow3Container>
            <LogosContainer>
              <StyledImage image={leadpagesIcon} alt="Leadpages Icon" />
              <ArrowIcon src={rightArrowIcon.src} />
              <StyledImage image={dripIcon} alt="Drip Icon" />
              <StyledImage image={klaviyoIcon} alt="Klaviyo Icon" />
              <StyledImage image={mailchimpIcon} alt="Mailchimp Icon" />
            </LogosContainer>
            <FlexRow3Heading>Send leads to email lists</FlexRow3Heading>
            <FlexRow3Copy>
              Capture and collect form subscribers directly inside a segmented
              email database.
            </FlexRow3Copy>
          </FlexRow3Container>
        </FlexRow3>
        <FlexRow3>
          <FlexRow3Container>
            <LogosContainer>
              <StyledImage image={leadpagesIcon} alt="Leadpages Icon" />
              <ArrowIcon src={rightArrowIcon.src} />
              <StyledImage image={twilioIcon} alt="Twilio Icon" />
              <StyledImage image={tmIcon} alt="TM Icon" />
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
              <StyledImage image={leadpagesIcon} alt="Leadpages Icon" />
              <ArrowIcon src={rightArrowIcon.src} />
              <StyledImage image={hubspotIcon} alt="Hubspot Icon" />
              <StyledImage image={salesforceIcon} alt="Salesforce Icon" />
              <StyledImage image={pipedriveIcon} alt="Pipedrive Icon" />
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
              <StyledImage image={leadpagesIcon} alt="Leadpages Icon" />
              <ArrowIcon src={rightArrowIcon.src} />
              <StyledImage image={sheetsIcon} alt="Sheets Icon" />
              <StyledImage image={mysqlIcon} alt="MySQL Icon" />
              <StyledImage image={knackIcon} alt="Knack Icon" />
            </LogosContainer>
            <FlexRow3Heading>Log submissions</FlexRow3Heading>
            <FlexRow3Copy>
              Register form submissions in a Google Sheet or MySQL table for
              future reference.
            </FlexRow3Copy>
          </FlexRow3Container>
        </FlexRow3>
        <FlexRow3>
          <FlexRow3Container>
            <LogosContainer>
              <StyledImage image={leadpagesIcon} alt="Leadpages Icon" />
              <ArrowIcon src={rightArrowIcon.src} />
              <StyledImage image={gmailIcon} alt="Gmail Icon" />
              <StyledImage image={slackIcon} alt="Slack Icon" />
              <StyledImage image={emailIcon} alt="Email Icon" />
            </LogosContainer>
            <FlexRow3Heading>Get submission digests</FlexRow3Heading>
            <FlexRow3Copy>
              Provide your team with a daily/weekly/monthly report via email or
              Slack.
            </FlexRow3Copy>
          </FlexRow3Container>
        </FlexRow3>
        <FlexRow3>
          <FlexRow3Container>
            <LogosContainer>
              <StyledImage image={leadpagesIcon} alt="Leadpages Icon" />
              <ArrowIcon src={rightArrowIcon.src} />
              <StyledImage image={zendeskIcon} alt="Zendesk Icon" />
              <StyledImage image={autopilotIcon} alt="AutoPilot Icon" />
              <StyledImage image={trelloIcon} alt="Trello Icon" />
            </LogosContainer>
            <FlexRow3Heading>Build custom workflows</FlexRow3Heading>
            <FlexRow3Copy>
              Set up multi-step integrations to automate your project management
              and marketing stack.
            </FlexRow3Copy>
          </FlexRow3Container>
        </FlexRow3>
      </FlexRow>
    </LPUContainer>
  </OuterContainer>
)

export default ConvertYourLeads
