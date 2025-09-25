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
  addOnCards: dynamic(() => import('@/components/AddOnCards')),
  // bestOfBlog: dynamic(() => import('@/components/BlogsCarrousel/BestOfBlog')),
  bestOfBlog: [
    dynamic(() => import('@/components/BlogsCarrousel/BestOfBlog')),
    { pinion: false },
  ],
  cardClickable: dynamic(() => import('@/components/CardClickable')),
  cardsBlock: dynamic(() => import('@/components/Cards')),
  carruselWithArrows: [
    dynamic(() => import('@/components/CarruselWithArrows/CarruselWithArrows')), { pinion: false },
  ],
  comparePlans: dynamic(() => import('@/components/ComparePlans')),
  comparisonCard: dynamic(() => import('@/components/ComparisonCard')),
  comparisonCards: [
    dynamic(() => import('@/components/ComparisonCards')),
    { pinion: false },
  ],
  cta: dynamic(() => import('@/components/CTA')),
  faqs: dynamic(() => import('@/components/FAQs')),
  featureCards: dynamic(() => import('@/components/FeatureCards')),
  integrationDirectory: [
    dynamic(() => import('@/components/IntegrationDirectory')),
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
  prevNextCard: dynamic(() => import('@/components/PrevNextCard/PrevNextCard')),
  resourceCard: dynamic(() => import('@/components/ResourceCard')),
  resourceCards: dynamic(() => import('@/components/ResourceCards')),
  resourcesGrid: [
    dynamic(() => import('@/components/ResourcesGrid')),
    { pinion: false },
  ],
  section: [dynamic(() => import('@/components/Section')), { pinion: false }],
  spacer: dynamic(() => import('@/components/Spacer')),
  subFooter: [
    dynamic(() => import('@/components/SubFooter')),
    { pinion: false },
  ],

  templateDetails: dynamic(() => import('@/components/TemplateTabs')),
  templateGallery: [
    dynamic(() => import('@/components/TemplateGallery')),
    { pinion: false },
  ],
  testimonialBlock: dynamic(() => import('@/components/Testimonial')),
  textBlock: dynamic(() => import('@/components/Text/TextBlock')),
  textBlockWithSidebar: dynamic(() => import('@/components/TextWithSidebar')),
  textColumns: dynamic(() => import('@/components/TextColumns')),
  textWithStats: dynamic(() => import('@/components/TextWithStats')),
  upsell: dynamic(() => import('@/components/Upsell')),
}

export default RackComponentList
