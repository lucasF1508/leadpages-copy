import dynamic from 'next/dynamic'

const RendererList = {
  audio: dynamic(() => import('./AudioRenderer')),
  block: dynamic(() => import('./BlockRenderer')),
  blockquote: dynamic(() => import('./BlockQuoteRenderer')),
  cardsPreviousNext: dynamic(() => import('./CardsPreviousNextRenderer')),
  columns: dynamic(() => import('./ColumnsRenderer')),
  embed: dynamic(() => import('./EmbedRenderer')),
  inlineCTA: dynamic(() => import('@components/Archive/InlineCTA')),
  media: dynamic(() => import('./MediaRenderer')),
  pageAnchor: dynamic(() => import('./AnchorRenderer')),
  socialLinks: dynamic(() => import('./SocialLinksRenderer')),
  table: dynamic(() => import('./TableRenderer')),
}

export default RendererList
