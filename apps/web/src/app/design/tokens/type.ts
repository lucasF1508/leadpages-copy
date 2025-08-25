import { generateTypography, prefixTypeObject } from '../utils/type'

const fonts = {
  inter: 'var(--font-inter, serif)',
  ['roc-grotesk-variable']: 'var(--font-roc-grotesk-variable, serif)',
  uxumvf: 'var(--font-uxumvf, serif)',
}

const fontFamily = {
  base: fonts['roc-grotesk-variable'],
  heading: fonts['roc-grotesk-variable'],
  title: fonts.uxumvf,
}

const fontWeight = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
}

const fontSizes = {
  '8xl': '5rem', // 80px
  '7xl': '4.5rem', // 72px
  '6xl': '4rem', // 64px
  '5xl': '3.5rem', // 56px
  '4xl': '3rem', // 48px
  '3xl': '2.5rem', // 40px
  '2xl': '2rem', // 32px
  xl: '1.5rem', // 24px
  lg: '1.25rem', // 20px
  md: '1.125rem', // 18px
  sm: '1rem', // 16px
  xs: '0.875rem', // 14px
  xxs: '0.75rem', // 12px
}

// TW defaults
const lineHeights = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
  '6xl': '5.25rem', // 84px
  '5xl': '4.5rem', // 72px
  '4xl': '4rem', // 64px
  '3xl': '3.5rem', // 56px
  '2xl': '3rem', // 48px
  xl: '3rem', // 40px
  lg: '2rem', // 32px
  md: '1.5rem', // 24px
  sm: '1.25rem', // 20px
  xxs: '.875rem', // 14px
  xxxs: '.75rem', // 12px
}

const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.02em',
  normal: '0em',
  wide: '0.1em',
  wider: '0.15em',
  widest: '0.2em',
}

// Straight porting from the design file
const types = {
  title: {
    t1: {
      fontSize: fontSizes['8xl'],
      lineHeight: 84 / 80,
    },
    t2: {
      fontSize: fontSizes['7xl'],
      lineHeight: 1,
    },
    t3: {
      fontSize: fontSizes['6xl'],
      lineHeight: 1,
    },
    t4: {
      fontSize: fontSizes['5xl'],
      lineHeight: 1,
    },
    t5: {
      fontSize: fontSizes['4xl'],
      lineHeight: 1,
    },
    t6: {
      fontSize: fontSizes['3xl'],
      lineHeight: 1,
    },
    t7: {
      fontSize: fontSizes['2xl'],
      lineHeight: 1,
    },
  },
  heading: {
    h1: {
      fontSize: fontSizes['2xl'],
      lineHeight: 40 / 32,
    },
    h2: {
      fontSize: fontSizes.xl,
      lineHeight: 32 / 24,
    },
    h3: {
      fontSize: fontSizes.lg,
      lineHeight: 24 / 20,
    },
    h4: {
      fontSize: fontSizes.md,
      lineHeight: 24 / 18,
    },
    h5: {
      fontSize: fontSizes.sm,
      lineHeight: 14 / 16,
    },
    h6: {
      fontSize: fontSizes.xs,
      lineHeight: 20 / 14,
    },
    h7: {
      fontSize: fontSizes.xxs,
      lineHeight: 26 / 12,
    },
  },
  stats: {
    lg: {
      fontSize: fontSizes['5xl'],
      lineHeight: 1,
    },
    md: {
      fontSize: fontSizes['3xl'],
      lineHeight: 1,
    },
    sm: {
      fontSize: fontSizes['2xl'],
      lineHeight: 1,
    },
  },
  body: {
    b1: {
      fontSize: fontSizes.lg,
      lineHeight: 32 / 20,
    },
    b2: {
      fontSize: fontSizes.md,
      lineHeight: 32 / 18,
    },
    b3: {
      fontSize: fontSizes.sm,
      lineHeight: 28 / 16,
    },
    b4: {
      fontSize: fontSizes.xs,
      lineHeight: 24 / 12,
    },
    b5: {
      fontSize: fontSizes.xxs,
      lineHeight: 24 / 12,
    },
  },
  overline: {
    xs: {
      fontSize: fontSizes.xs,
      lineHeight: 1,
    },
    xxs: {
      fontSize: fontSizes.xxs,
      lineHeight: 1,
    },
  },
  caption: {
    xs: {
      fontSize: fontSizes.xs,
      lineHeight: 20 / 14,
    },
    xxs: {
      fontSize: fontSizes.xxs,
      lineHeight: 20 / 12,
    },
  },
  quote: {
    lg: {
      fontSize: fontSizes['2xl'],
      lineHeight: 48 / 32,
    },
    md: {
      fontSize: fontSizes.xl,
      lineHeight: 40 / 24,
    },
    sm: {
      fontSize: fontSizes.lg,
      lineHeight: 32 / 20,
    },
    xs: {
      fontSize: fontSizes.sm,
      lineHeight: 24 / 16,
    },
  },
}

