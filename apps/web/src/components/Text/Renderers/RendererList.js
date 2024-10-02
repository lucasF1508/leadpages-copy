import dynamic from 'next/dynamic'

const RendererList = {
  audio: dynamic(() => import('./AudioRenderer')),
  block: dynamic(() => import('./BlockRenderer')),
  blockquote: dynamic(() => import('./BlockQuoteRenderer')),
  cardsPreviousNext: dynamic(() => import('./CardsPreviousNextRenderer')),
  columns: dynamic(() => import('./ColumnsRenderer')),
  embed: dynamic(() => import('./EmbedRenderer')),
  media: dynamic(() => import('./MediaRenderer')),
  pageAnchor: dynamic(() => import('./AnchorRenderer')),
  socialLinks: dynamic(() => import('./SocialLinksRenderer')),
  table: dynamic(() => import('./TableRenderer')),
  inlineCTA: dynamic(() => import('./InlineCTA')),
  schemaInlineCTAGlobalBlock: dynamic(() => import('./InlineCTA')),
  dropShadowBox: dynamic(() => import('./DropShadowBox')),
  logoGrid: dynamic(() => import('./InlineLogoGrid')),
}

export default RendererList
