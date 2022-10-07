import React from 'react'
import Link from 'next/link'
import { styled } from '@design'
// components
import Layout from '@legacy/components/Layout'
import SEO from '@legacy/components/SEO'
// images
import backgroundSVG from '@legacy/assets/images/shapes/wavy-lines-hourglass-sand.svg'

const ContainerTemplate = styled('div', {
  padding: '3rem 3rem 1rem',
  '@media (min-width: 992px)': {
    padding: 'inherit 6rem',
  },
})

const HeaderContainer = styled(ContainerTemplate, {
  position: 'relative',
  zIndex: -2,
  marginTop: '-60px',
  paddingTop: '120px',
  backgroundColor: '#fef9f1',
})

const SVGContainer = styled('img', {
  position: 'absolute',
  zIndex: -1,
  right: 0,
  bottom: '-50px',
  width: '100%',
  overflowX: 'hidden',
  '@media (max-width: 350px)': {
    display: 'none',
  },
  '@media (min-width: 769px)': {
    bottom: '-30px',
    width: '50%',
  },
  '@media (min-width: 1300px)': {
    bottom: '-50px',
  },
})

const BodyContainer = styled(ContainerTemplate, {
  backgroundColor: '#fff',
})

const HeaderTextContainer = styled('div', {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
})

const BodyTextContainer = styled('div', {
  zIndex: 1,
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media (min-width: 576px)': {
    padding: 'inherit 3rem',
  },
  '@media (min-width: 992px)': {
    padding: 'inherit 6rem',
  },
})

const Heading1 = styled('h1', {
  fontFamily: `'Value Serif'`,
  color: '#0f0c09',
  fontSize: '40px',
  lineHeight: '48px',
  letterSpacing: '-0.5px',
})

const Subtitle = styled('span', {
  display: 'block',
  marginTop: '2rem',
  marginBottom: '3rem',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#575452',
})

const BodyTitle = styled('h2', {
  marginTop: '1rem',
  marginBottom: '2rem',
  fontFamily: `'Value Serif'`,
  color: '#0f0c09',
  fontSize: '30px',
  lineHeight: '36px',
  letterSpacing: '-0.1px',
})

const LeadParagraph = styled('p', {
  marginTop: '3rem',
  color: '#575452',
  fontSize: '22px',
  lineHeight: '36px',
})

const Section = styled('li', {
  marginLeft: '1rem',
  marginBottom: '2rem',
  color: '#0f0c09',
  fontSize: '22px',
  fontWeight: 500,
  lineHeight: '32px',
  '@media (min-width: 576px)': {
    marginLeft: '3rem',
  },
})

const SectionTitle = styled('h2', {
  position: 'relative',
  marginBottom: '2rem',
  color: '#0f0c09',
  fontSize: '22px',
  fontWeight: 500,
  lineHeight: '32px',
  '&:before': {
    position: 'absolute',
    left: '-3rem',
    width: '30px',
    textAlign: 'right',
    content: 'attr(data-numeral) "."',
  },
})

const SubsectionTitle = styled('h3', {
  marginTop: '1rem',
  color: '#0f0c09',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '28px',
  '&:before': {
    marginRight: '0.75rem',
    content: 'attr(data-numeral)',
  },
})

const Paragraph = styled('p', {
  marginBottom: '2rem',
  color: '#575452',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
})

const Subparagraph = styled(Paragraph, {
  position: 'relative',
  marginLeft: '3.5rem',
  marginTop: '-1rem',
  '&:before': {
    position: 'absolute',
    left: '-3rem',
    width: '30px',
    textAlign: 'right',
    content: '"(" attr(data-numeral) ")"',
  },
})

const IndentedSubparagraph = styled(Subparagraph, {
  marginLeft: '7rem',
})

const StyledInternalLink = styled('a', {
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#603eff',
  paddingBottom: '3px',
  borderBottom: '2px solid rgb(209, 198, 249)',
  transition: '0.3s ease all',
  '&:hover': {
    borderBottom: '2px solid #603eff',
  },
})

const StyledExternalLink = styled('a', {
  textDecoration: 'none',
  cursor: 'pointer',
  color: '#603eff',
  paddingBottom: '3px',
  borderBottom: '2px solid rgb(209, 198, 249)',
  transition: '0.3s ease all',
  '&:hover': {
    borderBottom: '2px solid #603eff',
  },
})

