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
  cardClickable: dynamic(() => import('@/components/CardClickable')),
  cardsBlock: dynamic(() => import('@/components/Cards')),
  comparePlans: dynamic(() => import('@/components/ComparePlans')),
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
  resourceCard: dynamic(() => import('@/components/ResourceCard')),
  resourceCards: dynamic(() => import('@/components/ResourceCards')),
  section: [dynamic(() => import('@/components/Section')), { pinion: false }],
  spacer: dynamic(() => import('@/components/Spacer')),
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
