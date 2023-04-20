import React from 'react'
import Link from 'next/link'
import { styled } from '@design'
// components
import Layout from '@legacy/components/Layout'
// images
import bgImage from '@legacy/assets/images/shapes/wavy-lines-hourglass-sand.svg'

const TermsOfUseContainer = styled('div', {
  paddingTop: '3rem',
  paddingBottom: '1rem',
  paddingRight: '3rem',
  paddingLeft: '3rem',
  backgroundColor: '#fff',
  '@media (min-width: 576px)': {
    paddingRight: '3rem',
    paddingLeft: '3rem',
  },
  '@media (min-width: 992px)': {
    paddingRight: '6rem',
    paddingLeft: '6rem',
  },
})

const HeaderContainer = styled(TermsOfUseContainer, {
  position: 'relative',
  marginTop: '-60px',
  paddingTop: '120px',
  backgroundColor: '#fef9f1',
  zIndex: -2,
})

const InnerHeaderContainer = styled('div', {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
})

const BodyContainer = styled('div', {
  zIndex: 1,
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media (min-width: 576px)': {
    paddingRight: '3rem',
    paddingLeft: '3rem',
  },
  '@media (min-width: 992px)': {
    paddingRight: '6rem',
    paddingLeft: '6rem',
  },
})

const Heading1 = styled('h1', {
  fontFamily: 'Value Serif',
  color: '#0f0c09',
  fontSize: '40px',
  letterSpacing: '-0.5px',
  lineHeight: '48px',
})

const ListItemH2 = styled('li', {
  color: '#0f0c09',
  fontSize: '22px',
  fontWeight: 500,
  lineHeight: '32px',
  marginBottom: '2rem',
  marginLeft: '1rem',
  '@media (min-width: 576px)': {
    marginLeft: '3rem',
  },
})

const Heading2 = styled('h2', {
  color: '#0f0c09',
  fontSize: '22px',
  fontWeight: '500',
  lineHeight: '32px',
  marginBottom: '2rem',
})

const Heading3 = styled('h3', {
  color: '#0f0c09',
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '28px',
  marginTop: '1rem',
  fontFamily: 'Apercu Pro',
})

const ParagraphText = styled('p', {
  fontFamily: `'Apercu Pro'`,
  fontWeight: 400,
  marginBottom: '2rem',
  color: '#575452',
  fontSize: '16px',
  lineHeight: '24px',
})

const ListItemP = styled('li', {
  color: '#575452',
  fontSize: '16px',
  lineHeight: '24px',
  marginBottom: '1.25rem',
  marginLeft: '1rem',
  '@media (min-width: 576px)': {
    marginLeft: '3rem',
  },
})

const BackgroundImage = styled('img', {
  position: 'absolute',
  right: 0,
  overflowX: 'hidden',
  bottom: '-50px',
  width: '100%',
  zIndex: -1,
  '@media (max-width: 350px)': {
    display: 'none',
  },
  '@media (min-width: 769px) and (max-width: 1299px)': {
    bottom: '-30px',
    width: '50%',
  },
  '@media (min-width: 1300px)': {
    bottom: '-50px',
    width: '50%',
  },
})

const StyledLink = styled('a', {
  color: '#603eff',
})

const OutboundLink = styled('a', {
  color: '#603eff',
})