const MarketingResourcePage = () => (
  <Layout>
    <SEO
      pathname="/legal"
      title="Terms and Conditions | Leadpages"
      description="The Leadpages terms and conditions are the do’s and don’ts of your account. Take a look to see if your business is a fit for our services."
    />
    <HeaderContainer>
      <SVGContainer
        src={backgroundSVG?.src}
        alt="wavy lines hourglass background"
      />
      <HeaderTextContainer>
        <Heading1>Leadpages Terms and Conditions</Heading1>
        <Subtitle>Last Modified 1 September 2021</Subtitle>
      </HeaderTextContainer>
    </HeaderContainer>
    <BodyContainer>
      <BodyTextContainer>
        <BodyTitle>Hello.</BodyTitle>
        <LeadParagraph>
          Welcome to Leadpages.com (the “Site”), a website owned and provided by
          Leadpages (US), Inc. (“Leadpages,” “we,” “our” or “us”). This page
          explains the terms by which you may use the Site, our online and/or
          mobile products, services, software, and content provided on or in
          connection with the Site (collectively, the “Services”). By accessing
          or using Leadpages and/or any Services, or by clicking a button or
          checking a box marked “I Agree” (or something similar), you signify
          that you have read, understood, and agree to be bound by these Terms
          and Conditions (this “Agreement”) and to the collection and use of
          your information as set forth in our Privacy Policy, whether or not
          you are a registered user of Leadpages. Leadpages reserves the right
          to modify the terms and conditions of this Agreement at any time and
          in its sole discretion. We will provide notice of any changes to this
          Agreement as described below. This Agreement applies to all visitors,
          users, and others (hereinafter, “User” or “Users”) who access the Site
          and/or use any of the Services.
        </LeadParagraph>
        <LeadParagraph>
          Please read this Agreement carefully to ensure that you understand
          each provision. This Agreement contains a mandatory individual
          arbitration and class action/jury trial waiver provision that requires
          the use of arbitration on an individual basis to resolve disputes,
          rather than jury trials or class actions.
        </LeadParagraph>
        <LeadParagraph style={{ marginBottom: '3rem' }}>
          IF YOU DO NOT AGREE TO THIS AGREEMENT IN ITS ENTIRETY, YOU ARE NOT
          AUTHORIZED TO ACCESS OR USE ANY PRODUCTS OR SERVICES, OR THIS SITE IN
          ANY MANNER OR FORM.
        </LeadParagraph>
        <ol style={{ listStyleType: 'none' }}>
          <Section>
            <SectionTitle data-numeral="1">Leadpages</SectionTitle>
            <Paragraph>
              Leadpages allows Users to access, create, operate, and maintain
              landing pages and web pages (“User Page” or “User Pages”) and to
              use any and all Services being made available through the Site for
              our Users’ marketing campaigns.
            </Paragraph>
          </Section>
          <Section>
            <SectionTitle data-numeral="2">Leadpages Services</SectionTitle>
            <SubsectionTitle data-numeral="2.1">
              Use of the Site and Services
            </SubsectionTitle>
            <Paragraph>
              Leadpages is granting you the limited, revocable, non-exclusive,
              non-transferable right and license to access and view the Site and
              use the Services provided that you are of legal age to form a
              binding contract in your applicable jurisdiction. Any use or
              access of the Site and/or any Services by Users under the age of
              thirteen (13) is strictly prohibited and in violation of this
              Agreement. When viewing and accessing the Site and using any of
              the Services, you agree to comply with all applicable laws, rules,
              and regulations regarding online conduct and acceptable content,
              including applicable laws regulating the export of data to and
              from your country of residence. You agree that you are responsible
              for your own conduct when accessing and using the Site and
              Services, and for any consequences thereof. You understand that by
              visiting and accessing the Site, you may be exposed to content
              that you may consider to be offensive, objectionable, indecent, or
              inappropriate. You agree that visiting and accessing the Site
              and/or using any of the Services is at your own risk. The Services
              are not available to any Users who have been suspended or
              restricted from accessing and using the Services due to: (i) the
              User’s prior violation of any terms and conditions of this
              Agreement; (ii) the User’s prior violation of any applicable laws,
              rules, or regulations when accessing and using the Site and/or
              Services; and/or (iii) the User’s prior violation of any policies
              and guidelines established by Leadpages when accessing and using
              the Site and/or Services. Leadpages reserves all rights not
              expressly granted herein. Leadpages may terminate the licenses
              being granted to you at any time for any reason or no reason.
            </Paragraph>
            <SubsectionTitle data-numeral="2.2">
              Site and Services Availability
            </SubsectionTitle>
            <Paragraph>
              Leadpages uses reasonable endeavors to ensure that the Site and
              Services are available twenty-four (24) hours a day seven (7) days
              a week. However, there will be occasions when the Site and/or
              Services will be interrupted for maintenance, upgrades and
              emergency repairs or due to failure of telecommunications links,
              systems, and equipment that are beyond the control of Leadpages.
              Every reasonable step will be taken by us to minimize such
              disruption where it is within the reasonable control of Leadpages.
              You agree that Leadpages shall not be responsible or liable to you
              for the deletion or failure to make available any content,
              Services, and other communications maintained or transmitted
              through the Site and/or Services, or any modification, suspension
              or discontinuance of the Site and/or Services. You acknowledge
              that Leadpages reserves the right, in its sole discretion, to
              limit your ability to access and use the Site and/or Services, or
              any other resources or content made available on the Site and/or
              through the Services. Leadpages reserves the right to terminate,
              suspend, or limit or modify certain features or functionality of
              the Site and/or Services in its sole discretion. Your continued
              use of the Services following any changes to the Services shall
              constitute your acknowledgment and acceptance of such changes.
            </Paragraph>
            <SubsectionTitle data-numeral="2.3">
              Leadpages Accounts
            </SubsectionTitle>
            <Paragraph></Paragraph>
            <Subparagraph data-numeral="i">
              In order to access the Services, you will be required to establish
              a Leadpages user account (the “Leadpages Account”). We may offer
              and maintain different types of Leadpages Accounts for different
              types of Users with different features and functionality. If you
              create a Leadpages Account on behalf of a company, organization,
              or other entity, then: “you” includes you and that entity, and (b)
              you represent and warrant that you are an authorized
              representative of the entity with the authority to bind the entity
              to this Agreement. By connecting to the Services through a
              third-party service provider, you give us permission to access,
              use, and to store certain information about you that is obtained
              from that third-party service provider, and as permitted by such
              service provider. Such information may include, without
              limitation, your log-in credentials for that service provider.
            </Subparagraph>
            <Subparagraph data-numeral="ii">
              You are not permitted to use another User’s Leadpages Account
              without permission. When creating your Leadpages Account, you must
              provide accurate and complete information, and you must keep this
              information up to date. You are solely responsible for the
              activity that occurs on your Leadpages Account, and you must keep
              your Leadpages Account password secure. We encourage you to use
              “strong” passwords (passwords that use a combination of upper and
              lower case letters, numbers and symbols) with your Leadpages
              Account. You must notify Leadpages immediately of any actual or
              suspected breach of security or unauthorized use of your Leadpages
              Account. Leadpages will not be liable for any damages caused or
              losses incurred by any unauthorized access and/or use of your
              Leadpages Account. If you wish to share your Leadpages Account
              login credentials (username and password) to allow others to gain
              access to your Leadpages Account, you agree that BY SHARING YOUR
              LEADPAGES ACCOUNT USERNAME AND PASSWORD, YOU AGREE TO BE
              RESPONSIBLE FOR ASSURING THAT ANY USERS OF THE LEADPAGES ACCOUNT
              COMPLY WITH THE TERMS OF THIS AGREEMENT AND THAT YOU SHALL BE
              RESPONSIBLE FOR THE ACTIONS OF ITS LEADPAGES ACCOUNT USERS.
            </Subparagraph>
            <Subparagraph data-numeral="iii">
              You may control the User profile of your Leadpages Account and how
              you interact with Leadpages by changing the settings in your
              Settings page. By providing Leadpages your email address you
              consent to our using the email address to send you service-related
              notices, including any notices required by law, in lieu of
              communication by postal mail. With your consent, we may also use
              your email address to send you other messages, such as changes to
              features of Leadpages, special offers, or other third-party
              products and/or services that may be of interest to you. If you do
              not want to receive such email messages, you may opt out by
              clicking on the unsubscribe link on the bottom of our emails.
              Should you decide to opt-out of receiving future mailings from us,
              you may continue to receive future mailings from third parties
              that you have requested to receive information from. If you do not
              wish to receive future communications from third-party providers,
              you should notify them directly of your choice regarding their use
              of your personal information. Despite your request to no longer
              receive future newsletters or promotional and marketing
              communications from Leadpages, we reserve the right to continue to
              send you notices of any updates to the Site, the Services, these
              Terms and Conditions, and our Privacy Policy.
            </Subparagraph>
            <SubsectionTitle data-numeral="2.4">
              Administrator Accounts
            </SubsectionTitle>
            <Paragraph>
              The person who creates a Leadpages Account registration on behalf
              of any company, entity or organization (“Subscribing
              Organization”) is the initial “Administrator“ for purposes of such
              Subscribing Organization’s use of the Services, and exercises
              certain options to initially determine the level of access,
              privacy, and security for use of the Services related to the
              Subscribing Organization . For example, the Administrator will
              determine who can be a User of the Services under the organization
              associated with that Administrator and Subscribing Organization
              and the level of privileges that such Users will possess. Once the
              Leadpages Account has been created and the initial registration
              has been completed, each Subscribing Organization will be able to
              register additional Administrators. Each Administrator may
              designate other Users as additional and/or successor
              Administrators; provided that, each Administrator is responsible
              for confirming that those person(s) accept such responsibility.
              Upon becoming an Administrator, each person will be deemed to have
              agreed to the terms and conditions of this Agreement and to the
              obligations hereunder. In addition, any person designated as the
              billing contact in the billing record for a Subscribing
              Organization will be deemed to assume the rights and obligations
              of an Administrator.
            </Paragraph>
            <SubsectionTitle data-numeral="2.5">
              Leadpages Rules
            </SubsectionTitle>
            <Paragraph>
              When using the Services, you agree not to: (a) upload or transmit
              pornographic, embarrassing, or otherwise inappropriate content;
              (b) except where expressly permitted, use the Services to engage
              in spamming, “chain letters“, “pyramid schemes“, advertisement of
              illegal or controlled products or services, or other advertising
              or marketing activities that violate this Agreement, the Privacy
              Policy or any applicable laws, regulations or generally-accepted
              advertising or marketing industry guidelines; (c) use the Services
              in any manner that infringes, violates or misappropriates any
              third party’s intellectual property or proprietary rights; (d) use
              the Services in any manner that is misleading, deceptive or
              fraudulent or otherwise illegal or promotes illegal activities,
              including engaging in phishing or otherwise obtaining financial or
              other personal information in a misleading manner or for
              fraudulent or misleading purposes; (e) use the Services in any
              manner that is libelous or defamatory, or that is otherwise
              threatening, abusive, violent, harassing, malicious or harmful to
              any person or entity, or is invasive of another’s privacy; (f) use
              the Services in any manner that is harmful to minors in any way;
              (g) use the Services in any manner that is hateful, insulting, or
              discriminatory based on race, color, gender, gender identity,
              religion, nationality, ethnic or national origin, marital status,
              disability, sexual orientation or age or is otherwise
              objectionable, as reasonably determined by Leadpages; (h) use the
              Services in any manner that in our sole discretion could damage,
              disable, overburden, or impair it; (i) use the Services in any
              manner that constitutes or contains any form of advertising or
              solicitation to users who have requested not to be contacted about
              other services, products or commercial interests; (j) attempt to
              gain unauthorized access to the Site and/or Services, or any part
              of them, other Leadpages Accounts, computer systems or networks
              connected to the Services, or any part of them, through hacking,
              password mining or any other means or interfere or attempt to
              interfere with the proper working of the Site and/or Services or
              any activities conducted through the Services; (k) modify the Site
              and/or Services in any manner or form, or use modified versions of
              the Site and/or Services, including but not limited to for the
              purpose of obtaining unauthorized access to the Site and/or
              Services or modifying User Page behaviour in any way to deceive or
              mislead Users; (l) use any robot, spider, scraper, or other
              automated means to access the Site and/or Services for any purpose
              without our express written permission, or bypass any measures we
              may use to prevent or restrict access to the Site and/or Services;
              (m) impersonate another person or access another User’s Leadpages
              Account without that User’s permission or to violate any
              contractual or fiduciary relationships; (n) share Leadpages-issued
              passwords with any third party or encourage any other User to do
              so; (o) modify, adapt, translate or create derivative works based
              upon the Site and/or Services; (p) reverse engineer, decompile,
              disassemble or otherwise attempt to discover the source code of
              the Site and/or Services, except and only to the extent that such
              activity is expressly permitted by applicable law notwithstanding
              this limitation; (q) rent, lease, loan, resell, sublicense,
              distribute or otherwise transfer the Services to any third party;
              provide time sharing or similar services for any third party; or
              use the Services for any purpose other than your own internal
              business use; (r) remove, circumvent, disable, damage or otherwise
              interfere with security-related features of the Site and/or
              Services, features that prevent or restrict use or copying of any
              content accessible through the Services, or features that enforce
              limitations on use of the Services; (s) access the Site and/or
              Services if you are a direct competitor of Leadpages, except with
              Leadpages’ prior written consent, or for any other competitive
              purposes; or (t) except as permitted by the features of the
              Services, collect or harvest any personally identifiable
              information, including account names, through the Services.
            </Paragraph>
            <SubsectionTitle data-numeral="2.6">User Pages</SubsectionTitle>
            <Paragraph>
              In creating, operating and maintaining User Pages as part of the
              Services, you represent and warrant that your User Pages are not
              directed, in whole or in part, to persons under the age of
              eighteen (18) years of age and that the creation, operation and
              maintenance of your User Page and the underlying products,
              services, and/or User Page content will be in compliance with all
              applicable laws, rules and regulations. If your use of the
              Services to provide certain products, services, and/or content
              involves the collection of information from your end users and
              User Page visitors, you represent and warrant that you have
              established and will publish a privacy policy on your User Page(s)
              that discloses adequate notice, disclosure, and choices to the end
              user and User Page visitors regarding your use, collection,
              disclosure and the security of their personal information
              (including through the use of cookies, web pixels or other similar
              technology), and any and all third-parties’ collection and use of
              the information of any and all User Page visitors, users, and
              others who access your User Page.
            </Paragraph>
            <SubsectionTitle data-numeral="2.7">
              Responsibilities for Calls and Messaging
            </SubsectionTitle>
            <Paragraph>
              To the extent applicable to your use of the Service, you shall at
              all times comply with the CAN SPAM Act of 2003, the Telephone
              Consumer Protection Act (47 U.S.C. §227), the Do-Not-Call
              Implementation Act and the Do-Not-Call list registry rules (
              <StyledExternalLink
                href="https://www.donotcall.gov/"
                alt="link to National Do Not Call Registry website"
              >
                www.donotcall.gov
              </StyledExternalLink>
              ), the Telemarketing Sales Rule, 47 C.F.R. § 64.1200 et seq, and
              all other state or local laws, rules, regulations, and guidelines
              relating to calling or texting, including without limitation,
              rules, regulations and guidelines set forth by the Federal Trade
              Commission and the Federal Communications Commission
              (collectively, the “Calling Laws”). You agree that, as between the
              parties, you are the initiator of any call, SMS/MMS message, or
              other communication transmitted through the Service and for all
              content relating to, inducing, or encouraging calls, SM/MMS
              messages or other communications to take place. Leadpages is not
              responsible for reviewing the contents of any communication
              transmitted through the Services or transmitted by you related to
              your use of the Service, nor is it responsible for obtaining any
              necessary consents or permissions from the message recipients.
            </Paragraph>
          </Section>
          <Section>
            <SectionTitle data-numeral="3">User Content</SectionTitle>
            <SubsectionTitle data-numeral="3.1">
              Definition of User Content
            </SubsectionTitle>
            <Paragraph>
              Some areas of the Services allow Users to submit, provide, or
              otherwise make available content such as videos, images, music,
              text, comments, questions, and other content or information (any
              such materials a User submits, provides, or otherwise makes
              available through the Services to be published on a User Page is
              referred to as “User Content”).
            </Paragraph>
            <SubsectionTitle data-numeral="3.2">
              Ownership Rights
            </SubsectionTitle>
            <Paragraph>
              We claim no ownership rights over User Content created by you and
              displayed on User Pages through the Services. The User Content you
              create remains yours.
            </Paragraph>
            <SubsectionTitle data-numeral="3.3">
              Leadpages Rights to User Content
            </SubsectionTitle>
            <Paragraph>
              By submitting, providing, or otherwise making available any User
              Content on or through the Services to be displayed on User Pages,
              you expressly grant, and you represent and warrant that you have
              all rights necessary to grant, to Leadpages a limited,
              royalty-free, sublicensable, non-exclusive, worldwide license and
              right to use, reproduce, publish, list information regarding,
              translate, distribute, syndicate, publicly perform, publicly
              display, and make derivative works of all such User Content and
              your name, voice, and/or likeness as contained in your User
              Content, in whole or in part, and in any form, media or
              technology, whether now known or hereafter developed, for use in
              connection with the Services, including without limitation for
              promoting and redistributing part or all of the User Pages (and
              derivative works thereof) in any media formats and through any
              media channels. Without limiting any of the foregoing, you
              continue to retain the right to have your User Content removed
              from any User Pages.
            </Paragraph>
            <SubsectionTitle data-numeral="3.4">
              Intellectual Property Rights
            </SubsectionTitle>
            <Paragraph>
              For the purposes of this Agreement, “Intellectual Property Rights”
              means all patent rights, copyright rights, mask work rights, moral
              rights, rights of publicity, trademark, trade dress and service
              mark rights, goodwill, trade secret rights and other intellectual
              property rights as may now exist or hereafter come into existence,
              and all applications therefore and registrations, renewals and
              extensions thereof, under the laws of any state, country,
              territory or other jurisdiction.
            </Paragraph>
            <SubsectionTitle data-numeral="3.5">
              Your Rights to Your User Content
            </SubsectionTitle>
            <Paragraph>
              In connection with your User Content, you affirm, represent and
              warrant the following:
            </Paragraph>
            <Subparagraph data-numeral="i">
              You have the written consent of each and every identifiable
              natural person in the User Content, if any, to use such person’s
              name or Likeness in the manner contemplated by Leadpages and this
              Agreement, and each such person has released you from any
              liability that may arise in relation to such use.
            </Subparagraph>
            <Subparagraph data-numeral="ii">
              You have obtained and are solely responsible for obtaining all
              rights, licenses, and consents as may be required by applicable
              law to post any User Content relating to third parties.
            </Subparagraph>
            <Subparagraph data-numeral="iii">
              Your User Content and Leadpages’ use thereof as contemplated by
              this Agreement will not violate any applicable law or infringe
              upon any rights of any third party, including but not limited to
              any Intellectual Property Rights and privacy rights.
            </Subparagraph>
            <Subparagraph data-numeral="iv">
              Leadpages may exercise the rights to use and display your User
              Content submitted through the Services and displayed on User Pages
              without liability for payment of any guild fees, residuals,
              payments, fees, or royalties payable under any collective
              bargaining agreement or otherwise.
            </Subparagraph>
            <Subparagraph data-numeral="v">
              To the best of your knowledge, all your User Content and other
              information that you provide to us is truthful and accurate.
            </Subparagraph>
            <SubsectionTitle data-numeral="3.6">
              Liability for User Content
            </SubsectionTitle>
            <Paragraph>
              Leadpages takes no responsibility and assumes no liability for any
              User Content that you or any other User submits, provides, or
              otherwise makes available through the Services. You shall be
              solely responsible for your User Content and the consequences of
              submitting it, providing it, or otherwise making it available
              through the Services and displayed on User Pages, and you agree
              that we are only acting as a passive conduit/service provider for
              your online distribution, publication, and display of your User
              Content. Unless otherwise stated in this Agreement, Leadpages
              reserves the right, but shall not be obligated, to: (i) pre-screen
              User Content; and/or (ii) refuse to accept, post, display, or
              transmit any User Content in its sole discretion and without prior
              notice to you.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle data-numeral="4">
              Collection and Use of Customer Data
            </SectionTitle>
            <SubsectionTitle data-numeral="4.1">Customer Data</SubsectionTitle>
            <Paragraph>
              Certain features and functionalities of the Services may allow
              Leadpages to collect information from your current or potential
              customers, website visitors or end-users (collectively, “Customer
              Data”).
            </Paragraph>
            <SubsectionTitle data-numeral="4.2">
              Use of Customer Data
            </SubsectionTitle>
            <Paragraph>
              By submitting or causing Customer Data to be submitted to
              Leadpages through the Services, you hereby grant, and represent
              and warrant that you have all rights necessary to grant, all
              rights and licenses to the Customer Data required for Leadpages
              and its subcontractors and service providers to provide the
              Services. Leadpages shall have no right to sublicense or resell
              Customer Data, except however, that you agree that Leadpages may
              collect, analyze, and use data derived from Customer Data, which
              may include data and/or information collected from or about an
              individual but which does not identify the individual personally
              for purposes of operating, analyzing, improving, or marketing the
              Services and any related products and/or services. If Leadpages
              shares or publicly discloses information (e.g., in marketing
              materials, or in application development) that is derived from
              Customer Data, such data will be aggregated or anonymized to
              reasonably avoid identification of a specific individual. You
              further agree that Leadpages will have the right, both during and
              after the term of this Agreement, to use, store, transmit,
              distribute, modify, copy, display, sublicense, and create
              derivative works of the anonymized, aggregated data.
            </Paragraph>
            <SubsectionTitle data-numeral="4.3">
              Your Responsibilities for Customer Data
            </SubsectionTitle>
            <Paragraph>
              In connection with Customer Data, you hereby represent, warrant,
              and agree that: (a) you have obtained or will obtain the Customer
              Data lawfully and/or have not engaged in material
              misrepresentation, deception or other fraudulent or improper means
              to cause the Customer Data to be collected through the Services;
              (b) the Customer Data does not and will not violate any applicable
              laws or any person or entity’s proprietary or intellectual
              property rights; (c) all Customer Data has and will be collected
              by you in accordance with a privacy policy established by you that
              permits Leadpages to share, collect, use, and disclose such
              Customer Data as contemplated under this Agreement, and if
              required by applicable law, pursuant to consents obtained by you
              to do each of the foregoing; (d) you are solely responsible for
              ensuring compliance with all applicable privacy laws in all
              jurisdictions that may apply to Customer Data; (e) Leadpages may
              exercise the rights in Customer Data granted hereunder without
              liability or cost to any third party; and (f) your use of the
              Customer Data complies with the terms of this Agreement. For
              purposes of clarity, Leadpages takes no responsibility and assumes
              no liability for the collection and use of any Customer Data, and
              you will be solely responsible for the collection and use of any
              Customer Data and the consequences of collecting or sharing it
              hereunder. You may not submit, or cause to be submitted, any
              Customer Data that includes a social security number, passport
              number, driver’s license number, or similar identifier, credit
              card or debit card number, employment, financial or health
              information, sensitive personal data and information, or any other
              information which may be subject to specific data privacy and
              security laws including, but not limited to, the
              Gramm-Leach-Bliley Act (GLBA), Children’s Online Privacy
              Protection Act (COPPA), the Health Insurance Portability and
              Accountability Act (HIPAA), the General Data Protection Regulation
              (GDPR) or which could give rise to notification obligations under
              data breach notification laws, without Leadpages’ prior written
              approval.
            </Paragraph>
            <SubsectionTitle data-numeral="4.4">
              Security Incidents
            </SubsectionTitle>
            <Paragraph>
              In the event that Customer Data is disclosed to or accessed by an
              unauthorized party, Leadpages will promptly notify you and use
              reasonable efforts to cooperate with your investigation of the
              incident. In the event we have a reasonable, good faith belief
              that an unauthorized party has accessed Customer Data, we will
              promptly notify you and will use reasonable efforts to cooperate
              with your investigation of the incident. If such incident triggers
              any third-party notice requirements, you (not Leadpages) shall be
              solely responsible for the timing, content, cost and method of any
              such notice and compliance with applicable laws. You (not
              Leadpages) bear sole responsibility for adequate security,
              protection and backup of Customer Data when in your or your
              representatives’ or agents’ possession or control. We are not
              responsible, and you are fully responsible, for what your
              authorized Users do with Customer Data.
            </Paragraph>
            <SubsectionTitle data-numeral="4.5">
              Your Responsibilities for Customer Data
            </SubsectionTitle>
            <Paragraph>
              Leadpages will not be responsible for any backup, recovery or
              other steps required to ensure that Customer Data is recoverable
              in the case of data loss. You are solely responsible for backing
              up your Customer Data on a regular basis, and taking appropriate
              steps to safeguard and ensure the integrity of your Customer Data.
            </Paragraph>
            <SubsectionTitle data-numeral="4.6">
              Rights to Customer Data
            </SubsectionTitle>
            <Paragraph>
              You own all right, title and interest (including all Intellectual
              Property Rights) in and to Customer Data.
            </Paragraph>
          </Section>
          <Section>
            <SectionTitle data-numeral="5">Our Proprietary Rights</SectionTitle>
            <SubsectionTitle data-numeral="5.1">
              Intellectual Property
            </SubsectionTitle>
            <Paragraph>
              Except for your User Content, the Services and all materials
              therein or transferred thereby, including, without limitation,
              software, images, text, graphics, illustrations, logos, patents,
              trademarks, service marks, copyrights, photographs, audio, videos,
              music, and User Content belonging to other Users (the “Leadpages
              Content”), and all Intellectual Property Rights related thereto,
              are the exclusive property of Leadpages and its applicable
              licensors (including other Users who post User Content to
              Leadpages). Except as explicitly provided herein, nothing in this
              Agreement shall be deemed to create a license in or under any such
              Intellectual Property Rights of the Leadpages Content, and you
              agree not to sell, license, rent, modify, distribute, copy,
              reproduce, transmit, publicly display, publicly perform, publish,
              adapt, edit or create derivative works of any Leadpages Content.
              Use of the Leadpages Content for any purpose not expressly
              permitted by this Agreement is strictly prohibited.
            </Paragraph>
            <SubsectionTitle data-numeral="5.2">
              User Submissions
            </SubsectionTitle>
            <Paragraph>
              You may choose to or we may invite you to submit comments or ideas
              about Leadpages, including without limitation about how to improve
              the Services or our products (“Ideas”). By submitting any Idea,
              you agree that your disclosure is gratuitous, unsolicited and
              without restriction and will not place Leadpages under any
              fiduciary or other obligation, and that we are free to use the
              Idea without any additional compensation to you, and/or to
              disclose the Idea on a non-confidential basis or otherwise to
              anyone. You further acknowledge that, by acceptance of your
              submission, Leadpages does not waive any rights to use similar or
              related ideas previously known to Leadpages, or developed by its
              employees, or obtained from sources other than you.
            </Paragraph>
          </Section>
          <Section>
            <SectionTitle data-numeral="6">
              Subscription; Fees and Payment
            </SectionTitle>
            <SubsectionTitle data-numeral="6.1">Fees</SubsectionTitle>
            <Paragraph>
              We will charge you fees (“Fees”) for your use of the Services. You
              agree to pay any and all Fees specified in an ordering document or
              online order for your access and use of the Services (“Ordering
              Document”). For the most current information about our pricing and
              payment, please review our Pricing and Payment Terms (
              <Link href="/pricing" passHref>
                <StyledInternalLink aria-label="link to Leadpages pricing and payment terms">
                  www.leadpages.com/pricing
                </StyledInternalLink>
              </Link>
              ), which are incorporated by reference herein. Leadpages may add
              new services, features, and functionalities for additional fees
              and charges, and add or amend fees and charges for existing
              Services, at any time in its sole discretion. If we add or amend
              our Fees, we will update our Pricing and Payment Terms. Any change
              to our Pricing and Payment Terms shall become effective in the
              billing cycle following notice of such change to you as provided
              in this Agreement; provided however that if we have offered a
              specific duration and Fees for your use of Services, we agree that
              the Fees will remain in force for that duration.
            </Paragraph>
            <SubsectionTitle data-numeral="6.2"></SubsectionTitle>
            <Paragraph>
              Unless otherwise provided in an Ordering Document any purchases
              for access and use of the Services are on a subscription basis
              that renews automatically unless canceled. YOUR SERVICES
              SUBSCRIPTION WILL AUTOMATICALLY RENEW AT THE END OF YOUR
              SUBSCRIPTION TERM IDENTIFIED IN YOUR ORDERING DOCUMENT FOR
              SUBSEQUENT TERMS EQUAL IN LENGTH TO THE INITIAL SUBSCRIPTION TERM
              (EACH A “SUBSCRIPTION TERM”) UNLESS AND UNTIL YOU CANCEL YOUR
              SERVICES SUBSCRIPTION IN ACCORDANCE WITH THE CANCELLATION
              PROCEDURES IDENTIFIED IN SECTION 6.3 OF THIS AGREEMENT. As used in
              this Agreement, “billed”, “billing”, or “charge” shall indicate
              either a charge or debit, as applicable, against your payment
              method on file with Leadpages or its applicable third-party
              payment services provider. When you purchase a subscription to
              access and use the Services, you expressly acknowledge and agree
              that: (1) Leadpages (and its third-party payment services
              provider) is authorized to charge you at the beginning of each
              Subscription Term the Fees identified in an Ordering Document, any
              applicable taxes, and any other charges you may incur in
              connection with your use of the Services, for as long as your
              Services subscription continues; and (2) your Services
              subscription is continuous until you cancel it or the Services are
              suspended, discontinued or terminated in accordance with this
              Agreement. You acknowledge and agree that the amount billed may
              vary due to promotional offers, changes in your Services
              subscription plan, changes in applicable taxes, and changes in
              Fees in accordance with Sections 6.1 and 6.3 and you authorize us
              to charge your payment method for the changed amounts. We will
              automatically bill your payment method each month or each year (if
              applicable) on the calendar day corresponding to the commencement
              of your Services subscription (excluding any applicable trial
              period) or within 3 to 5 business days of such date. If your
              payment method reaches its expiration date and/or you do not renew
              your Service subscription, we reserve the right to terminate or
              limit your access to the Services.
            </Paragraph>
            <SubsectionTitle data-numeral="6.3">
              Cancellation; Refunds
            </SubsectionTitle>
            <Paragraph></Paragraph>
            <Subparagraph data-numeral="i">
              Seven (7) Day Money-Back Guarantee. Leadpages will offer a seven
              (7) day money-back guarantee for all new Leadpages Accounts
              created. Services subscription renewals are not eligible for the
              seven (7) day money-back guarantee. In order to be eligible for
              the seven (7) day money-back guarantee, you must contact Leadpages
              on or before the seventh (7th) day following the commencement of
              the Subscription Term. For clarification purposes, the
              Subscription Term commences on the first calendar day following
              the expiration of the fourteen (14) day trial period.
            </Subparagraph>
            <Subparagraph data-numeral="ii">
              You may cancel your Leadpages Account or the Services at any time.
              To cancel your Services subscription, you must notify Leadpages
              before the start of the next Subscription Term using the
              appropriate functionalities within the Services or by contacting
              us at{' '}
              <StyledExternalLink
                href="mailto:support@leadpages.com"
                alt="Leadpages support team email address"
              >
                support@leadpages.com
              </StyledExternalLink>
              . Please allow 3 – 5 business days to process your cancellation
              request. Once we have processed your cancellation request, you
              will receive a Services cancellation notice from Leadpages. If you
              decide to cancel your Services subscription, your Services
              subscription will not be renewed after your then-current
              Subscription Term expires. If you cancel your Services
              subscription prior to the expiration of your then-current
              Subscription Term, you will not be eligible for nor will you
              receive a prorated refund for any portion of the Fees paid for the
              then-current Subscription Term, however, you may continue to use
              the Services until the end of your then-current Subscription Term.
              For subscription renewal purposes, if adequate cancellation notice
              (as defined above) is not received and your credit card is
              subsequently charged, you will not receive a refund. In the event
              that Leadpages suspends or terminates your User Account, your
              access to the Services, or this Agreement, you understand and
              agree that you shall receive no refund or exchange for any
              Services, any unused time on a Services subscription, any license
              or Fees for any portion of the Services, any content or data
              associated with your User Account, or for anything else.
            </Subparagraph>
            <SubsectionTitle data-numeral="6.4">
              Payment Information; Taxes
            </SubsectionTitle>
            <Paragraph>
              We or our third-party payment processors will charge your Fees and
              any other charges you may incur to the payment method you provide
              when you register for a Leadpages Account or you identify in an
              Ordering Document. All information that you provide in connection
              with a purchase or transaction or other monetary transaction
              interaction with Leadpages must be accurate, complete, and
              current. You may change your payment method by changing the
              information in your Leadpages Account. You agree to pay all
              charges incurred by users of your credit card, debit card, or
              other payment method used in connection with a purchase or
              transaction or other monetary transaction interaction with
              Leadpages at the prices in effect when such charges are incurred.
              If we are unsuccessful in charging your payment method and have
              still not received payment within seven (7) days after informing
              you, we may (without liability to you) suspend or temporarily
              disable all or part of your access to the Services and we shall be
              under no obligation to provide any or all of the Services while
              the applicable Fees concerned remain unpaid. This does not affect
              any other rights and remedies available to us. You will pay any
              and all applicable taxes, if any, relating to any such payments of
              Fees, purchases, transactions or other monetary transactions.
            </Paragraph>
          </Section>
          <Section>
            <SectionTitle data-numeral="7">Privacy</SectionTitle>
            <Paragraph>
              We care about the privacy of our Users. You understand that by
              visiting and accessing the Site and using the Services you consent
              to the collection, use and disclosure of your personally
              identifiable information and aggregate and/or anonymized data as
              set forth in our Privacy Policy, and to have your personally
              identifiable information collected, used, transferred to and
              processed in the United States. You further acknowledge and agree
              that Leadpages may access, preserve, and disclose any personal
              information collected by Leadpages if required to do so by law or
              in a good faith belief that such access preservation or disclosure
              is reasonably necessary to: (a) satisfy any applicable law,
              regulation, legal process or enforceable governmental request, (b)
              enforce the terms and conditions of this Agreement, including
              investigation of potential violations hereof, (c) detect, prevent,
              or otherwise address fraud, security or technical issues
              (including, without limitation, the filtering of spam), or (d)
              protect against imminent harm to the rights, property or safety of
              Leadpages, its Site visitors, its Users, or the public as required
              or permitted by law. More information on Leadpages’ Privacy Policy
              can be reviewed at{' '}
              <Link href="/privacy" passHref>
                <StyledInternalLink aria-label="link to Leadpages privacy policy">
                  www.leadpages.com/privacy
                </StyledInternalLink>
              </Link>
              .
            </Paragraph>
            <Paragraph>
              IF YOU CREATE OR USE YOUR OWN PRIVACY POLICY OR STATEMENT FOR YOUR
              BUSINESS IN CONNECTION WITH THE USE OF THE SERVICES, YOU HEREBY
              ACKNOWLEDGE AND AGREE TO INCLUDE IN SUCH PRIVACY POLICY OR
              STATEMENT, A DISCLOSURE WITH RESPECT TO THE COLLECTION, USE AND
              DISCLOSURE OF PERSONALLY IDENTIFIABLE INFORMATION OF YOUR
              CUSTOMERS TO LEADPAGES THAT IS CONSISTENT AND IN ACCORDANCE WITH
              OUR PRIVACY POLICY, INCLUDING WITH RESPECT TO THE POTENTIAL
              DISCLOSURE OF SUCH INFORMATION TO THIRD-PARTY PARTNERS AND/OR
              THIRD PARTY TECHNOLOGY AND SERVICE PROVIDERS.
            </Paragraph>
          </Section>
          <Section>
            <SectionTitle data-numeral="8">DMCA Notice</SectionTitle>
            <SubsectionTitle data-numeral="8.1">
              Copyright Infringement Notices
            </SubsectionTitle>
            <Paragraph>
              Since we respect artist and content owner rights, it is our policy
              to respond to alleged infringement notices in accordance with the
              Digital Millennium Copyright Act of 1998 (“DMCA”).
            </Paragraph>
            <SubsectionTitle data-numeral="8.2">
              Submitting an Intellectual Property Complaint
            </SubsectionTitle>
            <Paragraph>
              If you believe that your copyrighted work (the “Work”) has been
              copied or used in a way that (1) has not been authorized by you;
              (2) constitutes copyright infringement; and (3) is accessible via
              the Services and/or User Pages, please notify Leadpages’ copyright
              agent at the address indicated below. For your intellectual
              property complaint to be valid under the DMCA, you must provide
              the following information in writing:
            </Paragraph>
            <Subparagraph data-numeral="i">
              An electronic or physical signature of a person authorized to act
              on behalf of the copyright owner;
            </Subparagraph>
            <Subparagraph data-numeral="ii">
              Identification of the copyrighted work that you claim has been
              infringed;
            </Subparagraph>
            <Subparagraph data-numeral="iii">
              Identification of the material that is claimed to be infringing
              and where it is located on User Pages;
            </Subparagraph>
            <Subparagraph data-numeral="iv">
              Information reasonably sufficient to permit Leadpages to contact
              you, such as your address, telephone number, and, e-mail address;
            </Subparagraph>
            <Subparagraph data-numeral="v">
              A statement that you have a good faith belief that the use and
              display of the Work is not authorized by the copyright owner, its
              agent, or applicable law; and
            </Subparagraph>
            <Subparagraph data-numeral="vi">
              A statement, made under penalty of perjury, that the above
              information is accurate, and that you are the copyright owner or
              are authorized to act on behalf of the copyright owner.
            </Subparagraph>
            <Subparagraph>
              The above information must be submitted to:
            </Subparagraph>
            <IndentedSubparagraph>
              Attn: Leadpages DMCA Notice <br />
              Leadpages: Leadpages (US), Inc. <br />
              Address: 212 3rd Ave N, Suite 475, Minneapolis, MN 55401 <br />
              Tel.: (612) 230-7321 <br />
              Email: legal@leadpages.com
            </IndentedSubparagraph>
            <SubsectionTitle data-numeral="8.3">
              Misrepresenting Infringement on Your Intellectual Property
            </SubsectionTitle>
            <Paragraph>
              Under applicable laws, if you knowingly misrepresent that online
              material is infringing upon any intellectual property rights, you
              may be subject to criminal prosecution for perjury and civil
              penalties, including monetary damages, court costs, and attorneys’
              fees.
            </Paragraph>
            <SubsectionTitle data-numeral="8.4">
              Procedure for Intellectual Property Complaints
            </SubsectionTitle>
            <Paragraph>
              Please note that this procedure is exclusively for notifying
              Leadpages and its affiliates that your copyrighted material has
              been infringed. The preceding requirements are intended to comply
              with Leadpages’ rights and obligations under the DMCA, including
              17 U.S.C. §512(c), but do not constitute legal advice. It may be
              advisable to contact an attorney regarding your rights and
              obligations under the DMCA and other applicable laws.
            </Paragraph>
            <SubsectionTitle data-numeral="8.5">
              Termination of Intellectual Property Rights Violators
            </SubsectionTitle>
            <Paragraph>
              In accordance with the DMCA and other applicable laws, Leadpages
              has adopted a policy of terminating, in appropriate circumstances,
              Users who are deemed to be repeat infringers of third-party
              intellectual property rights. Leadpages may also, at its sole and
              absolute discretion, limit access to the Services and/or terminate
              the Leadpages Accounts of any Users who infringe upon any
              intellectual property rights of a third party, regardless of
              whether or not there is any repeat infringement.
            </Paragraph>
          </Section>
          <Section>
            <SectionTitle data-numeral="9">
              Third-Party Links and Information
            </SectionTitle>
            <Paragraph>
              The Site and the Services may integrate with or contain links to
              third-party materials, sites, information, content,
              advertisements, promotions, services, products, or applications
              (collectively “Third-Party Services”). Such Third-Party Services
              may include, without limitation, domain registrars from which you
              may purchase a domain name, email service providers, third-party
              licensed content, and third-party ecommerce services. Third-Party
              Services are not owned or controlled by Leadpages. Leadpages does
              not endorse or assume any responsibility or liability for any loss
              or damage of any sort incurred by you as a result of your dealings
              with any Third-Party Services. If you access a Third-Party Service
              from the Site or the Services, or share your User Content on or
              through any Third-Party Service you do so at your own risk, and
              you understand that this Agreement and Leadpages’ Privacy Policy
              do not apply to your use of such Third-Party Services. You further
              acknowledge and agree that Leadpages shall not be responsible or
              liable, directly or indirectly, for any damage or loss caused or
              alleged to be caused by or in connection with your use of or
              reliance on any Third-Party Services available on or through the
              Site and/or Services, nor will Leadpages accept any responsibility
              for any viruses, worms, Trojan horses or other forms of
              destructive malware that may infect your computer systems as a
              result of your use of any Third-Party Services. Leadpages may, at
              any time and in our sole discretion, and without any prior notice
              to you, suspend, disable access to, or remove any Third-Party
              Services that are being made available to you through the Site
              and/or Services, and in no event will Leadpages be liable to you
              for any such suspension, disabling or removal, including without
              limitation for any damages or loss of profits, revenue, data,
              goodwill or other intangible losses you may experience as a result
              thereof. Additionally, your dealings with or participation in any
              Third-Party Services available through the Site and/or Services,
              including payment and delivery of goods, and any other terms (such
              as warranties) are solely between you and the provider of such
              Third-Party Services.
            </Paragraph>
          </Section>
          <Section>
            <SectionTitle data-numeral="10">
              Disclaimer/Limitation of Liability/Indemnity
            </SectionTitle>
            <SubsectionTitle data-numeral="10.1">Warranties</SubsectionTitle>
            <Paragraph>
              THE SITE AND THE SERVICES ARE BEING PROVIDED TO YOU ON AN “AS IS”
              AND “AS AVAILABLE” BASIS. EXCEPT AS OTHERWISE STATED HEREIN, AND
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SITE AND
              THE SERVICES ARE BEING PROVIDED WITHOUT WARRANTIES OF ANY KIND,
              WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              OR NON-INFRINGEMENT. NO ADVICE OR INFORMATION, WHETHER ORAL OR
              WRITTEN, OBTAINED BY YOU FROM LEADPAGES OR THROUGH THE SITE AND/OR
              SERVICES WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN.
              WITHOUT LIMITING THE FOREGOING, LEADPAGES, ITS SUBSIDIARIES, ITS
              AFFILIATES, AND ITS LICENSORS DO NOT WARRANT THAT (1) THE SITE,
              THE SERVICES, OR ANY CONTENT OR INFORMATION CONTAINED THEREIN IS
              ACCURATE, RELIABLE OR CORRECT; (2) THE SERVICES WILL MEET YOUR
              REQUIREMENTS; (3) THAT THE SITE AND/OR SERVICES WILL BE AVAILABLE
              AT ANY PARTICULAR TIME OR LOCATION, UNINTERRUPTED OR SECURE; (4)
              ANY DEFECTS OR ERRORS IN THE SITE AND/OR SERVICES WILL BE
              CORRECTED; OR (5) THE SERVICES WILL BE FREE OF VIRUSES OR OTHER
              HARMFUL COMPONENTS. FURTHER, LEADPAGES DOES NOT WARRANT, ENDORSE,
              GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY THIRD-PARTY SERVICES
              ADVERTISED OR OFFERED THROUGH THE SITE AND/OR SERVICES, AND
              LEADPAGES WILL NOT BE A PARTY TO OR IN ANY WAY MONITOR ANY
              TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY SERVICES.
            </Paragraph>
            <SubsectionTitle data-numeral="10.2">
              Limitation of Liability
            </SubsectionTitle>
            <Paragraph>
              To the maximum extent permitted by applicable law, Leadpages
              assumes no liability or responsibility for any (i) errors,
              mistakes, or inaccuracies of content; (ii) personal injury or
              property damage, of any nature whatsoever, resulting from your
              access to or use of the Service; (iii) any unauthorized access to
              or use of our secure servers and/or any and all personal
              information stored therein; (iv) any interruption or cessation of
              transmission to or from the Site and/or Services; (v) any bugs,
              viruses, Trojan horses, or the like that may be transmitted to or
              through the Services by any third party; (vi) any errors or
              omissions in any content or for any loss or damage incurred as a
              result of the use of any content posted, emailed, transmitted, or
              otherwise made available through the Site and/or Services; and/or
              (vii) User Content or the defamatory, offensive, or illegal
              conduct of any third party.
            </Paragraph>
            <Paragraph>
              IN NO EVENT SHALL LEADPAGES, ITS AFFILIATES, AGENTS, DIRECTORS,
              EMPLOYEES, SUPPLIERS OR LICENSORS BE LIABLE FOR ANY INDIRECT,
              PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES,
              INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS,
              GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR
              RELATING TO THE USE OF, OR INABILITY TO USE, THE SITE AND/OR THE
              SERVICES OR THE FURNISHING, PERFORMANCE OR USE OF ANY OTHER
              MATTERS HEREUNDER WHETHER BASED UPON CONTRACT, TORT OR ANY OTHER
              THEORY INCLUDING NEGLIGENCE, EVEN IF ADVISED OF THE POSSIBILITY OF
              SUCH DAMAGES. FURTHERMORE, LEADPAGES SHALL NOT BE LIABLE FOR ANY
              FAILURE OR DELAY RESULTING FROM ANY ACTIONS BEYOND ITS REASONABLE
              CONTROL. WITHOUT LIMITING ANY OF THE FOREGOING, LEADPAGES’ TOTAL
              AGGREGATE LIABILITY UNDER ANY PROVISION OF THIS AGREEMENT, OR
              GENERALLY, WILL BE LIMITED TO THE AMOUNT ACTUALLY PAID BY YOU, IF
              ANY, FOR THE LICENSE TO USE THE SERVICES. THIS LIMITATION OF
              LIABILITY ALSO APPLIES TO ANY CLAIMS THAT YOU MAY BRING AGAINST
              ANY OTHER PARTY TO THE EXTENT THAT LEADPAGES WOULD BE REQUIRED TO
              INDEMNIFY THAT PARTY FOR SUCH CLAIM. MULTIPLE CLAIMS SHALL NOT
              EXPAND THE LIMITATIONS SET FORTH UNDER THIS LIMITATION OF
              LIABILITY.
            </Paragraph>
            <SubsectionTitle data-numeral="10.3">
              Defense of Leadpages
            </SubsectionTitle>
            <Paragraph>
              You agree to defend, indemnify and hold harmless Leadpages and its
              subsidiaries, agents, licensors, managers, and other affiliated
              companies, and their employees, contractors, agents, officers and
              directors, from and against any and all claims, damages,
              obligations, losses, liabilities, costs or debt, and expenses
              (including but not limited to attorney’s fees) arising from: (i)
              your use of the Site and/or Services; and (ii) your breach of any
              of the terms and conditions of this Agreement.
            </Paragraph>
            <SubsectionTitle data-numeral="10.4">Exceptions</SubsectionTitle>
            <Paragraph>
              Federal law, some states, provinces and other jurisdictions may
              not allow the exclusion and limitations of certain implied
              warranties, so the above exclusions may not apply to you. This
              agreement gives you specific legal rights, and you may also have
              other rights based on your jurisdiction of residence.
            </Paragraph>
          </Section>
          <Section>
            <SectionTitle data-numeral="11">
              Governing Law, Arbitration, and Class Action/Jury Trial Waiver
            </SectionTitle>
            <SubsectionTitle data-numeral="11.1">Governing Law</SubsectionTitle>
            <Paragraph>
              This Agreement, and all claims related to it, or the performance
              by both parties under it, shall be governed exclusively by the
              internal substantive laws of the State of Minnesota, without
              respect to its conflict of laws principles. The parties
              acknowledge that this Agreement evidences a transaction involving
              interstate commerce. Notwithstanding the preceding sentences with
              respect to the substantive law, any arbitration conducted pursuant
              to the terms of this Agreement shall be governed by the Federal
              Arbitration Act (9 U.S.C. §§ 1-16). The application of the United
              Nations Convention on Contracts for the International Sale of
              Goods is expressly excluded and shall not apply to this Agreement.
              You hereby agree and irrevocably attorn and submit to the
              exclusive jurisdiction of the federal and state courts located in
              Minneapolis, Minnesota with respect to all disputes arising out of
              or in connection with this Agreement and expressly and irrevocably
              waive any defense of personal and/or subject matter jurisdiction
              in those courts and any claims on the grounds of forum non
              conveniens. For any actions for which we retain the right to seek
              injunctive or other equitable relief in a court of competent
              jurisdiction to prevent the actual or threatened infringement,
              misappropriation or violation of a our copyrights, trademarks,
              trade secrets, patents, or other intellectual property or
              proprietary rights, as set forth in the Arbitration provision
              below, including any provisional relief required to prevent
              irreparable harm, you agree that Minneapolis, Minnesota is the
              proper forum for any appeals of an arbitration award or for trial
              court proceedings in the event that the arbitration provision
              below is found to be unenforceable.
            </Paragraph>
            <SubsectionTitle data-numeral="11.2">Arbitration</SubsectionTitle>
            <Paragraph>
              Read this section carefully because it requires the parties to
              arbitrate their disputes and limits the manner in which you can
              seek relief from Leadpages. For any dispute with Leadpages, you
              agree to first contact us at{' '}
              <StyledExternalLink
                href="mailto:legal@leadpages.com"
                alt="Leadpages legal team email address"
              >
                legal@leadpages.com
              </StyledExternalLink>{' '}
              and attempt to resolve the dispute with us informally. In the
              unlikely event that Leadpages has not been able to resolve a
              dispute it has with you after sixty (60) days, we each agree to
              resolve any claim, dispute, or controversy (excluding any claims
              for injunctive or other equitable relief as provided below)
              arising out of or in connection with or relating to this
              Agreement, or the breach or alleged breach thereof (collectively,
              “Claims”), by binding arbitration by JAMS, under the Optional
              Expedited Arbitration Procedures then in effect for JAMS, except
              as provided herein. JAMS may be contacted at{' '}
              <StyledExternalLink
                href="https://www.jamsadr.com/"
                alt="link to JAMS website"
              >
                www.jamsadr.com
              </StyledExternalLink>
              . The arbitration will be conducted in Minneapolis, Minnesota,
              unless you and Leadpages agree otherwise. If you are using
              Leadpages for commercial purposes, each party will be responsible
              for paying any JAMS filing, administrative and arbitrator fees in
              accordance with JAMS rules, and the award rendered by the
              arbitrator shall include costs of arbitration, reasonable
              attorneys’ fees and reasonable costs for expert and other
              witnesses. If you are an individual using Leadpages for
              non-commercial purposes: (i) JAMS may require you to pay a fee for
              the initiation of your case, unless you apply for and successfully
              obtain a fee waiver from JAMS; (ii) the award rendered by the
              arbitrator may include your costs of arbitration, your reasonable
              attorney’s fees, and your reasonable costs for expert and other
              witnesses; and (iii) you may sue in a small claims court of
              competent jurisdiction without first engaging in arbitration, but
              this does not absolve you of your commitment to engage in the
              informal dispute resolution process. Any judgment on the award
              rendered by the arbitrator may be entered in any court of
              competent jurisdiction. Nothing in this Section shall be deemed as
              preventing Leadpages from seeking injunctive or other equitable
              relief from the courts as necessary to prevent the actual or
              threatened infringement, misappropriation, or violation of our
              data security, Intellectual Property Rights or other proprietary
              rights.
            </Paragraph>
            <SubsectionTitle data-numeral="11.3">
              Class Action/Jury Trial Waiver
            </SubsectionTitle>
            <Paragraph>
              With respect to all persons and entities, regardless of whether
              they have obtained or used Leadpages for personal, commercial or
              other purposes, all Claims must be brought in the parties’
              individual capacity, and not as a plaintiff or class member in any
              purported class action, collective action, private attorney
              general action or other representative proceeding. This waiver
              applies to class arbitration, and, unless we agree otherwise, the
              arbitrator may not consolidate more than one person’s Claims. You
              agree that, by entering into this Agreement, you and Leadpages are
              each waiving the right to a trial by jury or to participate in a
              class action, collective action, private attorney general action,
              or other representative proceeding of any kind.
            </Paragraph>
            <SubsectionTitle data-numeral="11.4">
              Limitation on Claims
            </SubsectionTitle>
            <Paragraph>
              You and Leadpages agree that any cause of action arising out of or
              related to the Services and/or your use thereof must commence
              within one (1) year after the date that such cause of action
              arises. Otherwise, such cause of action shall be deemed waived by
              you and Leadpages.
            </Paragraph>
          </Section>
          <Section>
            <SectionTitle data-numeral="12">General</SectionTitle>
            <SubsectionTitle data-numeral="12.1">Assignment</SubsectionTitle>
            <Paragraph>
              This Agreement, and any rights and licenses granted hereunder, may
              not be transferred or assigned by you unless otherwise authorized
              in writing by Leadpages. This Agreement may be assigned by
              Leadpages without restriction. Any attempted transfer or
              assignment in violation hereof shall be null and void. This
              Agreement will inure to the benefit of and be binding upon the
              respective successors and permitted assigns of the parties.
            </Paragraph>
            <SubsectionTitle data-numeral="12.2">
              Notification Procedures and Changes to the Agreement
            </SubsectionTitle>
            <Paragraph>
              Leadpages may provide notifications, whether such notifications
              are required by law or are for marketing or other business-related
              purposes, to you via email notice, written or hard copy notice, or
              through posting of such notice on our website, as determined by
              Leadpages in our sole discretion. Leadpages reserves the right to
              determine the form and means of providing notifications to our
              Users, provided that you may opt out of certain means of
              notification as described in this Agreement. Leadpages is not
              responsible for any automatic filtering you or your network
              provider may apply to email notifications we send to the email
              address you provide us. Leadpages may, in its sole discretion,
              modify or update this Agreement from time to time and in its sole
              discretion, and so you should review this page periodically. When
              we change the Agreement in a material manner, we will update the
              ‘last modified’ date at the top of this page and notify you that
              material changes have been made to the Agreement. Your continued
              use of Services after any such change constitutes your
              acknowledgment and acceptance of the modified terms and conditions
              of this Agreement.
            </Paragraph>
            <SubsectionTitle data-numeral="12.3">No Waiver</SubsectionTitle>
            <Paragraph>
              No waiver of any term of this Agreement shall be deemed a further
              or continuing waiver of such term or any other term, and
              Leadpages’ failure to assert any right or provision under this
              Agreement shall not constitute a waiver of such right or
              provision, nor in any way affect the ability of Leadpages to
              enforce each and every such right or provision thereafter.
            </Paragraph>
            <SubsectionTitle data-numeral="12.4">Contact</SubsectionTitle>
            <Paragraph>
              Please contact us at{' '}
              <StyledExternalLink
                href="mailto:legal@leadpages.com"
                alt="Leadpages legal team email address"
              >
                legal@leadpages.com
              </StyledExternalLink>{' '}
              with any questions regarding this Agreement.
            </Paragraph>
            <SubsectionTitle data-numeral="12.5">
              Disclosures; California Residents
            </SubsectionTitle>
            <Paragraph>
              The provider of services is Leadpages (US), Inc. If you are a
              California resident, in accordance with Cal. Civ. Code §1789.3,
              you may report complaints to the Complaint Assistance Unit of the
              Division of Consumer Leadpages of the California Department of
              Consumer Affairs by contacting them in writing at 1625 North
              Market Blvd., Suite N 112 Sacramento, CA 95834, or by telephone at
              (800) 952-5210 or (916) 445-1254.
            </Paragraph>
            <SubsectionTitle data-numeral="12.6">
              Entire Agreement/Severability
            </SubsectionTitle>
            <Paragraph>
              This Agreement, together with any amendments and any additional
              agreements you may enter into with Leadpages in connection with
              the Services, shall constitute the entire agreement between you
              and Leadpages concerning the subject matter hereof. If any
              provision of this Agreement is deemed invalid by a court of
              competent jurisdiction, the invalidity of such provision shall not
              affect the validity of the remaining provisions of this Agreement,
              which shall remain in full force and effect, except that in the
              event of unenforceability of the universal Class Action/Jury Trial
              Waiver, the entire arbitration agreement shall be unenforceable.
            </Paragraph>
          </Section>
        </ol>
      </BodyTextContainer>
    </BodyContainer>
  </Layout>
)

export default MarketingResourcePage
