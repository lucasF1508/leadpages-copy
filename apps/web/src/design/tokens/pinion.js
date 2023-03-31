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
      banner: {
        px: 'unset',
        '> div': {
          maxWidth: '$base',
        },
      },
      cards: {
        '> div': {
          maxWidth: '$base',
        },
      },
      cardsArticle: {
        px: 'unset',
        my: 'unset',
        '> div': {
          maxWidth: 'none',
        },
      },
      cardsComparison: {
        bc: '$grayAlt',
        px: 'unset',
        my: 'unset',

        '> div': {
          maxWidth: '$extended',
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
      gallery: {
        '> div': {
          maxWidth: '$wide',
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
      listingBlock: {
        box: { property: 'my', multiplier: -0.5 },
        '> div': {
          maxWidth: '$base',
        },
      },
      linkList: {
        bc: '$gray',
        mb: 0,
        '> div': {
          maxWidth: '$extended',
        },
      },
      pricing: {
        px: 'unset',
        my: 'unset',
        '> div': {
          maxWidth: 'none',
        },
      },
      slider: {
        overflow: 'hidden',
        '> div': {
          maxWidth: '$base',
          align: 'center',
        },
      },
      stats: {
        mb: 'unset',
        px: 'unset',
        '> div': {
          mw: 'none',
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
      gray4: {
        bc: '$gray',
        my: 'unset',
        box: [{ property: 'py' }],
      },
      tan: {
        bc: '$backgroundAlt',
        my: 'unset',
        box: [{ property: 'py' }],
      },
      white: {
        bc: '$white',
        my: 'unset',
        box: [{ property: 'py' }],
      },
      lavender: {
        bc: '$lavenderLight',
        my: 'unset',
        box: [{ property: 'py' }],
      },
      teal: {
        bc: '$tealLight',
        my: 'unset',
        box: [{ property: 'py' }],
      },
      purple: {
        bc: '$purple',
        my: 'unset',
        box: [{ property: 'py' }],
      },
      navy: {
        bc: '$darkBlue',
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
      pricingWaves: {
        p: 'unset',
        m: 'unset',
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