const PrivacyPage = () => (
  <Layout>
    <HeaderContainer>
      <BackgroundImage src={bgImage?.src} alt="hourglass background image" />
      <InnerHeaderContainer>
        <Heading1>Privacy Policy</Heading1>
      </InnerHeaderContainer>
    </HeaderContainer>
    <TermsOfUseContainer>
      <BodyContainer>
        <ol>
          <ListItemH2>
            <Heading2>OUR APPROACH TO PRIVACY</Heading2>
          </ListItemH2>
          <ListItemP>
            <ParagraphText>
              Leadpages (US), Inc. and its affiliated companies (“Leadpages”,
              “we”, “our”, or “us”) is committed to protecting your privacy.
              This Privacy Policy sets out how we collect, store, process,
              transfer, share and use data that identifies or is associated with
              you (“personal information”) and information regarding our use of
              cookies and similar technologies.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Leadpages provides web-based software that allow customers to:
              create landing pages, sales pages, pop-ups and other conversion
              pages; and automate marketing activities to send relevant
              communications to subscribers via our website (our “Website”)
              located at&nbsp;
              <Link href="/" passHref>
                <StyledLink>www.leadpages.com</StyledLink>
              </Link>{' '}
              (the “Service”).
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              This Privacy Policy applies to our Website and the Service.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Before accessing our Website or using the Service, please ensure
              that you have read and understood our collection, storage, use and
              disclosure of your personal information as described in this
              Privacy Policy.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Leadpages is the data controller of the personal information we
              hold about you.
            </ParagraphText>
          </ListItemP>
          <ListItemH2>
            <Heading2>
              PERSONAL INFORMATION WE COLLECT ABOUT YOU AND HOW WE USE IT
            </Heading2>
          </ListItemH2>
          <ListItemP>
            <ParagraphText>
              We process personal information about individuals that are our
              direct customers and, where our customer is a business or similar
              entity, individuals that are our customer’s employees, agents and
              other representatives. These individuals about whom we collect
              personal information are referred to as “you” throughout this
              Privacy Policy.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              We collect personal information about you when you voluntarily
              submit information directly to us when you access our Website or
              use the Service. This can include information you provide to us
              when you register for an account, fill in a form, correspond with
              us via the Website, phone, email or otherwise, subscribe to our
              mailing lists, newsletters or other forms of marketing
              communications, respond to surveys or use some other feature of
              the Service as available from time to time.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              If you choose not to provide personal information, we may not be
              able to provide the Service to you or respond to your other
              requests.
            </ParagraphText>
          </ListItemP>

          <ListItemP>
            <ParagraphText>
              Annex 1 sets out the categories of personal information we collect
              about you and how we use that information. The table also lists
              the legal basis which we rely on to process the personal
              information, the categories of recipients of the personal
              information and information as to how we determine applicable
              retention periods.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              We also automatically collect personal information about you
              indirectly about how you access and use the Service and
              information about the device you use to access the Service.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Annex 2 sets out the categories of personal information we collect
              about you automatically and how we use that information. The table
              also lists the legal basis which we rely on to process the
              personal information, the categories of recipients of the personal
              information and information as to how we determine applicable
              retention periods.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              We may link or combine the personal information we collect about
              you and the information we collect automatically. This allows us
              to provide you with a personalized experience regardless of how
              you interact with us.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              We may anonymise and aggregate any of the personal information we
              collect, including information about individuals that are your
              subscribers, website visitors or customers (so that it does not
              directly identify you or them). We may use anonymised information
              for purposes that include testing our IT systems, research, data
              analysis, improving the Service and developing new products and
              features. We may also share such anonymised information with
              others.
            </ParagraphText>
          </ListItemP>
          <ListItemH2>
            <ParagraphText>
              CUSTOMER DATA WE MAY PROCESS THROUGH THE PROVISION OF OUR SERVICE
            </ParagraphText>
          </ListItemH2>
          <ListItemP>
            <ParagraphText>
              Please note that, during the provision of our Service, we may also
              process information about individuals that are subscribers,
              website visitors or customers of our customers (which we call
              “Customer Data”).
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              The relevant customer will have its own privacy policy which will
              apply to Customer Data and any questions should be directed to
              that customer.
            </ParagraphText>
          </ListItemP>
          <ListItemH2>
            <Heading2>MARKETING AND ADVERTISING</Heading2>
          </ListItemH2>
          <ListItemP>
            <ParagraphText>
              From time to time with your consent we may contact you with
              relevant information about the Service. Most messages we send will
              be by email. For some messages, we may use personal information we
              collect about you to help us determine the most relevant
              information to share with you.
            </ParagraphText>
          </ListItemP>

          <ListItemP>
            <ParagraphText>
              If you do not want to receive such messages from us, you may opt
              out by clicking on the unsubscribe link at the bottom of our
              emails. Please note that you are not permitted to unsubscribe or
              opt-out of non-promotional messages regarding your account, such
              as account verification, changes or updates to features of the
              Service, or technical or security notices.
            </ParagraphText>
          </ListItemP>
          <ListItemH2>
            <Heading2>
              STORING AND TRANSFERRING YOUR PERSONAL INFORMATION
            </Heading2>
          </ListItemH2>
          <ListItemP>
            <ParagraphText>
              Security. We implement appropriate technical and organisational
              measures to protect your personal information against accidental
              or unlawful destruction, loss, change or damage. All personal
              information we collect will be stored on secure servers. All
              electronic transaction entered into via our Website will be
              protected by SSL encryption technology. Where you register for an
              account on the Service, you are responsible for maintaining your
              account’s security as more specifically explained in our Terms of
              Service.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              International Transfers of your Personal Information. The personal
              information we collect may be transferred to and stored in
              countries outside of the jurisdiction you are in where we and our
              third party service providers have operations. If you are located
              in the European Union (“EU”), your personal information will be
              processed outside of the EU including in the United States; these
              international transfers of your personal information are necessary
              for the performance of our agreement with you in order to provide
              the Service.
            </ParagraphText>
          </ListItemP>
          <ListItemH2>
            <Heading2>YOUR RIGHTS IN RESPECT OF YOUR PERSONAL DATA</Heading2>
          </ListItemH2>
          <ListItemP>
            <ParagraphText>
              This section applies if you are located in the EU.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              In accordance with applicable privacy law, you have the following
              rights in respect of your personal information that we hold:
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Right of access and portability. The right to obtain access to and
              to receive your personal information.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Right to rectification. The right to obtain rectification of your
              personal information without undue delay where that personal
              information is inaccurate or incomplete.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Right to erasure. The right to obtain the erasure of your personal
              information without undue delay in certain circumstances, such as
              where the personal information is no longer necessary in relation
              to the purposes for which it was collected or processed.
            </ParagraphText>
          </ListItemP>

          <ListItemP>
            <ParagraphText>
              Right to restriction. The right to obtain the restriction of the
              processing undertaken by us on your personal information in
              certain circumstances, such as where the accuracy of the personal
              information is contested by you, for a period enabling us to
              verify the accuracy of that personal information.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Right to object. The right to object, on grounds relating to your
              particular situation, to the processing of your personal
              information, and to object to processing of your personal
              information for direct marketing purposes, to the extent it is
              related to such direct marketing.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              If you wish to exercise one of these rights, please contact us
              using the contact details at the end of this Privacy Policy.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              You also have the right to lodge a complaint to your local data
              protection authority. Further information about how to contact
              your local data protection authority is available at&nbsp;
              <OutboundLink
                href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                alt="alt link"
                target="_blank"
                rel="noopener nofollow"
              >
                https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
              </OutboundLink>
            </ParagraphText>
          </ListItemP>
          <ListItemH2>
            <Heading2>COOKIES AND SIMILAR TECHNOLOGIES</Heading2>
          </ListItemH2>
          <ListItemP>
            <ParagraphText>
              When you use our Service, read our emails, or otherwise engage
              with us through a computer or mobile device, we and our third
              party service providers, automatically collect information about
              how you access and use the Service and information about the
              device you use to access the Service. We use this information to
              enhance and personalize your user experience, to monitor and
              improve our Website and Service, and for other internal purposes.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Annex 2 sets out the categories of personal information we collect
              about you automatically and how we use that information.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              We typically collect this information through a variety of
              tracking technologies, including cookies, Flash objects, web
              beacons, embedded scripts, location-identifying technologies, and
              similar technology (collectively, “tracking technologies”). We may
              combine this information with other personal information we
              collect directly from you.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Our Website use cookies to distinguish you from other users of our
              Website. Cookies are pieces of code that allow for personalization
              of our Website by saving your information such as user ID and
              other preferences. A cookie is a small data file that we transfer
              to your device’s hard disk (such as your computer or smartphone)
              for record-keeping purposes. To learn more, consult our&nbsp;
              <OutboundLink
                href="https://www.iubenda.com/privacy-policy/14952535/cookie-policy"
                alt="Leadpages privacy policy"
                target="_blank"
                rel="noopener nofollow"
              >
                Cookie Policy
              </OutboundLink>
              .
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              We use the following types of cookies:
            </ParagraphText>
          </ListItemP>

          <ListItemP>
            <ParagraphText>
              Strictly necessary cookies. These are cookies that are required
              for the essential operation of our Website such as to authenticate
              users and prevent fraudulent use.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Analytical/performance cookies. They allow us to recognise and
              count the number of visitors and to see how visitors move around
              our Website when they are using it. This helps us to improve the
              way our Website work, for example, by ensuring that users are
              finding what they are looking for easily.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Functionality cookies. These are used to recognise you when you
              return to our Website. This enables us to personalize our content
              for you, greet you by name and remember your preferences (for
              example, your choice of language or region).
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Targeting cookies. These cookies record your visit to our Website,
              the pages you have visited and the links you have followed. We
              will use this information to make our Website and the advertising
              displayed on them more relevant to your interests. We may also
              share this information with third parties for this purpose.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              We may collect analytics data, or use third-party analytics tools
              such as Google Analytics, to help us measure traffic and usage
              trends for the Service and to understand more about the
              demographics of our users. You can learn more about Google’s
              practices at&nbsp;
              <OutboundLink
                href="https://policies.google.com/privacy/partners"
                alt="alt link"
                target="_blank"
                rel="noopener nofollow"
              >
                https://policies.google.com/privacy/partners
              </OutboundLink>
              , and view its currently available opt-out options at&nbsp;
              <OutboundLink
                href="https://tools.google.com/dlpage/gaoptout"
                alt="alt link"
                target="_blank"
                rel="noopener nofollow"
              >
                https://tools.google.com/dlpage/gaoptout.
              </OutboundLink>
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              We may also work with third party partners to employ technologies,
              including the application of statistical modelling tools, which
              permit us to recognize and contact you across multiple devices.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Although we do our best to honor the privacy preferences of our
              users, we are unable to respond to Do Not Track signals set by
              your browser at this time.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              The cookies we use are designed to help you get the most from our
              Website but if you do not wish to receive cookies, most browsers
              allow you to change your cookie settings. Please note that if you
              choose to refuse cookies you may not be able to use the full
              functionality of our Website. These settings will typically be
              found in the “options” or “preferences” menu of your browser. In
              order to understand these settings, the following links may be
              helpful, otherwise you should use the “Help” option in your
              browser for more details.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              <OutboundLink
                href="https://support.microsoft.com/en-us/products/windows"
                alt="alt link"
                target="_blank"
                rel="noopener nofollow"
              >
                Cookie settings in Internet Explorer
              </OutboundLink>
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              <OutboundLink
                href="https://support.mozilla.org/en-US/kb/cookies"
                alt="alt link"
                target="_blank"
                rel="noopener nofollow"
              >
                Cookie settings in Firefox
              </OutboundLink>
            </ParagraphText>
          </ListItemP>

          <ListItemP>
            <ParagraphText>
              <OutboundLink
                href="https://support.google.com/chrome/answer/95647?hl=en"
                alt="alt link"
                target="_blank"
                rel="noopener nofollow"
              >
                Cookie settings in Chrome
              </OutboundLink>
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              <OutboundLink
                href="https://support.apple.com/kb/PH5042?locale=en_GB"
                alt="alt link"
                target="_blank"
                rel="noopener nofollow"
              >
                Cookie settings in Safari web
              </OutboundLink>
              &nbsp; and&nbsp;
              <OutboundLink
                href="https://support.apple.com/en-gb/HT201265"
                alt="alt link"
                target="_blank"
                rel="noopener nofollow"
              >
                iOS
              </OutboundLink>
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Deleting cookies does not delete non-cookie technologies such as
              Local Storage Objects (LSOs) such as Flash objects and HTML5. You
              can learn more about Flash objects - including how to manage
              privacy and storage settings for Flash cookies – on Adobe’s
              website or by clicking&nbsp;
              <OutboundLink
                href="https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html"
                alt="alt link"
                target="_blank"
                rel="noopener nofollow"
              >
                here.
              </OutboundLink>
              &nbsp; Various browsers may offer their own management tools for
              removing HTML5 LSOs.
            </ParagraphText>
          </ListItemP>
          <ListItemH2>
            <Heading2>
              THIRD PARTY DATA COLLECTION AND INTEREST BASED ADVERTISING
            </Heading2>
          </ListItemH2>
          <ListItemP>
            <ParagraphText>
              We participate in interest-based advertising and use third party
              advertising companies to serve you targeted advertisements based
              on your browsing history. We permit third party online advertising
              networks, social media companies and other third party services to
              collect information about your use of our website and mobile apps
              over time so that they may play or display ads on our Service, on
              other website, apps or services you may use, and on other devices
              you may use. Typically, though not always, the information used
              for interest-based advertising is collected through cookies or
              similar tracking technologies, which recognize the device you are
              using and collect information, including click stream information,
              browser type, time and date you visited the site and other
              information. We may share a common account identifier (such as an
              email address or user ID) with our third party advertising
              partners to help identify you across devices.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              We and our third party partners use this information to make the
              advertisements you see online more relevant to your interests, as
              well as to provide advertising-related services such as reporting,
              attribution, analytics and market research.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              To learn about interest-based advertising and how you may be able
              to opt-out of some of this advertising, you may wish to visit the
              Network Advertising Initiative’s online resources, at&nbsp;
              <OutboundLink
                href="https://www.networkadvertising.org/choices"
                alt="alt link"
                target="_blank"
                rel="noopener nofollow"
              >
                https://www.networkadvertising.org/choices
              </OutboundLink>
              , the DAA’s resources at www.aboutads.info/choices and/or Your
              Online Choices at&nbsp;
              <OutboundLink
                href="https://www.youronlinechoices.com/uk"
                alt="alt link"
                target="_blank"
                rel="noopener nofollow"
              >
                https://www.youronlinechoices.com/uk.
              </OutboundLink>
              &nbsp; You may also be able to limit interest-based advertising
              through the settings on your mobile device by selecting “limit ad
              tracking” (iOS) or “opt-out of interest based ads” (Android). You
              may also be able to opt-out of some – but not all – interest-based
              ads served by mobile ad networks by visiting&nbsp;
              <OutboundLink
                href="https://youradchoices.com/appchoices"
                alt="alt link"
                target="_blank"
                rel="noopener nofollow"
              >
                https://youradchoices.com/appchoices
              </OutboundLink>
              &nbsp; and downloading the mobile AppChoices app.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Please note that opting-out of receiving interest-based
              advertising through the NAI’s and DAA’s or Your Online Choices
              online resources will only opt-out a user from receiving
              interest-based ads on that specific browser or device, but the
              user may still receive interest-based ads on his or her other
              devices. You must perform the opt-out on each browser or device
              you use.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Furthermore, some of these opt-outs may not be effective unless
              your browser is set to accept cookies. If you delete cookies,
              change your browser settings, switch browsers or computers, or use
              another operating system, you will need to opt-out again.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              <strong />
              LINKS TO THIRD PARTY SITES
            </ParagraphText>
            <ParagraphText>
              Our Website may, from time to time, contain links to and from
              third party websites. If you follow a link to any of these
              websites, please note that these websites have their own privacy
              policies and that we do not accept any responsibility or liability
              for their policies. Please check the individual policies before
              you submit any information to those websites.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              <strong />
              OUR POLICY TOWARDS CHILDREN
            </ParagraphText>
            <ParagraphText>
              The Service is intended to be used by adults and we do not
              knowingly collect personal information from children under 13. If
              you become aware that your child has provided us with personal
              information, please contact us using the details below so that we
              can take steps to remove such information and terminate any
              account your child has created with us.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>CHANGES TO THIS POLICY</ParagraphText>
            <ParagraphText>
              We may update this Privacy Policy from time to time and so you
              should review this page periodically. When we change this Privacy
              Policy in a material way, we will update the “last modified” date
              at the end of this Privacy Policy. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>NOTICE TO YOU</ParagraphText>
            <ParagraphText>
              If we need to provide you with information about something,
              whether for legal, marketing or other business related purposes,
              we will select what we believe is the best way to get in contact
              with you. We will usually do this through email or by placing a
              notice on our Website. The fact that we may send notices to you
              will not stop you from being able to opt out of certain types of
              contact as described in this Privacy Policy.
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>CONTACTING US</ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              Regardless of your location, any questions, comments and requests
              regarding this Privacy Policy are welcome and should be addressed
              to the Data Protection Officer at&nbsp;
              <OutboundLink
                href="mailto:privacy@leadpages.com"
                alt="alt link"
                target="_blank"
                rel="noopener nofollow"
              >
                privacy@leadpages.com
              </OutboundLink>
              &nbsp; or mailed to the address below as appropriate depending on
              how you are using our Service.
            </ParagraphText>
            <ParagraphText>
              212 Third Avenue North, Suite 475, Minneapolis, MN 55401
            </ParagraphText>
          </ListItemP>
          <ListItemP>
            <ParagraphText>
              This Privacy Policy was last modified on 4 March 2020.
            </ParagraphText>
          </ListItemP>
        </ol>
        <Heading2>
          ANNEX 1 – PERSONAL INFORMATION WE COLLECT WHEN YOU USE THE SERVICE
        </Heading2>
        <ol>
          <ListItemH2>
            <Heading3>CATEGORIES OF PERSONAL INFORMATION</Heading3>
            <ul>
              <ListItemP>
                <Heading3>
                  CONTACT INFORMATION AND BASIC PERSONAL DETAILS
                </Heading3>
                <ParagraphText>
                  Such as your full name, phone number, postal address, email
                  address, zip code.
                </ParagraphText>
                <ul>
                  <ListItemP>
                    <Heading3>How we use it</Heading3>
                    <ParagraphText>We use this information to:</ParagraphText>
                    <ul>
                      <ListItemP>
                        communicate with you, including sending statements and
                        invoices, communications, news, alerts and marketing
                        communications;
                      </ListItemP>
                      <ListItemP>
                        deal with enquiries and complaints made by or about you
                        relating to the Service;
                      </ListItemP>
                      <ListItemP>authentication purposes;</ListItemP>
                      <ListItemP>
                        create customer accounts and operate, maintain and
                        provide to you the features and functionality of the
                        Service.
                      </ListItemP>
                    </ul>
                  </ListItemP>
                  <ListItemP>
                    <Heading3>Legal basis for the processing</Heading3>
                    <ParagraphText>
                      The processing is necessary for:
                    </ParagraphText>
                    <ul>
                      <ListItemP>
                        the performance of a contract and to take steps prior to
                        entering into a contract;
                      </ListItemP>
                      <ListItemP>
                        our legitimate interests, namely administering the
                        Service, for marketing purposes and communicating with
                        users; andto comply with certain legal obligations.
                      </ListItemP>
                      <ListItemP>
                        to comply with certain legal obligations.
                      </ListItemP>
                    </ul>
                  </ListItemP>
                </ul>
              </ListItemP>
              <ListItemP>
                <Heading3>WEBSITE, BUSINESS AND MARKETING INFORMATION</Heading3>
                <ParagraphText>
                  Such as company website, IP address, current email list size,
                  e-commerce software in use, email marketing software, product
                  usage information, demographic data, data about customer’s 3rd
                  party services, other business information (Facebook ad spend,
                  status of business, industry, business goals).
                </ParagraphText>
                <ul>
                  <ListItemP>
                    <Heading3>How we use it</Heading3>
                    <ParagraphText>We use this information to:</ParagraphText>
                    <ul>
                      <ListItemP>
                        <ParagraphText>
                          operate, maintain and provide to you the features and
                          functionality of the Service;
                        </ParagraphText>
                      </ListItemP>
                      <ListItemP>
                        <ParagraphText>
                          determine relevant advertising / marketing activities.
                        </ParagraphText>
                      </ListItemP>
                    </ul>
                  </ListItemP>
                  <ListItemP>
                    <Heading3>Legal basis for the processing</Heading3>
                    <ParagraphText>
                      The processing is necessary for:
                    </ParagraphText>
                    <ul>
                      <ListItemP>
                        <ParagraphText>
                          the performance of a contract and to take steps prior
                          to entering into a contract; and
                        </ParagraphText>
                      </ListItemP>
                      <ListItemP>
                        <ParagraphText>
                          our legitimate interests, namely administering the
                          Service and for marketing purposes.
                        </ParagraphText>
                      </ListItemP>
                    </ul>
                  </ListItemP>
                </ul>
              </ListItemP>
              <ListItemP>
                <Heading3>PAYMENT INFORMATION</Heading3>
                <ParagraphText>
                  Details such as your credit card information, account
                  information, billing address and related information.
                </ParagraphText>
                <ul>
                  <ListItemP>
                    <Heading3>How we use it</Heading3>
                    <ParagraphText>
                      We use this information to facilitate payment for use of
                      the Service and to detect and prevent fraud.
                    </ParagraphText>
                  </ListItemP>
                  <ListItemP>
                    <Heading3>Legal basis for the processing</Heading3>
                    <ParagraphText>
                      The processing is necessary for the performance of our
                      contract with you and our legitimate interests, namely the
                      detection and prevention of fraud.
                    </ParagraphText>
                  </ListItemP>
                </ul>
              </ListItemP>
              <ListItemP>
                <Heading3>CORRESPONDENCE AND COMMENTS</Heading3>
                <ParagraphText>
                  When you contact us directly, e.g. by email, phone, mail, when
                  you post on message boards, blogs or complete an online form
                  or provide quality survey input, we will record your comments
                  and opinions.
                </ParagraphText>
                <ul>
                  <ListItemP>
                    <Heading3>How we use it</Heading3>
                    <ParagraphText>
                      To address your questions, issues and concerns and improve
                      the Service, to determine products and services that may
                      be of interest to you and to send you news, alerts and
                      marketing communications in accordance with your marketing
                      preferences.
                    </ParagraphText>
                  </ListItemP>
                  <ListItemP>
                    <Heading3>Legal basis for the processing</Heading3>
                    <ParagraphText>
                      The processing is necessary for our legitimate interests,
                      namely communicating with users and for marketing
                      purposes.
                    </ParagraphText>
                  </ListItemP>
                </ul>
              </ListItemP>
              <ListItemP>
                <Heading3>ALL PERSONAL INFORMATION SET OUT ABOVE</Heading3>
                <ul>
                  <ListItemP>
                    <Heading3>How we use it</Heading3>
                    <ParagraphText>
                      We will use all the personal information we collect to
                      prevent and detect fraud, to operate, maintain and provide
                      to you the features and functionality of the Service, to
                      communicate with you, to monitor and improve the Service,
                      our Website and business, and to help us develop new
                      products and services.
                    </ParagraphText>
                  </ListItemP>
                  <ListItemP>
                    <Heading3>Legal basis for the processing</Heading3>
                    <ParagraphText>
                      The processing is necessary for our legitimate interest,
                      namely to administer and improve the Service, our Website,
                      our business and develop new services.
                    </ParagraphText>
                  </ListItemP>
                </ul>
              </ListItemP>
            </ul>
          </ListItemH2>
          <ListItemH2>
            <Heading3>CATEGORIES OF RECIPIENTS</Heading3>
            <ParagraphText>
              As required in accordance with how we use it, we will share your
              personal information with the following:
            </ParagraphText>
            <ul>
              <ListItemP>
                <Heading3>SERVICE PROVIDERS AND ADVISORS</Heading3>
                <ParagraphText>
                  Third party vendors and other service providers that perform
                  services for us, on our behalf, which may include providing
                  mailing or email services, tax and accounting services,
                  payments processing, data enhancement services, fraud
                  prevention, web hosting, or providing analytic services. Your
                  personal information is never transferred to any third-party
                  for the purposes of re-marketing to you.
                </ParagraphText>
              </ListItemP>
              <ListItemP>
                <Heading3>
                  PURCHASERS AND THIRD PARTIES IN CONNECTION WITH A BUSINESS
                  TRANSACTION
                </Heading3>
                <ParagraphText>
                  Personal information may be disclosed to third parties in
                  connection with a transaction, such as a merger, sale of
                  assets or shares, reorganisation, financing, change of control
                  or acquisition of all or a portion of our business.
                </ParagraphText>
              </ListItemP>
              <ListItemP>
                <Heading3>
                  LAW ENFORCEMENT, REGULATORS AND OTHER PARTIES FOR LEGAL
                  REASONS
                </Heading3>
                <ParagraphText>
                  Third parties as required by law or if we reasonably believe
                  that such action is necessary to (a) comply with the law and
                  the reasonable requests of law enforcement; (b) enforce our
                  Terms of Service or to protect the security or integrity of
                  our Service or Website; and/or (c) exercise or protect the
                  rights, property, or personal safety of Leadpages, our
                  customers or others.
                </ParagraphText>
              </ListItemP>
            </ul>
          </ListItemH2>
          <ListItemH2>
            <Heading3>RETENTION PERIOD</Heading3>
            <ParagraphText>
              For no longer than necessary for the purposes set out and in
              accordance with our legal obligations and legitimate business
              interests.
            </ParagraphText>
          </ListItemH2>
        </ol>
        <Heading2>
          ANNEX 2 – PERSONAL INFORMATION COLLECTED AUTOMATICALLY
        </Heading2>
        <ol>
          <ListItemH2>
            <Heading3>CATEGORIES OF PERSONAL INFORMATION</Heading3>
            <ul>
              <ListItemP>
                <Heading3>
                  INFORMATION ABOUT HOW YOU ACCESS AND USE THE SERVICE
                </Heading3>
                <ParagraphText>
                  For example, the website from which you came and the website
                  to which you are going when you leave our Website, how
                  frequently you access the Service, the time you access the
                  Service and how long you use them for, whether you open emails
                  or click the links contained in emails, whether you access the
                  Service from multiple devices, and other actions you take on
                  the Service.
                </ParagraphText>
                <ul>
                  <ListItemP>
                    <Heading3>How we use it</Heading3>
                    <ParagraphText>We use this information to:</ParagraphText>
                    <ul>
                      <ListItemP>
                        present the Service to you on your device;
                      </ListItemP>
                      <ListItemP>
                        determine news, alerts and other products and services
                        that may be of interest to you for marketing purposes;
                        and
                      </ListItemP>
                      <ListItemP>
                        monitor and improve the Service and our business, and to
                        help us develop new products and services.
                      </ListItemP>
                    </ul>
                  </ListItemP>
                  <ListItemP>
                    <Heading3>Legal basis for the processing</Heading3>
                    <ParagraphText>
                      The processing is necessary for our legitimate interests,
                      namely: to tailor the Service to the user and to improve
                      the Service generally; to monitor and resolve issues; for
                      marketing purposes; to communicate with users; to contact
                      users; and for the detection and prevention of fraud.
                    </ParagraphText>
                  </ListItemP>
                </ul>
              </ListItemP>
              <ListItemP>
                <Heading3>INFORMATION ABOUT YOUR DEVICE</Heading3>
                <ParagraphText>
                  We also collect information about the computer, tablet,
                  smartphone or other electronic device you use to connect to
                  the Service. This information can include details about the
                  type of device, unique device identifying numbers, operating
                  systems, browsers and applications connected to the Service
                  through the device, information about the server upon which
                  the Service operates, your Internet service provider or mobile
                  network, your IP address.
                </ParagraphText>
                <ul>
                  <ListItemP>
                    <Heading3>How we use it</Heading3>
                    <ParagraphText>We use this information to:</ParagraphText>
                    <ul>
                      <ListItemP>
                        <ParagraphText>
                          enable the Service to be presented to you on your
                          device;
                        </ParagraphText>
                      </ListItemP>
                      <ListItemP>
                        <ParagraphText>
                          operate, maintain and provide to you the features and
                          functionality of the Service;
                        </ParagraphText>
                      </ListItemP>
                      <ListItemP>
                        <ParagraphText>
                          monitor and improve the Service and business, and to
                          help us develop new products and services.
                        </ParagraphText>
                      </ListItemP>
                    </ul>
                  </ListItemP>
                  <ListItemP>
                    <Heading3>Legal basis for the processing</Heading3>
                    <ParagraphText>
                      The processing is necessary for our legitimate interests,
                      namely: to tailor the Service to the user and to improve
                      the Service generally; to monitor and resolve issues; for
                      marketing purposes; to communicate with users; to contact
                      users; and for the detection and prevention of fraud.
                    </ParagraphText>
                  </ListItemP>
                </ul>
              </ListItemP>
            </ul>
          </ListItemH2>
          <ListItemH2>
            <Heading3>CATEGORIES OF RECIPIENTS</Heading3>
            <ParagraphText>
              As required in accordance with how we use it, we will share your
              personal information with the following:
            </ParagraphText>
            <ul>
              <ListItemP>
                <Heading3>SERVICE PROVIDERS AND ADVISORS</Heading3>
                <ParagraphText>
                  Third party vendors and other service providers that perform
                  services for us, on our behalf, which may include providing
                  mailing or email services, tax and accounting services,
                  payments processing, data enhancement services, fraud
                  prevention, web hosting, or providing analytic services. Your
                  personal information is never transferred to any third-party
                  for the purposes of re-marketing to you.
                </ParagraphText>
              </ListItemP>
              <ListItemP>
                <Heading3>
                  PURCHASERS AND THIRD PARTIES IN CONNECTION WITH A BUSINESS
                  TRANSACTION
                </Heading3>
                <ParagraphText>
                  Personal information may be disclosed to third parties in
                  connection with a transaction, such as a merger, sale of
                  assets or shares, reorganisation, financing, change of control
                  or acquisition of all or a portion of our business.
                </ParagraphText>
              </ListItemP>
              <ListItemP>
                <Heading3>
                  LAW ENFORCEMENT, REGULATORS AND OTHER PARTIES FOR LEGAL
                  REASONS
                </Heading3>
                <ParagraphText>
                  Third parties as required by law or if we reasonably believe
                  that such action is necessary to (a) comply with the law and
                  the reasonable requests of law enforcement; (b) enforce our
                  Terms of Service or to protect the security or integrity of
                  our Service or Website; and/or (c) exercise or protect the
                  rights, property, or personal safety of Leadpages, our
                  customers or others.
                </ParagraphText>
              </ListItemP>
            </ul>
          </ListItemH2>
          <ListItemH2>
            <Heading3>RETENTION PERIOD</Heading3>
            <ParagraphText>
              For no longer than necessary for the purposes set out and in
              accordance with our legal obligations and legitimate business
              interests.
            </ParagraphText>
          </ListItemH2>
        </ol>
      </BodyContainer>
    </TermsOfUseContainer>
  </Layout>
)

export default PrivacyPage
