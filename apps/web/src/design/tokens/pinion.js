import { getAlignmentUtil } from '../utils/align'
import { getMaxWidthUtil } from '../utils/maxWidth'

export const pinionTokens = {
  position: 'relative',
  w: '100%',
  box: [
    { property: 'px' },
    {
      property: 'my',
    },
  ],
  '> div': {
    maxWidth: '$base',
    align: 'center',
  },
  variants: {
    component: {
      cards: {
        '> div': {
          maxWidth: '$base',
        },
      },
      cardsBlock: {
        '> div': {
          maxWidth: '$base',
        },
      },
      customerRotator: {
        '@<m': {
          px: 'unset',
        },
      },
      embed: {
        '> div': {
          maxWidth: '$base',
        },
      },
      featureGrid: {
        px: 'unset',
        my: 'unset',
        '> div': {
          maxWidth: 'none',
        },
      },
      featuredTemplates: {
        px: 'unset',
        my: 'unset',
        '> div': {
          maxWidth: 'none',
        },
      },
      imageSlider: {
        overflow: 'hidden',
        '> div': {
          maxWidth: '$base',
        },
      },
      logoGrid: {
        '> div': {
          maxWidth: '$base',
        },
      },
      mediaWithText: {
        '> div': {
          maxWidth: '$extended',
        },
      },
      gallery: {
        '> div': {
          maxWidth: '$wide',
        },
      },
      slider: {
        overflow: 'hidden',
        '> div': {
          maxWidth: '$base',
          align: 'center',
        },
      },
      tableBlock: {
        '> div': {
          maxWidth: '$base',
        },
      },
      tabs: {
        overflow: 'hidden',
      },
      testimonials: {
        px: 'unset',
        my: 'unset',
        '> div': {
          maxWidth: 'none',
        },
      },
      video: {
        '> div': {
          maxWidth: '$base',
        },
      },
    },
    align: getAlignmentUtil('> div'),
    maxWidth: getMaxWidthUtil('> div'),
  },
}
