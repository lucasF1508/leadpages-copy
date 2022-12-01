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
      ctaInline: {
        px: 'unset',
        my: 'unset',
        '> div': {
          maxWidth: 'none',
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
      archivePage: {
        px: 'unset',
        my: '$8',

        '> div': {
          align: 'none',
          maxWidth: '$narrow',
          mx: 'auto',
          px: '$2_5',

          '@>m': {
            maxWidth: '$base',
            px: '$5',
            pl: '$11',
          },
        },
      },
    },
    align: getAlignmentUtil('> div'),
    maxWidth: getMaxWidthUtil('> div'),
    width: {
      default: {
        '> div': {
          maxWidth: '$base',
        },
      },
    },
    backgroundColor: {
      gray: {
        bc: '$grayAlt',
        my: 'unset',
        box: [{ property: 'py' }],
      },
      tan: {
        bc: '$backgroundAlt',
        my: 'unset',
        box: [{ property: 'py' }],
      },
    },
    legacyComponent: {
      customerQuoteKailei: {
        px: 'unset',
        my: 'unset',
        '> div': {
          maxWidth: 'none',
        },
      },
      customerStoriesThumbnailRotator: {
        px: 'unset',
        my: 'unset',
        '> div': {
          maxWidth: 'none',
        },
      },
    },
  },
  compoundVariants: [
    {
      backgroundColor: 'gray',
      component: 'featureGrid',
      css: {
        py: '0',
      },
    },
  ],
}
