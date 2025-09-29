import dynamic from 'next/dynamic'

const RackComponentList = {
  accordion: dynamic(() => import('@components/Accordion')),
  audio: dynamic(() => import('@components/Audio')),
  banner: dynamic(() => import('@components/Banner')),
  border: dynamic(() => import('@components/Border')),
  cards: dynamic(() => import('@components/Cards')),
  cardsBlock: dynamic(() => import('@components/Cards/CardsBlock')),
  cardsArticle: dynamic(() => import('@components/Cards/CardsArticle')),
  cardsComparison: dynamic(() => import('@components/Cards/CardsComparison')),
  embed: dynamic(() => import('@components/Embed')),
  gallery: dynamic(() => import('@components/Gallery')),
  heading: dynamic(() => import('@components/Heading')),
  imageSlider: dynamic(() => import('@components/ImageSlider')),
  link: dynamic(() => import('@components/Link')),
  listingBlock: dynamic(() => import('@components/ListingBlock')),
  media: dynamic(() => import('@components/MediaBlock')),
  mediaWithText: dynamic(() => import('@components/MediaWithText')),
  mediaTextQuote: dynamic(() => import('@components/MediaTextQuote')),
  logoGrid: dynamic(() => import('@components/LogoGrid')),
  linkList: dynamic(() => import('@components/LinkList')),
  pageAnchor: dynamic(() => import('@components/PageAnchor')),
  slider: dynamic(() => import('@components/Slider')),
  spacer: dynamic(() => import('@components/Spacer')),
  stats: dynamic(() => import('@components/Stats')),
  statsAlternate: dynamic(() => import('@components/StatsAlternate')),
  headlineSection: dynamic(() => import('@components/Text/TextHeadline')),
  textBlock: dynamic(() => import('@components/Text/TextStandard')),
  testimonials: dynamic(
    () => import('@components/Testimonial/TestimonialRotator')
  ),
  tableBlock: dynamic(() => import('@components/Table')),
  video: dynamic(() => import('@components/Video/VideoEmbed')),

  // Home components
  featureGrid: dynamic(() => import('@components/FeatureGrid')),
  customerRotator: dynamic(() => import('@components/RotatorCustomer')),
  featuredTemplates: dynamic(() => import('@components/FeaturedTemplates')),
  tabs: dynamic(() => import('@components/Tabs')),
  animatedCards: dynamic(() => import('@components/AnimatedCards')),
  ctaInline: dynamic(() => import('@components/Cta/CtaInline')),
  socialProof: dynamic(() => import('@components/SocialProof')),
  quote: dynamic(() => import('@components/Quote')),
  pricing: dynamic(() => import('@components/Pricing')),
  marquee: dynamic(() => import('@components/Marquee')),
  servicePoints: dynamic(() => import('@components/ServicePoints')),
}

export default RackComponentList
