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
    maxWidth: '$content',
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
      embed: {
        '> div': {
          maxWidth: '$base',
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
