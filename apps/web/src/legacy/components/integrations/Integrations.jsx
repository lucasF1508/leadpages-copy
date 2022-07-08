import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
// components
import IntegrationsContent from './IntegrationsContent';
import IntegrationsHeader from './IntegrationsHeader';
import ReadyToGrow from '../product/ReadyToGrow';

const Integrations = () => {
  const images = useStaticQuery(graphql`
    query IntegrationsQuery {
      ActiveCampaignLogo: file(
        relativePath: { eq: "assets/images/integrations/activecampaign_50@2x.png" }
      ) {
        ...constrained
      }
      AcuityLogo: file(relativePath: { eq: "assets/images/integrations/acuity.jpg" }) {
        ...constrained
      }
      amoCRMLogo: file(relativePath: { eq: "assets/images/integrations/amo-crm_logo_250px.jpg" }) {
        ...constrained
      }
      AutopilotLogo: file(
        relativePath: { eq: "assets/images/integrations/autopilot-logo_50@2x.png" }
      ) {
        ...constrained
      }
      AWeberLogo: file(relativePath: { eq: "assets/images/integrations/aweber.png" }) {
        ...constrained
      }
      BingAdsLogo: file(relativePath: { eq: "assets/images/integrations/bing-ads.jpg" }) {
        ...constrained
      }
      BombBombLogo: file(relativePath: { eq: "assets/images/integrations/bombbomb_400x400.jpg" }) {
        ...constrained
      }
      BrightRollLogo: file(relativePath: { eq: "assets/images/integrations/brightroll-logo.jpg" }) {
        ...constrained
      }
      CalendlyLogo: file(relativePath: { eq: "assets/images/integrations/calendly.jpg" }) {
        ...constrained
      }
      CampaignMonitorLogo: file(
        relativePath: { eq: "assets/images/integrations/campaignmonitor-100px.jpg" }
      ) {
        ...constrained
      }
      ChatIOLogo: file(relativePath: { eq: "assets/images/integrations/chat-io.jpg" }) {
        ...constrained
      }
      ClickSendSMSLogo: file(
        relativePath: { eq: "assets/images/integrations/ClickSend-Icon-Only.jpg" }
      ) {
        ...constrained
      }
      ConstantContactLogo: file(
        relativePath: { eq: "assets/images/integrations/constantcontact_50@2x.png" }
      ) {
        ...constrained
      }
      ContactuallyLogo: file(
        relativePath: { eq: "assets/images/integrations/Contactually-logo_400px.jpg" }
      ) {
        ...constrained
      }
      ConvertKitLogo: file(
        relativePath: { eq: "assets/images/integrations/Convertkit_50@2x.png" }
      ) {
        ...constrained
      }
      DriftLogo: file(relativePath: { eq: "assets/images/integrations/drift.png" }) {
        ...constrained
      }
      DripLogo: file(relativePath: { eq: "assets/images/integrations/drip_50@2x.png" }) {
        ...constrained
      }
      DrupalLogo: file(relativePath: { eq: "assets/images/integrations/drupal-100px.jpg" }) {
        ...constrained
      }
      Egoi: file(relativePath: { eq: "assets/images/integrations/e-goi.jpeg" }) {
        ...constrained
      }
      EmmaLogo: file(relativePath: { eq: "assets/images/integrations/emma_50@2x.png" }) {
        ...constrained
      }
      FacebookLogo: file(relativePath: { eq: "assets/images/integrations/facebook_50@2x.png" }) {
        ...constrained
      }
      GetResponseLogo: file(
        relativePath: { eq: "assets/images/integrations/getresponse_50@2x.png" }
      ) {
        ...constrained
      }
      GmailLogo: file(relativePath: { eq: "assets/images/integrations/gmail-logo.png" }) {
        ...constrained
      }
      GoogleAdsLogo: file(relativePath: { eq: "assets/images/integrations/Google_Ads.jpg" }) {
        ...constrained
      }
      GoogleAnalyticsLogo: file(
        relativePath: { eq: "assets/images/integrations/Google-Analytics-125px_max.jpg" }
      ) {
        ...constrained
      }
      GoogleMapsLogo: file(relativePath: { eq: "assets/images/integrations/google-maps.jpg" }) {
        ...constrained
      }
      GoogleSheetsLogo: file(relativePath: { eq: "assets/images/integrations/google-sheets.jpg" }) {
        ...constrained
      }
      GoogleTagManagerLogo: file(
        relativePath: { eq: "assets/images/integrations/google-tag-manager-logo.png" }
      ) {
        ...constrained
      }
      GoToWebinarLogo: file(
        relativePath: { eq: "assets/images/integrations/gotowebinar-logo.png" }
      ) {
        ...constrained
      }
      GumroadLogo: file(relativePath: { eq: "assets/images/integrations/gumroad-logo.png" }) {
        ...constrained
      }
      HotjarLogo: file(relativePath: { eq: "assets/images/integrations/hotjar2.png" }) {
        ...constrained
      }
      HubSpotLogo: file(relativePath: { eq: "assets/images/integrations/hubspot-logo_50@2x.png" }) {
        ...constrained
      }
      iContactLogo: file(relativePath: { eq: "assets/images/integrations/icontact.jpg" }) {
        ...constrained
      }
      InfusionSoftLogo: file(
        relativePath: { eq: "assets/images/integrations/infusionsoft_50@2x.png" }
      ) {
        ...constrained
      }
      InstagramLogo: file(relativePath: { eq: "assets/images/integrations/Instagram_logo.jpg" }) {
        ...constrained
      }
      IntercomLogo: file(relativePath: { eq: "assets/images/integrations/Intercom_50@2x.png" }) {
        ...constrained
      }
      JavaScriptLogo: file(relativePath: { eq: "assets/images/integrations/javascript-logo.jpg" }) {
        ...constrained
      }
      JoomlaLogo: file(relativePath: { eq: "assets/images/integrations/joomla.jpg" }) {
        ...constrained
      }
      KlaviyoLogo: file(relativePath: { eq: "assets/images/integrations/klaviyo_logo.jpg" }) {
        ...constrained
      }
      KlickTippLogo: file(relativePath: { eq: "assets/images/integrations/klick-tipp.png" }) {
        ...constrained
      }
      LeadsBridgeLogo: file(
        relativePath: { eq: "assets/images/integrations/leadsbridge-logo.png" }
      ) {
        ...constrained
      }
      LinkedInLogo: file(
        relativePath: { eq: "assets/images/integrations/LinkedIn-ads-1000px-max.jpg" }
      ) {
        ...constrained
      }
      LionDeskLogo: file(relativePath: { eq: "assets/images/integrations/LionDesk_Logo.jpg" }) {
        ...constrained
      }
      LiveCallLogo: file(relativePath: { eq: "assets/images/integrations/livecall_icon.jpg" }) {
        ...constrained
      }
      LiveChatLogo: file(relativePath: { eq: "assets/images/integrations/live-chat.png" }) {
        ...constrained
      }
      MadMimiLogo: file(relativePath: { eq: "assets/images/integrations/madmimi.jpg" }) {
        ...constrained
      }
      MailchimpLogo: file(
        relativePath: { eq: "assets/images/integrations/Mailchimp_Logo-Vertical_Black@2x.jpg" }
      ) {
        ...constrained
      }
      MailerLiteLogo: file(relativePath: { eq: "assets/images/integrations/mailer-lite.jpg" }) {
        ...constrained
      }
      ManyChatLogo: file(relativePath: { eq: "assets/images/integrations/manychat.png" }) {
        ...constrained
      }
      MarketoLogo: file(relativePath: { eq: "assets/images/integrations/marketo_logo-300px.jpg" }) {
        ...constrained
      }
      MondayLogo: file(relativePath: { eq: "assets/images/integrations/monday-logo.jpg" }) {
        ...constrained
      }
      OntraportLogo: file(relativePath: { eq: "assets/images/integrations/ontraport_50@2x.png" }) {
        ...constrained
      }
      OpenTableLogo: file(
        relativePath: { eq: "assets/images/integrations/Open-table_Logo_horizontal_RGB@2x.jpg" }
      ) {
        ...constrained
      }
      OtherAdvertisingPlatformsIcon: file(
        relativePath: { eq: "assets/images/integrations/other-advertising-platforms.jpg" }
      ) {
        ...constrained
      }
      PardotLogo: file(relativePath: { eq: "assets/images/integrations/pardot.jpg" }) {
        ...constrained
      }
      PaypalLogo: file(relativePath: { eq: "assets/images/integrations/paypal_50@2x.png" }) {
        ...constrained
      }
      PipeDriveLogo: file(relativePath: { eq: "assets/images/integrations/Pipedrive_50@2x.png" }) {
        ...constrained
      }
      PoptinLogo: file(relativePath: { eq: "assets/images/integrations/Poptin_icon.jpg" }) {
        ...constrained
      }
      SalesforceLogo: file(relativePath: { eq: "assets/images/integrations/salesforce.jpg" }) {
        ...constrained
      }
      SendInBlueLogo: file(relativePath: { eq: "assets/images/integrations/SendInBlue.jpg" }) {
        ...constrained
      }
      SendOwlLogo: file(relativePath: { eq: "assets/images/integrations/SendOwl.png" }) {
        ...constrained
      }
      ShopifyLogo: file(relativePath: { eq: "assets/images/integrations/shopify_50@2x.png" }) {
        ...constrained
      }
      ShutterstockLogo: file(
        relativePath: { eq: "assets/images/integrations/shutterstock-logo.png" }
      ) {
        ...constrained
      }
      SimpleTextingLogo: file(
        relativePath: { eq: "assets/images/integrations/SimpleTexting_icon.jpg" }
      ) {
        ...constrained
      }
      SlackLogo: file(relativePath: { eq: "assets/images/integrations/Slack_Mark_Web.jpg" }) {
        ...constrained
      }
      SquarespaceLogo: file(relativePath: { eq: "assets/images/integrations/squarespace.jpg" }) {
        ...constrained
      }
      StripeLogo: file(relativePath: { eq: "assets/images/integrations/stripe_50@2x.png" }) {
        ...constrained
      }
      SurveyMonkeyLogo: file(relativePath: { eq: "assets/images/integrations/survey-monkey.jpg" }) {
        ...constrained
      }
      TaboolaLogo: file(relativePath: { eq: "assets/images/integrations/taboola-logo.jpg" }) {
        ...constrained
      }
      TeachableLogo: file(relativePath: { eq: "assets/images/integrations/teachable.jpg" }) {
        ...constrained
      }
      TimetradeLogo: file(relativePath: { eq: "assets/images/integrations/timetrade.jpg" }) {
        ...constrained
      }
      TrelloLogo: file(relativePath: { eq: "assets/images/integrations/trello-mark-blue.jpg" }) {
        ...constrained
      }
      TrustpilotLogo: file(relativePath: { eq: "assets/images/integrations/trust-pilot.jpg" }) {
        ...constrained
      }
      TwilioLogo: file(relativePath: { eq: "assets/images/integrations/twilio-mark-red.jpg" }) {
        ...constrained
      }
      TwitterLogo: file(relativePath: { eq: "assets/images/integrations/Twitter_Logo_Blue.jpg" }) {
        ...constrained
      }
      TypeformLogo: file(relativePath: { eq: "assets/images/integrations/typeformlogo.jpg" }) {
        ...constrained
      }
      VimeoLogo: file(relativePath: { eq: "assets/images/integrations/vimeo_50@2x.png" }) {
        ...constrained
      }
      WebhooksLogo: file(relativePath: { eq: "assets/images/integrations/webhooks-100px.jpg" }) {
        ...constrained
      }
      WebinarJamLogo: file(relativePath: { eq: "assets/images/integrations/webinarjam.jpg" }) {
        ...constrained
      }
      WeeblyLogo: file(relativePath: { eq: "assets/images/integrations/weebly.jpg" }) {
        ...constrained
      }
      WistiaLogo: file(relativePath: { eq: "assets/images/integrations/wistia_50@2x.png" }) {
        ...constrained
      }
      WixLogo: file(relativePath: { eq: "assets/images/integrations/wix-logo.png" }) {
        ...constrained
      }
      WordPressLogo: file(relativePath: { eq: "assets/images/integrations/wordpress-100px.jpg" }) {
        ...constrained
      }
      WufooLogo: file(relativePath: { eq: "assets/images/integrations/wufoo.png" }) {
        ...constrained
      }
      YouTubeLogo: file(relativePath: { eq: "assets/images/integrations/YouTube_50@2x.png" }) {
        ...constrained
      }
      ZapierLogo: file(relativePath: { eq: "assets/images/integrations/zapier_50@2x.png" }) {
        ...constrained
      }
      ZendeskLogo: file(relativePath: { eq: "assets/images/integrations/Zendesk-100px.jpg" }) {
        ...constrained
      }
      ZoHoCRMLogo: file(relativePath: { eq: "assets/images/integrations/zoho-CRM_100px_maz.jpg" }) {
        ...constrained
      }
      ZoomLogo: file(relativePath: { eq: "assets/images/integrations/zoom.jpg" }) {
        ...constrained
      }
    }
  `);
  const integrationsArray = [
    {
      integration: 'Google Analytics',
      category: 'Analytics',
      description:
        'Just paste your Google Analytics tracking code into Leadpages and you’re ready to get analytical.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.GoogleAnalyticsLogo),
      subpage: {
        route: '/integrations/google-analytics',
      },
    },
    {
      integration: 'Google Tag Manager',
      category: 'Analytics',
      description:
        'Leadpages is compatible with your Google Tag Manager scripts, letting you update tags from a central location.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.GoogleTagManagerLogo),
    },
    {
      integration: 'Hotjar',
      category: 'Analytics',
      description:
        'Better understand how your visitors consume your content with Hotjar and Leadpages, simply copy and paste your Hotjar Tracking Code into the head section of your pages.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.HotjarLogo),
    },
    {
      integration: 'JavaScript Analytics Platforms',
      category: 'Analytics',
      description:
        'Leadpages works with any JavaScript-based tracking platform that requires you to embed a snippet of code.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.JavaScriptLogo),
    },
    {
      integration: 'amoCRM',
      category: 'CRM',
      description:
        'Automatically deliver data from your Leadpages form submissions to add or update your leads and tasks within your amoCRM account.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.amoCRMLogo),
    },
    {
      integration: 'Contactually',
      category: 'CRM',
      description:
        'Automatically create or update your Contactually contacts or add contacts to buckets everytime a Leadpages form is submitted.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.ContactuallyLogo),
    },
    {
      integration: 'InfusionSoft by Keap',
      category: 'CRM',
      description:
        'Build integrated campaigns and manage your contacts by integrating Leadpages with Infusionsoft by Keap.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.InfusionSoftLogo),
      subpage: {
        route: '/integrations/infusion-soft',
      },
    },
    {
      integration: 'LionDesk',
      category: 'CRM',
      description:
        'Send the contact information you collect with Leadpages directly to your LionDesk account to automatically add or update your contacts.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.LionDeskLogo),
    },
    {
      integration: 'Pardot',
      category: 'CRM',
      description:
        'Easily scale your marketing efforts and turn more leads into customers by automatically creating prospects on Pardot from new Leadpages submissions. (Available with Advanced plans.)',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.PardotLogo),
    },
    {
      integration: 'PipeDrive',
      category: 'CRM',
      description:
        'Automatically send Leadpages form submission data to create or update a contact’s data in Pipedrive as part of a new deal and person associated with it.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.PipeDriveLogo),
    },
    {
      integration: 'Salesforce',
      category: 'CRM',
      description:
        'Send the contact information you collect with Leadpages directly to the world’s leading CRM. (Available with Advanced plans.)',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.SalesforceLogo),
    },
    {
      integration: 'ZoHo CRM',
      category: 'CRM',
      description: 'Create or update Zoho CRM contacts with new leads from Leadpages.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.ZoHoCRMLogo),
    },
    {
      integration: 'Bing Ads',
      category: 'Digital Advertising',
      description:
        'Bring Bing’s 6 million monthly searchers into your marketing sphere by sending your Bing search engine marketing ads to a Leadpages landing page. ',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.BingAdsLogo),
    },
    {
      integration: 'BrightRoll',
      category: 'Digital Advertising',
      description:
        'Maximize the efficiency of your Yahoo advertising by connecting BrightRoll to your Leadpages landing pages. Simply copy and paste a snippet of Javascript to track your ad performance and enable your remarketing.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.BrightRollLogo),
    },
    {
      integration: 'Facebook Ads',
      category: 'Digital Advertising',
      description:
        'Make the most of your Facebook Ad budget by sending traffic to a conversion-optimized landing page. Simply copy and paste your Facebook Tracking Pixel to track your ad performance and enable your remarketing.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.FacebookLogo),
    },
    {
      integration: 'Instagram Ads',
      category: 'Digital Advertising',
      description:
        'Make the most of your Instagram Ad budget by sending traffic to a conversion-optimized landing page. Simply copy and paste your Facebook Tracking Pixel to track your ad performance and enable your remarketing.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.InstagramLogo),
    },
    {
      integration: 'Facebook Custom Audiences',
      category: 'Digital Advertising',
      description:
        'Add and update Facebook custom audiences whenever a Leadpages form is submitted.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.FacebookLogo),
    },
    {
      integration: 'Google Ads (formerly Google Adwords)',
      category: 'Digital Advertising',
      description:
        'Use Leadpages’ dedicated PPC landing page templates to increase your Google Ads quality score and landing page conversion rate—giving you more leads for less. ',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.GoogleAdsLogo),
    },
    {
      integration: 'Other Advertising Platforms',
      category: 'Digital Advertising',
      description:
        'Leadpages landing pages are ideal for receiving and converting paid traffic from nearly any source, including Bing and Yahoo ads.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.OtherAdvertisingPlatformsIcon),
    },
    {
      integration: 'Taboola',
      category: 'Digital Advertising',
      description:
        'Easily add your Taboola tracking code to any Leadpages landing page so that you can retarget landing page visitors with relevant content and remarketing offers.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.TaboolaLogo),
    },
    {
      integration: 'SendOwl',
      category: 'Ecommerce',
      description:
        'Sell and fulfill your digital products when you easily embed SendOwl’s buttons on your web content. Whether you want to sell your products via Instant Buy or via the SendOwl Shopping Cart, integrating with Leadpages is easy.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.SendOwlLogo),
    },
    {
      integration: 'Shopify',
      category: 'Ecommerce',
      description:
        'Add Shopify buy buttons and cart widgets to your landing pages to create an instant online store.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.ShopifyLogo),
    },
    {
      integration: 'ActiveCampaign',
      category: 'Email Marketing',
      description:
        'Kick off your automated email campaigns by sending leads from Leadpages to ActiveCampaign.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.ActiveCampaignLogo),
      subpage: {
        route: '/integrations/active-campaign',
      },
    },
    {
      integration: 'AWeber',
      category: 'Email Marketing',
      description:
        'Make permission-based email marketing more powerful by integrating Leadpages with your AWeber account. Create & apply tags to segment your subscribers by their opt-in activity.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.AWeberLogo),
      subpage: {
        route: '/integrations/aweber',
      },
    },
    {
      integration: 'BombBomb',
      category: 'Email Marketing',
      description:
        'Easily keep up with your leads by automatically importing and updating their contact data inside BombBomb.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.BombBombLogo),
    },
    {
      integration: 'Campaign Monitor',
      category: 'Email Marketing',
      description:
        'Easily keep up with your leads by automatically importing and updating their contact data inside Campaign Monitor.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.CampaignMonitorLogo),
    },
    {
      integration: 'Constant Contact',
      category: 'Email Marketing',
      description:
        'Send the email newsletters you create with Constant Contact to the leads you generate with Leadpages.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.ConstantContactLogo),
    },
    {
      integration: 'ConvertKit',
      category: 'Email Marketing',
      description:
        'Add leads to a drip email sequence in ConvertKit by simply pasting a line of HTML into your Leadpages opt-in forms.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.ConvertKitLogo),
      subpage: {
        route: '/integrations/convertkit',
      },
    },
    {
      integration: 'Drip',
      category: 'Email Marketing',
      description:
        'To enable single or double opt-in for your Drip email lists, just paste your Drip HTML embed code into Leadpages.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.DripLogo),
    },
    {
      integration: 'Emma',
      category: 'Email Marketing',
      description: 'Build email lists in Emma by collecting leads from the Leadpages platform.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.EmmaLogo),
    },
    {
      integration: 'GetResponse',
      category: 'Email Marketing',
      description:
        'Link your GetResponse account to Leadpages and start seamlessly adding more leads to your email lists.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.GetResponseLogo),
    },
    {
      integration: 'Gmail',
      category: 'Email Marketing',
      description:
        'Automatically send an email from your Gmail account to the recipients of your choice whenever a new form submission is received on Leadpages.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.GmailLogo),
    },
    {
      integration: 'iContact',
      category: 'Email Marketing',
      description:
        'Simplify your email marketing by using Leadpages to build your database of leads inside iContact.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.iContactLogo),
    },
    {
      integration: 'Klaviyo',
      category: 'Email Marketing',
      description: 'Create or update Klaviyo subscribers from new Leadpages submissions.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.KlaviyoLogo),
    },
    {
      integration: 'Klick-Tipp',
      category: 'Email Marketing',
      description: 'Create or update Klick-Tipp subscribers from new Leadpages submissions.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.KlickTippLogo),
    },
    {
      integration: 'Mad Mimi',
      category: 'Email Marketing',
      description:
        'Create template-free email newsletters with Mad Mimi and automatically add your Leadpages opt-ins to one or all of your email lists.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.MadMimiLogo),
    },
    {
      integration: 'Mailchimp',
      category: 'Email Marketing',
      description:
        'Use your Mailchimp account to follow up with new contacts you collect via Leadpages. Create & apply tags to segment your subscribers by their opt-in activity.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.MailchimpLogo),
      subpage: {
        route: '/integrations/mailchimp',
      },
    },
    {
      integration: 'MailerLite',
      category: 'Email Marketing',
      description:
        'Create subscribers and add contact information to a MailerLite list of your choosing whenever a new lead fills out your Leadpages form.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.MailerLiteLogo),
    },
    {
      integration: 'SendInBlue',
      category: 'Email Marketing',
      description:
        'Automatically create or update SendinBlue subscribers every time a Leadpages landing page form is submitted.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.SendInBlueLogo),
    },
    {
      integration: 'Chat.io',
      category: 'Live Chat',
      description:
        'Using chat.io and Leadpages together enables you to talk to your on-site visitors. Add chat.io to your landing page for higher conversions.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.ChatIOLogo),
    },
    {
      integration: 'Drift',
      category: 'Live Chat',
      description:
        'Include a chatbot or live chat functionality on any landing page or website with Drift. Integrate via Zapier to create or update a contact record.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.DriftLogo),
    },
    {
      integration: 'Intercom',
      category: 'Live Chat',
      description:
        'Easily embed Intercom on any webpage to provide live chat or automated messaging to your visitors. Integrate via Zapier and, when a new Leadpages form submission is received, automatically update or create a subscriber record, or trigger automated messages to send.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.IntercomLogo),
    },
    {
      integration: 'LiveChat',
      category: 'Live Chat',
      description:
        'With LiveChat for Leadpages, you can offer real-time help, ensuring more sales and customer satisfaction in the process.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.LiveChatLogo),
    },
    {
      integration: 'ManyChat',
      category: 'Live Chat',
      description:
        'Easily embed ManyChat on any webpage to provide live chat or automated messaging to your visitors. Integrate via Zapier and, when a new Leadpages form submission is received, automatically update or create a subscriber record, or trigger automated messages to send.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.ManyChatLogo),
    },
    {
      integration: 'Autopilot',
      category: 'Marketing Automation',
      description: 'Add contacts to an Autopilot list for new Leadpages submissions.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.AutopilotLogo),
    },
    {
      integration: 'E-goi',
      category: 'Marketing Automation',
      description:
        'Automatically add your Leadpages landing page leads to your E-goi lists and follow-up with targeted emails, text, social media messages.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.Egoi),
    },
    {
      integration: 'HubSpot',
      category: 'Marketing Automation',
      description:
        'The most powerful automated HubSpot marketing campaigns start with Leadpages’ lead generation tools. (Available with Advanced plans.)',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.HubSpotLogo),
    },
    {
      integration: 'Intercom',
      category: 'Marketing Automation',
      description:
        'Easily embed Intercom on any webpage to provide live chat or automated messaging to your visitors. Integrate via Zapier and, when a new Leadpages form submission is received, automatically update or create a subscriber record, or trigger automated messages to send.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.IntercomLogo),
    },
    {
      integration: 'LeadsBridge',
      category: 'Marketing Automation',
      description:
        'LeadsBridge helps you take care of your leads by connecting your Leadpages account to your preferred CRM or Email software.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.LeadsBridgeLogo),
    },
    {
      integration: 'Marketo',
      category: 'Marketing Automation',
      description:
        'Create automated B2B marketing programs by combining the best features of Leadpages and Marketo. (Available with Advanced plans.)',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.MarketoLogo),
    },
    {
      integration: 'Ontraport',
      category: 'Marketing Automation',
      description:
        'Route customer contact data from Leadpages to Ontraport/Office AutoPilot with only a few minutes of setup.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.OntraportLogo),
    },
    {
      integration: 'Zapier',
      category: 'Marketing Automation',
      description:
        'Send your leads to 1000+ apps instantly with new integrations that can streamline your workflow and trigger automated actions.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.ZapierLogo),
      subpage: {
        route: '/integrations/zapier',
      },
    },
    {
      integration: 'ClickSend SMS',
      category: 'Other',
      description:
        'When a Leadpages form is submitted, automatically create or delete contacts, or trigger an SMS, phone call and more.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.ClickSendSMSLogo),
    },
    {
      integration: 'Google Maps',
      category: 'Other',
      description:
        'Easily embed a Google Map directly on your web page, landing page, or pop-up by pasting your Google Maps embed code into an HTML widget.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.GoogleMapsLogo),
    },
    {
      integration: 'Google Sheets',
      category: 'Other',
      description:
        'Record your Leadpages form submissions by sending subscriber data directly to a Google Sheet.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.GoogleSheetsLogo),
    },
    {
      integration: 'LiveCall',
      category: 'Other',
      description:
        'Impress your prospects or quickly connect with your customers when you confiqure LiveCall to call them up right after they’ve submitted an online form.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.LiveCallLogo),
    },
    {
      integration: 'Monday.com',
      category: 'Other',
      description:
        'When new Leadpages form submissions are received, automatically trigger actions within your Monday.com account such as updating column values.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.MondayLogo),
    },
    {
      integration: 'Poptin',
      category: 'Other',
      description:
        'Easily embed Poptin popups or contact forms on your Leadpages Site or landing page.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.PoptinLogo),
    },
    {
      integration: 'Shutterstock',
      category: 'Other',
      description:
        'Purchase Shutterstock premium images right inside your Leadpages account. Choose from millions of professional-quality photographs and enjoy unlimited use of your Shutterstock images anywhere within the Drag & Drop Builder.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.ShutterstockLogo),
    },
    {
      integration: 'SimpleTexting',
      category: 'Other',
      description:
        'When a Leadpages form is submitted, automatically create or delete contacts, or trigger an SMS text message to send.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.SimpleTextingLogo),
    },
    {
      integration: 'Slack',
      category: 'Other',
      description:
        'Keep your team instantly in the loop by setting up automatic Slack notifications every time a form submission is received.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.SlackLogo),
    },
    {
      integration: 'Survey Monkey',
      category: 'Other',
      description:
        'Automatically send a survey or create a Survey Monkey contact everytime a Leadpages form is submitted.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.SurveyMonkeyLogo),
    },
    {
      integration: 'Teachable',
      category: 'Other',
      description:
        'When new Leadpages form submissions are received, automatically create a new user, enroll a user in a course, or remove a user from your Teachable course.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.TeachableLogo),
    },
    {
      integration: 'Trello',
      category: 'Other',
      description:
        'When new Leadpages form submissions are received, automatically trigger actions within your Trello account, such as creating a card or adding a checklist item to a card.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.TrelloLogo),
    },
    {
      integration: 'Trustpilot',
      category: 'Other',
      description:
        'Easily add Trustpilot reviews and ratings to your Leadpages landing page or use Zapier to automatically create a new invitation to review your company on Trustpilot every time a landing page form is submitted.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.TrustpilotLogo),
    },
    {
      integration: 'Twilio',
      category: 'Other',
      description:
        'When a Leadpages form is submitted, automatically trigger an SMS or phone call to notify you of the opt-in.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.TwilioLogo),
    },
    {
      integration: 'Typeform',
      category: 'Other',
      description:
        'Easily embed a Typeform survey or questionnaire directly on a landing page, web page, or pop-up by simply cutting and pasting your Typeform embed code directly into the Leadpages HTML widget.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.TypeformLogo),
    },
    {
      integration: 'Webhooks',
      category: 'Other',
      description:
        'Send and receive data to track events that occur across platforms by syncing your Leadpages account with Webhooks integration platform.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.WebhooksLogo),
    },
    {
      integration: 'Wufoo',
      category: 'Other',
      description:
        'Whenever a Leadpages form submission is recieved, automatically create a new entry in Wufoo for a form and data you select.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.WufooLogo),
    },
    {
      integration: 'Zendesk',
      category: 'Other',
      description:
        'Engage your visitors with unparalleled customer support and drive more conversions by automatically creating or updating tickets and users every time a landing page form is submitted.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.ZendeskLogo),
    },
    {
      integration: 'Gumroad',
      category: 'Payments',
      description:
        'Easily embed your Gumroad checkout form directly on your web pages to create a frictionless purchase flow.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.GumroadLogo),
    },
    {
      integration: 'PayPal',
      category: 'Payments',
      description:
        'Adding PayPal buy buttons to the sales pages you create in Leadpages is as simple as pasting a URL into a link field.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.PaypalLogo),
    },
    {
      integration: 'Stripe',
      category: 'Payments',
      description:
        'We’ve partnered with one of the world’s most trusted payment gateways to create Checkouts. Integrate your Stripe account to make sales, process payments, and even deliver digital products from right inside Leadpages. Stripe checkouts are SCA compliant.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.StripeLogo),
      subpage: {
        route: '/integrations/stripe',
      },
    },
    {
      integration: 'Acuity',
      category: 'Scheduling',
      description:
        'Let clients book appointments right from your landing page by embedding your Acuity calendar.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.AcuityLogo),
    },
    {
      integration: 'Calendly',
      category: 'Scheduling',
      description:
        'Easily invite visitors to self-schedule by displaying your calendar on a landing page or in a pop-up lightbox. All you need is your Calendly link!',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.CalendlyLogo),
    },
    {
      integration: 'OpenTable',
      category: 'Scheduling',
      description:
        'With the OpenTable widget, your customers can search available reservation times and book a table right from your landing page or pop-up.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.OpenTableLogo),
    },
    {
      integration: 'Timetrade',
      category: 'Scheduling',
      description:
        'Turn any page into a booking page by simply dropping your Timetrade calendar onto the page.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.TimetradeLogo),
    },
    {
      integration: 'Facebook',
      category: 'Social Media',
      description:
        'Include a Facebook social ‘Like’ button on your Leadpages landing page to invite your visitors to Like your content and share it on their personal Facebook Timeline or to Like your Facebook Fan/Business Page directly from your landing page.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.FacebookLogo),
    },
    {
      integration: 'LinkedIn',
      category: 'Social Media',
      description:
        'Use Leadpages’ built-in sharing buttons to get your landing page more exposure on LinkedIn.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.LinkedInLogo),
    },
    {
      integration: 'LinkedIn Ads',
      category: 'Social Media',
      description:
        'Target working professionals by leveraging Linkedin Advertising to segment your audience by job title, function, company name, industry, and more. Then, send your LinkedIn Ad traffic to a high-converting landing page to get greater return on your ad spend.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.LinkedInLogo),
    },
    {
      integration: 'Twitter',
      category: 'Social Media',
      description:
        'Include a tweet button on your Leadpages landing pages to invite your leads to start a conversation about your company on Twitter.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.TwitterLogo),
    },
    {
      integration: 'Twitter Ads',
      category: 'Social Media',
      description:
        'Using Twitter ads to grow your business? Send your PPC traffic to a high-converting landing page.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.TwitterLogo),
    },
    {
      integration: 'Vimeo',
      category: 'Video',
      description:
        'Easily embed video from hosting sites like YouTube, Wistia, and Vimeo directly on your landing pages, web pages, and pop-ups with the help of the Leadpages video widget.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.VimeoLogo),
    },
    {
      integration: 'Wistia',
      category: 'Video',
      description:
        'Easily embed video from hosting sites like YouTube, Wistia, and Vimeo directly on your landing pages, web pages, and pop-ups with the help of the Leadpages video widget.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.WistiaLogo),
    },
    {
      integration: 'YouTube',
      category: 'Video',
      description:
        'Easily embed video from hosting sites like YouTube, Wistia, and Vimeo directly on your your landing pages, web pages, and pop-ups with the help of the Leadpages video widget.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.YouTubeLogo),
    },
    {
      integration: 'GoToWebinar',
      category: 'Webinar',
      description:
        'Fill your email list and webinar seats at the same time using Leadpages’ high-converting webinar page templates.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.GoToWebinarLogo),
    },
    {
      integration: 'WebinarJam',
      category: 'Webinar',
      description:
        'Get leads excited about your WebinarJam/EverWebinar webinar by using a Leadpages landing page or signup link to promote it.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.WebinarJamLogo),
    },
    {
      integration: 'Zoom',
      category: 'Webinar',
      description:
        'Instantly register landing page form submissions as Zoom event registrants to streamline your webinars and conference calls, and ensure everyone is connected when the event begins.',
      connection: 'Available Via Zapier',
      tooltip:
        'Zapier is a free application that allows you to connect and send data between thousands of different applications.',
      icon: getImage(images.ZoomLogo),
    },
    {
      integration: 'Drupal',
      category: 'Website',
      description:
        'Add new Leadpages landing pages, pop-ups, and alert bars to your Drupal site by exporting your page’s source code.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.DrupalLogo),
    },
    {
      integration: 'Joomla',
      category: 'Website',
      description:
        'Create a unified and high-converting web presence by adding any Leadpages landing page, pop-ups, and alert bars to your Joomla site’s main menu.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.JoomlaLogo),
    },
    {
      integration: 'Squarespace',
      category: 'Website',
      description:
        'Publish your pop-ups and trigger opt-in forms from Squarespace site buttons—all it takes is copying and pasting a couple of lines of HTML and JavaScript.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.SquarespaceLogo),
    },
    {
      integration: 'Weebly',
      category: 'Website',
      description:
        'Create a unified and high-converting web presence by adding any Leadpages landing page, pop-ups, and alert bars to your Weebly website.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.WeeblyLogo),
    },
    {
      integration: 'Wix',
      category: 'Website',
      description:
        'Publish the landing pages, pop-ups, and alert bars you build in Leadpages to the same domain as your Wix site.',
      connection: 'Compatible',
      tooltip:
        'Compatible applications work with Leadpages but may require you to copy and paste HTML or use a third-party tool to connect them to your Leadpages account. They also are not covered by our customer support team.',
      icon: getImage(images.WixLogo),
    },
    {
      integration: 'WordPress',
      category: 'Website',
      description:
        'Install the simple Leadpages WordPress plugin and publish any landing page or pop-up to WordPress in just a couple of clicks.',
      connection: 'Integrated',
      tooltip:
        'Integrated applications have been specifically developed to connect with Leadpages, meaning they are listed within your Leadpages account and backed by our customer support team.',
      icon: getImage(images.WordPressLogo),
      subpage: {
        route: '/integrations/wordpress',
      },
    },
  ];

  const categories = [
    'Analytics',
    'CRM',
    'Digital Advertising',
    'Ecommerce',
    'Email Marketing',
    'Live Chat',
    'Marketing Automation',
    'Other',
    'Payments',
    'Scheduling',
    'Social Media',
    'Video',
    'Webinar',
    'Website',
  ];

  return (
    <>
      <IntegrationsHeader />
      <IntegrationsContent integrations={integrationsArray} categories={categories} />
      <ReadyToGrow />
    </>
  );
};

export default Integrations;
