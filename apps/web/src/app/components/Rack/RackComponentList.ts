import dynamic from 'next/dynamic'

/**
 * List of dynamic components to be used within the application.
 *
 * @namespace RackComponentList
 *
 * @property {Function|Array} component - Dynamic component or array with component and Pinion params.
 *
 * @example
 *  component: dynamic(() => import('@/components/client/Component')),
 *  component: [dynamic(() => import('@/components/client/Component')), { pinion: false }],
 *  component: [dynamic(() => import('@/components/client/Component')), { baseStyles: false }],
 *  component: [dynamic(() => import('@/components/client/Component')), { backgroundColor: 'primary' }],
 *  component: [dynamic(() => import('@/components/client/Component')), { className: 'mt-2' }],
 *  component: [dynamic(() => import('@/components/client/Component')), { classNames: { root: 'mt-2', inner: 'ml-1' }],
 */
const RackComponentList = {
  accordionWithSidebar: [dynamic(() => import('@/components/AccordionWithSidebar/AccordionWithSidebar')), { pinion: false }],
  addOnCards: dynamic(() => import('@/components/AddOnCards'), { ssr: false }),
  addOnsSection: [
    dynamic(() => import('@/components/PlatformNew/AddOnSection'), { ssr: false }),
    { pinion: false },
  ],
  bestOfBlog: [
    dynamic(() => import('@/components/BlogsCarrousel/BestOfBlog')),
    { pinion: false },
  ],
  blogSection: [
    dynamic(() => import('@/components/BlogSection/BlogSection')),
    { pinion: false },
  ],
  brand: [dynamic(() => import('@/components/Brand')), { pinion: false }],
  cardClickable: dynamic(() => import('@/components/CardClickable')),
  cardsBlock: dynamic(() => import('@/components/Cards')),
  carruselWithArrows: [
    dynamic(() => import('@/components/CarruselWithArrows/CarruselWithArrows')),
    { pinion: false },
  ],
  comparePlans: dynamic(() => import('@/components/ComparePlans'), { ssr: false }),
  comparisonCard: dynamic(() => import('@/components/ComparisonCard')),
  comparisonCards: [
    dynamic(() => import('@/components/ComparisonCards')),
    { pinion: false },
  ],
  cta: dynamic(() => import('@/components/CTA')),
  faqAccordion: [
    dynamic(() => import('@/components/FAQAccordion/FAQAccordion')),
    { pinion: false },
  ],
  faqSimple: [
    dynamic(() => import('@/components/FAQSimple')),
    { pinion: false },
  ],
  featureCards: dynamic(() => import('@/components/FeatureCards')),
  featureScroll: [
    dynamic(() => import('@/components/FeatureScroll')),
    { pinion: false },
  ],
  integrationDirectory: [
    dynamic(() => import('@/components/IntegrationDirectory')),
    { pinion: false },
  ],
  integrationsBlock: [
    dynamic(() => import('../Integrations')),
    { pinion: false },
  ],
  jobPostings: [
    dynamic(() => import('@/components/JobPostings')),
    { pinion: false },
  ],
  marquee: dynamic(() => import('@/components/Marquee/MarqueeBlock')),
  media: dynamic(() => import('@/components/Media/MediaBlock')),
  mediaWithItems: dynamic(() => import('@/components/MediaWithItems')),
  mediaWithText: dynamic(() => import('@/components/MediaWithText')),
  mediaWithTextSticky: dynamic(
    () => import('@/components/MediaWithText/MediaWithTextSticky')
  ),
  pageAnchor: [
    dynamic(() => import('@/components/PageAnchor')),
    { pinion: false },
  ],
  pressArticlesSection: [dynamic(() => import('@/components/PressArticlesSection')),
  { pinion: false },
  ],
  prevNextCard: dynamic(() => import('@/components/PrevNextCard/PrevNextCard')),
  relatedContent: [
    dynamic(() => import('@/components/RelatedContent')),
    { pinion: false },
  ],
  resourceCard: dynamic(() => import('@/components/ResourceCard')),
  resourceCards: dynamic(() => import('@/components/ResourceCards')),
  resourcesGrid: [
    dynamic(() => import('@/components/ResourcesGrid')),
    { pinion: false },
  ],
  section: [dynamic(() => import('@/components/Section')), { pinion: false }],
  sectionCTA: dynamic(() => import('@/components/SectionCTA')),
  socialMedia: [
    dynamic(() => import('@/components/SocialMedia')),
    { pinion: false },
  ],
  spacer: dynamic(() => import('@/components/Spacer')),
  startATrial: dynamic(() => import('@/components/StartATrial')),

  subFooter: [
    dynamic(() => import('@/components/SubFooter')),
    { pinion: false },
  ],
  templateDetails: dynamic(() => import('@/components/TemplateTabs')),
  templateGallery: [
    dynamic(() => import('@/components/TemplateGallery')),
    { pinion: false },
  ],
  // Use the new App Router Testimonial block implementation
  // which lives under app/components/Testimonial and renders
  // the 3-card layout with ratings used on platform-new.
  testimonialBlock: [
    dynamic(() => import('../Testimonial')),
    { pinion: false },
  ],
  testimonialFeaturedBlock: [
    dynamic(() => import('../Testimonial/TestimonialFeatured')),
    { inner: false, pinion: true },
  ],
  textBlock: dynamic(() => import('@/components/Text/TextBlock')),
  textBlockWithSidebar: dynamic(() => import('@/components/TextWithSidebar')),
  textColumns: dynamic(() => import('@/components/TextColumns')),
  textWithStats: dynamic(() => import('@/components/TextWithStats')),
  upsell: dynamic(() => import('@/components/Upsell')),
  pageAnalyzer: [
    dynamic(() => import('@/components/PageAnalyzer/PageAnalyzer')),
    { pinion: false },
  ],
  emailSignature: [
    dynamic(() => import('@/components/EmailSignature/EmailSignature')),
    { pinion: false },
  ],
  hubspotForm: dynamic(() => import('@/components/HubspotForm')),
  howItWorks: [
    dynamic(() => import('@/components/HowItWorks')),
    { pinion: false },
  ],
  privacySecurity: [
    dynamic(() => import('@/components/PrivacySecurity')),
    { pinion: false },
  ],
  analyzerInput: [
    dynamic(() => import('@/components/AnalyzerInput')),
    { pinion: false },
  ],
  pageAnalyzerComplete: [
    dynamic(() => import('@/components/PageAnalyzerComplete')),
    { pinion: false },
  ],
  emailSignatureComplete: [
    dynamic(() => import('@/components/EmailSignatureComplete')),
    { pinion: false },
  ],
}

export default RackComponentList
