import dynamic from 'next/dynamic'

const RendererList = {
  block: dynamic(() => import('./BlockRenderer')),
  blockquote: dynamic(() => import('./BlockQuoteRenderer')),
  embed: dynamic(() => import('./EmbedRenderer')),
  media: dynamic(() => import('./MediaRenderer')),
  pageAnchor: dynamic(() => import('./AnchorRenderer')),
  socialLinks: dynamic(() => import('./SocialLinksRenderer')),
  table: dynamic(() => import('./TableRenderer')),
  columns: dynamic(() => import('./ColumnsRenderer')),
  inlineCTA: dynamic(() => import('@components/Archive/InlineCTA')),
}

export default RendererList
