import dynamic from 'next/dynamic'

const RackComponentList = {
  accordion: dynamic(() => import('@components/Accordion')),
  border: dynamic(() => import('@components/Border')),
  cards: dynamic(() => import('@components/Cards')),
  cardsBlock: dynamic(() => import('@components/Cards/CardsBlock')),
  embed: dynamic(() => import('@components/Embed')),
  // formComponent: dynamic(() => import('@components/Form')),
  gallery: dynamic(() => import('@components/Gallery')),
  heading: dynamic(() => import('@components/Heading')),
  imageSlider: dynamic(() => import('@components/ImageSlider')),
  link: dynamic(() => import('@components/Link')),
  media: dynamic(() => import('@components/Media')),
  mediaWithText: dynamic(() => import('@components/MediaWithText')),
  logoGrid: dynamic(() => import('@components/LogoGrid')),
  pageAnchor: dynamic(() => import('@components/PageAnchor')),
  slider: dynamic(() => import('@components/Slider')),
  spacer: dynamic(() => import('@components/Spacer')),
  textBlock: dynamic(() => import('@components/Text')),
  tableBlock: dynamic(() => import('@components/Table')),
  video: dynamic(() => import('@components/Video/VideoEmbed')),
}

export default RackComponentList
