import dynamic from 'next/dynamic'

const MarksList = {
  align: dynamic(() => import('./AlignMarkRender')),
  link: dynamic(() => import('./LinkMarkRender')),
  textColorAlt: dynamic(() => import('./ColorMarkRender')),
  textColorHighlight: dynamic(() => import('./ColorMarkRender')),
  textColorHighlightAlt: dynamic(() => import('./ColorMarkRender')),
}

export default MarksList
