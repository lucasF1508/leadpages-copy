const getImage = (image) => image

// Data used on pricing pages
export const testimonialsData = (queryData) => [
  {
    quote:
      'I absolutely LOVE Leadpages. The simplicity and ease-of-use is why I recommend it to all my clients and use it exclusively for my own business.',
    image: getImage(queryData.testimonialImageJackieEllis),
    clientName: 'Jackie Ellis',
    clientTitle: 'Facebook Ads Strategist',
  },
  {
    quote:
      'Leadpages helped us more than double our email subscriber list to over 35,000 in less than 6 months. We now have an average conversion rate of 60% to 80%+ on all landing pages.',
    image: getImage(queryData.testimonialImagePamMoore),
    clientName: 'Pam Moore',
    clientTitle: 'CEO and Founder, Marketing Nutz',
  },
  {
    quote:
      'Leadpages makes it so much easier to create landing pages on the fly, and it’s so much cheaper than paying someone else to do it for you.',
    image: getImage(queryData.testimonialImageJanTucker),
    clientName: 'Jan Tucker',
    clientTitle: 'Founder, White Lotus Living',
  },
]

export const planFeaturesData = (queryData) => [
  {
    title: '[NEW] Leadpages site builder',
    description:
      'The only online website builder that lets you easily create a high-converting website with code-free customizations.',
    icon: getImage(queryData.siteBuilderFeatureIcon),
    alt: 'leadpages site builder icon',
  },
  {
    title: 'Unlimited landing pages',
    description:
      'The sky’s the limit when it comes to publishing landing pages; your account also includes free hosting on a Leadpages domain.',
    icon: getImage(queryData.unlimitedPublishingFeatureIcon),
    alt: 'unlimited landing pages icon',
  },
  {
    title: 'Unlimited leads & traffic',
    description:
      'We’ll never stop your growth or charge you more for it (unlike those other guys)!',
    icon: getImage(queryData.unlimitedLeadsFeatureIcon),
    alt: 'unlimited leads & traffic icon',
  },
  {
    title: 'Unlimited pop-ups & alert bars',
    description:
      'Use simple but effective pop-up forms and sticky bars to capture contact information from any page you own.',
    icon: getImage(queryData.unlimitedPopupsAlertBarsFeatureIcon),
    alt: 'unlimited pop-ups & alert bars icon',
  },
  {
    title: 'Rapid page load speed',
    description:
      'Increase conversions and improve visitor experience with industry-leading page load speeds.',
    icon: getImage(queryData.speedFeatureIcon),
    alt: 'rapid page load speed icon',
  },
  {
    title: 'Lead notifications',
    description:
      'Don’t have an email service yet? Set up automated notifications to get new subscriber queryData sent straight to your inbox.',
    icon: getImage(queryData.leadNotificationsFeatureIcon),
    alt: 'lead notification icon',
  },
  {
    title: 'Mobile responsive pages',
    description:
      'Leadpages optimizes each page to look great on any device, whether desktop, tablet, or mobile.',
    icon: getImage(queryData.mobileResponsiveFeatureIcon),
    alt: 'mobile responsive pages icon',
  },
  {
    title: 'Lead magnet hosting & delivery',
    description:
      'Instantly send subscribers your digital products with our built-in lead magnet delivery system.',
    icon: getImage(queryData.leadMagnetFeatureIcon),
    alt: 'lead magnet hosting & delivery icon',
  },
  {
    title: 'SEO capability',
    description:
      'Optimize your page for organic search with easy-to-edit metadata fields and a wide range of SEO-friendly templates.',
    icon: getImage(queryData.seoFeatureIcon),
    alt: 'seo capability icon',
  },
  {
    title: 'Real-time analytics',
    description:
      'Easily track the performance of your web pages, landing pages and content, so you can optimize as you go.',
    icon: getImage(queryData.realtimeAnalyticsFeatureIcon),
    alt: 'real-time analytics icon',
  },
  {
    title: '40+ Integrations',
    description:
      'Connect with tools you already use: MailChimp, Google Analytics, Infusionsoft, WordPress, and more! Plus 1000+ apps through Zapier.',
    icon: getImage(queryData.integrationsFeatureIcon),
    alt: '40+ integrations icon',
  },
  {
    title: 'GDPR compliance',
    description:
      'Your Leadpages queryData is processed securely and in accordance with GDPR requirements. You can also easily add an active consent checkbox to any opt-in form.',
    icon: getImage(queryData.gdprFeatureIcon),
    alt: 'gdpr compliance icon',
  },
]
