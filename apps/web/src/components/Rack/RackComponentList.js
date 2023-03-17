import dynamic from 'next/dynamic'

const RackComponentList = {
  accordion: dynamic(() => import('@components/Accordion')),
  audio: dynamic(() => import('@components/Audio')),
  border: dynamic(() => import('@components/Border')),
  cards: dynamic(() => import('@components/Cards')),
  cardsBlock: dynamic(() => import('@components/Cards/CardsBlock')),
  cardsArticle: dynamic(() => import('@components/Cards/CardsArticle')),
  embed: dynamic(() => import('@components/Embed')),
  // formComponent: dynamic(() => import('@components/Form')),
  gallery: dynamic(() => import('@components/Gallery')),
  heading: dynamic(() => import('@components/Heading')),
  imageSlider: dynamic(() => import('@components/ImageSlider')),
  link: dynamic(() => import('@components/Link')),
  media: dynamic(() => import('@components/MediaBlock')),
  mediaWithText: dynamic(() => import('@components/MediaWithText')),
  logoGrid: dynamic(() => import('@components/LogoGrid')),
  linkList: dynamic(() => import('@components/LinkList')),
  pageAnchor: dynamic(() => import('@components/PageAnchor')),
  slider: dynamic(() => import('@components/Slider')),
  spacer: dynamic(() => import('@components/Spacer')),
  stats: dynamic(() => import('@components/Stats')),
  headlineSection: dynamic(() => import('@components/Text/TextHeadline')),
  textBlock: dynamic(() => import('@components/Text/TextStandard')),
  testimonials: dynamic(() =>
    import('@components/Testimonial/TestimonialRotator')
  ),
  tableBlock: dynamic(() => import('@components/Table')),
  video: dynamic(() => import('@components/Video/VideoEmbed')),

  // Home components
  featureGrid: dynamic(() => import('@components/FeatureGrid')),
  customerRotator: dynamic(() => import('@components/RotatorCustomer')),
  featuredTemplates: dynamic(() => import('@components/FeaturedTemplates')),
  tabs: dynamic(() => import('@components/Tabs')),
  ctaInline: dynamic(() => import('@components/Cta/CtaInline')),
  quote: dynamic(() => import('@components/Quote')),
  faqs: dynamic(() => import('@components/Faq')),
  pricing: dynamic(() => import('@components/Pricing')),
}

export default RackComponentList
