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
  cardsBlock: dynamic(() => import('@/components/Cards')),
  comparePlans: dynamic(() => import('@/components/ComparePlans')),
  cta: dynamic(() => import('@/components/CTA')),
  faqs: dynamic(() => import('@/components/FAQs')),
  featureCards: dynamic(() => import('@/components/FeatureCards')),
  marquee: dynamic(() => import('@/components/Marquee')),
  mediaWithItems: dynamic(() => import('@/components/MediaWithItems')),
  mediaWithText: dynamic(() => import('@/components/MediaWithText')),
  mediaWithTextSticky: dynamic(() => import('@/components/MediaWithText/MediaWithTextSticky')),
  pageAnchor: [
    dynamic(() => import('@/components/PageAnchor')),
    { pinion: false },
  ],
  resourceCard: dynamic(() => import('@/components/ResourceCard')),
  resourceCards: dynamic(() => import('@/components/ResourceCards')),
  section: [dynamic(() => import('@/components/Section')), { pinion: false }],
  spacer: dynamic(() => import('@/components/Spacer')),
  testimonialBlock: dynamic(() => import('@/components/Testimonial')),
  textBlock: dynamic(() => import('@/components/Text/TextBlock')),
  textColumns: dynamic(() => import('@/components/TextColumns')),
  textWithStats: dynamic(() => import('@/components/TextWithStats')),
  upsell: dynamic(() => import('@/components/Upsell')),
  
  // TEMP - Remove when all components are implemented
  // accordion: dynamic(() => import('@/components/client/Accordion')),
  // border: dynamic(() => import('@/components/client/Border')),
  // cards: dynamic(() => import('@/components/client/Cards')),
  // embed: dynamic(() => import('@/components/client/Embed')),
  // formComponent: dynamic(() => import('@/components/client/Form')),
  // gallery: dynamic(() => import('@/components/client/Gallery')),
  // heading: dynamic(() => import('@/components/client/Heading')),
  // imageSlider: dynamic(() => import('@/components/client/ImageSlider')),
  // link: dynamic(() => import('@/components/client/Link')),
  // logoGrid: dynamic(() => import('@/components/client/LogoGrid')),
  // media: dynamic(() => import('@/components/client/Media/MediaBlock')),
  // mediaWithText: dynamic(() => import('@/components/client/MediaWithText')),
  // section: [
  //   dynamic(() => import('@/components/client/Section')),
  //   { baseStyles: false },
  // ],
  // sectionReference: [
  //   dynamic(() => import('@/components/client/SectionReference')),
  //   { pinion: false },
  // ],
  // slider: dynamic(() => import('@/components/client/Slider')),
  // spacer: [
  //   dynamic(() => import('@/components/client/Spacer')),
  //   { pinion: false },
  // ],
  // tableBlock: dynamic(() => import('@/components/client/Table')),
  // video: dynamic(() => import('@/components/client/Video/VideoEmbed')),
}

export default RackComponentList
