const typeSizes = {
  '9xl': {
    fontSize: '4rem', // 64px
  },
  '8xl': {
    fontSize: '3.5rem', // 56px
  },
  '7xl': {
    fontSize: '2.875rem', // 46px
  },
  '6xl': {
    fontSize: '2.375rem', // 38px
  },
  '5xl': {
    fontSize: '2rem', // 32px
  },
  '4xl': {
    fontSize: '1.75rem', // 28px
  },
  '3xl': {
    fontSize: '1.5rem', // 24px
  },
  '2xl': {
    fontSize: '1.375rem', // 22px
  },
  xl: {
    fontSize: '1.25rem', // 20px
  },
  lg: {
    fontSize: '1.125rem', // 18px
  },
  base: {
    fontSize: '1rem', // 16px
  },
  sm: {
    fontSize: '0.875rem', // 14px
  },
  xs: {
    fontSize: '0.75rem', // 12px
  },
}

export const type = {
  fonts: {
    valueSerif: '"Value Serif", serif',
    apercuPro: '"Apercu Pro", sans-serif',
    spaceMono: '"Space Mono", monospace',
    base: '$fonts$apercuPro',
    heading: '$fonts$valueSerif',
    overline: '$fonts$apercuPro',
  },
  lineHeights: {
    s: 1.1,
    m: 1.2,
    l: 1.5,
    xl: 2,
    xxl: 3,
  },
  fontWeights: {
    ultraThin: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 700,
    black: 900,
  },
  letterSpacings: {
    s: '0.07em',
    m: '0.1em',
    l: '0.15em',
    xl: '0.2em',
  },
  fontSizes: {
    ...typeSizes,
    smallType: {
      ...typeSizes.sm,
      '@>s': typeSizes.base,
    },
    baseType: {
      ...typeSizes.base,
      '@>s': typeSizes.lg,
    },
    baseTypeAlt: {
      ...typeSizes.base,
      '@>s': typeSizes.lg,
    },
    baseTypeLarge: {
      ...typeSizes.lg,
      '@>s': typeSizes.xl,
      '@>m': typeSizes['3xl'],
      lh: '$lineHeights$l',
    },
    subHeading: {
      ...typeSizes.lg,
      '@>s': typeSizes.xl,
      '@>l': typeSizes['2xl'],
      lh: '$lineHeights$m',
    },
    subHeadingAlt: {
      ...typeSizes.base,
      '@>s': typeSizes.lg,
      lh: '$lineHeights$m',
    },
    h1Alt: {
      ...typeSizes['5xl'],
      '@>m': typeSizes['6xl'],
      '@>l': typeSizes['7xl'],
      lh: '$lineHeights$m',
    },
    h1: {
      ...typeSizes['5xl'],
      '@>s': typeSizes['7xl'],
      '@>m': typeSizes['8xl'],
      lh: '$lineHeights$m',
    },
    h2: {
      ...typeSizes['4xl'],
      '@>s': typeSizes['6xl'],
      '@>m': typeSizes['7xl'],
      lh: '$lineHeights$m',
    },
    h3: {
      ...typeSizes['3xl'],
      '@>s': typeSizes['4xl'],
      '@>m': typeSizes['5xl'],
      lh: '$lineHeights$m',
    },
    h4: {
      ...typeSizes['2xl'],
      '@>s': typeSizes['3xl'],
      '@>m': typeSizes['4xl'],
      lh: '$lineHeights$m',
    },
    h5: {
      ...typeSizes.xl,
      '@>s': typeSizes['2xl'],
      '@>m': typeSizes['3xl'],
      lh: '$lineHeights$m',
    },
    h6: {
      ...typeSizes.lg,
      '@>s': typeSizes.xl,
      '@>m': typeSizes['2xl'],
      lh: '$lineHeights$m',
    },
    h1Blog: {
      ...typeSizes['4xl'],
      '@>s': typeSizes['6xl'],
      '@>m': typeSizes['7xl'],
      lh: '$lineHeights$m',
    },
    h2Blog: {
      ...typeSizes['4xl'],
      '@>s': typeSizes['5xl'],
      '@>m': typeSizes['6xl'],
      lh: '$lineHeights$m',
    },
    h3Blog: {
      ...typeSizes['3xl'],
      '@>s': typeSizes['4xl'],
      '@>m': typeSizes['5xl'],
      lh: '$lineHeights$m',
    },
    h4Blog: {
      ...typeSizes['2xl'],
      '@>s': typeSizes['3xl'],
      '@>m': typeSizes['4xl'],
      lh: '$lineHeights$m',
    },
    h5Blog: {
      ...typeSizes.xl,
      '@>s': typeSizes['2xl'],
      '@>m': typeSizes['3xl'],
      lh: '$lineHeights$m',
    },
    h6Blog: {
      ...typeSizes.lg,
      '@>s': typeSizes.xl,
      '@>m': typeSizes['2xl'],
      lh: '$lineHeights$m',
    },
    heroCustomer: {
      ...typeSizes['2xl'],
      '@>s': typeSizes['5xl'],
      '@>m': typeSizes['6xl'],
      '@>l': typeSizes['7xl'],
      lh: '$lineHeights$m',
    },
    heroCareers: {
      ...typeSizes['2xl'],
      '@>s': typeSizes['4xl'],
      '@>m': typeSizes['5xl'],
      '@>l': typeSizes['6xl'],
      lh: '$lineHeights$s',
    },
    headingRelated: {
      ...typeSizes['4xl'],
      '@>m': typeSizes['5xl'],
      lh: '$lineHeights$m',
    },
    button: {
      ...typeSizes.base,
    },
    buttonAlt: {
      ...typeSizes.base,
      '@>s': typeSizes.lg,
    },
    buttonSm: typeSizes.sm,
    captionFeature: {
      ...typeSizes.xs,
      '@>s': typeSizes.base,
      lh: '$lineHeights$l',
    },
    captionSm: {
      ...typeSizes.xs,
      lh: '$lineHeights$l',
    },
    breadcrumbs: typeSizes.xs,
    blogMetaFeature: typeSizes.sm,
    blogMeta: {
      ...typeSizes.xs,
      '@>s': typeSizes.sm,
    },
    blogCard: {
      ...typeSizes.sm,
      '@>s': typeSizes.base,
      '@>m': typeSizes.lg,
      lh: '$lineHeights$l',
    },
    input: {
      fontSize: '1rem',
      '@>s': typeSizes.sm,
    },
    overline: {
      ...typeSizes.xs,
    },
    headlineSupertitle: {
      ...typeSizes.xs,
    },
    overlineHighlighted: {
      ...typeSizes.xs,
    },
    cardHeading: {
      ...typeSizes.base,
    },
    cardPreviousNext: {
      ...typeSizes.sm,
      '@>s': typeSizes.base,
      '@>m': typeSizes.lg,
      lh: '$lineHeights$m',
    },
  },
  fontStyles: {
    baseType: {
      fontFamily: '$base',
      fontWeight: '$normal',
    },
    baseTypeAlt: {
      fontFamily: '$base',
      fontWeight: '$normal',
    },
    baseTypeLarge: {
      c: '$text',
    },
    subHeading: {
      fontFamily: '$base',
      fontWeight: '$normal',
    },
    subHeadingAlt: {
      fontFamily: '$base',
      fontWeight: '$bold',
    },
    h1Alt: {
      fontWeight: '$medium',
      fontFamily: '$heading',
    },
    h1: {
      fontWeight: '$medium',
      fontFamily: '$heading',
    },
    h2: {
      fontWeight: '$medium',
      fontFamily: '$heading',
    },
    h3: {
      fontWeight: '$medium',
      fontFamily: '$heading',
    },
    h4: {
      fontWeight: '$medium',
      fontFamily: '$heading',
    },
    h5: {
      fontWeight: '$medium',
      fontFamily: '$heading',
    },
    h6: {
      fontWeight: '$medium',
      fontFamily: '$heading',
    },
    h1Blog: {
      fontWeight: '$medium',
      fontFamily: '$heading',
    },
    h2Blog: {
      fontWeight: '$medium',
      fontFamily: '$heading',
    },
    h3Blog: {
      fontWeight: '$medium',
      fontFamily: '$heading',
    },
    h4Blog: {
      fontWeight: '$medium',
    },
    h5Blog: {
      fontWeight: '$medium',
    },
    h6Blog: {
      fontWeight: '$medium',
    },
    heroCustomer: {},
    heroCareers: {
      fontWeight: '$normal',
      fontFamily: '$heading',
    },
    button: {
      fontWeight: '$normal',
      fontFamily: '$base',
    },
    buttonSm: {
      fontWeight: '$medium',
      fontFamily: '$base',
    },
    caption: {
      fontWeight: '$normal',
      fontFamily: '$base',
    },
    captionFeature: {
      fontWeight: '$normal',
      fontFamily: '$base',
      '@>s': {
        fontWeight: '$medium',
      },
    },
    captionSm: {
      fontWeight: '$normal',
      fontFamily: '$base',
    },
    breadcrumbs: {
      fontWeight: '$normal',
      fontFamily: '$base',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
    },
    blogCard: {
      fontWeight: '$medium',
      fontFamily: '$base',
    },
    input: {
      fontWeight: '$normal',
      fontFamily: '$base',
    },
    overline: {
      fontWeight: '$medium',
      fontFamily: '$overline',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
    },
    headlineTitle: {
      fontFamily: '$heading',
      letterSpacing: '-0.03125rem',

      '@<headlineSection': {
        letterSpacing: 0,
      },

      variants: {
        noPadding: {
          true: { mb: 0 },
          false: { mb: '1.5rem' },
        },
      },
    },
    headlineSubtitle: {
      fontStyle: 'h3',
    },
    headlineSupertitle: {
      typeStyles: 'overline',
      c: '$gray10',
    },
    overlineHighlighted: {
      typeStyles: 'overline',
      c: '$darkBlue',
      p: '4px 8px',
      br: '3px',
      bc: '$tealLight',
      display: 'table',
    },
    cardHeading: {
      fontWeight: '$medium',
      fontFamily: '$base',
    },
    cardPreviousNext: {
      fontFamily: '$base',
      fontWeight: '$medium',
    },
  },
}

export default type