// Semantic mapping for main body typography sizes.
// Map type size primitives to these semantics keys for the body
const [bodySizes, bodyStyles] = generateTypography({
  // TODO add responsive typography sizes
  sizes: {
    'body-lg': types.body.b1,
    'body-md': types.body.b2,
    'body-sm': types.body.b3,
    'body-xs': types.body.b4,
    'body-xxs': types.body.b5,
  },
  styles: {
    default: {
      fontFamily: fontFamily.base,
      fontWeight: fontWeight.normal,
    },
  },
  defaults: {
    'body-md': 'body',
  },
})

const [titleSizes, titleStyles] = generateTypography({
  sizes: {
    'title-t1': types.title.t1,
    'title-t2': types.title.t2,
    'title-t3': types.title.t3,
    'title-t4': types.title.t4,
    'title-t5': types.title.t5,
    'title-t6': types.title.t6,
    'title-t7': types.title.t7,
  },
  styles: {
    default: {
      fontFamily: fontFamily.title,
      fontWeight: fontWeight.extrabold,
    },
  },
})

const [headingSizes, headingStyles] = generateTypography({
  // TODO add responsive typography sizes
  sizes: types.heading,
  styles: {
    default: {
      fontFamily: fontFamily.heading,
      fontWeight: fontWeight.medium,
    },
  },
})

const [overlineSizes, overlineStyles] = generateTypography({
  sizes: prefixTypeObject(types.overline, 'overline-'),
  styles: {
    default: {
      fontFamily: fontFamily.base,
      fontWeight: fontWeight.medium,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
    },
  },
})

const [captionSizes, captionStyles] = generateTypography({
  sizes: prefixTypeObject(types.caption, 'caption-'),
  styles: {
    default: {
      fontFamily: fonts.inter,
      fontWeight: fontWeight.normal,
    },
  },
})

const [quoteSizes, quoteStyles] = generateTypography({
  sizes: prefixTypeObject(types.quote, 'quote-'),
  styles: {
    default: {
      fontFamily: fontFamily.base,
      fontWeight: 350,
    },
  },
})

const [statSizes, statStyles] = generateTypography({
  sizes: prefixTypeObject(types.stats, 'stat-'),
  styles: {
    default: {
      fontFamily: fontFamily.title,
      fontWeight: fontWeight.thin,
    },
  },
})

const [buttonSizes, buttonStyles] = generateTypography({
  sizes: {
    button: types.heading.h5,
  },
  styles: {
    default: {
      fontFamily: fontFamily.heading,
      fontWeight: fontWeight.medium,
    },
  },
})

// TODO Update input typography sizes
const [inputSizes, inputStyles] = generateTypography({
  sizes: {
    input: {
      ...bodySizes['body-md'],
      fontSize: '1rem', // Set to 16px on mobile to prevent IOS zoom on input focus
    },
  },
  styles: {
    default: {
      fontFamily: fontFamily.base,
      fontWeight: fontWeight.normal,
    },
  },
})

// Semantic mapping for all typography sizes. Map the above primitives to these keys.
// Use breakpoint keys as required to have consistent responsive typography.
// Primitives are also add for edge case use.
const typeSizes = {
  ...bodySizes,
  ...titleSizes,
  ...headingSizes,
  ...overlineSizes,
  ...buttonSizes,
  ...inputSizes,
  ...captionSizes,
  ...quoteSizes,
  ...statSizes,
}

// Semantic mapping for Typography Styles.
const typeStyles = {
  ...titleStyles,
  ...bodyStyles,
  ...headingStyles,
  ...overlineStyles,
  ...buttonStyles,
  ...inputStyles,
  ...captionStyles,
  ...quoteStyles,
  ...statStyles,
}

export const type = {
  fontFamily,
  fontSize: fontSizes,
  fontWeight,
  fonts,
  letterSpacing,
  lineHeight: lineHeights,
  typeSizes,
  typeStyles,
}
